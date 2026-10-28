import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { formatServiceForCopy, type Service } from "@/lib/services";

export function ServiceCard({ service, image, index }: { service: Service; image: string; index: number }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const t = setTimeout(() => setIsCopied(false), 2000);
    return () => clearTimeout(t);
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formatServiceForCopy(service));
      setIsCopied(true);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-gold transition-shadow duration-500 hover:shadow-gold-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={service.title}
          loading="lazy"
          width={944}
          height={704}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-foreground backdrop-blur">
          {service.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-lg font-semibold leading-snug">{service.title}</h3>
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              aria-label={`Copiar ${service.title}`}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                isCopied
                  ? "border-success bg-success/10 text-success"
                  : "border-gold/40 bg-gold-soft text-accent-foreground hover:border-gold hover:shadow-gold"
              }`}
            >
              {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
            {isCopied && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="pointer-events-none absolute -top-9 right-0 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background"
              >
                ¡Copiado!
              </motion.span>
            )}
          </div>
        </div>
        <p className="text-gradient-gold text-sm font-semibold">{service.price}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
      </div>
    </motion.article>
  );
}
