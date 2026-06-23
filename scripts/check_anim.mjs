async function check() {
  const r = await fetch('https://www.pinho.com.br/');
  const html = await r.text();
  console.log("AOS?", html.includes('aos'));
  console.log("Elementor?", html.includes('elementor'));
  
  // Extract animation classes
  const animClasses = html.match(/data-settings="[^"]*animation[^"]*"/g) || [];
  console.log("Elementor animations:", [...new Set(animClasses)]);
}
check();
