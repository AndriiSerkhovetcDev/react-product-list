import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import { appSettings, links, footerLinks, footerNavBrandProps } from './mock/mock'

function App() {
  const isLogin = appSettings.isLogin;

  return (
    <>
      <Header isLogin={appSettings.isLogin} links={links}/>

      <div className="container">
        <ProductList isLogin={appSettings.isLogin}/>
        <Footer {...{footerNavBrandProps, footerLinks}} />
      </div>
    </>
  )
}

export default App
