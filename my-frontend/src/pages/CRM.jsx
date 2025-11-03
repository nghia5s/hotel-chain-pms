import React from "react";

const customers = [
  { id: 1, name: "Nguyen A", email: "a@example.com", phone: "0900123456", loyalty: "Gold", lastStay: "2025-10-12" },
  { id: 2, name: "Tran B", email: "b@example.com", phone: "0911987654", loyalty: "Silver", lastStay: "2025-09-01" },
];

export default function CRM() {
  return (
    <div>
      <div className="card">
        <h3 style={{marginTop:0}}>Guest Profiles (CRM)</h3>
        <div className="small-muted">Hồ sơ vàng: lịch sử, sở thích, ghi chú.</div>

        <table className="table" style={{marginTop:12}}>
          <thead><tr><th>Tên</th><th>Email</th><th>Phone</th><th>Loyalty</th><th>Last Stay</th></tr></thead>
          <tbody>
            {customers.map(c => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.loyalty}</td>
                <td>{c.lastStay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h4 style={{marginTop:0}}>Hợp nhất hồ sơ (merge)</h4>
        <div className="small-muted">Chức năng merge demo: gợi ý khi trùng số điện thoại/email.</div>
      </div>
    </div>
  );
}
