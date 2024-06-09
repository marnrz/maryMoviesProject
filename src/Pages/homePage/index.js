import { useEffect } from "react";
import Holder from "../../Components/HomePageContent/Holder";
import SwiperTopRated from "../../Components/HomePageContent/SwiperSection";
import Layout from "../../Components/Layouts";

export default function HomePage() {
  useEffect(() => {
    document.title = "MaryMovie - Streaming TVShows and Movies Online";
  }, []);
  return (
    <Layout>
      <SwiperTopRated />
      <Holder />
    </Layout>
  );
}
