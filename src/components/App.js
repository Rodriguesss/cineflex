import Header from './Generic/Header/index'
import Home from './Screen/Home/Index/index'
import Container from './Generic/Container/index'
import Session from './Screen/Session/Index/index'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <>
            <Header />
            <Container>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/session/:id" element={<Session />} />
                    </Routes>
                </BrowserRouter>
                <Home />
            </Container>
        </>
    )
}