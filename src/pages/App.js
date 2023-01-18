import React from 'react';
import { ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import {  Typography, Box}  from "@mui/material";
import './App.css'
import { Ladder, LadderStep} from '../components/FormikForm';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const App = () => (
<div align='center' variant='inherit'>
  <Typography align='center' variant='inherit'>
    <h1>Open Sponsorship</h1>
    <h3>Where sports come to do business</h3>
    <Ladder
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        sport: '',
        gender: '',
        location: '',
        team: '',
        about: '',

      }}
      onSubmit={async values =>
        sleep(300).then(() => console.log('Ladder submit', values))
      }
    >
      <Typography align='center' variant='inherit'>
      <LadderStep
       fullWidth
        onSubmit={() => console.log('Step1 onSubmit')}
        validationSchema={Yup.object({
          firstName: Yup.string().required('required'),
          lastName: Yup.string().required('required'),
          dateOfBirth: Yup.date().required('required'),
          sport: Yup.string().required('required'),
          gender: Yup.string().required('required'),
        })}
      >

          <label htmlFor="firstName">First Name</label>
          <Box paddingBottom={2}>
          <Field
            autoComplete="given-name"
            component="input"
            
            id="firstName"
            name="firstName"
            placeholder="First Name"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="firstName" />
               </Box>
     
          <label htmlFor="lastName">Last Name</label>
          <Box paddingBottom={2}>
          <Field
            autoComplete="family-name"
            component="input"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            type="text"
          />
              
          <ErrorMessage className="error" component="div" name="lastName" />
          </Box>
          <label htmlFor="sport">Sport</label>
          <Box paddingBottom={2}>
          <Field
            autoComplete="sport"
            component="input"
            id="sport"
            name="sport"
            placeholder="Your Sport"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="sport" />
               </Box>
          <label htmlFor="gender">Gender</label>
          <Box paddingBottom={2}>
          <Field
            autoComplete="gender"
            component="input"
            id="gender"
            name="gender"
            placeholder="Gender"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="gender" />
               </Box>
          <label htmlFor="location">Location</label>
          <Box paddingBottom={2}>
          <Field
            autoComplete="location"
            component="input"
            id="location"
            name="location"
            placeholder="Your location"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="location" />
               </Box>
      </LadderStep>
      </Typography>
      <LadderStep
        onSubmit={() => console.log('Step2 onSubmit')}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('required'),
            location: Yup.string().required('required'),
            team: Yup.string().required('required'),
            about: Yup.string().required('required')

        })}
      >

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <Box paddingBottom={2}>
          <Field
            autoComplete="dateOfBirth"
            component="input"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="MM/DD/YYYY"
            type="date"
          />
          <ErrorMessage className="error" component="div" name="dateOfBirth" />
               </Box>
          <label htmlFor="email">Email</label>
          
          <Box paddingBottom={2}>
          <Field
            autoComplete="email"
            component="input"
            id="email"
            name="email"
            placeholder="Email"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="email" />
           </Box>
  

          <label htmlFor="team">Team</label>
          <Box paddingBottom={2}>
          <Field
            autoComplete="team"
            component="input"
            id="team"
            name="team"
            placeholder="Your Team"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="email" />
           </Box>
          <label htmlFor="about">About You</label>
          <Box paddingBottom={2}>
          <Field
            autoComplete="about"
            component="input"
            id="about"
            name="about"
            placeholder="Tell us about yourself..."
            type="text"
          />
          <ErrorMessage className="error" component="div" name="about" />
          </Box>
      </LadderStep>
      <LadderStep
        onSubmit={() => console.log('Step3 onSubmit')}
      >
        </LadderStep>
    </Ladder>
    </Typography>
    </div>


);

export default App;






