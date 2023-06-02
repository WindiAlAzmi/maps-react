import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Home from './pages/Home'
import FormAddress from './pages/FormAddress'
import AddForm from './pages/components/form/AddForm'
import EditForm from './pages/components/form/EditForm'
import SearchRegion from './pages/components/SearchRegion'
// import MarkerCluster from './pages/components/markerCluster/MarkerCluster'
import MarkerMain from './pages/components/markerCluster/MarkerMain'
import MarkerMainNearestNeighboor from './pages/components/NearestNeighboor/MarkerMainNearestNeighboor'
import CookiesUser from './pages/components/cookiesUserAgent/cookiesUser'
import MultiFilter from './pages/components/multiFilter/MultiFilter'
import Wishlist from './pages/components/wishlist/Wishlist'
import SearchData from './pages/components/searchMechanism/SearchData'
import TranslationComponent from './pages/components/Translation/translationComponent'
import YoutubeEmbed from './pages/components/YoutubeEmbed/YoutubeEmbed'
import ProductCard from './pages/components/SliderTestimoni/ProductCard'
import WebBanerCard from './pages/components/webBaner/WebBanerCard'
import ProductSlider from './pages/components/productSlider/ProductSlider'
import ProductPagination from './pages/components/allProductPaginate/ProductPagination'
import ZoomCard from './pages/components/zoomInZoomOut/ZoomCard'
import SendEmail from './pages/components/sendData/SendEmail'
import ZoomPinch from './pages/components/zoomInZoomOut/ZoomPinch'
import PaymentNMW from './pages/components/payments/PaymentNMW'


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
        <Route path="/markerCluster" element={<MarkerMain />} />
        <Route path="/markerNearest" element={<MarkerMainNearestNeighboor />} />
        <Route path="/userAgent" element={<CookiesUser />} />
        <Route path="/multiFilter" element={<MultiFilter />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<SearchData />} />
        <Route path="/translation" element={<TranslationComponent />} />
        <Route path="/youtubeEmbed" element={<YoutubeEmbed />} />
        <Route path="/testimoniSlider" element={<ProductCard />} />
        <Route path="/banerSlider" element={<WebBanerCard />} />
        <Route path="/productSlider" element={<ProductSlider />} />
        <Route path="/productPaginate" element={<ProductPagination />} />
        <Route path="/zoomCard" element={<ZoomCard />} />
        <Route path="/zoomPinch" element={<ZoomPinch />} />
        <Route path="/sendEmail" element={<SendEmail />} />
        <Route path="/paymentNMW" element={<PaymentNMW />} />
      </Routes>
    </>
  );
}

export default App
