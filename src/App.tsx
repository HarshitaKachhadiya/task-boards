import Dashboard from "./pages/Dashboard";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  AOS.init({
    duration: 1200,
    offset: 0,
    easing: "ease-in-out-back",
    once: true
  });

  return (
    <Dashboard />
  );
}

export default App;
