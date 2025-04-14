import { Heart, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../utils/storage";
import AuthForm from "../components/AuthForm";
import { useTranslation } from 'react-i18next';

const Welcome = () => {
  const { t } = useTranslation();
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
              {t('welcome.title')}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xs mx-auto">
              {user 
                ? t('welcome.greeting', { name: user.name })
                : t('welcome.description')}
            </p>
            
            <div className="space-y-3">
              {user ? (
                hasProfile ? (
                  <>
                    <Link to="/profile">
                      <Button className="w-full bg-resq-500 hover:bg-resq-600 shadow-md">
                        {t('welcome.viewProfile')}
                      </Button>
                    </Link>
                    <Link to="/setup">
                      <Button variant="outline" className="w-full border-resq-200 hover:bg-resq-50">
                        {t('welcome.editProfile')}
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      className="w-full text-resq-600 hover:text-resq-700 hover:bg-resq-50"
                      onClick={handleLogout}
                    >
                      {t('header.logout')}
                    </Button>
                  </>
                ) : (
                  <Link to="/setup">
                    <Button className="w-full bg-resq-500 hover:bg-resq-600 shadow-md group">
                      {t('welcome.createProfile')}
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
                    {t('welcome.loginRegister')}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Link to="/setup">
                    <Button variant="outline" className="w-full border-resq-200 hover:bg-resq-50">
                      {t('welcome.continueWithoutAccount')}
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <AuthForm onClose={() => setShowAuth(false)} />
      )}
    </div>
  );
};

export default Welcome;