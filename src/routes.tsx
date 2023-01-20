import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AboutMe />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};
