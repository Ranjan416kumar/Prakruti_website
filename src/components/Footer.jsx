import React from 'react'
import { FaInstagram, FaLinkedinIn, FaChevronCircleUp } from 'react-icons/fa'
function Footer() {
    const clubInsta = ''
    const clubLinkedIn = ''
    return (
        <div>
            <a href="#contactsIcon"id='navbarIcon'><FaChevronCircleUp className='chevron chevron-up'></FaChevronCircleUp></a>

            <footer id='contacts'>
                <img src="assets/photos/deer.png" alt="Deer" style={imgStyle} />

                <div id='contactStyle'>
                    <div>
                        <h2>
                            REACH US
                        </h2>
                        <a href="https://www.instagram.com/prakrutinitt/" ><FaInstagram className="socLinks" style={socialIconStyle}></FaInstagram></a>
                        <a href="https://www.linkedin.com/company/prakruti-nitt"><FaLinkedinIn className="socLinks" style={socialIconStyle}></FaLinkedinIn></a>

                    </div>
                    <div>
                        <h2>CONTACT </h2>
                        <div style={nameStyle}><h2 className='contactName'>ASTHA ARYA</h2>
                            <p>Ph.no: <b>+91 8874020748</b></p></div>
                        <div style={nameStyle}><h2 className='contactName'>TAMIL SELVI R</h2>
                            <p>Ph.no: <b>+91 8754450225</b></p></div>

                    </div>
                </div>
                <p >© PRAKRUTI 2022. All rights reserved.</p>

            </footer>
        </div>
    )
}
const imgStyle = {
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '35vw',
    minWidth: '150px',
    maxWidth: '450px'

}

const socialIconStyle = {
    fontSize: '40px',
    color: 'green',
    margin: '10px 20px 0 0',
    transition: 'all 0.2s ease',

}
const nameStyle = {
    margin: '10px 0px'

}
export default Footer
