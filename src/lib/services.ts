export type Category = "Fibra capilar" | "Cuero cabelludo" | "Estimulación" | "Hebra duradera" | "Alisados" | "Retoques" | "Head Spa" | "Análisis";

export interface Service {
  title: string;
  category: Category;
  price: string;
  summary: string;
  image: string;
}

export const services: Service[] = [
  { category: "Análisis", title: "Análisis con microcámara", price: "$25.000 COP", summary: "Vista ampliada de cuero cabelludo y fibra: descamación, grasa y quiebres.", image: "microcamara" },
  { category: "Análisis", title: "Análisis con inteligencia artificial", price: "$60.000 COP", summary: "Luz blanca, polarizada y UV para un diagnóstico preciso. Gratis si agendas el mismo día.", image: "ia" },
  { category: "Fibra capilar", title: "Nutrilipídica / Post química", price: "$80.000 COP", summary: "Recupera y estabiliza el pH tras procesos químicos.", image: "nutrilipidica" },
  { category: "Fibra capilar", title: "Plex SOS + Banho de Vitaminas", price: "$90.000 COP", summary: "Resistencia y engrosamiento con brillo intenso.", image: "plex" },
  { category: "Fibra capilar", title: "Reposición Hidrolipídica", price: "$70.000 COP", summary: "Repone lípidos en cabellos alisados, decolorados o teñidos.", image: "hidrolipidica" },
  { category: "Fibra capilar", title: "CRP · Péptidos de Cobre", price: "$100.000 COP", summary: "Intensivo para fibra porosa: suavidad, brillo y resistencia.", image: "crp" },
  { category: "Fibra capilar", title: "Aminoácidos Relleno Molecular", price: "$80.000 COP", summary: "Engrosa y da brillo intenso. Requiere sesiones.", image: "aminoacidos" },
  { category: "Fibra capilar", title: "Mini intensiva CRP + Hidrolipídica", price: "$160.000 COP", summary: "Resistencia, brillo e hidratación. Ideal 1–2 veces al mes.", image: "mini-intensiva" },
  { category: "Fibra capilar", title: "PDRN de Salmón", price: "$135.000 COP", summary: "Hidrata el cuero cabelludo y fortalece la fibra.", image: "pdrn" },
  { category: "Fibra capilar", title: "Terapia Iônica", price: "$100.000 COP", summary: "Para cabellos opacos y deshidratados.", image: "ionica" },
  { category: "Cuero cabelludo", title: "Geoterapia", price: "$80.000 COP", summary: "Arcillas y aceites esenciales contra oleosidad y dermatitis.", image: "geoterapia" },
  { category: "Cuero cabelludo", title: "Fitoterapia", price: "$60.000 COP", summary: "Óleos vegetales para cuero cabelludo seco o sensible.", image: "fitoterapia" },
  { category: "Cuero cabelludo", title: "Scalp Detox Coreana", price: "$90.000 COP", summary: "Peeling purificante, arcilla mentolada y aromaterapia.", image: "scalp-detox" },
  { category: "Estimulación", title: "Factor de crecimiento / Exosomas", price: "Desde $100.000 COP", summary: "Bioestimulación folicular sin agujas, según la zona a tratar.", image: "exosomas" },
  { category: "Hebra duradera", title: "Densificación + Aminocomplex", price: "$320.000 COP", summary: "Más grosor, suavidad y brillo; menos frizz.", image: "densif-amino" },
  { category: "Hebra duradera", title: "Densificación", price: "$260.000 – $280.000 COP", summary: "Proteínas y aminoácidos para cabellos delgados. Alineamiento 75–90%.", image: "densificacion" },
  { category: "Hebra duradera", title: "Híbrida", price: "$260.000 – $280.000 COP", summary: "Alisado en raíz y densificación de medios a puntas.", image: "hibrida" },
  { category: "Hebra duradera", title: "Intensiva", price: "$750.000 – $850.000 COP", summary: "9–11 horas, 5 técnicas. Recuperación hasta 80%.", image: "intensiva" },
  { category: "Hebra duradera", title: "Aminocomplex", price: "$80.000 COP", summary: "Nutre puntas dañadas y reduce el quiebre.", image: "aminocomplex" },
  { category: "Hebra duradera", title: "Aminoplastia", price: "$200.000 COP", summary: "Menos frizz, volumen controlado y alisado ~60%.", image: "aminoplastia" },
  { category: "Alisados", title: "Bio-Intense", price: "$250.000 COP", summary: "Liso suave y brillante con movimiento natural.", image: "bio-intense" },
  { category: "Alisados", title: "Korea-liss", price: "$250.000 COP", summary: "Brillo espejo con ácido hialurónico y colágeno.", image: "korea-liss" },
  { category: "Alisados", title: "Guaraná", price: "$250.000 COP", summary: "Controla frizz y volumen; acabado sedoso.", image: "guarana" },
  { category: "Alisados", title: "Top Hair", price: "$280.000 COP", summary: "Top Liss o Barra da Tijuca según tu cabello.", image: "top-hair" },
  { category: "Alisados", title: "Anti frizz", price: "$200.000 COP", summary: "Reduce el frizz 50–70% conservando tus ondas.", image: "anti-frizz" },
  { category: "Alisados", title: "Anti frizz espuma", price: "$200.000 COP", summary: "Textura ligera, ideal para cabellos procesados.", image: "anti-frizz-espuma" },
  { category: "Retoques", title: "Diadema en T · Mascarilla", price: "$120.000 – $130.000 COP", summary: "Alisa solo la zona delantera más visible.", image: "diadema-t" },
  { category: "Retoques", title: "Diadema + Terapia post", price: "$160.000 COP", summary: "Retoque frontal más hidratación con aparatología.", image: "diadema-terapia" },
  { category: "Retoques", title: "Retoque de raíz", price: "$200.000 – $220.000 COP", summary: "Solo el crecimiento nuevo (4–5 cm).", image: "retoque-raiz" },
  { category: "Retoques", title: "Rizos", price: "$130.000 COP", summary: "Productos dominicanos que hidratan y definen sin peso.", image: "rizos" },
  { category: "Head Spa", title: "Head Spa Express", price: "$150.000 COP", summary: "Limpieza y relajación rápida · 40–50 min.", image: "hs-express" },
  { category: "Head Spa", title: "Head Spa Premium", price: "$200.000 COP", summary: "Aromas, masajes y nutrición · 1 h 30 min.", image: "hs-premium" },
  { category: "Head Spa", title: "Head Spa + Podal", price: "$230.000 COP", summary: "De la cabeza a los pies · 2 horas.", image: "hs-podal" },
  { category: "Head Spa", title: "Head Spa 15 Pasos", price: "$230.000 COP", summary: "El más avanzado, con aparatología · 2 horas.", image: "hs-15" },
  { category: "Head Spa", title: "Head Spa Tailandés", price: "$200.000 COP", summary: "Aromaterapia, sonidos y puntos de presión.", image: "hs-tailandes" },
];

export const WHATSAPP_URL = "https://wa.me/573022354966";

export function formatServiceForCopy(s: Service): string {
  return `${s.title} — ${s.price}\n${s.summary}\nLyos Profesional by Tina Belleza`;
}

const assets = import.meta.glob<{ url: string }>("@/assets/catalogo/*.asset.json", { eager: true, import: "default" });
export function imageUrl(key: string): string {
  const hit = Object.entries(assets).find(([path]) => path.endsWith(`/${key}.jpg.asset.json`));
  return hit ? hit[1].url : "";
}
