const React = require('react')

class Show extends React.Component {
    render(){
        const { title, artist, favoriteSong} = this.props.playlist
        const capTitle = title[0].toUpperCase() + title.substring(1)
        return(
            <Default>
                <p>{capTitle} is by {artist} and {favoriteSong ? 'it\'s on favorites' : 'it\'s not on favorites'}</p>
            </Default>
        )
    }
}
module.exports = Show
