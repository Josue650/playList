const React = require('react')

class Index extends React.Component {
    render(){
        const { playlists } = this.props
        return(
            <ul>
               {
                playlists.map((playlist) => {
                    const { title, artist, favoriteSong, _id} = playlist
                    return(
                        <li key={_id}>
                            <a href={`/playlists/${_id}`}>
                                {title}
                            </a> is {artist}
                            <br />
                            {
                                favoriteSong ?
                                'It\'s added to favorites playlist':
                                'It\'s not added to favorites playlist'
                            }
                            <br />
                            <form method="POST" action={`/playlists/${_id}?_method=DELETE`}>
                                <input type="submit" value={`Delete ${artist} ${title}`} />
                            </form>

                        </li>
                    )
                })
               }
            </ul>
        )
    }
}
module.exports = Index
