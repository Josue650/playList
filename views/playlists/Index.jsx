const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
  render () {
    const { playlists } = this.props
    const favSongs = playlists.filter(object => object.favoriteSong)
    const notFavored = playlists.filter(object => !object.favoriteSong)
    return (
      <Default>
        <h1 class="welcome">Welcome to Playlist Creator</h1>
        <div id='playlist'>
          <div class='song-container header'>
            <div>Title</div>
            <div>Artist</div>
            <div>Favorite</div>
            <div>Delete</div>
          </div>
          <th><h1 class='heading'>Favorite Songs</h1></th>
          {
                favSongs.map((playlist) => {
                  const { title, artist, favoriteSong, _id } = playlist
                  return (

                    <div key={_id}>

                      <div class='song-container'>
                        <div><a href={`/playlists/${_id}`}>{title} </a></div>
                        <div class='art'>{artist}</div>
                        <div class='fav'>{favoriteSong ? 'yes' : 'no'}</div>
                        <div>
                          <form method='POST' action={`/playlists/${_id}?_method=DELETE`}>
                            <input type='submit' value={`Delete ${title} by ${artist}`} /><br />
                          </form>
                        </div>
                      </div>
                    </div>

                  )
                })
               }
               <th><h1 class='heading'>Non Favored Songs</h1></th>
          {
                notFavored.map((playlist) => {
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
