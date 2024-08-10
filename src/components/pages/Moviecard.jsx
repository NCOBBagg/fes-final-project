import { useParams } from "react-router-dom";
import Nav from "../ui/Nav";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://www.omdbapi.com/?apikey=cca6a59";

function Moviecard() {
  const { id } = useParams();
  const [desc, setDesc] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fecthDesc() {
    try {
      const { data } = await axios.get(`${API_URL}&i=${id}`);
      setDesc(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fecthDesc();
  }, [id]);

  return (
    <>
      <Nav />
      <>
        <div className="movie__img--wrapper">
          <h1>{desc.Title}</h1>
          <img src={`${desc.Poster}`} alt="" />
        </div>
        <div className="movie__info--wrapper" key={desc.id}>
          <h3>
            <span className="red">Released: </span>{desc.Released}
          </h3>
          <h3>
            <span className="red">Actors: </span>{desc.Actors}
          </h3>
          <h3>
            <span className="red">Genre: </span>{desc.Genre}
          </h3>
          <h3>
            <span className="red">Director: </span>{desc.Director}
          </h3>
          <h3>
            <span className="red">Writer: </span>{desc.Writer}
          </h3>
          <h3>
            <span className="red">Language: </span>{desc.Language}
          </h3>
          <h3>
            <span className="red">Plot: </span>{desc.Plot}
          </h3>
        </div>
      </>
    </>
  );
}

export default Moviecard;
