// index.js  (hoặc app.js)
const express = require('express');
const morgan  = require('morgan');
const { engine } = require('express-handlebars');
const router = require("./routes/index")

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
      upper: str => str.toUpperCase(),
    },
  })
);

// Chỉ định view engine là hbs
app.set('view engine', 'hbs');
// Thư mục chứa views (mặc định ./views, có thể đổi)
              app.set('views', 'src/resources/views');



router(app) // tạo router từ file routes/index.js


/* ---------- Khởi chạy ---------- */
app.listen(port, () => {
  console.log(`⚡️ App listening on http://localhost:${port}`);
});
