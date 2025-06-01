import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Heart, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="container max-w-2xl mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="bg-gradient-to-r from-resq-500 to-resq-600 rounded-full p-4 shadow-xl">
              <Heart className="h-12 w-12 text-white" />
            </div>
            <Shield className="absolute -top-2 -right-2 h-6 w-6 text-white bg-resq-600 rounded-full" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
          {t("header.title")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("index.tagline", "Your personal emergency response companion")}
        </p>
      </div>

      <div className="space-y-6">
        {user ? (
          <Link to="/profile">
            <Button className="w-full bg-resq-500 hover:bg-resq-600 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                {t("index.viewProfile", "View Profile")}
              </span>
            </Button>
          </Link>
        ) : (
          <Link to="/auth">
            <Button className="w-full bg-resq-500 hover:bg-resq-600 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                {t("auth.login")}
              </span>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Index;
