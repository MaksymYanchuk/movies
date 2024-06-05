export const getMovieTime = (seconds) => {
  const hours = Math.floor(seconds / 3600) + "h";
  const minutes = Math.floor((seconds % 3600) / 60) + "m";

  return {
    hours: hours,
    minutes: minutes,
  };
};
