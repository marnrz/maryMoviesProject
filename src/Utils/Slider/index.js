import { Slider } from "antd";

const YearSlider = () => (
  <Slider
    range={{
      draggableTrack: true,
    }}
    defaultValue={[2024, 2020]}
    max={2024}
    min={1888}
    controlSize={37}
  />
);
export default YearSlider;

export const PointSlider = () => (
  <Slider
    range={{
      draggableTrack: true,
    }}
    defaultValue={[9.8, 1.0]}
    max={10.0}
    min={1.0}
    controlSize={10}
  />
);
