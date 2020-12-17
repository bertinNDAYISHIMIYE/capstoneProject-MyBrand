import Mock from "./mocks/res.moch";
import { blogController } from "../controllers/blogs";
import { usercontrollers } from "../controllers/user";
import chai, { expect } from "chai";

describe("500 blog tests", () => {
  it("should return 500 (updateBlog)", async () => {
    const results = await blogController.updateBlog(
      Mock.request,
      Mock.response
    );
    expect(results.statusCode).to.be.equal(500);
  });

  it("should return 500 (deleteBlog)", async () => {
    const results = await blogController.deleteBlog(
      Mock.request,
      Mock.response
    );
    expect(results.statusCode).to.be.equal(500);
  });

  it("should return 500 (getBlogById)", async () => {
    const results = await blogController.getBlogById(
      Mock.request,
      Mock.response
    );
    expect(results.statusCode).to.be.equal(500);
  });
});


describe('Usern 500', ()=>{
  it("should return 500 (getBlogById)", async () => {
    const results = await usercontrollers.createAccount(
      Mock.request,
      Mock.response
    );
    expect(results.statusCode).to.be.equal(500);
  });

  it("should return 500 (getBlogById)", async () => {
    const results = await usercontrollers.deleteUser(
      Mock.request,
      Mock.response
    );
    expect(results.statusCode).to.be.equal(500);
  });

  it("should return 500 (getBlogById)", async () => {
    const results = await usercontrollers.login(
      Mock.request,
      Mock.response
    );
    expect(results.statusCode).to.be.equal(500);
  });
})
