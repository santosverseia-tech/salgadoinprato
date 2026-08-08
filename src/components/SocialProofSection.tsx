import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Ana Paula",
    text: "Os salgados estavam perfeitos, todos elogiaram! Super recomendo para festas.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    text: "Encomendei para o evento da empresa e foi um sucesso. Crocantes e muito saborosos!",
    rating: 5,
  },
  {
    name: "Mariana Silva",
    text: "Melhor salgado que já comi! Recheio generoso e massa levinha. Vou pedir sempre!",
    rating: 5,
  },
];

const SocialProofSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl text-foreground md:text-4xl">O que nossos clientes dizem</h2>
        </motion.div>

        <div className="mt-10">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mt-4 text-foreground">"{t.text}"</p>
                    <p className="mt-3 font-heading text-sm font-bold text-muted-foreground">— {t.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Avaliar */}
        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-heading font-bold text-primary-foreground shadow-md">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-1">Avaliar</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
