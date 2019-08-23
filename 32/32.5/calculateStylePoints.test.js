const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

module.exports = () => describe('calculateStylePoints', () => {
  describe('invalid data', () => {

    it('should return 0 if notes is not array', () => {
      const actual = calculateStylePoints({});

      const expected = 0;

      assert.equal(actual, expected);
    });

    it('should return 0 if notes is empty array', () => {
      const actual = calculateStylePoints([]);

      const expected = 0;

      assert.equal(actual, expected);
    });
  });


  describe('diffrent notes', () => {
    it('should return sum of 3 notes (without the biggest and the smallest one)', () => {
      const actual = calculateStylePoints([0, 3, 4, 9, 1]);

      const expected = 8;

      assert.equal(actual, expected);
    });
  });
  
  describe('the same notes', () => {

    it('should return 3*note, if each note is the same', () => {
      const actual = calculateStylePoints([1, 1, 1, 1, 1]);

      const expected = 3;

      assert.equal(actual, expected);
    });

    it('should return 0 if each note is 0', () => {
      const actual = calculateStylePoints([0, 0, 0, 0, 0]);

      const expected = 0;

      assert.equal(actual, expected);
    });
  })
});