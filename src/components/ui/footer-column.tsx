import {
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const data = {
  facebookLink: '#',
  instaLink: '#',
  linkedinLink: '#',
  services: {
    frete: '#',
    desembaraco: '#',
    armazenagem: '#',
    consultoria: '#',
  },
  about: {
    history: '#',
    team: '#',
    careers: '#',
  },
  help: {
    faqs: '#',
    support: '#',
    contact: '#contact',
  },
  contact: {
    email: 'contato@navexor.com.br',
    phone: '+55 41 9999-9999',
    address: 'Curitiba, PR, Brasil',
  },
  company: {
    name: 'Navexor Global Trade',
    description:
      'Torre de controle logística 4PL com soluções completas em frete internacional, armazenagem e desembaraço aduaneiro.',
    logo: '/images/logo-white.png',
  },
};

const socialLinks = [
  { icon: LinkedinIcon, label: 'LinkedIn', href: data.linkedinLink },
  { icon: InstagramIcon, label: 'Instagram', href: data.instaLink },
  { icon: FacebookIcon, label: 'Facebook', href: data.facebookLink },
];

const aboutLinks = [
  { text: 'Nossa História', href: data.about.history },
  { text: 'Nossa Equipe', href: data.about.team },
  { text: 'Trabalhe Conosco', href: data.about.careers },
];

const serviceLinks = [
  { text: 'Frete Internacional', href: data.services.frete },
  { text: 'Desembaraço Aduaneiro', href: data.services.desembaraco },
  { text: 'Armazenagem', href: data.services.armazenagem },
  { text: 'Consultoria Logística', href: data.services.consultoria },
];

const helpfulLinks = [
  { text: 'Dúvidas Frequentes', href: data.help.faqs },
  { text: 'Suporte', href: data.help.support },
  { text: 'Fale Conosco', href: data.help.contact, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="bg-[#001f3f] text-white w-full border-t border-white/10 z-50 relative">
      <div className="mx-auto max-w-screen-xl px-4 pt-10 pb-24 sm:px-6 lg:px-8 lg:pt-24 lg:pb-8">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10">
          <div>
            <div className="flex justify-center lg:justify-start items-center">
              <Image
                src={data.company.logo}
                alt="Navexor Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-white/60 mt-6 max-w-md mx-auto lg:mx-0 text-center leading-relaxed lg:max-w-xs lg:text-left text-[13px]">
              {data.company.description}
            </p>

            <ul className="mt-6 flex justify-center gap-6 lg:justify-start">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-[#FFC107] transition-colors duration-300"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="w-5 h-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:col-span-2">
            <div className="text-left">
              <p className="text-lg font-medium text-white mb-6">Sobre Nós</p>
              <ul className="space-y-4 text-[14px]">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-white/60 hover:text-white transition-colors duration-300"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <p className="text-lg font-medium text-white mb-6">Soluções</p>
              <ul className="space-y-4 text-[14px]">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-white/60 hover:text-white transition-colors duration-300"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <p className="text-lg font-medium text-white mb-6">Links Úteis</p>
              <ul className="space-y-4 text-[14px]">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? 'group flex justify-start items-center gap-2 text-white/60 hover:text-white transition-colors duration-300'
                          : 'text-white/60 hover:text-white transition-colors duration-300'
                      }`}
                    >
                      <span>{text}</span>
                      {hasIndicator && (
                        <span className="relative flex w-2 h-2">
                          <span className="absolute inline-flex w-full h-full bg-[#FFC107] rounded-full animate-ping opacity-75" />
                          <span className="relative inline-flex w-2 h-2 bg-[#FFC107] rounded-full" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <p className="text-lg font-medium text-white mb-6">Contato</p>
              <ul className="space-y-4 text-[14px]">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <div className="flex items-start justify-start gap-3 group">
                      <Icon className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                      {isAddress ? (
                        <address className="text-white/60 not-italic flex-1 group-hover:text-white transition-colors duration-300">
                          {text}
                        </address>
                      ) : (
                        <span className="text-white/60 flex-1 group-hover:text-white transition-colors duration-300">
                          {text}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} {data.company.name}. Todos os direitos reservados.
            </p>

            <p className="flex gap-4 justify-center text-xs text-white/40">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
