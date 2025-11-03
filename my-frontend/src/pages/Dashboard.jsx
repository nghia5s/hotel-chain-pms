import Header from "../components/Header";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../assets/styles.css";

export default function Dashboard() {
  // Dữ liệu giả lập cho biểu đồ
  const bookingData = [
    { month: "Jan", bookings: 320, revenue: 200 },
    { month: "Feb", bookings: 280, revenue: 220 },
    { month: "Mar", bookings: 350, revenue: 270 },
    { month: "Apr", bookings: 420, revenue: 300 },
    { month: "May", bookings: 390, revenue: 320 },
    { month: "Jun", bookings: 450, revenue: 400 },
  ];

  const occupancyData = [
    { hotel: "HCM", occupancy: 85 },
    { hotel: "HN", occupancy: 78 },
    { hotel: "ĐN", occupancy: 91 },
    { hotel: "Nha Trang", occupancy: 83 },
    { hotel: "Phú Quốc", occupancy: 88 },
  ];

  return (
  <div className="main-content">
          <h2>Xin chào, Admin 👋</h2>
          <p>Chào mừng bạn đến với hệ thống quản lý khách sạn chuỗi.</p>

          <div className="cards-container">
            <div className="card">Tổng số khách sạn: 10</div>
            <div className="card">Tổng số phòng: 800</div>
            <div className="card">Đang check-in: 120</div>
            <div className="card">Phòng trống: 540</div>
          </div>

          <div className="charts-section">
            <div className="chart-card">
              <h3>Xu hướng đặt phòng theo tháng</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={bookingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="bookings"
                    stroke="#1565c0"
                    strokeWidth={2}
                    name="Số lượng đặt phòng"
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#66bb6a"
                    strokeWidth={2}
                    name="Doanh thu (triệu VNĐ)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h3>Tỷ lệ lấp phòng theo cơ sở</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={occupancyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hotel" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="occupancy" fill="#42a5f5" name="Tỷ lệ lấp phòng (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
    </div>
  );
}
