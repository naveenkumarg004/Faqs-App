import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-cont">
        <div className="content-cont">
          <h1 className="head">FAQs</h1>
          <ul className="ul-cont">
            {faqsList.map(each => (
              <FaqItem key={each.id} faqDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
