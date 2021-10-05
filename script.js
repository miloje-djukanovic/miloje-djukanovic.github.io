let title = document.querySelectorAll( ".subject h4" )

on_title_click = () =>
{
	console.log( "changed" )
	let content = event.target.parentNode.querySelector( ".subject_content" );

	console.log( content );
	console.log( content.style.display );

	if( content.style.display !== "block" )
	{
		content.style.display = "block"
	}
	else
	{
		content.style.display = "none"
	}
}

for( let i = 0; i < title.length; i ++ )
{
	title[ i ].addEventListener( "click", on_title_click );
}
