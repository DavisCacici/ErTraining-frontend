import { Box } from '@mui/material';
import Pusher from 'pusher-js';
import React from "react";

export const ProgressStudent = () => {
    Pusher.logToConsole = true;
    var pusher = new Pusher('cb6d3938abbc2b5ba712', {
        cluster: 'eu'
    });

    var channel = pusher.subscribe('setProgress');
    channel.bind('changeProgress', function(data: any){
        console.log(data);
        // alert(JSON.stringify(data));
    });

    return (
        <Box>
            <h1>
                Prova
            </h1>
        </Box>
    )
};