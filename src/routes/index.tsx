import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, ChevronDown } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { services, WHATSAPP_URL, imageUrl } from "@/lib/services";
import promoAsset from "@/assets/promo-alisados.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catálogo de Servicios · Lyos Profesional by Tina Belleza" },
      { name: "description", content: "Centro de salud capilar: terapias, alisados tecnológicos y Head Spa coreano. Precios y reservas por WhatsApp." },
      { property: "og:title", content: "Catálogo · Lyos Profesional by Tina Belleza" },
      { property: "og:description", content: "Terapias capilares, alisados y Head Spa de alto nivel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = ["Todos", ...Array.from(new Set(services.map((s) => s.category)))] as const;

const fields = [
  { name: "nombre", label: "Nombre", type: "text", auto: "given-name" },
  { name: "apellido", label: "Apellido", type: "text", auto: "family-name" },
  { name: "email", label: "Correo electrónico", type: "email", auto: "email" },
  { name: "celular", label: "Número de celular", type: "tel", auto: "tel" },
  { name: "direccion", label: "Dirección de la casa", type: "text", auto: "street-address", full: true },
  { name: "cp", label: "Código postal", type: "text", auto: "postal-code" },
];

function Index() {
  const [filter, setFilter] = useState<string>("Todos");
  const list = useMemo(() => (filter === "Todos" ? services : services.filter((s) => s.category === filter)), [filter]);

  return (
    <main className="overflow-hidden">
      {/* PROMO DESTACADO */}
      <section className="relative px-6 pb-10 pt-16">
        <div className="bg-glow-gold pointer-events-none absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,400px)_1fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mx-auto w-full max-w-sm">
            <img
              src={promoAsset.url}
              alt="Promo de lanzamiento: alisado KoreaLiss o Bio Intense con shampoo de obsequio"
              width={853}
              height={1280}
              className="block h-auto w-full object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center md:text-left"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Promo de lanzamiento</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Alisado <span className="text-gradient-gold">KoreaLiss</span> o Bio Intense
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground md:mx-0">
              Y lleva obsequio: shampoo de hidratación Korea Liss o shampoo de limpieza profunda LYOS.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold-lg transition-transform hover:scale-105"
            >
              Aprovechar la promo <ChevronDown className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 py-20">
        <div className="bg-glow-gold animate-orb pointer-events-none absolute left-1/2 top-10 h-[700px] w-[700px] rounded-full" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              <Sparkles className="h-4 w-4 text-gold" /> Catálogo de servicios
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.05] md:text-7xl">
              Centro de <span className="text-gradient-gold">salud capilar</span>
            </h1>
            <p className="mt-3 font-display text-xl italic text-muted-foreground">Lyos Profesional by Tina Belleza</p>
            <p className="mt-6 max-w-md text-base text-muted-foreground">Especialistas capilares de alto nivel, para un cabello sano y radiante.</p>
            <a
              href="#catalogo"
              className="bg-gradient-gold mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold-lg transition-transform hover:scale-105"
            >
              Ver servicios <ChevronDown className="h-4 w-4" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <img src={imageUrl("hero")} alt="Cristina Gutiérrez y su equipo de Lyos Profesional" width={850} height={850} className="relative block h-auto w-full object-contain" />
          </motion.div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="relative scroll-mt-8 px-6 py-24">
        <div className="bg-glow-gold pointer-events-none absolute -right-60 top-40 h-[600px] w-[600px] rounded-full" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Catálogo</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Nuestros servicios</h2>
          </motion.div>

          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-all ${
                  filter === c ? "bg-gradient-gold border-transparent text-primary-foreground shadow-gold" : "border-border text-muted-foreground hover:border-gold hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {list.map((s, i) => (
              <ServiceCard key={s.title} service={s} image={imageUrl(s.image)} index={i} />
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
            Precios base. Según largo y abundancia puede aplicar excedente. Reserva con abono de $50.000.
          </p>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="relative px-6 pb-28 pt-8">
        <div className="bg-glow-gold pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="rounded-3xl border border-gold/30 bg-card p-8 shadow-gold-lg md:p-12">
            <h2 className="text-center font-serif text-3xl font-semibold">Tus datos</h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">Para agendar tu experiencia.</p>
            <form className="mt-10 grid gap-8 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              {fields.map((f) => (
                <label key={f.name} className={`flex flex-col gap-2 ${f.full ? "md:col-span-2" : ""}`}>
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">{f.label}</span>
                  <input
                    name={f.name}
                    type={f.type}
                    autoComplete={f.auto}
                    maxLength={150}
                    className="border-b-2 border-input bg-transparent py-2 text-base outline-none transition-colors focus:border-gold"
                  />
                </label>
              ))}
            </form>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex w-full animate-pulse items-center justify-center gap-3 rounded-2xl bg-whatsapp px-6 py-5 text-center text-base font-semibold text-whatsapp-foreground shadow-lg transition-colors hover:bg-whatsapp-dark md:text-lg"
          >
            <MessageCircle className="h-6 w-6 shrink-0" />
            Contactar a la línea oficial de Lyos Tina Belleza
          </a>
        </motion.div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center text-xs tracking-widest text-muted-foreground">
        @TINABELLEZA · LYOS PROFESIONAL © 2026
      </footer>
    </main>
  );
}
