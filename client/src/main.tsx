import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { SignUp } from "./components/pages/singup/SignUp.tsx";
import SignIn from "./components/pages/signIn/ SignIn.tsx";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter >
    <Routes>
      <Route index element={<App/>}/>
      {/* <Route path="/singin" element={<SingIn/>}/> */}
      <Route path="/signup/" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>


    </Routes>
  </BrowserRouter>
);
