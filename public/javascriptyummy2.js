//For bookmarks
function addBookmark(category, name, link) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  if (!bookmarks) {
    bookmarks = {
      characters: [],
      bosses: [],
      charms: []
    };
  }

  const exists = bookmarks[category].some(item => item.name === name);
  if (exists) {
    alert("You have already bookmarked this index entry!");
    return;
  }

  bookmarks[category].push({ name, link });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  alert("Bookmark saved!");
}

document.addEventListener("DOMContentLoaded", function () {
  loadBookmarks();
});

function loadBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  if (!bookmarks) {
    bookmarks = { characters: [], bosses: [], charms: [] };
  }

  displayCategory(bookmarks.characters, "listcharacters", "characters");
  displayCategory(bookmarks.bosses, "listbosses", "bosses");
  displayCategory(bookmarks.charms, "listcharms", "charms");
}

function displayCategory(items, listId, category) {
  const ul = document.getElementById(listId);

  ul.innerHTML = "";

  if (!items || items.length === 0) {
    ul.innerHTML = "<li>No bookmarks yet.</li>";
    return;
  }

  items.forEach((item, index) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = item.name;

    const button = document.createElement("button");
    button.textContent = "Delete Bookmark ❌";
    button.classList.add("delete-btn");
    button.onclick = function () {
      removeBookmark(category, index);
    };

    li.appendChild(link);
    li.appendChild(button);
    ul.appendChild(li);
  });
}

function removeBookmark(category, index) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  if (!bookmarks) return;

  bookmarks[category].splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  loadBookmarks();
}