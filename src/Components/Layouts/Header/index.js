import { Fragment } from "react";
import TopBar from "./TopBar";
import MenuBar from "./MenuBar";
import Background from "./Background";

export default function Header() {
  return (
    <Fragment>
      <Background />
      <TopBar />
      <MenuBar />
    </Fragment>
  );
}
