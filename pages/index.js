// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Intro.module.css'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { Link } from 'react-router-dom'
//import Link from Next
import Link from 'next/link'
import Head from 'next/head'

const github = <FontAwesomeIcon icon={faGithub} size="lg" />
const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="lg" />

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet"/>
        <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'/>
      </Head>
      <div className='intro'>
        <div className='introName'>
          <h2 className='introName'>Tane Wilson</h2>
        </div>
        <div className='introJobSection'>
          <h1 className='introJob'>Software Developer</h1>
        </div>
        <div className='introDescriptionHolder'>
          <div className='introDescription'>
            I have recently completed a coding bootcamp and I am excited to enter the tech industry.
          </div>
        </div>
        <div className='introIcons'>
          <div className='linkedIn'>
            <a href='https://www.linkedin.com/in/tane-w/' target='_blank' rel='noreferrer' className='iconLink' >
              {linkedIn}
            </a>
          </div>
          <div className='git'>
            <a href='https://github.com/tane-git' target='_blank' rel='noreferrer' className='iconLink' >
              {github}
            </a>
          </div>
          <div className='portfolio'>
            {/* <Link to='/about' className='portfolioLink'> */}
            <Link href='portfolio'>
              <button className='portfolioButton'>
                PORTFOLIO
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
