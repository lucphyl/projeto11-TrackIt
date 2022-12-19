import { useContext } from "react";
import AuthCon from "../context/AuthCon";

export default function useAuth(){
    return useContext(AuthCon)
}