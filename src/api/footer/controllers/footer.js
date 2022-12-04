"use strict";

/**
 * footer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::footer.footer", ({ strapi }) => ({
  async find(ctx) {
    const populateList = [
      "logo",
      "columns",
      "columns.links",
      "columns.links.logo",
    ];
    populateList.push(ctx.query.populate);
    ctx.query.populate = populateList.join(",");

    const content = await super.find(ctx);
    return content;
  },
}));
