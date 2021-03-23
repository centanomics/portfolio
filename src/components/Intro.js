// imports

import * as React from "react"

// markup

const Footer = () => {
  return (
    <div>
      <main className="frame intro">
        <section>
          <div>
            <h2>Hello, world!</h2>
            <h1>I'm <span>Shannon</span></h1>
            <p>I design and develop Full Stack Applications</p>
            <nav>
              <a>View Projects</a>
              <span> or </span>
              <a>Read About Me</a>
            </nav>
          </div>
          <button>
            <img src="/me.png" />
          </button>
        </section>
      </main>
    </div>
  )
}

export default Footer