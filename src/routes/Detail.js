import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const detail = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(detail.data.movie);
    setLoading(false);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} />
          <h1>
            <a href={movie.url}>{movie.title_long}</a>
          </h1>
          <div>{movie.rating}</div>
          <div>{movie.description_full}</div>
        </div>
      )}
    </div>
  );
}

export default Detail;
