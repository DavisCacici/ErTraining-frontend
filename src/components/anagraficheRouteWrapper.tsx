import { useState } from 'react';
import { Anagrafiche } from './angrafiche'
import { CreateUser } from './createUser'

export const AnagraficaRouteWrapper:React.FC = () => {

    const[type,setType] = useState('student');
    const[creatingNew,setCreatingNew] = useState(false);

    function routeToCreateUser(s:string){
        setType(s);
        setCreatingNew(!creatingNew);
    }
    function routeBackToAnagrafics(){
        setCreatingNew(!creatingNew);
    }

    if(creatingNew){
        return <CreateUser startingValue={type} routeHandler={routeBackToAnagrafics}></CreateUser>
    }else{
        return <Anagrafiche defaultType={type} routeCallback={routeToCreateUser}></Anagrafiche>
    }
};