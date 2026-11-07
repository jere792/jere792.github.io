export interface Project {
  id: string;
  title: string;
  client: string;
  company?: string;
  ruc?: string;
  date: string;
  description: string;
  technologies: string[];
  images: string[];
  currentImageIndex?: number;
  liveUrl?: string;
  videoUrl?: string;
}

export type ProjectCategory = 'business' | 'personal' | 'university';

export interface ProjectSection {
  category: ProjectCategory;
  label: string;
  icon: string;
  comment: string;
  projects: Project[];
}

export const PROJECT_SECTIONS: ProjectSection[] = [
  {
    category: 'business',
    label: 'Proyectos Empresariales',
    icon: 'pi pi-briefcase',
    comment: '// Solutions that transform ideas into code',
    projects: [
      {
        id: 'mkapu',
        title: 'Mkapu-Import.exe',
        client: 'Mkapu-Import S.A.C.',
        ruc: '20613016946',
        date: 'Diciembre 2025 - Actual',
        description:
          'ERP empresarial completo para empresa importadora con operaciones en Lima. Cubre el ciclo completo de negocio: cotizaciones, ventas, cuentas por cobrar, logística y caja en tiempo real. Arquitectura de microservicios hexagonal con NestJS, comunicación en tiempo real vía WebSockets, generación de comprobantes PDF, envío automatizado por WhatsApp y correo, y control de caja con reportes térmicos.',
        technologies: [
          'Angular',
          'HTML',
          'CSS',
          'API Rest',
          'NestJs',
          'Primeng',
          'MySQL',
          'WebSockets',
          'Docker',
          'Email Api',
          'WhatsApp Api',
          'Reniec Api',
          'Sunat Api',
        ],
        images: [
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368013/PAGE-1_qa6omw.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368014/PAGE-2_xtey3j.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368015/PAGE-3_spho3v.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368016/PAGE-4_cxdhyu.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368016/PAGE-5_kmrzi8.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368016/PAGE-6_ikqssm.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368017/PAGE-7_esp5sh.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368018/PAGE-8_ghbibe.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368017/PAGE-9_ztqzs5.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368013/PAGE-10_txpwti.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368013/PAGE-11_th5vi7.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368013/PAGE-12_asrfv6.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368013/PAGE-13_jmrjpy.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368021/PAGE-14_o7icdh.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368013/PAGE-15_q68hyp.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368014/PAGE-16_htym76.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368022/PAGE-17_ddcsyl.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368013/PAGE-18_l5imtq.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368014/PAGE-19_gydf7h.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368015/PAGE-20_fkstu2.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368014/PAGE-21_kmkxy8.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368015/PAGE-22_cjuykm.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368016/PAGE-23_duh3ic.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368015/PAGE-24_awb0tu.png',
        ],
        currentImageIndex: 0,
        videoUrl: 'https://...',
      },
      {
        id: 'vestizo',
        title: 'Vestizo.exe',
        client: 'SEGAL UP MODA S.A.C.',
        ruc: '20610150277',
        date: 'Marzo 2026',
        description:
          'E-commerce de moda femenina exclusiva desplegado en Vercel, desarrollado únicamente con frontend en Angular. Cuenta con catálogo de prendas por colecciones, páginas de información, blog y preguntas frecuentes. El flujo de compra redirige directamente al WhatsApp del vendedor al seleccionar una prenda, con atención personalizada y envíos a todo el Perú. Acepta Visa, Yape y Plin.',
        technologies: ['Angular', 'HTML', 'SCSS', 'Cloudinary', 'Vercel'],
        images: [
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368025/PAGE-1_itodtg.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368031/PAGE-2_r1azhv.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368031/PAGE-3_c5fqla.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368032/PAGE-4_mverdg.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368033/PAGE-5_mz8z1l.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368033/PAGE-6_ck6aif.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368033/PAGE-7_kekmip.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368034/PAGE-8_mztbsd.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368034/PAGE-9_dfo7us.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368028/PAGE-10_mdf6yr.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368026/PAGE-11_dravbd.png',
        ],
        currentImageIndex: 0,
        liveUrl: 'https://vestizo.vercel.app',
      },
    ],
  },
  {
    category: 'personal',
    label: 'Proyectos Personales',
    icon: 'pi pi-user',
    comment: '// Turning ideas into functional systems',
    projects: [
      {
        id: 'ocean-eye',
        title: 'Ocean-Eye.exe',
        client: 'Proyecto Personal',
        date: 'Febrero 2026',
        description:
          'Una Landing Page de una app movil para reportar pesca ilegal en tiempo real, orientada a pescadores y comunidades costeras del Perú. Permite enviar reportes anónimos con foto, video y geolocalización GPS, funciona en modo offline sincronizando al recuperar señal. Incluye monitoreo de floraciones algales (HABs), integración con entidades como IMARPE y DICAPI, e infraestructura con encriptación extremo a extremo.',
        technologies: ['Angular', 'HTML', 'SCSS', 'Vercel'],
        images: [
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368036/PAGE-1_gaajpz.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368018/PAGE-2_ux9bjv.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368019/PAGE-3_jxa54b.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368020/PAGE-4_wae78z.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368020/PAGE-5_su7dsh.png',
        ],
        currentImageIndex: 0,
        liveUrl: 'https://ocean-eyes-p4xe.vercel.app/',
      },
    ],
  },
  {
    category: 'university',
    label: 'Proyectos Universitarios',
    icon: 'pi pi-graduation-cap',
    comment: '// Academic systems created during my university journey',
    projects: [
      {
        id: 'comunired',
        title: 'Comunired.exe',
        client: 'Proyecto Universitario',
        date: 'Julio - Noviembre 2025',
        description:
          'Red social interactiva de reportes ciudadanos destinada al uso de municipalidades. Desarrollada con arquitectura moderna, implementa comunicación en tiempo real mediante GraphQL y Apollo Client, con gestión dinámica de servicios en MongoDB.',
        technologies: [
          'Angular',
          'GraphQl',
          'HTML',
          'CSS',
          'Spring Boot',
          'MongoDB',
          'Apollo Client',
          'Cloudinary',
        ],
        images: [
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368008/PAGE-1_fdo2ua.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368012/PAGE-2_kz3xxw.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368007/PAGE-3_vx34rc.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368007/PAGE-4_sn0pw3.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368007/PAGE-5_daemo1.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368012/PAGE-6_akzuqm.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368008/PAGE-7_fohymp.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368008/PAGE-8_sqwow1.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368008/PAGE-9_utl470.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368006/PAGE-10_kdrog9.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368006/PAGE-11_ftpnee.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368005/PAGE-12_n6bhot.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368005/PAGE-13_lad6wa.png',
        ],
        currentImageIndex: 0,
      },
    ],
  },
];
