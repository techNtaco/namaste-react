import React from "react"
import ReactDOM from "react-dom/client"

const elem = <span>Reatc Element</span>

const title = (
    <h1 className="head">
        {elem}
        Namaste React Using JSX
    </h1>
)

const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1>Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)