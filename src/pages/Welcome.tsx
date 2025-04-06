
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
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-b from-resq-50 to-resq-100 rounded-full mb-6">
              <Heart className="h-12 w-12 text-resq-500 fill-resq-100 animate-pulse-gentle" />
            </div>
            
            <h1 className="text-3xl font-bold mb-3 text-resq-800 bg-gradient-to-r from-resq-700 to-resq-500 bg-clip-text text-transparent">
              Welcome to ResQMe
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-xs mx-auto">
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
                    className="w-full bg-resq-500 hover:bg-resq-600 shadow-md"
                    onClick={() => setShowAuth(true)}
                  >
                    Login / Register
                    <ArrowRight className="ml-2 h-4 w-4" />
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
            <div className="resq-card bg-gradient-to-br from-white to-resq-50 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-semibold text-resq-700 mb-2">Quick Access</h3>
              <p className="text-sm text-muted-foreground">
                One tap to your critical medical info and emergency contacts
              </p>
            </div>
            
            <div className="resq-card bg-gradient-to-br from-white to-resq-50 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-semibold text-resq-700 mb-2">Works Offline</h3>
              <p className="text-sm text-muted-foreground">
                Your information is stored locally, ready when needed
              </p>
            </div>
            
            <div className="resq-card bg-gradient-to-br from-white to-resq-50 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-semibold text-resq-700 mb-2">Easy Setup</h3>
              <p className="text-sm text-muted-foreground">
                Simple forms to add your medical information and contacts
              </p>
            </div>
            
            <div className="resq-card bg-gradient-to-br from-white to-resq-50 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-semibold text-resq-700 mb-2">Shareable</h3>
              <p className="text-sm text-muted-foreground">
                Create a QR code to share with family or emergency responders
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full max-w-md">
          <button 
            onClick={() => setShowAuth(false)}
            className="mb-6 text-resq-600 hover:text-resq-700 flex items-center"
          >
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            Back to home
          </button>
          <AuthForm />
        </div>
      )}
    </div>
  );
};

export default Welcome;
