import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QubicConnectCombinedProvider } from './contexts/QubicConnectContext'
import { HM25Provider } from './contexts/HM25Context'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import StartPage from './pages/StartPage'
import EchoPage from './pages/EchoPage'
import BurnPage from './pages/BurnPage'
import { Toaster } from 'react-hot-toast'
import { ConfigProvider } from "./contexts/ConfigContext"
import EvmPage from './pages/EvmPage'

export function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer className="mt-auto" />
        </div>
    )
}

function App() {
    return (
        <ConfigProvider>
            <QubicConnectCombinedProvider>
                <HM25Provider>
                    <BrowserRouter>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<StartPage />} />
                                <Route path="/echo" element={<EchoPage />} />
                                <Route path="/burn" element={<BurnPage />} />
                                <Route path="/evm" element={<EvmPage />} />
                            </Routes>
                            <Toaster
                                position="top-right"
                                toastOptions={{
                                    style: {
                                        background: "#202E3C",
                                        color: "#fff",
                                    },
                                }}
                            />
                        </Layout>
                    </BrowserRouter>
                </HM25Provider>
            </QubicConnectCombinedProvider>
        </ConfigProvider>
    )
}

export default App
