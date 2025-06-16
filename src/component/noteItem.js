class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const id = this.getAttribute("id");
    const title = this.getAttribute("title");
    const body = this.getAttribute("body");
    const createdAt = this.getAttribute("createdAt");

    this.shadowRoot.innerHTML = `
        <style>
          .noteContainer {
            border: 1px solid #ddd;
            border-left: 5px solid rgb(136, 71, 190);
            border-radius: 6px;
            padding: 16px;
            padding-bottom: 20px;
            margin-bottom: 12px;
            background-color: #f9f9f9;
          }
          h3 {
            margin-top: 0;
            font-size: 1.25rem;
            color: #333;
          }
          p {
            margin-top: 2px;
            margin-bottom: 20px;
            line-height: 1.5;
          }
          .createdAt {
            display: flex;
            justify-content: flex-end;
            gap: 6px;
            font-size: 0.75rem;
            color: #666;
          }
        </style>
        <div class=noteContainer>
          <h3>${title}</h3>
          <p>${body}</p>
          <div class="createdAt">Created at: ${createdAt}</div>
          <button class="deleteBtn">Delete</button>
        </div>
      `;

    this.shadowRoot
      .querySelector("button.deleteBtn")
      .addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("note-delete", {
            detail: { id },
            bubbles: true,
            composed: true,
          })
        );
      });
  }
}

customElements.define("note-item", NoteItem);
