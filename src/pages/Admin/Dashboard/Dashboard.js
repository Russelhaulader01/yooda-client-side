// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './DashBoardStyle.css';

const Dashboard = () => {

    return (
        <div>
            <div className='container pt-5'>
                <div className='p-3 mt-2'>
                    <div className='dashboardContainer row'>
                        <div className='col-12 col-md-3 link-container'>
                            <Link to='/dashboard/addFoods'>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>Add Foods </p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                            <Link to='/dashboard/addStudents'>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>Add Student </p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                            <Link to='/dashboard/allFoods'>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>All Foods </p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                            <Link to='/dashboard/allStudents'>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>All Students </p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                            <Link to='/dashboard/serveFood'>
                                <div className='d-flex align-items-center justify-content-between link-item'>
                                    <p>Serve Food </p>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </Link>
                        </div>
                        <div className='col-12 col-md-9 '>
                            <h5 style={{ color: 'crimson' }} className='fw-bold mb-4'>{''}</h5>
                            <hr />
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;