import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component{
    render() {
        return (
            <ul class="transactions">
                {this.props.transactions.map(transaction => <Transaction key={transaction.id} {...transaction} />)}
            </ul>
        )
    }
}

export default TransactionsList;