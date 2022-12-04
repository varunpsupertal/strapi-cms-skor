"use strict";

/**
 * video controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::video.video", ({ strapi }) => ({
  async find(ctx) {
    ctx.query.sort = ["publishedAt"];
    const content = await super.find(ctx);
    return content;
  },
}));
