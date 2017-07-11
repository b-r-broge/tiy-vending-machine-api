const assert = require("assert");
const request = require("supertest");
const app = require('../app');
const VendingMachine = require('../models/machine');

describe('POST /api/vendor/items', function () {
  before('reset testdb', function (done) {
    VendingMachine.remove({}).then(function() {
      var testMachine = new VendingMachine({
        moneyMade: 0,
        name: "test",
        purchaseRecords: [],
        items: []
      })
      testMachine.save().then(function (resp) {
        return done();
      });
    });
  });
  it('should add 10 Cheese Nips to the database', function (done) {
    request(app).post('/api/vendor/items')
      .send({"name": "Cheese Nips", "price": 65, "inStock": 10})
      .expect(200)
      .expect({ "n": 1, "nModified": 1, "ok": 1})
      .end(done)
  })
  it('should add 4 peanuts to the database', function (done) {
    request(app).post('/api/vendor/items')
    .send({"name": "Peanuts", "price": 45, "inStock": 4})
    .expect(200)
    .expect({ "n": 1, "nModified": 1, "ok": 1 })
    .end(done)
  })
  it('should add a pop tart to the database', function (done) {
    request(app).post('/api/vendor/items')
    .send({"name": "Pop Tarts", "price": 110, "inStock": 1})
    .expect(200)
    .expect({ "n": 1, "nModified": 1, "ok": 1 })
    .end(done)
  })
});

describe('GET /api/customer/items', function () {
  // test the get call to pull up the items that are in the database

  it('should return information for cheese nips, peanuts and pop tarts',
  function (done) {
    request(app).get('/api/customer/items')
    .expect(200)
    .expect({ items: [{
        "price" : 65,
        "inStock" : 10,
        "name" : "Cheese Nips"
      }, {
        "price" : 45,
        "inStock" : 4,
        "name" : "Peanuts"
      }, {
        "price" : 110,
        "inStock" : 1,
        "name" : "Pop Tarts"
      }]
    })
    .end(done)
  })
})

describe('POST /api/customer/items/:itemId/purchases', function() {
  it('should allow you to purchase an item with cents included', function (done) {
    request(app).post('/api/customer/items/Pop Tarts/purchases')
      .send({"Payment": 110})
      .expect(200)
      .expect({
        "purchase": "success",
        "item": "Pop Tarts",
        "change": 0,
        "inStock": 0
      })
      .end(done)
  })
})
