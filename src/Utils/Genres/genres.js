export function renderMovieGenres(genre_ids) {
  const genreMap = {
    80: "Crime",
    10752: "War",
    12: "Adventure",
    16: "Animation",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10402: "Music",
    27: "Horror",
    18: "Drama",
    10751: "Family",
    36: "History",
    28: "Action",
    35: "Comedy",
    37: "Western",
    99: "Documentary",
    14: "Fantasy",
  };
  return genre_ids
    .slice(0, 3)
    .map((genre_id) => <p key={genre_id}>{genreMap[genre_id]}</p>);
}
export function renderSingleGenres(genres, i) {
  if (genres === undefined) return;
  return genres.map((cur, i) => {
    return (
      <p className="box " key={cur.id}>
        {i !== genres.length - 1 ? cur.name + ", " : cur.name}
      </p>
    );
  });
}
export default renderMovieGenres;
