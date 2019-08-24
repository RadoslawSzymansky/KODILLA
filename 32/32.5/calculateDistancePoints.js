const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let multiply = 2;
  hillSize === 'big' ? multiply = 1.8 : null;
  hillSize === 'huge' ? multiply = 1.2 : null;

  const startPoints = hillSize === 'huge' ? 120 : 60;
  const disPoints =  (Number(distance) - Number(kPoint));
  return startPoints + disPoints * multiply;
};

module.exports = calculateDistancePoints;