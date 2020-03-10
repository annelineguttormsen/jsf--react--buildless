// Create App component
function App(props) {
    // convert data to HTML
    return (
        <h1 className="title">Hello, {props.name}!</h1>
        <Image src="https://www.maxi-muth.de/wordpress/wp-content/uploads/2014/09/Professortocat_v2.png" alt="Github logo">
    );
}

function Image(props) {
	return(
		<img src={props.src} alt={props.alt}/>
	);
}

ReactDOM.render(
    <App name="World" />, 
    document.getElementById("root")
);