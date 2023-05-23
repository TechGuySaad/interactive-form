import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

function Form() {
  return (
    <motion.div initial={{ x: "100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }} className="flex h-screen justify-center items-center">
      {/* <h1 >form</h1> */}

      <form className="flex flex-col w-full h-fit  px-72 gap-y-7">
      <label htmlFor=""> <span className="text-custom-200">CARDHOLDER NAME</span>
       <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          className="border-2 w-full text-custom-100"
        /></label>
       

        <label htmlFor=""> <span className="text-custom-200"> CARD NUMBER</span>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          className="border-2 w-full text-custom-100"
        />

        </label>
        

        <div className="last-inputs flex w-full gap-x-8">
          <div className="expiry flex flex-col w-1/2 gap-x-3">
            <p className="w-full text-custom-200 ">EXP. DATE (MM/YY)</p>
            <div className="exp-inputs flex gap-3">
            <input type="text" placeholder="MM" className="border-2 w-1/2 text-custom-100"/>
            <input type="text" placeholder="YY"  className="border-2 w-1/2 text-custom-100"/>
            </div>
           


            <div className="expiry-inputs flex"></div>
          </div>

          <div className="cvc flex flex-col w-1/2">
            <p className="text-custom-200">CVC</p>
            <input type="text" placeholder="e.g. 123" className="border-2 text-custom-100"/>
          </div>
        </div>

        <Link to='/thank-you' className="text-white bg-custom-200 h-14 rounded-lg justify-center items-center text-center font-semibold hover:bg-violet-950 transition-colors duration-300 ease-in-out"><button className="mt-4">Confirm</button></Link>
      </form>
    </motion.div>
  );
}

export default Form;
