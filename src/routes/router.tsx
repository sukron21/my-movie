import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../component/pages/Home";
import { Category } from "../component/pages/Category";
import { Searching } from "../component/pages/Search";
import { Details } from "../component/pages/Details";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Route untuk login tanpa layout */}
        <Route path="/" element={<Home />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="search/:id" element={<Searching />} />
        <Route path="detail/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
