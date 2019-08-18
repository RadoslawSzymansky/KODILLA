import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';


class Pagination extends React.Component {

  changePage = (newPage) => {
    const { onPageChange } = this.props;

    onPageChange(newPage);
  }

  renderNavButton = (type) => {
    const { pages, page } = this.props;

    const newPage = type === 'prev' ? page - 1 : page + 1;
    const content = type === 'prev' ? '<' : '>';

    const button = <div className='pagination__list__item' onClick={() => this.changePage(newPage)}>{content}</div>;

    if (type === 'prev' && page !== 1) return button;
    if (type === 'next' && page !== pages && pages > 1) return button;
    return null;
  }

  render() {

    const { pages, page } = this.props;
    const { changePage } = this;

    return (
      <div className="pagination">
        <ul className="pagination__list">

          {this.renderNavButton('prev')}

          {[...Array(pages)].map((el, pageNum) =>
            <li
              key={++pageNum}
              onClick={() => { changePage(pageNum) }}
              className={`pagination__list__item${((page) === pageNum) ? ' pagination__list__item--active' : ''}`}>
              {pageNum}
            </li>
          )}

          {this.renderNavButton('next')}

        </ul>
      </div>
    );
  }

}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;