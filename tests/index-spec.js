var expect = require('expect.js');
var attr = require('../index');

describe('Attribute', function() {

  it('should has property initAttrs', function() {
    expect(attr.initAttrs).to.be.ok();
  });

  it('should has property set', function() {
    expect(attr.set).to.be.ok();
  });

  it('should has property get', function() {
    expect(attr.get).to.be.ok();
  });

  it('should has property change', function() {
    expect(attr.change).to.be.ok();
  });

  it('helper `isPlainObject`', function() {
    function Foo() {
      this['c'] = 'c';
      this['d'] = 'd';
    }
    Foo.prototype = {
      'a': 'a',
      'b': 'b'
    };
    expect(attr._isPlainObject(new Foo())).not.to.be.ok();
  });

});
