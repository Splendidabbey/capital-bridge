// Array containing country details starts here 
const countryDetails = [
    {
      country: "Afghanistan",
      capital: "Kabul",
      code: "AF",
      flag: "af.png",
    },
    {
      country: "Albania",
      capital: "Tirana",
      code: "AL",
      flag: "al.png",
    },
    {
      country: "Algeria",
      capital: "Alger",
      code: "DZ",
      flag: "dz.png",
    },
    {
      country: "American Samoa",
      capital: "Fagatogo",
      code: "AS",
      flag: "as.png",
    },
    {
      country: "Andorra",
      capital: "Andorra la Vella",
      code: "AD",
      flag: "ad.png",
    },
    {
      country: "Angola",
      capital: "Luanda",
      code: "AO",
      flag: "ao.png",
    },
    {
      country: "Anguilla",
      capital: "The Valley",
      code: "AI",
      flag: "ai.png",
    },
    // {
    //   country: "Antarctica",
    //   capital: null,
    //   code: "AQ",
    //   flag: "aq.png",
    // },
    {
      country: "Antigua and Barbuda",
      capital: "Saint John's",
      code: "AG",
      flag: "ag.png",
    },
    {
      country: "Argentina",
      capital: "Buenos Aires",
      code: "AR",
      flag: "ar.png",
    },
    {
      country: "Armenia",
      capital: "Yerevan",
      code: "AM",
      flag: "am.png",
    },
    {
      country: "Aruba",
      capital: "Oranjestad",
      code: "AW",
      flag: "aw.png",
    },
    {
      country: "Australia",
      capital: "Canberra",
      code: "AU",
      flag: "au.png",
    },
    {
      country: "Austria",
      capital: "Wien",
      code: "AT",
      flag: "at.png",
    },
    {
      country: "Azerbaijan",
      capital: "Baku",
      code: "AZ",
      flag: "az.png",
    },
    {
      country: "Bahamas",
      capital: "Nassau",
      code: "BS",
      flag: "bs.png",
    },
    {
      country: "Bahrain",
      capital: "al-Manama",
      code: "BH",
      flag: "bh.png",
    },
    {
      country: "Bangladesh",
      capital: "Dhaka",
      code: "BD",
      flag: "bd.png",
    },
    {
      country: "Barbados",
      capital: "Bridgetown",
      code: "BB",
      flag: "bb.png",
    },
    {
      country: "Belarus",
      capital: "Minsk",
      code: "BY",
      flag: "by.png",
    },
    {
      country: "Belgium",
      capital: "Bruxelles [Brussel]",
      code: "BE",
      flag: "be.png",
    },
    {
      country: "Belize",
      capital: "Belmopan",
      code: "BZ",
      flag: "bz.png",
    },
    {
      country: "Benin",
      capital: "Porto-Novo",
      code: "BJ",
      flag: "bj.png",
    },
    {
      country: "Bermuda",
      capital: "Hamilton",
      code: "BM",
      flag: "bm.png",
    },
    {
      country: "Bhutan",
      capital: "Thimphu",
      code: "BT",
      flag: "bt.png",
    },
    {
      country: "Bolivia",
      capital: "La Paz",
      code: "BO",
      flag: "bo.png",
    },
    {
      country: "Bosnia and Herzegovina",
      capital: "Sarajevo",
      code: "BA",
      flag: "ba.png",
    },
    {
      country: "Botswana",
      capital: "Gaborone",
      code: "BW",
      flag: "bw.png",
    },
    // {
    //   country: "Bouvet Island",
    //   capital: null,
    //   code: "BV",
    //   flag: "bv.png",
    // },
    {
      country: "Brazil",
      capital: "Bras??lia",
      code: "BR",
      flag: "br.png",
    },
    // {
    //   country: "British Indian Ocean Territory",
    //   capital: null,
    //   code: "IO",
    //   flag: "io.png",
    // },
    {
      country: "Brunei",
      capital: "Bandar Seri Begawan",
      code: "BN",
      flag: "bn.png",
    },
    {
      country: "Bulgaria",
      capital: "Sofia",
      code: "BG",
      flag: "bg.png",
    },
    {
      country: "Burkina Faso",
      capital: "Ouagadougou",
      code: "BF",
      flag: "bf.png",
    },
    {
      country: "Burundi",
      capital: "Bujumbura",
      code: "BI",
      flag: "bi.png",
    },
    {
      country: "Cambodia",
      capital: "Phnom Penh",
      code: "KH",
      flag: "kh.png",
    },
    {
      country: "Cameroon",
      capital: "Yaound",
      code: "CM",
      flag: "cm.png",
    },
    {
      country: "Canada",
      capital: "Ottawa",
      code: "CA",
      flag: "ca.png",
    },
    {
      country: "Cape Verde",
      capital: "Praia",
      code: "CV",
      flag: "cv.png",
    },
    {
      country: "Cayman Islands",
      capital: "George Town",
      code: "KY",
      flag: "ky.png",
    },
    {
      country: "Central African Republic",
      capital: "Bangui",
      code: "CF",
      flag: "cf.png",
    },
    {
      country: "Chad",
      capital: "N'Djam",
      code: "TD",
      flag: "td.png",
    },
    {
      country: "Chile",
      capital: "Santiago de Chile",
      code: "CL",
      flag: "cl.png",
    },
    {
      country: "China",
      capital: "Beijing",
      code: "CN",
      flag: "cn.png",
    },
    {
      country: "Christmas Island",
      capital: "Flying Fish Cove",
      code: "CX",
      flag: "cx.png",
    },
    {
      country: "Cocos (Keeling) Islands",
      capital: "West Island",
      code: "CC",
      flag: "cc.png",
    },
    {
      country: "Colombia",
      capital: "Santaf",
      code: "CO",
      flag: "co.png",
    },
    {
      country: "Comoros",
      capital: "Moroni",
      code: "KM",
      flag: "km.png",
    },
    {
      country: "Congo",
      capital: "Brazzaville",
      code: "CG",
      flag: "cg.png",
    },
    {
      country: "Cook Islands",
      capital: "Avarua",
      code: "CK",
      flag: "ck.png",
    },
    {
      country: "Costa Rica",
      capital: "San Jos??",
      code: "CR",
      flag: "cr.png",
    },
    {
      country: "Croatia",
      capital: "Zagreb",
      code: "Hr",
      flag: "hr.png",
    },
    {
      country: "Cuba",
      capital: "La Habana",
      code: "CU",
      flag: "cu.png",
    },
    {
      country: "Cyprus",
      capital: "Nicosia",
      code: "CY",
      flag: "cy.png",
    },
    {
      country: "Czech Republic",
      capital: "Praha",
      code: "CZ",
      flag: "cz.png"
    },
    {
      country: "Denmark",
      capital: "Copenhagen",
      code: "DK",
      flag: "dk.png"
    },
    {
      country: "Djibouti",
      capital: "Djibouti",
      code: "DJ",
      flag: "dj.png"
    },
    {
      country: "Dominica",
      capital: "Roseau",
      code: "DM",
      flag: "dm.png"
    },
    {
      country: "Dominican Republic",
      capital: "Santo Domingo de Guzm",
      code: "DO",
      flag: "do.png"
    },
    {
      country: "East Timor",
      capital: "Dili",
      code: "TL",
      flag: "tl.png"
    },
    {
      country: "Ecuador",
      capital: "Quito",
      code: "EC",
      flag: "ec.png"
    },
    {
      country: "Egypt",
      capital: "Cairo",
      code: "EG",
      flag: "eg.png"
    },
    {
      country: "El Salvador",
      capital: "San Salvador",
      code: "SV",
      flag: "sv.png"
    },
    {
      country: "England",
      capital: "London",
      code: "GB-ENG",
      flag: "gb-eng.png"
    },
    {
      country: "Equatorial Guinea",
      capital: "Malabo",
      code: "GQ",
      flag: "gq.png"
    },
    {
      country: "Eritrea",
      capital: "Asmara",
      code: "ER",
      flag: "er.png"
    },
    {
      country: "Estonia",
      capital: "Tallinn",
      code: "EE",
      flag: "ee.png"
    },
    {
      country: "Ethiopia",
      capital: "Addis Abeba",
      code: "ET",
      flag: "et.png"
    },
    {
      country: "Falkland Islands",
      capital: "Stanley",
      code: "FK",
      flag: "fk.png"
    },
    {
      country: "Faroe Islands",
      capital: "T??rshavn",
      code: "FO",
      flag: "fo.png"
    },
    {
      country: "Fiji Islands",
      capital: "Suva",
      code: "FJ",
      flag: "fj.png"
    },
    {
      country: "Finland",
      capital: "Helsinki [Helsingfors]",
      code: "FI",
      flag: "fi.png"
    },
    {
      country: "France",
      capital: "Paris",
      code: "FR",
      flag: "fr.png"
    },
    {
      country: "French Guiana",
      capital: "Cayenne",
      code: "GF",
      flag: "gf.png"
    },
    {
      country: "French Polynesia",
      capital: "Papeete",
      code: "PF",
      flag: "pf.png"
    },
    // {
    //   country: "French Southern territories",
    //   capital: null,
    //   code: "TF",
    //   flag: "tf.png"
    // },
    {
      country: "Gabon",
      capital: "Libreville",
      code: "GA",
      flag: "ga.png"
    },
    {
      country: "Gambia",
      capital: "Banjul",
      code: "GM",
      flag: "gm.png"
    },
    {
      country: "Georgia",
      capital: "Tbilisi",
      code: "GE",
      flag: "ge.png"
    },
    {
      country: "Germany",
      capital: "Berlin",
      code: "DE",
      flag: "de.png"
    },
    {
      country: "Ghana",
      capital: "Accra",
      code: "GH",
      flag: "gh.png"
    },
    {
      country: "Gibraltar",
      capital: "Gibraltar",
      code: "GI",
      flag: "gi.png"
    },
    {
      country: "Greece",
      capital: "Athenai",
      code: "GR",
      flag: "gr.png"
    },
    {
      country: "Greenland",
      capital: "Nuuk",
      code: "GL",
      flag: "gl.png"
    },
    {
      country: "Grenada",
      capital: "Saint George's",
      code: "GD",
      flag: "gd.png"
    },
    {
      country: "Guadeloupe",
      capital: "Basse-Terre",
      code: "GP",
      flag: "gp.png"
    },
    {
      country: "Guam",
      capital: "Aga",
      code: "GU",
      flag: "gu.png"
    },
    {
      country: "Guatemala",
      capital: "Ciudad de Guatemala",
      code: "GT",
      flag: "gt.png"
    },
    {
      country: "Guinea",
      capital: "Conakry",
      code: "GN",
      flag: "gn.png"
    },
    {
      country: "Guinea-Bissau",
      capital: "Bissau",
      code: "GW",
      flag: "gw.png"
    },
    {
      country: "Guyana",
      capital: "Georgetown",
      code: "GY",
      flag: "gy.png"
    },
    {
      country: "Haiti",
      capital: "Port-au-Prince",
      code: "HT",
      flag: "ht.png"
    },
    // {
    //   country: "Heard Island and McDonald Islands",
    //   capital: null,
    //   code: "HM",
    //   flag: "hm.png"
    // },
    {
      country: "Holy See (Vatican capital State)",
      capital: "Citt",
      code: "VA",
      flag: "va.png"
    },
    {
      country: "Honduras",
      capital: "Tegucigalpa",
      code: "HN",
      flag: "hn.png"
    },
    {
      country: "Hong Kong",
      capital: "Victoria",
      code: "HK",
      flag: "hk.png"
    },
    {
      country: "Hungary",
      capital: "Budapest",
      code: "HU",
      flag: "hu.png"
    },
    {
      country: "Iceland",
      capital: "Reykjav??k",
      code: "IS",
      flag: "is.png"
    },
    {
      country: "India",
      capital: "New Delhi",
      code: "IN",
      flag: "in.png"
    },
    {
      country: "Indonesia",
      capital: "Jakarta",
      code: "ID",
      flag: "id.png"
    },
    {
      country: "Iran",
      capital: "Tehran",
      code: "IR",
      flag: "ir.png"
    },
    {
      country: "Iraq",
      capital: "Baghdad",
      code: "IQ",
      flag: "iq.png"
    },
    {
      country: "Ireland",
      capital: "Dublin",
      code: "IE",
      flag: "ie.png"
    },
    {
      country: "Israel",
      capital: "Jerusalem",
      code: "IL",
      flag: "il.png"
    },
    {
      country: "Italy",
      capital: "Roma",
      code: "IT",
      flag: "it.png"
    },
    {
      country: "Ivory Coast",
      capital: "Yamoussoukro",
      code: "CI",
      flag: "ci.png"
    },
    {
      country: "Jamaica",
      capital: "Kingston",
      code: "JM",
      flag: "jm.png"
    },
    {
      country: "Japan",
      capital: "Tokyo",
      code: "JP",
      flag: "jp.png"
    },
    {
      country: "Jordan",
      capital: "Amman",
      code: "JO",
      flag: "jo.png"
    },
    {
      country: "Kazakhstan",
      capital: "Astana",
      code: "KZ",
      flag: "kz.png"
    },
    {
      country: "Kenya",
      capital: "Nairobi",
      code: "KE",
      flag: "ke.png"
    },
    {
      country: "Kiribati",
      capital: "Bairiki",
      code: "KI",
      flag: "ki.png"
    },
    {
      country: "Kuwait",
      capital: "Kuwait",
      code: "KW",
      flag: "kw.png"
    },
    {
      country: "Kyrgyzstan",
      capital: "Bishkek",
      code: "KG",
      flag: "kg.png"
    },
    {
      country: "Laos",
      capital: "Vientiane",
      code: "LA",
      flag: "la.png"
    },
    {
      country: "Latvia",
      capital: "Riga",
      code: "LV",
      flag: "lv.png"
    },
    {
      country: "Lebanon",
      capital: "Beirut",
      code: "LB",
      flag: "lb.png"
    },
    {
      country: "Lesotho",
      capital: "Maseru",
      code: "LS",
      flag: "ls.png"
    },
    {
      country: "Liberia",
      capital: "Monrovia",
      code: "LR",
      flag: "lr.png"
    },
    {
      country: "Libyan Arab Jamahiriya",
      capital: "Tripoli",
      code: "LY",
      flag: "ly.png"
    },
    {
      country: "Liechtenstein",
      capital: "Vaduz",
      code: "LI",
      flag: "li.png"
    },
    {
      country: "Lithuania",
      capital: "Vilnius",
      code: "LT",
      flag: "lt.png"
    },
    {
      country: "Luxembourg",
      capital: "Luxembourg [Luxemburg/L",
      code: "LU",
      flag: "lu.png"
    },
    {
      country: "Macao",
      capital: "Macao",
      code: "MO",
      flag: "mo.png"
    },
    {
      country: "North Macedonia",
      capital: "Skopje",
      code: "MK",
      flag: "mk.png"
    },
    {
      country: "Madagascar",
      capital: "Antananarivo",
      code: "MG",
      flag: "mg.png"
    },
    {
      country: "Malawi",
      capital: "Lilongwe",
      code: "MW",
      flag: "mw.png"
    },
    {
      country: "Malaysia",
      capital: "Kuala Lumpur",
      code: "MY",
      flag: "my.png"
    },
    {
      country: "Maldives",
      capital: "Male",
      code: "MV",
      flag: "mv.png"
    },
    {
      country: "Mali",
      capital: "Bamako",
      code: "ML",
      flag: "ml.png"
    },
    {
      country: "Malta",
      capital: "Valletta",
      code: "MT",
      flag: "mt.png"
    },
    {
      country: "Marshall Islands",
      capital: "Dalap-Uliga-Darrit",
      code: "MH",
      flag: "mh.png"
    },
    {
      country: "Martinique",
      capital: "Fort-de-France",
      code: "MQ",
      flag: "mq.png"
    },
    {
      country: "Mauritania",
      capital: "Nouakchott",
      code: "MR",
      flag: "mr.png"
    },
    {
      country: "Mauritius",
      capital: "Port-Louis",
      code: "MU",
      flag: "mu.png"
    },
    {
      country: "Mayotte",
      capital: "Mamoutzou",
      code: "YT",
      flag: "yt.png"
    },
    {
      country: "Mexico",
      capital: "Ciudad de M",
      code: "MX",
      flag: "mx.png"
    },
    {
      country: "Micronesia, Federated States of",
      capital: "Palikir",
      code: "FM",
      flag: "fm.png"
    },
    {
      country: "Moldova",
      capital: "Chisinau",
      code: "MD",
      flag: "md.png"
    },
    {
      country: "Monaco",
      capital: "Monaco-Ville",
      code: "MC",
      flag: "mc.png"
    },
    {
      country: "Mongolia",
      capital: "Ulan Bator",
      code: "MN",
      flag: "mn.png"
    },
    {
      country: "Montenegro",
      capital: "Podgorica",
      code: "ME",
      flag: "me.png"
    },
    {
      country: "Montserrat",
      capital: "Plymouth",
      code: "MS",
      flag: "ms.png"
    },
    {
      country: "Morocco",
      capital: "Rabat",
      code: "MA",
      flag: "ma.png"
    },
    {
      country: "Mozambique",
      capital: "Maputo",
      code: "MZ",
      flag: "mz.png"
    },
    {
      country: "Myanmar",
      capital: "Rangoon (Yangon)",
      code: "MM",
      flag: "mm.png"
    },
    {
      country: "Namibia",
      capital: "Windhoek",
      code: "NA",
      flag: "na.png"
    },
    {
      country: "Nauru",
      capital: "Yaren",
      code: "NR",
      flag: "nr.png"
    },
    {
      country: "Nepal",
      capital: "Kathmandu",
      code: "NP",
      flag: "np.png"
    },
    {
      country: "Netherlands",
      capital: "Amsterdam",
      code: "NL",
      flag: "nl.png"
    },
    // {
    //   country: "Netherlands Antilles",
    //   capital: "Willemstad",
    //   code: "NL",
    //   flag: "nl.png"
    // }, later
    {
      country: "New Caledonia",
      capital: "Noum",
      code: "NC",
      flag: "nc.png"
    },
    {
      country: "New Zealand",
      capital: "Wellington",
      code: "NZ",
      flag: "nz.png"
    },
    {
      country: "Nicaragua",
      capital: "Managua",
      code: "NI",
      flag: "ni.png"
    },
    {
      country: "Niger",
      capital: "Niamey",
      code: "NE",
      flag: "ne.png"
    },
    {
      country: "Nigeria",
      capital: "Abuja",
      code: "NG",
      flag: "ng.png"
    },
    {
      country: "Niue",
      capital: "Alofi",
      code: "NU",
      flag: "nu.png"
    },
    {
      country: "Norfolk Island",
      capital: "Kingston",
      code: "NF",
      flag: "nf.png"
    },
    {
      country: "North Korea",
      capital: "Pyongyang",
      code: "KP",
      flag: "kp.png"
    },
    {
      country: "Northern Ireland",
      capital: "Belfast",
      code: "GB-NIR",
      flag: "gb-nir.png"
    },
    {
      country: "Northern Mariana Islands",
      capital: "Garapan",
      code: "MP",
      flag: "mp.png"
    },
    {
      country: "Norway",
      capital: "Oslo",
      code: "NO",
      flag: "no.png"
    },
    {
      country: "Oman",
      capital: "Masqat",
      code: "OM",
      flag: "om.png"
    },
    {
      country: "Pakistan",
      capital: "Islamabad",
      code: "PK",
      flag: "pk.png"
    },
    {
      country: "Palau",
      capital: "Koror",
      code: "PW",
      flag: "pw.png"
    },
    {
      country: "Palestine",
      capital: "Gaza",
      code: "PS",
      flag: "ps.png"
    },
    {
      country: "Panama",
      capital: "Ciudad de Panam??",
      code: "PA",
      flag: "pa.png"
    },
    {
      country: "Papua New Guinea",
      capital: "Port Moresby",
      code: "PG",
      flag: "pg.png"
    },
    {
      country: "Paraguay",
      capital: "Asunci??n",
      code: "PY",
      flag: "py.png"
    },
    {
      country: "Peru",
      capital: "Lima",
      code: "PE",
      flag: "pe.png"
    },
    {
      country: "Philippines",
      capital: "Manila",
      code: "PH",
      flag: "ph.png"
    },
    {
      country: "Pitcairn",
      capital: "Adamstown",
      code: "PN",
      flag: "pn.png"
    },
    {
      country: "Poland",
      capital: "Warszawa",
      code: "PL",
      flag: "pl.png"
    },
    {
      country: "Portugal",
      capital: "Lisboa",
      code: "PT",
      flag: "pt.png"
    },
    {
      country: "Puerto Rico",
      capital: "San Juan",
      code: "PR",
      flag: "pr.png"
    },
    {
      country: "Qatar",
      capital: "Doha",
      code: "QA",
      flag: "qa.png"
    },
    {
      country: "Reunion",
      capital: "Saint-Denis",
      code: "RE",
      flag: "re.png"
    },
    {
      country: "Romania",
      capital: "Bucuresti",
      code: "RO",
      flag: "ro.png"
    },
    {
      country: "Russian Federation",
      capital: "Moscow",
      code: "RU",
      flag: "ru.png"
    },
    {
      country: "Rwanda",
      capital: "Kigali",
      code: "RW",
      flag: "rw.png"
    },
    {
      country: "Saint Helena",
      capital: "Jamestown",
      code: "SH",
      flag: "sh.png"
    },
    {
      country: "Saint Kitts and Nevis",
      capital: "Basseterre",
      code: "KN",
      flag: "kn.png"
    },
    {
      country: "Saint Lucia",
      capital: "Castries",
      code: "LC",
      flag: "lc.png"
    },
    {
      country: "Saint Pierre and Miquelon",
      capital: "Saint-Pierre",
      code: "PM",
      flag: "pm.png"
    },
    {
      country: "Saint Vincent and the Grenadines",
      capital: "Kingstown",
      code: "VC",
      flag: "vc.png"
    },
    {
      country: "Samoa",
      capital: "Apia",
      code: "WS",
      flag: "ws.png"
    },
    {
      country: "San Marino",
      capital: "San Marino",
      code: "SM",
      flag: "sm.png"
    },
    {
      country: "Sao Tome and Principe",
      capital: "S??o Tom??",
      code: "ST",
      flag: "st.png"
    },
    {
      country: "Saudi Arabia",
      capital: "Riyadh",
      code: "SA",
      flag: "sa.png"
    },
    {
      country: "Scotland",
      capital: "Edinburgh",
      code: "GB-SCT",
      flag: "gb-sct.png"
    },
    {
      country: "Senegal",
      capital: "Dakar",
      code: "SN",
      flag: "sn.png"
    },
    {
      country: "Serbia",
      capital: "Belgrade",
      code: "RS",
      flag: "rs.png"
    },
    {
      country: "Seychelles",
      capital: "Victoria",
      code: "SC",
      flag: "sc.png"
    },
    {
      country: "Sierra Leone",
      capital: "Freetown",
      code: "SL",
      flag: "sl.png"
    },
    {
      country: "Singapore",
      capital: "Singapore",
      code: "SG",
      flag: "sg.png"
    },
    {
      country: "Slovakia",
      capital: "Bratislava",
      code: "SK",
      flag: "sk.png"
    },
    {
      country: "Slovenia",
      capital: "Ljubljana",
      code: "SI",
      flag: "si.png"
    },
    {
      country: "Solomon Islands",
      capital: "Honiara",
      code: "SB",
      flag: "sb.png"
    },
    {
      country: "Somalia",
      capital: "Mogadishu",
      code: "SO",
      flag: "so.png"
    },
    {
      country: "South Africa",
      capital: "Pretoria",
      code: "ZA",
      flag: "za.png"
    },
    // {
    //   country: "South Georgia and the South Sandwich Islands",
    //   capital: null,
    //   code: "GS",
    //   flag: "gs.png"
    // },
    {
      country: "South Korea",
      capital: "Seoul",
      code: "KR",
      flag: "kr.png"
    },
    {
      country: "South Sudan",
      capital: "Juba",
      code: "SS",
      flag: "ss.png"
    },
    {
      country: "Spain",
      capital: "Madrid",
      code: "ES",
      flag: "es.png"
    },
    // {
    //   country: "Sri Lanka",
    //   capital: null,
    //   code: "LK",
    //   flag: "lk.png"
    // },
    {
      country: "Sudan",
      capital: "Khartum",
      code: "SD",
      flag: "sd.png"
    },
    {
      country: "Suriname",
      capital: "Paramaribo",
      code: "SR",
      flag: "sr.png"
    },
    {
      country: "Svalbard and Jan Mayen",
      capital: "Longyearbyen",
      code: "SJ",
      flag: "sj.png"
    },
    {
      country: "Swaziland",
      capital: "Mbabane",
      code: "SZ",
      flag: "sz.png"
    },
    {
      country: "Sweden",
      capital: "Stockholm",
      code: "SE",
      flag: "se.png"
    },
    {
      country: "Switzerland",
      capital: "Bern",
      code: "CH",
      flag: "ch.png"
    },
    {
      country: "Syria",
      capital: "Damascus",
      code: "SY",
      flag: "sy.png"
    },
    {
      country: "Tajikistan",
      capital: "Dushanbe",
      code: "TJ",
      flag: "tj.png"
    },
    {
      country: "Tanzania",
      capital: "Dodoma",
      code: "TZ",
      flag: "tz.png"
    },
    {
      country: "Thailand",
      capital: "Bangkok",
      code: "TH",
      flag: "th.png"
    },
    {
      country: "The Democratic Republic of Congo",
      capital: "Kinshasa",
      code: "CD",
      flag: "cd.png"
    },
    {
      country: "Togo",
      capital: "Lom??",
      code: "TG",
      flag: "tg.png"
    },
    {
      country: "Tokelau",
      capital: "Fakaofo",
      code: "TK",
      flag: "tk.png"
    },
    {
      country: "Tonga",
      capital: "Nuku'alofa",
      code: "TO",
      flag: "to.png"
    },
    {
      country: "Trinidad and Tobago",
      capital: "Port-of-Spain",
      code: "TT",
      flag: "tt.png"
    },
    {
      country: "Tunisia",
      capital: "Tunis",
      code: "TN",
      flag: "tn.png"
    },
    {
      country: "Turkey",
      capital: "Ankara",
      code: "TR",
      flag: "tr.png"
    },
    {
      country: "Turkmenistan",
      capital: "Ashgabat",
      code: "TM",
      flag: "tm.png"
    },
    {
      country: "Turks and Caicos Islands",
      capital: "Cockburn Town",
      code: "TC",
      flag: "tc.png"
    },
    {
      country: "Tuvalu",
      capital: "Funafuti",
      code: "TV",
      flag: "tv.png"
    },
    {
      country: "Uganda",
      capital: "Kampala",
      code: "UG",
      flag: "ug.png"
    },
    {
      country: "Ukraine",
      capital: "Kyiv",
      code: "UA",
      flag: "ua.png"
    },
    {
      country: "United Arab Emirates",
      capital: "Abu Dhabi",
      code: "AE",
      flag: "ae.png"
    },
    {
      country: "United Kingdom",
      capital: "London",
      code: "GB",
      flag: "gb.png"
    },
    {
      country: "United States",
      capital: "Washington",
      code: "US",
      flag: "us.png"
    },
    // {
    //   country: "United States Minor Outlying Islands",
    //   capital: null,
    // },
    {
      country: "Uruguay",
      capital: "Montevideo",
      code: "UY",
      flag: "uy.png"
    },
    {
      country: "Uzbekistan",
      capital: "Toskent",
      code: "UZ",
      flag: "uz.png"
    },
    {
      country: "Vanuatu",
      capital: "Port-Vila",
      code: "VU",
      flag: "vu.png"
    },
    {
      country: "Venezuela",
      capital: "Caracas",
      code: "VE",
      flag: "ve.png"
    },
    {
      country: "Vietnam",
      capital: "Hanoi",
      code: "VN",
      flag: "vn.png"
    },
    {
      country: "Virgin Islands, British",
      capital: "Road Town",
      code: "VG",
      flag: "vg.png"
    },
    {
      country: "Virgin Islands, U.S.",
      capital: "Charlotte Amalie",
      code: "VI",
      flag: "vi.png"
    },
    {
      country: "Wales",
      capital: "Cardiff",
      code: "GB-WLS",
      flag: "gb-wls.png"
    },
    {
      country: "Wallis and Futuna",
      capital: "Mata-Utu",
      code: "WF",
      flag: "wf.png"
    },
    {
      country: "Western Sahara",
      capital: "El-Aai",
      code: "EH",
      flag: "eh.png"
    },
    {
      country: "Yemen",
      capital: "Sanaa",
      code: "YE",
      flag: "ye.png"
    },
    {
      country: "Zambia",
      capital: "Lusaka",
      code: "ZM",
      flag: "zm.png"
    },
    {
      country: "Zimbabwe",
      capital: "Harare",
      code: "ZW",
      flag: "zw.png"
    },
  ];
