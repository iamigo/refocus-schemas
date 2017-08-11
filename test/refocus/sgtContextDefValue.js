/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * test/refocus/sgtContextDefValue.js
 */
'use strict';
const clone = require('clone');
const expect = require('chai').expect;
const SgtContextDefValue = require('../../index').refocus.SgtContextDefValue;

describe('test/refocus/sgtContextDefValue.js >', (done) => {
  const good = {
    description: 'The three letter airport code for which you wish to ' +
      'retrieve data, e.g., "IAD"',
    required: true,
    default: 'IAD',
  };

  let v;

  beforeEach(() => { v = clone(good); });

  it('ok', () => {
    expect(SgtContextDefValue.validate(v))
    .to.have.property('error', null);
  });

  it('err - missing description', () => {
    delete(v.description);
    expect(SgtContextDefValue.validate(v)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });
});
