const navList = [
  {
    NVkey: 101,
    NVid: "h-home",
    NVlink: "#home",
    NVname: "Host a home"
  },
  {
    NVkey: 102,
    NVid: "h-exp",
    NVlink: "#exp",
    NVname: "Host an experience"
  },
  {
    NVkey: 103,
    NVid: "help",
    NVlink: "#help",
    NVname: "Help"
  },
  {
    NVkey: 104,
    NVid: "h-signup",
    NVlink: "#signup",
    NVname: "Sign up"
  },
  {
    NVkey: 105,
    NVid: "h-login",
    NVlink: "#login",
    NVname: "Log in"
  }
];

const GMTypeList = [
  {
    GMkey: 111,
    GMtype: "Adults",
    GMdsc: "",
    GMnumID: "GMnumAdults",
    GMidMinus: "GMAdultsMinus",
    GMidPlus: "GMAdultsPlus"
  },
  {
    GMkey: 112,
    GMtype: "Children",
    GMdsc: "Ages 2-12",
    GMnumID: "GMnumChildren",
    GMidMinus: "GMChildrenMinus",
    GMidPlus: "GMChildrenPlus"
  },
  {
    GMkey: 113,
    GMtype: "Infants",
    GMdsc: "Under 2",
    GMnumID: "GMnumInfants",
    GMidMinus: "GMInfantsMinus",
    GMidPlus: "GMInfantsPlus"
  }
];

const optionList = [
  {
    OPkey: 201,
    OPlink: "#Homes",
    OPimg: "./img/Option/casa.jpg",
    OPname: "Homes"
  },
  {
    OPkey: 202,
    OPlink: "#Experiences",
    OPimg: "./img/Option/experiences.jpg",
    OPname: "Experiences"
  },
  {
    OPkey: 203,
    OPlink: "#Restaurants",
    OPimg: "./img/Option/restaurantes.jpg",
    OPname: "Restaurants"
  }
];
const recommendList = [
  {
    RDkey: 401,
    RDindex: 0,
    RDimg: "./img/rcmd/osaka.jpg",
    RDtitle: "Osaka",
    RDlink: "#Osaka",
    RDprc: "6,160JPY/night average"
  },
  {
    RDkey: 402,
    RDindex: 1,
    RDimg: "./img/rcmd/okinawa.jpg",
    RDtitle: "Okinawa",
    RDlink: "#Okinawa",
    RDprc: "8,846 JPY/night average"
  },
  {
    RDkey: 403,
    RDindex: 2,
    RDimg: "./img/rcmd/kyoto.jpg",
    RDtitle: "Kyoto",
    RDlink: "#Kyoto",
    RDprc: "9,543JPY/night average"
  },
  {
    RDkey: 404,
    RDindex: 3,
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDkey: 405,
    RDindex: 4,
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDkey: 406,
    RDindex: 5,
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDkey: 407,
    RDindex: 6,
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDkey: 408,
    RDindex: 7,
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  },
  {
    RDkey: 409,
    RDindex: 8,
    RDimg: "./img/rcmd/oahu.jpg",
    RDtitle: "Oahu",
    RDlink: "#Oahu",
    RDprc: "18,828JPY/night average"
  }
];

const HomeList = [
  {
    HMkey: 601,
    HMlink: "#HomeListLink1",
    HMimg: "./img/Home/Aiako.jpg",
    HMplace: "CAMPER/RV · ALOZAINA",
    HMtitle: "Airstream 'Glamping' in Andalucia!",
    HMprice: "15,161",
    HMstar: " star5",
    HMstarnum: "84",
    HMSPhost: " · Superhost"
  },
  {
    HMkey: 602,
    HMlink: "#HomeListLink2",
    HMimg: "./img/Home/BCN.jpg",
    HMplace: "ENTIRE APARTMENT · HONGKOU",
    HMtitle: "#2 SHANGHIGH HOME",
    HMprice: "4,548",
    HMstar: " star5",
    HMstarnum: "390",
    HMSPhost: " · Superhost"
  },
  {
    HMkey: 603,
    HMlink: "#HomeListLink3",
    HMimg: "./img/Home/Beldui.jpg",
    HMplace: "ISLAND · FERN FOREST",
    HMtitle: "Dreamy Tropical Tree House",
    HMprice: "32,489",
    HMstar: " star5",
    HMstarnum: "607",
    HMSPhost: " · Superhost"
  },
  {
    HMkey: 604,
    HMlink: "#HomeListLink4",
    HMimg: "./img/Home/Bruja.jpg",
    HMplace: "HUT · ARMENIA",
    HMtitle: "Romantic Cabana with view",
    HMprice: "4,332",
    HMstar: " star5",
    HMstarnum: "221",
    HMSPhost: " · Superhost"
  },
  {
    HMkey: 605,
    HMlink: "#HomeListLink5",
    HMimg: "./img/Home/Donosti.jpg",
    HMplace: "CYCLADIC HOUSE · OIA",
    HMtitle: "Unique Architecture Cave House",
    HMprice: "60,646",
    HMstar: " star5",
    HMstarnum: "179",
    HMSPhost: " · Superhost"
  },
  {
    HMkey: 606,
    HMlink: "#HomeListLink6",
    HMimg: "./img/Home/Fuji.jpg",
    HMplace: "ENTIRE HOUSE · FUJIEDA",
    HMtitle: "Japan Charm&Tradition-Yui Valley(easy Tokyo/Kyoto)",
    HMprice: "11,479",
    HMstar: " star5",
    HMstarnum: "309",
    HMSPhost: " · Superhost"
  },
  {
    HMkey: 607,
    HMlink: "#HomeListLink7",
    HMimg: "./img/Home/Gaztelugatze.jpg",
    HMplace: "ENTIRE APARTMENT · PALERMO",
    HMtitle: "Palazzo Cattolica Art-Apartment",
    HMprice: "10,938",
    HMstar: " star5",
    HMstarnum: "313",
    HMSPhost: " · Superhost"
  },
  {
    HMkey: 608,
    HMlink: "#HomeListLink8",
    HMimg: "./img/Home/Getaria.jpg",
    HMplace: "CASTLE · TWENTYNINE PALMS",
    HMtitle: "Tile House",
    HMprice: "19,385",
    HMstar: " star5",
    HMstarnum: "363",
    HMSPhost: " · Superhost"
  }
];

