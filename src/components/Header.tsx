import { Heart, LogOut, User, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { useLanguage } from '../hooks/useLanguage';

const Header = () => {
  const [user, setUser] = useState<{email: string, name: string} | null>(null);
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    // Load saved language preference
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setCurrentLang(savedLang);
    }
  }, [i18n]);
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  const getCurrentLanguage = () => {
    return currentLang;
  };

  const getAvailableLanguages = () => {
    return [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
      { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
    ];
  };

  return (
    <header className="bg-white shadow-md py-3 mb-6 sticky top-0 z-10 backdrop-blur-sm bg-white/90">
      <div className="container max-w-md mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-r from-resq-500 to-resq-600 rounded-full p-1.5 group-hover:shadow-md transition-all">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-display font-bold gradient-text">{t('header.title')}</h1>
        </Link>
        
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-resq-600 hover:text-resq-800 hover:bg-resq-50 p-2 rounded-full">
                <Globe className="h-4 w-4" />
                <span className="ml-2 text-sm hidden sm:inline">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Language
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {getAvailableLanguages().map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center gap-2 ${currentLang === lang.code ? 'bg-resq-50' : ''}`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                  {currentLang === lang.code && (
                    <span className="ml-auto text-xs text-resq-500">✓</span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {user ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:inline bg-resq-50 py-1 px-3 rounded-full">
                {user.name}
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout}
                className="text-resq-600 hover:text-resq-800 hover:bg-resq-50 p-2 rounded-full"
                title={t('header.logout')}
              >
                <LogOut className="h-4 w-4" />
                <span className="ml-2 text-sm hidden sm:inline">{t('header.logout')}</span>
              </Button>
            </>
          ) : (
            <Link to="/setup">
              <Button variant="ghost" size="sm" className="text-resq-600 hover:text-resq-800 hover:bg-resq-50 p-2 rounded-full">
                <User className="h-4 w-4" />
                <span className="ml-2 text-sm hidden sm:inline">{t('header.login')}</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
