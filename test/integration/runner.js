/**
 * Run Integration Tests
 *
 * Uses the waterline-adapter-tests module to
 * run mocha tests against the currently implemented
 * waterline API.
 */

var tests = require('waterline-adapter-tests'),
    adapter = require('../../lib/adapter'),
    mocha = require('mocha');

/**
 * Build a Redis Config File
 */

var config = {
  host: 'localhost',
  port: 27017
};

/**
 * Run Tests
 */

var suite = new tests({ adapter: adapter, config: config });