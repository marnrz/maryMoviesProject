import Layout from "../../Components/Layouts";
import HeroSinglePage from "../../Components/SinglePages/SingleMoviePage";
import Accordion from "../../Components/SinglePages/AccordionGroup";
import { useLocation } from "react-router-dom";

export default function SingleMovie() {
  const location = useLocation();
  return (
    <Layout>
      <HeroSinglePage />
      <Accordion />
    </Layout>
  );
}
