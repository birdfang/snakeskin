import React, { Component } from 'react'
import styled from 'styled-components'
import { projects } from '../data/projects'
import Modal from '../components/Modal'

export default class Projects extends Component {
    constructor() {
        super()

        this.state = {
            currentData: {},
            modalOpen: false,
            auth: true
        }
    }

    openModal(item) {
        this.setState({ currentData: item })
        this.setState({ modalOpen: !this.state.modalOpen })
        // document.body.style.overflow !== 'hidden'
        document.body.style.overflow = 'hidden'
        console.log(this.state.currentData)
    }

    closeModal() {
        this.setState({ modalOpen: !this.state.modalOpen })
        this.setState({ currentData: {} })
        document.body.style.overflow = null
    }



    renderProjects() {
        return projects.map( item => (
                <Card onClick={() => this.openModal(item)} img={item.images[0]}>
                    <CardOverlay>
                    <div style={{ position: 'absolute', textAlign: 'center', bottom: 0, width: '100%', paddingBottom: 40 }}>
                    <h1 style={{  }}>{item.name}</h1>
                        {/* <br /> */}
                        <h3 style={{ margin: 0 }}>{item.subhead}</h3>
                    </div>
                       
                    </CardOverlay>

                    {/* <img src={item.images[0]} alt={item.name} /> */}
                </Card>
            )
        )
    }

    render() {
        return (
            <div style={{ paddingTop: 100 }}>
            <h1 style={{ color: 'white', fontFamily: 'Chewy', fontWeight: 200, fontSize: 60}}>Client Projects</h1>
            <CardContain>
                {this.renderProjects()}
                {this.state.modalOpen
                ? (<Modal onClose={() => this.closeModal()}>
                    {this.state.auth
                    ? (<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', flexWrap: 'wrap' }}>
                        <div>
                        {/* {this.state.currentData.image instanceof Array 
                        ? this.state.currentData.image.map((img) => img)
                        : null} */}
                        {this.state.currentData.video}
                        {this.state.currentData.images instanceof Array 
                        ? this.state.currentData.images.map((img, i) => <img style={{ width: '100%'}} src={img} alt="" />)
                        : null}
                        </div>
                    </div>)
                    : (<div>
                        <h1>ENTER PASSWORD TO SEE WORK</h1>
                        <input onChange={(e) => e.target.value == "hoods" ? this.setState({ auth: true }) : this.setState({ auth: false }) } placeholder="pass" />

                    </div>)}
                </Modal>)
                : null}
                
            </CardContain>
            </div>
        )
    }
}

const Card = styled.div`
    cursor: pointer;
    background-image: ${ props => `url(${props.img})` || `url('http://picsum.photos/650/300')`};
    ${'' /* background-color: navy; */}
    ${'' /* background-size: contain; */}
    flex: 1;
    ${'' /* min-width: 350px; */}
    ${'' /* height: 300px; */}
    min-width: 250px;
    ${'' /* height: 70vh; */}
    height: 60vh;
    ${'' /* margin: 25px; */}
    ${'' /* margin: 2%; */}
    margin: 1rem;
    background-repeat: no-repeat;
    background-position: center;
    border-color: black;
    border-width: 3px;
    border-style: solid;
    font-family: Lato;
    color: #FFF;
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: black;
`

const CardContain = styled.div`
    ${'' /* overflow-x: scroll; */}
    position: relative;
    bottom: 0;
    color: white;
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 500px) {
        > div {
            ${'' /* min-width: 90%; */}
        }
    }
`

const CardOverlay = styled.div`
    position: relative;
    background: linear-gradient(to bottom, rgba(183, 183, 183, 0.5) 0%,rgba(63, 63, 63, 0.9) 45%,rgba(0, 0, 0, 1) 100%);
    zIndex: 10;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.98;

    > div > h1 {
        font-weight: 200;
    }

    &:hover {
        background: none;

        > div {
            display: none;
        }
    }
`

const Thumbnail = styled.div`
    height: 90px;
    width: 90px;
    cursor: pointer;
    background-image: ${ props => `url(${props.img})` || `url('http://picsum.photos/650/300')`};
    background-position: center;
`