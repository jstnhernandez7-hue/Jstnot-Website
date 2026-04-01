import { Helmet } from 'react-helmet-async'
import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children, title, description }) {
  return (
    <>
      <Helmet>
        <title>{title || 'JSTNOT Media LLC'}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
