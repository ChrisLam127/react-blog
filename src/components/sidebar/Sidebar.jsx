import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutlined,
} from "@material-ui/icons";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sbWrapper'>
        <div className='sbMenu'>
          <h3 className='sbTitle'>Dashboard</h3>
          <ul className='sbList'>
            <Link to='/' className='link'>
              <li className='sbListItem active'>
                <LineStyle className='sbIcon' />
                Home
              </li>
            </Link>
            <li className='sbListItem'>
              <Timeline className='sbIcon' />
              Analytics
            </li>
            <li className='sbListItem'>
              <TrendingUp className='sbIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sbMenu'>
          <h3 className='sbTitle'>Quick Menu</h3>
          <ul className='sbList'>
            <Link to='/users' className='link'>
              <li className='sbListItem active'>
                <PermIdentity className='sbIcon' />
                Users
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li className='sbListItem'>
                <Storefront className='sbIcon' />
                Products
              </li>
            </Link>
            <li className='sbListItem'>
              <AttachMoney className='sbIcon' />
              Transactions
            </li>
            <li className='sbListItem'>
              <BarChart className='sbIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sbMenu'>
          <h3 className='sbTitle'>Notifications</h3>
          <ul className='sbList'>
            <li className='sbListItem active'>
              <MailOutline className='sbIcon' />
              Mail
            </li>
            <li className='sbListItem'>
              <DynamicFeed className='sbIcon' />
              Feedback
            </li>
            <li className='sbListItem'>
              <ChatBubbleOutline className='sbIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sbMenu'>
          <h3 className='sbTitle'>Staffs</h3>
          <ul className='sbList'>
            <li className='sbListItem active'>
              <WorkOutlined className='sbIcon' />
              Manage
            </li>
            <li className='sbListItem'>
              <Timeline className='sbIcon' />
              Analytics
            </li>
            <li className='sbListItem'>
              <Report className='sbIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
