/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * test/refocus/sampleGeneratorTemplate.js
 */
'use strict';
const clone = require('clone');
const expect = require('chai').expect;
const SampleGeneratorTemplate =
  require('../../index').refocus.SampleGeneratorTemplate;

describe('test/refocus/sampleGeneratorTemplate.js >', (done) => {
  const good = {
    name: 'faa-delays',
    version: '1.3.14',
    description: 'Generate Refocus samples based on published FAA flight ' +
      'delays.',
    tags: ['airport', 'delay', 'faa'],
    author: {
      name: 'Vivian K. Flyte',
      email: 'vkflyte101@gmail.com',
    },
    repository: {
      type: 'git',
      url: 'https://github.com/vkflyte/faa-delays',
    },
    connection: {
      url:
        'http://services.faa.gov/airport/status/{{airportCode}}?format=json',
    },
    contextDefinition: {
      airportCode: {
        description: 'The three letter airport code for which you wish to ' +
          'retrieve data, e.g., "IAD"',
        required: true,
      },
    },
    transform: 'body of transform function goes here...',
  };

  let t;

  beforeEach(() => { t = clone(good); });

  it('ok', () => {
    expect(SampleGeneratorTemplate.validate(t))
    .to.have.property('error', null);
  });

  it('err - missing name', () => {
    delete(t.name);
    expect(SampleGeneratorTemplate.validate(t)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });
});
