import data from "./data.js";
import dataSugerencias from "./dataSugerencias.js";
import { Stories } from "./components/srories/Stories.js";
import { Sugerencias } from "./components/Sugerencias/Sugerencias.js";
import "./components/index.js";
import { Attribute } from "./components/Profile/Profile.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.encabezado = [];
        this.stories = [];
        this.sugerencias = [];
        this.sugerencia = [];
        this.attachShadow({ mode: "open" });
        const barraUp = this.ownerDocument.createElement("my-encabezado");
        this.encabezado.push(barraUp);
        const lateral = this.ownerDocument.createElement("my-sugerencia");
        this.sugerencia.push(lateral);
        data.forEach((stories) => {
            const historia = this.ownerDocument.createElement("my-historias");
            historia.setAttribute(Stories.phtoprofile, stories.phtoprofile);
            historia.setAttribute(Stories.username, stories.username);
            this.stories.push(historia);
        });
        dataSugerencias.forEach((sugen) => {
            const lateral = this.ownerDocument.createElement("my-sugerencias");
            lateral.setAttribute(Sugerencias.perfil, sugen.perfil);
            lateral.setAttribute(Sugerencias.user, sugen.user);
            lateral.setAttribute(Sugerencias.infouser, sugen.infouser);
            this.sugerencias.push(lateral);
        });
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(Attribute.imageprofile, user.imageprofile);
            profileCard.setAttribute(Attribute.nameuser, user.nameuser);
            profileCard.setAttribute(Attribute.location, user.location);
            profileCard.setAttribute(Attribute.imagecontent, user.imagecontent);
            profileCard.setAttribute(Attribute.likes, user.likes);
            profileCard.setAttribute(Attribute.comentuser1, user.comentuser1);
            profileCard.setAttribute(Attribute.comentuser2, user.comentuser2);
            profileCard.setAttribute(Attribute.viewcoments, user.viewcoments);
            profileCard.setAttribute(Attribute.days, user.days);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.encabezado.forEach((encabezado) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(encabezado);
            });
            this.sugerencia.forEach((sugerencia) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(sugerencia);
            });
            this.sugerencias.forEach((sugerencia) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(sugerencia);
            });
            this.stories.forEach((stories) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(stories);
            });
            this.profiles.forEach((profiles) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profiles);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
