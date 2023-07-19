import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'

import { Playlist } from './Playlist';


function MenuPlayList() {
    return (
        <div className='playlistContainer'>
            <div className='nameContainer'>
                <p>Playlists</p>
                <i><FaPlus /></i>
            </div>
            <div className='playlistScroll'>

                {Playlist &&
                    Playlist.map((list) => (

                        <div className='playLists' key={list.id}>
                            <i className='list'><BsMusicNoteList /></i>
                            <p>{list.name}</p>
                            <i className='trash'><BsTrash /></i>
                        </div>
                     ))}
            </div>
        </div>
    );
}

export { MenuPlayList };
