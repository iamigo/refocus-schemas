/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * src/refocus/sgtContextDefValue.js
 */
const Joi = require('joi');

module.exports = Joi.object().keys({
  description: Joi.string().required(),
  required: Joi.boolean(),
  encrypt: Joi.boolean(),
  default: Joi.any(),
});
