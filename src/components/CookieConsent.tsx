"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or rejected cookies
    const consent = localStorage.getItem("navexor_cookie_consent");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setShowConsent(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("navexor_cookie_consent", "accepted");
    setShowConsent(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("navexor_cookie_consent", "rejected");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 md:w-[450px] z-[100]"
        >
          <div className="bg-[#001f3f]/90 backdrop-blur-xl shadow-2xl rounded-3xl p-6 md:p-8 flex flex-col gap-5 border border-white/10">
            
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-bold text-lg">Sua privacidade importa</h3>
              <p className="text-white/80 text-sm leading-relaxed font-medium">
                Utilizamos cookies para personalizar sua experiência. Ao continuar navegando, você concorda com a nossa política de privacidade.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={rejectCookies}
                className="flex-1 px-4 py-3 rounded-xl border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                aria-label="Recusar cookies"
              >
                Recusar
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 px-4 py-3 rounded-xl bg-[#c5a059] text-white text-sm font-bold hover:bg-[#a38040] transition-colors shadow-lg"
                aria-label="Aceitar cookies"
              >
                Aceitar
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
