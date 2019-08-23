const formatDate = (timeInSeconds) => {

  hours = Math.floor(timeInSeconds / 3600);
  mins = Math.floor(timeInSeconds % 3600 / 60);
  seconds = Math.floor(timeInSeconds % 3600 - mins * 60);
  
  let result = [];
  hours ? result.push(`${hours}h `) : null;
  mins ? result.push(`${mins}m `) : null;
  seconds ? result.push(`${seconds}s`) : null;
  !timeInSeconds ? result.push(`0s `) : null;

  return result.join('').trim();
};

module.exports = formatDate;