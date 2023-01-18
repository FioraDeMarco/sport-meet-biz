import React, { useState } from 'react';
import {  Form, Formik } from 'formik';
import { Button, Typography, Stepper, Box}  from "@mui/material";
 import Summary from '../pages/Summary';

export const Ladder = ({ children, initialValues, onSubmit }) => {
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

  return (
    <Formik
      fullWidth
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {formik => (
        <Stepper alternativeLabel activeStep={step} align='center'>
        <Form>
          <Typography>
            Step {stepNumber + 1} of {totalSteps}
          </Typography>
          {step}
          <Box paddingBottom={2} align='center' >
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
  );
};

export const LadderStep = ({ children }) => children;