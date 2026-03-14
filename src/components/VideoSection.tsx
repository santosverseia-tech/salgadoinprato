import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const videos = ["/videos/salgados1.mp4", "/videos/salgados2.mp4"];

const VideoSection = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl text-secondary-foreground md:text-4xl">Veja nossos salgados</h2>
          <p className="mt-3 text-secondary-foreground/70">Feitos com carinho e ingredientes de qualidade</p>
        </motion.div>
        <div className="mx-auto mt-10 max-w-sm">
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          >
            <CarouselContent>
              {videos.map((src, i) => (
                <CarouselItem key={i}>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <video
                      src={src}
                      className="h-auto w-full"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
