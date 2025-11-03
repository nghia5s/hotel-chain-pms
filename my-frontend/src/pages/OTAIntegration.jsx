import React from "react";

const channels = [
  { id: "booking", name: "Booking.com", lastSync: "2025-11-01 09:12", status: "OK" },
  { id: "agoda", name: "Agoda", lastSync: "2025-11-01 09:10", status: "OK" },
  { id: "expedia", name: "Expedia", lastSync: "2025-11-01 08:50", status: "Error: rate mapping" },
];

export default function OTAIntegration() {
  return (
    <div>
      <div className="card">
        <h3 style={{marginTop:0}}>OTA Channel Manager</h3>
        <div className="small-muted">Theo dõi trạng thái đồng bộ rates & availability & bookings</div>

        <table className="table" style={{marginTop:12}}>
          <thead><tr><th>Kênh</th><th>Last sync</th><th>Trạng thái</th><th>Hành động</th></tr></thead>
          <tbody>
            {channels.map(c => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.lastSync}</td>
                <td className="small-muted">{c.status}</td>
                <td><button className="btn">Sync now</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h4 style={{marginTop:0}}>Mapping phòng & rate</h4>
        <div className="small-muted">Bảng mapping demo giữa room type & OTA rate plan.</div>
      </div>
    </div>
  );
}
