import Layout from "../../../Components/Layouts";
import HeroSingleSeriesPage from "../../../Components/SinglePages/SingleSeriesPage";
import SeriesAccordion from "../../../Components/SinglePages/AccordionGroup/Series";

export default function SingleSeries() {
  return (
    <Layout>
      <HeroSingleSeriesPage />
      <SeriesAccordion />
    </Layout>
  );
}
