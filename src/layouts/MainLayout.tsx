import { Outlet } from "react-router-dom";
import FilmNavbar from "../components/NavBar";
import Footer from "../components/Footer";
type Props = {
  children?: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <FilmNavbar />
      <div className="p-4 flex-1 relative w-full">
        {children ? children : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
