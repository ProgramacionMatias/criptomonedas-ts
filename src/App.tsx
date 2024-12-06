import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"



function App() {
  // En una constante guardamos la funcion fetchCryptos del zustand
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    // llamando la funcion fetchCryptos del zustand
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>
        <div className="content">
          <CriptoSearchForm />
          <CryptoPriceDisplay/>
        </div>
      </div>
    </>
  )
}

export default App
