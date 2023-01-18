import React from 'react'
import { Typography, Box } from '@mui/material'
import Container from '@mui/material/Container'
import './App.css'

const Summary =({...snapshot})=> {
   let snapshotVals = Object.values(snapshot)
   let snapshotKeys = Object.keys(snapshot)
    return (
        <Container className='container'>
        <Typography align='left' style={{marginTop: 30}} >
        <h3>
        Make sure you entered your information correctly, or go back and edit it before you submit 
        </h3>
        {snapshotVals.map((value, i) => (
            <Box>
                <br/>
            <div key={i}>
              {snapshotKeys[i]}:
            </div>
             <div key='values'>
             {value}
           </div>
         </Box>
        ))}

        </Typography>
        </Container>
    )
}
export default Summary;