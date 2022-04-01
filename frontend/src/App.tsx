import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Basket from "./pages/Basket";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import RadioButtonSm from "./components/RadioButtonSm";
import { ChakraProvider } from "@chakra-ui/react";
import RadioButtonGroup from "./components/RadioButtonGroup";
import RadioButtonLg from "./components/RadioButtonLg";
import TimeSearch from "./pages/TimeSearch";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <Header />
      <div className="grow my-6 px-12 overflow-auto">
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Discover />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search/time" element={<TimeSearch />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
