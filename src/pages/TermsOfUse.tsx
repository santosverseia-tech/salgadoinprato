import { Link } from "react-router-dom";
import LogoBadge from "@/components/LogoBadge";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <main className="min-h-screen bg-background">
      <header className="bg-primary py-6">
        <div className="container flex items-center gap-4">
          <Link to="/">
            <LogoBadge size="md" />
          </Link>
          <h1 className="text-2xl text-primary-foreground md:text-3xl">Termos de Uso</h1>
        </div>
      </header>
      <div className="container max-w-3xl py-12">
        <div className="prose prose-sm max-w-none text-foreground">
          <p className="text-muted-foreground">Última atualização: Março de 2026</p>

          <h2 className="font-heading text-xl font-bold text-foreground">1. Aceitação dos termos</h2>
          <p className="text-foreground">Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde, solicitamos que não utilize nossos serviços.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">2. Serviços oferecidos</h2>
          <p className="text-foreground">O Cantinho da Lira oferece salgados sob encomenda para eventos, festas e ocasiões especiais. Os pedidos são realizados via WhatsApp e estão sujeitos à disponibilidade.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">3. Pedidos e pagamentos</h2>
          <p className="text-foreground">Os pedidos devem ser feitos com antecedência mínima a ser informada no momento da encomenda. Preços, formas de pagamento e prazos são informados diretamente pelo WhatsApp.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">4. Cancelamento</h2>
          <p className="text-foreground">Cancelamentos devem ser solicitados com antecedência. Políticas específicas de cancelamento serão informadas no momento do pedido.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">5. Propriedade intelectual</h2>
          <p className="text-foreground">Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é de propriedade do Cantinho da Lira e está protegido por leis de propriedade intelectual.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">6. Limitação de responsabilidade</h2>
          <p className="text-foreground">O Cantinho da Lira não se responsabiliza por danos indiretos decorrentes do uso deste site ou da indisponibilidade temporária dos serviços.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">7. Contato</h2>
          <p className="text-foreground">Para dúvidas sobre estes termos, entre em contato pelo WhatsApp: 55 71 98819-0836</p>
        </div>
        <div className="mt-8">
          <Link to="/" className="font-heading font-bold text-primary underline hover:text-foreground">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default TermsOfUse;
