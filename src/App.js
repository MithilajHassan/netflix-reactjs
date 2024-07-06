import React from "react"
import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import SearchPage from './pages/SearchPage'
import SearchProvider from "./contexts/SearchContext"
import QueryProvider from './contexts/queryContext'


function App() {
  return (
    <div className="App">
      <SearchProvider>
      <QueryProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path="/search" element={<SearchPage/>} />
        </Routes>
      </Router> 
      </QueryProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
