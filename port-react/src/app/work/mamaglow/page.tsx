'use client'

import React from 'react'
import CaseStudyDetail from '@/components/CaseStudyDetail'

export default function MamaGlowPage() {
    return (
        <CaseStudyDetail
            number="07"
            subtitle="Product Strategy · E-commerce"
            title="From commodity ingredient<br/>to premium <em>product platform:</em><br/>an Omega-3 strategy"
            tags={['Portfolio strategy', 'D2C', 'GTM']}
            lead={<>The company sold Omega-3 as a basic Essential — one SKU, low margin, low differentiation. I built the strategic case for <strong>repositioning it as a multi-product ingredient platform</strong> targeting life-stage specific needs, starting with the prenatal segment as the highest-value entry point.</>}
            metrics={[
                { value: '4', label: 'New SKUs proposed' },
                { value: '€46M', label: 'SAM in DACH', highlight: true },
                { value: '5×', label: 'LTV potential' },
                { value: '90d', label: 'To first launch' },
            ]}
            sections={[
                {
                    number: '01',
                    label: 'The situation',
                    heading: 'Two years of growth, then a <em>structural ceiling</em>',
                    blocks: [
                        {
                            type: 'text',
                            content: (
                                <>
                                    <p className="cs-p">After two years of strong ARR growth, the business had hit structural limits. The influencer pool in DACH and France was saturated — not because of spend efficiency, but because every reachable person had already been reached. LTV of €60 per customer looked healthy until you accounted for the 18-24 month realization window, which created a cash timing problem the unit economics alone couldn&apos;t solve.</p>
                                    <p className="cs-p">Revenue was concentrated in a few top products and a few top influencers. That engine was decelerating.</p>
                                    <p className="cs-p">I stress-tested every alternative before arriving at a new product recommendation: <strong>geographic expansion</strong> required a 12-18 month minimum runway before meaningful revenue; <strong>increased ad spend</strong> faced diminishing returns on a tapped audience; <strong>retention-only optimization</strong> is defensive, not a growth lever. A new product was the only lever that simultaneously created a new reason to buy, unlocked cross-sell, reached new audiences, and opened a new influencer category.</p>
                                </>
                            ),
                        },
                    ],
                },
                {
                    number: '02',
                    label: 'The platform thesis',
                    heading: 'Omega-3 as an <em>ingredient platform,</em> not a product',
                    blocks: [
                        {
                            type: 'text',
                            content: (
                                <p className="cs-p">The core insight from the portfolio matrix: Omega-3 sat in the &quot;Essentials&quot; quadrant — high repeat, stable revenue, but low differentiation and low margin. The &quot;Complex Heroes&quot; quadrant (multi-ingredient, premium, high LTV) had clear vacancies.</p>
                            ),
                        },
                        {
                            type: 'matrix',
                            cells: [
                                { label: 'Essentials — Existing', items: [{ text: 'Omega-3 Fish Oil' }] },
                                { label: 'Complex Heroes — New', items: [{ text: '✦ MamaGlow Prenatal Complex', isNew: true }, { text: '✦ MamaGlow Postnatal Complex', isNew: true }, { text: '✦ MamaGlow Kids Complex', isNew: true }] },
                                { label: 'Essentials — New', items: [{ text: 'Vegan Omega-3 (algae)' }] },
                                { label: 'Complex Heroes — Existing', items: [{ text: 'Hair Glow Complex' }, { text: 'Collagen + Biotin' }] },
                            ],
                        },
                        {
                            type: 'quote',
                            content: '"Omega-3 is not a product. It is an ingredient that follows a person through every stage of their life — pregnancy, postpartum recovery, childhood development. We were selling it as a one-size product to everyone and capturing none of that specificity."',
                        },
                        {
                            type: 'text',
                            content: (
                                <>
                                    <p className="cs-p">The strategic repositioning was to treat Omega-3 — specifically <strong>algae-sourced DHA and EPA</strong> — as an ingredient platform that could anchor premium complex products at each major life stage. Algae-sourced DHA had two properties that made this viable: it eliminates the fishy taste barrier (the most cited reason for non-compliance), and it is inherently vegan, opening a meaningfully underserved segment.</p>
                                    <p className="cs-p">Each new product uses algae DHA as the anchor ingredient, then adds clinically relevant co-ingredients for the specific life stage. The result is a product family a single customer can move through over <strong>5+ years — at zero incremental CAC per transition.</strong></p>
                                </>
                            ),
                        },
                    ],
                },
                {
                    number: '03',
                    label: 'The evidence',
                    heading: 'Three independent sources pointing to <em>the same gap</em>',
                    blocks: [
                        {
                            type: 'text',
                            content: (
                                <p className="cs-p">The recommendation was built on three independent data sources that all pointed to the same gap, from three different angles. Any one data point can be dismissed as anecdotal. All three independently pointing to the same gap made the case much harder to argue against in a board setting.</p>
                            ),
                        },
                        {
                            type: 'evidence',
                            items: [
                                { value: '2,000+', label: 'Internal site search', desc: 'Pregnancy-related search queries on-site in 12 months. Customers were actively looking for prenatal products the company did not carry.' },
                                { value: '120+', label: 'Customer feedback', desc: 'Signals across email replies, reviews, and support tickets — 47 direct safety questions during pregnancy, 23 explicit requests for omega-3 in gummy format.' },
                                { value: '85K+', label: 'Amazon market analysis', desc: 'Monthly category sales on Amazon DE with 41% YoY growth in "gummy prenatal" searches. Only 2 premium vegan gummy competitors existed.' },
                            ],
                        },
                        {
                            type: 'text',
                            content: (
                                <p className="cs-p">The churn data added urgency. Women aged 28-35 were churning at <strong>34% above the average rate</strong> — not because of product dissatisfaction, but because pregnancy forced them to stop taking existing products and look elsewhere. The portfolio had no answer for that life-stage transition. Every churning customer in that demographic was a retention failure caused entirely by a product gap.</p>
                            ),
                        },
                    ],
                },
                {
                    number: '04',
                    label: 'Product concepts',
                    heading: 'Three products, one <em>connected ecosystem</em>',
                    blocks: [
                        {
                            type: 'text',
                            content: (
                                <p className="cs-p">Designed as a connected ecosystem rather than standalone SKUs. Each one is a Complex Hero by positioning: multi-ingredient, life-stage specific, premium-priced, and anchored by the same algae DHA platform.</p>
                            ),
                        },
                        {
                            type: 'products',
                            items: [
                                { phase: 'Entry point · Phase 1', name: 'MamaGlow Prenatal', ing: 'Algae DHA + EPA · Folic acid (400mcg) · Vitamin D3 + Iodine · Soft chew format', desc: 'Eliminates fishy taste barrier. Vegan — opens a segment competitors don\'t serve. No direct competition at premium vegan gummy tier in DE market.' },
                                { phase: 'Retention · Phase 2', name: 'MamaGlow Postnatal', ing: 'Algae DHA · Iron + Folate · Vitamin B12 · Zinc · Soft chew format', desc: 'Addresses postpartum depletion — a gap the prenatal customer immediately needs filled. The cross-sell trigger is built into the life stage.' },
                                { phase: 'Cross-sell · Phase 3', name: 'MamaGlow Kids', ing: 'Algae DHA · Vitamin D3 · Iodine · Zinc · Kids gummy format', desc: 'Follows the customer as the child grows. A 5-year relationship: Prenatal → Postnatal → Kids, at €0 incremental CAC after acquisition.' },
                            ],
                        },
                    ],
                },
                {
                    number: '05',
                    label: 'The LTV case',
                    heading: 'Three mechanisms that change the <em>unit economics</em>',
                    blocks: [
                        {
                            type: 'ltv',
                            items: [
                                { value: '€0', label: 'Phase 1 CAC', desc: 'Cross-sell to existing Omega-3 and Hair Glow customers. No new acquisition needed for the first cohort.' },
                                { value: '+40%', label: 'LTV uplift', desc: 'Estimated for customers holding 2+ SKUs simultaneously, based on existing cohort data. LTV realization collapses from 18+ months to 3-6 months.' },
                                { value: '5×', label: 'Lifetime value potential', desc: 'For a customer who moves Prenatal → Postnatal → Kids over a 5-year relationship vs. a single-SKU customer.' },
                            ],
                        },
                        {
                            type: 'text',
                            content: (
                                <p className="cs-p">Three mechanisms drove this: <strong>churn conversion</strong> — the 34% above-average churn in 28-35 women is caused entirely by a product gap; <strong>LTV realization collapse</strong> — a cross-sold customer completes a second transaction immediately, compressing 18+ months to 3-6 months; and <strong>influencer pool expansion</strong> — pregnancy and parenting influencers are a completely untapped acquisition channel, breaking the existing concentration risk.</p>
                            ),
                        },
                    ],
                },
                {
                    number: '06',
                    label: 'Go-to-market',
                    heading: 'Validate with zero-CAC cohorts before <em>opening paid channels</em>',
                    blocks: [
                        {
                            type: 'gtm',
                            phases: [
                                {
                                    label: 'Phase 1',
                                    timeline: 'Days 0–30',
                                    items: [
                                        'Email existing Omega-3 and Hair Glow customers',
                                        'Bundle at introductory price',
                                        'Collect first-party reviews and NPS scores',
                                        'Validate 30-day repeat purchase signal before scaling',
                                    ],
                                },
                                {
                                    label: 'Phase 2',
                                    timeline: 'Days 30–90',
                                    items: [
                                        'Partner with maternal health influencers',
                                        'DTC paid social targeting women 26-38 in DACH',
                                        'Amazon listing across prenatal keywords',
                                        'A/B test "prenatal" vs "pregnancy" messaging',
                                    ],
                                },
                                {
                                    label: 'Phase 3',
                                    timeline: 'Days 90+',
                                    items: [
                                        'Apotheke channel — premium prenatal shelf',
                                        'Rossmann/DM: family health aisle',
                                        'France DTC expansion using DACH validated data',
                                        'Kids variant launched on confirmed search signal',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ]}
            reflection={[
                {
                    number: '01',
                    content: <>The most important reframe in this project was moving from <strong>&quot;new product&quot; to &quot;ingredient platform.&quot;</strong> Proposing four new SKUs sounds like a large investment. Proposing a single algae DHA platform that unlocks four product positions across a 5-year customer lifecycle sounds like infrastructure. The same recommendation reads very differently depending on which lens you use to present it.</>,
                },
                {
                    number: '02',
                    content: <>The <strong>three-source evidence structure</strong> was deliberate. Any one data point — internal search queries, customer feedback, or Amazon data — can be dismissed as anecdotal. All three independently pointing to the same gap made the case much harder to argue against in a board setting. Evidence that arrives from multiple directions at the same conclusion carries significantly more weight than a single strong signal.</>,
                },
                {
                    number: '03',
                    content: <>Starting with the churn data was the right entry point. The <strong>34% above-average churn rate</strong> in the 28-35 female cohort reframed the entire conversation: this was not just a new product opportunity, it was an existing retention failure with an available fix. That reframe changed the energy in the room entirely.</>,
                },
            ]}
            nextProject={{ title: 'Custom PIM for PrecisionSense', link: '/work/pim' }}
        />
    )
}
