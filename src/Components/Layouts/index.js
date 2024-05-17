import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
}
