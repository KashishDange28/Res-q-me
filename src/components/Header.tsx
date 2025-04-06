
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
    <header className="bg-white shadow-sm py-3 mb-6 sticky top-0 z-10">
      <div className="container max-w-md mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-resq-500 fill-resq-200" />
          <h1 className="text-xl font-display font-bold text-resq-700 bg-gradient-to-r from-resq-600 to-resq-500 bg-clip-text text-transparent">ResQMe</h1>
        </Link>
        
        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {user.name}
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="text-resq-600 hover:text-resq-800 p-1"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-resq-600 hover:text-resq-800 p-1">
              <User className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
