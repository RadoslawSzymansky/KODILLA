const assert = require('assert');
const distanceModule = require('./calculateDistancePoints');

module.exports = () => describe('calcPoints', () => {
  describe('normal Hill', () => {

    describe('distance smaller than point K', () => {
      it('should return calculated points', () => {
        const actual = distanceModule.calcPoints(91.5, 'normal', 98);

        const expected = 47;

        assert.equal(actual, expected);
      });
    })

    describe('distane bigger than point K', () => {
      it('should return calculated points', () => {
        const actual = distanceModule.calcPoints(99.5, 'normal', 98);

        const expected = 63;

        assert.equal(actual, expected);
      });
    });
  });

  describe('big Hill', () => {

    describe('distance smaller than point K', () => {
      it('should return calculated points', () => {
        const actual = distanceModule.calcPoints(91.5, 'big', 98);

        const expected = 48.3;

        assert.equal(actual, expected);
      });
    })

    describe('distane bigger than point K', () => {
      it('should return calculated points', () => {
        const actual = distanceModule.calcPoints(99.5, 'big', 98);

        const expected = 62.7;

        assert.equal(actual, expected);
      });
    });

    
  });

  describe('huge Hill', () => {

    describe('distance smaller than point K', () => {
      it('should return calculated points', () => {
        const actual = distanceModule.calcPoints(91.5, 'huge', 98);

        const expected = 112.2;

        assert.equal(actual, expected);
      });
    })

    describe('distane bigger than point K', () => {
      it('should return calculated points', () => {
        const actual = distanceModule.calcPoints(99.5, 'huge', 98);

        const expected = 121.8;

        assert.equal(actual, expected);
      });
    });

  });

  describe('diffrent arguments', () => {
    it('should return info that function requires 3 params if they are not included', () => {
      const actual = distanceModule.calcPoints(91.5, 10);

      const expected = 'Wrong values';

      assert.equal(actual, expected);
    });

    it('should works if distance argument is string', () => {
      const actual = distanceModule.calcPoints('91.5', 'normal', 98);

      const expected = 47;

      assert.equal(actual, expected);
    });

    it('should works if pointK argument is string', () => {
      const actual = distanceModule.calcPoints(91.5, 'normal', '98');

      const expected = 47;

      assert.equal(actual, expected);
    });
  });
});