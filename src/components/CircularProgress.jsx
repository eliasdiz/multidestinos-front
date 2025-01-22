import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';



const socket = io('http://localhost:8080')


function CircularProgressWithLabel(props) {



return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
    <CircularProgress color='success' variant="determinate" {...props} />
    <Box
        sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}
    >
        <Typography
        variant="caption"
        component="div"
        sx={{ color: 'text.secondary' }}
        >
        {`${Math.round(props.value)}%`}
        </Typography>
    </Box>
    </Box>
);
}

CircularProgressWithLabel.propTypes = {
/**
 * The value of the progress indicator for the determinate variant.
 * Value between 0 and 100.
 * @default 0
 */
value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel() {
    
    const navigate = useNavigate()
    const [progress, setProgress] = React.useState(1);
    
    const autExitoso = () => {
        socket.on('autenticado', ({state}) => {
            console.log(state)
            state && setProgress(100)
        })
        setTimeout(() => {
            navigate('/dashboard')
        }, 2000);
    }


    React.useEffect(
        () => {
            autExitoso()
        },
        []
    )

    React.useEffect(() => {
        autExitoso()
        const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
        }, 800);
        return () => {
        clearInterval(timer);
        };
    }, []);

    return <CircularProgressWithLabel value={progress} />;
}
