const expect = require('chai').expect;

const ControlMySpa = require('../controlmyspa');

describe('ControlMySpa', function () {
  describe('Connection to server', function () {
    it('connects using invalid credentials', function () {
      const spa = new ControlMySpa('hmmm@asjdasd.gxl', 'password');

      spa.init().then((result) => {
        expect(result).to.greaterThan(0);
      });
    });
  });
});
