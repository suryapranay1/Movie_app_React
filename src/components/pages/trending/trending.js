import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import "./trending.css";
import Singlecontent from "../../SingleContent/Singlecontent";
import Custompagination from "../../pagination/custompagination";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  const fetchTrending = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=86469c1f7e31b8ffd62dfd7b6e67becd&page=${page}`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error("Failed to fetch trending content", error);
    }
  }, [page]);

  useEffect(() => {
    fetchTrending();
  }, [fetchTrending]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <Singlecontent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.release_date || c.first_air_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
              overview={c.overview}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <Custompagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Trending;
