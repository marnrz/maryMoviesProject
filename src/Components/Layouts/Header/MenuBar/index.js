import {
  faFilm,
  faHeadphones,
  faHome,
  faUsersRectangle,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Style from "./style";
import Input from "antd/es/input/Input";
import { colorPallet } from "../../../../Theme/commonStyle";

export default function MenuBar() {
  const menuItems = [
    {
      title: "Home",
      icon: faHome,
      link: "/",
    },
    {
      title: "Movies",
      icon: faVideo,
      link: "/",
    },
    {
      title: "Series",
      icon: faFilm,
      link: "/",
    },
    {
      title: "Genres",
      icon: faUsersRectangle,
      link: "#",
    },
    {
      title: "Contact",
      icon: faHeadphones,
      link: "/",
    },
  ];

  function renderMenuItems() {
    return menuItems.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.link}>
            <span className="icon">
              <FontAwesomeIcon icon={item.icon} />
            </span>
            <h5>{item.title}</h5>
          </Link>
        </li>
      );
    });
  }
  return (
    <Style>
      <div className="menuBar relative z-2">
        <div className="wrapper">
          <div className="menuWrapper absolute">
            <ul className="list justifyBetween gap-6 flex">
              {renderMenuItems()}
            </ul>
            <Input
              className="input"
              placeholder="Search"
              addonBg="rgba(0, 0, 0, 0.02)"
              prefix={
                <SearchOutlined
                  style={{ color: `${colorPallet.primaryColor}` }}
                />
              }
            />
          </div>
        </div>
      </div>
    </Style>
  );
}
