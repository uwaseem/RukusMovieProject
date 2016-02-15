module.exports = function() {
  RukusApp.signals.init(this);
  this.state = {
    page: 'loading'
  };

  this.emits({
    signal: 'updated',
    desc: 'this controller emits updated when any of its property changes',
    data: 'requires no data, emits object of changed properties'
  });

  this.route = (opts) => {
    return (ctx) => {
      this.change(opts);
    }
  }

  this.change = (opts) => {
    this.state.page = opts.page;
    this.emit('updated', this.state);
  }  
}