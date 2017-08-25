/* External dependencies */
import React from 'react'
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
      <div className={styles.wrapper} onClick={this.handleClick}>
          {this.props.children}
      </div>
    )
  }
}

export default CategoryRect