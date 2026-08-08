import { motion } from "framer-motion";
import { PartyPopper, Building2, Users, Cake } from "lucide-react";

const occasions = [
  { icon: PartyPopper, label: "Festas", emoji: "🎉" },
  { icon: Building2, label: "Empresas", emoji: "🏢" },
  { icon: Users, label: "Reuniões de família", emoji: "👨‍👩‍👧‍👦" },
  { icon: Cake, label: "Aniversários", emoji: "🎂" },
];

const differentials = [
  { label: "Massa leve", emoji: "✔" },
  { label: "Recheio generoso", emoji: "✔" },
  { label: "Sabor marcante", emoji: "✔" },
  { label: "Qualidade artesanal", emoji: "✔" },
];

const BenefitsSection = () => {
  return (
    <section className="bg-card py-16">
      <div className="container">
        {/* Occasions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl text-foreground md:text-4xl">Perfeitos para</h2>
        </motion.div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {occasions.map(({ icon: Icon, label, emoji }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 rounded-xl bg-card p-6 shadow-sm"
            >
              <span className="text-3xl">{emoji}</span>
              <span className="font-heading text-base font-bold text-foreground">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Differentials */}
        <div className="mt-14 text-center">
          <h2 className="text-3xl text-foreground md:text-4xl">Nossos diferenciais</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {differentials.map(({ label, emoji }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border-2 border-primary bg-card p-5 text-center shadow-sm"
              >
                <span className="text-2xl text-whatsapp">{emoji}</span>
                <p className="mt-2 font-heading text-base font-bold text-foreground">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
