export interface SolarProduct {
  id: string;
  name: string;
  category: "panels" | "inverters" | "batteries" | "pumps" | "accessories";
  model: string;
  manufacturer: string;
  shortDesc: string;
  specs: { label: string; value: string }[];
  warranty: string;
  badge?: string;
  image: string;
}

export const PRODUCTS_DATA: SolarProduct[] = [
  {
    id: "panel-topcon-585w",
    name: "Tier-1 N-Type TopCon Monocrystalline Solar Panel (585W)",
    category: "panels",
    model: "MAP-TP585-N",
    manufacturer: "Tier-1 Global Partner (Bloomberg Tier-1 Certified)",
    shortDesc: "Next-generation N-Type TopCon technology with 22.8% module efficiency, superior low-light performance, and lower temperature coefficient.",
    specs: [
      { label: "Rated Maximum Power (Pmax)", value: "585 Wp" },
      { label: "Module Efficiency", value: "22.8%" },
      { label: "Cell Type", value: "N-Type Monocrystalline 16BB" },
      { label: "Open Circuit Voltage (Voc)", value: "51.8 V" },
      { label: "Short Circuit Current (Isc)", value: "14.35 A" },
      { label: "Dimensions", value: "2278 x 1134 x 30 mm" },
      { label: "Front Glass", value: "3.2mm Anti-Reflective Tempered Glass" },
      { label: "Junction Box", value: "IP68 with 3 Bypass Diodes" }
    ],
    warranty: "12-Year Product Workmanship Warranty | 25-Year Linear Power Warranty (>84.8%)",
    badge: "Top Efficiency",
    image: "/images/products/topcon-panel.jpg"
  },
  {
    id: "panel-bifacial-600w",
    name: "Dual-Glass Bifacial High-Power Solar Panel (600W)",
    category: "panels",
    model: "MAP-BF600-DG",
    manufacturer: "Tier-1 Industrial Partner",
    shortDesc: "Bifacial glass-glass design generating up to 25% additional power from reflected sunlight (albedo) off rooftop or ground surfaces.",
    specs: [
      { label: "Front Power Rating", value: "600 Wp" },
      { label: "Bifaciality Factor", value: "70% ± 5%" },
      { label: "Total Yield Potential", value: "Up to 720 Wp with Ground Albedo" },
      { label: "Glass Construction", value: "2.0mm + 2.0mm Dual Heat-Strengthened Glass" },
      { label: "Degradation Rate", value: "< 0.45% Annual Linear" },
      { label: "Mechanical Load", value: "5400 Pa Snow / 2400 Pa Wind" }
    ],
    warranty: "15-Year Product Warranty | 30-Year Bifacial Linear Output Warranty",
    badge: "Industrial Grade",
    image: "/images/products/bifacial-panel.jpg"
  },
  {
    id: "inverter-ongrid-10kw",
    name: "Three-Phase On-Grid String Solar Inverter (10kW - 25kW)",
    category: "inverters",
    model: "MAP-GT-10K/25K-3P",
    manufacturer: "MAP Certified Power Electronics",
    shortDesc: "High-yield 3-phase grid-tied string inverter engineered specifically for Bangladesh grid voltages and temperature fluctuations with dual MPPTs.",
    specs: [
      { label: "Rated AC Output Power", value: "10,000 W / 25,000 W" },
      { label: "Max Efficiency", value: "98.6% (Euro Efficiency 98.1%)" },
      { label: "MPPT Trackers", value: "2 Independent High-Voltage MPPTs" },
      { label: "MPPT Voltage Range", value: "160 V – 1000 V DC" },
      { label: "AC Nominal Voltage", value: "3L+N+PE, 400V / 230V, 50Hz" },
      { label: "Protection Rating", value: "IP66 Water & Dust Resistant" },
      { label: "Cooling", value: "Natural Fanless Convection (Whisper Quiet)" },
      { label: "Connectivity", value: "Wi-Fi + RS485 Cloud Mobile App" }
    ],
    warranty: "5-Year Standard Replacement Warranty (Extendable to 10 Years)",
    badge: "Net Metering Ready",
    image: "/images/products/string-inverter.jpg"
  },
  {
    id: "inverter-hybrid-5kw",
    name: "Smart Single-Phase Hybrid Solar Inverter (5kW / 48V)",
    category: "inverters",
    model: "MAP-HYB-5048-PRO",
    manufacturer: "MAP Energy Systems",
    shortDesc: "Intelligent hybrid inverter supporting simultaneous solar generation, lithium battery charging, grid interaction, and automatic generator start.",
    specs: [
      { label: "Rated Power", value: "5,000 W Continuous (10,000 W Peak Surge)" },
      { label: "Battery Voltage", value: "48 VDC (Compatible with Lithium & Lead-Acid)" },
      { label: "MPPT Input", value: "120 V – 450 V DC, Max 6,000W PV Input" },
      { label: "Transfer Time", value: "< 10 ms (UPS Class Seamless Transition)" },
      { label: "LCD Screen", value: "Color Touch Display with Real-Time Power Flow" },
      { label: "Parallel Capability", value: "Up to 6 units parallelable for 30kW capacity" }
    ],
    warranty: "3-Year Comprehensive Warranty with Local Technical Service Support",
    badge: "Best Seller",
    image: "/images/products/string-inverter.jpg"
  },
  {
    id: "battery-lithium-100ah",
    name: "LiFePO4 Lithium Iron Phosphate Rack Battery (48V / 100Ah - 5.12 kWh)",
    category: "batteries",
    model: "MAP-LIFEPO4-5120",
    manufacturer: "MAP Energy Storage Division",
    shortDesc: "Ultra-safe Lithium Iron Phosphate (LiFePO4) rack-mounted energy storage module with built-in intelligent Battery Management System (BMS).",
    specs: [
      { label: "Nominal Voltage & Capacity", value: "51.2 V / 100 Ah" },
      { label: "Total Energy Capacity", value: "5.12 kWh per Module" },
      { label: "Usable Depth of Discharge", value: "90% DoD" },
      { label: "Cycle Life", value: "> 6,000 Cycles @ 80% DoD (15+ Years Life)" },
      { label: "Chemistry Safety", value: "Cobalt-free LiFePO4 (Thermal Runaway Safe)" },
      { label: "Communication", value: "CAN / RS485 protocol to Inverters" },
      { label: "Scalability", value: "Parallelable up to 15 modules (76.8 kWh)" }
    ],
    warranty: "5-Year Factory Replacement Warranty (10-Year Operational Expectancy)",
    badge: "6,000+ Cycles",
    image: "/images/products/lifepo4-battery.jpg"
  },
  {
    id: "battery-tubular-200ah",
    name: "Industrial Deep Cycle Tubular Solar Gel Battery (12V / 200Ah)",
    category: "batteries",
    model: "MAP-GEL-12200",
    manufacturer: "MAP Heavy Duty Battery Co.",
    shortDesc: "Rugged deep-cycle tubular plate technology with nano-silica gel electrolyte designed to withstand severe high ambient heat in Bangladesh.",
    specs: [
      { label: "Voltage & Capacity", value: "12 V / 200 Ah @ C10 Rating" },
      { label: "Plate Design", value: "Spine-cast High-pressure Tubular Positive Plates" },
      { label: "Electrolyte", value: "Nano-Gel (Non-spillable, Maintenance-Free)" },
      { label: "Cycle Life", value: "1,500 Cycles @ 80% DoD, 3,000 Cycles @ 50% DoD" },
      { label: "Operating Temperature", value: "-15°C to 55°C High-Heat Tolerance" }
    ],
    warranty: "2-Year Direct Replacement Warranty",
    badge: "Cost-Effective",
    image: "/images/products/lifepo4-battery.jpg"
  },
  {
    id: "pump-solar-vfd-7hp",
    name: "High-Efficiency Solar Submersible Pump & VFD Controller (5 HP – 10 HP)",
    category: "pumps",
    model: "MAP-PUMP-SS-075",
    manufacturer: "MAP Agri-Power",
    shortDesc: "Complete solar water pumping solution for Kurigram, Rangpur, and northern Bangladesh farmers. Zero diesel required, continuous daylight pumping.",
    specs: [
      { label: "Motor Rating", value: "5.5 kW / 7.5 HP 3-Phase AC Submersible" },
      { label: "Pump Body Material", value: "SS 304 Stainless Steel Housing & Impellers" },
      { label: "Water Head (Depth)", value: "30 to 120 Meters Head" },
      { label: "Discharge Capacity", value: "Up to 350,000 Liters / Day" },
      { label: "Controller Features", value: "High-frequency MPPT VFD with water level sensors" },
      { label: "Safety Protections", value: "Dry-run, reverse polarity, over-current, lightning" }
    ],
    warranty: "2-Year Pump & Controller Warranty | 10-Year Structure Warranty",
    badge: "Farmer's Choice",
    image: "/images/products/solar-pump.jpg"
  },
  {
    id: "accessories-mounting-kit",
    name: "Anodized Aluminum Rooftop Solar Mounting Structure Kit",
    category: "accessories",
    model: "MAP-STR-ALU-6005",
    manufacturer: "MAP Engineering Structures",
    shortDesc: "High-tensile extruded AL6005-T5 aluminum rail and stainless steel (SUS304) hardware certified for 160 km/h wind velocity in Bangladesh.",
    specs: [
      { label: "Rail Material", value: "Extruded AL6005-T5 Anodized Aluminum (>12μm)" },
      { label: "Fasteners & Clamps", value: "SUS 304 Stainless Steel Bolts & Spring Nuts" },
      { label: "Roof Compatibility", value: "RCC Concrete Roof (Ballasted/Anchored) & Metal Tin Roofs" },
      { label: "Tilt Angles", value: "10°, 15°, 20° Fixed or Adjustable Tilt" },
      { label: "Wind Rating", value: "Withstands up to 160 km/h Cyclone Wind Loads" }
    ],
    warranty: "15-Year Structural Integrity Warranty (Anti-Corrosion Guaranteed)",
    badge: "Cyclone Proof",
    image: "/images/products/mounting-rack.jpg"
  },
  {
    id: "accessories-combiner-box",
    name: "Solar DC Combiner Box with Type II SPD & DC Breakers (1000V / 1500V)",
    category: "accessories",
    model: "MAP-DCB-4IN-1OUT",
    manufacturer: "MAP Electrical Distribution",
    shortDesc: "Heavy-duty outdoor IP65 DC combiner box with 1000V DC fuses, rotary isolator switch, and Class II Surge Protection Device (SPD).",
    specs: [
      { label: "Enclosure", value: "IP65 UV-Resistant Polycarbonate / Powder-Coated Metal" },
      { label: "Rated Voltage", value: "1000 VDC / 1500 VDC" },
      { label: "Surge Protection", value: "Type II DC Surge Arrester (SPD 40kA)" },
      { label: "DC Disconnect Switch", value: "Rotary Load Break Switch with Padlock" },
      { label: "Fuse Rating", value: "1000V 15A/20A/30A gPV Solar DC Fuses" }
    ],
    warranty: "3-Year Replacement Warranty",
    badge: "Critical Protection",
    image: "/images/products/combiner-box.jpg"
  }
];
