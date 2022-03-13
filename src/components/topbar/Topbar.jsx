import './topbar.css'
import img01 from "../../../src/images/img01.jpg"
import {Language, NotificationsNone, Settings} from '@material-ui/icons'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">LamboAdmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src={img01} alt="image" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar