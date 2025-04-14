import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

type AuthMode = 'login' | 'register';

const AuthForm = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === 'login') {
        // In a real app, we would authenticate with a backend
        // For now, we'll simulate a successful login
        localStorage.setItem('user', JSON.stringify({ email, name: email.split('@')[0] }));
        toast.success(t('auth.loginSuccess'));
        navigate('/setup');
      } else {
        // In a real app, we would register the user with a backend
        localStorage.setItem('user', JSON.stringify({ email, name }));
        toast.success(t('auth.registerSuccess'));
        navigate('/setup');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      toast.error(mode === 'login' ? t('auth.loginFailed') : t('auth.registerFailed'));
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-resq-100 max-w-md w-full mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-resq-800 mb-2">
          {mode === 'login' ? t('auth.welcomeBack') : t('auth.createAccount')}
        </h2>
        <p className="text-muted-foreground">
          {mode === 'login' 
            ? t('auth.loginDescription')
            : t('auth.registerDescription')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'register' && (
          <div>
            <Label htmlFor="name">{t('auth.fullName')}</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="resq-input mt-1"
              placeholder={t('auth.fullNamePlaceholder')}
              required
            />
          </div>
        )}

        <div>
          <Label htmlFor="email">{t('auth.email')}</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="resq-input mt-1"
            placeholder={t('auth.emailPlaceholder')}
            required
          />
        </div>

        <div>
          <Label htmlFor="password">{t('auth.password')}</Label>
          <div className="relative mt-1">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="resq-input pr-10"
              placeholder={t('auth.passwordPlaceholder')}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-resq-500 hover:bg-resq-600 mt-2"
          disabled={isLoading}
        >
          {isLoading ? (
            t('common.loading')
          ) : mode === 'login' ? (
            <>
              <LogIn className="mr-2 h-4 w-4" />
              {t('auth.login')}
            </>
          ) : (
            <>
              <UserPlus className="mr-2 h-4 w-4" />
              {t('auth.signUp')}
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          {mode === 'login' ? t('auth.noAccount') : t('auth.haveAccount')}
          <button
            type="button"
            onClick={toggleMode}
            className="ml-1 text-resq-600 hover:text-resq-700 hover:underline font-medium"
          >
            {mode === 'login' ? t('auth.signUp') : t('auth.login')}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
