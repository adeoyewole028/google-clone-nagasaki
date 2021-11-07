import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
	const [Open, setOpen] = useState(false);
	const open = () => {
		setOpen(!Open);
	};
	return (
		<nav className="nav">
			<ul>
				<li>
					<Link to="./">Gmail</Link>
				</li>
				<li>
					<Link to="./">Images</Link>
				</li>
				<li onClick={open} className="ap">
					<AppsRoundedIcon />
				</li>
				<li>
					<img
						src="./alexey-savchenko-k4Akpt5-Sfk-unsplash.jpg"
						alt="profileImg"
					/>
				</li>
			</ul>
			{Open && (
				<ul className="sap">
					<div>
						<p className="loader"></p>
						<PriorityHighRoundedIcon />
						<p>Can't seem load the app</p>
						<p> launcher right now. Try again or</p>
						<p>
							{" "}
							go to the <Link to="./">Google Products</Link> page
						</p>
					</div>
				</ul>
			)}
		</nav>
	);
}

export default Nav;
