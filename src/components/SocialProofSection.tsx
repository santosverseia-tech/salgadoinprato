import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
    <section className="bg-card py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl text-foreground md:text-4xl">O que nossos clientes dizem</h2>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-foreground">"{t.text}"</p>
              <p className="mt-3 font-heading text-sm font-bold text-muted-foreground">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
