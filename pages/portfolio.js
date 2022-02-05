import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function portfolio() {
  return (
    <div className='app'>
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