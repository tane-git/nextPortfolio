import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function portfolio() {
  <div className='app'>
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
}