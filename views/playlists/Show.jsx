const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
  render () {
    const { title, artist, favoriteSong, image } = this.props.playlist
    const capTitle = title[0].toUpperCase() + title.substring(1)
    return (
      <div class='show'>
        <Default title={`${capTitle} Album Page`} playlist={this.props.playlist}>
          <p>{capTitle} is by {artist} and {favoriteSong ? 'it\'s in favorites' : 'it\'s not in favorites'}</p>
          <div className='image'>
            {image ? <img src={image} /> : ''}
          </div>
        </Default>
      </div>
    )
  }
}
module.exports = Show
