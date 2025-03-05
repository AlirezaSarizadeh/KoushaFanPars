import Hero from "../components/HeroCard/HeroCard";
import Counters from "../components/home/counters/Counters";
import CustomerServices from "../components/home/CustomerServices/CustomerServices";
import EducationCenter from "../components/home/EducationCenter/EducationCenter";
import Evenets from "../components/home/Events/Evenets";
import Partners from "../components/home/Partners/Partners";
import PopCourses from "../components/home/PopCourses/PopCourses";
import TestComponent from "../components/TestComponent/testComponent";

export default function Home() {
  return (
    <div className="d-flex flex-column gap-lg-5 gap-3">
      {/* <Hero /> */}
      <EducationCenter />
      <TestComponent />
      <EducationCenter />
      <PopCourses />
      <CustomerServices />
      <Counters />
      <Partners />
      <Evenets />
    </div>
  );
}
