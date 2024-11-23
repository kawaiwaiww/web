import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="about-about">
        <div className="about-yellow">
          <img
            alt="Rectangle39411171"
            src="/external/rectangle39411171-p4bi-200h.png"
            className="about-rectangle39411"
          />
          <img
            alt="Rectangle39410172"
            src="/external/rectangle39410172-et7d-200w.png"
            className="about-rectangle39410"
          />
        </div>
        <div className="about-footer">
          <span className="about-text10">@kawai_ww</span>
        </div>
        <span className="about-text11 1">
          <span>CHAN</span>
          <br></br>
          <br></br>
          <span>KA</span>
          <br></br>
          <br></br>
          <span>WAI</span>
        </span>
        <div className="about-kawai">
          <span className="about-text19">
            <span>Hi There!</span>
            <br></br>
            <span>It’s Kawai.</span>
          </span>
          <span className="about-text23 2">
            FASHION MEDIA DESIGN STUDENT FROM HONG KONG WITH LOVE FOR
            PHOTOGRAPHY.
          </span>
        </div>
        <div className="about-myphoto">
          <img
            alt="Rectangle39412154"
            src="/external/rectangle39412154-sla8-200w.png"
            className="about-rectangle39412"
          />
          <img
            alt="IMAGE5A7E4B16A72546DDBDAEECD4224659E01155"
            src="/external/image5a7e4b16a72546ddbdaeecd4224659e01155-e1ql-200w.png"
            className="about-image5a7e4b16a72546ddbdaeecd4224659e01"
          />
        </div>
        <div className="about-aboutme">
          <span className="about-text24">
            {' '}
            I am currently studying Fashion Media Design, which I find very
            interesting. Fashion Media Design involves learning about managing
            social media, fashion knowledge, photography, video production,
            editing, event planning, and more. During my studies, I discovered
            that I greatly enjoy the process of shooting and producing videos. I
            believe that creating a good piece of work gives me a great sense of
            satisfaction, and this course has sparked my interest in media. In
            the future, I aspire to further develop in the field of media.
          </span>
        </div>
        <div className="about-topbar">
          <div className="about-frame274">
            <span className="about-text25">ABOUT</span>
            <span className="about-text26">PROJECT</span>
            <span className="about-text27">CONTACT</span>
            <img
              alt="ualignright1189"
              src="/external/ualignright1189-jpuj-200h.png"
              className="about-ualignright1"
            />
          </div>
          <div className="about-group1">
            <img
              alt="IMAGE31191"
              src="/external/image31191-gg68-200h.png"
              className="about-image311"
            />
            <img
              alt="IMAGE27192"
              src="/external/image27192-ux7r-200h.png"
              className="about-image27"
            />
            <img
              alt="IMAGE68193"
              src="/external/image68193-nf7l-200h.png"
              className="about-image68"
            />
            <img
              alt="IMAGE31194"
              src="/external/image31194-3uou-200h.png"
              className="about-image312"
            />
            <img
              alt="IMAGE11195"
              src="/external/image11195-or01u-200h.png"
              className="about-image11"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
