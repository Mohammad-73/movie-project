import useFetch from "./useFetch";

export default function useMovieDB(endPoint, query) {
  return useFetch({
    url: `https://api.themoviedb.org/3/${endPoint}`,
    query: {
      api_key: "afd6ea76f8c05c6675803101b0b04f2a",
      language: "en-US",
      ...query,
    },
  });
}
