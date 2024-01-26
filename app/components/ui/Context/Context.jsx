import { createContext, useEffect, useState } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [url] = useState("http://localhost:3000/api")

    const [detail, setDetail] = useState([])

    const [dark, setDark] = useState(() => {
        const darkMode = typeof window !== 'undefined' ? window.localStorage.getItem('dark') : null;
        return darkMode ? darkMode : false;
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('dark', dark);
        }
    }, [dark]);

    return (
        <Context.Provider value={{ dark, setDark, url, detail, setDetail }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }