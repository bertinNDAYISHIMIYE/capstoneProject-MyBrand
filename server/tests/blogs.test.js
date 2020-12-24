import mocha from "mocha";
import chai from "chai";
import chaihttp from "chai-http";
import mockData from "./mocks/testData";
import jwt from "jsonwebtoken";
import app from "../index.js";
import Blog from "../models/blogs.js";
import fs from "fs";
//const JWT_KEY = process.env.JWT_KEY
const token = jwt.sign(mockData.logInvalid, process.env.SECRETKEY, {
  expiresIn: "1d",
});
chai.use(chaihttp);
chai.should();
const { it, describe, beforeEach, afterEach } = mocha;
describe("Blog tests:", async () => {
  beforeEach(async () => {
    // runs before each test in this block
    await Blog.deleteMany({});
  });

  afterEach(async () => {
    // runs after each test in this block
    await Blog.deleteMany({});
  });
  it("should POST a new blog", async () => {
    const response = await chai
      .request(app)
      .post("/api/blogs/addBlog")
      .set("Authorization", token)
      .field({
        title: mockData.blogsData.title,
        author: mockData.blogsData.author,
        content: mockData.blogsData.content,
      })
      .attach("image", fs.readFileSync("./server/tests/mocks/file/tree.png"), "tress.png");
    // console.log("--", mockData.blogsData.title);
    response.should.have.status(201);
    response.body.should.be.a("object");
    response.body.should.have.property("msg");
    response.body.should.have.property("data");
  });
  it("Should not post a blog when no token provied ", async () => {
    const response = await chai
      .request(app)
      .post("/api/blogs/addBlog")
      .set("Authorization", "")
      .field({
        title: mockData.blogsData.title,
        author: mockData.blogsData.author,
        content: mockData.blogsData.content,
      })
      .attach("image", fs.readFileSync("./server/tests/mocks/file/tree.png"), "tree.png");
    response.should.have.status(401);
    response.body.should.be.a("object");
    response.body.should.have.property("error");
  });

  it("Should show a list of blogs", async () => {
    await chai
      .request(app)
      .post("/api/blogs/addBlog")
      .set("Authorization", token)
      .field({
        title: mockData.blogsData.title,
        author: mockData.blogsData.author,
        content: mockData.blogsData.content,
      })
      .attach("image", fs.readFileSync("./server/tests/mocks/file/tree.png"), "tree.png");
    const response = await chai.request(app).get("/api/blogs");
    //response.body.should.have.property("message");
    //response.body.should.have.property("data");
    response.should.have.status(200);
  });
  it("should not update a blog post without token", async () => {
    const blogresponse = await chai
      .request(app)
      .post("/api/blogs/addBlog")
      .set("Authorization", token)
      .field({
        title: mockData.blogsData.title,
        author: mockData.blogsData.author,
        content: mockData.blogsData.content,
      })
      .attach("image", fs.readFileSync("./server/tests/mocks/file/tree.png"), "tree.png");
    // console.log("'--'", blogresponse.body.data._id);
    const response = await chai
      .request(app)
      .put(`/api/blogs/updateBlog/${blogresponse.body.data._id}`)
      .set("Authorization", "")
      .send(mockData.blogsData);
    //response.body.should.have.property('error');
    response.should.have.status(401);
  });

  it("It should GET a blog by ID", async () => {
    const blogresponse = await chai
      .request(app)
      .post("/api/blogs/addBlog")
      .set("Authorization", token)
      .field({
        title: mockData.blogsData.title,
        author: mockData.blogsData.author,
        content: mockData.blogsData.content,
      })
      .attach("image", fs.readFileSync("./server/tests/mocks/file/tree.png"), "tree.png");
    const response = await chai
      .request(app)
      .get(`/api/blogs/${blogresponse.body.data._id}`);

    response.should.have.status(200);
    response.body.should.be.a("object");
    //response.body.should.have.property('message');
  });

  it("It should DELETE a blog", async () => {
    const blogresponse = await chai
      .request(app)
      .post("/api/blogs/addBlog")
      .set("Authorization", token)
      .field({
        title: mockData.blogsData.title,
        author: mockData.blogsData.author,
        content: mockData.blogsData.content,
      })
      .attach("image", fs.readFileSync("./server/tests/mocks/file/tree.png"), "tree.png");
    // console.log("##########", token);
    const response = await chai
      .request(app)

      .delete(`/api/blogs/delete/${blogresponse.body.data._id}`)
      .set("Authorization", token);
    // console.log("'--'", blogresponse.body.data._id);
    response.should.have.status(200);
    response.body.should.be.a("object");
    //response.body.should.have.property('message');
  });

  it("should add a comment to a blog", async () => {
    const blogresponse = await chai
      .request(app)
      .post("/api/blogs/addBlog")
      .set("Authorization", token)
      .field({
        title: mockData.blogsData.title,
        author: mockData.blogsData.author,
        content: mockData.blogsData.content,
      })
      .attach("image", fs.readFileSync("./server/tests/mocks/file/tree.png"), "tree.png");
    // console.log("--", mockData.blogsData.title);

    const response = await chai
      .request(app)
      .post(`/api/blogs/comments/${blogresponse.body.data._id}`)
      .set("Authorization", token)
      .send(mockData.Comment);
    // console.log("--", blogresponse.body.data._id);
    response.should.have.status(201);
    response.body.should.have.property("msg");
  });
});