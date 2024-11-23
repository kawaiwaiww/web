import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-home">
        <img
          alt="IMG32132119"
          src="/external/img32132119-fzy-400h.png"
          className="home-img321321"
        />
        <div className="home-yellow">
          <img
            alt="Rectangle39411110"
            src="/external/rectangle39411110-jh5v-200h.png"
            className="home-rectangle39411"
          />
          <img
            alt="Rectangle39410111"
            src="/external/rectangle39410111-4ou7-200w.png"
            className="home-rectangle39410"
          />
        </div>
        <div className="home-footer">
          <span className="home-text10">@kawai_ww</span>
        </div>
        <span className="home-text11 1">
          <span>CHAN</span>
          <br></br>
          <br></br>
          <span>KA</span>
          <br></br>
          <br></br>
          <span>WAI</span>
        </span>
        <div className="home-kawai">
          <span className="home-text19">
            <span>Hi There!</span>
            <br></br>
            <span>It’s Kawai.</span>
          </span>
          <span className="home-text23 2">
            FASHION MEDIA DESIGN STUDENT FROM HONG KONG WITH LOVE FOR
            PHOTOGRAPHY.
          </span>
        </div>
        <div className="home-topbar">
          <div className="home-frame274">
            <span className="home-text24">ABOUT</span>
            <span className="home-text25">PROJECT</span>
            <span className="home-text26">CONTACT</span>
            <img
              alt="ualignright1118"
              src="/external/ualignright1118-ia8g-200h.png"
              className="home-ualignright1"
            />
          </div>
          <div className="home-group1">
            <img
              alt="IMAGE31127"
              src="/external/image31127-4cjy-200h.png"
              className="home-image311"
            />
            <img
              alt="IMAGE27128"
              src="/external/image27128-mvwr-200h.png"
              className="home-image27"
            />
            <img
              alt="IMAGE68129"
              src="/external/image68129-7dge-200h.png"
              className="home-image68"
            />
            <img
              alt="IMAGE31130"
              src="/external/image31130-agj-200h.png"
              className="home-image312"
            />
            <img
              alt="IMAGE11131"
              src="/external/image11131-37sx-200h.png"
              className="home-image11"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
