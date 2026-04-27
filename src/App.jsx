import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';
import { AuthProvider } from './components/authWrapper/authProvider';
import Homepage from './pages/Homepage';
import Login from './components/login/login';
import ProtectedRoute from './components/authWrapper/ProtectedRoute';

function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col bg-gray-100 min-h-screen">
          <Header />
          <main className='grow '>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path='/posts' element={
                <ProtectedRoute>
                  <BlogPostsPage />
                </ProtectedRoute >
              } />
              <Route path='/login' element={<Login />} />
              <Route path="/post/:id" element={<IndividualPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
