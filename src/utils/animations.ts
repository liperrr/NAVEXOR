export const pinhoEase: [number, number, number, number] = [0.22, 1, 0.36, 1]; // Curva hiper agressiva (Snap effect)
export const pinhoDuration = 0.4; // Muito rápido e pontual

export const pinhoFadeInUp = {
  hidden: { opacity: 0, y: 80, willChange: "opacity, transform" }, // Reduzido para evitar sobrecarga de cálculo, mas com willChange p/ GPU
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: pinhoDuration, ease: pinhoEase } 
  }
};

export const pinhoFadeInLeft = {
  hidden: { opacity: 0, x: -100, willChange: "opacity, transform" }, 
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: pinhoDuration, ease: pinhoEase } 
  }
};

export const pinhoFadeInRight = {
  hidden: { opacity: 0, x: 100, willChange: "opacity, transform" }, 
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: pinhoDuration, ease: pinhoEase } 
  }
};

export const pinhoStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Elementos entram metralhados
      delayChildren: 0.1
    }
  }
};

export const pinhoStaggerItem = {
  hidden: { opacity: 0, y: 80, willChange: "opacity, transform" },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: pinhoDuration, ease: pinhoEase } 
  }
};
