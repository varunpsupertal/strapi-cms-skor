"use strict";

/**
 * article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async find(ctx) {
    const entries = await strapi.entityService.findMany(
      "api::article.article",
      {
        sort: ["publishedAt"],
        populate: {
          author: {
            fields: ["id", "name", "email"],
          },
          categories: {
            fields: ["id", "name", "slug"],
          },
          sources: {
            fields: ["id", "name", "alias", "website", "logoUrl"],
          },
          tags: {
            fields: ["id", "name"],
          },
          createdBy: {
            fields: ["id", "email", "firstname", "lastname"],
          },
          blocks: {
            fields: ["content"],
          },
          cover: {
            fields: ["*"],
          },
        },
      }
    );
    return entries;
  },
}));
