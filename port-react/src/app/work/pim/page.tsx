'use client'

import React from 'react'
import CaseStudyDetail from '@/components/CaseStudyDetail'

export default function PIMPage() {
    return (
        <CaseStudyDetail
            number="08"
            subtitle="Product · B2B Enterprise"
            title="Building a custom PIM<br/>from scratch for a<br/><em>mission-critical manufacturer</em>"
            tags={['0 to 1', 'B2B', 'Industrial', 'Data infrastructure']}
            lead={<>PrecisionSense GmbH managed <strong>3,000+ SKUs across four regulated industries</strong> using ERP exports, email threads, and Slack messages. One person spent half their working week keeping data coherent. I led the product definition and delivery of a custom PIM that replaced the entire manual stack.</>}
            metrics={[
                { value: '3,000+', label: 'SKUs managed' },
                { value: '−18 hrs', label: 'Manual work/week', highlight: true },
                { value: '−91%', label: 'Data update time' },
                { value: '4', label: 'Regulated industries' },
            ]}
            sections={[
                {
                    number: '01',
                    label: 'The client',
                    heading: 'PrecisionSense GmbH — <em>where a wrong spec is a legal liability</em>',
                    blocks: [
                        {
                            type: 'text',
                            content: (
                                <>
                                    <p className="cs-p">A fictional industrial sensor manufacturer based in Germany with 8-figure ARR. Their product portfolio spans 600 base products and 3,000+ SKUs, serving four highly regulated sectors: <strong>automotive EV battery monitoring, medical diagnostic equipment, renewable energy pitch control systems, and ruggedized aerospace sensors.</strong></p>
                                    <p className="cs-p">In each of these sectors, an incorrect technical specification is not a customer service problem — it is a legal and safety liability. The stakes around data accuracy were unusually high.</p>
                                </>
                            ),
                        },
                    ],
                },
                {
                    number: '02',
                    label: 'The situation',
                    heading: 'One person had become a <em>critical single point of failure</em>',
                    blocks: [
                        {
                            type: 'text',
                            content: (
                                <p className="cs-p">PrecisionSense relied on their ERP for transactional data: pricing, inventory, and orders. But ERP was never designed to carry descriptive technical data, compliance certifications, or marketing assets. The gap between what ERP could store and what customers actually needed had been filled entirely by manual human effort.</p>
                            ),
                        },
                        {
                            type: 'pain',
                            items: [
                                { value: '20 hrs', label: 'Manual overhead per week', desc: <>One person manually gathering data from ERP, email, and Slack to update product records. <strong>50% of a full-time role</strong> spent on data reconciliation.</> },
                                { value: '2–3 min', label: 'Per product update', desc: <>To identify, extract, and update a single product request — creating a queue backlog that <strong>grew faster than it could be cleared.</strong></> },
                                { value: '0', label: 'Audit trail', desc: <>No record of who changed what and when. In medical and aerospace contexts, this was a <strong>compliance exposure with real legal risk.</strong></> },
                                { value: '3,000+', label: 'SKUs in flat ERP tables', desc: <>Rigid ERP tables with no concept of parent-child relationships or attribute inheritance. <strong>Every variant was a separate manual record.</strong></> },
                            ],
                        },
                        {
                            type: 'quote',
                            content: '"The ERP knows what we sell and how much we have. It has no idea what the product actually is, what it does, or whether it is certified for use in a medical device."',
                        },
                        {
                            type: 'text',
                            content: (
                                <p className="cs-p">The deeper issue was that product data lived in three separate systems that never talked to each other: engineering data in a PLM system, transactional data in the ERP, and commercial data in spreadsheets and email. Every customer-facing output required someone to manually reconcile all three.</p>
                            ),
                        },
                    ],
                },
                {
                    number: '03',
                    label: 'Why custom',
                    heading: 'Three SaaS PIMs evaluated. <em>All three failed.</em>',
                    blocks: [
                        {
                            type: 'text',
                            content: (
                                <p className="cs-p">Before scoping a custom build, I evaluated three established SaaS PIM platforms. All three failed on requirements that were non-negotiable for PrecisionSense.</p>
                            ),
                        },
                        {
                            type: 'reasons',
                            items: [
                                { number: '01', title: 'Pricing at scale', desc: <>Standard SaaS PIMs charge per SKU. At 3,000+ SKUs with a roadmap to 10,000+, the <strong>annual licensing cost exceeded the custom build cost within 18 months.</strong> The client would have been paying more to use worse software.</> },
                                { number: '02', title: 'Workflow rigidity', desc: <>Compliance approval flows in medical and aerospace require custom logic: multi-tier sign-off, external partner review stages, and product-type-specific validation rules. <strong>No off-the-shelf tool supported this</strong> without expensive professional services.</> },
                                { number: '03', title: 'ERP integration depth', desc: <>The client ran a highly customized ERP instance. Standard connectors offered shallow, one-way sync. The business required <strong>real-time bidirectional data flow</strong> between ERP, PLM, and the new PIM. Only a custom API layer could deliver this.</> },
                                { number: '04', title: 'Data sovereignty', desc: <>Storing mission-critical technical specs and compliance documents on a third-party SaaS platform was <strong>not acceptable to the client&apos;s legal team.</strong> A self-hosted custom system gave them complete control over their IP.</> },
                            ],
                        },
                    ],
                },
                {
                    number: '04',
                    label: 'What we built',
                    heading: 'Five modules, one <em>source of truth</em>',
                    blocks: [
                        {
                            type: 'text',
                            content: (
                                <p className="cs-p">The architecture principle was deliberate: vanilla stack, minimal dependencies, fully exportable. When you are building for a team with no dedicated software operations function, the ongoing cost of complexity is real and ongoing. Simplicity has a business value that rarely appears in a feature comparison.</p>
                            ),
                        },
                        {
                            type: 'modules',
                            items: [
                                { title: 'ETL Onboarding Engine', desc: 'Ingests structured exports from ERP and Salesforce. Validates and maps fields, flags conflicts, and surfaces errors before committing. 3,000+ SKUs migrated in 3 days.' },
                                { title: 'Parent-Child Data Model', desc: 'Base products define shared attributes; variant SKUs inherit and override. A change to a parent propagates across all children. Eliminates the flat ERP table problem entirely.' },
                                { title: 'RBAC + Full Audit Trail', desc: 'Role-based access by product type and industry. Every field change logged with timestamp, user, approval status, and change delta. First compliance audit passed with zero findings.' },
                                { title: 'Technical Asset Management', desc: 'BOMs, certifications, CAD files, and compliance docs attached directly to the relevant SKU variant. Versioned, searchable, and tied to the audit trail.' },
                                { title: 'Multi-Channel Export', desc: 'B2B portal, e-commerce feed, print catalog, and structured export now all draw from a single source. No more manual reconciliation across outputs.' },
                            ],
                        },
                    ],
                },
                {
                    number: '05',
                    label: 'Before & after',
                    blocks: [
                        {
                            type: 'ba',
                            before: [
                                'Specs, certifications, and CAD files scattered across email and Slack',
                                'No audit trail — anyone with ERP access could change any field',
                                'ERP, PLM, and sales data siloed with no automated sync',
                                'Variant management in flat ERP tables with no inheritance',
                                '2-3 minutes per product record update, growing queue backlog',
                            ],
                            after: [
                                'All assets attached directly to the relevant SKU variant, versioned',
                                'Full audit trail with role-based approvals for regulated fields',
                                'Real-time bidirectional sync between ERP, PLM, and PIM',
                                'Parent-child model with attribute inheritance across the full SKU tree',
                                'Under 15 seconds to update a product record',
                            ],
                        },
                    ],
                },
                {
                    number: '06',
                    label: 'Outcomes',
                    blocks: [
                        {
                            type: 'outcomes',
                            items: [
                                { value: '−91%', label: 'Update time', desc: 'From 2-3 minutes per product record to under 15 seconds. Queue backlog cleared within the first week post-launch.' },
                                { value: '18 hrs', label: 'Recovered per week', desc: 'The role that spent 50% of its time on data reconciliation now spends less than 10% on oversight. The rest is reinvested in strategic work.' },
                                { value: '100%', label: 'Audit coverage', desc: 'Every field change is now logged with timestamp, user, and approval status. First compliance audit passed with zero findings on data integrity.' },
                                { value: '3 days', label: 'Migration time', desc: '3,000+ SKUs migrated from ERP and Salesforce via the ETL engine. Previous estimate for manual migration: 4-6 months.' },
                                { value: '0', label: 'Vendor dependency', desc: 'Self-hosted, fully exportable, no SaaS licensing. The client owns the system, the data, and the roadmap.' },
                                { value: '4', label: 'Channels synced', desc: 'B2B portal, e-commerce feed, print catalog, and structured export now all draw from a single source of truth.' },
                            ],
                        },
                    ],
                },
            ]}
            reflection={[
                {
                    number: '01',
                    content: <>The most important decision on this project was made before any code was written: <strong>choosing to build custom rather than configure off-the-shelf.</strong> That decision required a structured business case comparing 3-year TCO across options, not just a feature checklist. The custom build was cheaper at scale, more compliant by design, and ultimately more aligned with the client&apos;s risk profile than any SaaS alternative.</>,
                },
                {
                    number: '02',
                    content: <>The <strong>&quot;vanilla architecture&quot; principle</strong> was a product decision, not just a technical one. When you are building for a team that has no dedicated software operations function, the ongoing cost of complexity is real and ongoing. A system with fewer dependencies is easier to audit, easier to hand over, and easier to modify two years later when the original engineers are gone. Simplicity has a business value that rarely appears in a feature comparison.</>,
                },
                {
                    number: '03',
                    content: <>The hardest conversation on this project was telling the client that one of their three top-priority features needed to move to phase two. The compliance approval workflow had scope that would have pushed initial delivery by six weeks. <strong>Cutting it from v1 and shipping the core PIM on time</strong> — with a committed roadmap for the approval module — was the right call. The module shipped eight weeks later with better specification because we had real usage data to inform it by then.</>,
                },
            ]}
            nextProject={{ title: 'ColdGuard IoT Monitor', link: '/work/coldguard' }}
        />
    )
}
