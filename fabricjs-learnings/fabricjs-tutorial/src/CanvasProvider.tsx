
import React, { PropsWithChildren, useEffect, useRef } from 'react'
import './App.css'
import * as fabric from 'fabric'
import { Canvas, CanvasAction } from './useCanvas'



function CanvasProvider({ children }: PropsWithChildren) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [canvas, setCanvas] = React.useState<fabric.Canvas | null>(null)
    const [currentAction,setCurrentAction] = React.useState<CanvasAction>('Selection')
    useEffect(() => {
        // check local storage for a saved instance
        //const savedInstance = localStorage.getItem('canvas')

        const canvasInstance = new fabric.Canvas(canvasRef.current as HTMLCanvasElement, {
            selectionColor: 'yellow',
            selectionLineWidth: 2,
            height: 400,
            width: 400,

        });
       /*  if(savedInstance !== null){
            canvasInstance.loadFromJSON(savedInstance, () => {
                console.log("loaded from local save");
                 canvasInstance.backgroundColor= '#eee'
            })
        } */
        canvasInstance.backgroundColor= '#eee'
        canvasInstance.renderAll()
        canvasInstance.on('object:added', (e) => {
            console.log('object:added', e);
            //localStorage.setItem('canvas', JSON.stringify(canvasInstance))
        });
        canvasInstance.on('object:moving', () => {
            setCurrentAction('Translating')
        });
        canvasInstance.on("mouse:wheel", (opt) => {
            const delta = opt.e.deltaY;
            let zoom = canvasInstance.getZoom();
            zoom = zoom + delta / 200;
        })
        setCanvas(canvasInstance)
        return () => {
            canvasInstance.dispose()
        }
    }, [])
    const updateAction = (newAction: CanvasAction) => {
        setCurrentAction(newAction)
    } 
    return (
        <Canvas.Provider value={{
            canvas,
            updateAction,
            currentAction
        }}>
            {children}
            <canvas ref={canvasRef} style={{
               /*  backgroundColor: '#eee', */
                borderRadius: '12px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            }} />
        </Canvas.Provider>
    )
}

export default CanvasProvider
