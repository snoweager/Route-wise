RouteWise – Interactive Route Planning Tool
An interactive, map-driven journey planner that allows users to choose start & end locations, add waypoints, visualize optimized routes, and receive real-time traffic-aware suggestions.
This tool enhances user travel planning by providing intelligent routing and dynamic map interactions.
________________________________________
Features
=> Route Planning
•	Select start & end points
•	Add unlimited waypoints
•	View optimized routes
•	Drag markers to update path
=> Real-Time Traffic
•	Displays live congestion
•	Traffic-based ETA updates
•	Auto-suggests alternative routes
=> Map Interactions
•	Searchable location fields
•	Map zoom, drag, pan
•	Color-coded route layers
•	Multiple travel modes (Driving, Walking, etc.)
________________________________________
Tech Stack
Layer	Technology
Frontend	React 18 + TypeScript + Vite
Styling	TailwindCSS
Mapping	Mapbox / Leaflet / Google Maps
Backend (optional)	Supabase / Express
APIs	Directions API, Traffic API, Geocoding API
Deployment	Vercel / Netlify
State Management	React Hooks
________________________________________
Project Structure
Route_Wise_Task 4/
│── public/
│── src/
│   ├── pages/             # Route Planner UI
│   ├── components/        # Map, inputs, waypoint controls
│   ├── hooks/             # Map, directions, traffic logic
│   ├── integrations/      # Mapbox/Google API integration
│   ├── assets/
│   ├── App.tsx
│   └── main.tsx
│── index.html
│── tailwind.config.ts
│── package.json
________________________________________
Setup Instructions
1. Clone the Repository
git clone <repo_url>
cd Route_Wise_Task 4
2. Install Dependencies
npm install
3. Setup Environment Variables
Create a .env file:
VITE_MAPBOX_API_KEY=your_key
VITE_GOOGLE_MAPS_KEY=your_key
VITE_TRAFFIC_API_KEY=your_key
4. Start Development Server
npm run dev
5. Build for Production
npm run build
________________________________________
Core Modules Explained
1. Route Planner Page (pages/)
•	Location search (autocomplete)
•	Start, end, and waypoint input
•	Displays map & route details
2. Map Module
•	Renders map
•	Adds draggable markers
•	Draws route polylines
3. Directions Module
•	Calls Directions API
•	Returns distance, duration, geometry
4. Traffic Module
•	Polls traffic data
•	Displays congestion zones
•	Suggests alternate routes
________________________________________
Contributing
Pull requests are welcome!
Open an issue before major changes.
________________________________________
License
MIT License
________________________________________
Author
Padma Sindhoora Ayyagari
