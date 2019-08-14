import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

class Pagination extends React.Component {
  state = {
    presentPage: this.props.initialPage || 1
  }
  componentDidMount() {
    console.log("piewrsze")
  }

  componentDidUpdate() {
    console.log("update", this.state.presentPage)
  }

  changePage = (newPage) => {
    console.log('new', newPage)
    const { onPageChange } = this.props;

    this.setState({ presentPage: newPage });
    onPageChange(newPage);
  }

  renderNavButton = (type) => {
    const { pages } = this.props;
    const { presentPage } = this.state;

    const newPage = type === 'prev' ? presentPage - 1 : presentPage + 1;
    const content = type === 'prev' ? '<' : '>';

    const button = <button onClick={() => this.changePage(newPage)}>{content}</button>;

    if(type === 'prev' && presentPage !== 1) return button;
    if(type === 'next' && presentPage !== pages && pages > 1) return button;
    return null;
  }

  render() {
    console.log(this.state)
    const { pages } = this.props;
    const { presentPage } = this.state;
    const { changePage } = this;

    return (
      <div className="pagination">
        <ul className="pagination__list">
          {this.renderNavButton('prev')}
          {[...Array(pages)].map((el, page) =>
            <li
              key={++page}
              onClick={() => { changePage(page) }}
              className={`pagination__list__item${((page) === presentPage) ? ' pagination__list__item--active' : ''}`}>
              {page}
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