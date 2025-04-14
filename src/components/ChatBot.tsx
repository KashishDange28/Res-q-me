import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { MessageSquare, Send, X, Bot, User, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your ResQMe assistant. I can help you with:\n\n• Emergency profile setup\n• Medical information guidance\n• Emergency contact management\n• QR code generation\n• General questions about ResQMe\n\nHow can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setError(null);

    try {
      const apiKey = import.meta.env.VITE_COHERE_API_KEY;
      if (!apiKey) {
        throw new Error('API key is missing. Please check your .env file.');
      }

      const response = await fetch('https://api.cohere.ai/v1/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          message: userMessage,
          chat_history: messages.map(msg => ({
            role: msg.role === 'user' ? 'USER' : 'CHATBOT',
            message: msg.content
          })),
          prompt_truncation: 'AUTO',
          connectors: [],
          search_queries_only: false,
          stream: false,
          temperature: 0.7,
          max_tokens: 150,
          preamble: `You are a helpful assistant for ResQMe, an emergency medical information app. 
          Your responses should be concise, helpful, and focused on emergency medical information, 
          profile setup, and emergency contacts. You can help users with:
          - Setting up their emergency profile
          - Managing medical information
          - Adding emergency contacts
          - Generating and sharing QR codes
          - Understanding app features
          Current language: ${i18n.language}`
        })
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to get response from Cohere');
      }

      if (!responseData.text) {
        throw new Error('Invalid response format from Cohere API');
      }

      const assistantMessage = responseData.text;
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `I'm sorry, but I encountered an error: ${errorMessage}\n\nPlease check your API key and try again.` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-resq-500 hover:bg-resq-600 text-white rounded-full p-3 shadow-lg animate-bounce"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[600px] flex flex-col">
          <div className="bg-resq-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6" />
              <h3 className="font-semibold text-lg">ResQMe Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-resq-600 rounded-full p-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-start gap-2 max-w-[85%]">
                  {message.role === 'assistant' && (
                    <div className="bg-resq-100 p-1.5 rounded-full">
                      <Bot className="h-5 w-5 text-resq-500" />
                    </div>
                  )}
                  <div
                    className={`rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-resq-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.content.split('\n').map((line, i) => (
                      <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                    ))}
                  </div>
                  {message.role === 'user' && (
                    <div className="bg-resq-100 p-1.5 rounded-full">
                      <User className="h-5 w-5 text-resq-500" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="bg-resq-100 p-1.5 rounded-full">
                    <Bot className="h-5 w-5 text-resq-500" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="bg-red-100 p-1.5 rounded-full">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-red-600">
                    {error}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-gray-50">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={t('chat.placeholder')}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-resq-500"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-resq-500 hover:bg-resq-600 text-white rounded-full p-2.5"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot; 