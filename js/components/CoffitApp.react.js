var React = require('react');
var BatchStore = require('../stores/BatchStore');
var BatchesList = require('./BatchesList.react');

function getBatcheState() {
  return {
    batches: BatchStore.getAll(),
  };
}

var CoffitApp = React.createClass({

  getInitialState: function() {
    return getBatcheState();
  },

  componentDidMount: function() {
    BatchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BatchStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
        <div className="site-wrapper-inner">
            <div className="cover-container">
                <div className="inner cover">
                    <BatchesList batches={this.state.batches} />
                </div>
            </div>
        </div>
    );
  },

  _onChange: function() {
    this.setState(getTodoState());
  }

});

module.exports = CoffitApp;
