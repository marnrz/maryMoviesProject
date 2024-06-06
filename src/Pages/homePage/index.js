import HomePageContent from "../../Components/HomePageContent";
import Holder from "../../Components/HomePageContent/Holder";
import SwiperTopRated from "../../Components/HomePageContent/SwiperSection";
import Layout from "../../Components/Layouts";

export default function HomePage() {
  return (
    <Layout>
      <SwiperTopRated />
      <Holder />
    </Layout>
  );
}
