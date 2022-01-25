import axios from "axios"
import { useState, useEffect } from "react"
import SingleTransaction from "../Functionality/SingleTransaction"

const AllTransactions = () => {
    const URL = process.env.REACT_APP_API_URL
    const [transactions, setTransactions] = useState([])
    
    useEffect(() => {
        axios
            .get(`${URL}/transactions`)
            .then((response) => {
                setTransactions(response.data)
            })
    }, [])

    return (
        <div className="AllTransactions">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => {
                            return <SingleTransaction key={index} transaction={transaction} index={index} />
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default AllTransactions