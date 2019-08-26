const assert = require('assert');
const styleModule = require('./calculateStylePoints');

module.exports = () => describe('calculate Style Points', () => {
  describe('invalid data', () => {

    it('should return 0 if notes is not array', () => {
      const actual = styleModule.calcPoints({});

      const expected = 'Function expects array with notes';

      assert.equal(actual, expected);
    });

    it('should return info if notes array is not equal 5', () => {
      const actual = styleModule.calcPoints([]);

      const expected = 'Array should have 5 notes';

      assert.equal(actual, expected);
    });

    it('should works if its array of strings' , () => {
      const actual = styleModule.calcPoints([ '1', '2', '3', '4', '5']);

      const expected = 9;

      assert.equal(actual, expected);
    });

    it('should return info that values must be from 0 to 20 if diffent', () => {
      const actual = styleModule.calcPoints(['-1', '2', '3', '4', 25]);

      const expected = 'Notes value can be only values from 0 to 20';

      assert.equal(actual, expected);
    });
    
  });
  
  describe('the same notes', () => {

    it('should return 3*note, if each note is the same', () => {
      const actual = styleModule.calcPoints([1, 1, 1, 1, 1]);

      const expected = 3;

      assert.equal(actual, expected);
    });

    it('should return 0 if each note is 0', () => {
      const actual = styleModule.calcPoints([0, 0, 0, 0, 0]);

      const expected = 0;

      assert.equal(actual, expected);
    });
  });

  describe('the decimal values', () => {

    it('should return 3*note, if each note is the same', () => {
      const actual = styleModule.calcPoints([1.5, 1.5, 1.5, 1.5, 1.5]);

      const expected = 4.5;

      assert.equal(actual, expected);
    });
  });
});