import { useContext } from "react";
import ProgressCon from "../context/PorcentagemCon";

export default function useProgress(){
    return useContext(ProgressCon);
}