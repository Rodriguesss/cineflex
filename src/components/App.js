import Header from './generic/Header'
import Home from './pages/home/Index'
import Container from './generic/Container'
import Session from './pages/session/Index'
import Receipt from './pages/receipt/Index'
import Scheduling from './pages/scheduling/Index'

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
    const [idSeat, setIdSeat] = useState(null)

    return (
        <>
            <BrowserRouter>
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/session/:id" element={<Session />} />
                        <Route path="/assentos/:id" element={<Scheduling setIdSeat={setIdSeat} />} />
                        <Route path="/sucesso" element={<Receipt objAPI={idSeat} />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </>
    )
}