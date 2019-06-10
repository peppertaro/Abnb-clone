const navList = [
  {
    NVkey: "101",
    NVid: "h-home",
    NVlink: "#home",
    NVname: "Host a home"
  },
  {
    NVkey: "102",
    NVid: "h-exp",
    NVlink: "#exp",
    NVname: "Host an experience"
  },
  {
    NVkey: "103",
    NVid: "help",
    NVlink: "#help",
    NVname: "Help"
  },
  {
    NVkey: "104",
    NVid: "h-signup",
    NVlink: "#signup",
    NVname: "Sign up"
  },
  {
    NVkey: "105",
    NVid: "h-login",
    NVlink: "#login",
    NVname: "Log in"
  }
];

const GMTypeList = [
  {
    GMkey: "111",
    GMtype: "Adults",
    GMdsc: "",
    GMnumID: "GMnumAdults",
    GMidMinus: "GMAdultsMinus",
    GMidPlus: "GMAdultsPlus"
  },
  {
    GMkey: "112",
    GMtype: "Children",
    GMdsc: "Ages 2-12",
    GMnumID: "GMnumChildren",
    GMidMinus: "GMChildrenMinus",
    GMidPlus: "GMChildrenPlus"
  },
  {
    GMkey: "113",
    GMtype: "Infants",
    GMdsc: "Under 2",
    GMnumID: "GMnumInfants",
    GMidMinus: "GMInfantsMinus",
    GMidPlus: "GMInfantsPlus"
  }
];

const optionList = [
  {
    OPkey: "201",
    OPlink: "#Homes",
    OPimg: "./img/casa.jpg",
    OPname: "Homes"
  },
  {
    OPkey: "202",
    OPlink: "#Experiences",
    OPimg: "./img/experiences.jpg",
    OPname: "Experiences"
  },
  {
    OPkey: "203",
    OPlink: "#Restaurants",
    OPimg: "./img/restaurantes.jpg",
    OPname: "Restaurants"
  }
];
const recommendList = [
  {
    RDkey: "401",
    RDimg: "./img/rcmd/osaka.jpg",
    RDtitle: "Osaka",
    RDlink: "#Osaka",
    RDprc: "6,160JPY/night average"
  },
  {
    RDkey: "402",
    RDimg: "./img/rcmd/okinawa.jpg",
    RDtitle: "Okinawa",
    RDlink: "#Okinawa",
    RDprc: "8,846 JPY/night average"
  },
  {
    RDkey: "403",
    RDimg: "./img/rcmd/kyoto.jpg",
    RDtitle: "Kyoto",
    RDlink: "#Kyoto",
    RDprc: "9,543JPY/night average"
  },
  {
    RDkey: "404",
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDkey: "405",
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDkey: "406",
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDkey: "407",
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDkey: "408",
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDkey: "409",
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  }
];

const HomeList = [
  {
    HMkey: "601",
    HMlink: "#HomeListLink",
    HMimg: "./img/Home/Aiako.jpg",
    HMplace: "CAMPER/RV · ALOZAINA",
    HMtitle: "Airstream 'Glamping' in Andalucia!",
    HMprice: "15,161",
    HMstar: "5",
    HMstarnum: "84",
    HMSPhost: "Superhost"
  },
  {
    HMkey: "602",
    HMlink: "#HomeListLink",
    HMimg: "./img/Home/BCN.jpg",
    HMplace: "ENTIRE APARTMENT · HONGKOU",
    HMtitle: "#2 SHANGHIGH HOME",
    HMprice: "4,548",
    HMstar: "5",
    HMstarnum: "390",
    HMSPhost: "Superhost"
  },
  {
    HMkey: "603",
    HMlink: "#HomeListLink",
    HMimg: "./img/Home/Beldui.jpg",
    HMplace: "ISLAND · FERN FOREST",
    HMtitle: "Dreamy Tropical Tree House",
    HMprice: "32,489",
    HMstar: "5",
    HMstarnum: "607",
    HMSPhost: "Superhost"
  },
  {
    HMkey: "604",
    HMlink: "#HomeListLink",
    HMimg: "./img/Home/Bruja.jpg",
    HMplace: "HUT · ARMENIA",
    HMtitle: "Romantic Cabana with view",
    HMprice: "4,332",
    HMstar: "5",
    HMstarnum: "221",
    HMSPhost: "Superhost"
  },
  {
    HMkey: "605",
    HMlink: "#HomeListLink",
    HMimg: "./img/Home/Donosti.jpg",
    HMplace: "CYCLADIC HOUSE · OIA",
    HMtitle: "Unique Architecture Cave House",
    HMprice: "60,646",
    HMstar: "5",
    HMstarnum: "179",
    HMSPhost: "Superhost"
  },
  {
    HMkey: "606",
    HMlink: "#HomeListLink",
    HMimg: "./img/Home/Fuji.jpg",
    HMplace: "ENTIRE HOUSE · FUJIEDA",
    HMtitle: "Japan Charm&Tradition-Yui Valley(easy Tokyo/Kyoto)",
    HMprice: "11,479",
    HMstar: "5",
    HMstarnum: "309",
    HMSPhost: "Superhost"
  },
  {
    HMkey: "607",
    HMlink: "#HomeListLink",
    HMimg: "./img/Home/Gaztelugatze.jpg",
    HMplace: "ENTIRE APARTMENT · PALERMO",
    HMtitle: "Palazzo Cattolica Art-Apartment",
    HMprice: "10,938",
    HMstar: "5",
    HMstarnum: "313",
    HMSPhost: "Superhost"
  },
  {
    HMkey: "608",
    HMlink: "#HomeListLink",
    HMimg: "./img/Home/Getaria.jpg",
    HMplace: "CASTLE · TWENTYNINE PALMS",
    HMtitle: "Tile House",
    HMprice: "19,385",
    HMstar: "5",
    HMstarnum: "363",
    HMSPhost: "Superhost"
  }
];

