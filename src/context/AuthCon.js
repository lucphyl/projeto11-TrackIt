import { createContext, useState } from "react";

const AuthCon = createContext();

export function AuthProvider({ props }) {
    const Authfixa = Json.parse(localStorage.getItem("auth"));
    const [auth,setAuth] = useState(Authfixa)

    function join (dataAuth) {
        setAuth(dataAuth);
        localStorage.setItem("auth", JSON.stringify(dataAuth));
    }

    return (
        <AuthCon.Provider value={{auth, join}}>
            {props}
        </AuthCon.Provider>
     )
} 

export default AuthCon;