import './widgetSm.css'
import img from "../../images/img01.jpg"
import {Visibility } from '@material-ui/icons'

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Joined Members</span>
        <ul className="wsmList">
            <li className="wsmListItem">
                <img src={img} alt="" className="wsmimg" />
                <div className="wsmUser">
                    <span className="wsmUsername">Chris Lambo</span>
                    <span className="wsmUserTitle">Software Engineer</span>
                </div>
                <button className="wsmButton">
                    <Visibility className='wsmIcon'/>
                    Display
                </button>
            </li>
            <li className="wsmListItem">
                <img src={img} alt="" className="wsmimg" />
                <div className="wsmUser">
                    <span className="wsmUsername">Chris Lambo</span>
                    <span className="wsmUserTitle">Software Engineer</span>
                </div>
                <button className="wsmButton">
                    <Visibility className='wsmIcon'/>
                    Display
                </button>
            </li>
            <li className="wsmListItem">
                <img src={img} alt="" className="wsmimg" />
                <div className="wsmUser">
                    <span className="wsmUsername">Chris Lambo</span>
                    <span className="wsmUserTitle">Software Engineer</span>
                </div>
                <button className="wsmButton">
                    <Visibility className='wsmIcon'/>
                    Display
                </button>
            </li>
            <li className="wsmListItem">
                <img src={img} alt="" className="wsmimg" />
                <div className="wsmUser">
                    <span className="wsmUsername">Chris Lambo</span>
                    <span className="wsmUserTitle">Software Engineer</span>
                </div>
                <button className="wsmButton">
                    <Visibility className='wsmIcon'/>
                    Display
                </button>
            </li>
            <li className="wsmListItem">
                <img src={img} alt="" className="wsmimg" />
                <div className="wsmUser">
                    <span className="wsmUsername">Chris Lambo</span>
                    <span className="wsmUserTitle">Software Engineer</span>
                </div>
                <button className="wsmButton">
                    <Visibility className='wsmIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm