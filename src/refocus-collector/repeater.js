/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * src/refocus-collector/repeater.js
 */
const Joi = require('joi');

module.exports = Joi.object().keys({
  name: Joi.string().required(),
  interval: Joi.number().integer().positive(), // TODO define min/max!
  func: Joi.func().required(),
  onSuccess: Joi.func(),
  onFailure: Joi.func(),
  onProgress: Joi.func(),
  bulk: Joi.boolean(),
  subjects: Joi.array().min(1).items(Joi.object()),
  handle: Joi.any(),
  funcName: Joi.string(),
});
