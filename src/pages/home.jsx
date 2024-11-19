import { motion } from "framer-motion";
function Home() {
  return (
    <section className="px-2">
      <div className=" relative w-full abdolute top-0 h-dvh bg-no-repeat bg-cover  bg-[url('https://img.freepik.com/free-photo/flat-lay-skincare-products-with-copy-space_23-2148317636.jpg?t=st=1731973982~exp=1731977582~hmac=040897e5088a0b81991258c464b7f10cb11e9370db7db50cf8a770bc58c818aa&w=900')]">
        <div className="py-32 absolute w-full h-dvh  bg-[#27303393] ">
          <div className="container mx-auto p-4 md:p-12">
            <motion.div
              initial={{ scale: 0, y: 100 }} // Start small and 100px below the final position
              animate={{ scale: 1, y: 0 }} // Zoom to full size and move to the original position
              exit={{ scale: 0, y: 100 }} // Optional: Exit animation (scale down and move back down)
              transition={{
                type: "spring", // Using spring for a smooth easing effect
                stiffness: 300, // Controls the spring stiffness (higher = faster, more snappy)
                damping: 25, // Controls the damping (how much the spring will settle)
                duration: 4, // Duration in seconds
              }}
              className="bg-blue-500 text-white p-6 rounded-lg shadow-md"
            >
              <h1 className=" text-5xl text-white font-bold  text-center">
                Welcome to Our Beauty Website
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
