import TopRated from "../../Components/AllMovies/TopRated";
import Holder from "../../Components/HolderSection";
import Layout from "../../Components/Layouts";
import YearSlider, { PointSlider } from "../../Utils/Slider";

export default function HomePage() {
  return (
    <Layout>
      <TopRated />
      <Holder />
    </Layout>
  );
}
