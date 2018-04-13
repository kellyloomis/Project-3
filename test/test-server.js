const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

/**
*	Test Cases for User endpoints
**/
describe('Users', function() {
	// This newUser object will be used for testing of Create, Update, and Delete
	let newUser = {
    	'username': 'demo',
    	'password': 'pass',
    	'email': 'demo@email.com',
    	'firstname': 'Java',
    	'lastname': 'Script'
    };

    // Test retrieving all Users
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

  // Test creating a User, which will be the newUser object we defined above
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

  // Test retrieving a single User, which will be the newUser object we defined above
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

  // Test updating a single User, which will be the newUser object we defined above
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

  // Test deleting a single User, which will be the newUser object we defined above
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
}); // End User Test Cases

/**
*	Test Cases for Employee endpoints
**/
describe('Employees', function() {
	// This will be our temporary User so that we can store an Employee under this User
	let demoUser = {
		'username': 'demo',
    	'password': 'pass',
    	'email': 'demo@email.com',
    	'firstname': 'Java',
    	'lastname': 'Script'
	}

	// This newEmployee object will be used for testing of Create, Update, and Delete
	let newEmployee = {
    	'firstname': 'New',
    	'lastname': 'Guy',
    	'email': 'employee@mail.com'
    };

    // Create our User to store the new Employee
  it('should add a SINGLE demo user', function(done) {
  	chai.request(server)
    .post('/api/user')
    .send(demoUser)
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

      // Save the id to associate this User's id to the new Employee
      newEmployee.UserId = res.body.id;
      done();
    });
  });

    // Test retrieving all Employees (should be empty for now)
  it('should list ALL employees on /api/employee GET', function(done) {
  	chai.request(server)
    .get('/api/employee')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
  });

  // Test creating an Employee, which will be the newEmployee object we defined above
  it('should add a SINGLE employee on /api/employee POST', function(done) {
  	chai.request(server)
    .post('/api/employee')
    .send(newEmployee)
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('email');
      res.body.should.have.property('firstname');
      res.body.should.have.property('lastname');
      res.body.should.have.property('id');
      res.body.email.should.equal('employee@mail.com');
      res.body.firstname.should.equal('New');
      res.body.lastname.should.equal('Guy');

      // Save the id for later so that we only work with one newEmployee
      newEmployee.id = res.body.id;
      done();
    });
  });

  // Test retrieving a single Employee, which will be the newEmployee object we defined above
  it('should list a SINGLE employee on /api/employee/:id GET', function(done) {
  	chai.request(server)
        .get('/api/employee/' + newEmployee.id)
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
	      res.body.should.have.property('email');
	      res.body.should.have.property('firstname');
	      res.body.should.have.property('lastname');
	      res.body.should.have.property('id');
	      res.body.id.should.equal(newEmployee.id);
	      res.body.email.should.equal('employee@mail.com');
	      res.body.firstname.should.equal('New');
	      res.body.lastname.should.equal('Guy');
          done();
        });
  });

  // Test updating a single Employee, which will be the newEmployee object we defined above
  it('should update a SINGLE employee on /api/employee/:id PUT', function(done) {
  	chai.request(server)
        .post('/api/employee/' + newEmployee.id)
        .send({
        	'firstname': 'Super',
        	'lastname': 'Man'
    	})
        .end(function(error, response){
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          chai.request(server)
          	.get('/api/employee/' + newEmployee.id)
          	.end(function(err, res) {
			      res.body.should.have.property('email');
			      res.body.should.have.property('firstname');
			      res.body.should.have.property('lastname');
			      res.body.should.have.property('id');
			      res.body.id.should.equal(newEmployee.id);
			      res.body.email.should.equal('employee@mail.com');
			      res.body.firstname.should.equal('Super');
			      res.body.lastname.should.equal('Man');
         		  done();
          	});
      });
  });

  // Test deleting a single Employee, which will be the newEmployee object we defined above
  it('should delete a SINGLE employee on /api/employee/:id DELETE', function(done) {
  	chai.request(server)
  		.delete('/api/employee/' + newEmployee.id)
  		.end(function(err, res) {
  			res.should.have.status(200);
          	res.should.be.json;
          	res.body.should.equal(1);
          	chai.request(server)
          		.get('/api/employee/' + newEmployee.id)
          		.end(function(error, response) {
          			 should.not.exist(response.body);
          			done();
          		});
  		});
  });

  // Test retrieving all Employee from within a specified date range
  it('should retrieve ALL employee within date on /api/employee/:start/:end', function(done) {
    let start = ("2018-04-01 00:00:00");
    let end = ("2018-04-10 00:00:00");
    chai.request(server)
      .get('/api/employee/' + start + '/' + end)
      .end(function(err, res) {
        res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a("array");
            done();
      });
  });
}); // End Employee Test Cases

