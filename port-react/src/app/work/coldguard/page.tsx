'use client'

import React from 'react'
import CaseStudyDetail from '@/components/CaseStudyDetail'

export default function ColdGuardPage() {
    return (
        <CaseStudyDetail
            number="09"
            subtitle="IoT · Operations"
            title="Turning a cold chain<br/>from a liability into<br/><em>a monitored asset</em>"
            tags={['0 to 1', 'B2C App', 'IoT', 'Compliance']}
            lead={<>Priya Foods managed <strong>₹42 lakhs of perishable stock</strong> using manual temperature logs and a generator that took 15 minutes to start. Two incidents in 18 months cost them ₹8.9 lakhs. I led the product definition of ColdGuard — an IoT system that cut failure response time from minutes to seconds.</>}
            metrics={[
                { value: '₹21L+', label: 'Annual loss before', highlight: true },
                { value: '< 90s', label: 'Alert to technician' },
                { value: '0', label: 'Manual log entries' },
                { value: '7', label: 'Units monitored 24/7' },
            ]}
            sections={[
                {
                    number: '01',
                    label: 'The client',
                    heading: 'Priya Foods Distribution <em>Pvt. Ltd.</em>',
                    blocks: [
                        {
                            type: 'text',
                            content: (
                                <>
                                    <p className="cs-p">A fictional regional distributor of meat, poultry, seafood, and frozen processed foods based in Madurai, Tamil Nadu. They supply 140+ hotels, supermarkets, and restaurants across southern Tamil Nadu from a 1,200 m² warehouse operating 24 hours a day.</p>
                                    <p className="cs-p">At any given time, approximately <strong>₹42 lakhs of perishable stock</strong> sits across 4 refrigerated rooms (2°C–8°C) and 2 deep freezers (−18°C to −22°C). Every degree of temperature exceedance is a direct financial risk. The margin between &quot;safe&quot; and &quot;condemned&quot; is measured in minutes, not hours.</p>
                                </>
                            ),
                        },
                    ],
                },
                {
                    number: '02',
                    label: 'The situation',
                    heading: 'Three assumptions that were <em>quietly failing</em>',
                    blocks: [
                        {
                            type: 'text',
                            content: (
                                <p className="cs-p">Cold chain operations are unforgiving. A refrigeration failure at 2 AM that goes undetected until the morning inspection is not a minor inconvenience — it is stock destruction. Priya Foods had built their operations around three assumptions: that someone would notice a failure quickly, that two temperature logs a day was enough for compliance, and that staff awareness alone would keep doors properly sealed.</p>
                            ),
                        },
                        {
                            type: 'pain',
                            items: [
                                { value: '8–15 min', label: 'Power recovery time', desc: <>From grid failure to generator running — someone had to notice, walk to the generator room, and start it manually. <strong>Deep freezers begin losing product integrity after 20 minutes.</strong></> },
                                { value: '2×/day', label: 'Compliance log frequency', desc: <>Temperature recorded manually at 6 AM and 6 PM. Everything between those readings was <strong>invisible to the operations team and to FSSAI on audit.</strong></> },
                                { value: '2 in 18mo', label: 'Confirmed major incidents', desc: <>One night-shift power failure undetected for 40 minutes. One silent compressor failure caught only at morning inspection. <strong>Combined loss: ₹8.9 lakhs in condemned stock.</strong></> },
                                { value: '~15/mo', label: 'Door-ajar events', desc: <>Estimated from post-incident analysis. Several ran 2–3 hours during night shift. A 2 cm gap on a refrigerated room door raises internal temperature <strong>~1°C every 8–10 minutes.</strong></> },
                            ],
                        },
                        {
                            type: 'quote',
                            content: '"We knew something had gone wrong when the morning shift arrived. By then the damage was already done. There was no way to know sooner."',
                        },
                        {
                            type: 'text',
                            content: (
                                <>
                                    <p className="cs-p">The real issue was that the operation had no continuous signal. Temperature data existed in a notebook twice a day. A power failure was only detectable if someone happened to notice the lights go out. The cold chain — the single most critical thing keeping the business running — was effectively unmonitored between manual checks.</p>
                                    <p className="cs-p">Total annual loss before ColdGuard was estimated at <strong>₹21+ lakhs</strong> across power events, door incidents, compliance admin, and penalty risk — modelled from degradation curves at Tamil Nadu ambient conditions (~30°C outside), with ₹10,000–₹12,000 loss per minute in a full deep-freeze failure.</p>
                                </>
                            ),
                        },
                    ],
                },
                {
                    number: '03',
                    label: 'The solution',
                    heading: 'Close every gap in the <em>continuous signal</em>',
                    blocks: [
                        {
                            type: 'text',
                            content: (
                                <>
                                    <p className="cs-p">ColdGuard is an IoT monitoring and alerting system built in partnership with NexSense IoT Solutions, a Chennai-based industrial IoT integrator. It monitors temperature, humidity, door seal status, and three-phase power on every unit, every 60 seconds, and gets an alert to the on-duty technician&apos;s phone <strong>within 90 seconds of a sustained breach.</strong></p>
                                    <p className="cs-p">The thinking behind it was simple: close every gap in the continuous signal. If the data is there, the problem gets caught before it becomes a loss event. The alert, the response, and the FSSAI log are all just downstream of having reliable data flowing without interruption.</p>
                                </>
                            ),
                        },
                        {
                            type: 'steps',
                            items: [
                                { title: 'Automatic Transfer Switch (ATS)', desc: <>The Socomec ATYS G replaces the manual transfer switch. On grid failure, it switches to generator power in <strong>under 200 milliseconds</strong>, before a compressor even has time to register a loss. The 8–15 minute manual recovery window is gone.</> },
                                { title: 'Continuous sensor monitoring', desc: <>ESP32 microcontrollers paired with Sensirion SHT40 sensors (±0.2°C accuracy) and magnetic door contact sensors on every unit. One reading per minute, every minute, streamed via MQTT to the cloud. <strong>1,440 data points per unit per day</strong> instead of 2.</> },
                                { title: '10-minute rule alert engine', desc: <>Alerts don&apos;t fire on a single out-of-range reading — that would create noise during normal loading. The engine fires only when temperature stays above threshold <strong>continuously</strong>. Configurable per unit: 10 minutes for refrigerated rooms, 5 for freezers, 3 for the blast chiller.</> },
                                { title: 'FSSAI compliance, automated', desc: <>The daily report now generates automatically at midnight and is delivered to the authority at 00:05 AM. The compliance officer&apos;s <strong>4 hours per week on log management: zero.</strong></> },
                            ],
                        },
                    ],
                },
                {
                    number: '04',
                    label: 'Tech stack',
                    heading: 'Every layer chosen for an <em>operational reason</em>',
                    blocks: [
                        {
                            type: 'text',
                            content: <p className="cs-p">Not familiarity or preference. Each component earns its place against a specific requirement.</p>,
                        },
                        {
                            type: 'table',
                            headers: ['Layer', 'Technology', 'Why this choice'],
                            rows: [
                                ['Sensor node', 'ESP32 + Sensirion SHT40', 'Industrial-grade MCU with built-in Wi-Fi. ±0.2°C accuracy exceeds FSSAI requirement. ~₹500/unit, runs for years. Honeywell 5816WMWH magnetic contact on each door.'],
                                ['Power monitoring', 'PZEM-004T v3.0', 'Monitors all three phases. Detects voltage drop before the compressor trips, giving the ATS context and flagging power events for the alert engine.'],
                                ['Edge gateway', 'Raspberry Pi 4B + Mosquitto', 'Runs locally on a UPS. If internet goes down, gateway keeps logging locally and buffers 24 hours of data. Alerts fire locally too — system doesn\'t depend on cloud to protect stock.'],
                                ['Sensor → cloud', 'MQTT → AWS IoT Core', 'ISO-standard IoT protocol. Lightweight, low-latency, handles hundreds of concurrent sensor streams. AWS IoT Core manages device certificates and scales without infrastructure management.'],
                                ['Database', 'TimescaleDB', 'Sensor data is time-series by nature. Auto-partitions by time chunk, so a query for "last 24 hours on Unit 05" scans one chunk instead of millions of rows. ~90% compression on older data.'],
                                ['Alert engine', 'Python on AWS Lambda', 'Stateless, runs on every incoming reading. Implements the 10-minute rule. Calls Firebase Cloud Messaging for push notifications.'],
                                ['App + dashboard', 'React Native + React.js', 'Single codebase for iOS and Android. Technician app focused on alert response. Web dashboard for operations manager: live heatmap, trend charts, monthly compliance view.'],
                            ],
                        },
                        {
                            type: 'text',
                            content: <h3 className="cs-h3">Architecture</h3>,
                        },
                        {
                            type: 'arch',
                            layers: [
                                {
                                    label: 'Hardware',
                                    items: [
                                        <><strong>ESP32</strong> sensor nodes ×7</>,
                                        <><strong>Sensirion SHT40</strong> temp/humidity</>,
                                        <><strong>Door contact</strong> sensors ×7</>,
                                        <><strong>PZEM-004T</strong> power monitor</>,
                                        <><strong>Socomec ATYS G</strong> (ATS)</>,
                                    ],
                                },
                                {
                                    label: 'Edge',
                                    items: [
                                        <><strong>Raspberry Pi 4B</strong> gateway</>,
                                        <><strong>Mosquitto</strong> MQTT broker</>,
                                        <><strong>SQLite</strong> local buffer (24h)</>,
                                        <>UPS-backed power</>,
                                        <>Local alert logic</>,
                                    ],
                                },
                                {
                                    label: 'Cloud',
                                    items: [
                                        <><strong>AWS IoT Core</strong></>,
                                        <><strong>AWS SQS</strong> message queue</>,
                                        <><strong>Lambda</strong> ingestion + alerts</>,
                                        <><strong>TimescaleDB</strong> hypertable</>,
                                        <><strong>FastAPI</strong> backend</>,
                                    ],
                                },
                                {
                                    label: 'Delivery',
                                    items: [
                                        <><strong>FCM</strong> push notifications</>,
                                        <><strong>AWS SES</strong> email alerts</>,
                                        <><strong>React Native</strong> mobile app</>,
                                        <><strong>React.js</strong> web dashboard</>,
                                        <>FSSAI PDF at 00:05 AM</>,
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'text',
                            content: (
                                <>
                                    <h3 className="cs-h3">Database logic</h3>
                                    <p className="cs-p">One reading per minute across 7 units: 10,080 rows a day, 3.7 million a year. TimescaleDB handles this through automatic time-based partitioning — the application just writes and reads ordinary SQL.</p>
                                </>
                            ),
                        },
                        {
                            type: 'code',
                            code: (
                                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', lineHeight: '1.75' }}>
                                    {`-- Core sensor readings table, converted to a TimescaleDB hypertable
CREATE TABLE sensor_readings (
  time          TIMESTAMPTZ    NOT NULL,
  unit_code     VARCHAR(10)    NOT NULL,
  temp_c        NUMERIC(5,2)   NOT NULL,
  humidity_pct  NUMERIC(5,2),
  door_open     BOOLEAN        DEFAULT false,
  power_on      BOOLEAN        DEFAULT true,
  voltage_v     NUMERIC(6,2),
  PRIMARY KEY (time, unit_code)
);

-- Partition by 7-day time chunks
SELECT create_hypertable('sensor_readings', 'time',
  chunk_time_interval => INTERVAL '7 days');

-- Compress chunks older than 30 days (~90% storage reduction)
SELECT add_compression_policy('sensor_readings', INTERVAL '30 days');

-- FSSAI daily compliance — was each unit in range all day?
SELECT unit_code,
  MIN(temp_c) AS min_temp,
  MAX(temp_c) AS max_temp,
  ROUND(100.0 * COUNT(*) FILTER (
    WHERE temp_c BETWEEN su.temp_min_c AND su.temp_max_c
  ) / COUNT(*), 1) AS compliance_pct
FROM sensor_readings sr
JOIN storage_units su USING (unit_code)
WHERE DATE(time) = CURRENT_DATE - 1
GROUP BY unit_code, su.temp_min_c, su.temp_max_c;`}
                                </span>
                            ),
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
                                'Temperature logged twice a day in a notebook',
                                'Power failure: 8–15 minutes to generator, manually',
                                'Door-ajar events undetectable unless someone walked past',
                                'FSSAI report: weekly manual data entry, monthly email',
                                'Compliance officer spends 4 hrs/week on log management',
                                'Stock loss events confirmed: 2 in 18 months, ₹8.9 lakhs',
                            ],
                            after: [
                                '1,440 automated readings per unit per day',
                                'Power failure: ATS switches to generator in <200ms',
                                'Door open 5+ continuous minutes → push alert fires immediately',
                                'FSSAI report generated automatically, delivered 00:05 AM',
                                'Compliance officer log management time: zero',
                                'Zero stock loss events in 12 months post-deployment',
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
                                { value: '₹23.8L', label: 'Annual saving', desc: 'Across prevented stock loss, door incidents caught early, power events neutralised by ATS, and compliance admin time recovered.' },
                                { value: '3 mo', label: 'Payback period', desc: 'Total system cost including hardware, installation, and first year of cloud infrastructure: ₹5.6 lakhs. Recovered in under one quarter.' },
                                { value: '720×', label: 'More data points/day', desc: 'From 2 manual readings per unit to 1,440 automated readings. Every minute of every day is now in the compliance record.' },
                                { value: '<200ms', label: 'Power recovery', desc: 'ATS switches grid to generator before most compressors register a voltage drop. The 8–15 minute manual window is eliminated entirely.' },
                                { value: '0 hrs', label: 'Manual compliance work', desc: 'The compliance officer\'s 4 hours per week on log management, data entry, and FSSAI report preparation is fully automated.' },
                                { value: '4.2 min', label: 'Avg alert response', desc: 'From breach detection to technician acknowledgement. Previously unmeasurable — there was no alert system at all.' },
                            ],
                        },
                    ],
                },
                {
                    number: '07',
                    label: 'What went wrong',
                    heading: 'Building on hardware means the <em>real world pushes back</em>',
                    blocks: [
                        {
                            type: 'steps',
                            items: [
                                { title: 'Dirty and missing sensor data', desc: 'Sensors occasionally sent malformed payloads: truncated JSON, null temperature values, or wrong timestamps. We had to build a validation layer that flagged bad readings, stored them separately with a quality marker, and excluded them from compliance calculations without dropping them entirely. They still needed to exist for audit purposes.' },
                                { title: 'Sensors going offline mid-operation', desc: 'A few ESP32 units lost Wi-Fi connectivity intermittently during peak afternoon heat. A gap in readings looked exactly like a damaged or switched-off sensor. We had to distinguish "sensor is offline" from "sensor is reading something it shouldn\'t" — one is a maintenance issue, the other is an emergency. We added a heartbeat check separate from temperature readings.' },
                                { title: 'Secure transmission was harder than expected', desc: 'Getting data securely to AWS IoT Core required device certificates, mutual TLS, and a proper certificate rotation process. Every physical device needed its own certificate — and if one expired silently, the unit would stop reporting with no obvious error. We had to build certificate expiry monitoring into the system, which wasn\'t in the original spec.' },
                                { title: 'Query performance at scale', desc: 'Once we had a few months of data across 7 units, some dashboard queries started slowing noticeably — especially trend charts scanning large time ranges. TimescaleDB\'s chunking solved most of it, but we also had to add a pre-aggregated hourly rollup table so the 30-day chart wasn\'t recalculating from raw readings on every page load.' },
                            ],
                        },
                    ],
                },
            ]}
            reflection={[
                {
                    number: '01',
                    content: <>The most important product decision happened before any requirement was written. We had to agree on what <strong>&quot;failure&quot; actually meant.</strong> The client came in wanting to monitor temperature. What they really needed was to close every gap in the continuous signal. That reframe changed the scope significantly — and brought power monitoring and ATS integration in from day one rather than as an afterthought.</>,
                },
                {
                    number: '02',
                    content: <>The <strong>10-minute alert rule</strong> is a good example of where product thinking and technical thinking had to be in the same room. A simple implementation fires an alert the moment temperature crosses a threshold. In practice, that creates constant noise every time someone opens a door during loading, and the technician stops paying attention within a week. Getting the rule right meant understanding what actually happens on the floor, not just what the data model looks like.</>,
                },
                {
                    number: '03',
                    content: <>The local resilience architecture was the hardest sell. Running alert logic on the edge gateway added complexity and cost. But the alternative was a system that could fail to protect stock at the exact moment the internet went down during a power event — which is precisely when it was needed most. <strong>Some technical decisions are really trust decisions.</strong> If the people relying on a system don&apos;t believe it will work when things go wrong, they won&apos;t rely on it when things go right either.</>,
                },
            ]}
            nextProject={{ title: 'Omega-3 Platform Strategy', link: '/work/mamaglow' }}
        />
    )
}
