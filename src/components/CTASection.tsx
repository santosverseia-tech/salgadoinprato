import WhatsAppButton from "./WhatsAppButton";

const CTASection = () => {
  return (
    <section className="bg-primary py-14">
      <div className="container text-center">
        <h2 className="text-3xl text-secondary md:text-4xl">Pronto para surpreender seus convidados?</h2>
        <p className="mx-auto mt-3 max-w-md text-lg text-secondary/80">
          Faça sua encomenda agora e garanta salgados fresquinhos para o seu evento!
        </p>
        <div className="mt-8">
          <WhatsAppButton text="📲 Faça seu pedido agora pelo WhatsApp" location="cta_bottom" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
