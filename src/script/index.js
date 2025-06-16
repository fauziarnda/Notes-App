import "../styles/index.css";
import "../component/headerComponent.js";
import "../component/noteItem.js";
import "../component/noteForm.js";
import "../component/loadingIndicator.js";

async function getNotesFromAPI() {
  try {
    const response = await fetch("https://notes-api.dicoding.dev/v2/notes");
    const result = await response.json();
    console.log("Data notes dari API:", result);
    return result.data;
  } catch (error) {
    console.error("Gagal memuat data:", error);
    return [];
  }
}

async function loadNotes() {
  const notesListElement = document.querySelector("#notesList");
  notesListElement.innerHTML = "<loading-indicator></loading-indicator>";

  const notes = await getNotesFromAPI();

  notesListElement.innerHTML = "";

  notes.forEach((note) => {
    const noteElement = document.createElement("note-item");
    noteElement.setAttribute("id", note.id);
    noteElement.setAttribute("title", note.title);
    noteElement.setAttribute("body", note.body);
    noteElement.setAttribute(
      "createdAt",
      new Date(note.createdAt).toLocaleString()
    );
    notesListElement.appendChild(noteElement);
  });
}

async function deleteNoteById(id) {
  const notesListElement = document.querySelector("#notesList");
  notesListElement.innerHTML = "<loading-indicator></loading-indicator>";

  try {
    const response = await fetch(
      `https://notes-api.dicoding.dev/v2/notes/${id}`,
      {
        method: "DELETE",
      }
    );

    const result = await response.json();
    if (result.status === "success") {
      alert("Catatan berhasil dihapus");
      await loadNotes();
    } else {
      alert("Gagal menghapus: " + result.message);
    }
  } catch (error) {
    alert("Error saat menghapus: " + error.message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadNotes();

  document.querySelector("notes-form").addEventListener("note-added", () => {
    loadNotes();
  });

  document
    .querySelector("#notesList")
    .addEventListener("note-delete", (event) => {
      const noteId = event.detail.id;
      const confirmDelete = confirm("Yakin ingin menghapus catatan ini?");
      if (confirmDelete) {
        deleteNoteById(noteId);
      }
    });
});
