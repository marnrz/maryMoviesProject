export function renderAge(releaseDates) {
  const usRelease = releaseDates.find((release) => release.iso_3166_1 === "US");
  if (usRelease) {
    const certification = usRelease.release_dates.find(
      (date) => date.certification !== ""
    );
    return certification ? certification.certification : "Not Rated";
  }
  return "Not Rated";
}
export default renderAge;
