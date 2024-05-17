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

export default function TopBar() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
    console.log(`switch to ${checked}`);
  };
  return (
    <Style>
      <div className="header">
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
              <Switch
                checked={theme === "dark"}
                onChange={changeTheme}
                size="default "
                handleBg="red"
                trackHeight="26"
                trackPadding={15}
                checkedChildren={
                  <Space>
                    {" "}
                    <MoonOutlined />
                  </Space>
                }
                unCheckedChildren={
                  <Space>
                    <SunOutlined />
                  </Space>
                }
              />
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
