import React, {useState} from 'react'
import { Typography } from '@mui/material'

const Summary =({...snapshot})=> {
    console.log('Object.values(snapshot)', Object.values(snapshot))
   let snapshotVals = Object.values(snapshot)
   let snapshotKeys = Object.keys(snapshot)
    return (
        <>
        <Typography>

            <h3>
        Make sure you entered your information correctly, or go back and edit it before you submit 
        </h3>
        {snapshotVals.map((value, i) => (
            <h4>
            <div key='i'>
              {snapshotKeys[i]}
            </div>
             <div key='values'>
             {value}
         </div>
         </h4>
        ))}

        </Typography>
        </>
    )
}
export default Summary;