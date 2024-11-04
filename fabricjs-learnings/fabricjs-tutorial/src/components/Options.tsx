import * as fabric from 'fabric'
import { useCanvas } from '../useCanvas'
import { Action, options1 } from './data'
import './Options.css'

// use react style api for styling
export default function Options() {
    const {canvas, updateAction, currentAction} = useCanvas()
    const handleAction = (action: Action) => {
        if(!canvas) return
        // get random position object for top and left
        const randomPosition = () => {
            return {
                top: Math.random() * (canvas.height - 100), 
                left: Math.random() * (canvas.width - 100),
            };
        };
        const {top, left} = randomPosition();
        switch (action) {
            case 'Rectangle':
                {
                    console.log('Rectangle Added');
                    const rect = new fabric.Rect({
                        width: 100,
                        height: 100,
                        stroke: 'black',
                        borderColor: 'black',
                        fill: "black",
                        backgroundColor: 'black',
                        top,
                        left
                    })
                    canvas.add(rect)
                    break;
                    
                }
            case 'Circle':
                {
                    console.log('Circle Added');
                    const circle = new fabric.Circle({
                        radius: 50,
                        stroke: 'black',
                        fill: "black",
                       top,
                       left
                    })
                    canvas.add(circle);
                    break;
                    
                }
            case 'Triangle':
                {
                    console.log('Triangle Added');
                    const triangle = new fabric.Triangle({
                        width: 100,
                        height: 100,
                        stroke: 'black',
                        fill: "black",
                        top,
                        left

                    })
                    canvas.add(triangle)
                    break
                }
            case  "Polygon":
                {
                    // start with a diamond
                    console.log('Polygon Added');
                    const polygon  = new fabric.Polygon([
                        {
                            x:0 , y:50
                        }, {
                            x: -50, y:0
                        }, 
                        {
                            x: 50, y:0
                        },
                        {
                            x: 0, y:-50
                        }
                    ], {
                        width: 100,
                        height: 100,
                        stroke: 'black',
                        fill: "black",
                        backgroundColor: 'black',
                        angle: 45,
                        top,
                        left
                    })
                    canvas.add(polygon)
                    break
                }
            case 'Text':
                {
                    console.log('Text Added');
                    const text = new fabric.IText('Text', {
                        fill: 'black',
                        top,
                        left
                    })
                    canvas.add(text)
                    break
                }
            default:
                break
        }
        updateAction(action)
    }
    const isActiveAction = (action: Action) => {
        if(currentAction === action && action!== 'Select') return true;
        if(action === 'Select' && ( currentAction === 'Selection' || currentAction === 'Rotating' || currentAction === 'Translating')) return true
        return false
    }
    return (
        <div className='options__container'>
            {options1.map(({ Icon, action }, index) => (
                <button 
                key={index} 
                className={`options__button ${isActiveAction(action) ? 'active__btn' : ''}`} 
                onClick={() => handleAction(action)}
                >
                <Icon />
                </button>
            ))}
        </div>
    )
}
