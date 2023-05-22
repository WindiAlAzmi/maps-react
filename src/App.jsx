import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Home from './pages/Home'
import FormAddress from './pages/FormAddress'
import AddForm from './pages/components/form/AddForm'
import EditForm from './pages/components/form/EditForm'
import SearchRegion from './pages/components/SearchRegion'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchRegionCustomer" element={<SearchRegion />} />
        <Route path="/FormAddress" element={<FormAddress />} />
        <Route path="/TambahAddress" element={<AddForm />} />
        <Route path="/EditAddress/:postId" element={<EditForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App
