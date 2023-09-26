import Header from "./Header";
import { Outlet } from "react-router-dom";
import Header2 from "./pages/components/Header/Header";
import Footer from "./pages/components/Footer/Footer";
export default function Layout() {
  return (
    <main>
      {/* <Header /> */}
      <Header2 />
      <Outlet />
      <Footer />
    </main>
  );
}
