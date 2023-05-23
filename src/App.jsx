import Form from './components/Form'
import ThankYou from './components/ThankYou'
import { Route,Routes } from 'react-router-dom'
import Cards from './components/Cards'

function App() {

  return (
    <div className='app flex font-sans relative'>
    

    <div className="background bg-cover bg-no-repeat w-1/3 h-screen bg-[url(./assets/images/bg-main-desktop.png)]"  >

    </div>

    <Cards/>

 

    

    
   
    <div className="content bg-white w-2/3 ">
    <Routes>
      <Route path='/' element={ <Form/>}></Route>
      <Route path='/thank-you' element={<ThankYou/>}></Route>

    </Routes>

    </div>
   

   
      
    </div>
  )
}

export default App
