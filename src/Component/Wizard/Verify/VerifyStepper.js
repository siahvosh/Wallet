import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage: 'linear-gradient(95deg, #FF5722 0%, #FF7043 50%, #424242 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage: 'linear-gradient(95deg, #FF5722 0%, #FF7043 50%, #424242 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: '#424242',
        borderRadius: 1,
        ...theme.applyStyles('dark', {
            backgroundColor: '#424242',
        }),
    },
}));
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: '#878787',
    zIndex: 1,
    color: '#FFFFFF',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.applyStyles('dark', {
        backgroundColor: '#424242',
    }),
    ...(ownerState.active && {
        backgroundImage: 'linear-gradient(136deg, #FF5722 0%, #FF7043 50%, #424242 100%)',
        boxShadow: `0 4px 10px 0 ${theme.palette.shadow}`,
    }),
    ...(ownerState.completed && {
        backgroundImage: 'linear-gradient(136deg, #FF5722 0%, #FF7043 50%, #424242 100%)',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <EmailIcon />,
        2: <ContactPhoneIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

export const VerifyStepper = (props) => {
    return (
        <React.Fragment>
            <Stack sx={{ width: 'calc(100%)',justifyContent: 'center', marginTop: '2rem', paddingBottom: '1rem'}}>
                <Stepper alternativeLabel activeStep={props.step} connector={<ColorlibConnector />}>
                    {props.labels.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Stack>

        </React.Fragment>
    );
}

