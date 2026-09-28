import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <>
      <Header/>
      <main className='page'>
        <Routes>
          <Route path='/' element={<DashboardPage/>} />
          {/* <Route path="/applications/new" element={<ApplicationFormPage />} />
          <Route path="/applications/:id" element={<ApplicationDetailPage />} />
          <Route path="/applications/:id/edit" element={<ApplicationFormPage />} /> */}
          <Route path="*" element={<p>Page not found.</p>} />
        </Routes>
      </main>
    </>
  )
}

export default App
