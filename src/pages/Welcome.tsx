
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../utils/storage";
import AuthForm from "../components/AuthForm";

const Welcome = () => {
  const [hasProfile, setHasProfile] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<{email: string, name: string} | null>(null);
  
  useEffect(() => {
    const profile = getProfile();
    setHasProfile(profile !== null);
    
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className="resq-container min-h-[80vh] flex flex-col items-center justify-center">
      {!showAuth ? (
        <>
          <div className="text-center mb-10 animate-slide-in">
            <div className="inline-flex items-center justify-center p-5 bg-gradient-to-b from-resq-50 to-resq-100 rounded-full mb-8 shadow-md animate-float">
              <Heart className="h-16 w-16 text-resq-500 fill-resq-100 animate-pulse-gentle" />
            </div>
            
            <h1 className="text-4xl font-bold mb-4 gradient-text">
              Welcome to ResQMe
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xs mx-auto">
              {user 
                ? `Hello, ${user.name}! Ready for your emergency profile?` 
                : "Let's make sure someone can help you if you ever need it."}
            </p>
            
            <div className="space-y-3">
              {user ? (
                hasProfile ? (
                  <>
                    <Link to="/profile">
                      <Button className="w-full bg-resq-500 hover:bg-resq-600 shadow-md">
                        View Your Profile
                      </Button>
                    </Link>
                    <Link to="/setup">
                      <Button variant="outline" className="w-full border-resq-200 hover:bg-resq-50">
                        Edit Your Profile
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      className="w-full text-resq-600 hover:text-resq-700 hover:bg-resq-50"
                      onClick={handleLogout}
                    >
                      Log Out
                    </Button>
                  </>
                ) : (
                  <Link to="/setup">
                    <Button className="w-full bg-resq-500 hover:bg-resq-600 shadow-md group">
                      Create Your Emergency Profile
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                )
              ) : (
                <>
                  <Button 
                    className="w-full bg-resq-500 hover:bg-resq-600 shadow-md group"
                    onClick={() => setShowAuth(true)}
                  >
                    Login / Register
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Link to="/setup">
                    <Button variant="outline" className="w-full border-resq-200 hover:bg-resq-50">
                      Continue Without Account
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mt-8">
            <div className="resq-card hover-card bg-gradient-to-br from-white to-resq-50 group">
              <div className="flex items-center mb-3">
                <div className="p-1.5 rounded-full bg-resq-100 mr-3 group-hover:bg-resq-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resq-600"><path d="m12 15 2 2 4-4"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                </div>
                <h3 className="text-sm font-semibold text-resq-700">Quick Access</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                One tap to your critical medical info and emergency contacts
              </p>
            </div>
            
            <div className="resq-card hover-card bg-gradient-to-br from-white to-resq-50 group">
              <div className="flex items-center mb-3">
                <div className="p-1.5 rounded-full bg-resq-100 mr-3 group-hover:bg-resq-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resq-600"><path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                </div>
                <h3 className="text-sm font-semibold text-resq-700">Works Offline</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Your information is stored locally, ready when needed
              </p>
            </div>
            
            <div className="resq-card hover-card bg-gradient-to-br from-white to-resq-50 group">
              <div className="flex items-center mb-3">
                <div className="p-1.5 rounded-full bg-resq-100 mr-3 group-hover:bg-resq-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resq-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="text-sm font-semibold text-resq-700">Easy Setup</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Simple forms to add your medical information and contacts
              </p>
            </div>
            
            <div className="resq-card hover-card bg-gradient-to-br from-white to-resq-50 group">
              <div className="flex items-center mb-3">
                <div className="p-1.5 rounded-full bg-resq-100 mr-3 group-hover:bg-resq-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resq-600"><path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3"/><circle cx="18" cy="18" r="3"/><path d="m19.5 15.5-1.5 1-3.5-1.5v4.8"/></svg>
                </div>
                <h3 className="text-sm font-semibold text-resq-700">Shareable</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Create a QR code to share with family or emergency responders
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full max-w-md animate-slide-in">
          <button 
            onClick={() => setShowAuth(false)}
            className="mb-6 text-resq-600 hover:text-resq-700 flex items-center"
          >
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            Back to home
          </button>
          <div className="bg-white p-6 rounded-xl shadow-md border border-resq-100">
            <AuthForm />
          </div>
        </div>
      )}
      
      <footer className="text-center mt-12 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} ResQMe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Welcome;
