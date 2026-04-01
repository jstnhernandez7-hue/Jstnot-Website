import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PageLayout from './components/layout/PageLayout'
import Home from './pages/Home'
import Work from './pages/Work'
import Studio from './pages/Studio'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } },
}

function AnimatedPage({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageLayout title="JSTNOT Media LLC — We Turn Dealerships Into Content Machines">
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            </PageLayout>
          }
        />
        <Route
          path="/work"
          element={
            <PageLayout title="Our Work — JSTNOT Media LLC">
              <AnimatedPage>
                <Work />
              </AnimatedPage>
            </PageLayout>
          }
        />
        <Route
          path="/studio"
          element={
            <PageLayout title="About Us — JSTNOT Media LLC">
              <AnimatedPage>
                <Studio />
              </AnimatedPage>
            </PageLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}
