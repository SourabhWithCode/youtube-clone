import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Box } from '@mui/material';
import {Navbar,Feed,VideoDetails,ChannleDetail,SearchFeed} from './components';
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Feed/>}/>
            <Route exact path='/video/:id' element={<VideoDetails/>}/>
            <Route exact path='/channel/:id' element={<ChannleDetail/>}/>
            <Route exact path='/search/:searchTerm' element={<SearchFeed/>}/>
          </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
