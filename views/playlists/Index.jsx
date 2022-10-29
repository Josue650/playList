const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
  render () {
    const { playlists } = this.props
    return (
      <Default>
        <div id='playlist'>
                      <div class='song-container header'>
                        <div>Title</div>
                        <div>Artist</div>
                        <div>Favorite</div>
                        <div>Delete</div>
                      </div>
          {
                playlists.map((playlist) => {
                  const { title, artist, favoriteSong, _id } = playlist
                  return (

                      <div key={_id}>

                        <div class='song-container'>
                          <div><a href={`/playlists/${_id}`}>{title} </a></div>
                          <div class='art'>{artist}</div>
                          <div class='fav'>{favoriteSong ? 'yes' : 'no'}</div>
                          <div>
                            <form method='POST' action={`/playlists/${_id}?_method=DELETE`}>
                              <input type='submit' value={`Delete ${title} by ${artist}`} />
                            </form>
                          </div>
                        </div>
                      </div>


                  )
                })
               }
         </div>
      </Default>
    )
  }
}
module.exports = Index
