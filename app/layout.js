import { Inter } from 'next/font/google'
import './globals.css'
import { ConfigProvider } from 'antd';
import { theme } from './theme';
import Providers from './utils/providers';
import AntdStyledComponentsRegistry from './utils/AntdStyledComponentsRegistry';
import { Provider } from "react-redux";
import store from "./store";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Doc Tracker',
  description: '...',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Providers>
            <AntdStyledComponentsRegistry>
              <ConfigProvider
                theme={theme}>
                {children}
              </ConfigProvider>
            </AntdStyledComponentsRegistry>
          </Providers>
        </Provider>
      </body>
    </html>
  )
}
