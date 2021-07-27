export default function image(path, size = "original") {
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
