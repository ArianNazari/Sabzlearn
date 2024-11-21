import './App.css';
import Courses from './Component/courses/Courses';
import MainTopBar from './Component/MainTopBar/MainTopBar';
import Topbat from './Component/TopBar/Topbat';
import FinishCourses from './Component/FinishCourses/FinishCourses';
import RoudMap from './Component/RoudMap/RoudMap';
import Popularcourses from './Component/Popularcourses/Popularcourses';
import HelpYou from './Component/HelpYou/HelpYou';
import Blog from './Component/Blog/Blog';
import MostpopularCorses from './Component/mostpopularCorses/MostpopularCorses';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <>
      <Topbat />
      <MainTopBar />
      <FinishCourses />
      <RoudMap />
      <Popularcourses />
      <HelpYou />
      <Popularcourses />
      <Blog />
      <MostpopularCorses />
      <Footer />
    </>
  );
}

export default App;
