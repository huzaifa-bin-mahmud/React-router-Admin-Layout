import { Outlet } from "react-router";
import Footer from "../conponents/main/Footer";
import Header from "../conponents/main/Header";

const Mainlayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
