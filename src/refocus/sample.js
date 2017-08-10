/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * src/refocus/sample.js
 */
const Joi = require('joi');
const Aspect = require('./aspect');
const ApiLink = require('./apiLink');

module.exports = Joi.object().keys({
  name: Joi.string()
    .regex(/^[0-9A-Za-z_\\.\\-]{1,4096}\|[0-9A-Za-z_\\-]{1,60}$/)
    .required(),
  messageBody: Joi.string().max(4096),
  messageCode: Joi.string().max(5),
  relatedLinks: Joi.array().items(
    Joi.object().keys({
      name: Joi.string().regex(/^[0-9A-Za-z_\\ -]{1,25}$/).required(),
      url: Joi.string().min(1).max(4096).required(),
    })
  ),
  status: Joi.string()
    .allow(['Critical', 'Warning', 'Info', 'OK', 'Timeout', 'Invalid']),
  previousStatus: Joi.string()
    .allow(['Critical', 'Warning', 'Info', 'OK', 'Timeout', 'Invalid', '']),
  statusChangedAt: Joi.string(),
  createdAt: Joi.string(),
  updatedAt: Joi.string(),
  aspectId: Joi.string(),
  subjectId: Joi.string(),
  aspect: Joi.object(),
  value: Joi.string().max(255),
  apiLinks: Joi.array().items(ApiLink),
});
