// imports

import * as React from "react"

// components

import Layout from '../components/_layout'
import Intro from '../components/Intro'
import Projects from '../components/Projects'

// markup

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <Projects />
    </Layout>
  )
}

export default IndexPage