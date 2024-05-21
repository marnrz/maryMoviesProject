import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style";
import { Link } from "react-router-dom";
import { Space, Switch } from "antd";
import {
  UserAddOutlined,
  LoginOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Toggle from "../../../../Utils/Toggle/toggle";

export default function TopBar() {
  const [theme, setTheme] = useState(false);
  // [setTheme = "light"] = {
  //   lightTextColor: "#000",
  //   lightSignColor: "#000",
  //   lightSecondaryBackgroundColor: "#fff",
  //   lightPrimaryBackgroundColor: "#0B0B0F",
  // };
  return (
    <Style>
      <div className="header" setTheme={theme ? "light" : "dark"}>
        <div className="wrapper">
          <div className="headerWrapper flex justifyBetween alignCenter mt-4 mb-4  relative z-2">
            <div className="logoSide flex alignCenter justifyCenter gap-4">
              <Link to="/">
                <img
                  className="logo"
                  src="/assets/images/logo/logo-light.png"
                  alt="logo"
                />
              </Link>
              {/* <Toggle isChecked={theme} handleChange={() => setTheme(theme)} /> */}
              {/* <div className="changeMode"></div>
              <div className="btnChangeMode relative "></div> */}
            </div>
            <div className="usersSide flex alignCenter justifyCenter gap-5">
              <div className="btnSignIn flex alignCenter justifyCenter textCenter gap-1">
                <Link
                  to="#"
                  className="btn flex alignCenter justifyCenter textCenter gap-1"
                >
                  <p>Sign In</p>
                  <Space>
                    <LoginOutlined className="icon" />
                  </Space>
                </Link>
              </div>
              <div className="btnSignUp flex alignCenter justifyCenter textCenter gap-1">
                <Link
                  to="#"
                  className="btn flex alignCenter justifyCenter gap-1"
                >
                  <p>Sign Up</p>
                  <Space>
                    <UserAddOutlined className="icon" />
                  </Space>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
