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
    }, [URL, id])

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
                <h3>{transaction.date}</h3>
                <p>{transaction.name} <span>{"$"+ transaction.amount}</span></p>
                <p>{transaction.from}</p>
                <p>{transaction.category}</p>
            </article>
            <aside>
                <Link to={"/transactions"}><button>Back</button></Link>
                <Link to={`/transactions/${id}/edit`}><button>Edit</button></Link>
                <button onClick={handleDelete}>Delete</button>
            </aside>
        </div>
    )
}

export default ShowTransaction