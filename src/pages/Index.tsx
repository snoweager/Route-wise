import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Route, Navigation, Clock, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: Route,
      title: "Smart Route Planning",
      description: "AI-powered route optimization for the fastest and most efficient journeys",
    },
    {
      icon: Navigation,
      title: "Real-Time Navigation",
      description: "Live traffic updates and alternative route suggestions on the go",
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Get accurate ETA predictions and avoid traffic congestion",
    },
    {
      icon: Shield,
      title: "Safe Routes",
      description: "Prioritize safety with well-lit and monitored route options",
    },
    {
      icon: MapPin,
      title: "Multi-Stop Planning",
      description: "Add unlimited waypoints and optimize the order automatically",
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description: "Receive real-time alerts about road conditions and delays",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground animate-fade-in">
              Plan Your Perfect Journey
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Intelligent route planning with real-time traffic updates, waypoint optimization, 
              and alternative route suggestions to get you there faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link to="/route-planner">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
                  Start Planning
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose RouteWise?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Advanced features designed to make your journey planning seamless and efficient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-14 w-14 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <feature.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Transform Your Travels?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of smart travelers who plan better routes every day
            </p>
            <Link to="/auth">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
