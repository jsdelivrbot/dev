(function() {
  var fruit = {
    fruit: [],
    init: function() {
      this.cacheDom();
      this.render();
    },
    cacheDom: function() {
      this.el = document.getElementById('container');
      this.button = this.el.getElementByTagName('button');
      this.input = this.el.getElementByTagName('input');
      this.input = this.el.getElementByTagName('ul');
      this.template = this.el.getElementById('fruit-template').html();
    },
    render: function() {
      console.log('foo');
    }

  };

  fruit.init();
})();