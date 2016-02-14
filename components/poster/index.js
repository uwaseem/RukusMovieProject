module.exports = function(opts) {
  this.active = false;

  this.selectMovie = function(event) {
    this.active = !this.active;
  };
}