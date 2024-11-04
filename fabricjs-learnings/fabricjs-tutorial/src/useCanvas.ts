import React from "react";
import * as fabric from 'fabric'
import { Action } from "./components/data";
export type CanvasAction = Action | "Translating" | "Rotating" | "Selection"
interface Values {
    canvas: fabric.Canvas | null
    updateAction: (currentAction: CanvasAction) => void,
    currentAction: CanvasAction
}
export const Canvas = React.createContext<Values | undefined>(undefined)
export  const useCanvas = () => {
    const context = React.useContext(Canvas)
    if(!context){
        throw new Error("useCnvas must be used inside a canvas provider")
    }
    return context
}