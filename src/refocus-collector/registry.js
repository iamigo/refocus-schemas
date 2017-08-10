/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * src/refocus-collector/registry.js
 */
const Joi = require('joi');

module.exports = Joi.object().keys({
  name: Joi.string().max(60).required(),
  host: Joi.string().max(4096),
  ipAddress: Joi.string().max(60),
  description: Joi.string().max(4096),
  refocusInstances: Joi.object(),
});
