import {
  faFilm,
  faHeadphones,
  faHome,
  faMagnifyingGlass,
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
      link: "/m",
    },
    {
      title: "Series",
      icon: faFilm,
      link: "/s",
    },
    {
      title: "Genres",
      icon: faUsersRectangle,
      link: "/genres",
    },
    {
      title: "Contact",
      icon: faHeadphones,
      link: "/contact-us",
    },
    {
      title: "Search",
      icon: faMagnifyingGlass,
      link: "/search",
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
          <div className="menuWrapper  flex justifyBetween alignCenter">
            <ul className="list justifyBetween gap-6 flex">
              {renderMenuItems()}
            </ul>
          </div>
        </div>
      </div>
    </Style>
  );
}
