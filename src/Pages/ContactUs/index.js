import Layout from "../../Components/Layouts";
import { Button, Flex, Input } from "antd";
import Style from "./style";
import { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us - MaryMovie";
  }, []);
  const inputItems = [
    {
      title: "Where should we direct you?",
      Label: "Type Here...",
      star: "",
    },
    {
      title: "User Name",
      Label: "Type Here...",
      star: "*",
    },
    {
      title: "Phone Number",
      Label: "Type Here...",
      star: "",
    },
    {
      title: "E-mail",
      Label: "Type Here...",
      star: "*",
    },
  ];
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  const inputForm = () => {
    return inputItems.map((item, index) => {
      return (
        <li key={index}>
          <div className="title flex alignCenter gap-1">
            <h3 className="mt-2 mb-1">{item.title}</h3>
            <span className=" star mt-2">{item.star}</span>
          </div>
          <div className="input">
            <Input placeholder={item.Label} />
          </div>
        </li>
      );
    });
  };
  return (
    <Layout>
      <Style>
        {" "}
        <div className="contactUs">
          <div className="wrapperBox">
            <div className=" contactWrapper relative z-2">
              <div className="title  flex justifyCenter textCenter">
                <h1>Get In Touch</h1>
              </div>
              <p className="text textCenter mt-4">
                Hello, please complete the following form so we can assist you.
              </p>
              <div className="inputeBox flex justifyCenter gap-6 mt-6">
                <div className=" col-6 formBox">
                  <ul className="form">{inputForm()}</ul>
                  <div className="issue">
                    <div className="title flex alignCenter gap-1">
                      <h3 className="mt-2 mb-1">Message</h3>
                      <span className=" star mt-2">*</span>
                    </div>
                    <Flex vertical gap={32}>
                      <TextArea
                        showCount
                        maxLength={100}
                        onChange={onChange}
                        style={{
                          height: 120,
                        }}
                        placeholder="What's Your Issues..."
                      />
                    </Flex>
                  </div>
                </div>
                <div className="col-6 supportLinks">
                  <div className="quickLinks">
                    <h2 className="mb-2 mt-4">quick links</h2>
                    <ul>
                      <li>
                        <a href="#">Forgot your password?</a>
                      </li>
                      <li>
                        <a href="#">Update account information</a>
                      </li>
                      <li>
                        <a href="#">Upgrade to Plex Pass</a>
                      </li>
                      <li>
                        <a href="#">Find help in the forums</a>
                      </li>
                    </ul>
                  </div>
                  <div className="support ">
                    <h2 className="mb-2 mt-4">Technical Support</h2>
                    <p className="text mb-4">
                      We’re unable to offer technical support by email. For help
                      with issues you may be experiencing, we have a detailed
                      support library, answers to common questions, friendly
                      forums, and more.
                    </p>
                    <div className="buttonBox">
                      {" "}
                      <Button
                        type="primary"
                        size="small"
                        className="mb-2 textCenter"
                      >
                        Explore Resources
                      </Button>
                      <Button type="primary" size="small">
                        Press & Partners Contact
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Style>
    </Layout>
  );
}
