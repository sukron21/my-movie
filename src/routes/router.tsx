import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../component/pages/Home";
import { Category } from "../component/pages/Category";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Route untuk login tanpa layout */}
        <Route path="/" element={<Home />} />
        <Route path="category/:id" element={<Category />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
