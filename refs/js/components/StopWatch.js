var StopWatch = React.createClass({

    getInitialState: function() {
        return {
            time: 0,
            until: 0,
            enabled: true
        };
    },

    start: function () {
        //React.findDOMNode(this.refs.button).disabled = true;
        this.setState({ enabled: false });

        this.interval = setInterval( () => {
            this.tick();

            if (this.isTimeUp()) {
                this.finish();
            }
        }, 1000)
    },

    isTimeUp: function () {
        return this.state.time == this.state.until;
    },

    finish: function () {
        console.log('Ding Ding Ding');

        this.replaceState(this.getInitialState());

        React.findDOMNode(this.refs.input).focus();
        //React.findDOMNode(this.refs.button).disabled = false;

        return clearInterval(this.interval);
    },

    type: function (e) {
        this.setState({ until: e.target.value })
    },

    tick: function () {
        this.setState({ time: this.state.time + 1 });
    },

    render: function() {
        return (
            <div>
                <input ref="input" onChange={this.type} value={this.state.until}/>
                <button disabled={ ! this.state.enabled} /*ref="button"*/ onClick={this.start}>Go</button>
                <h1>{this.state.time}</h1>
            </div>
        );
    }

});

React.render(<StopWatch />, document.body);