/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * test/refocus-collector/transformArgs.js
 */
'use strict';
const clone = require('clone');
const expect = require('chai').expect;
const Registry = require('../../src/refocus-collector/registry');

describe('test/refocus-collector/registry.js >', (done) => {
  const good = {
    name: 'xyz',
    host: 'xyz-internal.abc.def.com',
    ipAddress: '127.0.0.1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
      'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
      'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
      'culpa qui officia deserunt mollit anim id est laborum.',
    refocusInstances: {},
  };

  let i;

  beforeEach(() => { i = clone(good); });

  it('ok', () => {
    expect(Registry.validate(i)).to.have.property('error', null);
  });

  it('err - missing name', () => {
    delete(i.name);
    expect(Registry.validate(i)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });
});
