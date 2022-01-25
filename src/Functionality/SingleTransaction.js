import { Link } from "react-router-dom"

const SingleTransaction = ({transaction, index}) => {
    return (
        <div className="SingleTransaction">
            <td>{transaction.date}</td>
            <td>{transaction.name}</td>
            <td>
                <Link to={`/transactions/${index}`}>
                    {transaction.amount}
                </Link>
            </td>
        </div>
    )
}

export default SingleTransaction