import React from 'react'
import "./Settings.scss"
const Settings = () => {
    return (
        <div className='settings'>
            <h1>Settings</h1>

            <div className='profile setting'>
                <h3>
                    Profile Settings
                </h3>
                <p className='description'>Update you personal information and contact details</p>

                <form action="submit" className="profile-form">
                    <div className="form-row">
                        <label>Full Name</label>
                        <input type="text" placeholder="Admin User" />
                    </div>

                    <div className="form-row">
                        <label>Email</label>
                        <input type="email" placeholder="admin@example.com" />
                    </div>

                    <div className="form-row">
                        <label>Phone</label>
                        <input type="number" placeholder="+1-555-023" />
                    </div>

                    <button type="submit" className="update-btn">
                        Update Profile
                    </button>
                </form>
            </div>

            <div className='system setting'>
                <h3>System Settings</h3>
                <p className='description'>Configure system preference and default options</p>

                <form action="submit" className="system-form">
                    <div className="form-row">
                        <label>Default Language</label>
                        <select id="languages" name="languages">
                            <option value="">--Choose a language--</option>
                            <option value="english" selected>English</option>
                            <option value="hindi">Hindi</option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                            <option value="german">German</option>
                        </select>
                    </div>


                    <div className="form-row">
                        <label>Time Zone</label>
                        <select id="timezone" name="timezone">
                            <option value="gmt-5">GMT-5 (Eastern Time)</option>
                            <option value="gmt-4">GMT-4 (Atlantic Time)</option>
                            <option value="gmt+0">GMT+0 (London)</option>
                            <option value="gmt+5:30" selected>GMT+5:30 (India)</option>
                            <option value="gmt+8">GMT+8 (Beijing)</option>
                            <option value="gmt+9">GMT+9 (Tokyo)</option>
                        </select>
                    </div>



                    <button type="submit" className="update-btn">
                        Save Settings
                    </button>
                </form>

            </div>


            <div className='notification setting'>
                <h3>Notification Preferences</h3>
                <p className='description'>Manage how and when you recieve notifications</p>


                <form className="notification-form">
                    <div className="form-row labels">
                        <label>
                            Email Notification
                            <p>Receive updates via email</p>
                        </label>

                        <label>
                            Performance Reports
                            <p>Weekly performance summaries</p>
                        </label>

                        <label>
                            New School Alerts
                            <p>Notification for new school registration</p>

                        </label>
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" id='notification' />
                        <input type="checkbox" id='reports' />
                        <input type="checkbox" id='alerts' />
                    </div>

                </form>


            </div>

            <div className='data setting'>
                <h3>Data Management</h3>
                <p className='description'>Export data and manage system backups</p>

                <label>Export Data</label>
                <button>Export Student Data</button>
                <button>Export School Reports</button>
                <button>Export Analytics</button>

                <label>Backup</label>
                <button>Create Backup</button>

                <p>Last back up: March 15, 2024</p>


            </div>

            <div className="empty"> </div>

        </div>
    )
}

export default Settings