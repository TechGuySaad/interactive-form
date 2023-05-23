import Form from './components/Form'
import ThankYou from './components/ThankYou'
import { Route,Routes } from 'react-router-dom'
import Cards from './components/Cards'
import { FormikProvider,useFormik } from 'formik'

function App() {
  const validate = values => {
    const errors = {};
    if (!values.cardHolderName) {
      errors.cardHolderName = "Can't be blank";
    } else if (values.cardHolderName.length > 30) {
      errors.cardHolderName = 'Must be 30 characters or less';
    }
  
    if (!values.cardNumber) {
      errors.cardNumber = "Can't be blank";
    } else if (values.cardNumber.length > 16 ||  values.cardNumber.length < 16 ) {
      errors.cardNumber = 'Must be 16 numbers';
    }

    if (!values.expiryMonth) {
      errors.expiryMonth = "Can't be blank";
    } else if (values.expiryMonth.length > 2 || values.expiryMonth.length < 2 ) {
      errors.expiryMonth = 'Must be 2 characters';
    }

    if (!values.expiryYear) {
      errors.expiryYear ="Can't be blank";
    } else if (values.expiryYear.length > 2 || values.expiryYear.length < 2 ) {
      errors.expiryYear = 'Must be 2 characters';
    }

    if (!values.cvc) {
      errors.cvc ="Can't be blank";
    } else if (values.expiryYear.length > 3 ||  values.expiryYear.length < 3 ) {
      errors.cvc = 'Must be 3 characters';
    }
    
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      cardHolderName: '',
      cardNumber: '',
      expiryMonth:'',
      expiryYear:'',
      cvc:''
    },
    validate,
    onSubmit: values => {
      // console.log(values)
      alert(JSON.stringify(values, null, 2));
    }
  
  
  })

  return (
    <div className='app flex font-sans relative'>
    

    <div className="background bg-cover bg-no-repeat w-1/3 h-screen bg-[url(./assets/images/bg-main-desktop.png)]"  >

    </div>

    <FormikProvider value={formik}> <Cards/></FormikProvider>
   

 

    

    
   
    <div className="content bg-white w-2/3 ">
    <Routes>
      <Route path='/' element={<FormikProvider value={formik}><Form/></FormikProvider>} ></Route>
      <Route path='/thank-you' element={<ThankYou/>}></Route>

    </Routes>

    </div>
   

   
      
    </div>
  )
}

export default App
