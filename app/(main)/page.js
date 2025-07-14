import Hero from "../components/HeroCard/HeroCard";
import Counters from "../components/home/counters/Counters";
import CustomerServices from "../components/home/customerServices/CustomerServices";
import EducationCenter from "../components/home/EducationCenter/EducationCenter";
import Evenets from "../components/home/Events/Evenets";
import Partners from "../components/home/Partners/Partners";
import PopCourses from "../components/home/PopCourses/PopCourses";
import TestComponent from "../components/AnimatedAboutCard/AnimatedAboutCard";
import AnimatedAboutCard from "../components/AnimatedAboutCard/AnimatedAboutCard";
import MainSlider from "../components/home/MainSlider/MainSlider";

export default function Home() {
  return (
    <div className="d-flex flex-column gap-lg-5 gap-3">
      <MainSlider />
      <AnimatedAboutCard />
      <EducationCenter />
      <PopCourses />
      <CustomerServices />
      <Counters />
      <Partners />
      <Evenets />
    </div>
  );
}
