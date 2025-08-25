import React, { createContext, useState } from 'react'

export const shopcontext = createContext(null);

const Shopcontext = (props) => {

  const [AllDeviceDetails, setAllDeviceDetails] = useState([{
    id: 'phone3',
    searchKeywords: ["phone"],
    name: 'Phone 3',
    colors: [
      { colorName: 'BLACK', colorHex: '#323136', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057513/Phone3Black_tl9och.png' },
      { colorName: 'WHITE', colorHex: '#DEDFDC', image: "https://res.cloudinary.com/drwfctvfs/image/upload/v1756057511/Phone3White_qi8dw2.png" },
    ],
    variants: [
      { ram: 12, storage: 256, price: '₹79,999' },
      { ram: 16, storage: 512, price: '₹89,999' },
    ],
    highlights: [
      'Qualcomm 8s Gen 4 Processor',
      '50MP + 50MP (periscope telephoto) + 50MP | 50MP Front Camera',
      '4k @30/60fps , 120Hz Refresh Rate',
      '5500 mAh Battery',
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057511/Phone3White_qi8dw2.png',
  },
  {
    id: 'phone3apro',
    searchKeywords: ["phone"],
    name: 'Phone 3a Pro',
    colors: [
      { colorName: 'BLACK', colorHex: '#222D30', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057512/Phone3aProBlack_eyx0qj.png' },
      { colorName: 'GREY', colorHex: '#C0C1C5', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057510/Phone3aProGrey_zvsddd.png' },
    ],
    variants: [
      { ram: 8, storage: 256, price: '₹31,999' },
      { ram: 12, storage: 256, price: '₹33,999' },
    ],
    highlights: [
      'Qualcomm SM7635 Snapdragon 7s Gen 3',
      '50MP + 50MP (3X Periscope)+ 8MP (Ultra-Wide) | 50MP Front Camera',
      '6.7 inch 120Hz Refresh rate',
      '5000 mAh Battery',
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057510/Phone3aProGrey_zvsddd.png',
  },
  {
    id: 'phone3a',
    searchKeywords: ["phone"],
    name: 'Phone 3a',
    colors: [
      { colorName: 'BLACK', colorHex: '#2B3438', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057515/Phone3aBlack_j03qw9.png' },
      { colorName: 'WHITE', colorHex: '#E8E8E6', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057510/Phone3aWhite_ae1md5.png' },
      { colorName: 'BLUE', colorHex: '#146A8B', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057518/Phone3aBlue_a9ksyb.png' },
    ],
    variants: [
      { ram: 8, storage: 128, price: '₹24,999' },
      { ram: 8, storage: 256, price: '₹26,999' },
    ],
    highlights: [
      'Qualcomm SM7635 Snapdragon 7s Gen 3',
      '50MP + 50MP (2X Tele Photo) + 8MP (Ultra-Wide) | 32MP Front Camera',
      '6.7 inch 120Hz Refresh rate',
      '5000 mAh Battery',
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057518/Phone3aBlue_a9ksyb.png',
  },
  {
    id: 'phone2aplus',
    searchKeywords: ["phone"],
    name: 'Phone 2a Plus',
    colors: [
      { colorName: 'BLACK', colorHex: '#202426', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057515/Phone2aPlusBlack_wdexy4.png' },
      { colorName: 'GREY', colorHex: '#A9ABAD', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057514/Phone2aPlusGrey_swul4i.png' },
    ],
    variants: [
      { ram: 8, storage: 256, price: '₹27,999' },
      { ram: 12, storage: 256, price: '₹29,999' },
    ],
    highlights: [
      '50MP + 50MP | 50MP Front Camera',
      '17.02 cm (6.7 inch) Full HD+ Display',
      'Dimensity 7350 Pro 5G Processor',
      '5000 mAh Battery',
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057515/Phone2aPlusBlack_wdexy4.png',
  },
  {
    id: 'phone2a',
    searchKeywords: ["phone"],
    name: 'Phone 2a',
    colors: [
      { colorName: 'BLACK', colorHex: '#222629', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057513/Phone2aBlack_stokqo.png' },
      { colorName: 'MILK', colorHex: '#ECECEC', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057514/Phone2aMilk_eh4vav.png' },
    ],
    variants: [
      { ram: 8, storage: 128, price: '₹23,999' },
      { ram: 12, storage: 256, price: '₹25,999' },
    ],
    highlights: [
      'Dimensity 7200 Pro Processor',
      '50MP (OIS) + 50MP | 32MP Front Camera',
      '17.02 cm (6.7 inch) Full HD+ Display',
      '5000 mAh Battery',
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057514/Phone2aMilk_eh4vav.png',
  },
  {
    id: 'Cmfphone2',
    searchKeywords: ["CMF"],
    name: 'CMF Phone 2 Pro',
    colors: [
      { colorName: 'BLACK', colorHex: '#404246', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057512/CMFPhone2ProBlack_r1trgg.png' },
      { colorName: 'GREEN', colorHex: '#D2DED8', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057512/CMFPhone2ProGreen_a3ftyi.png' },
      { colorName: 'ORANGE', colorHex: '#E73C22', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057512/CMFPhone2ProOrange_ixut98.png' },
      { colorName: 'WHITE', colorHex: '#E7E9EB', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057514/CMFPhone2ProWhite_a4wskp.png' },
    ],
    variants: [
      { ram: 8, storage: 128, price: '₹18,999' },
      { ram: 8, storage: 256, price: '₹20,999' },
    ],
    highlights: [
      '17.2 cm (6.77 inch) Display',
      '50MP + 50MP + 8MP | 16MP Front Camera',
      'Dimensity 7300 Pro 5G Processor',
      '5000 mAh battery',
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057514/CMFPhone2ProWhite_a4wskp.png',
  },
  {
    id: 'Cmfphone1',
    searchKeywords: ["CMF"],

    name: 'CMF Phone 1',
    colors: [
      { colorName: 'ORANGE', colorHex: '#F7401C', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057513/CMFPhone1Orange_fkw2bc.png' },
      { colorName: 'BLACK', colorHex: '#28272C', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057511/CMFPhone1Black_s6ggqf.png' },
      { colorName: 'GREEN', colorHex: '#B6CCC5', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057511/CMFPhone1Green_qncxky.png' },
    ],
    variants: [
      { ram: 6, storage: 128, price: '₹15,999' },
      { ram: 8, storage: 128, price: '₹17,999' },
    ],
    highlights: [
      '50 MP Sony rear camera',
      '16.94 cm (6.67 inch) Full HD+ Display',
      'Dimensity 7300 5G Processor',
      '5000 mAh battery',
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057513/CMFPhone1Orange_fkw2bc.png',
  },
  {
    id: 'earwhite',
    searchKeywords: ["audio"],

    name: 'Ear',
    colors: [
      { colorName: 'WHITE', colorHex: '#F8FAFB', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057488/EaraWhite_rkoccu.png' },
      { colorName: 'BLACK', colorHex: '#121D21', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057493/EarBlack_caxsru.png' },
    ],
    variants: [
      { price: "₹11,999" },

    ],
    highlights: [
      '24-bit Hi-Res Audio',
      'Premium 11 mm ceramic driver for elite clarity',
      '45 dB active noise cancellation',
      '40.5 h battery',
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057493/EarBlack_caxsru.png'
  },
  {
    id: 'eara',
    searchKeywords: ["audio"],

    name: 'Ear (a)',
    colors: [

      { colorName: 'WHITE', colorHex: '#E2E3E1', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057488/EaraWhite_rkoccu.png' },
      { colorName: 'BLACK', colorHex: '#2D3539', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057488/EaraBlack_axoiw9.png' },
      { colorName: 'YELLOW', colorHex: '#FEE430', image: "https://res.cloudinary.com/drwfctvfs/image/upload/v1756057490/EaraYellow_cib7ju.png" },
    ],
    variants: [
      { price: "₹7999" },
    ],
    highlights: [
      'Hi-Res Audio with LDAC',
      '45 dB active noise cancellation',
      'Powerful dynamic 11 mm driver,',
      '42.5 h battery',
    ],
    defaultImage: "https://res.cloudinary.com/drwfctvfs/image/upload/v1756057490/EaraYellow_cib7ju.png"
  },
  {
    id: 'headphone1white',
    searchKeywords: ["audio"],
    name: 'Headphone 1',
    colors: [
      { colorName: 'BLACK', colorHex: '#1E1E1E', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057484/Headphone1Black_iwtuyl.png' },
      { colorName: 'WHITE', colorHex: '#D2D4D6', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057513/Headphone1White_ritno0.png' },
    ],
    variants: [
      { price: "₹21,999" },
    ],
    highlights: [
      'Up to 80 hours of playback',
      'Support for Hi-Res Audio, LDAC',
      'Real-time adaptive ANC',
      'Bluetooth and Wired'
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057513/Headphone1White_ritno0.png',
  },
  {
    id: 'earopen',
    searchKeywords: ["audio"],
    name: 'Ear Open',
    colors: [
      { colorName: 'WHITE', colorHex: '#D2D4D6', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057488/EarOpenWhite_ytf3kr.png' },
    ],
    variants: [
      { price: "₹7999" },
    ],
    highlights: [
      '30 hr of playback',
      '14.2mm dynamic driver',
      'AI-enhanced technologyn',
      'Hi-Res Audio with LDAC',
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057488/EarOpenWhite_ytf3kr.png'
  },
  {
    id: 'cmfbudspro2',
    searchKeywords: ["audio", "CMF"],
    name: 'CMF Buds Pro 2',
    colors: [
      { colorName: 'WHITE', colorHex: '#DEE0E2', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057485/CMFBudsPro2White_jmfpaa.png' },
      { colorName: 'BLACK', colorHex: '#4A4C50', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057487/CMFBudsPro2Black_x1rrn0.png' },
      { colorName: 'ORANGE', colorHex: '#FF6849', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057484/CMFBudsPro2Orange_h6h0b2.png' },
      { colorName: 'BLUE', colorHex: '#485BA0', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057483/CMFBudsPro2Blue_apsjuq.png' },
    ],
    variants: [
      { price: "₹4,299" },
    ],
    highlights: [
      '50 DB Hybrid ANC',
      'Wireless range: 10 meters',
      '11 MM + 6 MM Dual drivers',
      '6 HD mics',
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057484/CMFBudsPro2Orange_h6h0b2.png'
  },
  {
    id: 'cmfbuds2plus',
    searchKeywords: ["audio", "CMF"],
    name: 'CMF Buds 2 Plus',
    colors: [
      { colorName: 'WHITE', colorHex: '#D3D2D5', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057488/CMFBuds2PlusWhite_nvbz0x.png' },
      { colorName: 'BLUE', colorHex: '#3B486C', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057486/CMFBuds2PlusBlue_zp2n2j.png' },
    ],
    variants: [
      { price: "₹3,299" },
    ],
    highlights: [
      '12 mm LCP drivers',
      'Wireless range: 10 meters',
      'Hi-Res Audio with LDAC',
      '50 dB hybrid ANC',
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057488/CMFBuds2PlusWhite_nvbz0x.png'
  },
  {
    id: 'cmfbuds2a',
    searchKeywords: ["audio"],
    name: 'CMF Buds 2a',
    colors: [
      { colorName: 'WHITE', colorHex: '#DEE0E2', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057485/CMFBuds2aWhite_nv1caf.png' },
      { colorName: 'ORANGE', colorHex: '#ED6A42', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057486/CMFBuds2aOrange_cxszfk.png' },
      { colorName: 'BLACK', colorHex: '#414043', image: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057483/CMFBuds2aBlack_xiuxcr.png' },
    ],
    variants: [
      { price: "₹2.199" },
    ],
    highlights: [
      '12.4mm Bio-fibre Driver',
      '42 dB Active Noise Cancellation',
      'Up to 8 hours of playback',
      '360 Cinematic Sound',
    ],
    defaultImage: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1756057485/CMFBuds2aWhite_nv1caf.png'
  },
  ])


  return (
    <shopcontext.Provider value={{ AllDeviceDetails }} >
      {props.children}
    </shopcontext.Provider>
  )
}

export default Shopcontext