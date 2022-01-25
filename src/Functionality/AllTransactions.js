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
    }, [URL])

    const bills = (transactions.filter(({amount}) => amount < 0).reduce((previousValue, currentValue) => previousValue + currentValue.amount,
    0))*-1
    console.log(bills)

    return (
        <div className="AllTransactions">
            <header>
                <div className="Money">
                {"I'ma tip myself: $" + 
                    transactions.reduce((previousValue, currentValue) => previousValue + currentValue.amount,
                    0)
                }
                </div>
                <div className="Bills">
                    {"Spent on Bills: $" + bills}
                </div>
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