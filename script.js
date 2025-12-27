document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribeForm");
  const emailInput = document.getElementById("emailInput");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      errorMessage.textContent = "❌ من فضلك أدخل إيميل صحيح";
      errorMessage.style.color = "red";
    } else {
      errorMessage.textContent = "✅ تم التسجيل بنجاح!";
      errorMessage.style.color = "green";
      setTimeout(() => {
        errorMessage.textContent = "";
      }, 2000); // الرسالة تختفي بعد ثانيتين
      form.reset();
    }
  });
});

// تبديل Light/Dark Mode
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});






// للحجز السريع
const bookingForm = document.querySelector(".form-section form");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    alert("🎉 تم الحجز بنجاح! سنتواصل معك قريبًا.");
    bookingForm.reset(); 
  });
}

// للدفع الآمن
const paymentForm = document.querySelector(".form-section form");
if (paymentForm) {
  paymentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ تم الدفع بنجاح! شكرًا لاستخدامك Booky.");
    paymentForm.reset();
  });
}

// البحث عن الكتب
const searchInput = document.getElementById("searchInput");
const books = document.querySelectorAll(".book");

searchInput.addEventListener("keyup", function () {
  let filter = searchInput.value.toLowerCase();
  books.forEach(book => {
    let title = book.querySelector("h3").textContent.toLowerCase();
    let author = book.querySelector(".author").textContent.toLowerCase();
    if (title.includes(filter) || author.includes(filter)) {
      book.style.display = "";
    } else {
      book.style.display = "none";
    }
  });
});
