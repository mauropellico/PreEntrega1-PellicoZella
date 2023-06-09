
import NavBar from './componentes/NavBar/NavBar'
import ItemListCont from './componentes/ItemListCont/ItemListCont'

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListCont saludoBienvenida={"Bienvenido! Querés una vaca?"}/>
    </div>
  )
}

export default App
