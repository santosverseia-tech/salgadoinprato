const WHATSAPP_URL = "https://wa.me/5531993410289";

interface WhatsAppButtonProps {
  text?: string;
  location?: string;
  className?: string;
}

const WhatsAppButton = ({ text = "📲 Fazer pedido no WhatsApp", location = "generic", className = "" }: WhatsAppButtonProps) => {
  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "clique_whatsapp", { location });
    }
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-4 font-heading text-lg font-bold text-whatsapp-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 ${className}`}
    >
      {text}
    </button>
  );
};

export default WhatsAppButton;
