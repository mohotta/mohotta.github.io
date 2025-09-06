import NavigationHeader from "./components/navigation/NavigationHeader";
import NavigationSidebar from "./components/navigation/NavigationSidebar";
import HomePage from "./components/main/HomePage";
import BottomRightPanel from "./components/BottomRightPanel";
import Resume from "./components/main/Resume";
import Portfolio from "./components/main/Portfolio";
import Articles from "./components/main/Articles";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import Blog from "./blog/page";

export default function Home() {
  // Detect which app instance is running based on environment variable
  const appMode = process.env.APP_MODE || 'portfolio';
  
  // If this is the blog instance, render the blog page
  if (appMode === 'blog') {
    return <Blog />;
  }
  
  // Default to portfolio
  return (
    <main className="p-4">
      <AnimatedBackground/>
      <NavigationHeader/>
      <NavigationSidebar/>
      <div className="lg:mx-[4.25rem]">
        <HomePage/>
        <Portfolio/>
        <Resume/>
        {/* <Articles/> */}
      </div>
      <Footer/>
      <BottomRightPanel/>
    </main>
  );

}