const beachList = [
  {
    BHkey: 701,
    BHindex: 0,
    BHlink: "#link1",
    BHimg: "./img/bch/osaka.jpg",
    BHtitle: "Osaka",
    BHprc: "6,160JPY/night average"
  },
  {
    BHkey: 702,
    BHindex: 1,
    BHlink: "#link2",
    BHimg: "./img/bch/kyoto.jpg",
    BHtitle: "kyoto",
    BHprc: "6,160JPY/night average"
  },
  {
    BHkey: 703,
    BHindex: 2,
    BHlink: "#link3",
    BHimg: "./img/bch/oahu.jpg",
    BHtitle: "oahu",
    BHprc: "6,160JPY/night average"
  },
  {
    BHkey: 704,
    BHindex: 3,
    BHlink: "#link4",
    BHimg: "./img/bch/okinawa.jpg",
    BHtitle: "okinawa",
    BHprc: "6,160JPY/night average"
  },
  {
    BHkey: 705,
    BHindex: 4,
    BHlink: "#link5",
    BHimg: "./img/bch/osaka.jpg",
    BHtitle: "Osaka",
    BHprc: "6,160JPY/night average"
  }
];

const TopRateList = [
  {
    TRkey: 801,
    TRlink: "#TopRateLink1",
    TRimg: "./img/TR-exp/BIL.jpg",
    TRplace: "WORKSHOP · CHIANG MAI",
    TRtitle: "Thai Traditional Yantra Tattoo.",
    TRprice: "82",
    TRstar: "  star4-5",
    TRstarnum: "159",
    TRoption: ""
  },
  {
    TRkey: 802,
    TRlink: "#TopRateLink2",
    TRimg: "./img/TR-exp/BOL.jpg",
    TRplace: "DAY TRIP · RIO DE JANEIRO",
    TRtitle: "Sunrise + Secret pool + wild beaches!",
    TRprice: "66",
    TRstar: " star4-5",
    TRstarnum: "163",
    TRoption: "Also offered in French,Italian and 2 more"
  },
  {
    TRkey: 803,
    TRlink: "#TopRateLink3",
    TRimg: "./img/TR-exp/BRA.jpg",
    TRplace: "PHOTO SHOOT · TOKYO",
    TRtitle: "Your Personal Tokyo Photographer!",
    TRprice: "91",
    TRstar: " star4-5",
    TRstarnum: "437",
    TRoption: ""
  },
  {
    TRkey: 804,
    TRlink: "#TopRateLink4",
    TRimg: "./img/TR-exp/CHL.jpg",
    TRplace: "DANCE PARTY · WATTHANA",
    TRtitle: "The night to remember in Bangkok",
    TRprice: "44",
    TRstar: " star4-5",
    TRstarnum: "206",
    TRoption: ""
  },
  {
    TRkey: 805,
    TRlink: "#TopRateLink5",
    TRimg: "./img/TR-exp/DUB.jpg",
    TRplace: "GUIDED HIKE · HAYMARKET",
    TRtitle: "Figure 8 Pools Coastal Adventure Hike",
    TRprice: "106",
    TRstar: " star4-5",
    TRstarnum: "145",
    TRoption: ""
  },
  {
    TRkey: 806,
    TRlink: "#TopRateLink6",
    TRimg: "./img/TR-exp/Nica.jpg",
    TRplace: "DAY TRIP · LISBON",
    TRtitle: "This is SINTRA - a Day to Remember !",
    TRprice: "72",
    TRstar: " star4-5",
    TRstarnum: "783",
    TRoption: ""
  },
  {
    TRkey: 807,
    TRlink: "#TopRateLink7",
    TRimg: "./img/TR-exp/PER.jpg",
    TRplace: "SPA VISIT · DESERT HOT SPRINGS",
    TRtitle: "Hot Spring Sunset for Two",
    TRprice: "75",
    TRstar: " star4-5",
    TRstarnum: "347",
    TRoption: ""
  }
];

