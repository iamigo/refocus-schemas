/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * src/refocus-collector/refocusInstance.js
 */
const Joi = require('joi');

module.exports = Joi.object().keys({
  name: Joi.string().max(60).required(),
  url: Joi.string().uri().required(),
  token: Joi.string().required(),
});
