/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * test/refocus-collector/repeater.js
 */
'use strict';
const clone = require('clone');
const expect = require('chai').expect;
const Repeater = require('../../index').refocusCollector.Repeater;

describe('test/refocus-collector/refocusInstance.js >', (done) => {
  const good = {
    name: 'Something Repeatable',
    interval: 1000,
    func: (a) => a++,
    onSuccess: (a) => a++,
    onFailure: (a) => a++,
    onProgress: (a) => a++,
    bulk: true,
    subjects: [{ absolutePath: 'a.b.c.d', name: 'd' }],
    handle: 'Something Repeatable',
    funcName: 'Something Repeatable',
  };

  let r;

  beforeEach(() => { r = clone(good); });

  it('ok', () => {
    expect(Repeater.validate(r)).to.have.property('error', null);
  });

  it('err - missing name', () => {
    delete(r.name);
    expect(Repeater.validate(r)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });

  it('ok - name/interval/func only', () => {
    expect(Repeater.validate({
      name: 'MyRepeater',
      interval: 1000,
      func: () => 1,
    })).to.have.property('error', null);
  });

  it('err - interval is string', () => {
    r.interval = 'Wolverine';
    expect(Repeater.validate(r)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });

  it('err - interval is float', () => {
    r.interval = 1.23;
    expect(Repeater.validate(r)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });

  it('err - interval is negative', () => {
    r.interval = -45;
    expect(Repeater.validate(r)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });

  it('func not a function', () => {
    r.func = '90210';
    expect(Repeater.validate(r)).to.have.property('error')
      .to.have.property('name', 'ValidationError');
  });
});
