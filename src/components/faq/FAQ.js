import * as React from 'react'
import './FAQ.scss'

const FAQItem = ({question, answer}) => {
  return (
    <div className='faq__item'>
      <p className='faq__question'>{question}</p>
      <p className='faq__answer'>{answer}</p>
    </div>
  )
}

const FAQ = ({items}) => {

  return (
    <section className='faq' id='faq'>
      <h2>FAQ</h2>
      <div className='inner-row'>
        <div className='inner-col'>
          <FAQItem key='faq-item-1' question={items[0].question} answer={items[0].answer}/>
        </div>
        <div className='inner-col'>
          <FAQItem key='faq-item-2' question={items[1].question} answer={items[1].answer}/>
        </div>
      </div>
      <div className='inner-row'>
        <div className='inner-col'>
          <img src='' alt='Man greetings somebody'/>
        </div>
        <div className='inner-col'>
          <div className='faq__offer'>
            <p>Enhance ..!</p>
            <a href='#'>Download</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
