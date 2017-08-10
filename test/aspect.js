/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * test/aspect.js
 */
'use strict';
const clone = require('clone');
const expect = require('chai').expect;
const Aspect = require('../src/aspect');

describe('test/aspect.js >', (done) => {
  const good = {
    id: '40087bb6-24a4-43b6-8be6-c600203dbaf2',
    isDeleted: '0',
    isPublished: true,
    name: 'TRUST1',
    criticalRange: [3, 5],
    warningRange: [2, 2],
    infoRange: [1, 1],
    okRange: [0, 0],
    timeout: '3m',
    valueType: 'NUMERIC',
    relatedLinks: [
      {
        name: 'StatusSite',
        url: 'http://status.xxxxxxxxxx.com/status',
      },
      {
        name: 'XXXXXXXXX-XXXXXXXXXX',
        url: 'https://xxxxxxxxxx.xxxxxxxxxx.com/services/XXXXXX',
      },
    ],
    tags: ['XXX'],
    createdAt: '2017-04-19T03:06:29.998Z',
    updatedAt: '2017-06-13T15:49:03.862Z',
    apiLinks: [
      {
        href: '/v1/aspects/99987bb6-24a4-43b6-8be6-c600203dbaf2',
        method: 'DELETE',
        rel: 'Delete this aspect',
      },
      {
        href: '/v1/aspects/99987bb6-24a4-43b6-8be6-c600203dbaf2',
        method: 'GET',
        rel: 'Retrieve this aspect',
      },
      {
        href: '/v1/aspects/99987bb6-24a4-43b6-8be6-c600203dbaf2',
        method: 'PATCH',
        rel: 'Update selected attributes of this aspect',
      },
      {
        href: '/v1/aspects',
        method: 'POST',
        rel: 'Create a new aspect',
      },
      {
        href: '/v1/aspects/99987bb6-24a4-43b6-8be6-c600203dbaf2',
        method: 'PUT',
        rel: 'Overwrite all attributes of this aspect',
      },
    ],
  };

  let a;

  beforeEach(() => { a = clone(good); });

  it('ok', () => {
    expect(Aspect.validate(a)).to.have.property('error', null);
  });

  it('ok - missing id', () => {
    delete(a.id);
    expect(Aspect.validate(a)).to.have.property('error', null);
  });

  it('err - empty id', () => {
    a.id = '';
    expect(Aspect.validate(a)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });
});
