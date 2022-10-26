const React = require('react')

class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                    <a href='/playlists'>Go to Playlist Home</a>
                    <a href='/pplaylists/new'>Create a New Song</a>
                    { this.props.playlist? <a href={`/playlists/${playlist._id}/edit`}> {playlist.name} Edit Page </a> : ''}<br/>
                    { this.props.playlist? <a href={`/playlists/${playlist._id}`}>{playlist.name} Show Page </a> : ''}
                    </nav>
                    <h1>
                        {title}
                    </h1>

                    {this.props.children}
                </body>
            </html>
        )
    }
}
module.exports = Default
