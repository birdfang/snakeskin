import React from 'react'

const Text = function(props) {
    switch(props.type) {
        case "h1":
            return <h1 {...props}></h1>
        case "h2":
            return <h2 {...props}></h2>
        case "h3":
            return <h3 {...props}></h3>
        case "h4":
            return <h4 {...props}></h4>
        case "h5":
            return <h5 {...props}></h5>
        default:
            return <p {...props}></p>
    }
}

export default Text