/**
*	Test Cases for Review endpoints
**/
describe('Reviews', function() {
	// This will be our temporary User so that we can store an Employee under this User
	let demoUser = {
		'username': 'demo',
    	'password': 'pass',
    	'email': 'demo@email.com',
    	'firstname': 'Java',
    	'lastname': 'Script'
	}

	// This will be our temporary Employee so that we can store a Review under this Employee
	let demoEmployee = {
    	'firstname': 'New',
    	'lastname': 'Guy',
    	'email': 'employee@mail.com'
    };

	// This newReview object will be used for testing of Create, Update, and Delete
	let newReview = {
    	'attendance': 2,
      'appearance': 0,
      'professionalism': 1,
      'communication': 2,
      'taskcompletion': 1,
      'quality': 1
    };

    // Create our User to store the demo Employee
  it('should add a SINGLE demo user', function(done) {
  	chai.request(server)
    .post('/api/user')
    .send(demoUser)
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

      // Save the id to associate this User's id to the new Employee
      demoEmployee.UserId = res.body.id;
      done();
    });
  });

    // Create an Employee to store the demo Review
  it('should add a SINGLE demo employee', function(done) {
  	chai.request(server)
    .post('/api/employee')
    .send(demoEmployee)
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('email');
      res.body.should.have.property('firstname');
      res.body.should.have.property('lastname');
      res.body.should.have.property('id');
      res.body.email.should.equal('employee@mail.com');
      res.body.firstname.should.equal('New');
      res.body.lastname.should.equal('Guy');

      // Save the id to associate this Employee's id to the new Review
      newReview.EmployeeId = res.body.id;
      done();
    });
  });

    // Test retrieving all Review (should be empty for now)
  it('should list ALL reviews on /api/review GET', function(done) {
  	chai.request(server)
    .get('/api/review')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
  });

  // Test creating a Review, which will be the newReview object we defined above
  it('should add a SINGLE review on /api/review POST', function(done) {
  	chai.request(server)
    .post('/api/review')
    .send(newReview)
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('appearance');
      res.body.should.have.property('attendance');
      res.body.should.have.property('professionalism');
      res.body.should.have.property('communication');
      res.body.should.have.property('taskcompletion');
      res.body.should.have.property('quality');
      res.body.should.have.property('id');
      res.body.appearance.should.equal(0);
      res.body.attendance.should.equal(2);
      res.body.professionalism.should.equal(1);
      res.body.communication.should.equal(2);
      res.body.taskcompletion.should.equal(1);
      res.body.quality.should.equal(1);

      // Save the id for later so that we only work with one newReview
      newReview.id = res.body.id;
      done();
    });
  });

  // Test retrieving a single Review, which will be the newReview object we defined above
  it('should list a SINGLE review on /api/review/:id GET', function(done) {
  	chai.request(server)
        .get('/api/review/' + newReview.id)
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
	        res.body.should.have.property('appearance');
          res.body.should.have.property('attendance');
          res.body.should.have.property('professionalism');
          res.body.should.have.property('communication');
          res.body.should.have.property('taskcompletion');
          res.body.should.have.property('quality');
          res.body.should.have.property('id');
  	      res.body.id.should.equal(newReview.id);
  	      res.body.appearance.should.equal(0);
          res.body.attendance.should.equal(2);
          res.body.professionalism.should.equal(1);
          res.body.communication.should.equal(2);
          res.body.taskcompletion.should.equal(1);
          res.body.quality.should.equal(1);
          done();
        });
  });

  // Test updating a single Review, which will be the newReview object we defined above
  it('should update a SINGLE review on /api/review/:id PUT', function(done) {
  	chai.request(server)
        .post('/api/review/' + newReview.id)
        .send({
        	'appearance': 1
    	})
        .end(function(error, response){
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          chai.request(server)
          	.get('/api/review/' + newReview.id)
          	.end(function(err, res) {
			      res.body.should.have.property('appearance');
            res.body.should.have.property('attendance');
            res.body.should.have.property('professionalism');
            res.body.should.have.property('communication');
            res.body.should.have.property('taskcompletion');
            res.body.should.have.property('quality');
			      res.body.id.should.equal(newReview.id);
			      res.body.appearance.should.equal(1);
            res.body.attendance.should.equal(2);
            res.body.professionalism.should.equal(1);
            res.body.communication.should.equal(2);
            res.body.taskcompletion.should.equal(1);
            res.body.quality.should.equal(1);
         		done();
          	});
      });
  });

  // Test deleting a single Review, which will be the newReview object we defined above
  it('should delete a SINGLE review on /api/review/:id DELETE', function(done) {
  	chai.request(server)
  		.delete('/api/review/' + newReview.id)
  		.end(function(err, res) {
  			res.should.have.status(200);
          	res.should.be.json;
          	res.body.should.equal(1);
          	chai.request(server)
          		.get('/api/review/' + newReview.id)
          		.end(function(error, response) {
          			 should.not.exist(response.body);
          			done();
          		});
  		});
  });
}); // End Review Test Cases

