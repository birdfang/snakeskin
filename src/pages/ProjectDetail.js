import React, { Component, useState } from 'react'
import posed from 'react-pose'
import styled from 'styled-components'
import Text from '../components/Text'
import { projects } from '../data/projects'
import { PageContainer } from '../helpers'

const ProjectDetail = function() {
    const [current, setCurrent] = useState(projects[2])

    return (
        <Page>
            {/* <button onClick={() => setCurrent({ title: "nurfin" })} style={{height: 30, width: 70 }}>CHANGE</button> */}
            <Hero img={current.images[0]}>
                <div style={{ background: '#D0021B', position: 'relative', zIndex: 0, height: 400, opacity: 0.9 }}></div>
                <div style={{ zIndex: 10, position: 'absolute', top: 40 }}>
                    <ProjectTitle type="h1">{current.name}</ProjectTitle>
                    <SubTitle type="h2">{current.subhead}</SubTitle>
                </div>
            </Hero>
            {/* <div style={{ display: 'flex', backgroundColor: 'red', position: 'absolute', zIndex: 50, height: 300 }}></div> */}
            <div style={{ padding: '10px 5%', background: 'rgba(0, 0, 0, 0.9)' }}>
                <Text style={{ color: 'white', fontWeight: 300, fontFamily: 'Lato', lineHeight: 1.6 }} type="h3">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Mauris sit amet mi eget 
                    arcu hendrerit hendrerit non eget purus. 
                    Praesent semper lorem quis tortor lobortis 
                    consequat. Donec sed leo ut dui consequat 
                    aliquet id non nisl. Duis in pellentesque 
                    ipsum, at fermentum leo. Cras sed lectus at 
                    eros rhoncus aliquet. Vivamus elementum 
                    dignissim rutrum. Nullam quis convallis ex. 
                </Text>
                <br />
                <Text style={{ paddingRight: '45vw', color: 'white', fontWeight: 600, fontFamily: 'Roboto', fontSize: 60 }} type="h2">
                    The Ask:
                </Text>
                <Text style={{ paddingRight: '45vw', color: 'white', fontWeight: 300, fontFamily: 'Lato', lineHeight: 1.6 }} type="h3">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Mauris sit amet mi eget 
                    arcu hendrerit hendrerit non eget purus. 
                    Praesent semper lorem quis tortor lobortis 
                    consequat. Donec sed leo ut dui consequat 
                    aliquet id non nisl. Duis in pellentesque 
                    ipsum, at fermentum leo. Cras sed lectus at 
                    eros rhoncus aliquet. Vivamus elementum 
                    dignissim rutrum. Nullam quis convallis ex. 
                </Text>
                <br />
                <Text style={{ color: 'white', fontWeight: 300, fontFamily: 'Lato', lineHeight: 1.6 }} type="h3">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Mauris sit amet mi eget 
                    arcu hendrerit hendrerit non eget purus. 
                    Praesent semper lorem quis tortor lobortis 
                    consequat. Donec sed leo ut dui consequat 
                    aliquet id non nisl. Duis in pellentesque 
                    ipsum, at fermentum leo. Cras sed lectus at 
                    eros rhoncus aliquet. Vivamus elementum 
                    dignissim rutrum. Nullam quis convallis ex. 
                </Text>
                <br />
                <Text style={{ paddingLeft: '45vw', color: 'white', fontWeight: 600, fontFamily: 'Roboto', fontSize: 60 }} type="h2">
                    The Ask:
                </Text>
                <Text style={{ paddingLeft: '45vw', color: 'white', fontWeight: 300, fontFamily: 'Lato', lineHeight: 1.6 }} type="h3">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Mauris sit amet mi eget 
                    arcu hendrerit hendrerit non eget purus. 
                    Praesent semper lorem quis tortor lobortis 
                    consequat. Donec sed leo ut dui consequat 
                    aliquet id non nisl. Duis in pellentesque 
                    ipsum, at fermentum leo. Cras sed lectus at 
                    eros rhoncus aliquet. Vivamus elementum 
                    dignissim rutrum. Nullam quis convallis ex. 
                </Text>
                <br />
            </div>
            
        </Page>
    )
}

export default ProjectDetail

const Page = styled(PageContainer)`
    padding-top: 60px;
    width: 100vw;
`

const Hero = styled.div`
    ${'' /* width: 100%; */}
    background-image: ${props => `url(${props.img})` || ""};
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    height: 400px;
`

const ProjectTitle = styled(Text)`
    font-size: 80px;
    font-family: Roboto;
    color: white;
`

const SubTitle = styled(Text)`
    font-size: ${props => props.theme.fonts.subtitle};
    font-family: Roboto;
    color: white;
`