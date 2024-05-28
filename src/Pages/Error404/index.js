import { Link } from "react-router-dom";

import { Button } from "antd";
import Header from "../../Components/Layouts/Header";
import { Fragment } from "react";
import Style from "./style";

export default function Error404() {
  return (
    <Style>
      <Header />
      <div className="error">
        <div className="errorPageContent flex justifyCenter alignCenter column z-2 relative">
          <div className="col-8 textCenter">
            <h1 className="mb-4">LOST YOUR WAY?</h1>
            <p className="mb-7">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link to="/">
              <Button size="large">
                {" "}
                <strong>Go Home </strong>
              </Button>
            </Link>
            <div className="errorCode mt-4">
              <span className="pl-2">Error Code : </span>
              <strong> 404 </strong>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
