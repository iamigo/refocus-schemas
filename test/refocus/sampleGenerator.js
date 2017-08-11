/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * test/refocus/sampleGenerator.js
 */
'use strict';
const clone = require('clone');
const expect = require('chai').expect;
const SampleGenerator = require('../../index').refocus.SampleGenerator;

describe('test/refocus/sampleGenerator.js >', (done) => {
  const good = {
    name: 'Alexander',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
      'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
      'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
      'culpa qui officia deserunt mollit anim id est laborum',
    tags: ['Laurens', 'Mulligan', 'Lafayette'],
    generatorTemplate: {
      name: 'alexander-hamilton',
      version: '^1.4',
    },
    aspects: ['Peggy', 'Angelica', 'Eliza'],
    subjectQuery: '?absolutePath=Miranda.*',
    context: {
      username: 'a.burr',
      password: 'dueling.sux',
    },
  };

  let s;

  beforeEach(() => { s = clone(good); });

  it('ok', () => {
    expect(SampleGenerator.validate(s)).to.have.property('error', null);
  });

  it('err - missing name', () => {
    delete(s.name);
    expect(SampleGenerator.validate(s)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });
});
