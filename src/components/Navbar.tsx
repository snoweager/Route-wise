import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, User, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = false; // Will be connected to auth state later

  const NavLinks = () => (
    <>
      <Link to="/route-planner">
        <Button variant="ghost" className="font-medium">
          Route Planner
        </Button>
      </Link>
      <Link to="/bookings">
        <Button variant="ghost" className="font-medium">
          My Trips
        </Button>
      </Link>
      {isAuthenticated ? (
        <Link to="/profile">
          <Button variant="outline" className="gap-2">
            <User className="h-4 w-4" />
            Profile
          </Button>
        </Link>
      ) : (
        <Link to="/auth">
          <Button className="bg-gradient-primary">Sign In</Button>
        </Link>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <MapPin className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">RouteWise</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
