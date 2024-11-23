import React from 'react'

import { Helmet } from 'react-helmet'

import './myphoto.css'

const Myphoto = (props) => {
  return (
    <div className="myphoto-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="myphoto-myphoto">
        <img
          alt="IMAGE5A7E4B16A72546DDBDAEECD4224659E01180"
          src="/external/image5a7e4b16a72546ddbdaeecd4224659e01180-lfz6-300w.png"
          className="myphoto-image5a7e4b16a72546ddbdaeecd4224659e01"
        />
      </div>
    </div>
  )
}

export default Myphoto
