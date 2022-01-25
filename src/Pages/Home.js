import Logo from "../Assests/Budget.png"
import './App.css';

const Home = () => {
    return (
        <div className="Home">
            <h1>Home</h1>
            <h2>Welcome to the Budget App</h2>
            <img src={Logo} alt="Person tracking expenses" width="400" height="300" />
            
        </div>
    )
}

export default Home