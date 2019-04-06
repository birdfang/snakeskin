import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './gl_inst/gl_index'
import { BrowserRouter } from 'react-router-dom'

console.log('les skeddit')

// const NewApp = inject(App)


const renderTarget = document.getElementById('render-target')
renderTarget.style.position = 'absolute'
renderTarget.style.zIndex = '1'


render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, renderTarget)
