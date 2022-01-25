import { Link } from "react-router-dom"

const SingleTransaction = ({transaction, index}) => {
    return (
        <tr className="SingleTransaction">
            <td>{transaction.date}</td>
            <td>{transaction.source}</td>
            <td>
                <Link to={`/transactions/${index}`}>
                    {transaction.amount}
                </Link>
            </td>
        </tr>
    )
}

export default SingleTransaction