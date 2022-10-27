const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component {
    render(){
        const { title, _id, artist, favoriteSong} = this.props.playlist
        return(
            <Default title={`${title} Edit Page`} playlist={this.props.playlist}>
                <form method="POST" action={`/playlists/${_id}?_method=PUT`}>
                    Title: <input type="text" name="title" defaultValue={title} /><br />
                    Artist: <input type="text" name="artist" defaultValue={artiist} /><br />
                    Favorite Songs: <input type="checkbox" name="favoriteSong" defaultChecked={favoriteSong}  /> <br />
                <input type="submit" value='Edit Playlist' />
                </form>
            </Default>
        )
    }
}
module.exports = Edit
