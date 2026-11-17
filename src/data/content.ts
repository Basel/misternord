import { PortfolioItem, UsefulTool } from '../types';

export const BUSINESS_INFO = {
  name: 'misternord',
  founder: 'Basel',
  role: 'Data Engineer & BI Consultant (sinds 2019) · Vibe Coder',
  location: 'Groningen, Nederland',
  languages: ['Nederlands', 'Engels (English)', 'Arabisch (العربية)'],
  parentCompany: 'MiVidasVin',
  kvk: '98479318',
  typeformUrl: 'https://form.typeform.com/to/kKCMDG8v',
  price: 399,
  currency: '€',
  turnaroundDays: 5,
  promise: 'Binnen 5 dagen een werkende website — Geen website, geen factuur!',
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'provenkpi',
    title: 'ProvenKPI',
    category: 'KPI Governance & BI Platform',
    url: 'https://provenkpi.com/',
    displayUrl: 'provenkpi.com',
    tagline: 'Eén betrouwbare bron van waarheid voor elke bedrijfsmetric',
    description: 'De lichtgewicht KPI-governancelaag voor datagedreven teams. Definieer wat elk cijfer betekent, wie de eigenaar is en wat er gewijzigd is — zonder vertraging voor je team.',
    techStack: ['HTML5', 'CSS3 / Tailwind', 'JavaScript', 'React', 'KPI Governance UI'],
    metrics: '< 0.8s Laadtijd · 100% Responsive',
    image: '/assets/screenshots/provenkpi.png',
  },
  {
    id: 'plotstudio',
    title: 'Plotstudio',
    category: 'Data Visualisatie & Publishing',
    url: 'https://plotstudio.cloud/',
    displayUrl: 'plotstudio.cloud',
    tagline: 'Verander elke spreadsheet in een publicatiewaardige grafiek',
    description: 'Van ruwe spreadsheetrijen naar een strak afgewerkte, geannoteerde visualisatie met 22 grafiektypes — en exporteer direct als deellink, PNG of printklare PDF.',
    techStack: ['HTML5', 'Modern JavaScript', 'CSS3 Grid', 'React', 'Chart Engine'],
    metrics: '22 Grafiektypes · Directe Export',
    image: '/assets/screenshots/plotstudio.png',
  },
  {
    id: 'planly',
    title: 'This Is Planly',
    category: 'Afspraken & Planning Platform',
    url: 'https://thisisplanly.nl/',
    displayUrl: 'thisisplanly.nl',
    tagline: 'Minder tijd aan plannen, meer tijd voor je klanten',
    description: 'Automatiseer afspraken voor kapperszaken, fysiopraktijken en coachingsbedrijven. Overzichtelijke beschikbaarheid en directe boekingen met een helder Nederlands ontwerp.',
    techStack: ['HTML5', 'JavaScript (ESNext)', 'Tailwind CSS', 'Vite', 'Booking UI'],
    metrics: '5 Dagen Oplevering · Mobiel-eerst',
    image: '/assets/screenshots/thisisplanly.png',
  },
];

export const USEFUL_TOOLS: UsefulTool[] = [
  {
    id: 'instantdomainsearch',
    name: 'Instant Domain Search',
    url: 'https://instantdomainsearch.com/',
    category: 'Domeinregistratie',
    description: 'Controleer direct tijdens het typen of je gewenste .nl, .com of .eu domeinnaam nog beschikbaar is. Geen wachttijden, realtime suggesties.',
    actionText: 'Check je domeinnaam direct',
    tag: 'Directe Domeincheck',
    tips: 'Tip van Basel: Kies een korte, memorabele domeinnaam zonder koppeltekens voor de hoogste merkwaarde.',
  },
  {
    id: 'coolors',
    name: 'Coolors',
    url: 'https://coolors.co/',
    category: 'Kleurpalet & Identiteit',
    description: 'Genereer en ontdek harmonieuze kleurenpaletten in seconden. Druk op de spatiebalk en vind direct de perfecte merkidentiteit voor je nieuwe website.',
    actionText: 'Vind het beste kleurenpalet',
    tag: 'Kleurpalet Generator',
    tips: 'Tip van Basel: Houd je aan de 60-30-10 regel (60% rustige achtergrond, 30% structuur, 10% accent voor actieknoppen).',
  },
  {
    id: 'dribbble',
    name: 'Dribbble',
    url: 'https://dribbble.com/',
    category: 'Design Inspiratie',
    description: 'Wereldwijde showcase van topontwerpers. Laat je inspireren door moderne UI/UX-trends, lay-outs en typografie vóór we aan je website beginnen.',
    actionText: 'Ontdek design inspiratie',
    tag: 'UI & Layout Trends',
    tips: 'Tip van Basel: Sla 2 of 3 ontwerpen op die je aanspreken; wij vertalen die esthetiek met AI naar je eigen site.',
  },
];