const DreamList = [
  {
    DRkey: 901,
    DRindex: 0,
    DRlink: "#DreamLink1",
    DRimg: "./img/DR-exp/Nica.jpg",
    DRplace: "Paris",
    DRprc: "12,300"
  },
  {
    DRkey: 902,
    DRindex: 1,
    DRlink: "#DreamLink2",
    DRimg: "./img/DR-exp//BIL.jpg",
    DRplace: "New York",
    DRprc: "13,718"
  },
  {
    DRkey: 903,
    DRindex: 2,
    DRlink: "#DreamLink3",
    DRimg: "./img/DR-exp/BOL.jpg",
    DRplace: "Los Angeles",
    DRprc: "14,816"
  },
  {
    DRkey: 904,
    DRindex: 3,
    DRlink: "#DreamLink4",
    DRimg: "./img/DR-exp/BRA.jpg",
    DRplace: "Paris",
    DRprc: "12,300"
  },
  {
    DRkey: 905,
    DRindex: 4,
    DRlink: "#DreamLink5",
    DRimg: "./img/DR-exp/CHL.jpg",
    DRplace: "London",
    DRprc: "13,801"
  },
  {
    DRkey: 906,
    DRindex: 5,
    DRlink: "#DreamLink6",
    DRimg: "./img/DR-exp/DUB.jpg",
    DRplace: "Singapore",
    DRprc: "10,257"
  }
];

const FooterABList = [
  {
    FTkey: 9001,
    FTABid: "FTAB-careers",
    FTlink: "#careers",
    FTname: "Careers",
    FTbadge: ""
  },
  {
    FTkey: 9002,
    FTABid: "FTAB-press",
    FTlink: "#press",
    FTname: "Press",
    FTbadge: ""
  },
  {
    FTkey: 9003,
    FTABid: "FTAB-policies",
    FTlink: "#policies",
    FTname: "Policies",
    FTbadge: ""
  },
  {
    FTkey: 9004,
    FTABid: "FTAB-help",
    FTlink: "#help",
    FTname: "Help",
    FTbadge: ""
  },
  {
    FTkey: 9005,
    FTABid: "FTAB-Diversity",
    FTlink: "#diversity",
    FTname: "Diversity & Belonging",
    FTbadge: ""
  },
  {
    FTkey: 9006,
    FTABid: "FTAB-Accesibility",
    FTlink: "#accesibility",
    FTname: "Accesibility",
    FTbadge: "New"
  }
];

const FooterDCVList = [
  {
    FTkey: 9011,
    FTDCVid: "FTDCV-T&S",
    FTlink: "#T&S",
    FTname: "Trust & Safety",
    FTbadge: ""
  },
  {
    FTkey: 9012,
    FTDCVid: "FTDCV-TVC",
    FTlink: "#Travel Credit",
    FTname: "Travel Credit",
    FTbadge: ""
  },
  {
    FTkey: 9013,
    FTDCVid: "FTDCV-GiftCards",
    FTlink: "#GiftCards",
    FTname: "Gift Cards",
    FTbadge: ""
  },
  {
    FTkey: 9014,
    FTDCVid: "FTDCV-AirbnbCitizen",
    FTlink: "#AirbnbCitizen",
    FTname: "Airbnb Citizen",
    FTbadge: ""
  },
  {
    FTkey: 9015,
    FTDCVid: "FTDCV-BzTravel",
    FTlink: "#BusinessTravel",
    FTname: "Business Travel",
    FTbadge: ""
  },
  {
    FTkey: 9016,
    FTDCVid: "FTDCV-Guidebooks",
    FTlink: "#Guidebooks",
    FTname: "Guidebooks",
    FTbadge: ""
  },
  {
    FTkey: 9017,
    FTDCVid: "FTDCV-Airbnbmag",
    FTlink: "#Airbnbmag",
    FTname: "Airbnbmag",
    FTbadge: ""
  }
];

const FooterHTList = [
  {
    FTkey: 9021,
    FTHTid: "FTHT-WhyHost",
    FTlink: "#WhyHost",
    FTname: "Why Host",
    FTbadge: ""
  },
  {
    FTkey: 9022,
    FTHTid: "FTHT-Hospitality",
    FTlink: "#Hospitality",
    FTname: "Hospitality",
    FTbadge: ""
  },
  {
    FTkey: 9023,
    FTHTid: "FTHT-RspHT",
    FTlink: "#ResponsibleHosting",
    FTname: "Responsible Hosting",
    FTbadge: ""
  },
  {
    FTkey: 9024,
    FTHTid: "FTHT-ComCenter",
    FTlink: "#ComCenter",
    FTname: "Community Center",
    FTbadge: ""
  },
  {
    FTkey: 9025,
    FTHTid: "FTHT-HostExp",
    FTlink: "#HostExp",
    FTname: "Host an Experience",
    FTbadge: "New"
  },
  {
    FTkey: 9026,
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
  beachList,
  TopRateList,
  DreamList,
  FooterABList,
  FooterDCVList,
  FooterHTList
};
