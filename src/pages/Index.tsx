import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Heart } from "lucide-react";
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
    <div className="container max-w-md mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-resq-500 to-resq-600 rounded-full p-4">
            <Heart className="h-10 w-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-display font-bold gradient-text mb-2">
          {t("header.title")}
        </h1>
        <p className="text-muted-foreground">
          {t("index.tagline", "Your personal emergency response companion")}
        </p>
      </div>

      <div className="space-y-4">
        {user ? (
          <Link to="/profile">
            <Button className="w-full">{t("index.viewProfile", "View Profile")}</Button>
          </Link>
        ) : (
          <Link to="/auth">
            <Button className="w-full">{t("auth.login")}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Index;
