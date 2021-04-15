import React, {useState} from 'react';
import axios from "axios";

function ExpenseSummary(props) {
    const [total, setTotal] = useState(0);
    const getTotal = () =>{
        let TOTAL = 0;
        axios.get(`http://127.0.1:5000/api/v1/get-expenses/${props.currentUser}`).then(res=>{
            console.log(res.data.monthly_total_expenses.length)
            res.data.monthly_total_expenses.forEach(element => {
                TOTAL += element.res.amount;
            });
            setTotal(TOTAL);
        })
    }
    getTotal();
    return (
        <>
        <div className="avatar-main">
            <span></span>
            <h5>{props.Users && props.Users[0].first_name} {props.Users && props.Users[0].last_name}</h5>
            <p>{props.Expenses && props.Expenses[0].expenses.length} Transactions. Joined 2 months ago</p>
        </div>
        <div className="card-container">
            <div className="card">
                <p>TOTAL SPENT</p>
                <h5>#{total}</h5>
            </div>
            <div className="card">
                <p>TOTAL INCOME</p>
                <h5>#900, 000, 000</h5>
            </div>
            <div className="card">
                <p>TRANSACTIONS</p>
                <h5>300</h5>
            </div>
        </div>
        </>
    )
}

export default ExpenseSummary
