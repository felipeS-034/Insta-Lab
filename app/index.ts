import data from "./data.js";
import dataSugerencias from "./dataSugerencias.js";

import MyEncabezado from "./components/Encabezado/Encabezado.js";
import MySugerencia from "./components/Mesugerencia/Sugerencia.js";
import MyHistorias, {Stories} from "./components/srories/Stories.js";
import MySugerencias, {Sugerencias} from "./components/Sugerencias/Sugerencias.js";
import "./components/index.js";
import MyProfile, {Attribute} from "./components/Profile/Profile.js";

class AppContainer extends HTMLElement{
    profiles: MyProfile[] = [];
    encabezado: MyEncabezado[] = [];
    stories: MyHistorias[] = [];
    sugerencias: MySugerencias[] = [];
    sugerencia: MySugerencia[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        const barraUp = this.ownerDocument.createElement("my-encabezado") as MyEncabezado;
        this.encabezado.push(barraUp);

        const lateral = this.ownerDocument.createElement("my-sugerencia") as MySugerencia;
        this.sugerencia.push(lateral);
        
        data.forEach((stories)=>{
            const historia = this.ownerDocument.createElement("my-historias") as MyHistorias;
            historia.setAttribute(Stories.phtoprofile, stories.phtoprofile);
            historia.setAttribute(Stories.username, stories.username);
            this.stories.push(historia);
        });

        dataSugerencias.forEach((sugen)=>{
            const lateral = this.ownerDocument.createElement("my-sugerencias") as MySugerencias;
            lateral.setAttribute(Sugerencias.perfil, sugen.perfil);
            lateral.setAttribute(Sugerencias.user, sugen.user);
            lateral.setAttribute(Sugerencias.infouser, sugen.infouser);
            this.sugerencias.push(lateral);
        });

        data.forEach((user)=>{
            const profileCard = this.ownerDocument.createElement("my-profile") as MyProfile;
            profileCard.setAttribute(Attribute.imageprofile, user.imageprofile);
            profileCard.setAttribute(Attribute.nameuser, user.nameuser);
            profileCard.setAttribute(Attribute.location, user.location);
            profileCard.setAttribute(Attribute.imagecontent, user.imagecontent);
            profileCard.setAttribute(Attribute.likes, user.likes);
            profileCard.setAttribute(Attribute.comentuser1, user.comentuser1);
            profileCard.setAttribute(Attribute.comentuser2, user.comentuser2);
            profileCard.setAttribute(Attribute.viewcoments, user.viewcoments);
            profileCard.setAttribute(Attribute.days, user.days );
            this.profiles.push(profileCard);
        });
    }

    connectedCallback(){
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML =""; 
            this.encabezado.forEach((encabezado)=>{
                this.shadowRoot?.appendChild(encabezado);
            });
            this.sugerencia.forEach((sugerencia)=>{
                this.shadowRoot?.appendChild(sugerencia);
            });
            this.sugerencias.forEach((sugerencia)=>{
                this.shadowRoot?.appendChild(sugerencia);
            });
            this.stories.forEach((stories)=>{
                this.shadowRoot?.appendChild(stories);
            });
            this.profiles.forEach((profiles)=>{
                this.shadowRoot?.appendChild(profiles);
            });
            
            
        }
    }
}

customElements.define("app-container",AppContainer);