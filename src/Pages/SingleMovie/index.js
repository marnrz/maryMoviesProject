import Layout from "../../Components/Layouts";
import HeroSinglePage from "../../Components/SinglePages/SingleMoviePage";
import Accordion from "../../Components/SinglePages/AccordionGroup";

export default function SingleMovie() {
  return (
    <Layout>
      <HeroSinglePage />
      <Accordion />
    </Layout>
  );
}
