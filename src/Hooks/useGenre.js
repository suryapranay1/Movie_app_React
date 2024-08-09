const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const GenreIds = selectedGenres.map((g) => g.id);

  return GenreIds.join(","); // Use join to format genre IDs as a comma-separated string
};

export default useGenres;
