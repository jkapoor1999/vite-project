// App.js
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout";
import Customers from "./pages/Customers";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </Layout>
  );
}

export default App;
