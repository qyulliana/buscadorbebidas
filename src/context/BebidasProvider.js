import {useEffect, useState, createContext} from "react";
import axios from "axios";
;

const BebidasContext = createContext()

const BebidasProvider= ({children}) => {
  const [bebidas, setBebidas] = useState([])
  const [modal, setModal] = useState(false)
  const [bebidaId, setBebidaId] = useState(null)
  const [receta, setReceta] = useState({})


  useEffect(() => {

    const obtenerReceta = async () => {
      if (!bebidaId) return

      try {
        const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
        const { data } = await axios(url)
        setReceta(data.drinks[0])
      }

      catch (error) {

      }

    }
    obtenerReceta()
  })

  const consultarBebidas= async datos =>  {
    try{
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
      const { data } = await axios(url)
      setBebidas(data.drinks)
    }

    catch (error) {

    }
  }

  const handleModalClick = () => {
    setModal(!modal)
  }

  const handleBebidaIdClick = id => {
    setBebidaId(id)
  }

  return(
    <BebidasContext.Provider
      value={{consultarBebidas,
              bebidas,
              handleModalClick,
              modal,
              handleBebidaIdClick,
              receta,
              setReceta



      }}
    >
      {children}
    </BebidasContext.Provider>
  )
}

export {
  BebidasProvider
}

export default BebidasContext