export function renderRateColor(vote_average) {
  let color;
  if (vote_average >= 0 && vote_average < 4) {
    color = "red";
  } else if (vote_average >= 4 && vote_average < 7) {
    color = "orange";
  } else if (vote_average >= 7 && vote_average <= 10) {
    color = "green";
  } else {
    color = "black";
  }
  return color;
}
export default renderRateColor;
