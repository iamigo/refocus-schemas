/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * test/subject.js
 */
'use strict';
const clone = require('clone');
const expect = require('chai').expect;
const Subject = require('../src/subject');

describe('test/subject.js >', (done) => {
  const good = {
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
  };

  let s;

  beforeEach(() => { s = clone(good); });

  it('ok', () => {
    expect(Subject.validate(s)).to.have.property('error', null);
  });

  it('ok - missing id', () => {
    delete(s.id);
    expect(Subject.validate(s)).to.have.property('error', null);
  });

  it('err - empty id', () => {
    s.id = '';
    expect(Subject.validate(s)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });
});
