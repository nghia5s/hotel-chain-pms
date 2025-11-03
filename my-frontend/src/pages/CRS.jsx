import React, { useState } from "react";

const sampleBookings = [
  { id: 1, hotel: "Hotel 1", guest: "Nguyen A", roomType: "Deluxe", from: "2025-11-05", to: "2025-11-08", status: "Confirmed", source: "Direct" },
  { id: 2, hotel: "Hotel 3", guest: "Tran B", roomType: "Suite", from: "2025-11-10", to: "2025-11-12", status: "Pending", source: "Booking.com" },
];

export default function CRS() {
  const [q, setQ] = useState("");
  const rows = sampleBookings.filter(b => b.guest.toLowerCase().includes(q.toLowerCase()) || b.hotel.toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <div className="card">
        <h3 style={{marginTop:0}}>Central Reservation System</h3>
        <div className="small-muted">Quản lý đặt phòng tập trung, quản lý giá và availability</div>

        <div style={{display:"flex",gap:8,marginTop:12, marginBottom:12}}>
          <input placeholder="Tìm theo tên khách/khách sạn..." value={q} onChange={e=>setQ(e.target.value)} style={{flex:1,padding:8,borderRadius:6,border:"1px solid #eee"}} />
          <button className="btn">Tạo đặt phòng</button>
        </div>

        <table className="table">
          <thead><tr><th>Khách sạn</th><th>Khách</th><th>Loại phòng</th><th>From</th><th>To</th><th>Trạng thái</th><th>Nguồn</th></tr></thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <td>{r.hotel}</td>
                <td>{r.guest}</td>
                <td>{r.roomType}</td>
                <td>{r.from}</td>
                <td>{r.to}</td>
                <td>{r.status}</td>
                <td className="small-muted">{r.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h4 style={{marginTop:0}}>Inventory / Rate quick-edit (mock)</h4>
        <div className="small-muted">Inline edit bảng giá từng ngày — (demo placeholder).</div>
      </div>
    </div>
  );
}