const BeachList = [
  {
    BHkey: "701",
    BHlink: "#link",
    BHimg: "./img/bch/osaka.jpg",
    BHtitle: "Osaka",
    BHprc: "6,160JPY/night average"
  },
  {
    BHkey: "702",
    BHlink: "#link",
    BHimg: "./img/bch/kyoto.jpg",
    BHtitle: "kyoto",
    BHprc: "6,160JPY/night average"
  },
  {
    BHkey: "703",
    BHlink: "#link",
    BHimg: "./img/bch/oahu.jpg",
    BHtitle: "oahu",
    BHprc: "6,160JPY/night average"
  },
  {
    BHkey: "704",
    BHlink: "#link",
    BHimg: "./img/bch/okinawa.jpg",
    BHtitle: "okinawa",
    BHprc: "6,160JPY/night average"
  },
  {
    BHkey: "705",
    BHlink: "#link",
    BHimg: "./img/bch/osaka.jpg",
    BHtitle: "Osaka",
    BHprc: "6,160JPY/night average"
  }
];

const TopRateList = [
  {
    TRkey: "801",
    TRlink: "#TopRateLink",
    TRimg: "./img/TR-exp/BIL.jpg",
    TRplace: "WORKSHOP · CHIANG MAI",
    TRtitle: "Thai Traditional Yantra Tattoo.",
    TRprice: "82",
    TRstar: "4.99",
    TRstarnum: "159",
    TRoption: ""
  },
  {
    TRkey: "802",
    TRlink: "#TopRateLink",
    TRimg: "./img/TR-exp/BOL.jpg",
    TRplace: "DAY TRIP · RIO DE JANEIRO",
    TRtitle: "Sunrise + Secret pool + wild beaches!",
    TRprice: "66",
    TRstar: "4.99",
    TRstarnum: "163",
    TRoption: "Also offered in French,Italian and 2 more"
  },
  {
    TRkey: "803",
    TRlink: "#TopRateLink",
    TRimg: "./img/TR-exp/BRA.jpg",
    TRplace: "PHOTO SHOOT · TOKYO",
    TRtitle: "Your Personal Tokyo Photographer!",
    TRprice: "91",
    TRstar: "4.95",
    TRstarnum: "437",
    TRoption: ""
  },
  {
    TRkey: "804",
    TRlink: "#TopRateLink",
    TRimg: "./img/TR-exp/CHL.jpg",
    TRplace: "DANCE PARTY · WATTHANA",
    TRtitle: "The night to remember in Bangkok",
    TRprice: "44",
    TRstar: "4.93",
    TRstarnum: "206",
    TRoption: ""
  },
  {
    TRkey: "805",
    TRlink: "#TopRateLink",
    TRimg: "./img/TR-exp/DUB.jpg",
    TRplace: "GUIDED HIKE · HAYMARKET",
    TRtitle: "Figure 8 Pools Coastal Adventure Hike",
    TRprice: "106",
    TRstar: "4.93",
    TRstarnum: "145",
    TRoption: ""
  },
  {
    TRkey: "806",
    TRlink: "#TopRateLink",
    TRimg: "./img/TR-exp/Nica.jpg",
    TRplace: "DAY TRIP · LISBON",
    TRtitle: "This is SINTRA - a Day to Remember !",
    TRprice: "72",
    TRstar: "4.93",
    TRstarnum: "783",
    TRoption: ""
  },
  {
    TRkey: "807",
    TRlink: "#TopRateLink",
    TRimg: "./img/TR-exp/PER.jpg",
    TRplace: "SPA VISIT · DESERT HOT SPRINGS",
    TRtitle: "Hot Spring Sunset for Two",
    TRprice: "75",
    TRstar: "4.96",
    TRstarnum: "347",
    TRoption: ""
  }
];

