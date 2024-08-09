import axios from "axios";
import { useCallback, useEffect } from "react";
import Chip from "@mui/material/Chip"; // Import Chip from Material-UI

const Genres = ({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) => {
  const fetchGenres = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=86469c1f7e31b8ffd62dfd7b6e67becd&language=en-US`
      );
      setGenres(data.genres);
      console.log("Fetched genres:", data.genres); // For debugging purposes
    } catch (error) {
      console.error("Failed to fetch genres", error);
    }
  }, [type, setGenres]);

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  return (
    <div style={{ padding: "6px 0" }}>
      {genres.map((genre) => (
        <Chip
          key={genre.id} // Add a unique key for each Chip
          label={genre.name}
          clickable
          color={selectedGenres.includes(genre.id) ? "primary" : "default"} // Highlight selected genres
          onClick={() => {
            const newSelectedGenres = selectedGenres.includes(genre.id)
              ? selectedGenres.filter((id) => id !== genre.id) // Remove the genre if it's already selected
              : [...selectedGenres, genre.id]; // Add the genre if it's not selected
            console.log("Clicked genre:", genre.name); // Debugging line
            console.log("New selected genres:", newSelectedGenres); // Debugging line
            setSelectedGenres(newSelectedGenres);
            setPage(1); // Reset page to 1 on selection change
          }}
        />
      ))}
    </div>
  );
};

export default Genres;
