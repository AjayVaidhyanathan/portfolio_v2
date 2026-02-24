export interface Project {
    id: string;
    number: string;
    type: string;
    title: string;
    summary: string;
    tags: string[];
    metrics: {
        value: string;
        label: string;
    };
    link: string;
    details: {
        problem: string;
        approach: string;
        outcomes: string;
        methods: string;
    };
}

export const SAMPLE_PROJECTS: Project[] = [
    {
        id: '01',
        number: '07',
        type: 'Product Strategy · E-commerce',
        title: 'From commodity ingredient to premium product platform',
        summary: 'Strategic case for repositioning Omega-3 as a multi-product ingredient platform targeting life-stage specific needs.',
        tags: ['Portfolio strategy', 'D2C', 'GTM'],
        metrics: { value: '5x', label: 'LTV potential' },
        link: '/work/mamaglow',
        details: {
            problem: 'Omega-3 sold as a low-margin essential SKU; saturated influencer pool in DACH/France.',
            approach: 'Repositioned Omega-3 as an ingredient platform (algae DHA) for life-stage specific complex products.',
            outcomes: '4 new SKUs proposed; €46M SAM identified; 5x LTV potential.',
            methods: 'Portfolio strategy - Market sizing - GTM planning'
        }
    },
    {
        id: '02',
        number: '08',
        type: 'Product · B2B Enterprise',
        title: 'Building a custom PIM from scratch',
        summary: 'Led discovery and delivery of a custom PIM system for a mission-critical sensor manufacturer.',
        tags: ['0 to 1', 'B2B', 'Industrial', 'Data infrastructure'],
        metrics: { value: '-91%', label: 'Update time' },
        link: '/work/pim',
        details: {
            problem: '3,000+ SKUs managed via manual ERP exports/email/Slack; zero audit trail.',
            approach: 'Custom ETL engine; parent-child inheritance model; RBAC for regulated industries.',
            outcomes: '-18h manual work/week; <15s per update; 100% audit coverage.',
            methods: 'System design - ETL - RBAC - Process automation'
        }
    },
    {
        id: '03',
        number: '09',
        type: 'IoT · Operations',
        title: 'ColdGuard: Monitoring for perishable stock',
        summary: 'IoT monitoring and alerting system that cut failure response time from 15 minutes to under 90 seconds.',
        tags: ['0 to 1', 'B2C App', 'IoT', 'Compliance'],
        metrics: { value: '< 90s', label: 'Alert time' },
        link: '/work/coldguard',
        details: {
            problem: '₹8.9L lost in 18 months due to undetected refrigeration failures.',
            approach: 'High-accuracy sensor network; threshold-based alerting; automated FSSAI reporting.',
            outcomes: '₹0 losses in 12 months; automated FSSAI compliance reporting.',
            methods: 'IoT architecture - Alert logic - Operations - Compliance'
        }
    }
];
