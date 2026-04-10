import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CreatePost from './pages/CreatePost';
import Feed from './pages/Feed';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Feed/>}/>
      <Route path="/create-post" element={<CreatePost />}/>
      <Route />
    </Routes>
    </BrowserRouter>
  );
}

export default App;