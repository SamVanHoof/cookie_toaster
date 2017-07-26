'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CookieToaster = _react2.default.createClass({
  displayName: 'CookieToaster',
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.text || 'HEYOO'
    );
  }
});

exports.default = CookieToaster;