// Array containing country details ends here 

let randomPosition, countryCapital, answer, countryCode, flag;
const container = document.querySelector('.container');
const gameInfo = document.querySelector('.game-info');

function renderGame() {
  countryDetails.sort(() => 0.5 - Math.random());
  randomPosition = Math.floor(Math.random() * countryDetails.length);
  countryCapital = countryDetails[randomPosition].country;
  answer = countryDetails[randomPosition].capital;
  countryCode = countryDetails[randomPosition].code;
  flag = "png100px/" + countryDetails[randomPosition].flag;
}

renderGame();

let options = [answer];
function getOptions(answer) {
  while (options.length < 4) {
    let random = Math.floor(Math.random() * countryDetails.length);
    let randomOptions = countryDetails[random].capital;
    if ((randomOptions != answer) && (randomOptions != null)){
      options.push(randomOptions);
    }
  }
  options.sort(() => 0.5 - Math.random());
}

const questionTab = document.querySelector("#quest");

function showQuestion(countryCapital, answer, countryCode, flag, options) {
  getOptions(answer);
  const questionText = "Which of this is the capital of " + countryCapital + " (" + countryCode + ")";
  const questionTab = document.querySelector("#quest");

  let questionImageDisplay = document.createElement("div");
  questionImageDisplay.className = "question-image";
  let questionImage = document.createElement("img");
  questionImage.setAttribute("src", flag);
  questionImageDisplay.appendChild(questionImage)

  let question = document.createElement("div");
  question.className = "question";
  questionPara = document.createElement("p");
  questionPara.appendChild(document.createTextNode(questionText));
  question.appendChild(questionPara);

  questionTab.appendChild(questionImageDisplay);
  questionTab.appendChild(question);

  options.forEach(option => {
    let input = document.createElement("input");
    input.id = (option);
    input.setAttribute("type", "radio");
    input.addEventListener("click", checkAnswer);
    input.classList = "input-radio";

    let label = document.createElement("label");
    label.setAttribute("for", option);
    label.classList = "radio-label";
    let span = document.createElement("span");
    span.classList = "alphabet";
    if (options[0] == option) {
      span.appendChild(document.createTextNode("A"));
    }
    else if (options[1] == option) {
      span.appendChild(document.createTextNode("B"));
    }
    else if (options[2] == option) {
      span.appendChild(document.createTextNode("C"));
    }
    else if (options[3] == option) {
      span.appendChild(document.createTextNode("D"));
    }
    label.appendChild(span);
    label.appendChild(document.createTextNode(option));
    questionTab.appendChild(input);
    questionTab.appendChild(label);
  });
}

setTimeout(function() {
  showQuestion(countryCapital, answer, countryCode, flag, options)
}, 1500);

let answercounter = 0;
let questionCounter = 0;

function checkAnswer(e) {
  const selected = e.target.getAttribute("id");
  const possibleSelections = document.querySelectorAll(".input-radio");
  const selectedInput = e.target;
  let score = document.getElementById("score");
  let endScore = document.getElementById("end-score");
  answeredQuestions = document.getElementById("answered");
  questionCounter ++;

  if (selected === answer) {
    answercounter ++;
    score.innerText = answercounter;
  }

  possibleSelections.forEach(possibleSelection => {
    if (possibleSelection.id != answer) {
      possibleSelection.classList.add("wrong");
    } else {
      possibleSelection.classList.add("answer");
      possibleSelection.removeEventListener("click", checkAnswer);
    }
  });

  answeredQuestions.innerText = questionCounter;
  
  renderGame();
  
  options = null;
  options = [answer];
  
  setTimeout(function() {
    questionTab.innerHTML = "";
    if(questionCounter === 10) {
      container.style.display = "none";
      gameInfo.style.display = "block";
      endScore.innerText = answercounter;
    }

    showQuestion(countryCapital, answer, countryCode, flag, options);
  }, 1500);
}