import { Link } from "react-router-dom";
import LogoBadge from "@/components/LogoBadge";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <header className="bg-primary py-6">
        <div className="container flex items-center gap-4">
          <Link to="/">
            <LogoBadge size="md" />
          </Link>
          <h1 className="text-2xl text-primary-foreground md:text-3xl">Política de Privacidade</h1>
        </div>
      </header>
      <div className="container max-w-3xl py-12">
        <div className="prose prose-sm max-w-none text-foreground">
          <p className="text-muted-foreground">Última atualização: Março de 2026</p>

          <h2 className="font-heading text-xl font-bold text-foreground">1. Informações coletadas</h2>
          <p className="text-foreground">O Cantinho da Lira coleta informações fornecidas voluntariamente por você ao entrar em contato via WhatsApp ou formulários, incluindo nome, telefone e detalhes do pedido.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">2. Uso das informações</h2>
          <p className="text-foreground">As informações são utilizadas exclusivamente para processar pedidos, melhorar nossos serviços e enviar comunicações relevantes sobre promoções e novidades.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">3. Cookies e rastreamento</h2>
          <p className="text-foreground">Utilizamos cookies e tecnologias de rastreamento (Meta Pixel, Google Analytics) para melhorar a experiência do usuário e otimizar campanhas publicitárias. Os dados coletados são anônimos e agregados.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">4. Compartilhamento de dados</h2>
          <p className="text-foreground">Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para processamento de pedidos ou exigido por lei.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">5. Segurança</h2>
          <p className="text-foreground">Adotamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração ou destruição.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">6. Seus direitos</h2>
          <p className="text-foreground">Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais a qualquer momento entrando em contato conosco pelo WhatsApp 55 71 98819-0836.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">7. Contato</h2>
          <p className="text-foreground">Para dúvidas sobre esta política, entre em contato pelo WhatsApp: 55 71 98819-0836 ou Instagram: @salgado.noprato</p>
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

export default PrivacyPolicy;
