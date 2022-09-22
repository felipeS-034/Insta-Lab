import data from "../../data.js";
export var Stories;
(function (Stories) {
    Stories["phtoprofile"] = "phtoprofile";
    Stories["username"] = "username";
})(Stories || (Stories = {}));
class MyHistorias extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            phtoprofile: null,
            username: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        const barra = data.map((Stories) => `
            <section>
                <!--<img class="borde" src="${Stories.phtoprofile}"/>
                <h1 class="username">${Stories.username}</h1>-->
            </section>
        `);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/srories/style.css"
            <section class="recstories">
                ${barra.join("")}
                </section>
            `;
        }
    }
}
customElements.define("my-historias", MyHistorias);
export default MyHistorias;
