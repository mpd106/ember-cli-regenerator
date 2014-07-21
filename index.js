'use strict';

var regenerator = require('broccoli-regenerator');

function RegeneratorPlugin(options) {
  this.name = "ember-cli-regenerator";
  this.ext = "js";
  this.options = options || {};
}

RegeneratorPlugin.prototype.toTree = function(tree) {
  return regenerator(tree, this.options);
};

function EmberCLIRegenerator(project) {
  this.project = project;
  this.name = "Ember CLI Regenerator";
}

EmberCLIRegenerator.prototype.treeFor = function treeFor() { };

EmberCLIRegenerator.prototype.included = function included(app) {
  var registry = app.registry;
  this.app = app;

  var plugin = new RegeneratorPlugin(this.app.options.regeneratorOptions);

  registry.add('js', plugin);
};

module.exports = EmberCLIRegenerator;
