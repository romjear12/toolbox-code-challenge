/* eslint-env mocha */
const request = require("supertest")("http://localhost:4000");
const expect = require("chai").expect;

describe("Running GET /iecho?text=testing", function () {
  it("endpoint returns 400 error without text query", async function () {
    const response = await request.get("/iecho");

    expect(response.status).to.eql(400);
    expect(response.body.error).to.eql("no text");
  });

  it("endpoint returns 400 error with text empty", async function () {
    const response = await request.get("/iecho?text=");

    expect(response.status).to.eql(400);
    expect(response.body.error).to.eql("no text");
  });

  it("endpoint returns 200 OK with right properties", async function () {
    const response = await request.get("/iecho?text=testing");

    expect(response.status).to.eql(200);
    expect(response.body).to.have.property("text");
    expect(response.body).to.have.property("palindrome");
  });

  it("endpoint returns 200 OK with text=testing", async function () {
    const response = await request.get("/iecho?text=testing");

    expect(response.status).to.eql(200);
    expect(response.body.text).to.eql("gnitset");
    expect(response.body.palindrome).to.be.false;
  });

  it("endpoint returns 200 OK with text=testing and palindrome = true", async function () {
    const response = await request.get("/iecho?text=oso");

    expect(response.status).to.eql(200);
    expect(response.body.text).to.eql("oso");
    expect(response.body.palindrome).to.be.true;
  });

  it("endpoint returns 200 OK with text=testing and palindrome = true", async function () {
    const response = await request.get("/iecho?text=never odd or even");

    expect(response.status).to.eql(200);
    expect(response.body.text).to.eql("neve ro ddo reven");
    expect(response.body.palindrome).to.be.true;
  });
});
