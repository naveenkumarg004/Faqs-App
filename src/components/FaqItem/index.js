import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isAnswerShow: false}

  onToggleIsActive = () => {
    const {isAnswerShow} = this.state
    this.setState({isAnswerShow: !isAnswerShow})
  }

  renderAnswer = () => {
    const {isAnswerShow} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    if (isAnswerShow) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderImage = () => {
    const {isAnswerShow} = this.state
    const image = isAnswerShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : ' https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imageALt = isAnswerShow ? 'minus' : 'plus'
    return <img className="image" src={image} alt={imageALt} />
  }

  render() {
    // const {isAnswerShow} = this.state
    const {faqDetails} = this.props

    const {questionText} = faqDetails
    return (
      <li className="li-element">
        <div className="qsn-img-cont">
          <h2 className="question">{questionText}</h2>
          <button className="btn" type="button" onClick={this.onToggleIsActive}>
            {this.renderImage()}
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
