/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * src/transformArgs.js
 */
const Joi = require('joi');
const Aspect = require('./aspect');
const Subject = require('./subject');

module.exports = Joi.object().keys({
  ctx: Joi.object().required(),
  res: Joi.object().required(),
  aspects: Joi.array().min(1).required().items(Aspect),
  subjects: Joi.array().min(1).required().items(Subject),
  SAMPLE_BODY_MAX_LEN: Joi.number(),
});
