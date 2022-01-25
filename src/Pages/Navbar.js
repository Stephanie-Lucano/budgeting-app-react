import { Link } from "react-router-dom"
import Logo from "../Assests/Budget.png"

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/">
                <img src={Logo} alt="Budgeting" width="200" height="150" />
            </Link>
            <Link to="/transactions"><button>Index</button></Link>
            <Link to="/transactions/new"><button>New</button></Link>
            
        </div>
    )
}

export default Navbar