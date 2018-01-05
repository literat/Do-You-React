var TaskList = React.createClass({

    done: function(item) {
        this.props.done(item);
    },

    delete: function(item) {
        this.props.delete(item);
    },

    displayTask: function(task, item){
        return (
            <li>
                <span onClick={this.done.bind(this, item)} >{task}</span>
                <span onClick={this.delete.bind(this, item)} > [X]</span>
            </li>
        );
    },

    render: function() {
        return (
            <ul onClick={this.handleClick}>
                { this.props.items.map(this.displayTask) }
            </ul>
        );
    }

});