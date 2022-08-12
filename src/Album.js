import React from "react";
import Photo from './Photo';
//import './App.css';


export default function Album ({ album, photos }) {

	return (
		<div>
		  <b>Название альбома:</b> {album.title}
      {photos && photos.map((photo,i) => 
          <Photo
            photo={photo}
          />
        )}
		</div>
	);
}