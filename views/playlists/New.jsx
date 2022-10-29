const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
  render () {
    return (
      <div class='add'>
        <Default title='Add New Song to Playlist'>
          <form method='POST' action='/playlists'>
            Title: <input type='text' name='title' placeholder='Enter Song Title' /><br />
            Artist: <input type='text' name='artist' placeholder='Enter Artist Name' /><br />
            Image: <input type='text' name='image' placeholder='insert img url' /><br />
            Favorite Song: <input type='checkbox' name='favoriteSong' />
            <input type='submit' value='Submit Song' />
          </form>
        </Default>
      </div>
    )
  }
}
module.exports = New
