"use strict";

/**
 * page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async find(ctx) {
    const populateList = ["*"];
    populateList.push(ctx.query.populate);
    ctx.query.populate = populateList.join(",");

    const content = await super.find(ctx);
    return content;
  },
}));
