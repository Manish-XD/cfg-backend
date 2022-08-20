'use strict';

/**
 * kyc service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kyc.kyc');
