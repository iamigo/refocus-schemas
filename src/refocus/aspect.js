/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * src/refocus/aspect.js
 */
const Joi = require('joi');
const ApiLink = require('./apiLink');

module.exports = Joi.object().keys({
  name: Joi.string().regex(/^[0-9A-Za-z_\\-]{1,60}/).required()
    .description('Unique name'),
  description: Joi.string().max(4096),
  helpEmail: Joi.string().email(),
  helpUrl: Joi.string().max(2082).uri(),
  id: Joi.string().guid(),
  imageUrl: Joi.string().max(2082),
  isDeleted: Joi.number(),
  isPublished: Joi.boolean(),
  criticalRange: Joi.array().length(2).items(Joi.number()),
  warningRange: Joi.array().length(2).items(Joi.number()),
  infoRange: Joi.array().length(2).items(Joi.number()),
  okRange: Joi.array().length(2).items(Joi.number()),
  rank: Joi.number().integer(),
  timeout: Joi.string().max(8).regex(/^[0-9]+[smhdSMHD]$/),
  valueLabel: Joi.string().max(10),
  valueType: Joi.string().valid(['BOOLEAN', 'NUMERIC', 'PERCENT']),
  createdBy: Joi.string(),
  createdAt: Joi.string(),
  updatedAt: Joi.string(),
  tags: Joi.array().items(Joi.string().max(60)
    .regex(/^[0-9A-Za-z_][0-9A-Za-z_\\-]{1,59}$/)),
  relatedLinks: Joi.array().items(
    Joi.object().keys({
      name: Joi.string().regex(/^[0-9A-Za-z_\\ -]{1,25}$/).required(),
      url: Joi.string().min(1).max(4096).required(),
    })
  ),
  apiLinks: Joi.array().items(ApiLink),
});
