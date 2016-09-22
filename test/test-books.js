var chai = require('chai');
var chaiHttp= require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('books', function() {
  it('should list ALL books on /books GET', function(done) {
    // create a request manager that uses our app
      var request = chai.request(app);

      // send a request
      request
        .get('/books')
        .end(function(err, res){

          // check we got a 200 response
          res.should.have.status(200);

          // and that it's html
          res.should.be.html;

          //check page content
          res.text.should.match(/Book index/);

          done();
        });
    });

  it('should show a SINGLE Book on /books/<id> GET ', function(done) {
    // create a request manager that uses our app
      var request = chai.request(app);

      // send a request
      request
        .get('/books/0')
        .end(function(err, res){

          // check we got a 200 response
          res.should.have.status(200);

          // and that it's html
          res.should.be.html;

          //check contents
          res.text.should.match(/Book 1/);
          res.text.should.match(/This is the first Book/);

          // finish the test ( don't forget this! )
          done();
        });
    });

  it('should add a SINGLE Book on /books POST' , function(done){
    var request = chai.request(app);

    request
      .post('/books')
      .set('content-type', 'application/x-www-form-urlencoded') // set the form encoding type
      .send({'title': 'Test Book', 'body': 'Body Text'}) // the data to be Posted
      .end(function(err, res){

        res.should.have.status(200);
        res.should.be.html;

        // we should end up back on the homepage
        res.text.should.match(/Book index/);

        // make another request to make sure it was created
        request
          .get('books/3')
          .end(function(err, res){

              res.should.have.status(200);
              res.should.be.html;

              // was the Book correctly created
              res.text.should.match(/Test Book/);
              res.text.should.match(/Body Text/);

              done();
          });
      });
  });

  // describe a test for PUT
  it('should update a SINGLE Book on /books/<id> PUT' , function(done){

    var request = chai.request(app);

    request
      .put('books/2')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({'title': 'Updated Book', 'body': 'Updated Text'})
      .end(function(err, res){

        res.should.have.status(200);
        res.should.be.html;
        res.text.should.match(/Welcome to the homepage/);

        request
          .get('books/2')
          .end(function(err, res){

              res.should.have.status(200);
              res.should.be.html;
              res.text.should.match(/Updated Book/);
              res.text.should.match(/Updated Text/);

              done();
          });
      });
  });

  it('should delete a SINGLE Book on books/<id> DELETE' , function(done) {

    var request = chai.request(app);

    request
        .delete('books/3')
        .end(function(err, res){

          res.should.have.status(200);
          res.should.be.html;
          res.text.should.match(/Welcome to the homepage/);

          request
            .get('books/3')
            .end(function(err, res){
                res.should.have.status(404);
                done();

            });
        });
    });
});