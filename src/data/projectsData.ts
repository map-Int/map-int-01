export interface ProjectItem {
  id: string;
  title: string;
  titleBn: string;
  category: "residential" | "commercial" | "industrial" | "agricultural";
  location: string;
  division: "Rangpur" | "Dhaka" | "Other";
  systemType: "On-Grid Net Metering" | "Off-Grid Hybrid" | "Solar Pump" | "Industrial Rooftop";
  capacity: string;
  dailyGeneration: string;
  completionYear: string;
  summary: string;
  summaryBn: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  image: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-rangpur-industrial",
    title: "150 kWp Industrial Rooftop Solar Facility",
    titleBn: "১৫০ কিলোওয়াট ইন্ডাস্ট্রিয়াল রুফটপ সোলার প্রকল্প",
    category: "industrial",
    location: "Rangpur BSCIC Industrial Area, Rangpur",
    division: "Rangpur",
    systemType: "Industrial Rooftop",
    capacity: "150 kWp",
    dailyGeneration: "600 – 680 kWh / day",
    completionYear: "2024",
    summary: "Large industrial rooftop installation designed on standing seam metal roofing, cutting factory operational grid consumption by 45% during peak daytime operating shifts.",
    summaryBn: "রংপুর বিসিক শিল্প এলাকায় ১৫০ কিলোওয়াট মেগা সোলার প্ল্যান্ট, যা কারখানার বিদ্যুৎ বিল ৪৫% কমিয়ে দিয়েছে।",
    highlights: [
      "Custom non-penetrating standing seam clamps preserving roof warranty",
      "Central multi-MPPT inverter configuration with web SCADA yield tracking",
      "Estimated annual carbon offset of 185 Metric Tons of CO2"
    ],
    specs: [
      { label: "Installed Modules", value: "272 x 550W Tier-1 Mono PERC" },
      { label: "Inverters", value: "2 x 60kW 3-Phase Smart Inverters" },
      { label: "Roof Type", value: "Standing-Seam Industrial Metal Shed" },
      { label: "Payback Target", value: "3.8 Years" }
    ],
    image: "/images/industrial-solar-facility.jpg"
  },
  {
    id: "proj-dhaka-commercial-netmeter",
    title: "25 kWp Commercial Net-Metering System",
    titleBn: "২৫ কিলোওয়াট কমার্শিয়াল নেট-মিটারিং সোলার",
    category: "commercial",
    location: "Sahalibag, Mirpur 1, Dhaka",
    division: "Dhaka",
    systemType: "On-Grid Net Metering",
    capacity: "25 kWp",
    dailyGeneration: "105 – 120 kWh / day",
    completionYear: "2024",
    summary: "Turnkey rooftop on-grid commercial facility in Mirpur 1, synchronized directly with the local distribution utility grid under Bangladesh Net Metering regulations.",
    summaryBn: "মিরপুর ১ ঢাকায় বাণিজ্যিক ভবনের ছাদে ২৫ কিলোওয়াট অন-গ্রিড নেট মিটারিং সোলার সিস্টেম।",
    highlights: [
      "Complete DESCO utility bi-directional net meter testing and interconnection",
      "Zero battery maintenance overhead, delivering immediate operational bill savings",
      "Anodized high-clearance aluminum structure providing walkable roof accessibility"
    ],
    specs: [
      { label: "Modules", value: "44 x 570W TopCon High Efficiency" },
      { label: "Inverter", value: "1 x 25kW 3-Phase On-Grid Inverter" },
      { label: "Metering", value: "Class 0.5S Bi-directional Smart Meter" },
      { label: "Monthly Bill Reduction", value: "Approx. 75%" }
    ],
    image: "/images/hero-engineer.jpg"
  },
  {
    id: "proj-kurigram-solar-pump",
    title: "10 HP Community Solar Irrigation Pumping Station",
    titleBn: "১০ ঘোড়া কৃষি সোলার সেচ পাম্প প্রকল্প",
    category: "agricultural",
    location: "Rajarhat, Kurigram",
    division: "Rangpur",
    systemType: "Solar Pump",
    capacity: "10 HP (9.6 kWp PV Array)",
    dailyGeneration: "Water Discharge: ~380,000 Liters / day",
    completionYear: "2023",
    summary: "Community agricultural irrigation project serving 45+ marginal farmers for boro rice and seasonal vegetable irrigation, eliminating diesel pump running expenses completely.",
    summaryBn: "কুড়িগ্রামের রাজারহাটে ৪৫+ কৃষকের জন্য সম্পূর্ণ ডিজেলমুক্ত সোলার সেচ পাম্প সুবিধা।",
    highlights: [
      "Zero diesel fuel consumption, saving over 3,200 liters of diesel annually",
      "Smart VFD controller with automatic dawn-to-dusk operation and dry-run safety",
      "Ground-mounted galvanized structure with security boundary"
    ],
    specs: [
      { label: "Pump Rating", value: "7.5 kW / 10 HP Submersible Stainless Steel" },
      { label: "Solar Array", value: "18 x 535W Monocrystalline Panels" },
      { label: "Irrigation Area", value: "Approx. 35 Acres Cultivable Land" },
      { label: "Diesel Saved", value: "3,200+ Liters per Season" }
    ],
    image: "/images/solar-pump-farmers.jpg"
  },
  {
    id: "proj-kurigram-hybrid-island",
    title: "12 kWp Off-Grid Hybrid Solar with LiFePO4 Storage",
    titleBn: "১২ কিলোওয়াট অফ-গ্রিড হাইব্রিড সোলার ও লিথিয়াম ব্যাটারি",
    category: "residential",
    location: "Chilmari, Kurigram",
    division: "Rangpur",
    systemType: "Off-Grid Hybrid",
    capacity: "12 kWp (20.48 kWh Battery)",
    dailyGeneration: "50 – 58 kWh / day",
    completionYear: "2024",
    summary: "Advanced off-grid hybrid power setup for an educational and healthcare foundation facility in Chilmari, providing continuous 24/7 power immune to local rural load-shedding.",
    summaryBn: "চিলমারী কুড়িগ্রামে ২৪ ঘণ্টা সার্বক্ষণিক নিরবচ্ছিন্ন বিদ্যুতের জন্য আধুনিক লিথিয়াম ব্যাটারি ব্যাকআপ সিস্টেম।",
    highlights: [
      "4 x 5.12 kWh LiFePO4 rack batteries providing 6,000+ cycle life",
      "Seamless <10ms power switchover protecting laboratory diagnostic gear",
      "Remote Wi-Fi telemetry for battery health monitoring"
    ],
    specs: [
      { label: "Modules", value: "22 x 550W Mono PERC" },
      { label: "Hybrid Inverters", value: "2 x 6kW Paralleled Units" },
      { label: "Battery Bank", value: "20.48 kWh Lithium LiFePO4 (48V)" },
      { label: "Uptime", value: "99.9% Continuous Power" }
    ],
    image: "/images/solar-inverter-technician.jpg"
  },
  {
    id: "proj-rangpur-residential-rooftop",
    title: "6 kWp Residential Rooftop Net-Metered Villa",
    titleBn: "৬ কিলোওয়াট আবাসিক ভিলা ছাদ সোলার সিস্টেম",
    category: "residential",
    location: "Dhap, Rangpur City",
    division: "Rangpur",
    systemType: "On-Grid Net Metering",
    capacity: "6 kWp",
    dailyGeneration: "25 – 30 kWh / day",
    completionYear: "2024",
    summary: "Residential rooftop solar system powering 3 air conditioners, refrigerator, lights, and fans with net-metered zero-export balance during daytime office hours.",
    summaryBn: "রংপুরের ধাপে আবাসিক ভবনের ছাদে ৬ কিলোওয়াট সিস্টেম যা ৩টি এসি ও সার্বিক লোড অনায়াসে পরিচালনা করে।",
    highlights: [
      "Elevated structure enabling homeowners to utilize rooftop garden space",
      "Mobile app monitoring showing daily solar yield and savings in Bangladeshi Taka",
      "Estimated electricity bill reduction of ~80%"
    ],
    specs: [
      { label: "Modules", value: "11 x 550W Tier-1 Panels" },
      { label: "Inverter", value: "6kW Single-Phase Grid-Tied Inverter" },
      { label: "Structure", value: "Custom Elevated Heavy Hot-Dip Galvanized Iron" },
      { label: "Estimated Savings", value: "BDT 7,500 – 9,000 / month" }
    ],
    image: "/images/residential-solar-family.jpg"
  },
  {
    id: "proj-kurigram-cold-storage",
    title: "50 kWp Cold Chain & Agro-Warehouse Solar Array",
    titleBn: "৫০ কিলোওয়াট কোল্ড স্টোরেজ ও কৃষি গুদাম সোলার",
    category: "commercial",
    location: "Kurigram Sadar, Rangpur Division",
    division: "Rangpur",
    systemType: "Industrial Rooftop",
    capacity: "50 kWp",
    dailyGeneration: "210 – 240 kWh / day",
    completionYear: "2023",
    summary: "Rooftop solar system providing vital daytime cooling energy to an agricultural potato and vegetable cold storage facility, dampening daytime peak power demand.",
    summaryBn: "কুড়িগ্রাম সদরে কৃষি হিমাগারে ৫০ কিলোওয়াট সোলার সিস্টেম যা পিক আওয়ারের বিদ্যুৎ খরচ উল্লেখযোগ্যভাবে কমিয়েছে।",
    highlights: [
      "Integrated with facility existing sub-distribution board and diesel gen-set controller",
      "Surge suppression against lightning common in northern Bangladesh summer storms",
      "Over 30% reduction in peak demand electricity surcharges"
    ],
    specs: [
      { label: "Modules", value: "92 x 545W Monocrystalline Panels" },
      { label: "Inverters", value: "1 x 50kW 3-Phase Industrial String Inverter" },
      { label: "Surge Protection", value: "Type I+II Class SPD on AC & DC lines" },
      { label: "Payback Estimate", value: "3.5 Years" }
    ],
    image: "/images/industrial-solar-facility.jpg"
  }
];
