/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * src/refocus/sampleGenerator.js
 */
const Joi = require('joi');

module.exports = Joi.object().keys({
  name: Joi.string().regex(/^[a-zA-Z0-9-]+$/).required(),
  description: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  generatorTemplate: Joi.object().keys({
    name: Joi.string().regex(/^[a-z0-9-]+$/).required(),
    version: Joi.string().required(),
  }),
  aspects: Joi.array().min(1).items(Joi.string()).required(),
  subjects: Joi.array().min(1).items(Joi.string()),
  subjectQuery: Joi.string(),
  context: Joi.object(),
}).xor('subjects', 'subjectQuery');
