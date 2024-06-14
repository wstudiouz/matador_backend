'use strict';

/**
 * project controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({strapi}) =>({
    async findOne(ctx) {
        const { id } = ctx.params;
        const { populate } = ctx.query;

        const populateOptions = populate ? { populate: populate.split(',') } : {};
        console.log(populateOptions);
        const entity = await strapi.db.query('api::project.project').findOne({
            where: { slug: id },
            ...populateOptions 
        });
    
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));
