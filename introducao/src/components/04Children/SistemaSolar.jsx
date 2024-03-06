import React from 'react';

const SistemaSolar = ({children, galaxia}) => {
    return (
        <>
            <h2>Sistema Solar da Galáxia {galaxia}</h2>
            <hr />
            {React.Children.map(
                children,
                (child) => {
                    return React.cloneElement(child, {galaxia})
                }
            )}
        </>
    )
}

export default SistemaSolar;