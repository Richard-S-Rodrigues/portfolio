import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import Footer from "./components/Footer";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:postSlug" element={<BlogPost />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
