import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ThankYou() {
  return (
    <motion.div initial={{ x: "100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }} className="flex h-full flex-col items-center justify-center px-72 gap-y-8">
      <svg
        width="80"
        height="80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="40" fill="url(#a)" />
        <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
        <defs>
          <linearGradient
            id="a"
            x1="-23.014"
            y1="11.507"
            x2="0"
            y2="91.507"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6348FE" />
            <stop offset="1" stop-color="#610595" />
          </linearGradient>
        </defs>
      </svg>

      <div className="text flex flex-col text-center gap-y-4">
      <h1 className="text-custom-200 text-3xl">THANK YOU!</h1>
      <p className="text-custom-100 text-lg">{"We've added your card details"}</p>
      </div>
     
      <Link to='/' className="w-full text-white bg-custom-200 h-14 rounded-lg justify-center items-center text-center font-semibold hover:bg-violet-950 transition-colors duration-700 ease-in-out"><button className="mt-4">Continue</button></Link>
    </motion.div>
  );
}

export default ThankYou;
