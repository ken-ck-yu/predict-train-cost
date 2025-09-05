import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">Teemo-Ops</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors">
            Integrations
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost">Sign In</Button>
          <Button variant="hero">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;