import React from "react";


export default function Comment ({ сomment }) {

	return (
		<div>
    		<b>Название комментария:</b> {сomment.name} <b>e-mail:</b> {сomment.email} <b>Содержание:</b> {сomment.body}
		</div>
	);
}