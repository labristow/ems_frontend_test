import React from 'react'
import Sidebar from './Sidebar';
import ExpenseSummary from './ExpenseSummary';
import RecurringExpenses from './RecurringExpenses';
import LikeUsers from './LikeUsers';
import axios from "axios";

class Dashboard extends React.Component {
    constructor(props){
        super();
        this.state = {
            users: null,
            expenses: null,
            current_user: 0
        }
    }
    componentDidMount() {
        this.setState({current_user: window.location.href.split("/")[window.location.href.split("/").length -1]})
        axios.get("http://127.0.0.1:5000/api/v1/get-trend").then(res => {
            this.setState({users: res.data.users});
            this.setState({expenses: res.data.data})
            console.log(this.state.expenses)
        });
    }
    render() {
        return (
            <div className="row">
                <div className={`overlay ${this.state.users ? 'hide' : 'show'}`}>
                    <div className="loader-container">
                        <span className="loader">
                            <span className="loader-inner"></span>
                        </span>
                        <h5>Loading...</h5>
                    </div>
                </div>
                <Sidebar Users={this.state.users ? this.state.users : ""} Expenses={this.state.expenses ? this.state.expenses : ""} />
                <div className="main-content">
                    <ExpenseSummary currentUser={this.state.current_user} Users={this.state.users ? this.state.users : ""} Expenses={this.state.expenses ? this.state.expenses : ""}/>
                    <div className="recurring-expenses">
                        <div className="row2">
                            <h5>RECURRING EXPENSES</h5>
                            <RecurringExpenses />
                        </div>
                        <div className="row2">
                            <h5>USERS LIKE 'Jude Agboola'</h5>
                            <LikeUsers />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
