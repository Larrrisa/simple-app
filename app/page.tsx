import Image from "next/image";
import Navigation from "./components/navigation/navigation";
import Header from "./components/header/header";
import Recent from "./components/recent/recent";
import Featured from "./components/featured/featured";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="main">
      <Navigation />
      <Header />
      <Recent />
      <Featured />
      <Footer />
    </div>
  );
}
