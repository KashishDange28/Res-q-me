
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-3 mb-6 sticky top-0 z-10">
      <div className="container max-w-md mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-resq-500 fill-resq-200" />
          <h1 className="text-xl font-display text-resq-700">ResQMe</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
