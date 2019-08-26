const assert = require('assert');
const sinon = require('sinon');

const calculateTotalPoints = require('./calculateTotalPoints.js');
const styleModule = require('./calculateStylePoints.js');
const distanceModule = require('./calculateDistancePoints.js');

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

  describe('call functions', () => {
    it('should call calculateDistancePoints', () => {
      const spy = sinon.spy(distanceModule, "calcPoints");
      calculateTotalPoints(91.5, 'normal', 98, [0, 1, 2, 3, 4], 10, 0);

      assert.equal(spy.calledOnceWith(91.5), true);
    });

    it('should call calculateStylePoints', () => {
      const spy = sinon.spy(styleModule, "calcPoints");
      calculateTotalPoints(91.5, 'normal', 98, [0, 1, 2, 3, 4], 10, 0);

      assert.equal(spy.calledOnceWith([0, 1, 2, 3, 4]), true);
    });

  });
});