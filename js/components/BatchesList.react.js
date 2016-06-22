
var React = require('react');
var BatchesListItem = require('./BatchesListItem.react');

var BatchesList = React.createClass({
  render: function() {
    var allBatches = this.props.batches;
    var batches = [];

    for (var key in allBatches) {
      batches.push(<BatchesListItem key={key} batch={allBatches[key]} />);
    }

    return (<div className="list-group">{batches}</div>);
  }
});

module.exports = BatchesList;
