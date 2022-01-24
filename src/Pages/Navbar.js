import { Link } from "react-router-dom"
import Logo from "../Assests/Budget.png"

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/">
                <img src={Logo} alt="Budgeting" width="200" height="150" />
            </Link>
            <button>
                <Link to="/transactions">Index</Link>
            </button>
            <button>
                <Link to="/transactions/new">New</Link>
            </button>
        </div>
    )
}

export default Navbar