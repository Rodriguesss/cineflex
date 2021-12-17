import Header from './generic/Header/index'
import Home from './pages/home/Index/index'
import Container from './generic/Container/index'
import Session from './pages/session/Index/index'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/session/:id" element={<Session />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </>
    )
}