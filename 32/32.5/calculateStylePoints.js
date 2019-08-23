const calculateStylePoints = notes => (
  Array.isArray(notes) && notes.length 
    ? notes
      .sort((x, y) => x - y)
      .slice(1, 4)
      .reduce((x, y) => x + y) 
    : 0
);

module.exports = calculateStylePoints;