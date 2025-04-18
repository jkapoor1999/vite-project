import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import EventDetails from "./pages/EventDetails";
import Events from "./pages/Events";
import Home from "./pages/Home";

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
