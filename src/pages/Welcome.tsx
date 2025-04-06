
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../utils/storage";

const Welcome = () => {
  const [hasProfile, setHasProfile] = useState(false);
  
  useEffect(() => {
    const profile = getProfile();
    setHasProfile(profile !== null);
  }, []);

  return (
    <div className="resq-container min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-resq-50 rounded-full mb-6">
          <Heart className="h-12 w-12 text-resq-500 fill-resq-100 animate-pulse-gentle" />
        </div>
        
        <h1 className="text-3xl font-bold mb-3 text-resq-800">Welcome to ResQMe</h1>
        
        <p className="text-lg text-muted-foreground mb-6 max-w-xs mx-auto">
          Let's make sure someone can help you if you ever need it.
        </p>
        
        <div className="space-y-3">
          {hasProfile ? (
            <>
              <Link to="/profile">
                <Button className="w-full bg-resq-500 hover:bg-resq-600">
                  View Your Profile
                </Button>
              </Link>
              <Link to="/setup">
                <Button variant="outline" className="w-full">
                  Edit Your Profile
                </Button>
              </Link>
            </>
          ) : (
            <Link to="/setup">
              <Button className="w-full bg-resq-500 hover:bg-resq-600 group">
                Create Your Emergency Profile
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
        <div className="resq-card">
          <h3 className="text-sm font-semibold text-resq-700 mb-2">Quick Access</h3>
          <p className="text-sm text-muted-foreground">
            One tap to your critical medical info and emergency contacts
          </p>
        </div>
        
        <div className="resq-card">
          <h3 className="text-sm font-semibold text-resq-700 mb-2">Works Offline</h3>
          <p className="text-sm text-muted-foreground">
            Your information is stored locally, ready when needed
          </p>
        </div>
        
        <div className="resq-card">
          <h3 className="text-sm font-semibold text-resq-700 mb-2">Easy Setup</h3>
          <p className="text-sm text-muted-foreground">
            Simple forms to add your medical information and contacts
          </p>
        </div>
        
        <div className="resq-card">
          <h3 className="text-sm font-semibold text-resq-700 mb-2">Shareable</h3>
          <p className="text-sm text-muted-foreground">
            Create a QR code to share with family or emergency responders
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
