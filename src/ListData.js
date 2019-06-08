const navList = [
  {
    NVid: "h-home",
    NVlink: "#home",
    NVname: "Host a home"
  },
  {
    NVid: "h-exp",
    NVlink: "#exp",
    NVname: "Host an experience"
  },
  {
    NVid: "help",
    NVlink: "#help",
    NVname: "Help"
  },
  {
    NVid: "h-signup",
    NVlink: "#signup",
    NVname: "Sign up"
  },
  {
    NVid: "h-login",
    NVlink: "#login",
    NVname: "Log in"
  }
];

const GMTypeList = [
  {
    GMtype: "Adults",
    GMdsc: "",
    GMnumID: "GMnumAdults",
    GMidMinus: "GMAdultsMinus",
    GMidPlus: "GMAdultsPlus"
  },
  {
    GMtype: "Children",
    GMdsc: "Ages 2-12",
    GMnumID: "GMnumChildren",
    GMidMinus: "GMChildrenMinus",
    GMidPlus: "GMChildrenPlus"
  },
  {
    GMtype: "Infants",
    GMdsc: "Under 2",
    GMnumID: "GMnumInfants",
    GMidMinus: "GMInfantsMinus",
    GMidPlus: "GMInfantsPlus"
  }
];

const optionList = [
  {
    OPlink: "#Homes",
    OPimg: "./img/casa.jpg",
    OPname: "Homes"
  },
  {
    OPlink: "#Experiences",
    OPimg: "./img/experiences.jpg",
    OPname: "Experiences"
  },
  {
    OPlink: "#Restaurants",
    OPimg: "./img/restaurantes.jpg",
    OPname: "Restaurants"
  }
];
const recommendList = [
  {
    RDimg: "./img/rcmd/osaka.jpg",
    RDtitle: "Osaka",
    RDlink: "#Osaka",
    RDprc: "6,160JPY/night average"
  },
  {
    RDimg: "./img/rcmd/okinawa.jpg",
    RDtitle: "Okinawa",
    RDlink: "#Okinawa",
    RDprc: "8,846 JPY/night average"
  },
  {
    RDimg: "./img/rcmd/kyoto.jpg",
    RDtitle: "Kyoto",
    RDlink: "#Kyoto",
    RDprc: "9,543JPY/night average"
  },
  {
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  }
];

const HomeList = [
  {
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
    BHimg: "./img/bch/osaka.jpg",
    BHtitle: "Osaka",
    BHprc: "6,160JPY/night average"
  }
];

const TopRateList = [
  {
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
    FTid: "FTAB-careers",
    FTlink: "#careers",
    FTname: "Careers",
    FTbadge: ""
  },
  {
    FTid: "FTAB-press",
    FTlink: "#press",
    FTname: "Press",
    FTbadge: ""
  },
  {
    FTid: "FTAB-policies",
    FTlink: "#policies",
    FTname: "Policies",
    FTbadge: ""
  },
  {
    FTid: "FTAB-help",
    FTlink: "#help",
    FTname: "Help",
    FTbadge: ""
  },
  {
    FTid: "FTAB-Diversity",
    FTlink: "#diversity",
    FTname: "Diversity & Belonging",
    FTbadge: ""
  },
  {
    FTid: "FTAB-Accesibility",
    FTlink: "#accesibility",
    FTname: "Accesibility",
    FTbadge: "New"
  }
];

const FooterDCVList = [
  {
    FTid: "FTDCV-T&S",
    FTlink: "#T&S",
    FTname: "Trust & Safety",
    FTbadge: ""
  },
  {
    FTid: "FTDCV-TVC",
    FTlink: "#Travel Credit",
    FTname: "Travel Credit",
    FTbadge: ""
  },
  {
    FTid: "FTDCV-GiftCards",
    FTlink: "#GiftCards",
    FTname: "Gift Cards",
    FTbadge: ""
  },
  {
    FTid: "FTDCV-AirbnbCitizen",
    FTlink: "#AirbnbCitizen",
    FTname: "Airbnb Citizen",
    FTbadge: ""
  },
  {
    FTid: "FTDCV-BzTravel",
    FTlink: "#BusinessTravel",
    FTname: "Business Travel",
    FTbadge: ""
  },
  {
    FTid: "FTDCV-Guidebooks",
    FTlink: "#Guidebooks",
    FTname: "Guidebooks",
    FTbadge: ""
  },
  {
    FTid: "FTDCV-Airbnbmag",
    FTlink: "#Airbnbmag",
    FTname: "Airbnbmag",
    FTbadge: ""
  }
];

const FooterHTList = [
  {
    FTid: "FTHT-WhyHost",
    FTlink: "#WhyHost",
    FTname: "Why Host",
    FTbadge: ""
  },
  {
    FTid: "FTHT-Hospitality",
    FTlink: "#Hospitality",
    FTname: "Hospitality",
    FTbadge: ""
  },
  {
    FTid: "FTHT-RspHT",
    FTlink: "#ResponsibleHosting",
    FTname: "Responsible Hosting",
    FTbadge: ""
  },
  {
    FTid: "FTHT-ComCenter",
    FTlink: "#ComCenter",
    FTname: "Community Center",
    FTbadge: ""
  },
  {
    FTid: "FTHT-HostExp",
    FTlink: "#HostExp",
    FTname: "Host an Experience",
    FTbadge: "New"
  },
  {
    FTid: "FTHT-OpenHomes",
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
