// App.js
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:event_id" element={<EventDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
