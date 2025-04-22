// index.js  (hoặc app.js)
const express = require('express');
const morgan  = require('morgan');
const { engine } = require('express-handlebars');

const app  = express();
const port = 3000;

app.use(express.static('public')); // Thư mục chứa file tĩnh (CSS, JS, ảnh...)

/* ---------- Middleware ---------- */
app.use(morgan('combined'));

/* ---------- Cấu hình Template Engine ---------- */
// Đăng ký engine có đuôi .hbs
app.engine(
  'hbs',
  engine({
    extname: '.hbs',          // đuôi file rút gọn
    defaultLayout: 'main',    // layout gốc (views/layouts/main.hbs)
    helpers: {
      // đặt helper dùng chung nếu cần, ví dụ:
      upper: str => str.toUpperCase(),
    },
  })
);

// Chỉ định view engine là hbs
app.set('view engine', 'hbs');
// Thư mục chứa views (mặc định ./views, có thể đổi)
app.set('views', 'src/resources/views');

/* ---------- Router ---------- */
app.get('/', (req, res) => {
  res.render('home', {                     // views/home.hbs
    title : 'Hello, Handlebars!',
    message: 'Ha Thanh Phong, are you there?',
  });
});

/* ---------- Khởi chạy ---------- */
app.listen(port, () => {
  console.log(`⚡️ App listening on http://localhost:${port}`);
});
