export function formatMedia(media) {
  return {
    genres: media.genre_ids || media.genres,
    title: media.title || media.name,
    releaseDate: media.release_date || media.first_air_date,
    id: media.id,
    voteAverage: media.vote_average,
    posterPath: media.poster_path,
    backdropPath: media.backdrop_path,
    overview: media.overview,
    collections: media.belongs_to_collection,
    status: media.status,
    runtime: media.runtime,
    numberOfSeasons: media.number_of_seasons,
    homepage: media.homepage,
  };
}
