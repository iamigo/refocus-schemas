/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * src/refocus/sampleGeneratorTemplate.js
 */
const Joi = require('joi');
const METHODS = ['DELETE', 'GET', 'HEAD', 'PATCH', 'POST', 'PUT'];
module.exports = Joi.object().keys({
  name: Joi.string().required().regex(/^[a-z0-9-]+$/, 'lowercase and dash'),
  version: Joi.string().required()
    .regex(/^[0-9]+.[0-9]+.[0-9]+$/, 'simple semver'),
  description: Joi.string().required(),
  tags: Joi.array().items(Joi.string()),
  author: Joi.object().required().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    url: Joi.string().uri(),
  }),
  repository: Joi.object().keys({
    type: Joi.string(),
    url: Joi.string().uri().required(),
  }),
  connection: Joi.object().required().keys({
    method: Joi.string().valid(METHODS),
    url: Joi.string(),
    toUrl: Joi.string(),
    bulk: Joi.boolean(),
    headers: Joi.object(),
    timeout: Joi.number().integer().positive(),
  }).xor('url', 'toUrl'),
  contextDefinition: Joi.object(),
  transform: Joi.string().required(),
});
