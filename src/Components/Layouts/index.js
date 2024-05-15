import { Fragment } from "react";
import Footer from "./Footer";
import MenuBar from "./MenuBar";
import Header from "./Header";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <MenuBar />
      {props.children}
      <Footer />
    </Fragment>
  );
}
