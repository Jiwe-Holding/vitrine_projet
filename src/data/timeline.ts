export interface TimelineEvent {
  id: string;
  title: string;
  year: string;
  description: string;
  category: string;
  imageUrl?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: "Création d'ASM Vitrine Projet",
    year: '2020',
    description: "Lancement officiel de l'entreprise spécialisée dans la communication et la représentation institutionnelle, avec pour mission de promouvoir l'excellence congolaise à l'international.",
    category: 'Fondation',
    imageUrl: '/assets/WhatsApp Image 2025-05-19 at 19.48.40_b46480f1.jpg'
  },
  {
    id: '2',
    title: 'Première participation au Salon International de l’Agriculture',
    year: '2021',
    description: "Accompagnement de la délégation congolaise lors de la 59ᵉ édition du SIA à Paris, marquant une première présence remarquée et un succès d’image pour la RDC.",
    category: 'Événement',
    imageUrl: '/assets/WhatsApp Image 2025-05-19 at 19.48.38_ad6be365.jpg'
  },
  {
    id: '3',
    title: 'Consolidation des partenariats institutionnels',
    year: '2022',
    description: "Signature de partenariats avec des ministères et organismes publics pour structurer la participation congolaise à des événements internationaux.",
    category: 'Partenariat'
  },
  {
    id: '4',
    title: 'Participation au Salon de l’Industrie Minérale à Bordeaux',
    year: '2023',
    description: "Organisation et accompagnement du Ministère des Mines et de ses directions techniques pour une présence stratégique à la 72ᵉ édition du salon.",
    category: 'Événement',
    imageUrl: '/assets/WhatsApp Image 2025-05-19 at 19.48.38_7ac3f02a.jpg'
  },
  {
    id: '5',
    title: 'Stratégie nord-américaine',
    year: '2024',
    description: "Adaptation des stratégies de présentation et facilitation de rencontres B2B ciblées pour promouvoir les institutions congolaises sur le marché nord-américain.",
    category: 'Stratégie',
    imageUrl: '/assets/WhatsApp Image 2025-05-19 at 19.48.37_dea12396.jpg'
  },
  {
    id: '6',
    title: 'Préparation de la 61ᵉ édition du SIA',
    year: '2025',
    description: "Mise en place de nouvelles stratégies de communication pour une présence encore plus forte et coordonnée de la RDC au Salon International de l’Agriculture.",
    category: 'Préparation',
    imageUrl: '/assets/WhatsApp Image 2025-05-19 at 19.48.38_1a6b6f17.jpg'
  },
  {
    id: '7',
    title: 'Développement de services de facilitation B2B',
    year: '2025',
    description: "Lancement d’un service dédié à l’organisation de rencontres B2B et au suivi des partenariats techniques pour maximiser l’impact des événements internationaux.",
    category: 'Service'
  }
];
