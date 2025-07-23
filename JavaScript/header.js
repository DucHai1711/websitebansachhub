const langToggle = document.getElementById("lang-toggle");
const langSelector = document.querySelector(".language-selector");

// Thêm sự kiện click vào nút chọn ngôn ngữ
langToggle.addEventListener("click", function (event) {
  // Ngăn sự kiện click lan ra ngoài, tránh việc đóng ngay lập tức
  event.stopPropagation();
  // Thêm hoặc xóa class 'active' để hiện/ẩn dropdown
  langSelector.classList.toggle("active");
});

// Thêm sự kiện click cho toàn bộ cửa sổ trình duyệt
window.addEventListener("click", function () {
  // Nếu dropdown đang mở, hãy đóng nó lại
  if (langSelector.classList.contains("active")) {
    langSelector.classList.remove("active");
  }
});
