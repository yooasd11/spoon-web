/* External dependencies */
import React from 'react'
import Immutable from 'immutable'
import autobind from 'core-decorators/lib/autobind'

/* Internal dependencies */
import styles from './CategorySelection.scss'
import CategoryRect from '../../components/CategoryRect/CategoryRect'

const categories = ['대외활동', '페스티벌ㆍ공연', '디자인', '재즈음악', '미술ㆍ전시회', '인디음악', 'IT']

class CategorySelection extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedList: Immutable.Map(),
    }
  }

  @autobind
  handleCategoryClick(id) {
    if (this.state.selectedList.has(id)) {
      this.setState({
        selectedList: this.state.selectedList.delete(id)
      })
    } else {
      this.setState({
        selectedList: this.state.selectedList.set(id, id)
      })
    }
  }

    @autobind
    renderCategoryRect(tagname, idx) {
      const selected = this.state.selectedList.has(tagname)
      return (
        <CategoryRect id={tagname} onCategoryClick={this.handleCategoryClick} key={idx} >
          {`${selected ? 'V' : '+'} ${tagname}`}
        </CategoryRect>
      )
    }

    render() {
        return (
            <div className={styles.wrapper}>
              <div className={styles.description}>
                하영님<br/>보고싶은 달력을 선택해주세요.
              </div>
              <div className={styles.wrapperCategory}>
                {categories.map(this.renderCategoryRect)}
              </div>
              <div className={styles.start}>
                시작하기
              </div>
            </div>
        )
    }
}

export default CategorySelection