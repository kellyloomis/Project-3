var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Users', function() {

	var newUser = {
    	'username': 'demo',
    	'password': 'pass',
    	'email': 'demo@email.com',
    	'firstname': 'Java',
    	'lastname': 'Script'
    };

  it('should list ALL users on /api/user GET', function(done) {
  	chai.request(server)
    .get('/api/user')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
  });
  it('should add a SINGLE user on /api/user POST', function(done) {
  	chai.request(server)
    .post('/api/user')
    .send(newUser)
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('username');
      res.body.should.have.property('password');
      res.body.should.have.property('email');
      res.body.should.have.property('firstname');
      res.body.should.have.property('lastname');
      res.body.should.have.property('id');
      res.body.username.should.equal('demo');
      res.body.password.should.equal('pass');
      res.body.email.should.equal('demo@email.com');
      res.body.firstname.should.equal('Java');
      res.body.lastname.should.equal('Script');

      // Save the id for later so that we only work with one newUser
      newUser.id = res.body.id;

      done();
    });
  });
  it('should list a SINGLE user on /api/user/:id GET', function(done) {
  	chai.request(server)
        .get('/api/user/' + newUser.id)
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('username');
	      res.body.should.have.property('password');
	      res.body.should.have.property('email');
	      res.body.should.have.property('firstname');
	      res.body.should.have.property('lastname');
	      res.body.should.have.property('id');
	      res.body.id.should.equal(newUser.id);
	      res.body.username.should.equal('demo');
	      res.body.password.should.equal('pass');
	      res.body.email.should.equal('demo@email.com');
	      res.body.firstname.should.equal('Java');
	      res.body.lastname.should.equal('Script');
          done();
        });
  });
  it('should update a SINGLE user on /api/user/:id PUT', function(done) {
  	chai.request(server)
        .post('/api/user/' + newUser.id)
        .send({
        	'firstname': 'Super',
        	'lastname': 'Man'
    	})
        .end(function(error, response){
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          chai.request(server)
          	.get('/api/user/' + newUser.id)
          	.end(function(err, res) {
          		  res.body.should.have.property('username');
			      res.body.should.have.property('password');
			      res.body.should.have.property('email');
			      res.body.should.have.property('firstname');
			      res.body.should.have.property('lastname');
			      res.body.should.have.property('id');
			      res.body.id.should.equal(newUser.id);
			      res.body.username.should.equal('demo');
			      res.body.password.should.equal('pass');
			      res.body.email.should.equal('demo@email.com');
			      res.body.firstname.should.equal('Super');
			      res.body.lastname.should.equal('Man');
         		  done();
          	});
      });
  });
  it('should delete a SINGLE user on /api/user/:id DELETE', function(done) {
  	chai.request(server)
  		.delete('/api/user/' + newUser.id)
  		.end(function(err, res) {
  			res.should.have.status(200);
          	res.should.be.json;
          	res.body.should.equal(1);
          	chai.request(server)
          		.get('/api/user/' + newUser.id)
          		.end(function(error, response) {
          			 should.not.exist(response.body);
          			done();
          		});
  		});
  });
});