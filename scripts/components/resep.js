class Resep extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .meal-pic{
            width: 50%;
            height: auto;       
            display: block;
            margin-left: auto;
            margin-right: auto;
            border-radius: 5%;
        }
        .recipe{
            display:block;
            position: relative;
            width: 55%;
            height: auto;
            background-color: rgb(255, 255, 255);
            border: 2px solid #03989E;
            border-radius: 30px;
            padding: 20px;
            margin-bottom: 30px;
            margin-left: auto;
            margin-right: auto;
        }
        </style>    
        <div class="recipe">
            <img class="meal-pic" src="${this._meal.strMealThumb}" alt=""><br>
            <h1>${this._meal.strMeal}</h1><br>
            <h3>How to Cook :</h3><br>
            <p>${this._meal.strInstructions}</p>
        </div>`;
    }
}

customElements.define("isi-resep", Resep);

    