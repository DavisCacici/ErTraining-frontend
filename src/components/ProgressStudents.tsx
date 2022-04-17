import Pusher from 'pusher-js';
import React from "react";

export const ProgressStudent = () => {
    var pusher = new Pusher('b25895c8fd0b48f0c6b1', {
        cluster: 'eu'
    });

    var channel = pusher.subscribe('setProgress');
    channel.bind('changeProgress', function(data: any){
        alert(JSON.stringify(data));
    })

    return(
        <div>
        
        </div>
    )
};