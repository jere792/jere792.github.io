export interface Technology {
  name: string;
  icon: string;
}

export interface SocialLink {
  url: string;
  icon: string;
  label: string;
  external: boolean;
}

export interface UserInfo {
  name: string;
  email: string;
  role: string;
  typingText: string;
  description: string;
  image: string;
}

export const USER_INFO: UserInfo = {
  name: 'Jeremy Anton',
  email: 'jeremyar792@gmail.com',
  role: 'Systems Engineer',
  typingText: "Hi, I'm Jeremy Anton",
  description:
    'Frontend Developer apasionado por Angular, TypeScript y diseño UI/UX. ' +
    'Creando aplicaciones web modernas con PrimeNG, SCSS y arquitecturas escalables. ' +
    'De la interfaz hasta la base de datos, construyendo soluciones completas.',
  image: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773540298/foto-perfil_mhaf1t.jpg',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    url: 'https://github.com/jere792',
    icon: 'devicon-github-original',
    label: 'GitHub',
    external: true,
  },
  {
    url: 'https://www.linkedin.com/in/jeremy-antón-61980235b/',
    icon: 'pi pi-linkedin',
    label: 'LinkedIn',
    external: true,
  },
  { url: 'mailto:jeremyar792@gmail.com', icon: 'pi pi-envelope', label: 'Email', external: false },
];
export interface TechCard {
  name: string;
  icon: string;
  glow: string;
  size: 'xl' | 'lg' | 'md' | 'sm';
  left: number;
  top: number;
  float: number;
  z: number;
  delay: number;
  duration: number;
}

export const TECH_CARDS: TechCard[] = [
  {
    name: 'Angular',
    icon: 'devicon-angular-plain colored',
    glow: '#dd0031',
    size: 'xl',
    left: 50,
    top: 4,
    float: -10,
    z: 10,
    delay: 0,
    duration: 4.2,
  },
  {
    name: 'TypeScript',
    icon: 'devicon-typescript-plain colored',
    glow: '#3178c6',
    size: 'xl',
    left: 78,
    top: 14,
    float: -8,
    z: 9,
    delay: -1,
    duration: 3.8,
  },
  {
    name: 'JavaScript',
    icon: 'devicon-javascript-plain colored',
    glow: '#f7df1e',
    size: 'lg',
    left: 88,
    top: 42,
    float: -9,
    z: 8,
    delay: -2,
    duration: 4.5,
  },
  {
    name: 'Node.js',
    icon: 'devicon-nodejs-plain colored',
    glow: '#68a063',
    size: 'lg',
    left: 78,
    top: 72,
    float: -7,
    z: 8,
    delay: -3,
    duration: 3.6,
  },
  {
    name: 'Express',
    icon: 'devicon-express-original',
    glow: '#c9d1d9',
    size: 'md',
    left: 58,
    top: 88,
    float: -6,
    z: 7,
    delay: -4,
    duration: 4.0,
  },
  {
    name: 'CSS3',
    icon: 'devicon-css3-plain colored',
    glow: '#1572b6',
    size: 'md',
    left: 30,
    top: 84,
    float: -8,
    z: 7,
    delay: -1.5,
    duration: 3.9,
  },
  {
    name: 'SCSS',
    icon: 'devicon-sass-original colored',
    glow: '#cf649a',
    size: 'sm',
    left: 10,
    top: 68,
    float: -5,
    z: 6,
    delay: -2.5,
    duration: 4.8,
  },
  {
    name: 'SQL Server',
    icon: 'devicon-microsoftsqlserver-plain colored',
    glow: '#cc2927',
    size: 'sm',
    left: 6,
    top: 44,
    float: -7,
    z: 6,
    delay: -0.5,
    duration: 3.5,
  },
  {
    name: 'MySQL',
    icon: 'devicon-mysql-plain colored',
    glow: '#4479a1',
    size: 'md',
    left: 10,
    top: 20,
    float: -9,
    z: 7,
    delay: -3.5,
    duration: 4.3,
  },
  {
    name: 'MongoDB',
    icon: 'devicon-mongodb-plain colored',
    glow: '#47a248',
    size: 'lg',
    left: 24,
    top: 7,
    float: -8,
    z: 8,
    delay: -1.8,
    duration: 3.7,
  },
  {
    name: 'GraphQL',
    icon: 'devicon-graphql-plain colored',
    glow: '#e10098',
    size: 'md',
    left: 66,
    top: 26,
    float: -6,
    z: 7,
    delay: -2.2,
    duration: 4.1,
  },
  {
    name: 'Java',
    icon: 'devicon-java-plain colored',
    glow: '#f89820',
    size: 'md',
    left: 34,
    top: 26,
    float: -7,
    z: 7,
    delay: -0.8,
    duration: 3.8,
  },
  {
    name: 'Spring Boot',
    icon: 'devicon-spring-plain colored',
    glow: '#6db33f',
    size: 'sm',
    left: 68,
    top: 58,
    float: -5,
    z: 6,
    delay: -3.2,
    duration: 4.6,
  },
  {
    name: 'C#',
    icon: 'devicon-csharp-plain colored',
    glow: '#68217a',
    size: 'sm',
    left: 44,
    top: 66,
    float: -6,
    z: 6,
    delay: -1.2,
    duration: 4.0,
  },
  {
    name: 'ASP.NET Core',
    icon: 'devicon-dotnetcore-plain colored',
    glow: '#512bd4',
    size: 'sm',
    left: 24,
    top: 58,
    float: -5,
    z: 6,
    delay: -4,
    duration: 3.5,
  },
  {
    name: 'Figma',
    icon: 'devicon-figma-plain colored',
    glow: '#f24e1e',
    size: 'sm',
    left: 44,
    top: 44,
    float: -8,
    z: 9,
    delay: -0.3,
    duration: 4.4,
  },
  {
    name: 'Arduino',
    icon: 'devicon-arduino-plain colored',
    glow: '#00979d',
    size: 'sm',
    left: 20,
    top: 40,
    float: -6,
    z: 6,
    delay: -2.8,
    duration: 3.9,
  },
  {
    name: 'GitHub',
    icon: 'devicon-github-original',
    glow: '#c9d1d9',
    size: 'md',
    left: 54,
    top: 52,
    float: -7,
    z: 8,
    delay: -1.6,
    duration: 4.2,
  },
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'Angular', icon: 'devicon-angular-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Express', icon: 'devicon-express-original' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'SCSS', icon: 'devicon-sass-original colored' },
  { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'GraphQL', icon: 'devicon-graphql-plain colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
  { name: 'C#', icon: 'devicon-csharp-plain colored' },
  { name: 'ASP.NET Core', icon: 'devicon-dotnetcore-plain colored' },
  { name: 'Figma', icon: 'devicon-figma-plain colored' },
  { name: 'Arduino', icon: 'devicon-arduino-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original' },
];
