import React from 'react'
import "./Home.scss"

// const Card = ()=>(
//   // <img src={img} alt="cover" />
// // )

const Row = ({title}) => (
  <div>
    <h2>{title}</h2>
    {/* <Card img={""} /> */}
  </div>
)

const Home = () => {
  return (
    <section className='home'>
        <div className='banner'></div>

        <Row title={"Popular on Netflix"} />
     </section>
  )
}

export default Home
