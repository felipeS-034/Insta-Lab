class MyEncabezado extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./app/components/Encabezado/style.css"
            <section class= "rectanguloup">
                <image class="logoig" src="./Images/Encabezado/Instagram.png"></image>
                <image class="explore" src="./Images//Encabezado/Explore.png"></image>
                <image class="Home" src="./Images/Encabezado/Home.png"></image>
                <image class="Like" src="./Images/Encabezado/Like.png"></image>
                <image class="Mensaje" src="./Images/Encabezado/Mensajes.png"></image>
                <image class="Newpost" src="./Images/Encabezado/New.png"></image>
                <image class="User" src="./Images/Encabezado/user.png"></image>
                <image class="search" src="./Images/Encabezado/Search.png"></image>

            </section>
            `;
        }
    }

}

customElements.define("my-encabezado", MyEncabezado);
export default MyEncabezado;