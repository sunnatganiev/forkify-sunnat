class SearchView {
  #parentElement = document.querySelector('.search');

  getQueary() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#parentElement.querySelector('.search__field').value = '';
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
