const books = [
  { title: "تشريح القلق", author: "محمد طه" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "الفيل الأزرق", author: "أحمد مراد" }
];

const booksDiv = document.getElementById("books");

function showBooks(list) {
  booksDiv.innerHTML = "";
  list.forEach(book => {
    booksDiv.innerHTML += `
      <div>
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      </div>
    `;
  });
}

showBooks(books);
