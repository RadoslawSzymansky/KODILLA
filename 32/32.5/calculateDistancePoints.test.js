const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

module.exports = () => describe('calculateDistancePoints', () => {
  describe('normal Hill', () => {

    describe('distance smaller than point K', () => {
      it('should return calculated points', () => {
        const actual = calculateDistancePoints(91.5, 'normal', 98);

        const expected = 47;

        assert.equal(actual, expected);
      });
    })

    describe('distane bigger than point K', () => {
      it('should return calculated points', () => {
        const actual = calculateDistancePoints(99.5, 'normal', 98);

        const expected = 63;

        assert.equal(actual, expected);
      });
    });
  });

  describe('big Hill', () => {

    describe('distance smaller than point K', () => {
      it('should return calculated points', () => {
        const actual = calculateDistancePoints(91.5, 'big', 98);

        const expected = 48.3;

        assert.equal(actual, expected);
      });
    })

    describe('distane bigger than point K', () => {
      it('should return calculated points', () => {
        const actual = calculateDistancePoints(99.5, 'big', 98);

        const expected = 62.7;

        assert.equal(actual, expected);
      });
    });

    
  });

  describe('huge Hill', () => {

    describe('distance smaller than point K', () => {
      it('should return calculated points', () => {
        const actual = calculateDistancePoints(91.5, 'huge', 98);

        const expected = 112.2;

        assert.equal(actual, expected);
      });
    })

    describe('distane bigger than point K', () => {
      it('should return calculated points', () => {
        const actual = calculateDistancePoints(99.5, 'huge', 98);

        const expected = 121.8;

        assert.equal(actual, expected);
      });
    });

  });

  describe('diffrent arguments', () => {
    it('should works for normal hillsize if is called  !== big, normal or huge', () => {
      const actual = calculateDistancePoints(91.5, 'bad', 98);

      const expected = 47;

      assert.equal(actual, expected);
    });

    it('should works if distance argument is string', () => {
      const actual = calculateDistancePoints('91.5', 'normal', 98);

      const expected = 47;

      assert.equal(actual, expected);
    });

    it('should works if pointK argument is string', () => {
      const actual = calculateDistancePoints(91.5, 'normal', '98');

      const expected = 47;

      assert.equal(actual, expected);
    });
  });
});