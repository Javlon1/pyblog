import { createContext, useEffect, useState } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [urlApi] = useState("https://54a8900a61b443e94f247d6785244b40.serveo.net/api")
    const [jwt_token, setJwt_token] = useState("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2Njk0NjQ4LCJpYXQiOjE3MDY2OTQwNDgsImp0aSI6ImM5NGI0OWJkOTU4OTQ3ODA5NTY2ZGE5OTNiNmZiYjIyIiwidXNlcl9pZCI6M30.wbknBlqvh6Cfi_mb_0KdEzyD_O13djth2lAPnRBeB4o")

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
        <Context.Provider value={{ dark, setDark, urlApi, jwt_token, setJwt_token }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }