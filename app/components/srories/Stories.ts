import data from "../../data.js";

export enum Stories {
    "phtoprofile" = "phtoprofile",
    "username" = "username",
}

class MyHistorias extends HTMLElement{
    phtoprofile?: string;
    username?: string;

    static get observedAttributes(){
        const attrs: Record<Stories,null> = {
            phtoprofile: null,
            username: null,
        };
        return Object.keys(attrs); 
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Stories, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
            switch (propName) {
            
                default:
                    this[propName] = newValue;
                    break;
            }

            this.render();
    }

    render(){


        const barra = data.map((Stories) => `
            <section>
                <!--<img class="borde" src="${Stories.phtoprofile}"/>
                <h1 class="username">${Stories.username}</h1>-->
            </section>
        `);

        if(this.shadowRoot){    
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