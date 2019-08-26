const calculateStylePoints = notes => {
  if(!Array.isArray(notes)) return 'Function expects array with notes';
  if(notes.length !== 5) return 'Array should have 5 notes';
  if(!notes.every( note => Number(note) >= 0 && Number(note) < 21)) {
    return 'Notes value can be only values from 0 to 20'
  };

   return  (
     notes
      .map(x => Number(x))
      .sort((x, y) => x - y)
      .slice(1, 4)
      .reduce((x, y) => x + y)
   )
};

module.exports.calcPoints = calculateStylePoints;