import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Navigation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Bookings = () => {
  const trips = [
    {
      id: 1,
      title: "Morning Commute",
      from: "Home",
      to: "Office Downtown",
      date: "2025-10-16",
      time: "08:00 AM",
      distance: "12.5 km",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Weekend Trip",
      from: "City Center",
      to: "Mountain Resort",
      date: "2025-10-18",
      time: "09:00 AM",
      distance: "85.2 km",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Shopping Route",
      from: "Home",
      to: "Mall Complex",
      date: "2025-10-14",
      time: "02:30 PM",
      distance: "8.3 km",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Trips</h1>
          <p className="text-muted-foreground">View and manage your planned routes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <Card key={trip.id} className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{trip.title}</CardTitle>
                  <Badge variant={trip.status === "upcoming" ? "default" : "secondary"}>
                    {trip.status}
                  </Badge>
                </div>
                <CardDescription className="flex items-center gap-2 mt-2">
                  <Navigation className="h-4 w-4" />
                  {trip.distance}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <p className="text-sm font-medium">From</p>
                      <p className="text-sm text-muted-foreground">{trip.from}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-destructive mt-1" />
                    <div>
                      <p className="text-sm font-medium">To</p>
                      <p className="text-sm text-muted-foreground">{trip.to}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {trip.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {trip.time}
                  </div>
                </div>

                {trip.status === "upcoming" && (
                  <Button className="w-full bg-gradient-primary">
                    View Details
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;
