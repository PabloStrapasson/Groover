import album from '../images/Dark_Side_of_the_Moon.png'

export default function Playlist({playlist_id, onClick, title, type, author}){

    return (
        <div className='Playlist-item' id={playlist_id} onClick={onClick}>
            <div className='Playlist-image' id={playlist_id}>
                <img src={album} alt='' id={playlist_id}></img>
            </div>
            <div className='Playlist-infos' id={playlist_id}>
                <div className='Playlist-title' id={playlist_id}>
                    <spam id={playlist_id}>{title}</spam>
                </div>
                <div className='Playlist-type' id={playlist_id}>
                    <spam id={playlist_id}>{type} . {author}</spam>
                </div>
            </div>
        </div>
    )
  
}
