import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './routers/router'

const App = () => {
  return (
    <RouterProvider router={createBrowserRouter(router)}/>
  )
}

export default App
