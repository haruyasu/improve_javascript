import Search from './models/Search';

const state = {};

const controlSearch = async () => {
    const query = 'pizza'; //todo
    if (query) {
        // New search object and add to state
        state.search = new Search(query);

        // Prepare UI for results

        // Search for recipies
        await state.search.getResults();

        // render results on UI
        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


