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
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/) 
- [EJS](https://ejs.co/) / [HandleBar](https://www.npmjs.com/package/express-handlebars) 
- [dotenv](https://www.npmjs.com/package/dotenv) để quản lý biến môi trường

---

## 📦 Cài đặt

```bash
# Clone repo
git clone git@github.com:AlexHa2/Blog_BE.git
cd blog-express

# Cài dependencies
npm install

# Cách run
npm start

# Tạo file .env nếu cần
cp .env.example .env
