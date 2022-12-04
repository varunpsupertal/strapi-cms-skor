"use strict";

/**
 * show controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::show.show", ({ strapi }) => ({
  async find(ctx) {
    const entries = await strapi.entityService.findMany("api::show.show", {
      sort: ["publishedAt"],
      populate: ["id", "name", "videlUrl"],
    });
    return entries;
  },
}));
