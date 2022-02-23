import React from 'react'
import { Link } from 'gatsby'
import { Button } from '../Styles/button'
import { RiDiscordLine } from 'react-icons/ri'
import { StaticImage } from "gatsby-plugin-image"

const NavBar = () => {
  return (
    <div className='main'>
        <nav>
            <div >
                <Link to='/' className='logo'>
                    <StaticImage
                        src="../images/chimp.png"
                        width={50}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="A Gatsby astronaut"
                        style={{ marginBottom: `1.45rem` }}
                    />
                    FM
                </Link>
            </div>
            <ul>
                <li>
                    <Link to='/Command' className='white hover'>Commands</Link>
                </li>
                <li>
                    <Link to='/FAQ' className='white hover'>FAQ</Link>
                </li>
                <a href="https://discord.com/oauth2/authorize?client_id=920770032772997180&scope=bot&permissions=824670424336" target={'_target'} className = 'btn'>
                    <RiDiscordLine />
                    Invite Bot
                </a>
            </ul>

            
        </nav>
    </div>
  )
}

export default NavBar