import Layout from '../../component/layouts/Layout'
import Header from '../../component/header/Header'
import About from '../../component/about/About'
import Services from '../../component/services/Services'
import Tools from '../../component/tools/Tools'
import Runtime from '../../component/runtime/Runtime'       
import Contact from '../../component/contact/Contact'
import Footer from '../../component/footer/Footer'
import Portofio from '../../component/portofolio/Portofio'


export default function HomePage() {
  return (
      <div className="bg-[#d9d9d9] -z-99 dark:bg-[#353535] text-gray-900 dark:text-gray-100 min-h-screen">
        <Layout>
        <section>
            <Header />
        </section>
        <section>
            <About />
        </section>
        <section>
            <Services />
        </section>
        <section>
            <Tools />
        </section>
        <section>
            <Portofio />
        </section>
        <section>
            <Runtime />
        </section>
        <section>
            <Contact />
        </section>
        <section>
            <Footer />
        </section>
        </Layout>
      </div>
  )
}
