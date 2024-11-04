import CanvasProvider from './CanvasProvider'
import Options from './components/Options'
import Settings from './components/Settings/Settings'

export default function App() {
  return (
    <CanvasProvider>
      <Options />
      <Settings />
    </CanvasProvider>
  )
}
