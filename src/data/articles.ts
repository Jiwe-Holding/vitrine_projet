export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'La RDC brille au Salon International de l’Agriculture',
    excerpt: 'Retour sur la participation remarquée de la délégation congolaise, accompagnée par ASM Vitrine Projet pour promouvoir l’excellence agricole.',
    content: `
      <p>ASM Vitrine Projet a coordonné la présence de la République Démocratique du Congo au Salon International de l’Agriculture, mettant en avant la richesse et la diversité des filières agricoles locales.</p>
      
      <h2>Une vitrine pour le savoir-faire congolais</h2>
      <p>Le stand de la RDC a permis de valoriser les produits agricoles, d’attirer des investisseurs et de créer des opportunités de partenariats internationaux. Grâce à une stratégie de communication soignée, les visiteurs ont découvert la qualité et le potentiel des filières congolaises.</p>
      
      <h2>Des partenariats stratégiques</h2>
      <p>ASM Vitrine Projet a organisé des rencontres B2B et des échanges techniques entre opérateurs économiques, investisseurs et décideurs publics, jetant les bases de collaborations durables.</p>
    `,
    date: 'Mars 5, 2025',
    category: 'Événement',
    imageUrl: '/assets/bg-hero.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'Stratégies de visibilité des institutions congolaises à l’international',
    excerpt: 'ASM Vitrine Projet développe des stratégies de communication et de représentation adaptées aux marchés cibles.',
    content: `
      <p>Pour garantir une présence cohérente et attractive des institutions congolaises, ASM Vitrine Projet élabore des stratégies personnalisées de communication internationale.</p>
      
      <h2>Adapter le message au public cible</h2>
      <p>Qu’il s’agisse du marché européen ou nord-américain, les stratégies de présentation sont pensées pour répondre aux attentes culturelles et économiques locales.</p>
      
      <h2>Construire une image forte</h2>
      <p>L’objectif est de valoriser le savoir-faire congolais et de renforcer la confiance des partenaires potentiels, en montrant un pays dynamique et ouvert à la coopération technique et économique.</p>
    `,
    date: 'Avril 12, 2025',
    category: 'Stratégie',
    imageUrl: '/assets/at_2.jpg',
    featured: true
  },
  {
    id: '3',
    title: 'Accompagnement du Ministère des Mines au Salon de Bordeaux',
    excerpt: 'Une présence marquante à la 72ᵉ édition du Salon de l’Industrie Minérale grâce à une stratégie coordonnée.',
    content: `
      <p>ASM Vitrine Projet a accompagné le Ministère des Mines, son Secrétariat Général et ses directions techniques au Salon de Bordeaux, contribuant à présenter les opportunités minières congolaises dans un cadre structuré et professionnel.</p>
      
      <h2>Objectif : Attirer les investissements</h2>
      <p>Des supports de communication ciblés, des sessions de réseautage et des rendez-vous stratégiques ont permis de mettre en avant les atouts du secteur minier congolais auprès des investisseurs internationaux.</p>
    `,
    date: 'Mai 2, 2025',
    category: 'Salon',
    imageUrl: '/assets/at_1.jpg',
    featured: true
  },
  {
    id: '4',
    title: 'Préparation de la 61ᵉ édition du SIA : une nouvelle ambition pour la RDC',
    excerpt: 'ASM Vitrine Projet se mobilise pour faire de la prochaine participation de la RDC un succès encore plus retentissant.',
    content: `
      <p>En préparation de la 61ᵉ édition du Salon International de l’Agriculture, ASM Vitrine Projet élabore de nouvelles stratégies pour accroître l’impact de la présence congolaise.</p>
      
      <h2>Innover dans la communication</h2>
      <p>Des supports modernisés, des messages clairs et percutants, et un storytelling valorisant les filières locales seront au cœur de la démarche.</p>
      
      <h2>Renforcer les partenariats</h2>
      <p>ASM Vitrine Projet mise sur des rencontres ciblées et des partenariats stratégiques pour garantir des retombées concrètes pour les opérateurs congolais.</p>
    `,
    date: 'Juin 10, 2025',
    category: 'Préparation',
    imageUrl: '/assets/at_1.jpg',
    featured: true
  },
  {
    id: '5',
    title: 'Faciliter le réseautage et les partenariats techniques',
    excerpt: 'ASM Vitrine Projet accompagne les institutions pour nouer des collaborations techniques et économiques durables.',
    content: `
      <p>Au-delà de la simple participation aux salons, ASM Vitrine Projet développe des solutions sur mesure pour faciliter les échanges techniques et commerciaux entre la RDC et ses partenaires étrangers.</p>
      
      <h2>Sessions B2B et networking</h2>
      <p>Organisation de rencontres personnalisées, traduction, médiation et suivi des contacts pour transformer les opportunités en partenariats concrets.</p>
      
      <h2>Suivi post-événement</h2>
      <p>Un accompagnement sur le long terme pour s’assurer que les relations initiées se concrétisent en contrats et collaborations stratégiques.</p>
    `,
    date: 'Juillet 1, 2025',
    category: 'Partenariat',
    imageUrl: '/assets/at_1.jpg',
    featured: true
  }
];
