import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBed, FaClipboardList, FaBroom, FaUserFriends, FaChartBar, FaGlobe } from "react-icons/fa";

export default function Sidebar({ isOpen }) {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Dashboard", icon: <FaHome /> },
    { path: "/crs", label: "Central Reservation", icon: <FaClipboardList /> },
    { path: "/frontdesk", label: "Front Desk", icon: <FaBed /> },
    { path: "/housekeeping", label: "Housekeeping", icon: <FaBroom /> },
    { path: "/crm", label: "Guest Profiles", icon: <FaUserFriends /> },
    { path: "/ota", label: "OTA Integration", icon: <FaGlobe /> },
    { path: "/reports", label: "Reports", icon: <FaChartBar /> },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <h2 className="sidebar-title">{isOpen ? "PMS System" : "PMS"}</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
            <Link to={item.path}>
              <span className="icon">{item.icon}</span>
              {isOpen && <span className="label">{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
