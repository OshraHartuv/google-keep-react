import { useEffect } from "react"
import { SideMenu } from "../cmps/SideMenu";

export const NoteApp = (props) =>{
    useEffect(()=>{
        
    })

    return (
        <div className="note-app">
            <SideMenu/>
            <h1>main content</h1>
        </div>
    )
}