"use client"

import { useState } from 'react'


import Card from '@/components/Card/Card'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import AppSection from '@/components/AppSection/AppSection'


import styles from './page.module.css'
import AppButton from '@/components/AppButton/AppButon'


const DUMMY_DATA = [
  {
    id: 1,
    img: "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
    name: 'First test data',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    img: "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
    name: 'Second test data',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    img: "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
    name: 'Third test data',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 4,
    img: "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
    name: 'Fourth test data',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
]



export default function Home() {

  const [step, setStep] = useState(1)
  const [obj, setObj] = useState({})
const stepBack = ()=>{
  setStep(1)
  setObj({})
}

  return <main className={styles.main}>
    <Header currentStep={step} stepsLength={2} />
    {step === 1 ?
      (<div className={styles.cardsContainer}>
        {
          DUMMY_DATA.map(el => <Card isList obj={el} fn={() => {
            setStep(2)
            setObj(el)
          }} />)
        }
      </div>) : (
        <div className={styles.cardsContainer}>
          <Card obj={obj} />
          <AppButton click={stepBack}>Back</AppButton>
        </div>
      )
    }
    {step==1 ?  <AppSection no='0203 7959063'/>:null}
       <Footer>Powered By 👷‍♀️ Mirëjeta</Footer>
  </main>
}
