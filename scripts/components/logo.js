class Logo extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .box-container{
            display: block;
            position: absolute;
            width: 260px;
            height: 110px;
            left: 70px;
            top: 0px;
            background: #03989E;
            border-radius: 0px 0px 80px 80px;
            z-index: 2;
        }
        .image{
            width: 80%;
            height: auto;       
            z-index: 3;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 27px;
        }
        
        </style>
        <div class="box-container">
        <a href="#"><img class="image" src="./img/Let's Cook !.png" alt=""></a>
        </div>`;
    }
}

customElements.define("logo-masak", Logo);