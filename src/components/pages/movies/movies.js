import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Singlecontent from "../../SingleContent/Singlecontent";
import Custompagination from "../../pagination/custompagination";
import Genres from "../../Genres";
import useGenres from "../../../Hooks/useGenre";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const genreQuery = useGenres(selectedGenres);

  const fetchTrending = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=86469c1f7e31b8ffd62dfd7b6e67becd&page=${page}&with_genres=${genreQuery}`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error("Failed to fetch trending movies", error);
    }
  }, [page, genreQuery]);

  useEffect(() => {
    fetchTrending();
  }, [fetchTrending]);

  return (
    <>
      <span className="pageTitle">Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <Singlecontent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.release_date || c.first_air_date}
              media_type="movie"
              vote_average={c.vote_average}
              overview={c.overview}
            />
          ))}
      </div>
      <div>
        {numOfPages > 1 && (
          <Custompagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </div>
    </>
  );
};

export default Movies;
