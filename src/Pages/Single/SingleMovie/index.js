import Layout from "../../../Components/Layouts";
import MovieAccordion from "../../../Components/SinglePages/AccordionGroup/Movie";
import HeroSingleMoviePage from "../../../Components/SinglePages/SingleMoviePage";
import { useLocation } from "react-router-dom";

export default function SingleMovie() {
  const location = useLocation();
  return (
    <Layout>
      <HeroSingleMoviePage />
      <MovieAccordion />
    </Layout>
  );
}
