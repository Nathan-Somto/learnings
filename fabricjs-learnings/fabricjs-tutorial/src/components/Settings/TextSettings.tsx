import React from 'react';
import { SettingsProps } from './types';

export default function TextSettings({ selectedObject, handleObjectSelection }: SettingsProps) {
    if (!selectedObject || selectedObject.object.type !== 'i-text') return null;

    const handleChange = (property: string, value: string | number) => {
        if (!selectedObject) return;
        selectedObject.object.set(property, value);
        handleObjectSelection(selectedObject.object);
    };

    const settings = [
        {
            label: 'Font Family',
            type: 'select',
            options: ['Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Comic Sans MS',  'Impact', 'Georgia', 'Trebuchet MS', 'Tahoma', 'Lucida Console'],
            value: selectedObject.fontFamily || '',
            onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
                handleChange('fontFamily', e.target.value),
        },
        {
            label: 'Font Size',
            type: 'number',
            value: selectedObject.fontSize || '',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('fontSize', parseInt(e.target.value)),
        },
        {
            label: 'Font Weight',
            type: 'select',
            options: ['normal', 'bold', 'lighter', 'bolder'],
            value: selectedObject.fontWeight || '',
            onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
                handleChange('fontWeight', e.target.value),
        },
        {
            label: 'Font Style',
            type: 'select',
            options: ['normal', 'italic', 'oblique'],
            value: selectedObject.fontStyle || 'normal',
            onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
                handleChange('fontStyle', e.target.value),
        },
        {
            label: 'Text Decoration',
            type: 'select',
            options: ['none', 'underline', 'line-through', 'overline'],
            value: selectedObject.textDecoration || 'none',
            onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
                handleChange('textDecoration', e.target.value),
        },
        {
            label: 'Letter Spacing',
            type: 'number',
            value: selectedObject.letterSpacing || 0,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('letterSpacing', parseInt(e.target.value)),
        },
        {
            label: 'Line Height',
            type: 'number',
            step: 0.1,
            value: selectedObject.lineHeight || 1.5,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('lineHeight', parseFloat(e.target.value)),
        },
    ] as const;

    return (
        <>
            {settings.map(({ label, type, options, ...rest }, index) => (
                <div key={index}>
                    <label>{label}</label>
                    {type === 'select' ? (
                        <select {...rest}>
                            {options?.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <input type={type} {...rest} />
                    )}
                </div>
            ))}
        </>
    );
}
