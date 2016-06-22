var React = require('react');

var BatchesListItem = React.createClass({
  render: function() {
    return (
        <a href="#" className="list-group-item">
            <h4 className="list-group-item-heading">Bunch {this.props.batch.id}</h4>
            <p class="list-group-item-text">This is a test</p>
        </a>
    );
  }
});

module.exports = BatchesListItem;
