class Foo {
  constructor() {
    this.bar = bar;
  }
}

var bar = new Foo('bar')

class Dog {
  constructor() {
    this.says = 'life is ruff';
  }
}

class Cat {
  growl() {
    return 'meow';
  }
}

var garfield = new Cat('garfield')

class FacelessMan {
  constructor(name) {
    this.name = name;
  }
}

var aMan = new FacelessMan(`Jaqen H'ghar`);



class Lion extends Cat {
  constructor() {
    super();
    this.size = 'BIG';
  }
}

class KeepSecret {
  constructor(secret) {
    this.squeal = function() {
      return secret;
    }
  }
}

class Key {
  constructor() {}
}

class Safe {
  constructor(secret, keyhole) {
    this.unlock = function(key) {
      if (key === keyhole) {
        return secret;
      }
    }
  }
}
