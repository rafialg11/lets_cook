class LatarBelakang extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .cta{
            position: absolute;
            top: 50%;
            left: 70%;
            transform: translate(-50%, -50%);
        }
        .gambar{
            background-image: url("/src/img/bgfood.jpg");
            width: 100%;
            height: auto;
            background-position: center center;
            border-radius: 0px 0px 50px 50px ;
            background-repeat: no-repeat;
            z-index: 1;
        }
        .find-btn{
            font-size: 18px;
            font-weight: 600;
        }
        </style>

        <img class="gambar" src="./img/bgfood.jpg" alt="">
        <div class="cta">
            <h1>Cooking at Home</h1><br>
            <p>one of the simplest ways to improve your health is by preparing more home-cooked meals.</p><br>
            <a href="#search-scroll"><button class="find-btn">Find Recipe</button></a>
        </div>`;
    }
}

customElements.define("latar-belakang", LatarBelakang);


