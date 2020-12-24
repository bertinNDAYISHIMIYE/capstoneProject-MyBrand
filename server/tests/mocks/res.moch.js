const mocks = require("node-mocks-http");

const response = mocks.createResponse();

const Mock = {
  response,
  request: {},
};

export default Mock;
