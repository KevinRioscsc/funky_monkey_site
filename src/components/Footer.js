import React from 'react'
import {SiTwitter} from 'react-icons/si'
import { FaGithub, FaDiscord } from 'react-icons/fa'

const Footer = () => {
  return (
        <div className=' full'>
            <footer>
                <div className="icons">
                    <ul>
                        <li><a href=""><SiTwitter className='font white'/></a></li>
                        <li><a href=""><FaGithub className='font white'/></a></li>
                        <li><a href=""><FaDiscord className='font white'/></a></li>
                    </ul>
                </div>
                <div className="copyright">
                    © {new Date().getFullYear()} Funky Monkey, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.com" className='white'>Gatsby</a>
                </div>
            </footer>
        </div>
  )
}

export default Footer