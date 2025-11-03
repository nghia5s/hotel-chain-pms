import React from "react";

export default function Reports() {
  return (
    <div>
      <div className="card">
        <h3 style={{marginTop:0}}>Reports & Analytics</h3>
        <div className="small-muted">Báo cáo tập trung cho quản lý chuỗi và từng cơ sở.</div>

        <div style={{marginTop:12, display:"flex", gap:12}}>
          <div style={{flex:1}} className="card">
            <h4 style={{marginTop:0}}>Doanh thu theo nguồn</h4>
            <p className="small-muted">(Biểu đồ placeholder)</p>
          </div>
          <div style={{flex:1}} className="card">
            <h4 style={{marginTop:0}}>Occupancy theo khách sạn</h4>
            <p className="small-muted">(Biểu đồ placeholder)</p>
          </div>
        </div>

        <div style={{marginTop:12}}>
          <button className="btn">Xuất báo cáo (PDF)</button>
          <button className="btn" style={{marginLeft:8, background:"#06b6d4"}}>Xuất Excel</button>
        </div>
      </div>
    </div>
  );
}
