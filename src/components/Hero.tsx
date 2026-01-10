import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-living.jpg";

const Hero = () => {
  const whatsappNumber = "5547988448154";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento para serviços de acabamento."
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center md:text-left">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 animate-fade-up">
            Transformamos seu ambiente com{" "}
            <span className="text-gold-light">acabamento profissional</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-light animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Qualidade, precisão e compromisso com prazo. Especialistas em pisos,
            revestimentos e acabamentos para deixar seu espaço impecável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8"
            >
              <a href="#contato">Solicite um Orçamento</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
