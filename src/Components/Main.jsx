import Search from "./Search";
import { useState } from "react"
import { Link } from "react-router-dom";

function Main() {
	let [Input, setInput] = useState("")
	const handle = (e) => {
		setInput(e.target.value)
	}
	return (
		<div className="main">
			{Input === "" ? <Link to="./"><img src="./logo-dark.64d45129.png" alt="" /></Link> : <h1>{Input}</h1>}
			<Search handle={handle}/>
			<span className="sas">
				<Link href="./">Google Search</Link>
				<Link href="./">I'm Feeling Lucky</Link>
			</span>
			<p>
				Google offered in: <Link href="./">Hausa</Link> <Link href="./">Igbo</Link>{" "}
				<Link href="./">Edo</Link>
				<Link href="./">Yoruba</Link> <Link href="./">Nigerian Pidgin</Link>
			</p>
		</div>
	);
}

export default Main;
