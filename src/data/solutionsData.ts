export interface SolarSolution {
  id: string;
  slug: string;
  title: string;
  titleBn: string;
  category: "installation" | "systems" | "services" | "agriculture";
  shortDesc: string;
  shortDescBn: string;
  fullDesc: string;
  benefits: string[];
  keySpecs: { label: string; value: string }[];
  idealFor: string[];
  icon: string;
  image: string;
  features: string[];
}

export const SOLUTIONS_DATA: SolarSolution[] = [
  {
    id: "residential-solar",
    slug: "residential-solar",
    title: "Residential Rooftop Solar",
    titleBn: "আবাসিক ছাদ সোলার সিস্টেম",
    category: "installation",
    shortDesc: "Clean, silent, and bill-slashing rooftop solar systems tailored for independent homes, villas, and apartment buildings.",
    shortDescBn: "বাসাবাড়ি এবং অ্যাপার্টমেন্টের জন্য বিদ্যুৎ বিল কমানোর পরিবেশবান্ধব সোলার সিস্টেম।",
    fullDesc:
      "Transform your rooftop into a private clean power plant. MAP International Power designs residential solar systems that drastically reduce your monthly electricity bills while shielding your family from frequent grid load shedding and escalating tariff hikes. Available in On-Grid (with Net Metering) or Hybrid configurations with smart battery backup.",
    benefits: [
      "Slash electricity bills by 60% to 90%",
      "Protection from summer load-shedding and power outages",
      "Increases property value and thermal insulation of roofs",
      "Clean, silent, maintenance-free operation with 25-year panel performance"
    ],
    keySpecs: [
      { label: "Typical Capacity", value: "3 kWp – 20 kWp" },
      { label: "Daily Generation", value: "12 – 80+ Units (kWh/day)" },
      { label: "Roof Space Needed", value: "80 – 100 sq.ft per kWp" },
      { label: "Payback Period", value: "4 – 6 Years" }
    ],
    idealFor: [
      "Independent residential buildings & duplex homes",
      "Multi-story apartment building common areas",
      "Rural homesteads in Kurigram and Rangpur regions",
      "Urban residences across Dhaka and surrounding suburbs"
    ],
    icon: "Home",
    image: "/images/residential-solar-family.jpg",
    features: [
      "Tier-1 Mono PERC / TopCon High-efficiency PV modules",
      "Smart Mobile App for real-time solar generation tracking",
      "High-grade rust-resistant aluminum mounting structures",
      "Comprehensive lightning & surge protection included"
    ]
  },
  {
    id: "commercial-solar",
    slug: "commercial-solar",
    title: "Commercial Solar Solutions",
    titleBn: "বাণিজ্যিক সোলার সিস্টেম",
    category: "installation",
    shortDesc: "Cost-cutting solar energy systems for shopping complexes, corporate headquarters, hospitals, hotels, and schools.",
    shortDescBn: "মার্কেট, হাসপাতাল, হোটেল ও শিক্ষা প্রতিষ্ঠানের জন্য বিশেষ সাশ্রয়ী সোলার সিস্টেম।",
    fullDesc:
      "Electricity is often one of the highest operating expenses for commercial properties in Bangladesh. MAP International Power delivers commercial on-grid and hybrid solar installations engineered to offset daytime peak load, lower diesel generator fuel reliance, and demonstrate tangible corporate environmental leadership.",
    benefits: [
      "Offset expensive daytime commercial electricity tariffs",
      "Substantially reduce diesel generator operating and maintenance expenses",
      "Qualify for government green financing and tax benefits",
      "Enhanced corporate ESG profile and clean brand credentials"
    ],
    keySpecs: [
      { label: "Typical Capacity", value: "20 kWp – 250 kWp" },
      { label: "Daily Generation", value: "80 – 1,000+ Units (kWh/day)" },
      { label: "System Architecture", value: "3-Phase On-Grid / Hybrid" },
      { label: "Monitoring", value: "Cloud-based Smart Analytics" }
    ],
    idealFor: [
      "Hospitals, diagnostic clinics & healthcare facilities",
      "Shopping malls, corporate offices & retail complexes",
      "Private universities, colleges and technical schools",
      "Hotels, resorts and commercial cold chain warehouses"
    ],
    icon: "Building2",
    image: "/images/hero-engineer.jpg",
    features: [
      "Smart Multi-MPPT Commercial Inverters for maximum yield",
      "Zero-export capability during grid outages if required",
      "Custom structural engineering for concrete and tin-shed roofs",
      "Full BREB / DPDC / DESCO Net Metering coordination"
    ]
  },
  {
    id: "industrial-solar",
    slug: "industrial-solar",
    title: "Industrial Rooftop Solar",
    titleBn: "শিল্পকারখানার মেগা সোলার",
    category: "installation",
    shortDesc: "Heavy-duty MW-scale solar power solutions engineered for textile mills, factories, agro-industries, and manufacturing plants.",
    shortDescBn: "টেক্সটাইল, অটো-রাইস মিল, জুট মিল ও ভারী কারখানার মেগাওয়াট স্কেল সোলার সিস্টেম।",
    fullDesc:
      "With rising gas prices and industrial electricity rates, solar PV is an indispensable strategic asset for Bangladesh industries. We design, procure, and build high-efficiency industrial rooftop solar plants engineered for corrugated sheet, standing seam, or flat concrete roofs with minimal structural impact and zero downtime during installation.",
    benefits: [
      "Locks in ultra-low cost electricity for the next 25+ years",
      "Meets international apparel buyer sustainability and carbon reduction quotas",
      "Reduces reliance on expensive heavy fuel oil (HFO) and diesel captive generators",
      "High depreciation tax benefits and IDCOL green loan compatibility"
    ],
    keySpecs: [
      { label: "Typical Capacity", value: "100 kWp – 2,000 kWp+ (2 MWp)" },
      { label: "Inverter Type", value: "Central or Multi-String 50kW–125kW" },
      { label: "Grid Interface", value: "11 kV / 33 kV Medium Voltage Substation" },
      { label: "Performance Ratio", value: "> 78% PR Guaranteed" }
    ],
    idealFor: [
      "RMG and textile spinning, weaving & dyeing mills",
      "Rice mills, flour mills and food processing plants in Northern Bangladesh",
      "Cold storages and agricultural processing facilities",
      "Steel, cement, plastic and packaging factories"
    ],
    icon: "Factory",
    image: "/images/industrial-solar-facility.jpg",
    features: [
      "Class-A fire-rated Bifacial solar modules with up to 30% rear-side gain",
      "Walkways, safety lifelines, and automatic panel cleaning provisions",
      "SCADA monitoring and high-voltage substation synchronizing panels",
      "End-to-end EPC execution with full regulatory approvals"
    ]
  },
  {
    id: "on-grid-solar",
    slug: "on-grid-solar",
    title: "On-Grid Solar Systems",
    titleBn: "অন-গ্রিড সোলার সিস্টেম",
    category: "systems",
    shortDesc: "Directly connected to the national utility grid without expensive batteries. Delivers the lowest cost per unit and fastest financial payback.",
    shortDescBn: "ব্যাটারিমুক্ত সরাসরি গ্রিড সংযুক্ত সিস্টেম। সবচেয়ে কম খরচ ও দ্রুততম লাভ।",
    fullDesc:
      "On-grid (grid-tied) solar systems are the most popular and cost-effective solar solution worldwide. The solar energy generated during the daytime is immediately consumed by your appliances. Surplus electricity is exported directly into the grid, turning your meter backwards under the national Net Metering guidelines.",
    benefits: [
      "No battery replacement cost—lowest upfront capital investment",
      "Fastest return on investment (usually 3.5 to 5 years)",
      "Zero maintenance aside from periodic panel dusting",
      "100% automated synchronization with national utility power"
    ],
    keySpecs: [
      { label: "Battery Required?", value: "None (Zero Battery Cost)" },
      { label: "Efficiency", value: "Up to 98.6% Inverter Conversion" },
      { label: "Grid Standard", value: "Compliant with Bangladesh Grid Code" },
      { label: "Payback", value: "3.5 – 5 Years" }
    ],
    idealFor: [
      "Any building with an existing reliable utility connection (BREB, BPDB, DESCO, DPDC)",
      "Commercial buildings and offices operating predominantly during daylight hours",
      "Industries seeking to dramatically lower their power tariffs"
    ],
    icon: "Zap",
    image: "/images/hero-engineer.jpg",
    features: [
      "Pure sine-wave transformerless string inverters with high MTBF",
      "Anti-islanding safety protection disconnecting within milliseconds during grid failure",
      "Bi-directional digital energy meter compatibility",
      "25-year linear performance warranty on solar panels"
    ]
  },
  {
    id: "off-grid-solar",
    slug: "off-grid-solar",
    title: "Off-Grid & Hybrid Solar Systems",
    titleBn: "অফ-গ্রিড ও হাইব্রিড সোলার সিস্টেম",
    category: "systems",
    shortDesc: "Complete energy independence with intelligent battery storage for 24/7 power, even in remote areas without a reliable grid.",
    shortDescBn: "২৪ ঘণ্টা নিরবচ্ছিন্ন বিদ্যুৎ ও ব্যাটারি ব্যাকআপ সমৃদ্ধ সম্পূর্ণ স্বয়ংসম্পূর্ণ সিস্টেম।",
    fullDesc:
      "Off-grid and Hybrid solar systems generate electricity during the day and store extra energy in advanced LiFePO4 Lithium or Tubular Gel batteries for evening and night use. Perfect for rural regions in Kurigram, river char lands, communication towers, poultry farms, and homes requiring 100% uninterrupted power.",
    benefits: [
      "Total independence from load shedding and grid blackouts",
      "Continuous 24-hour electricity for lights, fans, computers, refrigerators, and medical devices",
      "Ideal for char areas and remote rural locations in Rangpur & Kurigram",
      "Smart generator auto-start function for emergency deep backup"
    ],
    keySpecs: [
      { label: "Battery Chemistry", value: "LiFePO4 Lithium / Tubular Deep-Cycle" },
      { label: "Autonomy", value: "1 to 3 Days of Rainy-Day Storage" },
      { label: "Transfer Time", value: "< 10ms (Zero Computer Reboot)" },
      { label: "Battery Life", value: "Up to 10–15 Years (Lithium)" }
    ],
    idealFor: [
      "Homes and farmhouses in Kurigram, Chilmari, and Northern Char areas",
      "Agro-farms, poultry hatcheries, and dairy cooling setups",
      "Remote telecom base stations, petrol pumps, and highway stations",
      "Clinics and pathology centers requiring guaranteed uninterrupted power"
    ],
    icon: "BatteryCharging",
    image: "/images/solar-inverter-technician.jpg",
    features: [
      "Advanced Hybrid MPPT Inverters capable of mixing Solar, Battery, Grid, and Generator",
      "Safe, non-toxic Lithium Iron Phosphate (LiFePO4) battery packs with integrated BMS",
      "Automatic switchover without voltage drops or appliance flicker",
      "Modular expandability to add more batteries as your power needs grow"
    ]
  },
  {
    id: "net-metering",
    slug: "net-metering",
    title: "Net Metering Solutions",
    titleBn: "নেট মিটারিং সুবিধা ও সমাধান",
    category: "systems",
    shortDesc: "Sell your surplus solar power back to the national electricity grid and offset your bill under Bangladesh government net-metering regulations.",
    shortDescBn: "উদ্বৃত্ত বিদ্যুৎ সরকারি গ্রিডে বিক্রি করে মাসিক বিদ্যুৎ বিল শূন্যে নামিয়ে আনুন।",
    fullDesc:
      "Under the Net Energy Metering Guidelines formulated by the Power Division of Bangladesh, commercial, industrial, and 3-phase residential consumers can feed excess solar energy directly into the distribution grid. Your bi-directional meter records units imported vs exported, and you only pay the net difference or carry over surplus energy credits!",
    benefits: [
      "Earn credit for every single unit (kWh) of excess solar power exported",
      "Eliminates the cost of battery replacements while preserving full solar benefits",
      "Fully compliant with SREDA and Bangladesh Power Development Board policies",
      "MAP handles 100% of the technical documentation, testing, and utility approvals"
    ],
    keySpecs: [
      { label: "Regulatory Body", value: "Power Division, SREDA, BERC" },
      { label: "Eligible Utilities", value: "BREB / BPDB / DESCO / DPDC / WZPDCL / NESCO" },
      { label: "Metering Type", value: "Bi-directional Net Energy Meter" },
      { label: "Sanctioned Load Rule", value: "Up to 70% of Sanctioned Load" }
    ],
    idealFor: [
      "3-Phase Residential buildings with authorized loads",
      "Educational institutions, madrashas, schools and colleges",
      "Commercial establishments and corporate offices",
      "Industrial consumers seeking utility bill optimization"
    ],
    icon: "ArrowLeftRight",
    image: "/images/hero-engineer.jpg",
    features: [
      "Complete Net Metering feasibility study and grid interconnection audit",
      "Preparation of single-line diagrams (SLD) and technical protection schedules",
      "Liaison with local Palli Bidyut Samiti (PBS) or utility engineers for meter testing",
      "Commissioning of certified Class 0.5S or 0.2S bi-directional net meters"
    ]
  },
  {
    id: "solar-power-plant",
    slug: "solar-power-plant",
    title: "Solar Power Plants",
    titleBn: "গ্রাউন্ড-মাউন্টেড সোলার বিদ্যুৎ কেন্দ্র",
    category: "systems",
    shortDesc: "Turnkey utility-scale and ground-mounted solar power plants engineered for high energy yields, grid stability, and maximum uptime.",
    shortDescBn: "গ্রাউন্ড মাউন্টেড বড় পরিসরের সোলার পাওয়ার প্ল্যান্ট ডিজাইন ও নির্মাণ।",
    fullDesc:
      "MAP International Power provides full engineering, procurement, and construction (EPC) services for ground-mounted solar power plants, captive micro-grids, and decentralized rural utility arrays across Bangladesh. Our engineering team brings rigorous civil, mechanical, and high-voltage electrical expertise to every phase.",
    benefits: [
      "Maximizes unutilized barren lands, pond banks, and industrial expanses",
      "High yield per acre utilizing optimized seasonal tilt structures",
      "Reliable captive green power for large industrial clusters",
      "Long-term 25-year revenue generation or captive self-consumption"
    ],
    keySpecs: [
      { label: "Plant Scale", value: "250 kWp to 10 MWp+" },
      { label: "Mounting Style", value: "Piled Ground-Mount / Fixed Tilt / Seasonal Tilt" },
      { label: "Transformer Output", value: "11 kV / 33 kV Grid Interconnection" },
      { label: "Expected Life", value: "25 – 30 Years" }
    ],
    idealFor: [
      "Agro-industrial parks, economic zones, and export processing zones",
      "Large-scale poultry, dairy, and livestock farming complexes",
      "River bank and rural non-agricultural land development",
      "Private commercial solar power developers and IPPs"
    ],
    icon: "SunMedium",
    image: "/images/industrial-solar-facility.jpg",
    features: [
      "Geotechnical soil investigation, pull-out tests, and piling design",
      "String-level SCADA real-time monitoring with weather station (pyranometer)",
      "High-voltage HT switchgear, VCB, and lightning protection masts",
      "Comprehensive perimeter fencing and CCTV security integration"
    ]
  },
  {
    id: "solar-pump",
    slug: "solar-pump",
    title: "Solar Irrigation Pumps",
    titleBn: "সোলার সেচ পাম্প সিস্টেম",
    category: "agriculture",
    shortDesc: "Dependable, zero-fuel solar pumping solutions for irrigation, livestock, fisheries, and rural community water supply in Bangladesh.",
    shortDescBn: "ডিজেল খরচমুক্ত কৃষি সেচ, মাছের ঘের ও খামারের নির্ভরযোগ্য সোলার পাম্প।",
    fullDesc:
      "Agriculture is the lifeblood of Kurigram, Rangpur, and northern Bangladesh. Escalating diesel fuel prices and unreliable rural power lines create severe challenges during boro paddy irrigation seasons. MAP Solar Irrigation Pumps eliminate diesel costs completely, delivering dependable, daylight-synchronized water flow directly from your tubewell or surface water source.",
    benefits: [
      "Zero diesel fuel cost—saves tens of thousands of Taka every irrigation season",
      "Runs completely automatically as soon as the sun rises in the morning",
      "Eliminates engine smoke, vibration, engine oil changes, and frequent belt breaks",
      "Increases crop yield by ensuring reliable, timely watering of crops"
    ],
    keySpecs: [
      { label: "Pump Capacity", value: "2 HP, 3 HP, 5 HP, 7.5 HP, 10 HP to 15 HP" },
      { label: "Water Discharge", value: "150,000 to 500,000+ Liters per Day" },
      { label: "Motor Type", value: "Brushless DC (BLDC) or High-Efficiency 3-Phase AC" },
      { label: "Controller", value: "Smart MPPT Solar Pump Inverter with Dry-Run Protection" }
    ],
    idealFor: [
      "Boro paddy, maize, wheat, and vegetable cultivation in Kurigram & Rangpur",
      "Fish hatcheries, fisheries, and commercial aquaculture aeration",
      "Dairy and livestock farms requiring continuous clean drinking water",
      "Community drinking water supply projects and rural NGO initiatives"
    ],
    icon: "Droplets",
    image: "/images/solar-pump-farmers.jpg",
    features: [
      "Stainless steel (SS 304/316) submersible water pump assemblies",
      "Integrated smart dry-run protection to prevent motor burnouts",
      "Anti-theft tamper-proof panel mounting screws for open field security",
      "VFD controller with soft start to prevent mechanical shock to pipes"
    ]
  },
  {
    id: "maintenance-servicing",
    slug: "maintenance-servicing",
    title: "Solar Maintenance & Servicing",
    titleBn: "সোলার রক্ষণাবেক্ষণ ও টেকনিক্যাল সার্ভিসিং",
    category: "services",
    shortDesc: "Preventive health checks, panel cleaning, inverter diagnostics, string testing, and emergency restoration across Bangladesh.",
    shortDescBn: "সোলার প্যানেল পরিষ্কার, ইনভার্টার মেরামত ও দীর্ঘস্থায়ী পারফরম্যান্সের সার্ভিসিং।",
    fullDesc:
      "Dust accumulation, loose electrical terminations, damaged bypass diodes, and inverter faults can reduce solar energy production by up to 25% or more. MAP International Power provides dedicated technical servicing, Annual Maintenance Contracts (AMC), and emergency repair teams stationed in Kurigram and Dhaka.",
    benefits: [
      "Restores 15% to 30% lost power generation through scientific de-soiling",
      "Thermal imaging detects hot spots and microcracks before fire hazards arise",
      "Ensures inverter firmware updates, torque checks, and string balance",
      "Extends the operational lifespan of your expensive solar assets"
    ],
    keySpecs: [
      { label: "Service Turnaround", value: "Within 24–48 Hours for Service Areas" },
      { label: "Diagnostic Tools", value: "Infrared Thermal Camera, I-V Curve Tracer" },
      { label: "Coverage", value: "Kurigram, Rangpur Division, Dhaka & Serviceable Areas" },
      { label: "AMC Packages", value: "Quarterly, Bi-Annual & Custom Enterprise" }
    ],
    idealFor: [
      "Existing solar installations with degraded generation or inverter warning codes",
      "Industrial factories requiring certified electrical safety audits for buyers",
      "Solar irrigation pump owners needing seasonal pre-harvest inspection",
      "Commercial clients seeking guaranteed Annual Maintenance Contracts (AMC)"
    ],
    icon: "Wrench",
    image: "/images/solar-inverter-technician.jpg",
    features: [
      "De-mineralized water cleaning with soft rotational solar brushes",
      "Insulation resistance (Megger test) and earthing resistance measurements",
      "Spare parts inventory (fuses, surge protectors, connectors, replacement cards)",
      "Detailed health audit report with generation yield optimization recommendations"
    ]
  }
];
