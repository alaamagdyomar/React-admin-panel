import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle"> Edit User </h1>
                <Link to="/newUser">
                        <button className="userAddButton">Create</button>
                </Link>            
            </div>
            <div className="userContainer">
                <div className="userShow">
                        <div className="userShowTop">
                            <img src="https://www.w3schools.com/css/paris.jpg" alt="" className="userShowImg" />
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">Anna Backer</span>
                                <span className="userShowUserTitle">Software Engineer</span>
                            </div>
                        </div>
                        <div className="userShowButtom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                                    <PermIdentity className="userShowIcon" />
                                    <span className="usershowInfoTitle">annabeck99</span>
                            </div>
                            <div className="userShowInfo">
                                    <CalendarToday className="userShowIcon"/>
                                    <span className="usershowInfoTitle">10.12.1999</span>
                            </div>
                            <span className="userShowTitle">Contact Details</span>
                            <div className="userShowInfo">
                                    <PhoneAndroid className="userShowIcon"/>
                                    <span className="usershowInfoTitle">+1 123 456 678</span>
                            </div>
                            <div className="userShowInfo">
                                    <MailOutline className="userShowIcon"/>
                                    <span className="usershowInfoTitle">annabeck99@gmail.com</span>
                            </div>
                            <div className="userShowInfo">
                                    <LocationSearching className="userShowIcon"/>
                                    <span className="usershowInfoTitle">New York  | USA</span>
                            </div>
                            </div>  
                        </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>First Name</label>
                                <input type="text" placeholder="Anna" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Last Name</label>
                                <input type="text" placeholder="Anna Backer" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+1 123 456 678" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="New York  | USA" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://www.w3schools.com/css/paris.jpg" alt="" className="userUpdateImg" />
                                <label className="publish" htmlFor="file"><Publish className="userUpdateIcon"/>attach</label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
