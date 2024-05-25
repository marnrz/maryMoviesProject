import { Fragment } from "react";
import Swiper from "swiper";
import SwiperTopRated from "./SwiperSection";
import Holder from "./Holder";

export default function HomePageContent() {
  return (
    <Fragment>
      <SwiperTopRated />
      <Holder />
    </Fragment>
  );
}
