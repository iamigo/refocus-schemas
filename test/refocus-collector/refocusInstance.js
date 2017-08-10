/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * test/refocus-collector/refocusInstance.js
 */
'use strict';
const clone = require('clone');
const expect = require('chai').expect;
const RefocusInstance =
  require('../../index').refocusCollector.RefocusInstance;

describe('test/refocus-collector/refocusInstance.js >', (done) => {
  const good = {
    name: 'Prod',
    url: 'https://refocus.zorba.com',
    token: 'eyJ0eXAiOiJKI1QiLCJhbGciOiJIRzI1NiJ9.eWJ0b2tlbm5hbWUiOiJJTUd0b2tlbiIsInVzZXJuYW1lIjoiaWdvbGRzdGVpbi5kZXZib3hAc2FsZXNmb3JjZS5jb20iLCJpYXQiOjE0OTc2MjY0MzR9.FcA4hWCjKY7feJV1n-Wj7zuwCuiWw_qHK_5J7Kj03Y2', // jscs: ignore
  };

  let i;

  beforeEach(() => { i = clone(good); });

  it('ok', () => {
    expect(RefocusInstance.validate(i)).to.have.property('error', null);
  });

  it('err - missing name', () => {
    delete(i.name);
    expect(RefocusInstance.validate(i)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });
});
