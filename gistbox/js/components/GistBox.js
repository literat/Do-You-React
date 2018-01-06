var GistBox = React.createClass({

    getInitialState: function () {
        return { gists: [] }
    },

    newGist: function (gist) {
        return <Gist username={gist.username} url={gist.url} />
    },

    addGist: function(username) {
        var url = `https://api.github.com/users/${username}/gists`;

        $.get(url, function(result) {
            var username = result[0].owner.login;
            var url = result[0].html_url;
            var gists = this.state.gists.concat({ username, url });

            this.setState({ gists });
        }.bind(this
        ));
    },

    render: function () {
        return (
            <div>
                <h1>GistBox</h1>

                <GistAddForm onAdd={this.addGist} />

                { this.state.gists.map(this.newGist) }
            </div>
        );
    }

});

React.render(<GistBox />, document.querySelector('#app'));