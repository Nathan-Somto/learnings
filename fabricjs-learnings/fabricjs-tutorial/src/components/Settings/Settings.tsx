import React from 'react'
import { useCanvas } from '../../useCanvas'
import './Settings.css'
import { FabricObject, FabricObjectProps, ObjectEvents, SerializedObjectProps } from 'fabric'
import DimensionSettings from './DimensionSettings';
import TextSettings from './TextSettings';
type SelectedObject = {
    object: FabricObject<Partial<FabricObjectProps>, SerializedObjectProps, ObjectEvents>;
    width?: number;
    height?: number;
    diameter?: number;
    fontFamily?: string;
    fontWeight?: string;
    fontSize?: number;
    fontStyle?: 'normal' | 'italic' | 'oblique';
    textDecoration?: 'underline' | 'line-through' | 'overline' | 'none';
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    letterSpacing?: number;
    lineHeight?: number;
    fill: string;
    x?: number;
    y?: number;
};

export default function Settings() {
    const { canvas } = useCanvas()
    const [selectedObject, setSelectedObject] = React.useState<SelectedObject | null>(null)
    const handleObjectSelection = (target: SelectedObject['object'], renderCanvas = true) => {
        const selection: SelectedObject = {
            object: target,
            fill: target.fill as string
        }
        if (target.type !== 'circle') {
            selection.width = target.width * target.scaleX
            selection.height = target.height * target.scaleY
        }
        else if (target.type === 'circle') {
            //@ts-expect-error: the radius prop exists but the types are not included
            selection.diameter = Math.round(target.radius * 2 * target.scaleX)
        }
        else if (target.type === 'text') {
            //@ts-expect-error: the text prop exists but the types are not included
            selection.fontFamily = target.fontFamily
            //@ts-expect-error: the fontSize prop exists but the types are not included
            selection.fontWeight = target.fontWeight
            //@ts-expect-error: the fontSize prop exists but the types are not included
            selection.fontSize = target.fontSize
            //@ts-expect-error: the fontStyle prop exists but the types are not included
            selection.fontStyle = target.fontStyle
            //@ts-expect-error: the textDecoration prop exists but the types are not included
            selection.textDecoration = target.textDecoration
            //@ts-expect-error: the textAlign prop exists but the types are not included
            selection.textAlign = target.textAlign
            //@ts-expect-error: the letterSpacing prop exists but the types are not included
            selection.letterSpacing = target.letterSpacing
            //@ts-expect-error: the lineHeight prop exists but the types are not included
            selection.lineHeight = target.lineHeight
        }
        setSelectedObject(selection)
        if (renderCanvas) {
            canvas?.renderAll()
        }
    }

    React.useEffect(() => {
        if (!canvas) return
        canvas.on('selection:created', (e) => {
            console.log("created", e.selected[0])
            // keep track of width and height
            handleObjectSelection(e.selected[0], false)
        })
        canvas.on('selection:updated', (e) => {
            handleObjectSelection(e.selected[0], false)
        })
        canvas.on("object:scaling", (e) => {
            handleObjectSelection(e.target, false)
        })
        canvas.on("object:modified", (e) => {
            handleObjectSelection(e.target, false)
        })
        canvas.on('selection:cleared', () => {
            setSelectedObject(null)
        })
        return () => {
        }
    }, [canvas])
    return (
        <div className='Settings__container'>
            <h2>Settings</h2>
            <DimensionSettings
                selectedObject={selectedObject}
                handleObjectSelection={handleObjectSelection}
            />
            <TextSettings
                selectedObject={selectedObject}
                handleObjectSelection={handleObjectSelection}
            />
        </div>
    )
}
