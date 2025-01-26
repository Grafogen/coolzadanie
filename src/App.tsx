import './App.css'
import {Route, Routes} from "react-router-dom";
import {createContext, Dispatch, SetStateAction, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import './index.css'
import {PageDataInterface} from "./types/PageDataTypes.ts";
import {LangsInterface} from "./types/Langs.ts";
import AllSections from "./components/AllSections.tsx";
// @ts-ignore
export const StateContext= createContext()

export interface StateContextType {
    globalLanguage: string;
    pageContent: PageDataInterface | undefined;
    setGlobalLanguage: Dispatch<SetStateAction<string>>;
    translation:LangsInterface ;// 3000 строк типов для каждой фразы пожалуй отдохнут
    screen:number;
}

function App() {

    const [globalLanguage, setGlobalLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
    const [screen, setScreen] = useState(0)

    setInterval(() => {
        setScreen(document.documentElement.clientWidth)
    }, 100);
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

    const fetchPageContent = async ():Promise<PageDataInterface> => {
        const response = await fetch(`https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b`);
        if (!response.ok){
            console.error('Ошибка запроса:', response.status);
        }
        const data = await response.json();
        return data
    };
    const {data:pageContent} = useQuery({
        queryKey: ['pageContent'],
        queryFn: fetchPageContent
    });

    const value: StateContextType = {
        globalLanguage: globalLanguage,
        pageContent: pageContent,
        setGlobalLanguage:setGlobalLanguage,
        translation:translation,
        screen
    };

    if(!isSuccess){
        return <div>Loading</div>;
    }
    return (
        <div>
            <StateContext.Provider value={value}>
                <Routes>
                    <Route path='/' element={<AllSections/>}/>
                    {/*<Route path='/*' element={<UnderConstruction />} />*/}
                </Routes>
            </StateContext.Provider>
        </div>

    )
}

export default App
