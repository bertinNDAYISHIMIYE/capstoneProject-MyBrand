
import path from "path";
import os from "os";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "My Profile",
      version: "1.0.0",
      description: `description`,
      license: {},
      contact: {},
    },
    components: {},
    security: {},
    servers: [
      {
        
        url: "http://localhost:3030",
        name: `${os.hostname()}`,
      },
      {
        url: 'https://mybrand-bertin.herokuapp.com/',
        name: `${os.hostname()}`,
      },
    ],
  },
  apis: [path.resolve(__dirname, "./routes/api/*.js")],
};

export default swaggerOptions;