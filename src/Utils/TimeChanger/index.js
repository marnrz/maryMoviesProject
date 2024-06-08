export function runTime(num) {
  let time = num * 60;
  let hour = Math.trunc(time / 3600);
  let min = Math.trunc((time % 3600) / 60);

  let hourStr = hour > 0 ? `${hour} h` : "";
  let minStr = min > 0 ? `${min} m` : "";

  // Ensure proper spacing
  if (hourStr && minStr) {
    return `${hourStr} ${minStr}`;
  } else if (hourStr) {
    return hourStr;
  } else if (minStr) {
    return minStr;
  } else {
    return "";
  }
}

export default runTime;
