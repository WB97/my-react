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
  useEffect(() => {
    getMovie();
  }, []);
  return <div>{loading ? <h1>Loading</h1> : movie.id}</div>;
}

export default Detail;
