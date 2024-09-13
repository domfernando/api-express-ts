const swaggerAutogen = require('swagger-autogen')();
require('dotenv/config');

const doc = {
  info: {
    title: `${process.env.APP_NAME}`,
    description: `${process.env.APP_DESCRIPTION}`
  },
  host: `${process.env.URL}:${process.env.PORT}`
};

const outputFile = './swagger-output.json';
const routes = ['../routes.ts'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);