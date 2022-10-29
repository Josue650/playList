const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component {
  render () {
    const { title, _id, artist, favoriteSong } = this.props.playlist
    return (
      <div class='edit'>
        <Default title={`${title} Edit Playlist`} playlist={this.props.playlist}>
          <form method='POST' action={`/playlists/${_id}?_method=PUT`}>
            Title: <input type='text' name='title' defaultValue={title} /><br />
            Artist: <input type='text' name='artist' defaultValue={artist} /><br />
            Favorite Songs: <input type='checkbox' name='favoriteSong' defaultChecked={favoriteSong} /> <br />
            <input type='submit' value='Edit Playlist' />
          </form>
        </Default>
      </div>
    )
  }
}
module.exports = Edit
