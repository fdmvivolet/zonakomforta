import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, BottomNav } from './components/Navigation';
import ProductShowcase from './components/Showcase';
import About from './components/About';
import Menu from './components/Menu';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-[100dvh] flex flex-col relative pb-24 md:pb-0 overflow-x-hidden bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<ProductShowcase />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
