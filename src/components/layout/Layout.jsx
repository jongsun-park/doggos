import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useOutlet } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

// Page Transition Effect
// https://www.framer.com/docs/animate-presence/
// https://stackoverflow.com/questions/74190609/exit-animations-with-animatepresence-framer-motion-and-createbrowserrouter-r

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

const Layout = () => {
  const location = useLocation();

  // Change location when page has changed
  useEffect(() => {
    // console.log("location changed");
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        {/* <Outlet /> */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            <AnimatedOutlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
