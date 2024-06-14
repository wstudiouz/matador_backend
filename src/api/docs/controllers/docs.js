'use strict';

const fs = require('fs-extra');
const path = require('path');

module.exports = {
  index: async (ctx) => {
    try {
      const defaultVersion = '1.0.0'; // Set a default version as a fallback

      // Check if documentation plugin and its config exist

      // Use the version from URL params or fallback to config version or default version

      const openAPISpecsPath = path.join(
        "src",
        'extensions',
        'documentation',
        'documentation',
        defaultVersion,
        'full_documentation.json',
      );

      // Check if the file exists before reading
      if (await fs.pathExists(openAPISpecsPath)) {
        const documentation = await fs.readFile(openAPISpecsPath, 'utf8');
        const response = JSON.parse(documentation);
        ctx.send(response);
      } else {
        throw new Error(`Documentation for version ${version} not found`);
      }
    } catch (e) {
      strapi.log.error(e);
      ctx.badRequest(null, e.message);
    }
  },
};
