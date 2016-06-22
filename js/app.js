
global.jQuery = require('jquery');
global.bootstrap = require('bootstrap');

var React = require('react');
var ReactDOM = require('react-dom');

var CoffitApp = require('./components/CoffitApp.react');

ReactDOM.render(
  <CoffitApp />,
  document.getElementById('coffitapp')
);
