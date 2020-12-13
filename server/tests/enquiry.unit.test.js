import Mock from "./mocks/res.moch";
import { enquiriescontrollers } from "../controllers/enquiries";
import chai, { expect } from "chai";

describe("500 enquiry tests", () => {
 

  it("should return 500 (deleteEnquiry)", async () => {
    const results = await enquiriescontrollers.deleteEnquiry(
      Mock.request,
      Mock.response
    );
    expect(results.statusCode).to.be.equal(500);
  });

  it("should return 500 (findOneEnquiry)", async () => {
    const results = await enquiriescontrollers.findOneEnquiry(
      Mock.request,
      Mock.response
    );
    expect(results.statusCode).to.be.equal(500);
  });
});