/**
* Test Cases for Goal endpoints
**/
describe('Reviews', function() {
  // This will be our temporary User so that we can store an Employee under this User
  let demoUser = {
    'username': 'demo',
      'password': 'pass',
      'email': 'demo@email.com',
      'firstname': 'Java',
      'lastname': 'Script'
  }

  // This will be our temporary Employee so that we can store a Review under this Employee
  let demoEmployee = {
      'firstname': 'New',
      'lastname': 'Guy',
      'email': 'employee@mail.com'
    };

  // This newGoal object will be used for testing of Create, Update, and Delete
  let newGoal = {
      'goals': "Git gud",
      'achieved': "Git pulled"
    };

    // Create our User to store the demo Employee
  it('should add a SINGLE demo user', function(done) {
    chai.request(server)
    .post('/api/user')
    .send(demoUser)
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

      // Save the id to associate this User's id to the new Employee
      demoEmployee.UserId = res.body.id;
      done();
    });
  });

    // Create an Employee to store the demo Review
  it('should add a SINGLE demo employee', function(done) {
    chai.request(server)
    .post('/api/employee')
    .send(demoEmployee)
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('email');
      res.body.should.have.property('firstname');
      res.body.should.have.property('lastname');
      res.body.should.have.property('id');
      res.body.email.should.equal('employee@mail.com');
      res.body.firstname.should.equal('New');
      res.body.lastname.should.equal('Guy');

      // Save the id to associate this Employee's id to the new Review
      newGoal.EmployeeId = res.body.id;
      done();
    });
  });

    // Test retrieving all Goal (should be empty for now)
  it('should list ALL goals on /api/goal GET', function(done) {
    chai.request(server)
    .get('/api/goal')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
  });

  // Test creating a Goal, which will be the newGoal object we defined above
  it('should add a SINGLE goal on /api/goal POST', function(done) {
    chai.request(server)
    .post('/api/goal')
    .send(newGoal)
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('goals');
      res.body.should.have.property('achieved');;
      res.body.should.have.property('id');
      res.body.goals.should.equal("Git gud");
      res.body.achieved.should.equal("Git pulled");

      // Save the id for later so that we only work with one newReview
      newGoal.id = res.body.id;
      done();
    });
  });

  // Test retrieving a single Goal, which will be the newGoal object we defined above
  it('should list a SINGLE goal on /api/goal/:id GET', function(done) {
    chai.request(server)
        .get('/api/goal/' + newGoal.id)
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('goals');
          res.body.should.have.property('achieved');;
          res.body.should.have.property('id');
          res.body.id.should.equal(newGoal.id);
          res.body.goals.should.equal("Git gud");
          res.body.achieved.should.equal("Git pulled");
          done();
        });
  });

  // Test updating a single Goal, which will be the newGoal object we defined above
  it('should update a SINGLE review on /api/review/:id PUT', function(done) {
    chai.request(server)
        .post('/api/goal/' + newGoal.id)
        .send({
          'goals': "Git push"
      })
        .end(function(error, response){
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          chai.request(server)
            .get('/api/goal/' + newGoal.id)
            .end(function(err, res) {
            res.body.should.have.property('goals');
            res.body.should.have.property('achieved');;
            res.body.should.have.property('id');
            res.body.id.should.equal(newGoal.id);
            res.body.goals.should.equal("Git push");
            res.body.achieved.should.equal("Git pulled");
            done();
            });
      });
  });

  // Test deleting a single Goal, which will be the newGoal object we defined above
  it('should delete a SINGLE goal on /api/goal/:id DELETE', function(done) {
    chai.request(server)
      .delete('/api/goal/' + newGoal.id)
      .end(function(err, res) {
        res.should.have.status(200);
            res.should.be.json;
            res.body.should.equal(1);
            chai.request(server)
              .get('/api/review/' + newGoal.id)
              .end(function(error, response) {
                 should.not.exist(response.body);
                done();
              });
      });
  });
}); // End Goal Test Cases

