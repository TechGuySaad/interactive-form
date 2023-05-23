import { motion } from "framer-motion";

function Cards() {
    const firstVariant = {
        hidden: {
          x: "-100vw",
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 100,
          },
        },
      };
    
      const secondVariant = {
        hidden: {
          x: "-100vw",
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: 0.5, // Delay of 0.5 seconds
          },
        },
      };
  return (
    <>
      <motion.div initial="hidden"
      animate="visible"
      variants={firstVariant} 
      className="w-custom h-60   z-50 absolute top-28 left-40 rounded-2xl bg-cover bg-no-repeat bg-[url(./assets/images/bg-card-front.png)] shadow-lg p-7 flex flex-col justify-between">

        <div className="logo">
          <svg
            width="84"
            height="47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>
        </div>

        <div className="details flex flex-wrap gap-y-6 text-white">

            <h1 className="card-number w-full text-3xl justify-center items-center text-center tracking-widest">0000 0000 0000 0000</h1>
            <div className="name-expiry flex justify-between w-full text-lg ">

            <p className="cardholder-name">Jane Appleseed</p>
            <p className="expiry">00/00</p>

            </div>
           

        </div>

      </motion.div>

      <motion.div 
       initial="hidden"
      animate="visible"
      variants={secondVariant} 
      className="w-custom h-60   z-50 absolute top-96 left-60 rounded-2xl bg-cover bg-no-repeat bg-[url(./assets/images/bg-card-back.png)] shadow-lg flex flex-col justify-center ">
        <p className="w-full ml-80 pl-8 text-white">000</p>
      </motion.div>
    </>
  );
}

export default Cards;
