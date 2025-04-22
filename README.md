# 📝 Blog Express App

Một ứng dụng Blog đơn giản được xây dựng bằng **Node.js** và **Express**. Cho phép người dùng xem, tạo, chỉnh sửa và xóa các bài viết.

---

## 🚀 Tính năng

- 📰 Hiển thị danh sách bài viết
- ✍️ Tạo bài viết mới
- 🛠 Chỉnh sửa và xóa bài viết
- 🔎 Xem chi tiết bài viết
- 💾 Lưu dữ liệu bằng MongoDB (hoặc có thể là JSON/local file)
- 🧰 Middleware xử lý request body, logging...
- 📁 RESTful API endpoints

---

## 🧑‍💻 Công nghệ sử dụng

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (hoặc bất kỳ hệ quản trị dữ liệu nào bạn dùng)
- [Mongoose](https://mongoosejs.com/) (nếu dùng MongoDB)
- [EJS](https://ejs.co/) / [Pug](https://pugjs.org/) (nếu có giao diện)
- [dotenv](https://www.npmjs.com/package/dotenv) để quản lý biến môi trường

---

## 📦 Cài đặt

```bash
# Clone repo
git clone https://github.com/yourusername/blog-express.git
cd blog-express

# Cài dependencies
npm install

# Tạo file .env nếu cần
cp .env.example .env
