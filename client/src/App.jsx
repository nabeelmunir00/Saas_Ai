import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Community from './pages/Community'
import BlogTitle from './pages/BlogTitle'
import GenerateImage from './pages/GenerateImage'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import ReviceResume from './pages/ReviceResume'
import WriteArticle from './pages/WriteArticle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='community' element={<Community />} />
          <Route path='write-artical' element={<WriteArticle />} />
          <Route path='blog-title' element={<BlogTitle />} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='remove-object' element={<RemoveObject />} />
          <Route path='review-resume' element={<ReviceResume />} />
          <Route path='generate-image' element={<GenerateImage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
