import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import close from '../assets/icons/close.svg'


const ModalContent = (props) => {
  return ReactDOM.createPortal( 
    <ModalContain>
      <ModalMain>
      <CloseBtn aria-label="Close Modal" onClick={props.onClose}>
          <span className="u-hide-visually">Close</span>
          <CloseIcon className="c-modal__close-icon" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30"></path></CloseIcon>
        </CloseBtn>
        <ModalBody>
          {props.children}
        </ModalBody>
        <div style={{ textAlign: 'center' }}>
          <AltCloseBtn onClick={props.onClose}>
            {/* <img style={{ padding: '0 10px' }} src={close} alt="close" /> */}
            <span>CLOSE</span>
          </AltCloseBtn>
        </div>
      </ModalMain>
  </ModalContain>,
     document.body
  );
}

class Modal extends Component {

  render() {

    return (
    <React.Fragment>
        <ModalContent onClose={this.props.onClose} children={this.props.children}/>
    </React.Fragment>
    );
  }
}

  export default Modal

  const ModalContain = styled.aside`
 
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 99;
      transform: translateZ(0);
      background: rgba(0,0,0,0.4);

    .u-hide-visually {
      border: 0 !important;
      clip: rect(0 0 0 0) !important;
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      width: 1px !important;
      white-space: nowrap !important;
    }
  `
  const ModalMain = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    ${'' /* @media screen and (min-width: 901px) {
      left: 50%;
      top: 50%;
      height: auto;
      width: auto;
      transform: translate(-50%, -50%);
      
      max-height: calc(100% - 1em);
    } */}
`

  const ModalBody = styled.div`
    padding: 5%;
    ${'' /* margin-top: 20%; */}
  `

  const CloseBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    padding: .5em;
    width: 30px;
    line-height: 1;
    background: white;
    border-radius: 50%;
    border: solid black 2px;
    box-shadow: 0;
    cursor: pointer;
    width: 40px;
`

const AltCloseBtn = styled.button`
    background-color: #FFF;
    border: 2px solid #333;
    color: #333;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    ${'' /* margin: 4px 2px; */}
    cursor: pointer;
    margin: 0 auto;
`

const CloseIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: transparent;
  stroke: black;
  strokeLinecap: round;
  strokeWidth: 2;
` 