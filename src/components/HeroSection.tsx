import { motion } from "framer-motion";
import { Package, CalendarDays, UtensilsCrossed } from "lucide-react";
import LogoBadge from "./LogoBadge";
import WhatsAppButton from "./WhatsAppButton";
import chefImage from "@/assets/chef.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary pb-12 pt-6">
      {/* Header */}
      <div className="container flex items-center justify-between">
        <LogoBadge size="lg" />
      </div>

      {/* Hero content */}
      <div className="container mt-8 grid items-center gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-balance text-4xl leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Salgados fresquinhos e irresistíveis
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
            Sabor que conquista na primeira mordida e transforma qualquer evento em um sucesso.
          </p>

          {/* Service icons */}
          <div className="mt-6 flex flex-wrap gap-4">
            {[
              { icon: Package, label: "Encomendas" },
              { icon: CalendarDays, label: "Eventos" },
              { icon: UtensilsCrossed, label: "Buffet" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
                <Icon className="h-5 w-5 text-primary-foreground" />
                <span className="font-heading text-sm font-bold text-primary-foreground">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <WhatsAppButton text="📲 Fazer pedido no WhatsApp" location="hero" />
            <p className="mt-3 text-sm text-primary-foreground/60">Atendimento rápido e pedidos personalizados.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={logoAsset.url}
            alt="Logomarca Salgado no Prato"
            className="w-full max-w-xs rounded-full border-4 border-primary-foreground/80 shadow-2xl"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
