import React from 'react';

const UserDashboard = ({ username }) => {
    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="display-4">Welcome back, {username}!</h1>
                <p className="lead">Here's a summary of your activities.</p>
                <hr className="my-4" />
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card mb-4">
                        <div className="card-header">Recent Activities</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Activity 1</li>
                            <li className="list-group-item">Activity 2</li>
                            <li className="list-group-item">Activity 3</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4">
                        <div className="card-header">Favorites</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Favorite 1</li>
                            <li className="list-group-item">Favorite 2</li>
                            <li className="list-group-item">Favorite 3</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">Your Orders</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Order 1</li>
                            <li className="list-group-item">Order 2</li>
                            <li className="list-group-item">Order 3</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4">
                        <div className="card-header">Messages</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Message 1</li>
                            <li className="list-group-item">Message 2</li>
                            <li className="list-group-item">Message 3</li>
                        </ul>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Profile</div>
                        {/* Add relevant profile info here */}
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Wishlist</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Wish 1</li>
                            <li className="list-group-item">Wish 2</li>
                            <li className="list-group-item">Wish 3</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-header">Address Book</div>
                        {/* Add relevant address info here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
