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
          'Web corporativa para empresa importadora especializada en administración, logística y ventas. Desarrollada con arquitectura de Microservicios Hexagonal, implementando comunicación en tiempo real mediante API REST y gestión dinámica de servicios en MySQL.',
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
        // liveUrl: 'https://mkapu-import.com',
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
        // videoUrl: 'https://...',
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
          'Sistema web para restaurante con 3 vistas: administración completa, caja de ventas y portal de clientes. Incluye gestión de mesas, pedidos en tiempo real, menú dinámico, control de usuarios por roles y reportes. Desarrollada con arquitectura en capas modular (Controller-Service-DAO), autenticación JWT y Cloudinary.',
        technologies: [
          'Angular',
          'HTML',
          'SCSS',
          'Vercel',
        ],
        images: [
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368036/PAGE-1_gaajpz.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368018/PAGE-2_ux9bjv.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368019/PAGE-3_jxa54b.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368020/PAGE-4_wae78z.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368020/PAGE-5_su7dsh.png',
        ],
        currentImageIndex: 0,
        liveUrl: 'https://ocean-eyes-p4xe.vercel.app/',
        // videoUrl: 'https://...',
      },
      {
        id: 'el-sabor-limeno',
        title: 'El-Sabor-Limeño.exe',
        client: 'Proyecto Personal',
        date: 'Diciembre 2025',
        description:
          'Sistema web para restaurante con 3 vistas: administración completa, caja de ventas y portal de clientes. Incluye gestión de mesas, pedidos en tiempo real, menú dinámico, control de usuarios por roles y reportes. Desarrollada con arquitectura en capas modular (Controller-Service-DAO), autenticación JWT y Cloudinary.',
        technologies: [
          'Angular',
          'HTML',
          'SCSS',
          'API Rest',
          'Express.js',
          'SQL Server',
          'Cloudinary',
        ],
        images: [
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368011/PAGE-1_n6pyhv.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368011/PAGE-2_xwfbyk.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368011/PAGE-3_ap2sol.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368012/PAGE-4_mhiuzb.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368012/PAGE-5_afqwgp.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773370281/PAGE-6_kaaw5q.png',
        ],
        currentImageIndex: 0,
        // liveUrl: 'https://...',
        // videoUrl: 'https://...',
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
        // liveUrl: 'https://...',
        // videoUrl: 'https://...',
      },
      {
        id: 'romis-spa',
        title: 'Romis-Salon-$-Spa.exe',
        client: 'Proyecto Universitario',
        date: 'Julio - Noviembre 2025',
        description:
          'Sistema de gestión administrativa para salón spa desarrollado en ASP.NET Core MVC con SQL Server, utilizando stored procedures para la capa de datos y arquitectura fullstack (frontend y backend) en un único repositorio.',
        technologies: [
          'C#',
          'CSHTML',
          'CSS',
          'SQL Server',
          'ASP.NET Core MVC',
          'Stored Procedures',
        ],
        images: [
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773371167/PAGE-1_bkkrbm.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773371168/PAGE-2_ml1xzq.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773371170/PAGE-3_rexnq1.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773371172/PAGE-4_vrgaaj.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773371175/PAGE-5_prfn5v.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773371176/PAGE-6_y4g3tm.png',
          'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773371179/PAGE-7_nu77nc.png',
        ],
        currentImageIndex: 0,
        // liveUrl: 'https://...',
        // videoUrl: 'https://...',
      },
    ],
  },
];
