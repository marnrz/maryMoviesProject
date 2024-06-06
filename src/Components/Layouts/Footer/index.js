import Style from "./style";

const menuItem = [
  {
    title: "about",
    link: "/about-us",
    isBlank: false,
  },
  {
    title: "librarians",
    link: "#",
    isBlank: false,
  },
  {
    title: "carees",
    link: "#",
    isBlank: false,
  },
  {
    title: "press",
    link: "#",
    isBlank: false,
  },
  {
    title: "contact",
    link: "/contact-us",
    isBlank: false,
  },
  {
    title: "support",
    link: "#",
    isBlank: false,
  },
];
const availableItem = [
  {
    title: "iPad",
    link: "https://apps.apple.com/us/app/kanopy/id1205614510",
    icon: "/assets/images/icons/apple.svg",
    isBlank: true,
  },
  {
    title: "iPhone",
    link: "https://apps.apple.com/us/app/kanopy/id1205614510?platform=iphone",
    icon: "/assets/images/icons/apple.svg",
    isBlank: true,
  },
  {
    title: "Tv",
    link: "https://apps.apple.com/us/app/kanopy/id1205614510?platform=appleTV",
    icon: "/assets/images/icons/apple.svg",
    isBlank: true,
  },
  {
    link: "https://play.google.com/store/apps/details?id=com.kanopy",
    icon: "/assets/images/icons/android.svg",
    isBlank: true,
  },
  {
    link: "https://play.google.com/store/apps/details?id=com.kanopy.tvapp",
    icon: "/assets/images/icons/tv.svg",
    isBlank: true,
  },
  {
    link: "https://play.google.com/store/apps/details?id=com.kanopy.tvapp",
    icon: "/assets/images/icons/chrome.svg",
    isBlank: true,
  },
  {
    link: "https://channelstore.roku.com/en-gb/details/c2d7feca35f04ef68336038aedab3d01/kanopy",
    icon: "/assets/images/icons/Roku.svg",
    isBlank: true,
  },
  {
    link: "https://www.amazon.com/Kanopy/dp/B07HKPNGVD",
    icon: "/assets/images/icons/fire.svg",
    isBlank: true,
  },
  {
    link: "https://www.amazon.com/Kanopy/dp/B075SJCV38",
    icon: "/assets/images/icons/firetablet.svg",
    isBlank: true,
  },
  {
    link: "https://help.kanopy.com/en-us/4161.htm",
    icon: "/assets/images/icons/samsung.svg",
    isBlank: true,
  },
];
const socialIcons = [
  {
    link: "https://www.instagram.com/",
    icon: "/assets/images/icons/instagram.svg",
    isBlank: true,
  },
  {
    link: "https://twitter.com/",
    icon: "/assets/images/icons/twitter.svg",
    isBlank: true,
  },
  {
    link: "https://www.facebook.com/",
    icon: "/assets/images/icons/facebook.svg",
    isBlank: true,
  },
];
const legalItems = [
  {
    title: "Terms of Service",
    link: "#",
  },
  {
    title: "Privacy Policy",
    link: "#",
  },
  {
    title: "Cookies",
    link: "#",
  },
  {
    title: "Accessibility",
    link: "#",
  },
];
function renderFarm() {
  return menuItem.map((item, index) => {
    return (
      <li key={index}>
        <a
          target={item.isBlank ? "_blank" : "_self"}
          href={item.link}
          rel="noreferrer"
        >
          {item.title}
        </a>
      </li>
    );
  });
}
function available() {
  return availableItem.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.link}>
          <img src={item.icon} alt="" />
          {item.title}
        </a>
      </li>
    );
  });
}
function socialMedia() {
  return socialIcons.map((item, index) => {
    return (
      <li key={index}>
        <a
          target={item.isBlank ? "_blank" : "_self"}
          href={item.link}
          rel="noreferrer"
        >
          <img src={item.icon} alt="" />
        </a>
      </li>
    );
  });
}
function legal() {
  return legalItems.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      </li>
    );
  });
}
export default function Footer() {
  return (
    <Style>
      <div className="footer ">
        <div className="wrapperFull">
          <div className="footerWrapper flex justifyBetween alignCenter">
            <div className="left">
              <ul className="contact flex">{renderFarm()}</ul>
              <span className="flex">
                available on: <ul className="flex">{available()}</ul>
              </span>
            </div>
            <div className="right">
              <ul className="socialMedia flex alignCenter justifyCenter">
                {" "}
                {socialMedia()}
              </ul>
              <span className="flex">
                ©MaryMovie{" "}
                <ul className="legal flex justifyBetween">{legal()}</ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
