/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * src/refocus/apiLink.js
 */
const Joi = require('joi');

module.exports = Joi.object().keys({
  href: Joi.string().required()
    .description('URL that uniquely defines the resource'),
  method: Joi.string().required()
    .allow(['DELETE', 'GET', 'PATCH', 'POST', 'PUT']),
  rel: Joi.string().required()
    .description('Relationship'),
});
