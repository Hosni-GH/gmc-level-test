import React from 'react'
import {Link} from 'react-router-dom'
const UserCard = (props) => {
const {user = {}} = props
return (
    <div className="user-card">
        <div className="user-img">
            <img src="https://image.flaticon.com/icons/png/512/180/180644.png" alt="user-avatar"/>
        </div>
        <div  className="user-info">
            <div className="user-name">
                <h3>{user.name}</h3>
            </div>
            <div className="company-name">
                <p>{user.company.name}</p>
            </div>
            <div className="job-description">
                <p>{user.company.catchPhrase}</p>
            </div>
            <div className="btn-flw">
            <Link to={`/posts/${user.id}`}><span>Following</span></Link>
            </div>
        </div>
    </div>
)
}
export default UserCard