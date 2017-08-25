/* External dependencies */
import React from 'react'
import classNames from 'classnames'
import autobind from 'core-decorators/lib/autobind'

/* Internal dependencies */
import styles from './CategoryRect.scss'

class CategoryRect extends React.Component {
  @autobind
  handleClick() {
    this.props.onCategoryClick(this.props.id)
  }

  render() {
    return (
      <button className={classNames(styles.wrapper, { [styles.wrapperSelected]: this.props.isSelected })} onClick={this.handleClick} >
          {this.props.children}
      </button>
    )
  }
}

export default CategoryRect