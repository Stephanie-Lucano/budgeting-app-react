import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const ShowTransaction = () => {
    const navigate = useNavigate()
    const URL = process.env.REACT_APP_API_URL
    const { id } = useParams()
    const [transaction, setTransaction] = useState([])

    useEffect(() => {
        axios
            .get(`${URL}/transactions/${id}`)
            .then((response) => {
                setTransaction(response.data)
            })
    }, [])

    const handleDelete = (event) => {
        axios
            .delete(`${URL}/transactions/${id}`)
            .then(() => {
                navigate("/transactions")
            })
    }

    return (
        <div className="ShowTransaction">
            <article>
                <h1>{transaction.date}</h1>
                <h2>{transaction.source}</h2>
                <h2>{"$"+ transaction.amount}</h2>
                <h2>{transaction.from}</h2>
                <h2>{transaction.category}</h2>
            </article>
            <aside>
                <Link to="/transactions"><button>Back</button></Link>
                <Link to={`/transactions/${id}/edit`}><button>Edit</button></Link>
                <button onClick={handleDelete}>Delete</button>
            </aside>
        </div>
    )
}

export default ShowTransaction