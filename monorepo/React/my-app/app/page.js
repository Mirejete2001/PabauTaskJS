"use client"
import Card from '@/components/Card/Card'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { useState } from 'react'
import AppSection from '@/components/AppSection/AppSection'

const DUMMY_DATA = [
  {
    id: 1,
    img: "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
    name: 'Test 1'
  },
  {
    id: 2,
    img: "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
    name: 'Test 2'
  },
  {
    id: 3,
    img: "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
    name: 'Test 3'
  },
  {
    id: 4,
    img: "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
    name: 'Test 4'
  },
]


export default function Home() {
  const [step, setStep] = useState(1)
  const [obj, setObj] = useState({})

  return (
    <main>
      <Header currentStep={step} stepsLength={2} />
      {step === 1 ?
        (<div>
          {
            DUMMY_DATA.map(el => <Card isList obj={el} fn={() => {
              setStep(2)
              setObj(el)
            }} />)
          }
        </div>) : (
          <div>
            <Card obj={obj} />
            <button onClick={() => {
              setStep(1)
              setObj({})
            }}>Back</button>
          </div>
        )
      }
      <AppSection>Not sure about consulation type? Please, call 0203 7959063</AppSection>
      <Footer>Powered By 👷‍♀️ Mirëjeta</Footer>

    </main>
  )
}
