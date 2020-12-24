import mocha from "mocha";
import chai from "chai";
import chaihttp from "chai-http";
import mockData from "./mocks/testData";
import jwt from "jsonwebtoken";
import app from "../index.js";
import Query from "../models/enquiriesModal.js";

const token = jwt.sign(mockData.logInvalid, process.env.SECRETKEY, {
  expiresIn: "1d",
});
chai.use(chaihttp);
chai.should();
const { it, describe, beforeEach, afterEach } = mocha;
describe("ENQUERY tests", async () => {
  beforeEach(async () => {
    // runs before each test in this block
    await Query.deleteMany({});
  });

  afterEach(async () => {
    // runs after each test in this block
    await Query.deleteMany({});
  });
  //test cases
  it("should allow to POST a new query:", async () => {
    const response = await chai
      .request(app)
      .post("/api/enquiries")
      .send(mockData.query);

    response.should.have.status(201);
    response.body.should.be.a("object");
    response.body.should.have.property("message");
    response.body.should.have.property("message").eq("enquiry created");
  });

  it("should not allow  a non token beholder to view enqueries", async () => {
    await chai.request(app).post("/api/enquiries").send(mockData.query);
    const response = await chai
      .request(app)
      .get("/api/enquiries")
      .set("Authorization", "");
    response.should.have.status(401);
    response.body.should.be.a("object");
    response.body.should.have.property("error");
  });
  it("should not allow  invalid token beholder to view queries", async () => {
    await chai.request(app).post("/api/enquiries").send(mockData.query);
    const response = await chai
      .request(app)
      .get("/api/enquiries")
      .set("Authorization", "hhhhhhhhhh");
    response.should.have.status(401);
    response.body.should.be.a("object");
    response.body.should.have.property("error");
  });
  it("should allow token beholder to view enqueries", async () => {
    await chai.request(app).post("/api/enquiries").send(mockData.query);
    const response = await chai
      .request(app)
      .get("/api/enquiries")
      .set("Authorization", token);
    response.should.have.status(200);
    response.body.should.be.a("object");

    response.body.should.have.property("message");
  });

  it("should delete an enquiry", (done) => {
    chai
      .request(app)
      .post("/api/enquiries")
      .send(mockData.query)
      .end((err, res) => {
        const id = res.body.data._id;
        chai
          .request(app)
          .delete(`/api/enquiries/${id}`)
          .set("Authorization", token)
          .end((err, res) => {
            res.body.should.have.status(200);
            done();
          });
      });
  });

  it("should update an enquiry", (done) => {
    chai
      .request(app)
      .post("/api/enquiries")
      .send(mockData.query)
      .end((err, res) => {
        const id = res.body.data._id;
        chai
          .request(app)
          .put(`/api/enquiries/${id}`)
          .set("Authorization", token)
          .send(mockData.query)
          .end((err, res) => {
            res.body.should.have.property("data");
            done();
          });
      });
  });

  it("should update an enquiry", (done) => {
    chai
      .request(app)
      .post("/api/enquiries")
      .send(mockData.query)
      .end((err, res) => {
        const id = res.body.data._id;
        chai
          .request(app)
          .get(`/api/enquiries/${id}`)
          .set("Authorization", token)
          .end((err, res) => {
            res.body.should.have.property("data");
            done();
          });
      });
  });
});
