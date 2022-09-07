import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function portfolio() {
  return (
    <div className='app'>
      <Header/>
      <div className='portfolioBody'>
        <div className='portfolioStomach'>
          <About/>
          <Projects/>
        </div>
      </div>
    </div>
  )
}