const React = require('react')

class Default extends React.Component {
  render () {
    const { playlist, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <div class='nav'>
            <nav>
              <a href='/playlists'>Go to Playlist Index</a><br />
              <a href='/playlists/new'>Create a New Song</a>
              {this.props.playlist ? <a href={`/playlists/${playlist._id}/edit`}> {playlist.title} Edit Page </a> : ''}<br />
              {this.props.playlist ? <a href={`/playlists/${playlist._id}`}>{playlist.title} Album Page </a> : ''}
            </nav>
          </div>
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
