import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style";
import { Link } from "react-router-dom";
import { faBell, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <Style>
      <div className="header">
        <div className="wrapper">
          <div className="headerWrapper flex justifyBetween alignCenter mt-4 mb-4">
            <div className="logoSide flex alignCenter justifyCenter gap-4">
              <Link to="/">
                <img
                  className="logo"
                  src="/assets/images/logo/logo-light.png"
                  alt="logo"
                />
              </Link>
              <div className="btnFavoriteMovies relative ">
                <Link to="#">
                  <span className="favCount absolute">0</span>
                  <div className="heartIcon ">
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="usersSide flex alignCenter justifyCenter gap-4">
              <Link to="#">
                <span></span>
                <div className="bellIcon">
                  <FontAwesomeIcon className="icon" icon={faBell} />
                </div>
              </Link>
              <div className="userBox flex alignCenter justifyCenter gap-2">
                <h4 className="text">Sign Up here</h4>
                <img
                  className="avatar"
                  src="/assets/images/logo/image_2024-05-14_19-52-27.png"
                  alt="user"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