const FooterABList = [
  {
    FTkey: "901",
    FTABid: "FTAB-careers",
    FTlink: "#careers",
    FTname: "Careers",
    FTbadge: ""
  },
  {
    FTkey: "902",
    FTABid: "FTAB-press",
    FTlink: "#press",
    FTname: "Press",
    FTbadge: ""
  },
  {
    FTkey: "903",
    FTABid: "FTAB-policies",
    FTlink: "#policies",
    FTname: "Policies",
    FTbadge: ""
  },
  {
    FTkey: "904",
    FTABid: "FTAB-help",
    FTlink: "#help",
    FTname: "Help",
    FTbadge: ""
  },
  {
    FTkey: "905",
    FTABid: "FTAB-Diversity",
    FTlink: "#diversity",
    FTname: "Diversity & Belonging",
    FTbadge: ""
  },
  {
    FTkey: "906",
    FTABid: "FTAB-Accesibility",
    FTlink: "#accesibility",
    FTname: "Accesibility",
    FTbadge: "New"
  }
];

const FooterDCVList = [
  {
    FTkey: "911",
    FTDCVid: "FTDCV-T&S",
    FTlink: "#T&S",
    FTname: "Trust & Safety",
    FTbadge: ""
  },
  {
    FTkey: "912",
    FTDCVid: "FTDCV-TVC",
    FTlink: "#Travel Credit",
    FTname: "Travel Credit",
    FTbadge: ""
  },
  {
    FTkey: "913",
    FTDCVid: "FTDCV-GiftCards",
    FTlink: "#GiftCards",
    FTname: "Gift Cards",
    FTbadge: ""
  },
  {
    FTkey: "914",
    FTDCVid: "FTDCV-AirbnbCitizen",
    FTlink: "#AirbnbCitizen",
    FTname: "Airbnb Citizen",
    FTbadge: ""
  },
  {
    FTkey: "915",
    FTDCVid: "FTDCV-BzTravel",
    FTlink: "#BusinessTravel",
    FTname: "Business Travel",
    FTbadge: ""
  },
  {
    FTkey: "916",
    FTDCVid: "FTDCV-Guidebooks",
    FTlink: "#Guidebooks",
    FTname: "Guidebooks",
    FTbadge: ""
  },
  {
    FTkey: "917",
    FTDCVid: "FTDCV-Airbnbmag",
    FTlink: "#Airbnbmag",
    FTname: "Airbnbmag",
    FTbadge: ""
  }
];

const FooterHTList = [
  {
    FTkey: "921",
    FTHTid: "FTHT-WhyHost",
    FTlink: "#WhyHost",
    FTname: "Why Host",
    FTbadge: ""
  },
  {
    FTkey: "922",
    FTHTid: "FTHT-Hospitality",
    FTlink: "#Hospitality",
    FTname: "Hospitality",
    FTbadge: ""
  },
  {
    FTkey: "923",
    FTHTid: "FTHT-RspHT",
    FTlink: "#ResponsibleHosting",
    FTname: "Responsible Hosting",
    FTbadge: ""
  },
  {
    FTkey: "924",
    FTHTid: "FTHT-ComCenter",
    FTlink: "#ComCenter",
    FTname: "Community Center",
    FTbadge: ""
  },
  {
    FTkey: "925",
    FTHTid: "FTHT-HostExp",
    FTlink: "#HostExp",
    FTname: "Host an Experience",
    FTbadge: "New"
  },
  {
    FTkey: "926",
    FTHTid: "FTHT-OpenHomes",
    FTlink: "#OpenHomes",
    FTname: "Open Homes",
    FTbadge: ""
  }
];

export {
  navList,
  GMTypeList,
  optionList,
  recommendList,
  HomeList,
  BeachList,
  TopRateList,
  FooterABList,
  FooterDCVList,
  FooterHTList
};
