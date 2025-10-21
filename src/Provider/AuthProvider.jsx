import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
 


const [user, setUser] = useState();
console.log(user);

const createUser =( email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
};

useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    })
    return() =>{
        unSubscribe()
    }
},[]);

const authData ={
     user,
     setUser, 
     createUser
}
    return (
        <div>
           <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;