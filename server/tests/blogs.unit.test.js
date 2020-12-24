import Mock from "./mocks/res.moch";
import { blogController } from "../controllers/blogs";
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
