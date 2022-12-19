import { createContext, useState } from "react";

const ProgressCon = createContext();

export function ProgressProvider ([ props ]) {
    const [progresso, progredir] = useState('');

    function atualizarProgresso (progress, final) {
        if (final === 0) {
            progredir(0);
            return
        }

        progredir((progress / final ) * 100);
    }

    return (
        <ProgressCon.Provider value={{progress,atualizarProgresso}}>
            {props}
        </ProgressCon.Provider>
    )
}

export default ProgressCon;