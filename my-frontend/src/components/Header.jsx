import React from "react";

export default function Header({ onLogout, onToggleSidebar }) {
  return (
    <header className="header">
      <button className="menu-toggle" onClick={onToggleSidebar}>
        ☰
      </button>
      <h1>Hotel Chain PMS Dashboard</h1>
      <button className="logout-btn" onClick={onLogout}>Đăng xuất</button>
    </header>
  );
}
