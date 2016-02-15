module.exports = function(opts) {
  RukusApp.signals.init(this);
  this.state = RukusApp.ui.state;

  this.binds({'ui:updated': this.update});
}