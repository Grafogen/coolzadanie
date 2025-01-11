import './App.css'
import Header from "./components/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import {createContext, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import './index.css'
// @ts-ignore
export const StateContext= createContext()

function App() {

    const [globalLanguage, setGlobalLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');

    const fetchTranslation = async () => {
        const response = await fetch(`https://api2.praguecoolpass.com/translation`);
        if (!response.ok){
            console.error('Ошибка запроса:', response.status);
        }
        const data = await response.json();
        return data
    };
    const {data:translation, isSuccess} = useQuery({
        queryKey: ['translation'],
        queryFn: fetchTranslation
    });

    if(!isSuccess){
        return <div>Loading</div>;
    }
    return (
        <div>
            <StateContext.Provider value={{globalLanguage, setGlobalLanguage, translation}}>
                <Routes>
                    <Route path='/' element={<Header/>}/>
                    {/*<Route path='/*' element={<UnderConstruction />} />*/}
                </Routes>
            </StateContext.Provider>
        </div>

    )
}

export default App
