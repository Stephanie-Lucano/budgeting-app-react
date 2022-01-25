import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const EditTransaction = () => {
    const URL = process.env.REACT_APP_API_URL
    const { id } = useParams()
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: 0,
        from: "",
        category: ""
    })
    const navigate = useNavigate()
    
    useEffect(() => {
        axios
            .get(`${URL}/transactions/${id}`)
            .then((response) => {
                setTransaction(response.data)
            })
    }, [])

    const handleTextChange = (event) => {
        setTransaction({
            ...transaction, [event.target.id]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .put(`${URL}/transactions/${id}`, transaction)
            .then(() => navigate(`/transactions/${id}`))
    }

    return (
        <div className="EditTransaction">
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date</label>
                <input 
                id="date"
                value={transaction.date}
                type="text"
                onChange={handleTextChange}
                required
                />
                <label htmlFor="source">Name</label>
                <input
                id="source"
                value={transaction.source}
                type="text"
                onChange={handleTextChange}
                required
                />
                <label htmlFor="amount">Amount</label>
                <input 
                id="amount"
                value={transaction.amount}
                type="number"
                onChange={handleTextChange}
                placeholder="0"
                required
                />
                <label htmlFor="from">From</label>
                <input 
                id="from"
                value={transaction.from}
                type="text"
                onChange={handleTextChange}
                required
                />
                <label htmlFor="category">Category</label>
                <input
                id="category"
                value={transaction.category}
                type="text"
                onChange={handleTextChange}
                required 
                />
                <input type="submit"></input>
            </form>
            <Link to={`/transaction/${id}`}><button>Back</button></Link>
        </div>
    )
}

export default EditTransaction