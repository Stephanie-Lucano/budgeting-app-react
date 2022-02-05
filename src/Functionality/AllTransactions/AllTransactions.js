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
    const moneyLeft = transactions.map((transaction) => Number(transaction.amount)).reduce((previousValue, currentValue) => previousValue + currentValue,
    0)
    const spentOnBills = (transactions.filter(({amount}) => amount < 0).reduce((previousValue, currentValue) => previousValue + currentValue.amount,
    0))*-1

    const flag = () => {
        if (moneyLeft >= 1000) {
            return <span style={{color: "#97C1A9"}}>{"$"+moneyLeft}</span>;
        } else if (moneyLeft <= 0) {
            return <span style={{color: "red"}}>{"$"+moneyLeft}</span>;
        } else {
            return <span style={{color: "#FFFFB5"}}>{"$"+moneyLeft}</span>
        }
    }

    return (
        <div className="AllTransactions">
            <header className="Account-Summary">
                <p>I'ma spend this on myself: {flag()}
                </p>
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