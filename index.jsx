import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetails from "./components/CountryDetails";



const root = createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} >
            <Route path="/" element={<Home/>}/>
            <Route path="/:country" element={<CountryDetails/>}/>
        </Route>
        <Route path="*" element={<Error/>} />
    </Routes>
  </BrowserRouter>
);
