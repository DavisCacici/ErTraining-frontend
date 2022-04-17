import { useState } from 'react';
import { Anagrafiche } from './anagrafiche'
import { CreateOrEditUser } from './createOrEditUser'
import { User } from '../models/models'

export const AnagraficaRouteWrapper:React.FC = () => {

    const[type,setType] = useState('student');
    const[passingUser,setPassingUser] = useState<User>();
    const[creatingNew,setCreatingNew] = useState(false);

    function routeToCreateUser(s?:string , user?:User){
        if(s){
            setType(s);
        }
        if(user){
            setPassingUser(user);
        }
        setCreatingNew(!creatingNew);
    }
    function routeBackToAnagrafics(){
        setCreatingNew(!creatingNew);
    }

    if(creatingNew){
        return <CreateOrEditUser startingType={type} stratingUser={passingUser} routeHandler={routeBackToAnagrafics}></CreateOrEditUser>
    }else{
        return <Anagrafiche defaultType={type} routeCallback={routeToCreateUser}></Anagrafiche>
    }
};