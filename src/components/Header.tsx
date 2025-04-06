
import { Heart, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [user, setUser] = useState<{email: string, name: string} | null>(null);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className="bg-white shadow-md py-3 mb-6 sticky top-0 z-10 backdrop-blur-sm bg-white/90">
      <div className="container max-w-md mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-r from-resq-500 to-resq-600 rounded-full p-1.5 group-hover:shadow-md transition-all">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-display font-bold gradient-text">ResQMe</h1>
        </Link>
        
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:inline bg-resq-50 py-1 px-3 rounded-full">
              {user.name}
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="text-resq-600 hover:text-resq-800 hover:bg-resq-50 p-2 rounded-full"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-resq-600 hover:text-resq-800 hover:bg-resq-50 p-2 rounded-full">
              <User className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
