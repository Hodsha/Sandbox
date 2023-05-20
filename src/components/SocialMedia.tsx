import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './SocialMedia.scss';

const SocialMedia = () => {
    return (
        <ul className="socialMedia2">
            <li><a href="#"><i className="fab" aria-hidden="true"><BsGithub size={48} /></i></a></li>
            <li><a href="#"><i className="fab" aria-hidden="true"><BsTwitter size={48} /></i></a></li>
            <li><a href="#"><i className="fab" aria-hidden="true"><BsLinkedin size={48} /></i></a></li>
            <li><a href="#"><i className="fab" aria-hidden="true"><BsInstagram size={48} /></i></a></li>
        </ul>
    )
}

export default SocialMedia
