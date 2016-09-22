var chai= require('chai');
var chaiHttp= require('chai-Http');
var app= require('../app');
var should= chai.should();
var expect = chai.expect;

chai.use(chaiHttp);
