import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Typography } from '@mui/material';

const FormikForm = ({ children, initialValues, onSubmit }) => {
    const [stepNumber, setStepNumber] = useState(0);
    const steps = React.Children.toArray(children);
    const [snapshot, setSnapshot] = useState(initialValues);
  
    const step = steps[stepNumber];
    const totalSteps = steps.length;
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
      if (step.props.onSubmit) {
        await step.props.onSubmit(values, bag);
      }
      if (isLastStep) {
        return onSubmit(values, bag);
      } else {
        bag.setTouched({});
        next(values);
      }
    };
  
    return (
      <Typography>
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {formik => (
          <Form>
            <p>
              Step {stepNumber + 1} of {totalSteps}
            </p>
            {step}
            <div style={{ display: 'flex' }}>
              {stepNumber > 0 && (
                <button onClick={() => previous(formik.values)} type="button">
                  Back
                </button>
              )}
              <div>
                <button disabled={formik.isSubmitting} type="submit">
                  {isLastStep ? 'Submit' : 'Next'}
                </button>
              </div>
            </div>
  
          </Form>
        )}
      </Formik>
      </Typography>
    );
  };

export default FormikForm;