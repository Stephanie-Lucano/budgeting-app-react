import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/"><button>Budget App</button></Link>
            <Link to="/transactions"><button>Index</button></Link>
            <Link to="/transactions/new"><button>New</button></Link>
            
        </div>
    )
}

export default Navbar