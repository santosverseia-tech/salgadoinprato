import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Send, ShoppingBag } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import coxinhaImg from "@/assets/menu/coxinha.jpg";
import bolinhaImg from "@/assets/menu/bolinha-de-queijo.jpg";
import pastelImg from "@/assets/menu/pastel.jpg";
import kibeImg from "@/assets/menu/kibe.jpg";
import risoleImg from "@/assets/menu/risole.jpg";
import empadaImg from "@/assets/menu/empada.jpg";
import enroladinhoImg from "@/assets/menu/enroladinho.jpg";
import churrosImg from "@/assets/menu/churros.jpg";

interface MenuItem {
  id: string;
  name: string;
  priceLabel: string;
  image: string;
}

const menuItems: MenuItem[] = [
  { id: "coxinha", name: "Coxinha", priceLabel: "Consulte", image: coxinhaImg },
  { id: "bolinha", name: "Bolinha de Queijo", priceLabel: "Consulte", image: bolinhaImg },
  { id: "pastel", name: "Pastel", priceLabel: "Consulte", image: pastelImg },
  { id: "kibe", name: "Kibe", priceLabel: "Consulte", image: kibeImg },
  { id: "risole", name: "Risole", priceLabel: "Consulte", image: risoleImg },
  { id: "empada", name: "Empada", priceLabel: "Consulte", image: empadaImg },
  { id: "enroladinho", name: "Enroladinho de Salsicha", priceLabel: "Consulte", image: enroladinhoImg },
  { id: "churros", name: "Churros", priceLabel: "Consulte", image: churrosImg },
];

const WHATSAPP_BASE = "https://wa.me/5571988190836";

const MenuSection = () => {
  const [order, setOrder] = useState<Record<string, number>>({});

  const updateQty = (id: string, delta: number) => {
    setOrder((prev) => {
      const val = (prev[id] || 0) + delta;
      if (val <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: val };
    });
  };

  const totalItems = Object.values(order).reduce((a, b) => a + b, 0);

  const sendOrder = () => {
    const lines = Object.entries(order)
      .map(([id, qty]) => {
        const item = menuItems.find((m) => m.id === id);
        return `• ${item?.name}: ${qty} unidade(s)`;
      })
      .join("\n");

    const msg = encodeURIComponent(
      `Olá! Gostaria de fazer um pedido:\n\n${lines}\n\nTotal de itens: ${totalItems}\n\nAguardo o orçamento. Obrigado!`
    );

    if ((window as any).fbq) (window as any).fbq("track", "Lead");
    if ((window as any).gtag) (window as any).gtag("event", "clique_whatsapp", { location: "menu_order" });

    window.open(`${WHATSAPP_BASE}?text=${msg}`, "_blank");
  };

  return (
    <section id="cardapio" className="relative overflow-hidden bg-primary py-16">
      {/* Decorative background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(0 0% 100% / 0.25) 0%, transparent 25%),
                            radial-gradient(circle at 75% 75%, hsl(0 0% 100% / 0.2) 0%, transparent 25%)`,
        }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block font-heading text-sm font-bold uppercase tracking-widest text-primary-foreground/70">
            3. Cardápio Menu
          </span>
          <h2 className="mt-3 text-balance text-3xl leading-tight text-primary-foreground md:text-5xl">
            Escolha seus favoritos e monte seu pedido
          </h2>
          <p className="mt-3 text-primary-foreground/75">
            Salgados artesanais, crocantes por fora e recheados na medida certa.
          </p>
        </motion.div>

        {/* Menu grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, i) => {
            const qty = order[item.id] || 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/15 bg-card p-4 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={600}
                  />
                  {qty > 0 && (
                    <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow">
                      {qty}
                    </span>
                  )}
                </div>

                <div className="mt-4 w-full text-center">
                  <h3 className="font-script text-2xl text-primary">{item.name}</h3>
                  <p className="mt-1 font-heading text-sm font-bold text-muted-foreground">{item.priceLabel}</p>
                </div>

                <div className="mt-4 flex w-full items-center justify-center gap-3">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    disabled={qty === 0}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted text-foreground transition-colors hover:bg-border disabled:opacity-40"
                    aria-label={`Diminuir ${item.name}`}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-heading text-lg font-bold text-foreground">{qty}</span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent"
                    aria-label={`Adicionar ${item.name}`}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Order summary */}
        <AnimatePresence>
          {totalItems > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mx-auto mt-10 max-w-lg rounded-2xl bg-secondary p-6 text-center text-secondary-foreground shadow-2xl"
            >
              <div className="flex items-center justify-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                <p className="font-heading text-lg font-bold">
                  Seu pedido: {totalItems} {totalItems === 1 ? "item" : "itens"}
                </p>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-secondary-foreground/80">
                {Object.entries(order).map(([id, qty]) => {
                  const item = menuItems.find((m) => m.id === id);
                  return (
                    <li key={id}>
                      {item?.name} × {qty}
                    </li>
                  );
                })}
              </ul>
              <button
                onClick={sendOrder}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3 font-heading text-base font-bold text-whatsapp-foreground shadow transition-transform hover:scale-105 active:scale-95"
              >
                <Send className="h-5 w-5" /> Enviar pedido pelo WhatsApp
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {totalItems === 0 && (
          <div className="mt-12 text-center">
            <WhatsAppButton text="📲 Faça seu pedido agora pelo WhatsApp" location="menu" />
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
