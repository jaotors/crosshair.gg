import Header from '../header'
import Footer from '../footer'

const Layout = ({ children }) => (
  <div className='bg-base-100'>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
