import React from 'react'

function Sidebar(props) {
    return (
        <div className="sidebar">
            <h5 className="sidebar-title"> USERS</h5>
            {console.log(props.Expenses)}
            {
                props.Users && props.Users.map((user, index) => {
                    return (
                        <a href={`/${user.id}`} className="sidebar-nav">
                            <span className="avatar"></span>
                            <span className="user-details">
                                <h5>{user.first_name} {user.last_name}</h5>
                                <p>{props.Expenses && props.Expenses[index].expenses.length} Transactions. Joined 2 months ago</p>
                            </span>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Sidebar
