import React from 'react'
import Layout from '../components/layout'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <Layout>
      <div className="som">
      <h1 className='up white'>Frequent Questions</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Do I need to pay for a premium?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For now this bot is completely free. No pay walls or tiers this bot is only used for streaming music and it doesn't do enough to have someone pay for it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Why does the stream stutter?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The code for the bot is hosted on the free version of heroku, so the bandwidth and connection is not the best. If more people use this bot I would consider moving it
            to a paid subscription, but for now heroku works the best and it only stutters during their downtimes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What happens to the queue after it plays all the song?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              I programmed it to where it removes the current song from the song queue and replaces it with the next song in the queue. So when every song of the queue plays it completely erases the queue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I use Spotify and SoundCloud?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Unfortunately you can't, but I am strongly considering in adding those two because I understand that every song is not on youtube. For now its only youtube!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How many songs can be in the queue?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As many songs as you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </Layout>
  )
}

export default FAQ