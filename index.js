/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */
const ApiLink = require('./src/refocus/apiLink');
const Aspect = require('./src/refocus/aspect');
const Sample = require('./src/refocus/sample');
const Subject = require('./src/refocus/subject');

const RefocusInstance = require('./src/refocus-collector/refocusInstance');
const Registry = require('./src/refocus-collector/registry');
const Repeater = require('./src/refocus-collector/repeater');
const TransformArgs = require('./src/refocus-collector/transformArgs');

/**
 * index.js
 */
module.exports = {
  refocus: {
    ApiLink,
    Aspect,
    Sample,
    Subject,
  },
  'refocus-collector': {
    RefocusInstance,
    Registry,
    Repeater,
    TransformArgs,
  },
};
