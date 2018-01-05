var Avatar = React.createClass({

    getDefaultProps: function() {
        return {
            path: "http://bit.ly/1NABbkf"
        };
    },

    render: function() {
        return (
            <div>
                <a href={this.props.path}>
                    <img src={this.props.path} />
                </a>
            </div>
        );
    }

});

React.render(<Avatar path="http://bit.ly/19FPeaP" />, document.body);