import React, { useState } from "react";

const tasksInit = [
  { id: 1, hotel: "Hotel 1", room: "101", status: "Need cleaning", assigned: "NV001" },
  { id: 2, hotel: "Hotel 2", room: "205", status: "Cleaning in progress", assigned: "NV005" },
  { id: 3, hotel: "Hotel 4", room: "310", status: "Inspected", assigned: "NV003" },
];

export default function Housekeeping() {
  const [tasks, setTasks] = useState(tasksInit);

  const markDone = id => {
    setTasks(tasks.map(t => t.id === id ? {...t, status: "Cleaned"} : t));
  };

  return (
    <div>
      <div className="card">
        <h3 style={{marginTop:0}}>Housekeeping · Quản lý buồng phòng</h3>
        <div className="small-muted">Phân công, cập nhật trạng thái phòng (mobile-friendly).</div>

        <table className="table" style={{marginTop:12}}>
          <thead><tr><th>Khách sạn</th><th>Phòng</th><th>Trạng thái</th><th>Gán cho</th><th>Hành động</th></tr></thead>
          <tbody>
            {tasks.map(t => (
              <tr key={t.id}>
                <td>{t.hotel}</td>
                <td>{t.room}</td>
                <td>{t.status}</td>
                <td>{t.assigned}</td>
                <td>
                  {t.status !== "Cleaned" && <button className="btn" onClick={()=>markDone(t.id)}>Đánh dấu đã dọn</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h4 style={{marginTop:0}}>Lost & Found</h4>
        <div className="small-muted">Ghi nhận đồ thất lạc (demo placeholder).</div>
      </div>
    </div>
  );
}
