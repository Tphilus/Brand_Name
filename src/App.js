import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import TeaCollection from "./routes/TeaCollections";
import Accessories from "./routes/Accessories";
import Blog from "./routes/Blog";
import ContactUs from "./routes/ContactUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tea-collection" element={<TeaCollection />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
