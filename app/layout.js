import { Inter } from 'next/font/google'
import './globals.css'
import { ConfigProvider } from 'antd';
import { theme } from './theme';
import Providers from './utils/providers';
import AntdStyledComponentsRegistry from './utils/AntdStyledComponentsRegistry';
import { Provider } from "react-redux";
import store from "./store";
import { AppProvider } from './provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Doc Tracker',
  description: '...',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Providers>
            <AntdStyledComponentsRegistry>
              <ConfigProvider
                theme={theme}>
                {children}
              </ConfigProvider>
            </AntdStyledComponentsRegistry>
          </Providers>
        </AppProvider>
      </body>
    </html>
  )
}
