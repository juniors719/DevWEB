

import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {

    const cores = {bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue"}

    return (
        <ColorTheme.Provider value={cores}>
            <div>
                <h1 style={{ backgroundColor: cores.bkgA }}>
                    Contexto A
                </h1>
                <FunctionContextB />
                <FunctionContextC />
            </div>
        </ColorTheme.Provider>
    )
}

export default FunctionContextA