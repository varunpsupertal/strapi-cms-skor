"use strict";

/**
 * co-creator-network controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::co-creator-network.co-creator-network",
  ({ strapi }) => ({
    async find(ctx) {
      const entries = await strapi.entityService.findMany(
        "api::co-creator-network.co-creator-network",
        {
          sort: ["publishedAt"],
          populate: ["id", "name", "videlUrl"],
        }
      );
      return entries;
    },
  })
);
