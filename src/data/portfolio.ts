export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
  date: string;
  featured?: boolean;
}


export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Salon International de l’Agriculture (SIA)',
    description: 'Participation de la RDC organisée par ASM Vitrine Projet, mettant en valeur les filières agricoles et artisanales congolaises.',
    category: 'Événement',
    imageUrl: '/assets/img/projets/sia_event.jpg',
    link: '/portfolio/sia-participation',
    date: 'Mars 2025',
    featured: true
  },
  {
    id: '2',
    title: 'Salon de l’Industrie Minérale à Bordeaux',
    description: 'Accompagnement du Ministère des Mines et des directions techniques pour une présence stratégique à la 72ᵉ édition du salon.',
    category: 'Salon',
    imageUrl: '/assets/img/projets/sim_event.png',
    link: '/portfolio/bordeaux-mines',
    date: 'Mai 2025',
    featured: true
  },
  {
    id: '3',
    title: 'Préparation de la 61ᵉ édition du SIA',
    description: 'Conception de nouvelles stratégies de communication pour renforcer la visibilité et l’attractivité de la RDC lors de l’édition 2026.',
    category: 'Stratégie',
    imageUrl: '/assets/img/projets/sia_event.jpg',
    link: '/portfolio/preparation-sia-61',
    date: 'Juin 2025'
  },
  {
    id: '4',
    title: 'Stratégie de Présentation Nord-Américaine',
    description: 'Adaptation des contenus et organisation de sessions B2B pour promouvoir les institutions congolaises sur le marché nord-américain.',
    category: 'Stratégie',
    imageUrl: '/assets/img/pt_2.jpg',
    link: '/portfolio/strategie-amerique-nord',
    date: 'Avril 2025'
  },
  {
    id: '5',
    title: 'Réseautage et Partenariats Techniques',
    description: 'Organisation de rencontres B2B et accompagnement des institutions publiques et privées pour établir des partenariats durables.',
    category: 'Partenariat',
    imageUrl: '/assets/img/pt_1.jpg',
    link: '/portfolio/reseautage-partenariats',
    date: 'Juillet 2025'
  },
  {
    id: '6',
    title: 'Valorisation des Institutions Congolaises',
    description: 'Création de supports modernes et mise en place de stratégies de communication pour accroître la visibilité des acteurs congolais.',
    category: 'Communication',
    imageUrl: '/assets/img/cd_1.jpg',
    link: '/portfolio/valorisation-institutions',
    date: 'Août 2025',
    featured: true
  }
];
