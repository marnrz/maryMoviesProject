import {
  faFilm,
  faHeadphones,
  faHome,
  faUsersRectangle,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { Input, Space } from "antd";
import { Link } from "react-router-dom";

export default function MenuBar() {
  const menuItems = [
    {
      title: "Contact",
      icon: faHeadphones,
      link: "/",
    },
    {
      title: "Genres",
      icon: faUsersRectangle,
      link: "#",
    },
    {
      title: "Series",
      icon: faFilm,
      link: "/",
    },
    {
      title: "Movies",
      icon: faVideo,
      link: "/",
    },
    {
      title: "Home",
      icon: faHome,
      link: "/",
    },
  ];
  const { Search } = Input;
  const onSearch = (value) => {
    console.log(value);
  };

  function renderMenuItems() {
    return menuItems.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.link}>
            <Space className="icon">{item.icon}</Space>
            <h5>{item.title}</h5>
          </Link>
        </li>
      );
    });
  }
  return (
    <>
      <div className="menuBar relative z-2">
        <div className="wrapper">
          <div className="menuWrapper absolute flex">
            <div className="menu">
              <ul className="flex">{renderMenuItems()}</ul>
            </div>
            {/* <Link to="/">
              <Space direction="vertical">
                <Search
                  placeholder="search"
                  onSearch={onSearch}
                  enterButton="Search"
                  size="large"
                  style={{
                    width: 200,
                  }}
                />
              </Space>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
