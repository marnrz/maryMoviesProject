import Layout from "../../Components/Layouts";
import { colorPallet } from "../../Theme/commonStyle";
import Style from "./style";
import { Collapse } from "antd";

export default function AboutUs() {
  const questionItems = [
    {
      key: "1",
      label: "How is MaryMovie free for me?",
      children:
        "Just as your library buys books to add to their collection for you to borrow, your library offers a variety of digital resources too - Kanopy is one of their more popular digital resources. Kanopy does not charge you because the public library or university covers all associated costs, allowing you to watch for free with no ads.",
    },
    {
      key: "2",
      label: "Why do I need a library card or university login to sign up?",
      children:
        "MaryMovie is only available through libraries, so you need to be a member of a participating library to start watching Kanopy.If you are a member of a participating public library, you can start watching by signing up with a valid public library card number and PIN/password.If you are a currently registered student or faculty member of a participating college university, you can start watching by signing up with a valid university login.",
    },
    {
      key: "3",
      label: "How do I know if my library or university offers MaryMovie?",
      children:
        "For public libraries, check to see if your library has made MaryMovie available here. Type in the name of your library, or enter your zip code to display nearby libraries that have made MaryMovie available.",
    },
    {
      key: "4",
      label: "How do I get started?",
      children:
        "Getting started is easy! Click here to find your library and enter your library card information or university login when prompted. Follow the simple instructions to create your MaryMovie account using your email address or Google login and then start watching.",
    },
    {
      key: "5",
      label: "What is MaryMovie Kids?",
      children:
        "MaryMovie Kids is our collection of movies and shows for kids available in public libraries only. Your public library offers unlimited plays in Kanopy Kids, so your kids are free to explore enriching, educational and entertaining films and TV series. Click here to check out Kanopy Kids!",
    },
  ];

  return (
    <Layout>
      <Style>
        {" "}
        <div className="contactUs">
          <div className="wrapperBox">
            <div className=" contactWrapper relative z-2">
              <div className="title  flex justifyCenter textCenter mb-5">
                <h1>About Us</h1>
              </div>
              <p className="text textCenter">
                "MaryMovie is the best video streaming service for quality,
                thoughtful entertainment. Find movies, documentaries, foreign
                films, classic cinema, independent films and educational videos
                that inspire, enrich and entertain. We partner with public
                libraries and universities to bring you an ad-free experience
                that can be enjoyed on your TV, mobile phone, tablets and
                online.
              </p>
              <div className="questionList mt-6">
                <div className="title  flex justifyCenter textCenter">
                  <h1 className="mb-5">Frequently Asked Questions</h1>
                </div>
                <Collapse
                  accordion
                  items={questionItems}
                  size="large"
                  style={{
                    color: `${colorPallet.darkTextColor}`,
                    backgroundColor: `${colorPallet.darkSecondaryBackgroundColor}`,
                    borderColor: `${colorPallet.primaryColor}`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Style>
    </Layout>
  );
}
