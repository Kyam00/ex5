import React, { useState, useEffect } from 'react';

function ContaMuito() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `Valor: ${count}`;
    }, [count]);

    function aumentaCont() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Valor: {count}</p>
            <button onClick={aumentaCont}>
                Sonegue
            </button>
        </div>
    );
}
export default ContaMuito;