import "./resep.js";

class ResepContainer extends HTMLElement {
    set mealResults(mealResults) {
        this._mealResults = mealResults;
        this.render();
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.innerHTML = "";
        this._mealResults.forEach(meal => {
            const resultElement = document.createElement("isi-resep");
            resultElement.meal = meal
            this.appendChild(resultElement);
        })
    }

}
customElements.define("recipe-container", ResepContainer);