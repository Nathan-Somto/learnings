import React from 'react'
import { SettingsProps } from './types'

export default function DimensionSettings({ selectedObject, handleObjectSelection }: SettingsProps) {
    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!selectedObject) return
        selectedObject.object.set('width', parseInt(e.target.value))
        handleObjectSelection(selectedObject.object)

    };
    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!selectedObject) return
        selectedObject.object.set('height', parseInt(e.target.value))
        handleObjectSelection(selectedObject.object)

    };
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!selectedObject) return
        selectedObject.object.set('fill', e.target.value)
        handleObjectSelection(selectedObject.object)
    };
    const handleDiameterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!selectedObject) return
        // convert diameter to radius
        const radius = parseInt(e.target.value) / 2
        selectedObject.object.set('radius', radius)
        handleObjectSelection(selectedObject.object)
    }
    return (
        <div>
            {selectedObject?.width && (
                <div>
                    <label>W</label>
                    <input type="number" value={selectedObject.width} onChange={handleWidthChange} />
                </div>
            )}
            {selectedObject?.height && (
                <div>
                    <label>H</label>
                    <input type="number" value={selectedObject.height} onChange={handleHeightChange} />
                </div>
            )}
            {
                selectedObject?.fill && (
                    <div>
                        <input type='color' value={selectedObject.fill} onChange={handleColorChange} />
                        <label>{selectedObject.fill}</label>
                    </div>
                )
            }
            {selectedObject?.diameter && (
                <div>
                    <label>D</label>
                    <input type="number" value={selectedObject.diameter} onChange={handleDiameterChange} />
                </div>
            )}
        </div>
    )
}
