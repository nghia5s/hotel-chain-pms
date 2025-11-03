import React from "react";

const stays = [
  { id: 1, guest: "Nguyen A", room: "Deluxe 101", checkIn: "2025-11-05 14:12", status: "Checked-in" },
  { id: 2, guest: "Le C", room: "Standard 203", checkIn: "2025-11-06 15:00", status: "Reserved" },
];

export default function FrontDesk() {
  return (
    <div>
      <div className="card">
        <h3 style={{marginTop:0}}>Front Desk · Check-in / Check-out</h3>
        <div className="small-muted">Tìm đặt phòng, thực hiện check-in/out nhanh.</div>

        <div style={{marginTop:12}}>
          <button className="btn">Check-in nhanh</button>
          <button className="btn" style={{marginLeft:8, background:"#06b6d4"}}>Check-out</button>
        </div>

        <table className="table" style={{marginTop:12}}>
          <thead><tr><th>Khách</th><th>Phòng</th><th>Check-in</th><th>Trạng thái</th></tr></thead>
          <tbody>
            {stays.map(s=>(
              <tr key={s.id}>
                <td>{s.guest}</td>
                <td>{s.room}</td>
                <td>{s.checkIn}</td>
                <td className={s.status === "Checked-in" ? "status-occupied" : ""}>{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
