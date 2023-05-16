class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    set clickEvent(event) {
        this._clickEvent = event;
        this.render()
    }

    get value() {
        return this.querySelector("#search-recipe").value;
    }

    render() {
        this.innerHTML = `
        <style>
        .src-btn{
            width: 50px;
            margin-left: 8px;
        }
        
        .src-icon{
            width: 40px;
            height: auto;
        }
        
        .src-icon:hover{
            filter: invert(37%) sepia(97%) saturate(537%) hue-rotate(137deg) brightness(102%) contrast(98%);
        }
        
        .input-form{
            position: relative;
            text-align: center;
            padding: 50px;
        }
        .input-form>input{
            width: 60%;
            padding: 16px;
            font-weight: bold;
            border-radius: 50px;
            border: 2px solid;
            border-color: #03989E;
        }            
        </style>

        <div class="input-form">
            <h2>What Are You Going to Cook?</h2><br>
            <p>Find Millions of Recipes from Around The World</p>
            <br>
            <input id="search-recipe" placeholder="e.g. nasi lemak, spagheti etc." type="search">
            <button id="src-button" class="src-btn" type="submit"><img class="src-icon" src="./img/search.svg" alt=""></button>
        </div>
        `;
        this.querySelector("#src-button").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);


