import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const whatsappNumber = "5547988448154";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\n\nServiço de interesse: ${formData.service}\n\nMensagem: ${formData.message}\n\nContato: ${formData.phone} | ${formData.email}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    toast.success("Redirecionando para o WhatsApp...");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-widest">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Solicite seu Orçamento
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Entre em contato conosco e transforme seu ambiente com acabamento
            profissional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Fale Conosco
            </h3>
            <p className="text-muted-foreground mb-8">
              Estamos prontos para atender você. Entre em contato através do
              formulário ou diretamente pelo WhatsApp para um atendimento mais
              rápido.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Telefone</h4>
                  <p className="text-muted-foreground">(47) 98844-8154</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">E-mail</h4>
                  <p className="text-muted-foreground">wrcdecoracoes@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Área de Atendimento</h4>
                  <p className="text-muted-foreground">Balneário Camboriú e Região</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Horário</h4>
                  <p className="text-muted-foreground">Segunda a Sábado: 8h às 18h</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#128C7E] text-primary-foreground"
              >
                <a
                  href="https://wa.me/message/7NZTOYEXSEUHF1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#E4405F] text-[#E4405F] hover:bg-[#E4405F] hover:text-white"
              >
                <a
                  href="https://www.instagram.com/wr_instaladora/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white"
              >
                <a
                  href="https://www.facebook.com/people/WR-Instaladora/61583967442728/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nome completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  className="bg-background"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(11) 99999-9999"
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Serviço de interesse *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Piso Vinílico">Piso Vinílico</option>
                  <option value="Piso Laminado">Piso Laminado</option>
                  <option value="Papel de Parede">Papel de Parede</option>
                  <option value="Sanca de Isopor">Sanca de Isopor</option>
                  <option value="Rodapé">Rodapé</option>
                  <option value="Contrapiso">Contrapiso</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Descreva seu projeto ou dúvida..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
