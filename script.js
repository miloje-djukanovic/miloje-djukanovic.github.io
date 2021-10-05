let title = document.querySelectorAll( ".title" )

on_title_click = () =>
{
	let content = event.target.parentNode.querySelector( ".subject_content" );

	if( content.style.display !== "block" )
	{
		content.style.display = "block"
	}
	else
	{
		content.style.display = "none"
	}

	event.target.classList.toggle( "clicked" );
}

for( let i = 0; i < title.length; i ++ )
{
	title[ i ].addEventListener( "click", on_title_click );
}
