import NavigationHeader from "./components/navigation/NavigationHeader";
import NavigationSidebar from "./components/navigation/NavigationSidebar";
import HomePage from "./components/main/HomePage";
import About from "./components/main/About";
import BottomRightPanel from "./components/BottomRightPanel";
import Resume from "./components/main/Resume";
import Portfolio from "./components/main/Portfolio";
import Articles from "./components/main/Articles";
import Contact from "./components/main/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";


export default function Home() {
  
  return (
    <main className="p-4">
      <AnimatedBackground/>
      <NavigationHeader/>
      <NavigationSidebar/>
      <div className="lg:mx-[4.25rem]">
        <HomePage/>
        <About/>
        <Resume/>
        <Portfolio/>
        {/* <Articles/> */}
        <Contact/>
      </div>
      <Footer/>
      <BottomRightPanel/>
    </main>
  );

}
