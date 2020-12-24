import { hashPassword } from "../helper/hash";
import chai, { expect } from 'chai';

describe("HASH", () => {
  it("should return hashed password", async () => {
    const results = await hashPassword("string");
    expect(results).to.not.be.null;
    expect(results).to.be.a("string")
  });

  it('should return errro if password is not provided', async()=> {
    const results = await hashPassword();
    expect(results).to.be.null;
  })
});
