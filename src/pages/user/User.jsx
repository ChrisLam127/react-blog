import './user.css';
import img01 from "../../../src/images/img01.jpg";
import {Link} from "react-router-dom";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@material-ui/icons"

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to='/newUser'>
            <button className="userAddBtn">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src={img01} alt="" className="userImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Bokang Manaka</span>
                        <span className="userShowUserTitle">Pilot Doctor</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle"> Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">bokangmanaka99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">31-08-2017</span>
                    </div>
                    <span className="userShowTitle"> Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">27 81 743 9255</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">bokangmanaka99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">574 Jacobs St Casa Bari</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label> Username</label>
                            <input type="text" placeholder='bokangmanaka99' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label> Full Name</label>
                            <input type="text" placeholder='Bokang Manaka' className='userUpdateInput' />  
                        </div>
                        <div className="userUpdateItem">
                            <label> Email</label>
                            <input type="text" placeholder='bokangmanaka99@gmail.com' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label> Phone</label>
                            <input type="number" placeholder='27 81 743 9255' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label> Address</label>
                            <input type="text" placeholder='574 Jacobs Casa Bari' className='userUpdateInput' />
                        </div>
                        
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className='userUpdateImg' src={img01} alt=""  />
                       <label htmlFor="file"><Publish className='userUpdateIcon'/> </label>
                        <input type="file" id='file' style={{display:'none'}} />
                        </div>
                        <button className="userUpdateBtn">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User