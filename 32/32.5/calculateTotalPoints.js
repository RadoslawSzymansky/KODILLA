const distanceModul = require('./calculateDistancePoints');
const styleModule = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {

  const distancePoints = distanceModul.calcPoints(distance, hillSize, kPoint);
  const stylePoints = styleModule.calcPoints(styleNotes);

  return distancePoints + stylePoints  + Number(windFactor) + Number(gateFactor);
};

module.exports = calculateTotalPoints;