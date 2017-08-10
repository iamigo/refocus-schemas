/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * test/refocus/apiLink.js
 */
'use strict';
const clone = require('clone');
const expect = require('chai').expect;
const ApiLink = require('../../index').refocus.ApiLink;

describe('test/refocus/apiLink.js >', (done) => {
  const good = {
    href: '/v1/aspects/99987bb6-24a4-43b6-8be6-c600203dbaf2',
    method: 'DELETE',
    rel: 'Delete this aspect',
  };

  let a;

  beforeEach(() => { a = clone(good); });

  it('ok', () => {
    expect(ApiLink.validate(a)).to.have.property('error', null);
  });

  it('err - missing href', () => {
    delete(a.href);
    expect(ApiLink.validate(a)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });

  it('err - empty href', () => {
    a.href = '';
    expect(ApiLink.validate(a)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });
});
