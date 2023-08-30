import { useNavigate } from "react-router-dom";

import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

export const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <h1 className="text-3xl font-medium">Lista de tareas</h1>
                    <p className="text-slate-500 mt-1">Hola, aquí tienes tus últimas tareas</p>
                </div>
                <div className="inline-flex space-x-2 items-center">
                    <button type="button" id="button_clock" className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-cyan-50 hover:text-white bg-cyan-600 hover:bg-cyan-500">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <lord-icon src="https://cdn.lordicon.com/qznlhdss.json" trigger="loop-on-hover" target="#button_clock" delay="1000" class="w-4 h-4 current-color">
                        </lord-icon>
                        <span className="text-sm font-medium hidden md:block">Urgentes</span>                     
                    </button>
                    <button type="button" className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg> 
                        <span className="text-sm hidden md:block">Últimas</span>                    
                    </button>
                    <button type="button" onClick={ () => navigate('/tasks/add') } id="button_new" className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-cyan-600 text-cyan-800 hover:text-white transition-colors duration-200">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg> */}
                        <lord-icon src="https://cdn.lordicon.com/ynwbvguu.json" trigger="loop-on-hover" delay="500" state="hover" target="#button_new" class="w-6 h-6 current-color"></lord-icon>
                    </button>
                </div>
            </div>
        </>
    )
}
