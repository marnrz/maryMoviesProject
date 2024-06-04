import { Collapse, Space } from "antd";

export default function Accordion() {
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
          append_to_response: "similar,recommendations,images",
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
      label: "Casts",
      children: "",
    },
    {
      key: "3",
      label: "Similars",
      children: "",
    },
    {
      key: "4",
      label: "Recommendations",
      children: "",
    },
  ];
  //   function render
  const App = () => (
    <Space direction="vertical">
      <Collapse
        collapsible="header"
        defaultActiveKey={["1"]}
        items={[
          {
            key: "1",
            label: "This panel can only be collapsed by clicking text",
            children: <p>{text}</p>,
          },
        ]}
      />
      <Collapse
        collapsible="icon"
        defaultActiveKey={["1"]}
        items={[
          {
            key: "1",
            label: "This panel can only be collapsed by clicking icon",
            children: <p>{text}</p>,
          },
        ]}
      />
      <Collapse
        collapsible="disabled"
        items={[
          {
            key: "1",
            label: "This panel can't be collapsed",
            children: <p>{text}</p>,
          },
        ]}
      />
    </Space>
  );

  return (
    <>
      <div>hello</div>
    </>
  );
}
