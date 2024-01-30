import { createContext, useEffect, useState } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [url] = useState("http://localhost:3000/api")

    const [dark, setDark] = useState(() => {
        const darkMode = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('dark')) : null;
        return Boolean(darkMode)
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('dark', dark);
        }
    }, [dark]);

    return (
        <Context.Provider value={{ dark, setDark, url }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }