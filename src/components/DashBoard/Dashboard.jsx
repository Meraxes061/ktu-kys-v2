import React, { useState } from 'react'
import './Dashboard.scss'
import { Paper, Button } from '..'

const Dashboard = () => {
    const [isOpen, setOpen] = useState(true)

    return (
        <Paper>
            <div className={`dashboard ${isOpen && 'dashboard--active'}`}>
                <div className="d-flex align-items-baseline justify-content-between">
                    <h1 className='dashboard__title'>Dashboard</h1>
                    <Button onClick={() => setOpen(!isOpen)}>
                        <i className={`fas fa-chevron-down fa-2x ${isOpen && 'fa-rotate-180'}`}
                            style={{ color: '#FF9900' }}></i>
                    </Button>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 mb-4 mb-md-0">
                        <img
                            className='dashboard__profile-picture'
                            src="https://s16815.pcdn.co/wp-content/uploads/2017/06/iStock-609683672-studying.jpg"
                            alt="student" />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <table className="dashboard__table">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>Umuthan</td>
                                </tr>
                                <tr>
                                    <th>Surname</th>
                                    <td>Kuzur</td>
                                </tr>
                                <tr>
                                    <th>Grade</th>
                                    <td>4. Grade</td>
                                </tr>
                                <tr>
                                    <th>Number</th>
                                    <td>348138</td>
                                </tr>
                                <tr>
                                    <th>Consultant</th>
                                    <td>İ. H. Altaş</td>
                                </tr>
                                <tr>
                                    <th>Faculty</th>
                                    <td>Engineering Faculty</td>
                                </tr>
                                <tr>
                                    <th>State</th>
                                    <td>Student</td>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <td>Electrical & Electronics Engineering</td>
                                </tr>
                                <tr>
                                    <th>E-Mail</th>
                                    <td>348138@ktu.edu.tr</td>
                                </tr>
                                <tr>
                                    <th>Phone Number</th>
                                    <td>0531-265-02-17</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

export default Dashboard
