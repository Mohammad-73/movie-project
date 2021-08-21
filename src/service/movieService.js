import request from "../helper/request";

function rateMovie(id, rate) {
  return request.post({ path: `movie/${id}/rating` }, { value: rate });
}

function rateTv(id, rate) {
  return request.post({ path: `tv/${id}/rating` }, { value: rate });
}

const movieService = {
  rateMovie,
  rateTv,
};

export default movieService;
