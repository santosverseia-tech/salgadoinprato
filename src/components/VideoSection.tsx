import { motion } from "framer-motion";

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
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <video
              src="/videos/salgados1.mp4"
              className="h-auto w-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <video
              src="/videos/salgados2.mp4"
              className="h-auto w-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
