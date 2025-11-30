import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import DailyCards from './components/DailyCards/DailyCards';
import OptimalTimeCard from './components/OptimalTimeCard/OptimalTimeCard';
import './App.css'

function App() {
  return (
    <>
      <NavBar />

      <section id="home">
        <Hero />
      </section>

      <section id="dashboard">
        <DailyCards />
      </section>
      
      <section id="charging">
        <OptimalTimeCard />
      </section>
    </>
  )
}

export default App
