import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Style from "./style";

export default function SignUp() {
  const inputItems = [
    {
      label: "User Name",
    },
    {
      label: "PassWord",
    },
    {
      label: "Re-Password",
    },
    {
      label: "Phone Number",
    },
    {
      label: "Your Email",
    },
  ];
  const renderInputForm = () => {
    return inputItems.map((item, index) => {
      return (
        <li key={index}>
          <div className="inputBox mt-4">
            <Input
              className="input"
              placeholder={item.label}
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </div>
        </li>
      );
    });
  };
  return (
    <Style>
      <div className="signUpBox">
        <div className="wrapper">
          <div className="signUpWrapper">
            <div className="logoBox">
              <Link to="/" className="link">
                <img
                  className="logo mb-2"
                  src="/assets/images/logo/logo-light.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="titleHolder">
              <h2 className="text">Sign Up</h2>
            </div>
            <ul>{renderInputForm()}</ul>
          </div>
          <div className="btn flex alignCenter justifyCenter gap-2 mt-5">
            <Button type="primary" size="large">
              Sign In
            </Button>
            <Button size="large">Sign Up</Button>
          </div>
        </div>
      </div>
    </Style>
  );
}
