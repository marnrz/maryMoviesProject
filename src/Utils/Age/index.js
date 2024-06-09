export function renderMAge(releaseDates) {
  const usRelease = releaseDates.find((release) => release.iso_3166_1 === "US");
  if (usRelease) {
    const certification = usRelease.release_dates.find(
      (date) => date.certification !== ""
    );
    return certification ? certification.certification : "Not Rated";
  }
  return "Not Rated";
}
export function renderSAge(ageData) {
  if (!ageData || ageData.length === 0) {
    return "No age rating available";
  }
  const ageRating = ageData.find((data) => data.iso_3166_1 === "RU");
  return ageRating ? ageRating.rating : "No age rating available";
}
export default renderMAge;
