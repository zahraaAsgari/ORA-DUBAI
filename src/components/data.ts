export const IMG = {
  marinaNight: "https://images.pexels.com/photos/30554306/pexels-photo-30554306.jpeg?auto=compress&cs=tinysrgb&w=1600",
  marinaWindow: "https://images.pexels.com/photos/30047554/pexels-photo-30047554.jpeg?auto=compress&cs=tinysrgb&w=1600",
  palm: "https://images.pexels.com/photos/36134146/pexels-photo-36134146.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lobby: "https://images.pexels.com/photos/14750441/pexels-photo-14750441.jpeg?auto=compress&cs=tinysrgb&w=1600",
  burjNight: "https://images.pexels.com/photos/5577693/pexels-photo-5577693.jpeg?auto=compress&cs=tinysrgb&w=1600",
  burjDusk: "https://images.pexels.com/photos/30051425/pexels-photo-30051425.jpeg?auto=compress&cs=tinysrgb&w=1600",
  skylineNight: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1920",
  skyline: "https://images.pexels.com/photos/34218532/pexels-photo-34218532.jpeg?auto=compress&cs=tinysrgb&w=1600",
  villaPool: "https://images.pexels.com/photos/28054875/pexels-photo-28054875.jpeg?auto=compress&cs=tinysrgb&w=1600",
  beachVilla: "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1600",
  living: "https://images.pexels.com/photos/7031712/pexels-photo-7031712.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export const communities = [
  { name: "Palm Jumeirah", tag: "Island Living", lifestyle: "Private beaches, signature villas, five-star resorts", value: "AED 4,200 / sqft", growth: 18.4, img: IMG.palm, bars: [30, 42, 48, 60, 72, 88] },
  { name: "Downtown Dubai", tag: "The Centre of Now", lifestyle: "Burj Khalifa views, Dubai Opera, boulevard dining", value: "AED 3,100 / sqft", growth: 14.2, img: IMG.burjDusk, bars: [40, 45, 55, 62, 70, 80] },
  { name: "Dubai Marina", tag: "Waterfront Icon", lifestyle: "Yacht harbour, skyline promenades, beach clubs", value: "AED 2,400 / sqft", growth: 12.7, img: IMG.marinaNight, bars: [35, 40, 50, 55, 66, 74] },
  { name: "Dubai Hills", tag: "Green Estate", lifestyle: "Championship golf, parks, family mansions", value: "AED 2,050 / sqft", growth: 16.1, img: IMG.villaPool, bars: [25, 34, 46, 58, 66, 82] },
];

export const residences = [
  { name: "Skyline Penthouse", location: "Downtown Dubai", price: "AED 18M", priceNum: 18, waterfront: false, type: "penthouse", features: ["4 Bedrooms", "Burj Khalifa View", "Private Pool"], img: IMG.lobby, score: 92, size: "7,850 sqft" },
  { name: "Palm Signature Villa", location: "Palm Jumeirah", price: "AED 35M", priceNum: 35, waterfront: true, type: "villa", features: ["Beach Access", "Smart Home", "Private Garden"], img: IMG.beachVilla, score: 96, size: "14,200 sqft" },
  { name: "Marina Residence", location: "Dubai Marina", price: "AED 12M", priceNum: 12, waterfront: true, type: "apartment", features: ["Ocean View", "Luxury Amenities", "Concierge Service"], img: IMG.marinaWindow, score: 89, size: "4,300 sqft" },
  { name: "Frond Horizon Villa", location: "Palm Jumeirah", price: "AED 27.5M", priceNum: 27.5, waterfront: true, type: "villa", features: ["Private Beach", "Infinity Pool", "Sunset Deck"], img: IMG.villaPool, score: 94, size: "11,600 sqft" },
  { name: "Hills Grand Estate", location: "Dubai Hills", price: "AED 22M", priceNum: 22, waterfront: false, type: "villa", features: ["Golf Frontage", "Cinema", "Staff Quarters"], img: IMG.living, score: 90, size: "12,900 sqft" },
];
