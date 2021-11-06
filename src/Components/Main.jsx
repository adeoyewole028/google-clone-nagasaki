import Search from "./Search";
import { useState } from "react"

function Main() {
	let [Input, setInput] = useState("")
	const handle = (e) => {
		setInput(e.target.value)
	}
	return (
		<div className="main">
			{Input === "" ? <a href="#"><img src="./logo-dark.64d45129.png" alt="" /></a> : <h1>{Input}</h1>}
			<Search handle={handle}/>
			<span className="sas">
				<a href="#">Google Search</a>
				<a href="#">I'm Feeling Lucky</a>
			</span>
			<p>
				Google offered in: <a href="#">Hausa</a> <a href="#">Igbo</a>{" "}
				<a href="#">Edo</a>
				<a href="#">Yoruba</a> <a href="#">Nigerian Pidgin</a>
			</p>
		</div>
	);
}

export default Main;
