import axios from "axios"
import { useState, useEffect } from "react"
import SingleTransaction from "../SingleTransaction"
import "./AllTransactions.css"

const AllTransactions = () => {
    const URL = process.env.REACT_APP_API_URL
    const [transactions, setTransactions] = useState([])
    
    useEffect(() => {
        axios
            .get(`${URL}/transactions`)
            .then((response) => {
                console.log(URL)
                setTransactions(response.data)
            })
    }, [URL])
    const moneyLeft = transactions.reduce((previousValue, currentValue) => previousValue + currentValue.amount,
    0)
    const spentOnBills = (transactions.filter(({amount}) => amount < 0).reduce((previousValue, currentValue) => previousValue + currentValue.amount,
    0))*-1

    return (
        <div className="AllTransactions">
            <header className="Account-Summary">
                <p>{"I'ma spend this on myself: $" + moneyLeft}</p>
                <p>{"Spent on Bills: $" + spentOnBills}</p> 
            </header>
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