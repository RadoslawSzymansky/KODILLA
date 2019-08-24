const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints.js');

module.exports = () => describe('formatDate', () => {

  describe('bad values on extra points', () => {
    it('should return result if  windFactor is String', () => {
      const actual = calculateTotalPoints(91.5, 'normal', 98, [0, 1, 2, 3, 4], 0, '-10');

      const expected = 43;

      assert.equal(actual, expected);
    });

    it('should return result if  gateFactor is String', () => {
      const actual = calculateTotalPoints(91.5, 'normal', 98, [0, 1, 2, 3, 4], '-10', 0);

      const expected = 43;

      assert.equal(actual, expected);
    });

  });

  describe('extra points minus', () => {
    it('should return result if  - windFactor points', () => {
      const actual = calculateTotalPoints(91.5, 'normal', 98, [0, 1, 2, 3, 4], 0, -10);

      const expected = 43;

      assert.equal(actual, expected);
    });

    it('should return result if  - gateFactor points', () => {
      const actual = calculateTotalPoints(91.5, 'normal', 98, [0, 1, 2, 3, 4], -10, 0);

      const expected = 43;

      assert.equal(actual, expected);
    });

  });

  describe('extra points added', () => {
    it('should return result if  + windFactor points', () => {
      const actual = calculateTotalPoints(91.5, 'normal', 98, [0, 1, 2, 3, 4], 0, 10);

      const expected = 63;

      assert.equal(actual, expected);
    });

    it('should return result if  + gateFactor points', () => {
      const actual = calculateTotalPoints(91.5, 'normal', 98, [0, 1, 2, 3, 4], 10, 0);

      const expected = 63;

      assert.equal(actual, expected);
    });

  });
});