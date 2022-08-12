import React from "react";


export default function Photo ({ photo }) {

	return (
		<div>
        <b>Название фото:</b> {photo.title}
        <p><br />
        <a href={photo.url} ><img  src={photo.thumbnailUrl} ></img></a></p>
		</div>
	);
}