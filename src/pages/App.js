import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {  Button, Typography, Stepper, Step, Card,Grid, CircularProgress, StepLabel, CardContent,Box}  from "@mui/material";
import Summary from './Summary';




const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));



const Ladder = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const stepss = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);
  const [summary, setSummary] = useState({})

 

  const step = stepss[stepNumber];
  const totalSteps = stepss.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = values => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = values => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    console.log('bag', bag, 'values', values)
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      setSummary({...summary, snapshot})
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      console.log('bag.setTouched', bag.setTouched({}))
      next(values);
    }
  };
console.log('snapshot', snapshot)
console.log('children', children)
console.log('stepss', stepss)
console.log('totalSteps', totalSteps)
console.log('summary', summary)
  return (
    <Card>
      <CardContent>
     
        <Typography align='center' variant='inherit'>
    <Formik
      fullWidth
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {formik => (
        <Stepper alternativeLabel activeStep={step} align='center'>
        <Form>
          <h4>
            Step {stepNumber + 1} of {totalSteps}
          </h4>
          {step}
          <Box paddingBottom={2} align='center'>
          {isLastStep ? (
             <Summary {...snapshot} />
              ): ''}
              <Button   type='submit' 
        color='primary' 
        variant='contained' 
        fullWidth
        style={{marginTop: 30}} disabled={formik.isSubmitting} type="submit">
                {isLastStep ? 'Submit' : 'Next'}
              </Button>
           
            <div>
            {stepNumber > 0 && (
              <Button   type='submit' 
              color='primary' 
              variant='contained' 
              fullWidth
              style={{marginTop: 30}} onClick={() => previous(formik.values)} type="button">
                Back
              </Button>
            )}
          
            </div>
            </Box>

        </Form>
        </Stepper>
      )}
    </Formik>
    </Typography>
    </CardContent>
    </Card>
  );
};

const LadderStep = ({ children }) => children;


const App = () => (
<>


<Card>
  <CardContent>
  <Typography align='center' variant='inherit'>
    <h1>Open Sponsorship</h1>
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
        <div>
          <label htmlFor="firstName">First Name</label>
          <Box paddingBottom={2} align='center'>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
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
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </LadderStep>
      <LadderStep
        onSubmit={() => console.log('Step3 onSubmit')}
        
       
      >
     {/* RIGHT HERE */}
       
        </LadderStep>
    </Ladder>
    </Typography>
    </CardContent>
    </Card>
 
    </>

);

export default App;




