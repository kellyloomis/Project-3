var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

chai.use(chaiHttp);

describe('Users', function() {
  it('should list ALL users on /api/user GET');
  it('should list a SINGLE user on /api/user/:id GET');
  it('should add a SINGLE user on /api/user POST');
  it('should update a SINGLE user on /api/user/:id PUT');
  it('should delete a SINGLE user on /api/user/:id DELETE');
});