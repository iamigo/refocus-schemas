/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * test/refocus/sample.js
 */
'use strict';
const clone = require('clone');
const expect = require('chai').expect;
const Sample = require('../../src/refocus/sample');

describe('test/refocus/sample.js >', (done) => {
  const good = {
    status: 'Timeout',
    createdAt: '2016-12-27T21:36:00.499Z',
    name: 'XXXXXX.XXXX.XXX.XX|XXXXXXXXXXXXXXXXXXXX',
    aspectId: '9999ab45-6e7f-4627-8b79-1e82b147dbda',
    updatedAt: '2017-02-06T19:44:39.006Z',
    messageBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
      'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
      'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
      'culpa qui officia deserunt mollit anim id est laborum',
    relatedLinks: [],
    value: 'Timeout',
    previousStatus: 'Critical',
    subjectId: 'e7434d70-3bba-4114-a95a-d2bdc4ae43a2',
    statusChangedAt: '2017-02-05T19:38:17.589Z',
    aspect: {
      tags: [],
      updatedAt: '2017-04-08T22:09:58.137Z',
      helpEmail: 'igoldstein@salesforce.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum',
      infoRange: [-1, -1],
      relatedLinks: [
        {
          name: 'GitRepo',
          url: 'https://git.xxxx.xxxxxxxx.com/xxxxxxxx/xxx-xxxxxx-xxxxxxxxxx',
        },
      ],
      warningRange: [-1, -1],
      isDeleted: '0',
      valueType: 'BOOLEAN',
      statusChangedAt: '2017-06-01T20:03:00.202Z',
      criticalRange: [0, 0],
      okRange: [1, 1],
      timeout: '20m',
      id: '9999ab45-6e7f-4627-8b79-1e82b147dbda',
      name: 'XXXXXXXXXXXXXXXXXXXX',
      createdAt: '2016-08-12T18:04:16.857Z',
      writers: ['xxxxxxxxxxx@xxxxxxxxxxxx.com'],
      isPublished: 'true',
    },
    apiLinks: [
      {
        href: '/v1/samples/XXXXXX.XXXX.XXX.XX|XXXXXXXXXXXXXXXXXXXX',
        method: 'DELETE',
        rel: 'Delete this sample',
      },
      {
        href: '/v1/samples/XXXXXX.XXXX.XXX.XX|XXXXXXXXXXXXXXXXXXXX',
        method: 'GET',
        rel: 'Retrieve this sample',
      },
      {
        href: '/v1/samples/XXXXXX.XXXX.XXX.XX|XXXXXXXXXXXXXXXXXXXX',
        method: 'PATCH',
        rel: 'Update selected attributes of this sample',
      },
      {
        href: '/v1/samples',
        method: 'POST',
        rel: 'Create a new sample',
      },
      {
        href: '/v1/samples/XXXXXX.XXXX.XXX.XX|XXXXXXXXXXXXXXXXXXXX',
        method: 'PUT',
        rel: 'Overwrite all attributes of this sample',
      },
    ],
  };

  let s;

  beforeEach(() => { s = clone(good); });

  it('ok', () => {
    expect(Sample.validate(s)).to.have.property('error', null);
  });

  it('ok - missing id', () => {
    delete(s.id);
    expect(Sample.validate(s)).to.have.property('error', null);
  });

  it('err - empty id', () => {
    s.id = '';
    expect(Sample.validate(s)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });

  it('err - string (not object)', () => {
    expect(Sample.validate('abc')).to.have.property('error')
    .to.have.property('name', 'ValidationError');
  });

  it('err - array (not string)', () => {
    expect(Sample.validate([s])).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });

  it('err - missing name', () => {
    delete(s.name);
    expect(Sample.validate(s)).to.have.property('error')
    .to.have.property('name', 'ValidationError');
  });

  it('err - name too small', () => {
    s.name = 'a';
    expect(Sample.validate(s)).to.have.property('error')
    .to.have.property('name', 'ValidationError');
  });

  it('err - name missing pipe character', () => {
    s.name = 'abcdefg';
    expect(Sample.validate(s)).to.have.property('error')
    .to.have.property('name', 'ValidationError');
  });
});
