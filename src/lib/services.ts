export type Category = "Fibra capilar" | "Cuero cabelludo" | "Estimulación" | "Hebra duradera" | "Alisados" | "Retoques" | "Head Spa" | "Análisis";

export interface Service {
  title: string;
  category: Category;
  price: string;
  summary: string;
}

export const services: Service[] = [
  { category: "Análisis", title: "Análisis con microcámara", price: "$25.000 COP", summary: "Vista ampliada de cuero cabelludo y fibra: descamación, grasa y quiebres." },
  { category: "Análisis", title: "Análisis con inteligencia artificial", price: "$60.000 COP", summary: "Luz blanca, polarizada y UV para un diagnóstico preciso. Gratis si agendas el mismo día." },
  { category: "Fibra capilar", title: "Nutrilipídica / Post química", price: "$80.000 COP", summary: "Recupera y estabiliza el pH tras procesos químicos." },
  { category: "Fibra capilar", title: "Plex SOS + Banho de Vitaminas", price: "$90.000 COP", summary: "Resistencia y engrosamiento con brillo intenso." },
  { category: "Fibra capilar", title: "Reposición Hidrolipídica", price: "$70.000 COP", summary: "Repone lípidos en cabellos alisados, decolorados o teñidos." },
  { category: "Fibra capilar", title: "CRP · Péptidos de Cobre", price: "$100.000 COP", summary: "Intensivo para fibra porosa: suavidad, brillo y resistencia." },
  { category: "Fibra capilar", title: "Aminoácidos Relleno Molecular", price: "$80.000 COP", summary: "Engrosa y da brillo intenso. Requiere sesiones." },
  { category: "Fibra capilar", title: "Mini intensiva CRP + Hidrolipídica", price: "$160.000 COP", summary: "Resistencia, brillo e hidratación. Ideal 1–2 veces al mes." },
  { category: "Fibra capilar", title: "PDRN de Salmón", price: "$135.000 COP", summary: "Hidrata el cuero cabelludo y fortalece la fibra." },
  { category: "Fibra capilar", title: "Terapia Iônica", price: "$100.000 COP", summary: "Para cabellos opacos y deshidratados." },
  { category: "Cuero cabelludo", title: "Geoterapia", price: "$80.000 COP", summary: "Arcillas y aceites esenciales contra oleosidad y dermatitis." },
  { category: "Cuero cabelludo", title: "Fitoterapia", price: "$60.000 COP", summary: "Óleos vegetales para cuero cabelludo seco o sensible." },
  { category: "Cuero cabelludo", title: "Scalp Detox Coreana", price: "$90.000 COP", summary: "Peeling purificante, arcilla mentolada y aromaterapia." },
  { category: "Estimulación", title: "Factor de crecimiento / Exosomas", price: "Desde $100.000 COP", summary: "Bioestimulación folicular sin agujas, según la zona a tratar." },
  { category: "Hebra duradera", title: "Densificación + Aminocomplex", price: "$320.000 COP", summary: "Más grosor, suavidad y brillo; menos frizz." },
  { category: "Hebra duradera", title: "Densificación", price: "$260.000 – $280.000 COP", summary: "Proteínas y aminoácidos para cabellos delgados. Alineamiento 75–90%." },
  { category: "Hebra duradera", title: "Híbrida", price: "$260.000 – $280.000 COP", summary: "Alisado en raíz y densificación de medios a puntas." },
  { category: "Hebra duradera", title: "Intensiva", price: "$750.000 – $850.000 COP", summary: "9–11 horas, 5 técnicas. Recuperación hasta 80%." },
  { category: "Hebra duradera", title: "Aminocomplex", price: "$80.000 COP", summary: "Nutre puntas dañadas y reduce el quiebre." },
  { category: "Hebra duradera", title: "Aminoplastia", price: "$200.000 COP", summary: "Menos frizz, volumen controlado y alisado ~60%." },
  { category: "Alisados", title: "Bio-Intense", price: "$250.000 COP", summary: "Liso suave y brillante con movimiento natural." },
  { category: "Alisados", title: "Korea-liss", price: "$250.000 COP", summary: "Brillo espejo con ácido hialurónico y colágeno." },
  { category: "Alisados", title: "Guaraná", price: "$250.000 COP", summary: "Controla frizz y volumen; acabado sedoso." },
  { category: "Alisados", title: "Top Hair", price: "$280.000 COP", summary: "Top Liss o Barra da Tijuca según tu cabello." },
  { category: "Alisados", title: "Anti frizz", price: "$200.000 COP", summary: "Reduce el frizz 50–70% conservando tus ondas." },
  { category: "Alisados", title: "Anti frizz espuma", price: "$200.000 COP", summary: "Textura ligera, ideal para cabellos procesados." },
  { category: "Retoques", title: "Diadema en T · Mascarilla", price: "$120.000 – $130.000 COP", summary: "Alisa solo la zona delantera más visible." },
  { category: "Retoques", title: "Diadema + Terapia post", price: "$160.000 COP", summary: "Retoque frontal más hidratación con aparatología." },
  { category: "Retoques", title: "Retoque de raíz", price: "$200.000 – $220.000 COP", summary: "Solo el crecimiento nuevo (4–5 cm)." },
  { category: "Retoques", title: "Rizos", price: "$130.000 COP", summary: "Productos dominicanos que hidratan y definen sin peso." },
  { category: "Head Spa", title: "Head Spa Express", price: "$150.000 COP", summary: "Limpieza y relajación rápida · 40–50 min." },
  { category: "Head Spa", title: "Head Spa Premium", price: "$200.000 COP", summary: "Aromas, masajes y nutrición · 1 h 30 min." },
  { category: "Head Spa", title: "Head Spa + Podal", price: "$230.000 COP", summary: "De la cabeza a los pies · 2 horas." },
  { category: "Head Spa", title: "Head Spa 15 Pasos", price: "$230.000 COP", summary: "El más avanzado, con aparatología · 2 horas." },
  { category: "Head Spa", title: "Head Spa Tailandés", price: "$200.000 COP", summary: "Aromaterapia, sonidos y puntos de presión." },
];

export const WHATSAPP_URL = "https://wa.me/573022354966";

export function formatServiceForCopy(s: Service): string {
  return `${s.title} — ${s.price}\n${s.summary}\nLyos Profesional by Tina Belleza`;
}
