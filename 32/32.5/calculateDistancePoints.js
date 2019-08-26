const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if(distance === undefined || !hillSize || !kPoint) return 'Wrong values';
  let multiply;
  if(hillSize === 'normal') multiply = 2;
  if(hillSize === 'big') multiply = 1.8;
  if(hillSize === 'huge')  multiply = 1.2;

  const startPoints = hillSize === 'huge' ? 120 : 60;
  const disPoints =  (Number(distance) - Number(kPoint));
  return startPoints + disPoints * multiply;
};

module.exports.calcPoints = calculateDistancePoints;