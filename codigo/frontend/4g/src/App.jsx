// Importações
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { Home, ShoppingBag, Rss, LifeBuoy, Settings, ReceiptText } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import Consumo from './pages/Consumo';
import Login from './pages/Login';
import Marketplace from './pages/Marketplace';
import HomePage from './pages/Home';
import SignUp from './pages/SignUp';
import Fatura from './pages/Fatura';

// Função principal do aplicativo que utiliza o Router para envolver o componente RoutesWithSidebar
function App() {
  return (
    <Router>
      <RoutesWithSidebar />
    </Router>
  );
}

// Componente que contém a barra lateral e as rotas da aplicação
const RoutesWithSidebar = () => {
  // Hook useLocation é usado para acessar a localização atual
  let location = useLocation();

  // Função para determinar se um caminho específico está ativo baseado na localização atual
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex">
      {/* Condiciona a exibição da Sidebar à não estar nas rotas "/" ou "/cadastro" */}
      {location.pathname !== "/" && location.pathname !== "/cadastro" && (
        <Sidebar>
          {/* Links na barra lateral para navegação, utilizando o componente SidebarItem para cada link */}
          <Link to="/home"><SidebarItem icon={<Home size={20} />} text="Plano" active={isActive('/home')} /></Link>
          <Link to="/consumo"><SidebarItem icon={<Rss size={20} />} text="Consumo" active={isActive('/consumo')} /></Link>
          <Link to="/fatura"><SidebarItem icon={<ReceiptText size={20} />} text="Fatura" active={isActive('/fatura')} /></Link>
          <Link to="/loja"><SidebarItem icon={<ShoppingBag size={20} />} text="Loja" active={isActive('/loja')} /></Link>
          {/* Linha horizontal para separação visual no menu */}
          <hr className="my-3" />
          {/* Mais links para configurações e ajuda */}
          <Link to="/settings"><SidebarItem icon={<Settings size={20} />} text="Configurações" active={isActive('/settings')} /></Link>
          <Link to="/help"><SidebarItem icon={<LifeBuoy size={20} />} text="Ajuda" active={isActive('/help')} /></Link>
        </Sidebar>
      )}
      {/* Definição das rotas da aplicação e os componentes correspondentes */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/consumo" element={<Consumo />} />
        <Route path="/fatura" element={<Fatura />} />
        <Route path="/loja" element={<Marketplace />} />
      </Routes>
    </div>
  );
};

// Exportação padrão do componente App
export default App;