export const TECH_STACK = [
  {
    name: 'HTML5',
    category: 'Semantische Structuur',
    role: 'De fundering van elk webdocument. Zorgt voor optimale vindbaarheid in Google (SEO), toegankelijkheid voor schermlezers en vlekkeloze weergave op elk toestel.',
  },
  {
    name: 'CSS3 & Modern Styling',
    category: 'Vormgeving & Animaties',
    role: 'Flexbox, CSS Grid, responsieve media queries en soepele micro-interacties. Wij zorgen dat je site op zowel iPhone, tablet als 4K schermen perfect schaalt.',
  },
  {
    name: 'JavaScript (Modern ESNext)',
    category: 'Logica & Interactiviteit',
    role: 'Snelle interacties, formuliervalidatie en dynamische gebruikerservaringen zonder dat pagina’s traag opnieuw hoeven te laden.',
  },
  {
    name: 'Top 3 JavaScript Libraries',
    category: 'Krachtige Modulaire Bouwstenen',
    role: '1. React (voor razendsnelle, modulaire componenten) · 2. Tailwind CSS (voor pixelperfecte micro-styling zonder zware ballast) · 3. Motion / Lucide (voor vloeiende 60fps animaties en herkenbare iconografie).',
  },
];

export const FAQS = [
  {
    question: 'Hoe kan misternord een website leveren voor slechts €399,-?',
    answer: 'Traditionele bureaus hanteren lange trajecten met projectmanagers en dure vergaderingen (vaak €3.000 tot €8.000). Door mijn 5+ jaar ervaring als Data Engineer / BI consultant te koppelen aan geavanceerde AI-workflows (vibe coding), elimineren we overbodige bureaucratie. We bouwen in uren wat vroeger weken kostte — met superieure codekwaliteit.',
  },
  {
    question: 'Wat houdt de 5-dagen belofte in ("Geen website, geen factuur")?',
    answer: 'Zodra we jouw wensen en content hebben, staat er binnen 5 werkdagen een compleet werkende website live op je eigen domein. Lukt ons dat niet of ben je niet tevreden met het resultaat? Dan betaal je helemaal niets. Geen website, geen factuur.',
  },
  {
    question: 'Wat is inbegrepen in de €399,- (excl. btw)?',
    answer: 'Alles wat je nodig hebt: een maatwerk AI-cocreated website (responsive voor mobiel, tablet en desktop), 1 heel jaar snelle cloud hosting, 1 heel jaar domeinnaamregistratie (.nl/.com), SSL-beveiligingscertificaat en Google SEO-basisconfiguratie.',
  },
  {
    question: 'Hoe zit het met het maandelijkse onderhoudspakket?',
    answer: 'Na de lancering wil je dat alles veilig, up-to-date en razendsnel blijft. Ons maandelijkse onderhoudspakket (vanaf €29/mnd) regelt security patches, domeinbeheer en kleine tekst- of afbeeldingswijzigingen zodat jij je kunt focussen op ondernemen.',
  },
  {
    question: 'In welke talen kan ik communiceren?',
    answer: 'Basel spreekt vloeiend Nederlands, Engels en Arabisch. Je kunt je aanvraag en feedback in al deze talen aanleveren.',
  },
];
