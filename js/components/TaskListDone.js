var TaskListDone = React.createClass({

    displayTask: (task) => <li>{task}</li>,

    render: function() {
        return (
            <ul>
                { this.props.items.map(this.displayTask) }
            </ul>
        );
    }

});