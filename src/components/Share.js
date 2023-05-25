import React from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    WhatsappShareButton
  } from "react-share";

  import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    WhatsappIcon
  } from "react-share";
  
const Share = () => {
    const currentPageUrl = window.location.href;
  return (
    <div className='share-btns'>
        <h2> Share </h2>
        <WhatsappShareButton url={currentPageUrl} className='share-btn'>
            <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <FacebookShareButton url={currentPageUrl} className='share-btn'>
            <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <EmailShareButton url={currentPageUrl} className='share-btn'>
            <EmailIcon size={32} round={true} />
        </EmailShareButton>
        <TelegramShareButton url={currentPageUrl} className='share-btn'>
            <TelegramIcon size={32} round={true}/>
        </TelegramShareButton>
        <LinkedinShareButton url={currentPageUrl} className='share-btn'>
            <LinkedinIcon size={32} round={true}/>
        </LinkedinShareButton>
    </div>
  )
}

export default Share