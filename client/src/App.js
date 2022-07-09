import Navbar from "./pages/Navbar";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import AllCategories from "./components/AllCategories";
import CategoryDetail from "./components/CategoryDetail";

function App() {
  return (
    // <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="create" element={<Create />} />
        <Route path="allcategories" element={<AllCategories />} />
        <Route path="/products/details/:id" element={<CategoryDetail />} />
        <Route path="products/edit/:id" element={<Create />} />
        {/* <Route path="posts" element={<Posts />} /> */}
      </Routes>
    </Router>
    // </BrowserRouter>
  );
}

export default App;
