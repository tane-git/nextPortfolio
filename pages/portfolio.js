import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";

import Head from 'next/head'

export default function portfolio() {
  return (
    <div className='app'>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet"/>
        <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'/> */}
      </Head>
      {/* <h1>Portfolio?</h1> */}
      <Header/>
      <About/>
      <Projects/>
      {/* <Route path='/about' component={Header} />
      <div className='bugFix'>
        <div className='aboutRoute'>
          <Route path='/about' component={About} />
          <Route path='/about' component={Projects} />
        </div>
      </div> */}
    </div>
  )
}