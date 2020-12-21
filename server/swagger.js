import swaggerUi from "swagger-ui-express";
import swaggerJSDocs from "swagger-jsdoc";
const Definitions = () => ({
  info: {
    title: "My Brand ",
    description: " Mr bertin website and blog portfolio ",
  },
  schemes: ["http", "https"],
  basePath: "/api/",
  produces: ["application/json"],
});
const swaggerDocs = swaggerJSDocs({
  swaggerDefinition: Definitions(),
  apis: ["server/routes/api/*.js"],
});
const docsOption = {
  customSiteTitle: "MY-BRAND",
};
export const setUpSwaggerUi = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.serveFiles(swaggerDocs, docsOption)
  );
  app.get("/api-docs", (req, res) => {
    return res.send(swaggerUi.generateHTML(swaggerDocs, docsOption));
  });
};