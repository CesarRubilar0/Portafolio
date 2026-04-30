export const personalInfo = {
    name: "César Rubilar",
    role: "Analista Programador",
    tagline: "De la prevención de riesgos al código: construyendo soluciones con lógica y disciplina.",
    email: "cesarrubilar0@gmail.com",
    github: "CesarRubilar0",
    linkedin: "cesar-andres-rubilar-sanhueza-4623b221b",
};

export const skills = [
    {
        category: "Lenguajes & Frameworks",
        items: ["Python", "Django", "Java", "Spring Boot", "JavaScript", "React"],
    },
    {
        category: "Bases de Datos",
        items: ["PostgreSQL", "MySQL", "H2 Database", "Supabase"],
    },
    {
        category: "Herramientas & Otros",
        items: ["Git", "Docker", "Postman", "PyQt5", "Visual Studio Code", "Antigravity", "Android Studio"],
    },
];
export const experience = [
    {
        company: "Labotech",
        role: "Práctica Profesional (Analista Programador)",
        period: "2026 — Actualidad",
        description: "Refactorización de sistemas corporativos bajo principios SOLID/DRY. Implementación de pipelines de calidad (ESLint, Security Audit, OTP/QR) y optimización de componentes React/Node.js.",
        achievements: ["Resolución de 430+ advertencias ESLint", "Implementación de sistema OTP y QR temporal"]
    },
    {
        company: "Certificación Eléctrica / Prevención de Riesgos",
        role: "Especialista en Normativa y Seguridad",
        period: "Trayectoria Previa",
        description: "Análisis de cumplimiento de estándares técnicos (IEC), gestión de seguridad y protocolos de riesgo. Esta base metódica la aplico hoy al testing y arquitectura de software."
    }
];

export const projects = [
    {
        id: 1,
        title: "Agendabarber",
        description: "Sistema Full-stack de agendamiento para barberías con gestión de turnos en tiempo real.",
        stack: ["React", "Node.js", "Express", "PostgreSQL"],
        github: "https://github.com/CesarRubilar0/Agendabarber"
    },
    {
        id: 2,
        title: "NakMuay-API",
        description: "API REST robusta para la gestión de academias de Muay Thai y registros deportivos.",
        stack: ["Java", "Spring Boot", "Hibernate"],
        github: "https://github.com/CesarRubilar0/NakMuay-API"
    },
    {
        id: 3,
        title: "Aplicación Financiera",
        description: "Gestión de finanzas personales con tipado estricto para asegurar integridad de transacciones.",
        stack: ["TypeScript", "React", "Tailwind"],
        github: "https://github.com/CesarRubilar0/aplicacion-financiera"
    },
    {
        id: 4,
        title: "Organizador-diario",
        description: "Herramienta de productividad orientada a la gestión de tareas y lógica de automatización.",
        stack: ["Python", "PyQt5"],
        github: "https://github.com/CesarRubilar0/Organizador-diario"
    },
    {
        title: "Acceso360",
        description: "Plataforma integral de gestión de accesos y seguridad para condominios y recintos corporativos. Incluye control de visitas, gestión de estacionamientos, reserva de áreas comunes y un sistema avanzado de roles (RBAC).",
        stack: ["React", "Node.js", "Express", "PostgreSQL", "TailwindCSS"],
        link: "#",
        type: "Full-stack"
    },
    {
        title: "Clingo.cl",
        description: "Plataforma integral de gestión médica y administrativa para centros de salud. Incluye agenda médica electrónica, ficha clínica digital, integración de pagos y un sistema avanzado de agendamiento.",
        stack: ["React 19", "Vite 7", "TailwindCSS 4", "React Query", "Node.js 18+", "Express.js", "Knex.js", "PostgreSQL", "JWT", "MercadoPago", "Google OAuth 2.0", "API de calendario"],
        link: "https://clingo.cl/",
        type: "Web"
    }
];

export const education = [
    {
        institution: "IP San Sebastián (Santiago)",
        degree: "Ingeniería en Informática (en curso)",
        period: "2024 — Presente"
    },
    {
        institution: "IP San Sebastián",
        degree: "Técnico Analista Programador",
        period: "2024 — 2026"
    }
];