const React = require('react')

class New extends React.Component {
    render(){
        return(
            <Default title='Add New Song to PLaylist'>
            <form method="POST" action="/playlists">
                Title: <input type="text" name='title' placeholder='Enter Song Title' />
                Artist: <input type="text" name="artist" placeholder='Enter Artist Name' />
                Favorite Song: <input type="checkbox" name='favoriteSong' />
                <input type="submit" value="Submit Song" />
            </form>
            </Default>
        )
    }
}
module.exports = New
