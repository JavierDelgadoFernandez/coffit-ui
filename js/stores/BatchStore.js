var React = require('react');
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var BatchConstants = require('../constants/BatchConstants');

var _batches = {
  1: {
    id: 'a'
  },
  2: {
    id: 'b'
  }
};

var CHANGE_EVENT = 'change';

function create(text) {
  _batches[id] = {
    id: id
  };
}

var BatchStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _batches;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case BatchConstants.BATCH_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
        BatchStore.emitChange();
      }
      break;

    default:
      // no op
  }
});

module.exports = BatchStore;
