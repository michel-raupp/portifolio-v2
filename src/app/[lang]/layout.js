import { Source_Code_Pro } from 'next/font/google'
import '../../app/globals.css'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import StyledComponentsRegistry from '../lib/registry'
import { i18n } from '../../config/i18n.config'

const font = Source_Code_Pro({ subsets: ['latin'] })

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }));
  return languages;
}

export const metadata = {
  title: 'Michel Raupp',
  description: "Raupp's personal portifolio",
}

export default function RootLayout({ children, params }) {

  return (
    <html lang={params.lang}>
      <StyledComponentsRegistry>
        <body className={font.className}>
          <Header lang={params.lang} />
          {children}
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html >
  )
}
