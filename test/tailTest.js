const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("#tail", () => {
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(['Hello', 'Lighthouse', 'Labs']);
    assert.equal(result[0], 'Lighthouse');
    assert.equal(result[1], 'Labs')
  });

  it("returns '5' for ['3', '4', '5']", () => {
    const result = tail(['3', '4', '5']);
    assert.equal(result[0], '4');
    assert.equal(result[1], '5')
  });
});