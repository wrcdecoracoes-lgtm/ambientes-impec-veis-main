import { MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "5547988448154";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento."
  );

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/message/7NZTOYEXSEUHF1?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
        aria-label="Fale pelo WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                WR<span className="text-gold-light">Instaladora</span>
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Especialistas em instalação e acabamento. Transformamos seu
                ambiente com qualidade e profissionalismo.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>Piso Vinílico</li>
                <li>Piso Laminado</li>
                <li>Papel de Parede</li>
                <li>Sanca de Isopor</li>
                <li>Rodapé</li>
                <li>Contrapiso</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>(47) 98844-8154</li>
                <li>wrcdecoracoes@gmail.com</li>
                <li>Balneário Camboriú e Região</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://wa.me/message/7NZTOYEXSEUHF1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-[#25D366] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/wr_instaladora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-[#E4405F] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/people/WR-Instaladora/61583967442728/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-[#1877F2] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} WR Instaladora. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
