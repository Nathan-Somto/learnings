import { FabricObject, FabricObjectProps, ObjectEvents, SerializedObjectProps } from 'fabric'
export interface SelectedObject{
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
export interface SettingsProps {
    selectedObject: SelectedObject | null;
    handleObjectSelection: (target: SelectedObject["object"], renderCanvas?:boolean) => void
}