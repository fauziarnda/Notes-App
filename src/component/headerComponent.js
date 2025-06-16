class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Menambahkan style dan struktur header di dalam shadow DOM
    shadow.innerHTML = `
            <style>
                header {
                    background-color: rgb(136, 71, 190);
                    color: white;
                    padding: 20px;
                    text-align: center;
                }

                header h1 {
                    margin: 0;
                }

            </style>
            <header>
                <h1>MY NOTES</h1>
            </header>
        `;
  }
}

// Mendefinisikan custom element <header-component>
customElements.define("header-component", HeaderComponent);
