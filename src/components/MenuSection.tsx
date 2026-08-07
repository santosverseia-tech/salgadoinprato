import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Send } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  emoji: string;
}

const menuItems: MenuItem[] = [
  { id: "coxinha", name: "Coxinha", description: "Massa crocante, recheio cremoso de frango", priceLabel: "Consulte", emoji: "🍗" },
  { id: "bolinha", name: "Bolinha de Queijo", description: "Queijo derretido por dentro, crocante por fora", priceLabel: "Consulte", emoji: "🧀" },
  { id: "pastel", name: "Pastel", description: "Massa fininha e recheio generoso", priceLabel: "Consulte", emoji: "🥟" },
  { id: "kibe", name: "Kibe", description: "Tempero marcante e massa leve", priceLabel: "Consulte", emoji: "🥩" },
  { id: "risole", name: "Risole", description: "Massa macia com recheio saboroso", priceLabel: "Consulte", emoji: "🥘" },
  { id: "empada", name: "Empada", description: "Massa amanteigada com recheio especial", priceLabel: "Consulte", emoji: "🥧" },
  { id: "enroladinho", name: "Enroladinho de Salsicha", description: "Crocante e irresistível", priceLabel: "Consulte", emoji: "🌭" },
  { id: "churros", name: "Churros", description: "Doce, crocante e recheado", priceLabel: "Consulte", emoji: "🍩" },
];

const WHATSAPP_BASE = "https://wa.me/5531993410289";

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
        return `• ${item?.emoji} ${item?.name}: ${qty} unidade(s)`;
      })
      .join("\n");

    const msg = encodeURIComponent(
      `Olá! Gostaria de fazer um pedido:\n\n${lines}\n\nTotal de itens: ${totalItems}\n\nAguardo o orçamento. Obrigado!`
    );

    // Track events
    if ((window as any).fbq) (window as any).fbq("track", "Lead");
    if ((window as any).gtag) (window as any).gtag("event", "clique_whatsapp", { location: "menu_order" });

    window.open(`${WHATSAPP_BASE}?text=${msg}`, "_blank");
  };

  return (
    <section id="cardapio" className="bg-card py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl text-foreground md:text-4xl">
            Salgados irresistíveis que fazem qualquer evento virar um sucesso
          </h2>
          <p className="mt-3 text-muted-foreground">
            Crocantes por fora, recheados na medida certa e preparados com ingredientes selecionados.
          </p>
          <h3 className="mt-6 font-heading text-2xl font-bold text-primary md:text-3xl">📋 Cardápio</h3>
        </motion.div>

        {/* Menu grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, i) => {
            const qty = order[item.id] || 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div>
                  <span className="text-3xl">{item.emoji}</span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-foreground">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  <p className="mt-2 text-xs font-semibold text-primary/80">{item.priceLabel}</p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    disabled={qty === 0}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-border disabled:opacity-30"
                    aria-label={`Diminuir ${item.name}`}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-6 text-center font-heading font-bold text-foreground">{qty}</span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent"
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
        {totalItems > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-8 max-w-md rounded-2xl bg-secondary p-6 text-center text-secondary-foreground shadow-lg"
          >
            <p className="font-heading text-lg font-bold">
              Seu pedido: {totalItems} {totalItems === 1 ? "item" : "itens"}
            </p>
            <ul className="mt-3 space-y-1 text-sm text-secondary-foreground/80">
              {Object.entries(order).map(([id, qty]) => {
                const item = menuItems.find((m) => m.id === id);
                return (
                  <li key={id}>
                    {item?.emoji} {item?.name} × {qty}
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

        {totalItems === 0 && (
          <div className="mt-10 text-center">
            <WhatsAppButton text="📲 Faça seu pedido agora pelo WhatsApp" location="menu" />
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
