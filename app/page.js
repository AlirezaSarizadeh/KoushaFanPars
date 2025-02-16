import Hero from "./components/Hero/Hero";
import EducationCenter from "./components/home/EducationCenter/EducationCenter";
import PopCourses from "./components/home/PopCourses/PopCourses";

export default function Home() {
  return (
    <div className="container-custom d-flex flex-column gap-lg-5 gap-3">
      <Hero />
      <EducationCenter />
      <PopCourses />
    </div>
  );
}
