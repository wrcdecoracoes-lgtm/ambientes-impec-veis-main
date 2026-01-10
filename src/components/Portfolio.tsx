import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const portfolioImages = [
  { src: portfolio1, title: "Sala de Estar - Piso em Espinha de Peixe" },
  { src: portfolio2, title: "Quarto - Papel de Parede e Sanca" },
  { src: portfolio3, title: "Sala de Jantar - Molduras e Teto" },
  { src: portfolio4, title: "Home Office - Piso Vinílico" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gold uppercase tracking-widest">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira alguns exemplos de ambientes transformados com nossos
            serviços de acabamento profissional.
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2 italic">
            *Imagens ilustrativas de projetos similares aos que realizamos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-primary-foreground font-serif text-xl font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
