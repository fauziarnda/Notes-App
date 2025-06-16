class NotesForm extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
            <style>
                .form-group {
                    margin-bottom: 20px;
                }
                input[type="text"], textarea {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    font-size: 1rem;
                    box-sizing: border-box;
                }
                
                textarea {
                    resize: vertical;
                    min-height: 100px;
                }

                button {
                    background-color: rgb(136, 71, 190);
                    color: white;
                    border: none;
                    padding: 10px 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 1rem;
                }

                button:hover {
                    background-color: rgb(121, 64, 169);
                }
            </style>
    
            <form id="notesForm" autocomplete="off">
                <div class="form-group">
                    <label for="titleForm">Title</label>
                    <input id="titleForm" type="text" 
                    required
                    minlength="6"
                    pattern=".{6,}"
                    aria-describedby="titleValidation" />
                </div>
                <div class="form-group">
                    <label for="contentForm">Content</label>
                    <textarea id="contentForm"></textarea>
                </div>
                <button id="addNotes" type="submit">Add Notes</button>
            </form>
        `;
  }
  connectedCallback() {
    this.shadowRoot
      .querySelector("#notesForm")
      .addEventListener("submit", async (e) => {
        e.preventDefault();

        const title = this.shadowRoot.querySelector("#titleForm").value;
        const content = this.shadowRoot.querySelector("#contentForm").value;

        const newNote = {
          title,
          body: content,
        };

        const formContainer = this.shadowRoot.querySelector("#notesForm");
        const loading = document.createElement("loading-indicator");
        formContainer.appendChild(loading);

        try {
          const response = await fetch(
            "https://notes-api.dicoding.dev/v2/notes",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newNote),
            }
          );

          const result = await response.json();

          if (result.error) {
            alert(`Gagal menambahkan catatan: ${result.message}`);
          } else {
            this.shadowRoot.querySelector("#notesForm").reset();
            this.dispatchEvent(
              new CustomEvent("note-added", { bubbles: true })
            );
          }
        } catch (error) {
          alert("Gagal menghubungi server: " + error.message);
        } finally {
          loading.remove();
        }
      });
  }
}

customElements.define("notes-form", NotesForm);
