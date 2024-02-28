import { Inter } from 'next/font/google'
import './globals.css'
import { ConfigProvider } from 'antd';
import { theme } from './theme';
import Providers from './utils/providers';
import AntdStyledComponentsRegistry from './utils/AntdStyledComponentsRegistry';
import { ReduxProvider } from './redux/provider';
import 'react-phone-input-2/lib/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Doc Tracker',
  description: '...',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AntdStyledComponentsRegistry>
            <ConfigProvider
              theme={theme}>
              <ReduxProvider>
                {children}
              </ReduxProvider>
            </ConfigProvider>
          </AntdStyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}
