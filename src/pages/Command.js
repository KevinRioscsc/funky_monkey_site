import React from 'react'
import Layout from '../components/layout'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Command = () => {
  return (
    <Layout>
      <div className="som">
      <h1 className='up white'>Funky Commands</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>!play</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This command plays and stream any keyword or http link the user types in after !play. If a song is currently playing 
            the user could add another song to the song queue by doing the command again along with the keyword.
            Ex: !play Bohemian Rhapsody by Queen
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>!queue</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The command shows you the songs on the current queue. Currently playing at the top and the rest of songs in their respective order.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>!skip</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This command skips the currently playing song and plays the next song in the queue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>!pause</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Pauses the song that is playing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>!resume</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Resumes it from the place you paused it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </Layout>
  )
}

export default Command