const expect = require('chai').expect;

const ControlMySpa = require('../controlmyspa');

describe('ControlMySpa', function () {
  describe('Connection to server', function () {
    it('connects using invalid credentials', async function () {
      const spa = new ControlMySpa('hmmm@asjdasd.gxl', 'password');

        let res = await spa.init();

        expect(res).to.be.equal(false);
    });
  });
});
