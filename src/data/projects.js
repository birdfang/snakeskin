import React from 'react'
import clarins from '../assets/images/clarins-header.png'
import clarins_nav from '../assets/images/clarins-nav.png'
// import clarins_home from '../assets/images/clarins-home.png'
import snowday from '../assets/images/snowday2.png'
import snowday2 from '../assets/images/snowday.png'
import stf_recipe from '../assets/images/stf_recipedesktop.png'
import mc_id from '../assets/images/idalerts-home.png'
import drifit from '../assets/images/drifit.png'
import fq_1 from '../assets/images/fq_1.png'
import fq_2 from '../assets/images/fq_2.png'


const projects = [
    {
        name: "Ad Council & NRDC",
        subhead: "Save the Food Site Redesign",
        images: [stf_recipe]
    },
    {
        name: "Clarins",
        subhead: "Site Redesign",
        images: [clarins, clarins_nav]
    },
    {
        name: "Snowday",
        subhead: "VR Game",
        images: [snowday, snowday2]
    },
    // {
    //     name: "VR Bowling",
    //     subhead: "VR Game",
    //     images: []
    // },
    // {
    //     name: "Mercedes-Benz",
    //     subhead: "MercedesME Mobile App Design",
    //     images: []
    // },
    // {
    //     name: "Citi",
    //     subhead: "Citi Priority Landing Page",
    //     images: []
    // },
    // {
    //     name: "LittlexLittle | United Nations",
    //     subhead: "Front-End Engineering",
    //     images: []
    // },
    {
        name: "MasterCard",
        subhead: "ID Theft Protection | Priceless Cities",
        images: [mc_id]
    },
    {
        name: "Dri-Fit",
        subhead: "Landing Page | Content Creation",
        images: [drifit],
        video: (<iframe width={window.innerWidth * 0.85} height="315" src="https://www.youtube.com/embed/IBCrJEV-Fyg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
    },
    {
        name: "First Quality",
        subhead: "B2B | Corporate Site",
        images: [fq_1, fq_2]
    }
]

export {
    projects
}