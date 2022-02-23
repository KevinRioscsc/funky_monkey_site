import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {RiDiscordLine} from 'react-icons/ri'
import {Button} from '@mui/material/Button';
import {FaMusic} from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />    
    <div className="center">
      <StaticImage
        src="../images/chimp.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <h1 className="space white">Funky Monkey is a high quality,
        multipurpose bot for your Discord server.</h1>
      <h2 className="weight white">Serving over 1,000,000+ Discord servers!</h2>
      <div className="invite">
          <a href="https://discord.com/oauth2/authorize?client_id=920770032772997180&scope=bot&permissions=824670424336" target={'_target'} className = 'btn'>
              <RiDiscordLine />
              Invite Bot
          </a>
      </div>
    </div>
    <div className="music">
        <div className="logoMusic white">
          <FaMusic/>
          <h2 >Music</h2>
        </div>
        <p className="descr white">Funky Monkey's simple music system allows for smooth playback from multiple sources, including YouTube and SoundCloud!</p>
        <div className="images">
            <StaticImage
            src="../images/command2.png"
            width={450}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
            />
            <StaticImage
            src="../images/playCommand.png"
            width={450}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
            />
        </div>
    </div>
  </Layout>
)

export default IndexPage
