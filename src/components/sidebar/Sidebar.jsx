import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MessageIcon from '@material-ui/icons/Message';
import {Link} from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboards</h3>
                    <ul className="sidebarList">
                        <Link to="/">
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                            Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon"/>
                            Sales
                        </li>
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                            Home
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                    <Link to="/users">
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                            Users
                        </li>
                    </Link>
                      <Link to="/products">
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcon"/>
                            Products
                        </li>
                      </Link>   
                        <li className="sidebarListItem">
                            <PaymentIcon className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <MessageIcon className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
