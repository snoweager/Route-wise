import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Navigation, Plus, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const RoutePlanner = () => {
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [waypoints, setWaypoints] = useState<string[]>([]);

  const addWaypoint = () => {
    setWaypoints([...waypoints, ""]);
  };

  const removeWaypoint = (index: number) => {
    setWaypoints(waypoints.filter((_, i) => i !== index));
  };

  const updateWaypoint = (index: number, value: string) => {
    const newWaypoints = [...waypoints];
    newWaypoints[index] = value;
    setWaypoints(newWaypoints);
  };

  const handlePlanRoute = () => {
    if (!startPoint || !endPoint) {
      toast.error("Please enter both start and end points");
      return;
    }
    toast.success("Route planned! Map integration will show the route here.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Route Planner</h1>
          <p className="text-muted-foreground">Plan your journey with intelligent route optimization</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Route Planning Form */}
          <div className="lg:col-span-1">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Plan Your Route</CardTitle>
                <CardDescription>Enter locations to find the best route</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="start" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Starting Point
                  </Label>
                  <Input
                    id="start"
                    placeholder="Enter starting location"
                    value={startPoint}
                    onChange={(e) => setStartPoint(e.target.value)}
                  />
                </div>

                {waypoints.map((waypoint, index) => (
                  <div key={index} className="space-y-2">
                    <Label className="flex items-center gap-2 justify-between">
                      <span className="flex items-center gap-2">
                        <Navigation className="h-4 w-4 text-secondary" />
                        Waypoint {index + 1}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeWaypoint(index)}
                        className="h-6 w-6 p-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </Label>
                    <Input
                      placeholder="Enter waypoint"
                      value={waypoint}
                      onChange={(e) => updateWaypoint(index, e.target.value)}
                    />
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={addWaypoint}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Waypoint
                </Button>

                <div className="space-y-2">
                  <Label htmlFor="end" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-destructive" />
                    Destination
                  </Label>
                  <Input
                    id="end"
                    placeholder="Enter destination"
                    value={endPoint}
                    onChange={(e) => setEndPoint(e.target.value)}
                  />
                </div>

                <Button onClick={handlePlanRoute} className="w-full bg-gradient-primary">
                  Plan Route
                </Button>
              </CardContent>
            </Card>

            {/* Route Info Card */}
            <Card className="mt-6 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg">Route Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Distance:</span>
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Traffic:</span>
                  <span className="font-semibold">-</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] shadow-elegant">
              <CardContent className="h-full p-0">
                <div className="h-full flex items-center justify-center bg-muted/30 rounded-lg">
                  <div className="text-center space-y-4 p-8">
                    <div className="flex justify-center">
                      <div className="h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center">
                        <MapPin className="h-10 w-10 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold">Map Integration Ready</h3>
                    <p className="text-muted-foreground max-w-md">
                      Interactive map will display here with your planned route, 
                      real-time traffic updates, and alternative suggestions.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      To enable map functionality, you'll need to add a Mapbox API key 
                      through Lovable Cloud settings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoutePlanner;
