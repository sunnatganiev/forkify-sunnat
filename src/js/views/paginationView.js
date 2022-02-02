import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';
import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _curPage;

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goto = +btn.dataset.goto;

      handler(goto);
    });
  }

  _generateMarkup() {
    this._curPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (this._curPage === 1 && numPages > 1) {
      return this._renderNextButton();
    }

    // Last page
    if (this._curPage === numPages && numPages > 1) {
      return this._renderPrevButton();
    }

    // Other page
    if (this._curPage > 1 && this._curPage < numPages) {
      return `
            ${this._renderPrevButton()}
            ${this._renderNextButton()}
        `;
    }

    // Page 1 and there are no pages
    return '';
  }

  _renderPrevButton() {
    return `
        <button class="btn--inline pagination__btn--prev" data-goto="${
          this._curPage - 1
        }">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._curPage - 1}</span>
        </button>
      `;
  }

  _renderNextButton() {
    return `
        <button class="btn--inline pagination__btn--next"  data-goto="${
          this._curPage + 1
        }">
            <span>Page ${this._curPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
  }
}

export default new PaginationView();
