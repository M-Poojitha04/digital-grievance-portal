import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NewComplaint from "./pages/NewComplaint";
import Profile from "./pages/Profile";

<Route path="/profile" element={<Profile />} />
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-complaint" element={<NewComplaint />} />
    </Routes>
  );
}

export default App;