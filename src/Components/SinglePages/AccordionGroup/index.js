import { Collapse, Space } from "antd";
import api from "../../../Utils/Api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Accordion() {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getMoviesApi();
  }, [id]); // Run effect only when id changes

  async function getMoviesApi() {
    try {
      setLoading(true);
      const response = await api.get(`movie/${id}`, {
        params: {
          language: "en-US",
          append_to_response: "credits,similar,images",
        },
      });
      setImages(response.data.images.backdrops.slice(0, 14));
      setSimilar(response.data.similar.results.slice(0, 9));
      setRecommendations(response.data.recommendations.results.slice(0, 9));
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  }
  const items = [
    {
      key: "1",
      label: "Casts",
      children: "",
    },
    {
      key: "2",
      label: "Images",
      children: "",
    },
    {
      key: "3",
      label: "Similars",
      children: "",
    },
  ];
  // function render
  //   const App = () => (
  //     <Space direction="vertical">
  //       <Collapse
  //         collapsible="header"
  //         defaultActiveKey={["1"]}
  //         items={[
  //           {
  //             key: "1",
  //             label: "This panel can only be collapsed by clicking text",
  //             children: <p>{text}</p>,
  //           },
  //         ]}
  //       />
  //       <Collapse
  //         collapsible="icon"
  //         defaultActiveKey={["1"]}
  //         items={[
  //           {
  //             key: "1",
  //             label: "This panel can only be collapsed by clicking icon",
  //             children: <p>{text}</p>,
  //           },
  //         ]}
  //       />
  //       <Collapse
  //         collapsible="disabled"
  //         items={[
  //           {
  //             key: "1",
  //             label: "This panel can't be collapsed",
  //             children: <p>{text}</p>,
  //           },
  //         ]}
  //       />
  //     </Space>
  //   );

  return (
    <>
      <div>hello</div>
    </>
  );
}
