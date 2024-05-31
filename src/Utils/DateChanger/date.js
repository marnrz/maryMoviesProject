import { parseISO, format } from "date-fns";

export default function DateChanger({ dateString }) {
  try {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLL d, yyyy")}</time>;
  } catch (error) {
    console.log("Error parsing or formatting date:", error);
    <p>Error</p>;
  }
}
export function Year({ dateString }) {
  try {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, " yyyy")}</time>;
  } catch (error) {
    console.log("Error parsing or formatting date:", error);
    <p>Error</p>;
  }
}
