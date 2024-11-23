import React from 'react'

import { Helmet } from 'react-helmet'

import './aiphoto.css'

const Aiphoto = (props) => {
  return (
    <div className="aiphoto-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="aiphoto-aiphoto">
        <img
          alt="IMAGE6122022500164"
          src="/external/image6122022500164-8mrk-300h.png"
          className="aiphoto-image61220225001"
        />
      </div>
    </div>
  )
}

export default Aiphoto
