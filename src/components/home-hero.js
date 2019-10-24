import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { animated, useTransition } from "react-spring"

const cities = [
  { id: 0, name: "Johannesburg" },
  { id: 1, name: "Pretoria" },
  { id: 2, name: "Cape Town" },
  { id: 3, name: "Durban" },
]

const CityThing = () => {
  const [city, setCity] = useState(0)

  useEffect(
    () => void setInterval(() => setCity(city => (city + 1) % 4), 2000),
    []
  )

  const transitions = useTransition(cities[city], x => x.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reset: true,
    config: {
      duration: 600,
    },
  })

  return transitions.map(({ item, props, key }) => (
    <animated.span key={key} style={props}>
      {item.name}
    </animated.span>
  ))
}

const HomeHero = () => (
  <section className="hero is-medium is-primary is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          I want to work somewhere in <CityThing />
        </h1>
        <h2 className="subtitle">
          Don't have a venue to work from, have a look here.
        </h2>
        <Link to="/list/" className="button is-secondary">
          <strong>Full List</strong>
        </Link>
      </div>
    </div>
  </section>
)

export default HomeHero
