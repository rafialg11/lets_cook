import DataSrc from "../data/data-src.js";
import "../components/search-bar.js";
import "../components/resep-container.js";


const main = () => {
    const searchElement = document.querySelector("search-bar");
    const resultContainerElement = document.querySelector("recipe-container");

    const onButtonSearchClicked = () => {
        DataSrc.searchRecipe(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = (results) => {
        resultContainerElement.mealResults = results;
    };

    const fallbackResult = message => {
        resultContainerElement.renderError(message);
    };
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;