import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NewTransactionForm = () => {
    const navigate = useNavigate()
    const URL = process.env.REACT_APP_API_URL
    console.log(URL)
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: 0,
        from: "",
        category: ""
    })

    const handleTextChange = (event) => {
        setTransaction({
            ...transaction, [event.target.id] : event.target.value
        })
    }
    
    const addTransaction = (newTransaction => {
        axios
        .post(`${URL}/transactions`, newTransaction)
        .then(() => navigate("/transactions"))
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(transaction)
        addTransaction(transaction)
    }

    return (
        <div className="NewForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date</label>
                <input 
                id="date"
                value={transaction.date}
                type="text"
                onChange={handleTextChange}
                required
                />
                <label htmlFor="name">Name</label>
                <input
                id="name"
                value={transaction.name}
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
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewTransactionForm