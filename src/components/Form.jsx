import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import { useFormikContext } from 'formik';



function Form() {
  const formik = useFormikContext();

 

 
  return (
    <motion.div initial={{ x: "100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }} className="flex h-screen justify-center items-center">
      {/* <h1 >form</h1> */}

      <form className="flex flex-col w-full h-fit  px-72 gap-y-7" onSubmit={formik.handleSubmit}>
      <label htmlFor=""> <span className="text-custom-200">CARDHOLDER NAME</span>
       <input
          id="cardHolderName"
          name="cardHolderName"
          type="text"
          placeholder="e.g. Jane Appleseed"
          className="border-2 w-full text-custom-100"
          value={formik.values.cardHolderName}
          onChange={formik.handleChange}
        />
        {formik.errors.cardHolderName ? <div className='text-red-400 text-sm'>{formik.errors.cardHolderName}</div> : null}
        </label>
       

        <label htmlFor=""> <span className="text-custom-200"> CARD NUMBER</span>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"

          placeholder="e.g. 1234 5678 9123 0000"
          className="border-2 w-full text-custom-100"
          value={formik.values.cardNumber}
          onChange={formik.handleChange}
        />
        {formik.errors.cardNumber ? <div className='text-red-400 text-sm'>{formik.errors.cardNumber}</div> : null}

        </label>
        

        <div className="last-inputs flex w-full gap-x-8">
          <div className="expiry flex flex-col w-1/2 gap-x-3">
            <p className="w-full text-custom-200 ">EXP. DATE (MM/YY)</p>
            <div className="exp-inputs flex gap-3">
            <input type="text" id="expiryMonth" name="expiryMonth" placeholder="MM" className="border-2 w-1/2 text-custom-100"  value={formik.values.expiryMonth}
          onChange={formik.handleChange} />
            <input type="text" id='expiryYear' name="expiryYear" placeholder="YY"  className="border-2 w-1/2 text-custom-100"  value={formik.values.expiryYear}
          onChange={formik.handleChange}/>
            </div>
            {formik.errors.expiryMonth? <div className='text-red-400 text-sm'>{formik.errors.expiryMonth}</div> : (formik.expiryYear && <div className='text-red-400 text-sm'>{formik.errors.expiryYear}</div>)  }
           

          
           


           
          </div>

          

          <div className="cvc flex flex-col w-1/2">
            <p className="text-custom-200">CVC</p>
            <input type="text" name="cvc" id="cvc" value={formik.values.cvc} onChange={formik.handleChange} placeholder="e.g. 123" className="border-2 text-custom-100"/>
            {formik.errors.cvc ? <div className='text-red-400 text-sm'>{formik.errors.cvc}</div> : null}
          </div>
         
        </div>

        
        <button className="text-white bg-custom-200 h-14 rounded-lg justify-center items-center text-center font-semibold hover:bg-violet-950 transition-colors duration-700 ease-in-out" > <Link to='/thank-you'>Confirm</Link>  </button>
        
       
        
      </form>
    </motion.div>
  );
}

export default Form;
