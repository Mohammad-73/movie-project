import request from "../helper/request";

function rateMovie(id, rate) {
  return request.post({ path: `movie/${id}/rating` }, { value: rate });
}

function rateTv(id, rate) {
  return request.post({ path: `tv/${id}/rating` }, { value: rate });
}

function favMedia(accountId, mediaType, mediaId, favStatus) {
  return request.post(
    { path: `account/${accountId}/favorite` },
    {
      media_type: mediaType,
      media_id: mediaId,
      favorite: favStatus,
    }
  );
}

const movieService = {
  rateMovie,
  rateTv,
  favMedia,
};

export default movieService;
