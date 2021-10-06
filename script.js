let title = document.querySelectorAll( ".title" )

on_title_click = () =>
{
	let content = event.target.parentNode.querySelector( ".subject_content" );

	content.classList.toggle( "invisible" )
	event.target.classList.toggle( "clicked" )
}

for( let i = 0; i < title.length; i ++ )
{
	title[ i ].addEventListener( "click", on_title_click )
}

let subs_head = document.querySelector( "#subjects_head" )

on_subs_head_click = () =>
{
	console.log( "sub head click" )
	let subs = event.target.parentNode.querySelector( ".subjects" )

	console.log( subs )
	subs.classList.toggle( "invisible" )
}

subs_head.addEventListener( "click", on_subs_head_click )
