var TaskApp = React.createClass({
    getInitialState: function() {
        return {
            itemsToDo: [],
            itemsDone: [],
            task: ''
        };
    },

    addTask: function(e) {
        var task = this.state.task;
        if(task != '') {
            this.setState({
                itemsToDo: this.state.itemsToDo.concat([this.state.task]),
                task: ''
            });
        }

        e.preventDefault();
    },

    doneTask: function(item) {
        var itemsToDo = this.state.itemsToDo;
        var trans = itemsToDo[item];
        delete itemsToDo[item];
        var itemsDone = this.state.itemsDone.concat(trans);
        this.setState({ itemsToDo, itemsDone });
    },

    deleteTask: function (item) {
        var items = this.state.itemsToDo;
        delete items[item];
        this.setState({ items });
    },

    onChange: function(e) {
        var task = e.target.value;

        this.setState({ task });
    },

    render: function() {
        return (
            <div>
                <h1>My Tasks</h1>
                <TaskListDone items={this.state.itemsDone} />
                <TaskList items={this.state.itemsToDo} delete={this.deleteTask} done={this.doneTask} />

                <form onSubmit={this.addTask}>
                    <input onChange={this.onChange} value={this.state.task} />
                    <button>Add Task</button>
                </form>
            </div>
        );
    }

});

React.render(<TaskApp />, document.body);