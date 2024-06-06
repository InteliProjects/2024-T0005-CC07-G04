/* eslint-disable react/prop-types */
//importações
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.png"
import { createContext, useContext, useState } from "react" 

const SidebarContext = createContext();

// Componente Sidebar principal que aceita "filhos" como conteúdo interno
export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true) // Estado para controlar a expansão da Sidebar
    return (
        <>
            <aside className="h-screen sticky top-0">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        {/* Renderiza a logo com animação de expansão/recolhimento */}
                        <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />
                        {/* Botão para alternar a expansão da Sidebar */}
                        <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    </div>

                    {/* Provedor do contexto com estado de expansão para os itens filhos */}
                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>

                    {/* Seção de perfil com animação de expansão/recolhimento */}
                    <div className="border-t flex p-3">
                        <img src={profile} className="w-10 h-10 rounded-md" />
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                            <div className="leading-4">
                                <h4 className="font-semibold">Marcos</h4>
                                <span className="text-xs text-gray-600">Marcos@gmail.com</span>
                            </div>
                            <MoreVertical size={20} />
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}

// Componente para itens individuais da Sidebar, utilizando o contexto para verificar se está expandido
export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext) // Usa o contexto para determinar se a Sidebar está expandida
    return (
        // Lista de itens com estilização condicional baseada no estado 'active' e 'expanded'
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-purple-200 to-purple-100 text-purple-800" : "hover:bg-purple-50 text-gray-600"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-purple-400 ${expanded ? "" : "top-2"}`} />
            )}

            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-purple-100 text-purple-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    )
}
