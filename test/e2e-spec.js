const request = require("supertest")("http://localhost:8000");
const chai = require("chai");

describe("GET /matches", function () {
  it("Returns all matches", async function () {
    const response = await request.get("/api/matches");
    chai.expect(response.status).to.eql(200);

    chai.expect(response.body).to.have.own.property('meta')
    chai.expect(response.body.meta).to.have.own.property('totalItems')
    chai.expect(response.body.meta).to.have.own.property('itemCount')
    chai.expect(response.body.meta).to.have.own.property('itemsPerPage')
    chai.expect(response.body.meta).to.have.own.property('totalPages')
    chai.expect(response.body.meta).to.have.own.property('currentPage')

    chai.expect(response.body).to.have.own.property('links');
    chai.expect(response.body.links).to.have.own.property('first');
    chai.expect(response.body.links).to.have.own.property('previous');
    chai.expect(response.body.links).to.have.own.property('next');
    chai.expect(response.body.links).to.have.own.property('last');


    chai.expect(response.body).to.have.own.property('data');
    chai.expect(response.body.data).to.be.an('array')
  });

  it("Returns all matches with limitation", async function () {
    const response = await request.get("/api/matches?limit=2");
    chai.expect(response.status).to.eql(200);

    chai.expect(response.body.data).to.have.lengthOf(2);
    chai.expect(response.body.meta.itemsPerPage).to.equal(2);
  });

  it("Returns all matches on page 2", async function () {
    const response = await request.get("/api/matches?limit=2&page=2");
    chai.expect(response.status).to.eql(200);

    chai.expect(response.body.data).to.have.lengthOf(2);
    chai.expect(response.body.meta.itemsPerPage).to.equal(2);
    chai.expect(response.body.meta.currentPage).to.equal(2);
  });

  it("Returns all matches on a specific date", async function () {
    const response = await request.get("/api/matches?date=2022-12-02");
    chai.expect(response.status).to.eql(200);
    if (response.body.data.length > 0) {
      chai.expect(response.body.data[0].attributes.date).to.eql("2022-12-02");
    }
  });
});

describe("GET /matches/_calendar_", function () {
  it("Return missing query parameters (fromDate and toDate)", async function () {
    const response = await request.get("/api/matches/_calendar_");

    chai.expect(response.status).to.eql(400);
    chai.expect(response.body.exception.message).to.be.an('array');
    chai.expect(response.body.exception.message[0].property).to.equal('fromDate');
    chai.expect(response.body.exception.message[1].property).to.equal('toDate');
  })

  it("Return missing query parameter toDate", async function () {
    const response = await request.get("/api/matches/_calendar_?fromDate=2022-12-02");

    chai.expect(response.status).to.eql(400);
    chai.expect(response.body.exception.message).to.be.an('array');
    chai.expect(response.body.exception.message[0].property).to.equal('toDate');
  })

  it("Return missing query parameter fromDate", async function () {
    const response = await request.get("/api/matches/_calendar_?toDate=2022-12-02");

    chai.expect(response.status).to.eql(400);
    chai.expect(response.body.exception.message).to.be.an('array');
    chai.expect(response.body.exception.message[0].property).to.equal('fromDate');
  })

  it("Return calendar data", async function () {
    const response = await request.get("/api/matches/_calendar_?fromDate=2022-12-02&toDate=2022-12-03");

    chai.expect(response.status).to.eql(200);
    chai.expect(response.body).to.have.own.property('data');
    chai.expect(response.body.data).to.be.an('array');
  })
})