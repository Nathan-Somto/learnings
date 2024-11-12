import Toolbar from './components/Toolbar/Toolbar'
import Settings from './components/Settings/Settings'
import BottomToolbar from './components/BottomToolbar/BottomToolbar'
import { AppProps } from './types'
import React from 'react'
import { useImageStore } from './hooks/useImage'
import ImageSidebar from './components/Sidebars/ImageSidebar'
import Canvas from './components/Canvas'
import { useConfirmEvent } from './hooks/useConfirmEvent'
export default function App(
  {
    onLoadUnsplashImages = async () => ['image 1', 'image 2'],
    onUploadImage = async () => ({ id: '1', url: 'https://via.placeholder.com/150' })
  }: AppProps) {
 
  const initialize = useImageStore(store => store.initialize)
  React.useEffect(() => {
    initialize({
      onLoadUnsplashImages,
      onUploadImage
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useConfirmEvent();
  return (
    <div id="editor" className='h-screen w-full'>
      <Canvas/>
      <ImageSidebar />
      <Toolbar />
      <Settings />
      <BottomToolbar />

    </div>
  )
}
