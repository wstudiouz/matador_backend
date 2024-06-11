// src/extensions/documentation/strapi-server.js

'use strict';

const fs = require('fs-extra');
const path = require('path');

module.exports = (plugin) => {
  // Add a new route to the documentation plugin
  plugin.routes['content-api'].routes.push({
    method: 'GET',
    path: '/docs/openapi.json',
    handler: 'documentation.openAPISpec',
    config: {
      policies: [],
      middlewares: [],
    },
  });

  // Define the handler for the new route
  plugin.controllers.documentation.openAPISpec = async (ctx) => {
    try {
      const openAPISpecsPath = path.join(
        strapi.config.appPath,
        'extensions',
        'documentation',
        'documentation',
        'full_documentation.json'
      );

      const documentation = fs.readFileSync(openAPISpecsPath, 'utf8');
      const response = JSON.parse(documentation);

      ctx.send(response);
    } catch (e) {
      strapi.log.error(e);
      ctx.badRequest(null, e.message);
    }
  };

  return plugin;
};
