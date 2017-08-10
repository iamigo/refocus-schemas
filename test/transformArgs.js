/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * test/transformArgs.js
 */
'use strict';
const clone = require('clone');
const expect = require('chai').expect;
const TransformArgs = require('../src/transformArgs');

describe('test/transformArgs.js >', (done) => {
  const good = {
    ctx: { x: 'y' },
    res: { body: 'abc', status: 200 },
    aspects: [
      {
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
            name: 'PagerDuty-XXXXXXXXXX',
            url: 'https://xxxxxxxxxx.pagerduty.com/services/XXXXXX',
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
      },
    ],
    subjects: [
      {
        absolutePath: 'Vegetable.Root.Potato.Idaho.Spud',
        childCount: 0,
        description: 'Lorem ipsom dolor...',
        helpUrl: 'https://vegetable.com/xxxxxxxxxx',
        id: '999974f8-f383-4e6e-9b64-1b121d2f103f',
        isDeleted: '0',
        isPublished: false,
        name: 'Spud',
        parentAbsolutePath: 'Vegetable.Root.Potato.Idaho',
        relatedLinks: [
          {
            name: 'Carrot',
            url: 'https://carrot.xx.xxxxxx.com/xxxxxxxxxxxxxxxx',
          },
          {
            url: 'http://xxxx-xxxx.xxxx.xxxx.com:8080/xxx/xxx.jsp?xxx=xxx&amp;x=x',
            name: 'Availibility',
          },
          {
            url: 'https://muffin-xxx.xxxxxxx.com/xxxxxxx.html?xx=XXXX&amp;xxx=XXX',
            name: 'Muffin',
          },
        ],
        tags: [
          'Delicious',
          'Oval',
          'Brown',
          'Has_Eyes',
        ],
        sortBy: '0000_SPUD',
        createdAt: '2016-08-18T01:35:48.801Z',
        updatedAt: '2017-08-09T06:39:23.696Z',
        hierarchyLevel: 5,
        parentId: '9994e238-fa20-4630-9741-a9f22b876e1d',
        apiLinks: [
          {
            href: '/v1/subjects/999974f8-f383-4e6e-9b64-1b121d2f103f',
            method: 'DELETE',
            rel: 'Delete this subject',
          },
          {
            href: '/v1/subjects/999974f8-f383-4e6e-9b64-1b121d2f103f',
            method: 'GET',
            rel: 'Retrieve this subject',
          },
          {
            href: '/v1/subjects/999974f8-f383-4e6e-9b64-1b121d2f103f',
            method: 'PATCH',
            rel: 'Update selected attributes of this subject',
          },
          {
            href: '/v1/subjects',
            method: 'POST',
            rel: 'Create a new subject',
          },
          {
            href: '/v1/subjects/999974f8-f383-4e6e-9b64-1b121d2f103f',
            method: 'PUT',
            rel: 'Overwrite all attributes of this subject',
          },
        ],
      },
    ],
    SAMPLE_BODY_MAX_LEN: 4096,
  };

  let a;

  beforeEach(() => { a = clone(good); });

  it('ok', () => {
    expect(TransformArgs.validate(a)).to.have.property('error', null);
  });

  it('err - missing ctx', () => {
    delete(a.ctx);
    expect(TransformArgs.validate(a)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });

  it('ok - empty ctx', () => {
    a.ctx = {};
    expect(TransformArgs.validate(a)).to.have.property('error', null);
  });
});
