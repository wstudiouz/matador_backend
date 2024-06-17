'use strict';

/**
 * project controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const { populate } = ctx.query;

        const populateOptions = populate ? { populate: populate.split(',') } : {};

        // Hozirgi loyihani topish
        const entity = await strapi.db.query('api::project.project').findOne({
            where: { slug: id },
            ...populateOptions 
        });

        if (!entity) {
            return ctx.notFound('Project not found');
        }

        // Navbatdagi loyihani topish
        const nextProject = await strapi.db.query('api::project.project').findOne({
            where: { id: { $gt: entity.id } },
            orderBy: [{ id: 'asc' }],
            limit: 1
        });

        // Oldingi loyihani topish
        const prevProject = await strapi.db.query('api::project.project').findOne({
            where: { id: { $lt: entity.id } },
            orderBy: [{ id: 'desc' }],
            limit: 1
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        const sanitizedNextProject = nextProject ? await this.sanitizeOutput(nextProject, ctx) : null;
        const sanitizedPrevProject = prevProject ? await this.sanitizeOutput(prevProject, ctx) : null;

        // Loyihani javobiga next va prev loyihalarni qo'shish
        const response = this.transformResponse({...sanitizedEntity, next: sanitizedNextProject, prev: sanitizedPrevProject});
        return response;
    }
}));
