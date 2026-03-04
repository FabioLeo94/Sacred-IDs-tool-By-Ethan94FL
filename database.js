const mobs = [
    {
        "id": "1",
        "value": "serafino"
    },
    {
        "id": "2",
        "value": "Gladiatore"
    },
    {
        "id": "3",
        "value": "Mago guerriero"
    },
    {
        "id": "4",
        "value": "Elfo oscuro"
    },
    {
        "id": "5",
        "value": "Elfo silvano"
    },
    {
        "id": "6",
        "value": "Vampiressa"
    },
    {
        "id": "7",
        "value": "Vampiressa"
    },
    {
        "id": "8",
        "value": "Nano"
    },
    {
        "id": "9",
        "value": "Diavola"
    },
    {
        "id": "10 - 31",
        "value": "-"
    },
    {
        "id": "32",
        "value": "Scheletro"
    },
    {
        "id": "33",
        "value": "Zombie"
    },
    {
        "id": "34",
        "value": "Lich"
    },
    {
        "id": "35",
        "value": "Lucertola Volante"
    },
    {
        "id": "36",
        "value": "Spirito maligno"
    },
    {
        "id": "37",
        "value": "Orchetto capoclan"
    },
    {
        "id": "38",
        "value": "Orchetto guerriero"
    },
    {
        "id": "39",
        "value": "Orco guerriero"
    },
    {
        "id": "40",
        "value": "Orco capoclan"
    },
    {
        "id": "41",
        "value": "Minotauro"
    },
    {
        "id": "42",
        "value": "Minotauro guerriero"
    },
    {
        "id": "43",
        "value": "Minotauro capo"
    },
    {
        "id": "44",
        "value": "Mummia"
    },
    {
        "id": "45",
        "value": "Gargoyle"
    },
    {
        "id": "46",
        "value": "Fantasma"
    },
    {
        "id": "47",
        "value": "Arpia"
    },
    {
        "id": "48",
        "value": "Mago scheletro"
    },
    {
        "id": "49",
        "value": "Gigante della collina"
    },
    {
        "id": "50",
        "value": "Troll di ancaria"
    },
    {
        "id": "51",
        "value": "Gigante del gielo"
    },
    {
        "id": "52",
        "value": "Draconis Mortis"
    },
    {
        "id": "53",
        "value": "LLith'Bah, il demone di sakkara"
    },
    {
        "id": "54",
        "value": "Viverna"
    },
    {
        "id": "55",
        "value": "Tarantula mortis"
    },
    {
        "id": "56",
        "value": "Pesce delle caverne"
    },
    {
        "id": "57",
        "value": "Gator mortis"
    },
    {
        "id": "58",
        "value": "Raptor carnis"
    },
    {
        "id": "59",
        "value": "Varano alato"
    },
    {
        "id": "60",
        "value": "Gargoyle di pietra"
    },
    {
        "id": "61",
        "value": "Gargoyle minore"
    },
    {
        "id": "62",
        "value": "Gargoyle maggiore"
    },
    {
        "id": "63",
        "value": "Anima persa"
    },
    {
        "id": "64",
        "value": "Diavolo delle dune"
    },
    {
        "id": "65",
        "value": "Mummia del deserto"
    },
    {
        "id": "66",
        "value": "Morte mummificata"
    },
    {
        "id": "67",
        "value": "Orchetto shamano"
    },
    {
        "id": "68",
        "value": "Demone del fuoco minore"
    },
    {
        "id": "69",
        "value": "Scorpione"
    },
    {
        "id": "70",
        "value": "Arpia di fuoco"
    },
    {
        "id": "71",
        "value": "Tarantula musculus"
    },
    {
        "id": "72",
        "value": "Unicorno"
    },
    {
        "id": "73",
        "value": "Troll di fuoco"
    },
    {
        "id": "74",
        "value": "Sisslith, il drago di fuoco"
    },
    {
        "id": "75",
        "value": "Tarantula Gravis"
    },
    {
        "id": "76",
        "value": "Goblin guerriero"
    },
    {
        "id": "77",
        "value": "Glubba"
    },
    {
        "id": "78",
        "value": "Giocoliere"
    },
    {
        "id": "79",
        "value": "Giocoliere"
    },
    {
        "id": "80",
        "value": "Mago scheletro"
    },
    {
        "id": "81",
        "value": "Illusionista animato"
    },
    {
        "id": "82",
        "value": "Giocoliere"
    },
    {
        "id": "83",
        "value": "Wilbur"
    },
    {
        "id": "84",
        "value": "Orchetto campione"
    },
    {
        "id": "85",
        "value": "Orchetto guerriero"
    },
    {
        "id": "86",
        "value": "Orchetto cacciatore"
    },
    {
        "id": "87",
        "value": "Orchetto allevatore"
    },
    {
        "id": "88",
        "value": "D'Cay, signore degli inferi"
    },
    {
        "id": "89",
        "value": "Gargoyle di ghiaccio"
    },
    {
        "id": "90",
        "value": "Demone del fuoco subordinato, del girone esterno"
    },
    {
        "id": "91",
        "value": "Gargoyle dell'acqua"
    },
    {
        "id": "92",
        "value": "Gargoyle della foresta"
    },
    {
        "id": "93",
        "value": "Arpia sanguinaria"
    },
    {
        "id": "94",
        "value": "Demone di sakkara"
    },
    {
        "id": "95",
        "value": "Arpia nera di Shaddar-Nur"
    },
    {
        "id": "96",
        "value": "Lucertola della sabbia"
    },
    {
        "id": "97",
        "value": "Lucertola del ghiaccio"
    },
    {
        "id": "98",
        "value": "Lucertola del fuoco"
    },
    {
        "id": "99",
        "value": "Tarantula medialis"
    },
    {
        "id": "100",
        "value": "Sisslith, guardiano di Frostgard"
    },
    {
        "id": "101",
        "value": "Lorinor di Tyr-Fasul"
    },
    {
        "id": "102",
        "value": "Sirithcam, Guardiano del fuoco"
    },
    {
        "id": "103",
        "value": "Acutami delle paludi"
    },
    {
        "id": "104",
        "value": "Giocoliere"
    },
    {
        "id": "105",
        "value": "Elfo oscuro di Zhuma'Sharil"
    },
    {
        "id": "106",
        "value": "Arpia magica"
    },
    {
        "id": "107",
        "value": "Arpia delle paludi"
    },
    {
        "id": "108",
        "value": "Elfo della foresta di Tyr-Hadar"
    },
    {
        "id": "109",
        "value": "Tarantola noxtralis"
    },
    {
        "id": "110 - 111",
        "value": "-"
    },
    {
        "id": "112",
        "value": "Morto decapitato"
    },
    {
        "id": "113",
        "value": "Scheletro vivente"
    },
    {
        "id": "114",
        "value": "Scheletro decapitato"
    },
    {
        "id": "115",
        "value": "Scheletro"
    },
    {
        "id": "116",
        "value": "Servo irrequieto"
    },
    {
        "id": "117",
        "value": "Morto vivente"
    },
    {
        "id": "118",
        "value": "Goblin del gelo"
    },
    {
        "id": "119",
        "value": "Lich minore"
    },
    {
        "id": "120",
        "value": "Zombie magico"
    },
    {
        "id": "121",
        "value": "Nemico in decomposizione"
    },
    {
        "id": "122",
        "value": "Carne marcescente"
    },
    {
        "id": "123",
        "value": "Divoratore degli inferi"
    },
    {
        "id": "124",
        "value": "Troll velenoso"
    },
    {
        "id": "125",
        "value": "Spirito evanescente"
    },
    {
        "id": "126",
        "value": "Succhiavita degli Inferi"
    },
    {
        "id": "127",
        "value": "Goblin shamano"
    },
    {
        "id": "128",
        "value": "Goblin campione"
    },
    {
        "id": "129",
        "value": "Stregone dei gonblin di ghiaccio"
    },
    {
        "id": "130",
        "value": "Guerriero fantasma orchetto"
    },
    {
        "id": "131",
        "value": "Guerriero dell'apocalisse"
    },
    {
        "id": "132",
        "value": "Paladino dell'ordine dei serafini"
    },
    {
        "id": "133",
        "value": "Elfo oscuro di Tak'Ahil"
    },
    {
        "id": "134",
        "value": "Elfo della foresta di Tyr-Fasul"
    },
    {
        "id": "135",
        "value": "Guardiano degli anziani"
    },
    {
        "id": "136",
        "value": "Karissal, guardia medusiana"
    },
    {
        "id": "137",
        "value": "Gigante montano"
    },
    {
        "id": "138 - 139",
        "value": "-"
    },
    {
        "id": "140",
        "value": "Elfo del ghiaccio"
    },
    {
        "id": "141",
        "value": "Sacerdotessa degli elfi del ghiaccio"
    },
    {
        "id": "142",
        "value": "Goblin zombie"
    },
    {
        "id": "143",
        "value": "Goblin zombi mago"
    },
    {
        "id": "144",
        "value": "H'Runga'zz"
    },
    {
        "id": "145",
        "value": "Bambini del dio della foresta"
    },
    {
        "id": "146",
        "value": "(senza nome)"
    },
    {
        "id": "147 - 162",
        "value": "-"
    },
    {
        "id": "163",
        "value": "Granchio chiazzato"
    },
    {
        "id": "164",
        "value": "Pesci (senza nome)"
    },
    {
        "id": "165",
        "value": "Pesci (senza nome)"
    },
    {
        "id": "166",
        "value": "Pesci (senza nome)"
    },
    {
        "id": "167",
        "value": "(senza nome)"
    },
    {
        "id": "168 - 169",
        "value": "-"
    },
    {
        "id": "170",
        "value": "Pirata zombie"
    },
    {
        "id": "171",
        "value": "Pirata"
    },
    {
        "id": "172",
        "value": "Pirata"
    },
    {
        "id": "173",
        "value": "Pirata"
    },
    {
        "id": "174",
        "value": "Pirata"
    },
    {
        "id": "175",
        "value": "Pirata"
    },
    {
        "id": "176",
        "value": "Donna pirata"
    },
    {
        "id": "177",
        "value": "Donna pirata"
    },
    {
        "id": "178",
        "value": "Pirata turbato"
    },
    {
        "id": "179",
        "value": "Pirata inquieto"
    },
    {
        "id": "180",
        "value": "Scheletro pirata"
    },
    {
        "id": "181",
        "value": "Pirata non-morto"
    },
    {
        "id": "182",
        "value": "Mago (senza nome)"
    },
    {
        "id": "183",
        "value": "Handukkar (senza nome)"
    },
    {
        "id": "184",
        "value": "Guardia di Anducar"
    },
    {
        "id": "185",
        "value": "Signore dei demoni"
    },
    {
        "id": "186",
        "value": "Pianta carnivora gigante"
    },
    {
        "id": "187",
        "value": "Guardia delle ombre"
    },
    {
        "id": "188",
        "value": "Glorb"
    },
    {
        "id": "189",
        "value": "Cacciaglorb"
    },
    {
        "id": "190",
        "value": "Calabrone"
    },
    {
        "id": "191",
        "value": "Larva piccola"
    },
    {
        "id": "192",
        "value": "Guerriero nuk-nuk"
    },
    {
        "id": "193",
        "value": "Mosca gigante"
    },
    {
        "id": "194",
        "value": "Insettoide"
    },
    {
        "id": "195",
        "value": "Verme di fango"
    },
    {
        "id": "196",
        "value": "Terrore sferzante"
    },
    {
        "id": "197",
        "value": "Mohkva"
    },
    {
        "id": "198",
        "value": "Soffocatore"
    },
    {
        "id": "199",
        "value": "Cavaliere Mohkva"
    },
    {
        "id": "200",
        "value": "Acridide selvatico"
    },
    {
        "id": "201",
        "value": "Acridide (CAVALCABILE)"
    },
    {
        "id": "202",
        "value": "Frazzler"
    },
    {
        "id": "203",
        "value": "Cerebropodo"
    },
    {
        "id": "204",
        "value": "Golem infernale"
    },
    {
        "id": "205",
        "value": "Guardia argentate dell'ombra"
    },
    {
        "id": "206",
        "value": "Guardia dorata delle ombre"
    },
    {
        "id": "207",
        "value": "Guardia diabolica delle ombre"
    },
    {
        "id": "208",
        "value": "Guardia infernale delle ombre"
    },
    {
        "id": "209",
        "value": "Granchio accetta"
    },
    {
        "id": "210",
        "value": "Folletto maligno"
    },
    {
        "id": "211",
        "value": "Howler"
    },
    {
        "id": "212",
        "value": "Howler shamano"
    },
    {
        "id": "213",
        "value": "Donna Mohkva"
    },
    {
        "id": "214",
        "value": "Pirata in decomposizione"
    },
    {
        "id": "215",
        "value": "Pirata putrefatto"
    },
    {
        "id": "216",
        "value": "Druido driade"
    },
    {
        "id": "217",
        "value": "Esploratore driade"
    },
    {
        "id": "218",
        "value": "Furia driade"
    },
    {
        "id": "219",
        "value": "Cacciatrice driade"
    },
    {
        "id": "220",
        "value": "Haduk"
    },
    {
        "id": "221",
        "value": "Haduk"
    },
    {
        "id": "222",
        "value": "(senza nome) NPC"
    },
    {
        "id": "223",
        "value": "(senza nome)"
    },
    {
        "id": "224",
        "value": "(senza nome) NPC PARLANTE"
    },
    {
        "id": "225",
        "value": "Uomo del deserto"
    },
    {
        "id": "226",
        "value": "Uomo del deserto"
    },
    {
        "id": "227",
        "value": "Donna del deserto"
    },
    {
        "id": "228",
        "value": "Donna del deserto"
    },
    {
        "id": "229",
        "value": "Bambino del deserto"
    },
    {
        "id": "230",
        "value": "Bambino del deserto"
    },
    {
        "id": "231",
        "value": "Bambino del deserto"
    },
    {
        "id": "232",
        "value": "Daretiano"
    },
    {
        "id": "233",
        "value": "Daretiana"
    },
    {
        "id": "234",
        "value": "Ragno del bosco"
    },
    {
        "id": "235",
        "value": "Aracnide ardente"
    },
    {
        "id": "236",
        "value": "Ragno guerriero"
    },
    {
        "id": "237",
        "value": "Araneide ardente gigante"
    },
    {
        "id": "238",
        "value": "Driade"
    },
    {
        "id": "239",
        "value": "Mercante daretiano"
    },
    {
        "id": "240",
        "value": "Maestro di combattimento daretiano"
    },
    {
        "id": "241",
        "value": "Fabbro daretiano"
    },
    {
        "id": "242",
        "value": "Mercante Haduk"
    },
    {
        "id": "243",
        "value": "Fabbro Haduk"
    },
    {
        "id": "244",
        "value": "Maestro di combattimento Haduk"
    },
    {
        "id": "245",
        "value": "Glorb di bronzo"
    },
    {
        "id": "246",
        "value": "insettoide gigante"
    },
    {
        "id": "247",
        "value": "Regina dei vermi del fango"
    },
    {
        "id": "248",
        "value": "Piccolo verme del fango"
    },
    {
        "id": "249",
        "value": "Guadia d'élite Anducar"
    },
    {
        "id": "250",
        "value": "Signore dei demoni"
    },
    {
        "id": "251",
        "value": "Signore dei demoni"
    },
    {
        "id": "252",
        "value": "Signore dei demoni"
    },
    {
        "id": "253",
        "value": "Guardia fanatica delle ombre"
    },
    {
        "id": "254",
        "value": "Guardia d'élite delle ombre"
    },
    {
        "id": "255",
        "value": "Campione delle guardie delle ombre"
    },
    {
        "id": "256",
        "value": "Shaddar'Rim - Raptor di Shaddar"
    },
    {
        "id": "257",
        "value": "Soldato valoriano"
    },
    {
        "id": "258",
        "value": "Mago oscuro del sangue"
    },
    {
        "id": "259",
        "value": "Ladro"
    },
    {
        "id": "260",
        "value": "Ladro"
    },
    {
        "id": "261",
        "value": "Khorad- Nur'him - destriero da guerra"
    },
    {
        "id": "262",
        "value": "Illusionista"
    },
    {
        "id": "263",
        "value": "Mago"
    },
    {
        "id": "264",
        "value": "Stregone di Surukani"
    },
    {
        "id": "265",
        "value": "Fachiro delle vipere"
    },
    {
        "id": "266",
        "value": "Mago di pyros"
    },
    {
        "id": "267",
        "value": "Inquisitore occultarmis"
    },
    {
        "id": "268",
        "value": "Stregone del fiume"
    },
    {
        "id": "269",
        "value": "Mago"
    },
    {
        "id": "270",
        "value": "Mago"
    },
    {
        "id": "271",
        "value": "Mago"
    },
    {
        "id": "272",
        "value": "Mercante di schiavi"
    },
    {
        "id": "273",
        "value": "Predone"
    },
    {
        "id": "274",
        "value": "Soldato di DeMordrey"
    },
    {
        "id": "275",
        "value": "Reazionario di DeMordrey"
    },
    {
        "id": "276",
        "value": "Fanteria di DeMordrey"
    },
    {
        "id": "277",
        "value": "Guerriero Sharuka di DeMordrey"
    },
    {
        "id": "278",
        "value": "Maestro spadaccino di DeMordrey"
    },
    {
        "id": "279",
        "value": "Soldato valoriano"
    },
    {
        "id": "280",
        "value": "Mercante di Urkuk"
    },
    {
        "id": "281",
        "value": "Difensore dell'onore mascarelliano"
    },
    {
        "id": "282",
        "value": "Maestro spadaccino mascarelliano"
    },
    {
        "id": "283",
        "value": "Mercenario di Hedgenton"
    },
    {
        "id": "284",
        "value": "Pretoriano"
    },
    {
        "id": "285",
        "value": "Fante mascarelliano"
    },
    {
        "id": "286",
        "value": "Spadaccino della corona"
    },
    {
        "id": "287",
        "value": "Cacciatore di sangue di DeMordrey"
    },
    {
        "id": "288",
        "value": "Pioniere reale"
    },
    {
        "id": "289",
        "value": "Predone di Urkuk"
    },
    {
        "id": "290",
        "value": "Armigeri mascarelliani"
    },
    {
        "id": "291",
        "value": "Difensore della virtù mascarelliano"
    },
    {
        "id": "292",
        "value": "Soldato disertore"
    },
    {
        "id": "293",
        "value": "Soldato mercenario di Hedgenton"
    },
    {
        "id": "294",
        "value": "Portabandiera mascarelliano"
    },
    {
        "id": "295",
        "value": "Maestro spadaccino valoriano"
    },
    {
        "id": "296",
        "value": "Capitano Sharuka di DeMordrey"
    },
    {
        "id": "297",
        "value": "Cavaliere che ha giurato fedeltà"
    },
    {
        "id": "298",
        "value": "Ronin di Urkuk"
    },
    {
        "id": "299",
        "value": "Cavaliere mascarelliano"
    },
    {
        "id": "300",
        "value": "Spadaccino mascarelliano"
    },
    {
        "id": "301",
        "value": "Maestro spadaccino salariato"
    },
    {
        "id": "302",
        "value": "Guerriero corazzato"
    },
    {
        "id": "303",
        "value": "Guerriero mascarelliano"
    },
    {
        "id": "304",
        "value": "Brigante"
    },
    {
        "id": "305",
        "value": "Ladro"
    },
    {
        "id": "306",
        "value": "Cacciatore di schiavi"
    },
    {
        "id": "307",
        "value": "Brigante"
    },
    {
        "id": "308",
        "value": "Tagliagole"
    },
    {
        "id": "309",
        "value": "Stregone"
    },
    {
        "id": "310",
        "value": "Druido"
    },
    {
        "id": "311",
        "value": "Sacerdote di sakkara"
    },
    {
        "id": "312",
        "value": "Sacerdote di sakkara"
    },
    {
        "id": "313",
        "value": "Fuorilegge"
    },
    {
        "id": "314",
        "value": "Adescatrice"
    },
    {
        "id": "315",
        "value": "Barbaro"
    },
    {
        "id": "316",
        "value": "Amazzone"
    },
    {
        "id": "317",
        "value": "Maestro delle arti di combattimento"
    },
    {
        "id": "318",
        "value": "Donzella della taverna"
    },
    {
        "id": "319",
        "value": "Elfo oscuro di Zhur'Urkahi"
    },
    {
        "id": "320",
        "value": "Morgwath degli elfi oscuri"
    },
    {
        "id": "321",
        "value": "Stregone elfico"
    },
    {
        "id": "322",
        "value": "Principe Valor"
    },
    {
        "id": "323",
        "value": "Rocheford"
    },
    {
        "id": "324",
        "value": "Adelina"
    },
    {
        "id": "325",
        "value": "Vampiressa"
    },
    {
        "id": "326",
        "value": "Shalinor l'elfo oscuro"
    },
    {
        "id": "327",
        "value": "Elendiar degli elfi oscuri"
    },
    {
        "id": "328",
        "value": "Mago (senza nome)"
    },
    {
        "id": "329",
        "value": "Guerriero Nuk Nuk"
    },
    {
        "id": "330",
        "value": "Campione delle guardie delle ombre"
    },
    {
        "id": "331",
        "value": "Mago delle guardie delle ombre"
    },
    {
        "id": "332",
        "value": "Potente guardia delle ombre"
    },
    {
        "id": "333",
        "value": "Pianta carnivora"
    },
    {
        "id": "334",
        "value": "Caccia glorb dorato"
    },
    {
        "id": "335",
        "value": "Calabrone cacciatore"
    },
    {
        "id": "336",
        "value": "Calabrone regina"
    },
    {
        "id": "337",
        "value": "Terrore sferzante operaio"
    },
    {
        "id": "338",
        "value": "Terrore sferzante guerriereo"
    },
    {
        "id": "339",
        "value": "Mohkva d'élite"
    },
    {
        "id": "340",
        "value": "Cavaliere d'élite Mohkva"
    },
    {
        "id": "341",
        "value": "Signora dei Mohkva"
    },
    {
        "id": "342",
        "value": "Capo Nuk-Nuk"
    },
    {
        "id": "343",
        "value": "Mago Nuk-Nuk"
    },
    {
        "id": "344",
        "value": "Frazzler gigante"
    },
    {
        "id": "345",
        "value": "Soffocatore gigante"
    },
    {
        "id": "346",
        "value": "Folletto maligno campione"
    },
    {
        "id": "347",
        "value": "Granchio accetta cacciatore"
    },
    {
        "id": "348",
        "value": "Regina dei granchi accetta"
    },
    {
        "id": "349",
        "value": "Howler d'élite"
    },
    {
        "id": "350",
        "value": "Golem lottatore infernale"
    },
    {
        "id": "351",
        "value": "Cerebropodo rubamagia"
    },
    {
        "id": "352",
        "value": "Cerebropodo vampiro"
    },
    {
        "id": "353",
        "value": "Larva di insetto gigante"
    },
    {
        "id": "354",
        "value": "Larva regina"
    },
    {
        "id": "355",
        "value": "Scheletro nano"
    },
    {
        "id": "356",
        "value": "(senza nome)"
    },
    {
        "id": "357",
        "value": "(senza nome)"
    },
    {
        "id": "358",
        "value": "Larva di insetto gigante"
    },
    {
        "id": "359",
        "value": "Frazzler gigante"
    },
    {
        "id": "360",
        "value": "Anziano della stige"
    },
    {
        "id": "361",
        "value": "(senza nome)"
    },
    {
        "id": "362",
        "value": "(senza nome)"
    },
    {
        "id": "363",
        "value": "(senza nome)"
    },
    {
        "id": "364",
        "value": "(senza nome)"
    },
    {
        "id": "365",
        "value": "(senza nome)"
    },
    {
        "id": "366",
        "value": "Soldato demone"
    },
    {
        "id": "367",
        "value": "(senza nome)"
    },
    {
        "id": "368",
        "value": "(senza nome)"
    },
    {
        "id": "369 - 511",
        "value": "-"
    },
    {
        "id": "512",
        "value": "Lupo argentato"
    },
    {
        "id": "513",
        "value": "Corvo"
    },
    {
        "id": "514",
        "value": "Pipistrello"
    },
    {
        "id": "515",
        "value": "Pipistrello"
    },
    {
        "id": "516",
        "value": "Coniglio"
    },
    {
        "id": "517 - 519",
        "value": "-"
    },
    {
        "id": "520",
        "value": "Maiale"
    },
    {
        "id": "521",
        "value": "Maiale"
    },
    {
        "id": "522",
        "value": "Maiale"
    },
    {
        "id": "523",
        "value": "Vacca"
    },
    {
        "id": "524",
        "value": "Vacca non morta"
    },
    {
        "id": "525",
        "value": "Vacca"
    },
    {
        "id": "526",
        "value": "Vacca non morto"
    },
    {
        "id": "527",
        "value": "Vacca"
    },
    {
        "id": "528",
        "value": "Vacca non morta"
    },
    {
        "id": "529",
        "value": "Vacca (Senza nome)"
    },
    {
        "id": "530",
        "value": "Cervo nobile"
    },
    {
        "id": "531",
        "value": "Cerbiatto"
    },
    {
        "id": "532",
        "value": "Cerbiatto"
    },
    {
        "id": "533",
        "value": "Cerbiatto"
    },
    {
        "id": "534 - 335",
        "value": "-"
    },
    {
        "id": "536",
        "value": "Orso bruno"
    },
    {
        "id": "537",
        "value": "Orso argentato"
    },
    {
        "id": "538",
        "value": "Orso nero"
    },
    {
        "id": "539",
        "value": "Toro (senza nome)"
    },
    {
        "id": "540",
        "value": "Toro (senza nome)"
    },
    {
        "id": "541",
        "value": "Toro (senza nome)"
    },
    {
        "id": "542",
        "value": "-"
    },
    {
        "id": "543",
        "value": "Animale zannuto"
    },
    {
        "id": "544",
        "value": "Pecora"
    },
    {
        "id": "545",
        "value": "Verro argentato"
    },
    {
        "id": "546 - 549",
        "value": "-"
    },
    {
        "id": "550 - 558",
        "value": "Cavallo (senza nome) *NON CAVALCABILE*"
    },
    {
        "id": "559",
        "value": "-"
    },
    {
        "id": "560",
        "value": "Pollo"
    },
    {
        "id": "561",
        "value": "Pollo"
    },
    {
        "id": "562",
        "value": "Pollo"
    },
    {
        "id": "563",
        "value": "Pollo"
    },
    {
        "id": "564",
        "value": "-"
    },
    {
        "id": "565",
        "value": "Pollo"
    },
    {
        "id": "566",
        "value": "Pollo"
    },
    {
        "id": "567",
        "value": "Mannaro di Zhurag-Nar"
    },
    {
        "id": "568",
        "value": "Lupo argentato"
    },
    {
        "id": "569",
        "value": "Lupo grigio"
    },
    {
        "id": "570",
        "value": "Lupo grigio"
    },
    {
        "id": "571",
        "value": "Lupo corazzato"
    },
    {
        "id": "572",
        "value": "Vipera"
    },
    {
        "id": "573",
        "value": "Mannaro velenoso di Zhurag-Nar"
    },
    {
        "id": "574",
        "value": "Mannaro magico di Zhurag-Nar"
    },
    {
        "id": "575",
        "value": "Mannaro guerriero di Zhurag-Nar"
    },
    {
        "id": "576",
        "value": "Mannaro guerriero di DeMordrey"
    },
    {
        "id": "577",
        "value": "Mannaro di Zhurag-Nar"
    },
    {
        "id": "578",
        "value": "Lupo del deserto"
    },
    {
        "id": "579",
        "value": "Lupo del deserto"
    },
    {
        "id": "580",
        "value": "Lupo dei ghiacci"
    },
    {
        "id": "581",
        "value": "Lupo dei ghiacci"
    },
    {
        "id": "582",
        "value": "Lupo dei ghiacci"
    },
    {
        "id": "583",
        "value": "Mannaro sanguinario corazzato"
    },
    {
        "id": "584",
        "value": "Mannro guerreiro di DeMordrey"
    },
    {
        "id": "585",
        "value": "Lupo guerriero valoriano"
    },
    {
        "id": "586",
        "value": "Lupo guerriero della corona"
    },
    {
        "id": "587",
        "value": "Mannaro di Zhurag-Nar"
    },
    {
        "id": "588",
        "value": "Compagno dei lupi vampiro"
    },
    {
        "id": "589",
        "value": "Uccello di ghiaccio"
    },
    {
        "id": "590",
        "value": "Pappagallo"
    },
    {
        "id": "591",
        "value": "Signore degli orsi magico"
    },
    {
        "id": "592",
        "value": "Coniglio"
    },
    {
        "id": "593",
        "value": "Coniglio"
    },
    {
        "id": "594",
        "value": "Pipistrello"
    },
    {
        "id": "595",
        "value": "Pipistrello"
    },
    {
        "id": "596",
        "value": "Pipistrello"
    },
    {
        "id": "597",
        "value": "Spettro"
    },
    {
        "id": "598",
        "value": "Anima tormentata"
    },
    {
        "id": "599",
        "value": "Lupo blu (senza nome)"
    },
    {
        "id": "600",
        "value": "Orso sanguinario"
    },
    {
        "id": "601",
        "value": "Ragno (aura rossa) (senza nome)"
    },
    {
        "id": "602 - 639",
        "value": "-"
    },
    {
        "id": "640",
        "value": "Fattore"
    },
    {
        "id": "641",
        "value": "Fattore"
    },
    {
        "id": "642",
        "value": "Fattore"
    },
    {
        "id": "643",
        "value": "Fattore"
    },
    {
        "id": "644",
        "value": "Fattore"
    },
    {
        "id": "645",
        "value": "Cittadino"
    },
    {
        "id": "646",
        "value": "Fattore"
    },
    {
        "id": "647",
        "value": "Fattore"
    },
    {
        "id": "648",
        "value": "Fattore"
    },
    {
        "id": "649",
        "value": "Fattore"
    },
    {
        "id": "650",
        "value": "Fattore"
    },
    {
        "id": "651",
        "value": "Fattore"
    },
    {
        "id": "652",
        "value": "Cittadino"
    },
    {
        "id": "653",
        "value": "Cittadino"
    },
    {
        "id": "654",
        "value": "Cittadino"
    },
    {
        "id": "655",
        "value": "Cittadino"
    },
    {
        "id": "656",
        "value": "Cittadino"
    },
    {
        "id": "657",
        "value": "Cittadino"
    },
    {
        "id": "658",
        "value": "Cittadino"
    },
    {
        "id": "659",
        "value": "Cittadino"
    },
    {
        "id": "660",
        "value": "Cittadino"
    },
    {
        "id": "661",
        "value": "Cittadino"
    },
    {
        "id": "662",
        "value": "Cittadino"
    },
    {
        "id": "663",
        "value": "Cittadino"
    },
    {
        "id": "664",
        "value": "-"
    },
    {
        "id": "665",
        "value": "Nobiluomo"
    },
    {
        "id": "666",
        "value": "Nobiluomo"
    },
    {
        "id": "667",
        "value": "Nobiluomo"
    },
    {
        "id": "668",
        "value": "Nobiluomo"
    },
    {
        "id": "669",
        "value": "Nobiluomo"
    },
    {
        "id": "670",
        "value": "Nobiluomo"
    },
    {
        "id": "671",
        "value": "Nobiluomo"
    },
    {
        "id": "672",
        "value": "Nobildonna"
    },
    {
        "id": "673",
        "value": "Nobildonna"
    },
    {
        "id": "674",
        "value": "Nobildonna"
    },
    {
        "id": "675",
        "value": "Nobildonna"
    },
    {
        "id": "676",
        "value": "Nobildonna"
    },
    {
        "id": "677",
        "value": "Apprendista"
    },
    {
        "id": "678",
        "value": "Apprendista"
    },
    {
        "id": "679",
        "value": "Apprendista"
    },
    {
        "id": "680",
        "value": "Fattore"
    },
    {
        "id": "681",
        "value": "Fattore"
    },
    {
        "id": "682",
        "value": "Fattore"
    },
    {
        "id": "683",
        "value": "Fattore"
    },
    {
        "id": "684",
        "value": "Fattore"
    },
    {
        "id": "685",
        "value": "Fattore"
    },
    {
        "id": "686",
        "value": "Fattore"
    },
    {
        "id": "687",
        "value": "Fattore"
    },
    {
        "id": "688",
        "value": "Fabbro"
    },
    {
        "id": "689",
        "value": "Guerriero"
    },
    {
        "id": "690",
        "value": "Guerriero"
    },
    {
        "id": "691",
        "value": "Fattucchiera"
    },
    {
        "id": "692",
        "value": "Mercante"
    },
    {
        "id": "693",
        "value": "Sacerdotessa degli elfi oscuri"
    },
    {
        "id": "694",
        "value": "Nobildonna"
    },
    {
        "id": "695",
        "value": "Nobildonna"
    },
    {
        "id": "696",
        "value": "Barista"
    },
    {
        "id": "697",
        "value": "Shareefa"
    },
    {
        "id": "698",
        "value": "Baronessa Vilya"
    },
    {
        "id": "699",
        "value": "Baronessa Vilya"
    },
    {
        "id": "700",
        "value": "Shareefa"
    },
    {
        "id": "701",
        "value": "Barone DeMordrey"
    },
    {
        "id": "702",
        "value": "Bambino"
    },
    {
        "id": "703",
        "value": "Bambino"
    },
    {
        "id": "704",
        "value": "Bambino"
    },
    {
        "id": "705",
        "value": "Bambino"
    },
    {
        "id": "706",
        "value": "Fantasma donna (Essere di energia)"
    },
    {
        "id": "707",
        "value": "Diavola (NPC senza nome)"
    },
    {
        "id": "708",
        "value": "Scheletro guerriero"
    },
    {
        "id": "709",
        "value": "Scheletro guerriero nano"
    },
    {
        "id": "710",
        "value": "Scheletro lottatore nano"
    },
    {
        "id": "711",
        "value": "Corruttore turbato"
    },
    {
        "id": "712",
        "value": "Corruttore spietato"
    },
    {
        "id": "713",
        "value": "Corruttore inquieto"
    },
    {
        "id": "714",
        "value": "Corruttore scheletro"
    },
    {
        "id": "715 - 924",
        "value": "-"
    }
]

const items = [
    {
        "id": "1200",
        "value": "Targone metallico"
    },
    {
        "id": "1201",
        "value": "Scudo del Drago"
    },
    {
        "id": "1202",
        "value": "Scudo Rotondo In Acciaio"
    },
    {
        "id": "1203",
        "value": "Scudo in Legno di Suev'Evell"
    },
    {
        "id": "1204",
        "value": "Scudo Rotondo Bollito"
    },
    {
        "id": "1205",
        "value": "Morte dell'Orchetto (Scudo)"
    },
    {
        "id": "1206",
        "value": "Scudo Da Pugno"
    },
    {
        "id": "1207",
        "value": "Scudo della torre de Elohinir"
    },
    {
        "id": "1208",
        "value": "Scudo di Thecmelion"
    },
    {
        "id": "1209",
        "value": "Scudo della Guardia di DeMordrey"
    },
    {
        "id": "1210",
        "value": "Scudo dei guardiani del Baronato"
    },
    {
        "id": "1211",
        "value": "Scudo della Guardia reiale del Principe"
    },
    {
        "id": "1212",
        "value": "Grande scudo degli Elfi Oscuri"
    },
    {
        "id": "1213",
        "value": "Scudo della vita di Delania"
    },
    {
        "id": "1214",
        "value": "Protettore di Prothal (scudo)"
    },
    {
        "id": "1215",
        "value": "Scudo seghettato di Vilad"
    },
    {
        "id": "1216",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "1217",
        "value": "Targone metallico bollito"
    },
    {
        "id": "1218",
        "value": "Scudo (spallacci?)"
    },
    {
        "id": "1219",
        "value": "Scudo (cinturone?)"
    },
    {
        "id": "1220",
        "value": "Scudo (armatura?)"
    },
    {
        "id": "1221",
        "value": "Scudo (guanti?)"
    },
    {
        "id": "1222",
        "value": "Scudo (elmo?)"
    },
    {
        "id": "1223",
        "value": "Scudo (gambiere?)"
    },
    {
        "id": "1224",
        "value": "Scudo (scarpe?)"
    },
    {
        "id": "1225",
        "value": "Scudo (???)"
    },
    {
        "id": "1226",
        "value": "Scudo (parabraccia)"
    },
    {
        "id": "1227",
        "value": "Scudo (cinturone)"
    },
    {
        "id": "1228",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1229",
        "value": "Scudo (Guanti)"
    },
    {
        "id": "1230",
        "value": "Scudo (elmo)"
    },
    {
        "id": "1231",
        "value": "Scudo (gambiere)"
    },
    {
        "id": "1232",
        "value": "Scudo (scarpe)"
    },
    {
        "id": "1233",
        "value": "Scudo (spallacci)"
    },
    {
        "id": "1234",
        "value": "Scudo (parabraccia)"
    },
    {
        "id": "1235",
        "value": "scudo (cintura)"
    },
    {
        "id": "1236",
        "value": "Scudo (armatura)"
    },
    {
        "id": "1237",
        "value": "scudo (guanti)"
    },
    {
        "id": "1238",
        "value": "Diviso (elmo)"
    },
    {
        "id": "1239",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1240",
        "value": "<noname> (guanti)"
    },
    {
        "id": "1241",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1242",
        "value": "<noname> (Spada)"
    },
    {
        "id": "1243",
        "value": "<noname> (spada)"
    },
    {
        "id": "1244",
        "value": "<noname> (spada)"
    },
    {
        "id": "1245",
        "value": "<noname> (spada)"
    },
    {
        "id": "1246",
        "value": "<noname> (scudo)"
    },
    {
        "id": "1247",
        "value": "<noname> (scudo)"
    },
    {
        "id": "1248",
        "value": "Scudo Demoniaco"
    },
    {
        "id": "1249",
        "value": "Fuoco Fatuo (Mob)"
    },
    {
        "id": "1250",
        "value": "<noname> (bracciali)"
    },
    {
        "id": "1251",
        "value": "<noname> (Corazza)"
    },
    {
        "id": "1252",
        "value": "<noname> (Elmo)"
    },
    {
        "id": "1253",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1254",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1255",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1256",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1257",
        "value": "<noname> (corazza)"
    },
    {
        "id": "1258",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1259",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1260",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "1261",
        "value": "<noname> (spallacci) FORSE"
    },
    {
        "id": "1262",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1263",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1264",
        "value": "<noname> (corazza)"
    },
    {
        "id": "1265",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1266",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1267",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "1268",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1269",
        "value": "<noname> (corazza)"
    },
    {
        "id": "1270",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1271",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1272",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "1273",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1274",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1275",
        "value": "<noname> (corazza)"
    },
    {
        "id": "1276",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1277",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1278",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "1279",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1300",
        "value": "Veste corazzata del Tribuno"
    },
    {
        "id": "1301",
        "value": "Elmo dorato del Tribuno"
    },
    {
        "id": "1302",
        "value": "Specchio del Tribuno (scudo)"
    },
    {
        "id": "1303",
        "value": "Spallacci del Tribuno"
    },
    {
        "id": "1304",
        "value": "Armatura da guerra delle Ombre"
    },
    {
        "id": "1305",
        "value": "Elmo da guerra delle Ombre"
    },
    {
        "id": "1306",
        "value": "Visione del vuoto (scudo)"
    },
    {
        "id": "1307",
        "value": "Spallacci del guerriero delle ombre"
    },
    {
        "id": "1308",
        "value": "Alito della magia"
    },
    {
        "id": "1309",
        "value": "Saggezza della magia"
    },
    {
        "id": "1310",
        "value": "Sfida della magia (scudo)"
    },
    {
        "id": "1311",
        "value": "Tunica dell'onestà"
    },
    {
        "id": "1312",
        "value": "Elmo della virtù"
    },
    {
        "id": "1313",
        "value": "Scudo della lealtà"
    },
    {
        "id": "1314",
        "value": "Pelle orientale"
    },
    {
        "id": "1315",
        "value": "Elmo orientale"
    },
    {
        "id": "1316",
        "value": "Scudo lunare orientale"
    },
    {
        "id": "1317",
        "value": "Armatura della vanità"
    },
    {
        "id": "1318",
        "value": "Elmo di Hubris"
    },
    {
        "id": "1319",
        "value": "Scudo dell'avidità"
    },
    {
        "id": "1320",
        "value": "Braccio (scheletro)"
    },
    {
        "id": "1321",
        "value": "Osso (scheletro)"
    },
    {
        "id": "1322",
        "value": "Osso (scheletro)"
    },
    {
        "id": "1323",
        "value": "Osso (scheletro)"
    },
    {
        "id": "1324",
        "value": "Osso (scheletro)"
    },
    {
        "id": "1325",
        "value": "Aculeo di scorpione"
    },
    {
        "id": "1326",
        "value": "Mano di scheletro"
    },
    {
        "id": "1327",
        "value": "Osso (scheletro)"
    },
    {
        "id": "1328",
        "value": "Osso (scheletro)"
    },
    {
        "id": "1329",
        "value": "Cranio di orchetto Sciamano"
    },
    {
        "id": "1330",
        "value": "Teschio"
    },
    {
        "id": "1331",
        "value": "osso (scheletro)"
    },
    {
        "id": "1332",
        "value": "Osso di Nuk-nuk"
    },
    {
        "id": "1333",
        "value": "Osso (scheletro)"
    },
    {
        "id": "1334",
        "value": "???"
    },
    {
        "id": "1335",
        "value": "Cassa di legno (???)"
    },
    {
        "id": "1336",
        "value": "Cassa di legno (???)"
    },
    {
        "id": "1337",
        "value": "Cassa di legno (???)"
    },
    {
        "id": "1338",
        "value": "Fungo (contenitore)"
    },
    {
        "id": "1339",
        "value": "Fungo (contenitore)"
    },
    {
        "id": "1340",
        "value": "Fungo (contenitore)"
    },
    {
        "id": "1341",
        "value": "Fungo (contenitore)"
    },
    {
        "id": "1342",
        "value": "Vaso"
    },
    {
        "id": "1343",
        "value": "Vaso"
    },
    {
        "id": "1344",
        "value": "Vaso"
    },
    {
        "id": "1345",
        "value": "Pezzo di carne (???)"
    },
    {
        "id": "1346",
        "value": "Pezzo di Carne"
    },
    {
        "id": "1347",
        "value": "Pezzo di carne"
    },
    {
        "id": "1348",
        "value": "Pezzo di carne"
    },
    {
        "id": "1349",
        "value": "Pezzo di carne rancida"
    },
    {
        "id": "1350",
        "value": "Pezzo di carne"
    },
    {
        "id": "1351",
        "value": "Pezzo di carne rancida"
    },
    {
        "id": "1352",
        "value": "Pezzo di carne Rancida"
    },
    {
        "id": "1353",
        "value": "Milza intatta di pesce leone"
    },
    {
        "id": "1354",
        "value": "Zampa di granchio"
    },
    {
        "id": "1355",
        "value": "Ghiandola di veleno"
    },
    {
        "id": "1356",
        "value": "Pezzo di teschio (???)"
    },
    {
        "id": "1357",
        "value": "Pezzo di carne rancida (???)"
    },
    {
        "id": "1358",
        "value": "Pezzo di carne rancida (???)"
    },
    {
        "id": "1359",
        "value": "Carne di glorb"
    },
    {
        "id": "1360",
        "value": "Pezzo di carne?"
    },
    {
        "id": "1361",
        "value": "Pezzo di carne?"
    },
    {
        "id": "1362",
        "value": "Pezzo di carne?"
    },
    {
        "id": "1363",
        "value": "Osso con carne attaccata?"
    },
    {
        "id": "1364",
        "value": "Osso con carne attaccata?"
    },
    {
        "id": "1365",
        "value": "Cuore di folletto maligno"
    },
    {
        "id": "1366",
        "value": "Cuore di Sakkara"
    },
    {
        "id": "1367",
        "value": "Cuore di Goblin"
    },
    {
        "id": "1368",
        "value": "Pezzo di teschio?"
    },
    {
        "id": "1369",
        "value": "Testa di un elfo oscuro di Zhur-Urkahi"
    },
    {
        "id": "1370",
        "value": "Cranio di Howler"
    },
    {
        "id": "1371",
        "value": "Teschio"
    },
    {
        "id": "1372",
        "value": "Polmone di drago"
    },
    {
        "id": "1373",
        "value": "Costato"
    },
    {
        "id": "1374",
        "value": "Mucchio di cenere?"
    },
    {
        "id": "1375",
        "value": "Teschio di Scheletro (incastonabile?)"
    },
    {
        "id": "1376",
        "value": "sangue di insetto"
    },
    {
        "id": "1377",
        "value": "<noname> (balestra)"
    },
    {
        "id": "1378",
        "value": "<noname> (corazza)"
    },
    {
        "id": "1379",
        "value": "<noname> (elmo) -Maschera-"
    },
    {
        "id": "1380",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "1381",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1382",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1383",
        "value": "<noname> (amuleto) -Presente nel gioco?"
    },
    {
        "id": "1384",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1385",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1386",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1386",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1387",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1388",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1389",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1390",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1391",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1392",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1393",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1394",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1395",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1396",
        "value": "<noname> (pietra rossa)"
    },
    {
        "id": "1397",
        "value": "<noname> (Piedistallo?)"
    },
    {
        "id": "1398",
        "value": "<noname> (Amuleto)"
    },
    {
        "id": "1399",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1400",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1401",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1402",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1403",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1404",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1405",
        "value": "<noname> (amuleto) -presente nel gioco?"
    },
    {
        "id": "1406",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1407",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1408",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1409",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1410",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1411",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1412",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1413",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1414",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1415",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1416",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1417",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1418",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1419",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1420",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1421",
        "value": "<noname> (amuleto)"
    },
    {
        "id": "1422",
        "value": "<noname> (Parabraccia)"
    },
    {
        "id": "1423",
        "value": "<noname> (Cintura)"
    },
    {
        "id": "1424",
        "value": "<noname> (corazza)"
    },
    {
        "id": "1425",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "1426",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1427",
        "value": "<noname> (Gambiere)"
    },
    {
        "id": "1428",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1429",
        "value": "<noname> (corazza)"
    },
    {
        "id": "1430",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1431",
        "value": "<noname> (gambali)"
    },
    {
        "id": "1432 - 1699",
        "value": "-"
    },
    {
        "id": "1700",
        "value": "<noname> (cannone)"
    },
    {
        "id": "1701 - 1710",
        "value": "-"
    },
    {
        "id": "1711",
        "value": "<noname> (Ascia)"
    },
    {
        "id": "1712",
        "value": "Spaventatore di mostri (pugnale)"
    },
    {
        "id": "1713",
        "value": "Pugnale di fuoco"
    },
    {
        "id": "1714",
        "value": "Pugnale di Pulabya"
    },
    {
        "id": "1715",
        "value": "Bastone decorato di Heridon"
    },
    {
        "id": "1716",
        "value": "Bastone da battaglia"
    },
    {
        "id": "1717",
        "value": "Lancia mascarelliana"
    },
    {
        "id": "1718",
        "value": "Bastone a due mani"
    },
    {
        "id": "1719",
        "value": "Randello da battaglia"
    },
    {
        "id": "1720",
        "value": "Martello di guerra di Hera"
    },
    {
        "id": "1721",
        "value": "Sciabola di Heridon"
    },
    {
        "id": "1722",
        "value": "Ascia Temibile dei nani"
    },
    {
        "id": "1723",
        "value": "Comando di Finbar"
    },
    {
        "id": "1724",
        "value": "Lama della fretta"
    },
    {
        "id": "1725",
        "value": "Arma a due mani del Glorioso"
    },
    {
        "id": "1726",
        "value": "Spada ardente a due mani"
    },
    {
        "id": "1727",
        "value": "Sciabola ardente della distruzione"
    },
    {
        "id": "1728",
        "value": "Pugnale della pestilenza"
    },
    {
        "id": "1729",
        "value": "Spada leggera"
    },
    {
        "id": "1730",
        "value": "Balestra leggera"
    },
    {
        "id": "1731",
        "value": "Balestra pesante"
    },
    {
        "id": "1732",
        "value": "Arco corto"
    },
    {
        "id": "1733",
        "value": "Arco lungo"
    },
    {
        "id": "1734",
        "value": "Coltello da lancio"
    },
    {
        "id": "1735",
        "value": "Pugnale da lancio"
    },
    {
        "id": "1736",
        "value": "Sterminadraghi di Porto Draco"
    },
    {
        "id": "1737",
        "value": "Ascia da lancio"
    },
    {
        "id": "1738",
        "value": "Ascia da esecuzione leggera"
    },
    {
        "id": "1739",
        "value": "Tridente (pugnale)"
    },
    {
        "id": "1740",
        "value": "Cacciatore di Goblin (pugnale)"
    },
    {
        "id": "1741",
        "value": "Ascia Elegante"
    },
    {
        "id": "1742",
        "value": "Lama d'argento della resistenza"
    },
    {
        "id": "1743",
        "value": "Arco della fretta del ranger"
    },
    {
        "id": "1744",
        "value": "Tridente della fretta"
    },
    {
        "id": "1745",
        "value": "Resistore magico (forcone)"
    },
    {
        "id": "1746",
        "value": "Lancia predatrice"
    },
    {
        "id": "1747",
        "value": "Arco elfico magico della vera vista"
    },
    {
        "id": "1748",
        "value": "Falce impetuosa del vagabondo"
    },
    {
        "id": "1749",
        "value": "Lama magica della furia"
    },
    {
        "id": "1750",
        "value": "Spada corta avvelenata del recupero"
    },
    {
        "id": "1751",
        "value": "Doppia lama magica degli invocatori della morte"
    },
    {
        "id": "1752",
        "value": "Spada a una mano della corsa"
    },
    {
        "id": "1753",
        "value": "Lama nera di Zhurag-Nar"
    },
    {
        "id": "1754",
        "value": "Ascia decorata del Riposo"
    },
    {
        "id": "1755",
        "value": "Spada impetuosa della notte"
    },
    {
        "id": "1756",
        "value": "Coltello del goblin"
    },
    {
        "id": "1757",
        "value": "Fendi-elfi (arco)"
    },
    {
        "id": "1758",
        "value": "Lancia della forza di DeMordrey"
    },
    {
        "id": "1759",
        "value": "Martello di guerra di Drauglur"
    },
    {
        "id": "1760",
        "value": "Falce di Sakkara"
    },
    {
        "id": "1761",
        "value": "Spada corta"
    },
    {
        "id": "1762",
        "value": "Regolaconti"
    },
    {
        "id": "1763",
        "value": "Picca dragoniana"
    },
    {
        "id": "1764",
        "value": "Coltello delle arti magiche"
    },
    {
        "id": "1765",
        "value": "Lancia di Khorad-Nur"
    },
    {
        "id": "1766",
        "value": "Alabarda"
    },
    {
        "id": "1767",
        "value": "Arma improvvisara della forza"
    },
    {
        "id": "1768",
        "value": "Mazzafrusto della forza"
    },
    {
        "id": "1769",
        "value": "Callump degli Orchi"
    },
    {
        "id": "1770",
        "value": "Callump Triplo"
    },
    {
        "id": "1771",
        "value": "Hathol en Basarab (spada)"
    },
    {
        "id": "1772",
        "value": "Pugno di ferro"
    },
    {
        "id": "1773",
        "value": "Ladro di lame"
    },
    {
        "id": "1774",
        "value": "Pungiglione avvelenato di Dungolianth"
    },
    {
        "id": "1775",
        "value": "Bastone da battaglia di Knorr"
    },
    {
        "id": "1776",
        "value": "Fionda (???)"
    },
    {
        "id": "1777",
        "value": "Bastone di Medusa"
    },
    {
        "id": "1778",
        "value": "Ascia ardente di Thain"
    },
    {
        "id": "1779",
        "value": "Spada delle ombre"
    },
    {
        "id": "1780",
        "value": "Arco lungo risplendente"
    },
    {
        "id": "1781",
        "value": "Arco di fuoco"
    },
    {
        "id": "1782",
        "value": "Arco del veleno"
    },
    {
        "id": "1783",
        "value": "Arco del non-morto"
    },
    {
        "id": "1784",
        "value": "Arco dei demoni"
    },
    {
        "id": "1785",
        "value": "Arco del Goblin"
    },
    {
        "id": "1786",
        "value": "Arco lungo a prisma magico"
    },
    {
        "id": "1787",
        "value": "Arco di cristallo magico"
    },
    {
        "id": "1788",
        "value": "Arco di vetro magico"
    },
    {
        "id": "1789",
        "value": "Arco di fuoco runico"
    },
    {
        "id": "1790",
        "value": "Arco lungo magico"
    },
    {
        "id": "1791",
        "value": "Arco lungo celestiale"
    },
    {
        "id": "1792",
        "value": "Arco lungo che brucia"
    },
    {
        "id": "1793",
        "value": "Arco lungo tempesta magica"
    },
    {
        "id": "1794",
        "value": "Arco lungo del Non-Morto"
    },
    {
        "id": "1795",
        "value": "Arco magico del vento"
    },
    {
        "id": "1796",
        "value": "Arco magico della tempesta"
    },
    {
        "id": "1797",
        "value": "Arco lungo tempesta avvelenata"
    },
    {
        "id": "1798",
        "value": "Arco lungo tromba d'aria"
    },
    {
        "id": "1799",
        "value": "Arco lungo tromba d'aria magica"
    },
    {
        "id": "1800",
        "value": "Ascia degli Orchi (Classe personaggio errata)"
    },
    {
        "id": "1801",
        "value": "Randello degli orchi (Classe personaggio errata)"
    },
    {
        "id": "1802",
        "value": "Mazza degli orchi (Classe personaggio errata)"
    },
    {
        "id": "1803",
        "value": "Sciabola degli orchi (Classe personaggio errata)"
    },
    {
        "id": "1804",
        "value": "Spada a due mani degli Orchi (Classe personaggio errata)"
    },
    {
        "id": "1805",
        "value": "Arco corto del Non-Morto"
    },
    {
        "id": "1806",
        "value": "Arco corto elfico magico"
    },
    {
        "id": "1807",
        "value": "Arco corto delle rocce"
    },
    {
        "id": "1808",
        "value": "Arco corto del fuoco"
    },
    {
        "id": "1809",
        "value": "Arco corto del Veleno"
    },
    {
        "id": "1810",
        "value": "Arco corto D'oro"
    },
    {
        "id": "1811",
        "value": "Arco corto runico magico"
    },
    {
        "id": "1812",
        "value": "Arco di ferro elfico"
    },
    {
        "id": "1813",
        "value": "-"
    },
    {
        "id": "1814",
        "value": "Arco elfico decorato"
    },
    {
        "id": "1815",
        "value": "Arco elfico rivestito di pelliccia"
    },
    {
        "id": "1816",
        "value": "Arci elfico di fuoco"
    },
    {
        "id": "1817",
        "value": "Arpa insanguinata"
    },
    {
        "id": "1818",
        "value": "Arco dei Galdhirim"
    },
    {
        "id": "1819",
        "value": "Arco elfico della magia"
    },
    {
        "id": "1820",
        "value": "Machete malconcio"
    },
    {
        "id": "1821",
        "value": "Ascia a doppia lama"
    },
    {
        "id": "1822",
        "value": "Ascia a doppia lama (Classe personaggio errata)"
    },
    {
        "id": "1823",
        "value": "Ascia a doppia lama (Classe personaggio errata)"
    },
    {
        "id": "1824",
        "value": "Ascia a doppia lama (Classe personaggio errata)"
    },
    {
        "id": "1825",
        "value": "Ascia a doppia lama (Classe personaggio errata)"
    },
    {
        "id": "1826",
        "value": "Ascia a doppia lama (Classe personaggio errata)"
    },
    {
        "id": "1827",
        "value": "Ascia di guerra (Classe personaggio errata)"
    },
    {
        "id": "1828",
        "value": "Ascia di guerra (Classe personaggio errata)"
    },
    {
        "id": "1829",
        "value": "Ascia di Guerra di Forkal (Classe personaggio errata)"
    },
    {
        "id": "1830",
        "value": "Ascia di guerra (Classe personaggio errata)"
    },
    {
        "id": "1831",
        "value": "Ascia di guerra (Classe personaggio errata)"
    },
    {
        "id": "1832",
        "value": "Ascia di guerra (Classe personaggio errata)"
    },
    {
        "id": "1833",
        "value": "X-MAS (Arma)"
    },
    {
        "id": "1834",
        "value": "X-MAS (scudo)"
    },
    {
        "id": "1835",
        "value": "X-MAS (Elmo)"
    },
    {
        "id": "1836",
        "value": "X-MAS (Elmo)"
    },
    {
        "id": "1837",
        "value": "X-MAS (Elmo)"
    },
    {
        "id": "1838",
        "value": "X-MAS (Elmo)"
    },
    {
        "id": "1839",
        "value": "X-MAS (Elmo)"
    },
    {
        "id": "1840",
        "value": "X-MAS (Elmo)"
    },
    {
        "id": "1841",
        "value": "X-MAS (Corazza)"
    },
    {
        "id": "1842",
        "value": "X-MAS (Cintura)"
    },
    {
        "id": "1843",
        "value": "<noname> (Ascia) (Classe personaggio errata)"
    },
    {
        "id": "1844",
        "value": "<noname> (Ascia) (Classe personaggio errata)"
    },
    {
        "id": "1845",
        "value": "<noname> (Ascia) (Classe personaggio errata)"
    },
    {
        "id": "1846",
        "value": "<noname> (Ascia)"
    },
    {
        "id": "1847",
        "value": "<noname> (Martello a due mani) (Classe personaggio errata)"
    },
    {
        "id": "1848",
        "value": "<noname> (Martello a due mani del Nano) (Classe personaggio errata)"
    },
    {
        "id": "1849",
        "value": "<noname> (Moschetto del nano)"
    },
    {
        "id": "1850",
        "value": "Bastone del Mago degli anziani"
    },
    {
        "id": "1851",
        "value": "Lama del dolore diviso dell'Angelo"
    },
    {
        "id": "1852",
        "value": "Asta da battaglia di Hephane"
    },
    {
        "id": "1853",
        "value": "<noname> (Moschetto del nano)"
    },
    {
        "id": "1854",
        "value": "<noname> (Moschetto del nano)"
    },
    {
        "id": "1855",
        "value": "<noname> (Pistola del nano)"
    },
    {
        "id": "1856",
        "value": "<noname> (Cannemozze)"
    },
    {
        "id": "1857",
        "value": "<noname> (Pistola)"
    },
    {
        "id": "1858",
        "value": "<noname> (Martello Gigante)"
    },
    {
        "id": "1859 - 1860",
        "value": "-"
    },
    {
        "id": "1861",
        "value": "Ascia a due mani (Classe di personaggio errata)"
    },
    {
        "id": "1862",
        "value": "Lama di Thal dell'Elfo oscuro"
    },
    {
        "id": "1863",
        "value": "Lama da pugno"
    },
    {
        "id": "1864",
        "value": "Spada runica infernale"
    },
    {
        "id": "1865",
        "value": "Lama di Thal dell'Elfo oscuro"
    },
    {
        "id": "1866",
        "value": "Lama da pugno"
    },
    {
        "id": "1867",
        "value": "Spada luminosa di Skarkara"
    },
    {
        "id": "1868",
        "value": "Spada vampiresca"
    },
    {
        "id": "1869",
        "value": "Lancia dei vampiri"
    },
    {
        "id": "1870",
        "value": "Mazza vampiresca"
    },
    {
        "id": "1871",
        "value": "Spada del Vampiro"
    },
    {
        "id": "1872",
        "value": "Arco lungo campiresco del sangue (Spada)"
    },
    {
        "id": "1873",
        "value": "Spada vampiresca di Thelaria"
    },
    {
        "id": "1874",
        "value": "Bastone dimensionale del mago"
    },
    {
        "id": "1875",
        "value": "Bastone di ossa di Agh'Ba"
    },
    {
        "id": "1876",
        "value": "Bastone piccolo del mago"
    },
    {
        "id": "1877",
        "value": "Bastone di Knorr del mago"
    },
    {
        "id": "1878",
        "value": "Bastone magico dello sciamano"
    },
    {
        "id": "1879",
        "value": "Barca (No Name)"
    },
    {
        "id": "1880",
        "value": "<noname> (Parabraccia)"
    },
    {
        "id": "1881",
        "value": "<noname> (Cintura)"
    },
    {
        "id": "1882",
        "value": "<noname> (Corazza)"
    },
    {
        "id": "1883",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1884",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1885",
        "value": "<noname> (Parabraccia)*"
    },
    {
        "id": "1886",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1887",
        "value": "<noname> (corazza)*"
    },
    {
        "id": "1888",
        "value": "<noname> (elmo)*"
    },
    {
        "id": "1889",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1890",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "1891",
        "value": "-"
    },
    {
        "id": "1892",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1893",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1894",
        "value": "<noname> (corazza)"
    },
    {
        "id": "1895",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1896",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1897",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "1898",
        "value": "-"
    },
    {
        "id": "1899",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1900",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1901",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1902",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1903",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1904",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1905",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1906",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1907",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1908",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1909",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1910",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1911",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1912",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1913",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1914",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1915",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1916",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1917",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1918",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1919",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1920",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1921",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1922",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1923",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1924",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1925",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1926",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1927",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1928",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1929",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1930",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1931",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1932",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1933",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1934",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1935",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1936",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1937",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1938",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1939",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1940",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1941",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1942",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1943",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1944",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1945",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1946",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1947",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1948",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1949",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1950",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1951",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1952",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1953",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1954",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1955",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1956",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1957",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1958",
        "value": "<noname> (armatura)"
    },
    {
        "id": "1959",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1960",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1961",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1962",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1963",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1964",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1965",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1966",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1967",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1968",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1969",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1970",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1971",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1972",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1973",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1974",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1975",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1976",
        "value": "<noname> (corazza)"
    },
    {
        "id": "1977",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1978",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1979",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "1980",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1981",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1982",
        "value": "<noname> (corazza)"
    },
    {
        "id": "1983",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1984",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "1985",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "1986",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1987",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1988",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1989",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "1990",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1991",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "1992",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1993",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1994",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "1995",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "1996",
        "value": "<noname> (bracciali)"
    },
    {
        "id": "1997",
        "value": "<noname> (cintura)"
    },
    {
        "id": "1998",
        "value": "<noname> (elmo)"
    },
    {
        "id": "1999",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "2000",
        "value": "Acciaio della magia del Soldato"
    },
    {
        "id": "2001",
        "value": "Seminamorte"
    },
    {
        "id": "2002",
        "value": "Scudo metallico magico"
    },
    {
        "id": "2003",
        "value": "Scudo del Drago"
    },
    {
        "id": "2004",
        "value": "Scudo runico di Finbarr"
    },
    {
        "id": "2005",
        "value": "Protettore di Thorwena"
    },
    {
        "id": "2006",
        "value": "Scudo di protezione di Teral"
    },
    {
        "id": "2007",
        "value": "Morte dell'Orchetto"
    },
    {
        "id": "2008",
        "value": "Scudo di Thorwyn"
    },
    {
        "id": "2009",
        "value": "Randello di Thorwyn"
    },
    {
        "id": "2010",
        "value": "Scudo dentato della brama di sangue"
    },
    {
        "id": "2011",
        "value": "Scudo lucente d'avorio"
    },
    {
        "id": "2012",
        "value": "Balestra da mano veloce di Braverock Castle"
    },
    {
        "id": "2013",
        "value": "Pugnale dle leone degli spiritelli dei boschi"
    },
    {
        "id": "2014",
        "value": "Bacchetta maledetta di Derlin"
    },
    {
        "id": "2015",
        "value": "Scettro della battaglia di Thorwena"
    },
    {
        "id": "2016",
        "value": "Lancia in bronzo"
    },
    {
        "id": "2017",
        "value": "Allegato di Paternus"
    },
    {
        "id": "2018",
        "value": "Mordi-gambe malvagio di Baz"
    },
    {
        "id": "2019",
        "value": "Sterminatore di Teral"
    },
    {
        "id": "2020",
        "value": "Cacciagiganti di Teral"
    },
    {
        "id": "2021",
        "value": "Portatire di morte di Teral"
    },
    {
        "id": "2022",
        "value": "Spada letale al cianuro"
    },
    {
        "id": "2023",
        "value": "Arma di guerra a due mani"
    },
    {
        "id": "2024",
        "value": "Arma avvelenata a due mani"
    },
    {
        "id": "2025",
        "value": "Arma dell'eleganza a due mani"
    },
    {
        "id": "2026",
        "value": "Spada a due mani che brucia"
    },
    {
        "id": "2027",
        "value": "Spada mascarelliana"
    },
    {
        "id": "2028",
        "value": "Lamavipera rapida"
    },
    {
        "id": "2029",
        "value": "Sciabola mascarelliana"
    },
    {
        "id": "2030",
        "value": "Spada corta penetrante"
    },
    {
        "id": "2031",
        "value": "Pugnale ardente di Bini"
    },
    {
        "id": "2032",
        "value": "Pugnale della dottrina delle armi"
    },
    {
        "id": "2033",
        "value": "Spada di Bingen"
    },
    {
        "id": "2034",
        "value": "Spada ardente Certofuoco"
    },
    {
        "id": "2035",
        "value": "Spada magica"
    },
    {
        "id": "2036",
        "value": "Balestra leggera"
    },
    {
        "id": "2037",
        "value": "Balestra leggera"
    },
    {
        "id": "2038",
        "value": "Balestra leggera"
    },
    {
        "id": "2039",
        "value": "Balestra pesante"
    },
    {
        "id": "2040",
        "value": "Balestra pesante"
    },
    {
        "id": "2041",
        "value": "Balestra Pesante"
    },
    {
        "id": "2042",
        "value": "Arco Corto Penetrante"
    },
    {
        "id": "2043",
        "value": "Arco corto che brucia"
    },
    {
        "id": "2044",
        "value": "Arco corto magico"
    },
    {
        "id": "2045",
        "value": "Arco lungo ardente"
    },
    {
        "id": "2046",
        "value": "Arco lungo veleno"
    },
    {
        "id": "2047",
        "value": "Arco lungo"
    },
    {
        "id": "2048",
        "value": "Stermina-draghi"
    },
    {
        "id": "2049",
        "value": "Ascia a due mani Pungente (Classe di personaggio errata)"
    },
    {
        "id": "2050",
        "value": "Ascia a due mani che frattura (Classe di personaggio errata)"
    },
    {
        "id": "2051",
        "value": "Ascia dell'esperienza a due mani (Classe di personaggio errata)"
    },
    {
        "id": "2052",
        "value": "Masakura"
    },
    {
        "id": "2053",
        "value": "Masakari fiammeggiante"
    },
    {
        "id": "2054",
        "value": "Masakari avvelenato"
    },
    {
        "id": "2055",
        "value": "Spada lunga magica"
    },
    {
        "id": "2056",
        "value": "Spada lunga elegante"
    },
    {
        "id": "2057",
        "value": "Spada lunga malsana"
    },
    {
        "id": "2058",
        "value": "Spada lunga magica degli elementi"
    },
    {
        "id": "2059",
        "value": "Arco elfico grigio"
    },
    {
        "id": "2060",
        "value": "Arco elfico di Tyr-Hadar"
    },
    {
        "id": "2061",
        "value": "Arco elfico di Tyr-Fasul"
    },
    {
        "id": "2062",
        "value": "Trauma mistico (falcetto)"
    },
    {
        "id": "2063",
        "value": "Falce magica di Porto Draco"
    },
    {
        "id": "2064",
        "value": "Falce della vita"
    },
    {
        "id": "2065",
        "value": "Coltello avvelenato"
    },
    {
        "id": "2066",
        "value": "Lavacciaio degli Uomini in arme"
    },
    {
        "id": "2067",
        "value": "Ascia a farfalla"
    },
    {
        "id": "2068",
        "value": "Mordi-gambe di ferro"
    },
    {
        "id": "2069",
        "value": "Tridente dell'onore"
    },
    {
        "id": "2070",
        "value": "Arma improvvisata spaccaossa"
    },
    {
        "id": "2071",
        "value": "Arma improvvisata a coda di lupo"
    },
    {
        "id": "2072",
        "value": "Spada lunga ardente di Quakes"
    },
    {
        "id": "2073",
        "value": "Sapara"
    },
    {
        "id": "2074",
        "value": "Ascia larga spaccacrani"
    },
    {
        "id": "2075",
        "value": "Mazza da battaglia flessuosa (bastone)"
    },
    {
        "id": "2076",
        "value": "Arma a due mani robusta"
    },
    {
        "id": "2077",
        "value": "Fendi-giganti"
    },
    {
        "id": "2078",
        "value": "Ascia da pugno Stabile"
    },
    {
        "id": "2079",
        "value": "Alabarda"
    },
    {
        "id": "2080",
        "value": "Arma a due mani temprata"
    },
    {
        "id": "2081",
        "value": "Sciabola del Serafino"
    },
    {
        "id": "2082",
        "value": "Randello coperto di spine"
    },
    {
        "id": "2083",
        "value": "Coltello da macellaio modificato"
    },
    {
        "id": "2084",
        "value": "Spada ibrida del girovago"
    },
    {
        "id": "2085",
        "value": "Mazzafrusto turbinante"
    },
    {
        "id": "2086",
        "value": "Artiglio degli dei"
    },
    {
        "id": "2087",
        "value": "Pugno infuocato veloce"
    },
    {
        "id": "2088",
        "value": "Spacca-granito"
    },
    {
        "id": "2089",
        "value": "Lancia forte"
    },
    {
        "id": "2090",
        "value": "Arma a due mani della pietà"
    },
    {
        "id": "2091",
        "value": "Artiglio dell'assassino"
    },
    {
        "id": "2092",
        "value": "Spada lunga degli insegnanti"
    },
    {
        "id": "2093",
        "value": "Arco corto dei tendini"
    },
    {
        "id": "2094",
        "value": "Bacchetta di Knorr dei maghi"
    },
    {
        "id": "2095",
        "value": "Sciabola di grazia del Serafino"
    },
    {
        "id": "2096",
        "value": "Ascia da pugno leggerissima"
    },
    {
        "id": "2097",
        "value": "Ascia da pugno flessibile"
    },
    {
        "id": "2098",
        "value": "Ascia Vipera veloce"
    },
    {
        "id": "2099",
        "value": "Spada lunga d'argento"
    },
    {
        "id": "2100",
        "value": "Spada lunga di Mascarell"
    },
    {
        "id": "2101",
        "value": "Spada lunga avvelenata"
    },
    {
        "id": "2102",
        "value": "Arco elfico di precisione"
    },
    {
        "id": "2103",
        "value": "Kris dei lestofanti"
    },
    {
        "id": "2104",
        "value": "Veleno degli Orchi"
    },
    {
        "id": "2105",
        "value": "Coltello bollente"
    },
    {
        "id": "2106",
        "value": "Negoziatore di ferro"
    },
    {
        "id": "2107",
        "value": "Carabela"
    },
    {
        "id": "2108",
        "value": "Sciavola di DeMordrey"
    },
    {
        "id": "2109",
        "value": "Ascia di guerra pesante"
    },
    {
        "id": "2110",
        "value": "Pugnale dei furfanti"
    },
    {
        "id": "2111",
        "value": "Spada dei gladiatori"
    },
    {
        "id": "2112",
        "value": "Acciaio forte"
    },
    {
        "id": "2113",
        "value": "Spada dell'oratoria"
    },
    {
        "id": "2114",
        "value": "Ascia da pugno larga"
    },
    {
        "id": "2115",
        "value": "Ascia da pugno litigiosa"
    },
    {
        "id": "2116",
        "value": "Balestra leggera"
    },
    {
        "id": "2117",
        "value": "Balestra media"
    },
    {
        "id": "2118",
        "value": "Balestra pesante"
    },
    {
        "id": "2119",
        "value": "Spallacci lucidi"
    },
    {
        "id": "2120",
        "value": "Cotta di maglia rosso sangue"
    },
    {
        "id": "2121",
        "value": "Arco lungo"
    },
    {
        "id": "2122",
        "value": "Bastone da battaglia rafforzato"
    },
    {
        "id": "2123",
        "value": "Scudo inciso in bronzo"
    },
    {
        "id": "2124",
        "value": "Scudo rotondo di Knorr"
    },
    {
        "id": "2125",
        "value": "Scudo rotondo bollito"
    },
    {
        "id": "2126",
        "value": "Bardatura in cuoio chiodata"
    },
    {
        "id": "2127",
        "value": "Spada ibrida delle fiamme"
    },
    {
        "id": "2128",
        "value": "Bastone da battaglia dell'equilibrio"
    },
    {
        "id": "2129",
        "value": "Ascia barbara"
    },
    {
        "id": "2130",
        "value": "Bastone da battaglia senza macchia"
    },
    {
        "id": "2131",
        "value": "Bastone da battaglia provato"
    },
    {
        "id": "2132",
        "value": "Bastone da battaglia spaccaossa"
    },
    {
        "id": "2133",
        "value": "Maglio del gladiatore"
    },
    {
        "id": "2134",
        "value": "Maglio del gladiatore"
    },
    {
        "id": "2135",
        "value": "Martello da combattimento di Braggi"
    },
    {
        "id": "2136",
        "value": "Scudo rotondo rinforzato"
    },
    {
        "id": "2137",
        "value": "Difensore rinforzato"
    },
    {
        "id": "2138",
        "value": "Scudo rotondo in rame"
    },
    {
        "id": "2139",
        "value": "Lama di Thal dell'Elfo oscuro"
    },
    {
        "id": "2140",
        "value": "Lama di Thal dell'Elfo oscuro"
    },
    {
        "id": "2141",
        "value": "Spada lunga indurita con il fuoco"
    },
    {
        "id": "2142",
        "value": "Bastone da Mago dello sciamano"
    },
    {
        "id": "2143",
        "value": "Bastone da Mago del fantasma della natura"
    },
    {
        "id": "2144",
        "value": "Bastone da Mago del vento"
    },
    {
        "id": "2145",
        "value": "Bastone da Mago del rinnovamento"
    },
    {
        "id": "2146",
        "value": "Spallina di acciaio"
    },
    {
        "id": "2147",
        "value": "Corazza"
    },
    {
        "id": "2148",
        "value": "Cintura della forza"
    },
    {
        "id": "2149",
        "value": "Ali"
    },
    {
        "id": "2150",
        "value": "Placche degli spallacci"
    },
    {
        "id": "2151",
        "value": "Cintura della forza"
    },
    {
        "id": "2152",
        "value": "Piastre per le braccia"
    },
    {
        "id": "2153",
        "value": "Corazza dell'orgoglio"
    },
    {
        "id": "2154",
        "value": "Armatura di cuoio"
    },
    {
        "id": "2155",
        "value": "Schiniere"
    },
    {
        "id": "2156",
        "value": "Piastra per le braccia"
    },
    {
        "id": "2157",
        "value": "Copricapo metallico"
    },
    {
        "id": "2158",
        "value": "Schiniere"
    },
    {
        "id": "2159",
        "value": "Spallacci"
    },
    {
        "id": "2160",
        "value": "Corazza"
    },
    {
        "id": "2161",
        "value": "Cintura magica delle capacità"
    },
    {
        "id": "2162",
        "value": "Ali antiche"
    },
    {
        "id": "2163",
        "value": "-"
    },
    {
        "id": "2164",
        "value": "Ali"
    },
    {
        "id": "2165",
        "value": "Schiniere"
    },
    {
        "id": "2166",
        "value": "Cintura"
    },
    {
        "id": "2167",
        "value": "Spallacci"
    },
    {
        "id": "2168",
        "value": "Elmo metallico"
    },
    {
        "id": "2169",
        "value": "Corazza"
    },
    {
        "id": "2170",
        "value": "Bastone del Mago dello sciamano"
    },
    {
        "id": "2171",
        "value": "Bastone da Mago degli elementi"
    },
    {
        "id": "2172",
        "value": "Bastone da Mago degli elementi"
    },
    {
        "id": "2173",
        "value": "Bastone da Mago degli elementi"
    },
    {
        "id": "2174",
        "value": "Bastone da Mago degli elementi"
    },
    {
        "id": "2175",
        "value": "Bastone da Mago degli elementi"
    },
    {
        "id": "2176",
        "value": "Ali di Abdiel"
    },
    {
        "id": "2177",
        "value": "Cintura di Abdiel"
    },
    {
        "id": "2178",
        "value": "Armatura di Abdiel"
    },
    {
        "id": "2179 - 2180",
        "value": "-"
    },
    {
        "id": "2181",
        "value": "Pugnale rotondo della meditazione"
    },
    {
        "id": "2182",
        "value": "Pugnale rotondo pungente"
    },
    {
        "id": "2183",
        "value": "Lingua di rettile rigeneratrice"
    },
    {
        "id": "2184",
        "value": "Stermina-tori splendente"
    },
    {
        "id": "2185",
        "value": "Stermina-tori"
    },
    {
        "id": "2186",
        "value": "Stermina-tori veloce"
    },
    {
        "id": "2187",
        "value": "Stiletto"
    },
    {
        "id": "2188",
        "value": "Stiletto rinforzato"
    },
    {
        "id": "2189",
        "value": "Stiletto della rigenerazione"
    },
    {
        "id": "2190",
        "value": "Cinquedea della rigenerazione"
    },
    {
        "id": "2191",
        "value": "Spada larga della rigenerazione"
    },
    {
        "id": "2192",
        "value": "Spada larga dell'equilibrio"
    },
    {
        "id": "2193",
        "value": "Cinquedea del timore reverenziale"
    },
    {
        "id": "2194",
        "value": "Pugnale insanguinato di Shaddar-Nur"
    },
    {
        "id": "2195",
        "value": "Pugnale veloce"
    },
    {
        "id": "2196",
        "value": "Pugnale infuocato"
    },
    {
        "id": "2197",
        "value": "Pugnale per draghi magico"
    },
    {
        "id": "2198",
        "value": "Pugnale avvelenato"
    },
    {
        "id": "2199",
        "value": "Pugnale della dottrina delle armi"
    },
    {
        "id": "2200",
        "value": "Pugnale veloce"
    },
    {
        "id": "2201",
        "value": "Pugnale della replica magica"
    },
    {
        "id": "2202",
        "value": "Accoltellatore di demoni marcescente"
    },
    {
        "id": "2203",
        "value": "Pugnale della difesa"
    },
    {
        "id": "2204",
        "value": "Pugnale selvaggio"
    },
    {
        "id": "2205",
        "value": "Spada ibrida"
    },
    {
        "id": "2206",
        "value": "Spada ibrida bruciante"
    },
    {
        "id": "2207",
        "value": "Spada ibrida magica"
    },
    {
        "id": "2208",
        "value": "Spada avvelenata"
    },
    {
        "id": "2209",
        "value": "Lama del Soldato"
    },
    {
        "id": "2210",
        "value": "Spada ad artiglio lacerante"
    },
    {
        "id": "2211",
        "value": "Lama mafica esperta"
    },
    {
        "id": "2212",
        "value": "Puntura avvelenata degli sterminadraghi"
    },
    {
        "id": "2213",
        "value": "Lama rigeneratrice"
    },
    {
        "id": "2214",
        "value": "Spada dell'abilità"
    },
    {
        "id": "2215",
        "value": "Ammazzaschiavi distruttivo"
    },
    {
        "id": "2216",
        "value": "Ammazzaschiavi marcescente"
    },
    {
        "id": "2217",
        "value": "Ammazzaschiavi dell'arte delle armi"
    },
    {
        "id": "2218",
        "value": "Ammazzaschiavi dell'Elfo bruciante"
    },
    {
        "id": "2219",
        "value": "Lama del dolore della luna nera"
    },
    {
        "id": "2220",
        "value": "Lama dela sete di sangue della luna nera"
    },
    {
        "id": "2221",
        "value": "Stiletto di indigolite"
    },
    {
        "id": "2222",
        "value": "Rapido stiletto di indigolite"
    },
    {
        "id": "2223",
        "value": "Gran-Morte della maledizione"
    },
    {
        "id": "2224",
        "value": "Gran-morte dell'agonia"
    },
    {
        "id": "2225",
        "value": "Gran-morte della parata"
    },
    {
        "id": "2226",
        "value": "Gran-morte furibonda"
    },
    {
        "id": "2227",
        "value": "Vento notturno magico"
    },
    {
        "id": "2228",
        "value": "Vento notturno medicamentoso"
    },
    {
        "id": "2229",
        "value": "Vento notturno repentino"
    },
    {
        "id": "2230",
        "value": "Vento notturno delle prede"
    },
    {
        "id": "2231",
        "value": "Vento notturno potente"
    },
    {
        "id": "2232",
        "value": "Spada lunga veloce"
    },
    {
        "id": "2233",
        "value": "Spada lunga del riposo"
    },
    {
        "id": "2234",
        "value": "Spada della frenesia"
    },
    {
        "id": "2235",
        "value": "Spada lunga magica"
    },
    {
        "id": "2236",
        "value": "Spada lunga avvelenata"
    },
    {
        "id": "2237",
        "value": "Spada lunga dell'esorcismo"
    },
    {
        "id": "2238",
        "value": "Spada lunga della lava"
    },
    {
        "id": "2239",
        "value": "Spada lunga astrale delle fattucchiere"
    },
    {
        "id": "2240",
        "value": "Spada lunga buona"
    },
    {
        "id": "2241",
        "value": "Spada lunga agonizzante"
    },
    {
        "id": "2242",
        "value": "Arma a due mani agile"
    },
    {
        "id": "2243",
        "value": "Arma a due mani baluginante"
    },
    {
        "id": "2244",
        "value": "Arma a due mani magica"
    },
    {
        "id": "2245",
        "value": "Arma a due mani avvelenata"
    },
    {
        "id": "2246",
        "value": "Arma a due mani precisa"
    },
    {
        "id": "2247",
        "value": "Arma a due mani lucente"
    },
    {
        "id": "2248",
        "value": "Arma a due mani magica della rigenerazione"
    },
    {
        "id": "2249",
        "value": "Arma a due mani agonizzante della battaglia"
    },
    {
        "id": "2250",
        "value": "Arma a due mani veloce"
    },
    {
        "id": "2251",
        "value": "Arma a due mani impetuosa"
    },
    {
        "id": "2252",
        "value": "Arma a due mani magica dell'abilità di combattimento"
    },
    {
        "id": "2253",
        "value": "Arma a due mani marcescende della paralisi"
    },
    {
        "id": "2254",
        "value": "Arma a due mani veloce"
    },
    {
        "id": "2255",
        "value": "Arma a due mani ardente della capacità"
    },
    {
        "id": "2256",
        "value": "Arma a due mani del riposo"
    },
    {
        "id": "2257",
        "value": "Arma a due mani al cianuro della vita"
    },
    {
        "id": "2258",
        "value": "Striglia di Zondar ladro, dell'arte schermidora"
    },
    {
        "id": "2259",
        "value": "Arma a due mani impetuosa"
    },
    {
        "id": "2260",
        "value": "Arma a due mani risonante"
    },
    {
        "id": "2261",
        "value": "Striglia di Zondar glorioso, dell'arena"
    },
    {
        "id": "2262",
        "value": "Arma a due mani abile dei gladiatori"
    },
    {
        "id": "2263",
        "value": "Arma a due mani scintillante dell'attacco"
    },
    {
        "id": "2264",
        "value": "Striglia di Zondar di Caro"
    },
    {
        "id": "2265",
        "value": "Arma a due mani di battaglia di Arsenium"
    },
    {
        "id": "2266",
        "value": "Distruttore di demoni a due mani"
    },
    {
        "id": "2267",
        "value": "Striglia di Zondar infallibile del bagliore"
    },
    {
        "id": "2268",
        "value": "Striglia Zondar capace"
    },
    {
        "id": "2269",
        "value": "Arma a due mani del tormento"
    },
    {
        "id": "2270",
        "value": "Arma a due mani benedetta dei Vampiri"
    },
    {
        "id": "2271",
        "value": "Spada a due mani del Vampiro"
    },
    {
        "id": "2272",
        "value": "Coltello destrimano mascarelliano"
    },
    {
        "id": "2273",
        "value": "Coltello veloce mascarelliano"
    },
    {
        "id": "2274",
        "value": "Coltello mascarelliano potente"
    },
    {
        "id": "2275",
        "value": "Coltello avvelenato mascarelliano"
    },
    {
        "id": "2276",
        "value": "Sciabola dell'arte schermidora"
    },
    {
        "id": "2277",
        "value": "Sciabola ardente"
    },
    {
        "id": "2278",
        "value": "Sciabola magica"
    },
    {
        "id": "2279",
        "value": "Sciabola delle vipere"
    },
    {
        "id": "2280",
        "value": "Sciabola potente"
    },
    {
        "id": "2281",
        "value": "Katzbalger scintillante"
    },
    {
        "id": "2282",
        "value": "Katzbalger della rigenerazione"
    },
    {
        "id": "2283",
        "value": "Katzbalger veloce al cianuro"
    },
    {
        "id": "2284",
        "value": "Katzbalger della difesa"
    },
    {
        "id": "2285",
        "value": "Katzalberg brillante"
    },
    {
        "id": "2286",
        "value": "Katzalberg della meditazione"
    },
    {
        "id": "2287",
        "value": "Falce di Sakkara in decomposizione"
    },
    {
        "id": "2288",
        "value": "Falce di Sakkara elaborata"
    },
    {
        "id": "2289",
        "value": "Falce di Sakkara del riposo insigne"
    },
    {
        "id": "2290",
        "value": "Falce di Sakkara del vescovo"
    },
    {
        "id": "2291",
        "value": "Falce di Sakkara dei demoni agonizzante"
    },
    {
        "id": "2292",
        "value": "Falce di Sakkara istruttiva"
    },
    {
        "id": "2293",
        "value": "Falce di Sakkara ardente"
    },
    {
        "id": "2294",
        "value": "Falce di Sakkara dell'operaio"
    },
    {
        "id": "2295",
        "value": "Falce di Sakkara tremante"
    },
    {
        "id": "2296",
        "value": "Sciabola leggera (laser)"
    },
    {
        "id": "2297",
        "value": "Sciavola leggera ardente (laser)"
    },
    {
        "id": "2298",
        "value": "Sciavola leggera dell'esattore (laser)"
    },
    {
        "id": "2299",
        "value": "Lama avvelenata della luce (laser)"
    },
    {
        "id": "2300",
        "value": "Sciabola leggera del cacciatore di scheletri (laser)"
    },
    {
        "id": "2301",
        "value": "Sciabola leggera scintillante (laser)"
    },
    {
        "id": "2302",
        "value": "Sciabola leggera rapace (laser)"
    },
    {
        "id": "2303",
        "value": "Sciabola leggera veloce della vipera (laser)"
    },
    {
        "id": "2304",
        "value": "Sciabola vigorosa di Luke (laser)"
    },
    {
        "id": "2305",
        "value": "Coda magica unica (laser)"
    },
    {
        "id": "2306",
        "value": "Ascia dello sterminatore"
    },
    {
        "id": "2307",
        "value": "Ascia dello sterminatore forte"
    },
    {
        "id": "2308",
        "value": "Ascia dello sterminatore impetuoso"
    },
    {
        "id": "2309",
        "value": "Ascia di Caroline"
    },
    {
        "id": "2310",
        "value": "Ascia rafforzata"
    },
    {
        "id": "2311",
        "value": "Ascia impetuosa"
    },
    {
        "id": "2312",
        "value": "Ascia elegante"
    },
    {
        "id": "2313",
        "value": "Doppia ascia"
    },
    {
        "id": "2314",
        "value": "Doppia ascia forte"
    },
    {
        "id": "2315",
        "value": "Doppia ascia impetuosa"
    },
    {
        "id": "2316",
        "value": "Doppia ascia rafforzata"
    },
    {
        "id": "2317",
        "value": "Doppia ascia"
    },
    {
        "id": "2318",
        "value": "Doppia ascia"
    },
    {
        "id": "2319",
        "value": "Doppia ascia"
    },
    {
        "id": "2320",
        "value": "Doppia ascia"
    },
    {
        "id": "2321",
        "value": "Doppia ascia"
    },
    {
        "id": "2322",
        "value": "Ascia di guerra"
    },
    {
        "id": "2323",
        "value": "Ascia di guerra"
    },
    {
        "id": "2324",
        "value": "Ascia di guerra"
    },
    {
        "id": "2325",
        "value": "Ascia di guerra"
    },
    {
        "id": "2326",
        "value": "Ascia di guerra"
    },
    {
        "id": "2327",
        "value": "Ascia di guerra"
    },
    {
        "id": "2328",
        "value": "Spacca rocce"
    },
    {
        "id": "2329",
        "value": "Spacca rocce"
    },
    {
        "id": "2330",
        "value": "Spacca rocce"
    },
    {
        "id": "2331",
        "value": "Spacca rocce"
    },
    {
        "id": "2332",
        "value": "Spacca rocce"
    },
    {
        "id": "2333",
        "value": "Spacca rocce"
    },
    {
        "id": "2334",
        "value": "Spacca rocce"
    },
    {
        "id": "2335",
        "value": "Ascia del Barbaro"
    },
    {
        "id": "2336",
        "value": "Ascia del Barbaro"
    },
    {
        "id": "2337",
        "value": "Ascia del Barbaro"
    },
    {
        "id": "2338",
        "value": "Ascia del Barbaro"
    },
    {
        "id": "2339",
        "value": "Ascia del Barbaro"
    },
    {
        "id": "2340",
        "value": "Ascia del Barbaro"
    },
    {
        "id": "2341",
        "value": "Ascia del Barbaro"
    },
    {
        "id": "2342",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2343",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2344",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2345",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2346",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2347",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2348",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2349",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2350",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2351",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2352",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2353",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2354",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2355",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2356",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2357",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2358",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2359",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2360",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2361",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2362",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2363",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2364",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2365",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2366",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2367",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2368",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2369",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2370",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2371",
        "value": "Ascia del boia (Classe di personaggio errata)"
    },
    {
        "id": "2372",
        "value": "Maglio di guerra"
    },
    {
        "id": "2373",
        "value": "Maglio di guerra"
    },
    {
        "id": "2374",
        "value": "Maglio di guerra"
    },
    {
        "id": "2375",
        "value": "Maglio di guerra"
    },
    {
        "id": "2376",
        "value": "Becco di Corvo (mazza)"
    },
    {
        "id": "2377",
        "value": "Becco di Corvo (mazza)"
    },
    {
        "id": "2378",
        "value": "Becco di Corvo (mazza)"
    },
    {
        "id": "2379",
        "value": "Becco di Corvo (mazza)"
    },
    {
        "id": "2380",
        "value": "Becco di Corvo (mazza)"
    },
    {
        "id": "2381",
        "value": "Mazzafrusto"
    },
    {
        "id": "2382",
        "value": "Mazzafrusto"
    },
    {
        "id": "2383",
        "value": "Mazzafrusto"
    },
    {
        "id": "2384",
        "value": "Mazzafrusto"
    },
    {
        "id": "2385",
        "value": "Mazzafrusto"
    },
    {
        "id": "2386",
        "value": "Mazzafrusto"
    },
    {
        "id": "2387",
        "value": "Mazza"
    },
    {
        "id": "2388",
        "value": "Mazza"
    },
    {
        "id": "2389",
        "value": "Mazza"
    },
    {
        "id": "2390",
        "value": "Mazza"
    },
    {
        "id": "2391",
        "value": "Mazza"
    },
    {
        "id": "2392",
        "value": "Mazza"
    },
    {
        "id": "2393",
        "value": "Mazza"
    },
    {
        "id": "2394",
        "value": "Mazza"
    },
    {
        "id": "2395",
        "value": "Mazza"
    },
    {
        "id": "2396",
        "value": "Mazza"
    },
    {
        "id": "2397",
        "value": "Mazza"
    },
    {
        "id": "2398",
        "value": "Mazza"
    },
    {
        "id": "2399",
        "value": "Mazza"
    },
    {
        "id": "2400",
        "value": "Mazza"
    },
    {
        "id": "2401",
        "value": "Mazza"
    },
    {
        "id": "2402",
        "value": "Mazza"
    },
    {
        "id": "2403",
        "value": "Mazza"
    },
    {
        "id": "2404",
        "value": "Mazza"
    },
    {
        "id": "2405",
        "value": "Arma improvvisata"
    },
    {
        "id": "2406",
        "value": "Arma improvvisata"
    },
    {
        "id": "2407",
        "value": "Arma improvvisata"
    },
    {
        "id": "2408",
        "value": "Arma improvvisata"
    },
    {
        "id": "2409",
        "value": "Arma improvvisata"
    },
    {
        "id": "2410",
        "value": "Arma improvvisata"
    },
    {
        "id": "2411",
        "value": "Arma improvvisata"
    },
    {
        "id": "2412",
        "value": "Arma improvvisata"
    },
    {
        "id": "2413",
        "value": "Arma improvvisata"
    },
    {
        "id": "2414",
        "value": "Arma improvvisata"
    },
    {
        "id": "2415",
        "value": "Mazzafrusto doppio"
    },
    {
        "id": "2416",
        "value": "Mazzafrusto doppio"
    },
    {
        "id": "2417",
        "value": "Mazzafrusto doppio"
    },
    {
        "id": "2418",
        "value": "Mazzafrusto doppio"
    },
    {
        "id": "2419",
        "value": "Mazzafrusto doppio"
    },
    {
        "id": "2420",
        "value": "Mazzafrusto doppio"
    },
    {
        "id": "2421",
        "value": "Mazzafrusto doppio"
    },
    {
        "id": "2422",
        "value": "Mazzafrusto doppio"
    },
    {
        "id": "2423",
        "value": "Mazzafrusto triplo"
    },
    {
        "id": "2424",
        "value": "Mazzafrusto triplo"
    },
    {
        "id": "2425",
        "value": "Mazzafrusto triplo"
    },
    {
        "id": "2426",
        "value": "Mazzafrusto triplo"
    },
    {
        "id": "2427",
        "value": "Mazzafrusto triplo"
    },
    {
        "id": "2428",
        "value": "Mazzafrusto a tre teste"
    },
    {
        "id": "2429",
        "value": "Mazzafrusto a tre teste"
    },
    {
        "id": "2430",
        "value": "Mazzafrusto a tre teste"
    },
    {
        "id": "2431",
        "value": "Mazzafrusto a tre teste"
    },
    {
        "id": "2432",
        "value": "Mazzafrusto a tre teste"
    },
    {
        "id": "2433",
        "value": "Mazzafrusto a tre teste"
    },
    {
        "id": "2434",
        "value": "Mazzafrusto a tre teste"
    },
    {
        "id": "2435",
        "value": "Mazzafrusto triplo"
    },
    {
        "id": "2436",
        "value": "Mazzafrusto a tre teste"
    },
    {
        "id": "2437",
        "value": "Lama da pugno di Thal"
    },
    {
        "id": "2438",
        "value": "Lama da pugno di Thal"
    },
    {
        "id": "2439",
        "value": "Lama da pugno di Thal"
    },
    {
        "id": "2440",
        "value": "Pugno di ferro"
    },
    {
        "id": "2441",
        "value": "Pugno di acciaio"
    },
    {
        "id": "2442",
        "value": "Pugno di piombo"
    },
    {
        "id": "2443",
        "value": "Guanti artigliati"
    },
    {
        "id": "2444",
        "value": "Guanti artigliati"
    },
    {
        "id": "2445",
        "value": "Guanti artigliati"
    },
    {
        "id": "2446",
        "value": "Guanti artigliati"
    },
    {
        "id": "2447",
        "value": "Pugnale a tre lame"
    },
    {
        "id": "2448",
        "value": "Pugnale a tre lame"
    },
    {
        "id": "2449",
        "value": "Pugnale a tre lame"
    },
    {
        "id": "2450",
        "value": "Pugnale a tre lame"
    },
    {
        "id": "2451",
        "value": "Pugnale a tre lame"
    },
    {
        "id": "2452",
        "value": "Lama da pugno di Zurag'Thal"
    },
    {
        "id": "2453",
        "value": "Lama da pugno di Zurag'Thal"
    },
    {
        "id": "2454",
        "value": "Lama da pugno di Zurag'Thal"
    },
    {
        "id": "2455",
        "value": "Lama da pugno di Zurag'Thal"
    },
    {
        "id": "2456",
        "value": "Lama da pugno di Zurag'Thal"
    },
    {
        "id": "2457",
        "value": "Lama da pugno di Zurag'Thal"
    },
    {
        "id": "2458",
        "value": "Spada larga"
    },
    {
        "id": "2459",
        "value": "Spada larga"
    },
    {
        "id": "2460",
        "value": "Spada larga"
    },
    {
        "id": "2461",
        "value": "Spada larga"
    },
    {
        "id": "2462",
        "value": "Spada larga"
    },
    {
        "id": "2463",
        "value": "Spada larga"
    },
    {
        "id": "2464",
        "value": "Spada larga"
    },
    {
        "id": "2465",
        "value": "Spada larga"
    },
    {
        "id": "2466",
        "value": "Spada larga"
    },
    {
        "id": "2467",
        "value": "Spada larga"
    },
    {
        "id": "2468",
        "value": "Spada larga"
    },
    {
        "id": "2469",
        "value": "Spada larga"
    },
    {
        "id": "2470",
        "value": "Spada larga"
    },
    {
        "id": "2471",
        "value": "Doppia lama di Thal dell'Elfo oscuro"
    },
    {
        "id": "2472",
        "value": "Doppia lama di Thal dell'Elfo oscuro"
    },
    {
        "id": "2473",
        "value": "Doppia lama di Thal dell'Elfo oscuro"
    },
    {
        "id": "2474",
        "value": "Doppia lama di Thal dell'Elfo oscuro"
    },
    {
        "id": "2475",
        "value": "Doppia lama di Thal dell'Elfo oscuro"
    },
    {
        "id": "2476",
        "value": "Doppia lama di Thal dell'Elfo oscuro"
    },
    {
        "id": "2477",
        "value": "Doppia lama di Thal dell'Elfo oscuro"
    },
    {
        "id": "2478",
        "value": "Doppia lama di Zhurag'Thal"
    },
    {
        "id": "2479",
        "value": "Doppia lama di Zhurag'Thal"
    },
    {
        "id": "2480",
        "value": "Doppia lama di Zhurag'Thal"
    },
    {
        "id": "2481",
        "value": "Doppia lama di Zhurag'Thal"
    },
    {
        "id": "2482",
        "value": "Doppia lama di Zhurag'Thal"
    },
    {
        "id": "2483",
        "value": "Doppia lama di Zhurag'Thal"
    },
    {
        "id": "2484",
        "value": "Doppia lama di Zhurag'Thal"
    },
    {
        "id": "2485",
        "value": "Arco corto"
    },
    {
        "id": "2486",
        "value": "Arco corto"
    },
    {
        "id": "2487",
        "value": "Arco corto"
    },
    {
        "id": "2488",
        "value": "Arco corto"
    },
    {
        "id": "2489",
        "value": "Arco corto"
    },
    {
        "id": "2490",
        "value": "Arco corto"
    },
    {
        "id": "2491",
        "value": "Arco corto"
    },
    {
        "id": "2492",
        "value": "Arco corto"
    },
    {
        "id": "2493",
        "value": "Arco corto"
    },
    {
        "id": "2494",
        "value": "Arco corto"
    },
    {
        "id": "2495",
        "value": "Arco corto"
    },
    {
        "id": "2496",
        "value": "Arco corto"
    },
    {
        "id": "2497",
        "value": "Arco corto"
    },
    {
        "id": "2498",
        "value": "Arco corto"
    },
    {
        "id": "2499",
        "value": "Arco corto"
    },
    {
        "id": "2500",
        "value": "Arco Lungo"
    },
    {
        "id": "2501",
        "value": "Arco Lungo"
    },
    {
        "id": "2502",
        "value": "Arco Lungo"
    },
    {
        "id": "2503",
        "value": "Arco Lungo"
    },
    {
        "id": "2504",
        "value": "Arco Lungo"
    },
    {
        "id": "2505",
        "value": "Arco Lungo"
    },
    {
        "id": "2506",
        "value": "Arco Lungo"
    },
    {
        "id": "2507",
        "value": "Arco Lungo"
    },
    {
        "id": "2508",
        "value": "Arco Lungo"
    },
    {
        "id": "2509",
        "value": "Arco Lungo"
    },
    {
        "id": "2510",
        "value": "Arco Lungo"
    },
    {
        "id": "2511",
        "value": "Arco Lungo"
    },
    {
        "id": "2512",
        "value": "Arco Lungo di Saburn"
    },
    {
        "id": "2513",
        "value": "Arco Lungo"
    },
    {
        "id": "2514",
        "value": "Arco Lungo"
    },
    {
        "id": "2515",
        "value": "Arco Lungo"
    },
    {
        "id": "2516",
        "value": "Arco Lungo"
    },
    {
        "id": "2517",
        "value": "Arco Lungo"
    },
    {
        "id": "2518",
        "value": "Arco Lungo"
    },
    {
        "id": "2519",
        "value": "Arco Lungo"
    },
    {
        "id": "2520",
        "value": "Arco Lungo"
    },
    {
        "id": "2521",
        "value": "Arco Lungo"
    },
    {
        "id": "2522",
        "value": "Arco Lungo"
    },
    {
        "id": "2523",
        "value": "Arco Lungo"
    },
    {
        "id": "2524",
        "value": "Arco Lungo"
    },
    {
        "id": "2525",
        "value": "Arco Lungo"
    },
    {
        "id": "2526",
        "value": "Arco Lungo"
    },
    {
        "id": "2527",
        "value": "Balestra leggera"
    },
    {
        "id": "2528",
        "value": "Balestra leggera"
    },
    {
        "id": "2529",
        "value": "Balestra leggera"
    },
    {
        "id": "2530",
        "value": "Balestra leggera"
    },
    {
        "id": "2531",
        "value": "Balestra leggera"
    },
    {
        "id": "2532",
        "value": "Balestra leggera"
    },
    {
        "id": "2533",
        "value": "Balestra leggera"
    },
    {
        "id": "2534",
        "value": "Balestra leggera"
    },
    {
        "id": "2535",
        "value": "Balestra leggera"
    },
    {
        "id": "2536",
        "value": "Balestra leggera"
    },
    {
        "id": "2537",
        "value": "Balestra leggera"
    },
    {
        "id": "2538",
        "value": "Balestra leggera"
    },
    {
        "id": "2539",
        "value": "Balestra leggera"
    },
    {
        "id": "2540",
        "value": "Balestra leggera"
    },
    {
        "id": "2541",
        "value": "Balestra leggera"
    },
    {
        "id": "2542",
        "value": "Balestra leggera"
    },
    {
        "id": "2543",
        "value": "Balestra pesante"
    },
    {
        "id": "2544",
        "value": "Balestra pesante"
    },
    {
        "id": "2545",
        "value": "Balestra pesante"
    },
    {
        "id": "2546",
        "value": "Balestra pesante"
    },
    {
        "id": "2547",
        "value": "Balestra pesante"
    },
    {
        "id": "2548",
        "value": "Balestra pesante"
    },
    {
        "id": "2549",
        "value": "Balestra pesante"
    },
    {
        "id": "2550",
        "value": "Balestra pesante"
    },
    {
        "id": "2551",
        "value": "Balestra pesante"
    },
    {
        "id": "2552",
        "value": "Balestra pesante"
    },
    {
        "id": "2553",
        "value": "Balestra pesante"
    },
    {
        "id": "2554",
        "value": "Balestra pesante"
    },
    {
        "id": "2555",
        "value": "Balestra pesante"
    },
    {
        "id": "2556",
        "value": "Balestra pesante"
    },
    {
        "id": "2557",
        "value": "Balestra pesante"
    },
    {
        "id": "2558",
        "value": "Balestra pesante"
    },
    {
        "id": "2559",
        "value": "Balestra pesante"
    },
    {
        "id": "2560",
        "value": "Balestra pesante"
    },
    {
        "id": "2561",
        "value": "Balestra pesante"
    },
    {
        "id": "2562",
        "value": "Balestra pesante"
    },
    {
        "id": "2563",
        "value": "Balestra pesante"
    },
    {
        "id": "2564",
        "value": "Balestra pesante"
    },
    {
        "id": "2565",
        "value": "Balestra pesante"
    },
    {
        "id": "2566",
        "value": "Balestra pesante"
    },
    {
        "id": "2567",
        "value": "Balestra pesante"
    },
    {
        "id": "2568",
        "value": "Balestra pesante"
    },
    {
        "id": "2569",
        "value": "Balestra pesante"
    },
    {
        "id": "2570",
        "value": "Piuma di porco"
    },
    {
        "id": "2571",
        "value": "Piuma di porco"
    },
    {
        "id": "2572",
        "value": "Piuma di porco"
    },
    {
        "id": "2573",
        "value": "Picca"
    },
    {
        "id": "2574",
        "value": "Picca"
    },
    {
        "id": "2575",
        "value": "Picca"
    },
    {
        "id": "2576",
        "value": "Alabarda"
    },
    {
        "id": "2577",
        "value": "Alabarda"
    },
    {
        "id": "2578",
        "value": "Alabarda"
    },
    {
        "id": "2579",
        "value": "Alabarda"
    },
    {
        "id": "2580",
        "value": "Tridente"
    },
    {
        "id": "2581",
        "value": "Tridente"
    },
    {
        "id": "2582",
        "value": "Tridente"
    },
    {
        "id": "2583",
        "value": "Tridente"
    },
    {
        "id": "2584",
        "value": "Sterminadraghi"
    },
    {
        "id": "2585",
        "value": "Sterminadraghi"
    },
    {
        "id": "2586",
        "value": "Sterminadraghi"
    },
    {
        "id": "2587",
        "value": "Sterminadraghi"
    },
    {
        "id": "2588",
        "value": "Sfida degli dei"
    },
    {
        "id": "2589",
        "value": "Barba divina"
    },
    {
        "id": "2590",
        "value": "Barba divina"
    },
    {
        "id": "2591",
        "value": "Barba divina"
    },
    {
        "id": "2592",
        "value": "Partigiana"
    },
    {
        "id": "2593",
        "value": "Partigiana"
    },
    {
        "id": "2594",
        "value": "Partigiana"
    },
    {
        "id": "2595",
        "value": "Partigiana"
    },
    {
        "id": "2596",
        "value": "Partigiana"
    },
    {
        "id": "2597",
        "value": "Budiac"
    },
    {
        "id": "2598",
        "value": "Budiac"
    },
    {
        "id": "2599",
        "value": "Budiac"
    },
    {
        "id": "2600",
        "value": "Budiac"
    },
    {
        "id": "2601",
        "value": "Budiac"
    },
    {
        "id": "2602",
        "value": "Budiac"
    },
    {
        "id": "2603",
        "value": "Bastone a doppia lama"
    },
    {
        "id": "2604",
        "value": "Bastone a doppia lama"
    },
    {
        "id": "2605",
        "value": "Bastone a doppia lama"
    },
    {
        "id": "2606",
        "value": "Bastone a doppia lama"
    },
    {
        "id": "2607",
        "value": "Bastone a doppia lama"
    },
    {
        "id": "2608",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2609",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2610",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2611",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2612",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2613",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2614",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2615",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2616",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2617",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2618",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2619",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2620",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2621",
        "value": "Bastone da battaglia"
    },
    {
        "id": "2622",
        "value": "Verga di Blackstaff"
    },
    {
        "id": "2623",
        "value": "Yoribo"
    },
    {
        "id": "2624",
        "value": "Yoribo"
    },
    {
        "id": "2625",
        "value": "Yoribo"
    },
    {
        "id": "2626",
        "value": "Yoribo"
    },
    {
        "id": "2627",
        "value": "Yoribo"
    },
    {
        "id": "2628",
        "value": "Yoribo"
    },
    {
        "id": "2629",
        "value": "Yoribo"
    },
    {
        "id": "2630",
        "value": "Yoribo"
    },
    {
        "id": "2631",
        "value": "Yoribo"
    },
    {
        "id": "2632",
        "value": "Yoribo"
    },
    {
        "id": "2633",
        "value": "Yoribo"
    },
    {
        "id": "2634",
        "value": "Yoribo"
    },
    {
        "id": "2635",
        "value": "Yoribo"
    },
    {
        "id": "2636",
        "value": "Yoribo"
    },
    {
        "id": "2637",
        "value": "Yoribo"
    },
    {
        "id": "2638",
        "value": "Yoribo"
    },
    {
        "id": "2639",
        "value": "Yoribo"
    },
    {
        "id": "2640",
        "value": "Yoribo"
    },
    {
        "id": "2641",
        "value": "Yoribo"
    },
    {
        "id": "2642",
        "value": "Yoribo"
    },
    {
        "id": "2643",
        "value": "Yoribo"
    },
    {
        "id": "2644",
        "value": "Yoribo"
    },
    {
        "id": "2645",
        "value": "Yoribo"
    },
    {
        "id": "2646",
        "value": "Yoribo"
    },
    {
        "id": "2647",
        "value": "Yoribo"
    },
    {
        "id": "2648",
        "value": "Yoribo"
    },
    {
        "id": "2649",
        "value": "Yoribo"
    },
    {
        "id": "2650",
        "value": "Bastone da Mago dell'acqua semplice"
    },
    {
        "id": "2651",
        "value": "Bastone da Mago dell'acqua semplice"
    },
    {
        "id": "2652",
        "value": "Bastone da Mago dell'acqua semplice"
    },
    {
        "id": "2653",
        "value": "Bastone da Mago dell'acqua semplice"
    },
    {
        "id": "2654",
        "value": "Bastone da Mago della terra semplice"
    },
    {
        "id": "2655",
        "value": "Bastone da Mago della terra semplice"
    },
    {
        "id": "2656",
        "value": "Bastone da Mago della terra semplice"
    },
    {
        "id": "2657",
        "value": "Bastone da Mago della terra semplice"
    },
    {
        "id": "2658",
        "value": "Bastone da Mago dell'aria semplice"
    },
    {
        "id": "2659",
        "value": "Bastone da Mago dell'aria semplice"
    },
    {
        "id": "2660",
        "value": "Bastone da Mago dell'aria semplice"
    },
    {
        "id": "2661",
        "value": "Bastone da Mago dell'aria semplice"
    },
    {
        "id": "2662",
        "value": "Bastone da Mago del fuoco semplice"
    },
    {
        "id": "2663",
        "value": "Bastone da Mago del fuoco semplice"
    },
    {
        "id": "2664",
        "value": "Bastone da Mago del fuoco semplice"
    },
    {
        "id": "2665",
        "value": "Bastone da Mago del fuoco semplice"
    },
    {
        "id": "2666",
        "value": "Bastone da Mago del vuoto semplice"
    },
    {
        "id": "2667",
        "value": "Bastone da Mago del vuoto semplice"
    },
    {
        "id": "2668",
        "value": "Bastone da Mago del vuoto semplice"
    },
    {
        "id": "2669",
        "value": "Bastone da Mago del vuoto semplice"
    },
    {
        "id": "2670",
        "value": "Bastone da Mago dell'acqua decorato"
    },
    {
        "id": "2671",
        "value": "Bastone da Mago dell'acqua decorato"
    },
    {
        "id": "2672",
        "value": "Bastone da Mago dell'acqua decorato"
    },
    {
        "id": "2673",
        "value": "Bastone da Mago dell'acqua decorato"
    },
    {
        "id": "2674",
        "value": "Bastone da Mago della terra decorato"
    },
    {
        "id": "2675",
        "value": "Bastone da Mago della terra decorato"
    },
    {
        "id": "2676",
        "value": "Bastone da Mago della terra decorato"
    },
    {
        "id": "2677",
        "value": "Bastone da Mago della terra decorato"
    },
    {
        "id": "2678",
        "value": "Bastone da Mago dell'aria decorato"
    },
    {
        "id": "2679",
        "value": "Bastone da Mago dell'aria decorato"
    },
    {
        "id": "2680",
        "value": "Bastone da Mago dell'aria decorato"
    },
    {
        "id": "2681",
        "value": "Bastone da Mago dell'aria decorato"
    },
    {
        "id": "2682",
        "value": "Bastone da Mago del fuoco decorato"
    },
    {
        "id": "2683",
        "value": "Bastone da Mago del fuoco decorato"
    },
    {
        "id": "2684",
        "value": "Bastone da Mago del fuoco decorato"
    },
    {
        "id": "2685",
        "value": "Bastone da Mago del fuoco decorato"
    },
    {
        "id": "2686",
        "value": "Bastone da Mago del vuoto decorato"
    },
    {
        "id": "2687",
        "value": "Bastone da Mago del vuoto decorato"
    },
    {
        "id": "2688",
        "value": "Bastone da Mago del vuoto decorato"
    },
    {
        "id": "2689",
        "value": "Bastone da Mago del vuoto decorato"
    },
    {
        "id": "2690",
        "value": "Bastone da Mago del'acqua runico"
    },
    {
        "id": "2691",
        "value": "Bastone da Mago del'acqua runico"
    },
    {
        "id": "2692",
        "value": "Bastone da Mago del'acqua runico"
    },
    {
        "id": "2693",
        "value": "Bastone da Mago del'acqua runico"
    },
    {
        "id": "2694",
        "value": "Bastone da Mago della terra runico"
    },
    {
        "id": "2695",
        "value": "Bastone da Mago della terra runico"
    },
    {
        "id": "2696",
        "value": "Bastone da Mago della terra runico"
    },
    {
        "id": "2697",
        "value": "Bastone da Mago della terra runico"
    },
    {
        "id": "2698",
        "value": "Bastone da Mago dell'aria runico"
    },
    {
        "id": "2699",
        "value": "Bastone da Mago dell'aria runico"
    },
    {
        "id": "2700",
        "value": "Bastone da Mago dell'aria runico"
    },
    {
        "id": "2701",
        "value": "Bastone da Mago dell'aria runico"
    },
    {
        "id": "2702",
        "value": "Bastone da Mago del fuoco runico"
    },
    {
        "id": "2703",
        "value": "Bastone da Mago del fuoco runico"
    },
    {
        "id": "2704",
        "value": "Bastone da Mago del fuoco runico"
    },
    {
        "id": "2705",
        "value": "Bastone da Mago del fuoco runico"
    },
    {
        "id": "2706",
        "value": "Bastone da Mago del vuoto runico"
    },
    {
        "id": "2707",
        "value": "Bastone da Mago del vuoto runico"
    },
    {
        "id": "2708",
        "value": "Bastone da Mago del vuoto runico"
    },
    {
        "id": "2709",
        "value": "Bastone da Mago del vuoto runico"
    },
    {
        "id": "2710",
        "value": "Bastone da Mago dell'acqua mistico"
    },
    {
        "id": "2711",
        "value": "Bastone da Mago dell'acqua mistico"
    },
    {
        "id": "2712",
        "value": "Bastone da Mago dell'acqua mistico"
    },
    {
        "id": "2713",
        "value": "Bastone da Mago dell'acqua mistico"
    },
    {
        "id": "2714",
        "value": "Bastone da Mago della terra mistico"
    },
    {
        "id": "2715",
        "value": "Bastone da Mago della terra mistico"
    },
    {
        "id": "2716",
        "value": "Bastone da Mago della terra mistico"
    },
    {
        "id": "2717",
        "value": "Bastone da Mago della terra mistico"
    },
    {
        "id": "2718",
        "value": "Bastone da Mago dell'aria mistico"
    },
    {
        "id": "2719",
        "value": "Bastone da Mago dell'aria mistico"
    },
    {
        "id": "2720",
        "value": "Bastone da Mago dell'aria mistico"
    },
    {
        "id": "2721",
        "value": "Bastone da Mago dell'aria mistico"
    },
    {
        "id": "2722",
        "value": "Bastone da Mago del fuoco mistico"
    },
    {
        "id": "2723",
        "value": "Bastone da Mago del fuoco mistico"
    },
    {
        "id": "2724",
        "value": "Bastone da Mago del fuoco mistico"
    },
    {
        "id": "2725",
        "value": "Bastone da Mago del fuoco mistico"
    },
    {
        "id": "2726",
        "value": "Bastone da Mago del vuoto mistico"
    },
    {
        "id": "2727",
        "value": "Bastone da Mago del vuoto mistico"
    },
    {
        "id": "2728",
        "value": "Bastone da Mago del vuoto mistico"
    },
    {
        "id": "2729",
        "value": "Bastone da Mago del vuoto mistico"
    },
    {
        "id": "2730",
        "value": "Bastone da Mago dell'acqua scintillante"
    },
    {
        "id": "2731",
        "value": "Bastone da Mago dell'acqua scintillante"
    },
    {
        "id": "2732",
        "value": "Bastone da Mago dell'acqua scintillante"
    },
    {
        "id": "2733",
        "value": "Bastone da Mago dell'acqua scintillante"
    },
    {
        "id": "2734",
        "value": "Bastone da Mago della terra scintillante"
    },
    {
        "id": "2735",
        "value": "Bastone da Mago della terra scintillante"
    },
    {
        "id": "2736",
        "value": "Bastone da Mago della terra scintillante"
    },
    {
        "id": "2737",
        "value": "Bastone da Mago della terra scintillante"
    },
    {
        "id": "2738",
        "value": "Bastone da Mago dell'aria scintillante"
    },
    {
        "id": "2739",
        "value": "Bastone da Mago dell'aria scintillante"
    },
    {
        "id": "2740",
        "value": "Bastone da Mago dell'aria scintillante"
    },
    {
        "id": "2741",
        "value": "Bastone da Mago dell'aria scintillante"
    },
    {
        "id": "2742",
        "value": "Bastone da Mago del fuoco scintillante"
    },
    {
        "id": "2743",
        "value": "Bastone da Mago del fuoco scintillante"
    },
    {
        "id": "2744",
        "value": "Bastone da Mago del fuoco scintillante"
    },
    {
        "id": "2745",
        "value": "Bastone da Mago del fuoco scintillante"
    },
    {
        "id": "2746",
        "value": "Bastone da Mago del vuoto scintillante"
    },
    {
        "id": "2747",
        "value": "Bastone da Mago del vuoto scintillante"
    },
    {
        "id": "2748",
        "value": "Bastone da Mago del vuoto scintillante"
    },
    {
        "id": "2749",
        "value": "Bastone da Mago del vuoto scintillante"
    },
    {
        "id": "2750",
        "value": "Bastone da Mago dell'acqua iridescente"
    },
    {
        "id": "2751",
        "value": "Bastone da Mago dell'acqua iridescente"
    },
    {
        "id": "2752",
        "value": "Bastone da Mago dell'acqua iridescente"
    },
    {
        "id": "2753",
        "value": "Bastone da Mago dell'acqua iridescente"
    },
    {
        "id": "2754",
        "value": "Bastone da Mago della terra iridescente"
    },
    {
        "id": "2755",
        "value": "Bastone da Mago della terra iridescente"
    },
    {
        "id": "2756",
        "value": "Bastone da Mago della terra iridescente"
    },
    {
        "id": "2757",
        "value": "Bastone da Mago della terra iridescente"
    },
    {
        "id": "2758",
        "value": "Bastone da Mago dell'aria iridescente"
    },
    {
        "id": "2759",
        "value": "Bastone da Mago dell'aria iridescente"
    },
    {
        "id": "2760",
        "value": "Bastone da Mago dell'aria iridescente"
    },
    {
        "id": "2761",
        "value": "Bastone da Mago dell'aria iridescente"
    },
    {
        "id": "2762",
        "value": "Bastone da Mago del fuoco iridescente"
    },
    {
        "id": "2763",
        "value": "Bastone da Mago del fuoco iridescente"
    },
    {
        "id": "2764",
        "value": "Bastone da Mago del fuoco iridescente"
    },
    {
        "id": "2765",
        "value": "Bastone da Mago del fuoco iridescente"
    },
    {
        "id": "2766",
        "value": "Bastone da Mago del vuoto iridescente"
    },
    {
        "id": "2767",
        "value": "Bastone da Mago del vuoto iridescente"
    },
    {
        "id": "2768",
        "value": "Bastone da Mago del vuoto iridescente"
    },
    {
        "id": "2769",
        "value": "Bastone da Mago del vuoto iridescente"
    },
    {
        "id": "2770",
        "value": "Scudo leggero"
    },
    {
        "id": "2771",
        "value": "Scudo leggero"
    },
    {
        "id": "2772",
        "value": "Scudo leggero"
    },
    {
        "id": "2773",
        "value": "Scudo leggero"
    },
    {
        "id": "2774",
        "value": "Scudo Orchetto"
    },
    {
        "id": "2775",
        "value": "Scudo Orchetto"
    },
    {
        "id": "2776",
        "value": "Scudo Orchetto"
    },
    {
        "id": "2777",
        "value": "Scudo Orchetto"
    },
    {
        "id": "2778",
        "value": "Brocchiere magico (scudo)"
    },
    {
        "id": "2779",
        "value": "Brocchiere magico (scudo)"
    },
    {
        "id": "2780",
        "value": "Brocchiere magico (scudo)"
    },
    {
        "id": "2781",
        "value": "Brocchiere magico (scudo)"
    },
    {
        "id": "2782",
        "value": "Scudo di legno bollito"
    },
    {
        "id": "2783",
        "value": "Scudo di legno bollito"
    },
    {
        "id": "2784",
        "value": "Scudo di legno bollito"
    },
    {
        "id": "2785",
        "value": "Scudo di legno bollito"
    },
    {
        "id": "2786",
        "value": "Scudo metallico"
    },
    {
        "id": "2787",
        "value": "Scudo metallico"
    },
    {
        "id": "2788",
        "value": "Scudo metallico"
    },
    {
        "id": "2789",
        "value": "Scudo metallico"
    },
    {
        "id": "2790",
        "value": "Scudo metallico"
    },
    {
        "id": "2791",
        "value": "Scudo metallico"
    },
    {
        "id": "2792",
        "value": "Scudo metallico"
    },
    {
        "id": "2793",
        "value": "Targone metallico"
    },
    {
        "id": "2794",
        "value": "Targone metallico"
    },
    {
        "id": "2795",
        "value": "Targone metallico"
    },
    {
        "id": "2796",
        "value": "Scudo di Drago"
    },
    {
        "id": "2797",
        "value": "Scudo di Drago"
    },
    {
        "id": "2798",
        "value": "Scudo di Drago"
    },
    {
        "id": "2799",
        "value": "Scudo delle guardie del Principe"
    },
    {
        "id": "2800",
        "value": "Scudo delle guardie del Principe"
    },
    {
        "id": "2801",
        "value": "Scudo delle guardie del Principe"
    },
    {
        "id": "2802",
        "value": "Scudo delle guardie del Principe"
    },
    {
        "id": "2803",
        "value": "Scudo del guardiano"
    },
    {
        "id": "2804",
        "value": "Scudo del guardiano"
    },
    {
        "id": "2805",
        "value": "Scudo del guardiano"
    },
    {
        "id": "2806",
        "value": "Scudo del guardiano"
    },
    {
        "id": "2807",
        "value": "Scudo della fiducia reale"
    },
    {
        "id": "2808",
        "value": "Scudo della fiducia reale"
    },
    {
        "id": "2809",
        "value": "Scudo della fiducia reale"
    },
    {
        "id": "2810",
        "value": "Scudo della fiducia reale"
    },
    {
        "id": "2811",
        "value": "Scudo della fiducia reale"
    },
    {
        "id": "2812",
        "value": "Scudo della fiducia reale"
    },
    {
        "id": "2813",
        "value": "Scudo di DeMordrey"
    },
    {
        "id": "2814",
        "value": "Scudo di DeMordrey"
    },
    {
        "id": "2815",
        "value": "Scudo di DeMordrey"
    },
    {
        "id": "2816",
        "value": "Scudo di DeMordrey"
    },
    {
        "id": "2817",
        "value": "Scudo di DeMordrey"
    },
    {
        "id": "2818",
        "value": "Scudo di DeMordrey"
    },
    {
        "id": "2819",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2820",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2821",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2822",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2823",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2824",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2825",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2826",
        "value": "Scudo metallico grande"
    },
    {
        "id": "2827",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2828",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2829",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2830",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2831",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2832",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2833",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2834",
        "value": "Sommo scudo metallico"
    },
    {
        "id": "2835",
        "value": "Scudo della torre"
    },
    {
        "id": "2836",
        "value": "Scudo della torre"
    },
    {
        "id": "2837",
        "value": "Scudo della torre"
    },
    {
        "id": "2838",
        "value": "Scudo della torre"
    },
    {
        "id": "2839",
        "value": "Scudo della torre"
    },
    {
        "id": "2840",
        "value": "Scudo della torre"
    },
    {
        "id": "2841",
        "value": "Scudo della torre"
    },
    {
        "id": "2842",
        "value": "Scudo della torre"
    },
    {
        "id": "2843",
        "value": "Scudo della torre"
    },
    {
        "id": "2844",
        "value": "Scudo della torre"
    },
    {
        "id": "2845",
        "value": "Scudo della torre"
    },
    {
        "id": "2846",
        "value": "Scudo della torre"
    },
    {
        "id": "2847",
        "value": "Scudo della torre"
    },
    {
        "id": "2848",
        "value": "Scudo della torre"
    },
    {
        "id": "2849",
        "value": "Scudo della torre"
    },
    {
        "id": "2850",
        "value": "Scudo della torre"
    },
    {
        "id": "2851",
        "value": "Scudo della torre"
    },
    {
        "id": "2852",
        "value": "Scudo della torre"
    },
    {
        "id": "2853",
        "value": "Scudo della torre"
    },
    {
        "id": "2854",
        "value": "Scudo della torre"
    },
    {
        "id": "2855",
        "value": "Pugno in titanio del gladiatore"
    },
    {
        "id": "2856",
        "value": "Pugno in titanio del gladiatore"
    },
    {
        "id": "2857",
        "value": "Pugno in titanio del gladiatore"
    },
    {
        "id": "2858",
        "value": "Pugno in titanio del gladiatore"
    },
    {
        "id": "2859",
        "value": "Pugno in titanio del gladiatore"
    },
    {
        "id": "2860",
        "value": "Artigli del gladiatore"
    },
    {
        "id": "2861",
        "value": "Artigli del gladiatore"
    },
    {
        "id": "2862",
        "value": "Artigli del gladiatore"
    },
    {
        "id": "2863",
        "value": "Artigli del gladiatore"
    },
    {
        "id": "2864",
        "value": "Artigli del gladiatore"
    },
    {
        "id": "2865",
        "value": "Artigli della tigre"
    },
    {
        "id": "2866",
        "value": "Guanti per addestramento"
    },
    {
        "id": "2867",
        "value": "Guanti da battaglia della furia"
    },
    {
        "id": "2868",
        "value": "Zampe digli orsi"
    },
    {
        "id": "2869",
        "value": "Guanti d'arme dentellati"
    },
    {
        "id": "2870",
        "value": "Guanti d'arme dentellati"
    },
    {
        "id": "2871",
        "value": "Guanti d'arme dentellati"
    },
    {
        "id": "2872",
        "value": "Guanti d'arme dentellati"
    },
    {
        "id": "2873",
        "value": "Guanti d'arme dentellati"
    },
    {
        "id": "2874",
        "value": "Guanti d'arme corazzati"
    },
    {
        "id": "2875",
        "value": "Guanti d'arme corazzati"
    },
    {
        "id": "2876",
        "value": "Guanti d'arme corazzati"
    },
    {
        "id": "2877",
        "value": "Guanti d'arme corazzati"
    },
    {
        "id": "2878",
        "value": "Guanti d'arme corazzati"
    },
    {
        "id": "2879",
        "value": "Guanti d'arme con lama"
    },
    {
        "id": "2880",
        "value": "Guanti d'arme molto affilati"
    },
    {
        "id": "2881",
        "value": "Guanti d'arme con lama"
    },
    {
        "id": "2882",
        "value": "Guanti d'arme con lama"
    },
    {
        "id": "2883",
        "value": "Guanti d'arme con lama"
    },
    {
        "id": "2884",
        "value": "Guanti d'arme con lama"
    },
    {
        "id": "2885",
        "value": "Guanti d'arme per l'ascia"
    },
    {
        "id": "2886",
        "value": "Guanti d'arme per l'ascia"
    },
    {
        "id": "2887",
        "value": "Guanti d'arme per l'ascia"
    },
    {
        "id": "2888",
        "value": "Guanti d'arme per l'ascia"
    },
    {
        "id": "2889",
        "value": "Guanti d'arme per l'ascia"
    },
    {
        "id": "2890",
        "value": "Guanti d'arme per maglio"
    },
    {
        "id": "2891",
        "value": "Guanti d'arme per maglio"
    },
    {
        "id": "2892",
        "value": "Guanti d'arme per maglio"
    },
    {
        "id": "2893",
        "value": "Guanti d'arme per maglio"
    },
    {
        "id": "2894",
        "value": "Guanti d'arme per maglio"
    },
    {
        "id": "2895",
        "value": "Potere divino (spada)"
    },
    {
        "id": "2896",
        "value": "Lama dell'angelo inferocito"
    },
    {
        "id": "2897",
        "value": "Spada santa avvelenata"
    },
    {
        "id": "2898",
        "value": "Spada lunga benedetta"
    },
    {
        "id": "2899",
        "value": "Giubba"
    },
    {
        "id": "2900",
        "value": "Giubba"
    },
    {
        "id": "2901",
        "value": "Giubba"
    },
    {
        "id": "2902",
        "value": "Giubba"
    },
    {
        "id": "2903",
        "value": "Giubba"
    },
    {
        "id": "2904",
        "value": "Giubba"
    },
    {
        "id": "2905",
        "value": "Giubba"
    },
    {
        "id": "2906",
        "value": "Giubba"
    },
    {
        "id": "2907",
        "value": "Giubba"
    },
    {
        "id": "2908",
        "value": "Giubba"
    },
    {
        "id": "2909",
        "value": "Giubba"
    },
    {
        "id": "2910",
        "value": "Giubba"
    },
    {
        "id": "2911",
        "value": "Giubba"
    },
    {
        "id": "2912",
        "value": "Giubba"
    },
    {
        "id": "2913",
        "value": "Giubba"
    },
    {
        "id": "2914",
        "value": "Giubba"
    },
    {
        "id": "2915",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2916",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2917",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2918",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2919",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2920",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2921",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2922",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2923",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2924",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2925",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2926",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2927",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2928",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2929",
        "value": "Pelle di rettile"
    },
    {
        "id": "2930",
        "value": "Pelle di rettile"
    },
    {
        "id": "2931",
        "value": "Pelle di rettile"
    },
    {
        "id": "2932",
        "value": "Pelle di rettile"
    },
    {
        "id": "2933",
        "value": "Pelle di rettile"
    },
    {
        "id": "2934",
        "value": "Pelle di rettile"
    },
    {
        "id": "2935",
        "value": "Pelle di rettile"
    },
    {
        "id": "2936",
        "value": "Pelle di rettile"
    },
    {
        "id": "2937",
        "value": "Pelle di rettile"
    },
    {
        "id": "2938",
        "value": "Pelle di rettile"
    },
    {
        "id": "2939",
        "value": "Pelle di rettile"
    },
    {
        "id": "2940",
        "value": "Pelle di rettile"
    },
    {
        "id": "2941",
        "value": "Pelle di rettile"
    },
    {
        "id": "2942",
        "value": "Pelle di rettile"
    },
    {
        "id": "2943",
        "value": "Pelle di rettile"
    },
    {
        "id": "2944",
        "value": "Giubba imbottita"
    },
    {
        "id": "2945",
        "value": "Giubba imbottita"
    },
    {
        "id": "2946",
        "value": "Giubba imbottita"
    },
    {
        "id": "2947",
        "value": "Giubba imbottita"
    },
    {
        "id": "2948",
        "value": "Giubba imbottita"
    },
    {
        "id": "2949",
        "value": "Giubba imbottita"
    },
    {
        "id": "2950",
        "value": "Giubba imbottita"
    },
    {
        "id": "2951",
        "value": "Giubba imbottita"
    },
    {
        "id": "2952",
        "value": "Giubba imbottita"
    },
    {
        "id": "2953",
        "value": "Giubba imbottita"
    },
    {
        "id": "2954",
        "value": "Giubba imbottita"
    },
    {
        "id": "2955",
        "value": "Giubba imbottita"
    },
    {
        "id": "2956",
        "value": "Giubba imbottita"
    },
    {
        "id": "2957",
        "value": "Giubba imbottita"
    },
    {
        "id": "2958",
        "value": "Giubba imbottita"
    },
    {
        "id": "2959",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2960",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "2961",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "2962",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2963",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "2964",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "2965",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2966",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "2967",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "2968",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2969",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "2970",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "2971",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2972",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2973",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "2974",
        "value": "Pelle di rettile"
    },
    {
        "id": "2975",
        "value": "Pelle di rettile"
    },
    {
        "id": "2976",
        "value": "Pelle di rettile"
    },
    {
        "id": "2977",
        "value": "Pelle di rettile"
    },
    {
        "id": "2978",
        "value": "Pelle di rettile"
    },
    {
        "id": "2979",
        "value": "Pelle di rettile"
    },
    {
        "id": "2980",
        "value": "Pelle di rettile"
    },
    {
        "id": "2981",
        "value": "Pelle di rettile"
    },
    {
        "id": "2982",
        "value": "Pelle di rettile"
    },
    {
        "id": "2983",
        "value": "Pelle di rettile"
    },
    {
        "id": "2984",
        "value": "Pelle di rettile"
    },
    {
        "id": "2985",
        "value": "Pelle di rettile"
    },
    {
        "id": "2986",
        "value": "Pelle di rettile"
    },
    {
        "id": "2987",
        "value": "Pelle di rettile"
    },
    {
        "id": "2988",
        "value": "Pelle di rettile"
    },
    {
        "id": "2989",
        "value": "Cotta di maglia"
    },
    {
        "id": "2990",
        "value": "Cotta di maglia"
    },
    {
        "id": "2991",
        "value": "Cotta di maglia"
    },
    {
        "id": "2992",
        "value": "Cotta di maglia"
    },
    {
        "id": "2993",
        "value": "Cotta di maglia"
    },
    {
        "id": "2994",
        "value": "Cotta di maglia"
    },
    {
        "id": "2995",
        "value": "Cotta di maglia"
    },
    {
        "id": "2996",
        "value": "Cotta di maglia"
    },
    {
        "id": "2997",
        "value": "Cotta di maglia"
    },
    {
        "id": "2998",
        "value": "Cotta di maglia"
    },
    {
        "id": "2999",
        "value": "Giubba rinforzata"
    },
    {
        "id": "3000",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3001",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "3002",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3003",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3004",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "3005",
        "value": "<noname> (elmo)"
    },
    {
        "id": "3006",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "3007",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3008",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3009",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3010",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3011",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3012",
        "value": "<noname> (elmo)"
    },
    {
        "id": "3013",
        "value": "<noname> (Spallacci)"
    },
    {
        "id": "3014",
        "value": "<noname> (scudo)"
    },
    {
        "id": "3015",
        "value": "<noname> (cannone)"
    },
    {
        "id": "3016",
        "value": "<noname> (cannone)"
    },
    {
        "id": "3017",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3018",
        "value": "<noname> (elmo?) - occhiali da aviatore del nano, li fa indossare a tutti (forse)"
    },
    {
        "id": "3019",
        "value": "<noname> (Briglia)"
    },
    {
        "id": "3020",
        "value": "<noname> (Briglia)"
    },
    {
        "id": "3021",
        "value": "<noname> (Briglia)"
    },
    {
        "id": "3022",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "3023",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3024",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3025",
        "value": "<noname> (elmo)"
    },
    {
        "id": "3026",
        "value": "<noname> (Gambiere)"
    },
    {
        "id": "3027",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3028",
        "value": "<noname> (spallacci?)"
    },
    {
        "id": "3029",
        "value": "<noname> (Parabraccia)"
    },
    {
        "id": "3030",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3031",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3032",
        "value": "<noname> (elmo)"
    },
    {
        "id": "3033",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "3034",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3035 - 3067",
        "value": "-"
    },
    {
        "id": "3068",
        "value": "Freccia"
    },
    {
        "id": "3069",
        "value": "Freccia"
    },
    {
        "id": "3070",
        "value": "Freccia"
    },
    {
        "id": "3071",
        "value": "Saetta"
    },
    {
        "id": "3072",
        "value": "Sciabola magica della luce"
    },
    {
        "id": "3073",
        "value": "Sferza santa illuminata di Sophia"
    },
    {
        "id": "3074",
        "value": "Freccia a ragno"
    },
    {
        "id": "3075",
        "value": "Randello vegetale"
    },
    {
        "id": "3076",
        "value": "Freccia vegetale"
    },
    {
        "id": "3077",
        "value": "Freccia penetrante"
    },
    {
        "id": "3078",
        "value": "Freccia esplosiva"
    },
    {
        "id": "3079",
        "value": "Freccia"
    },
    {
        "id": "3080",
        "value": "Abito celestiale"
    },
    {
        "id": "3081",
        "value": "Cuoio degli dei"
    },
    {
        "id": "3082",
        "value": "Armatura di Insomdiel"
    },
    {
        "id": "3083",
        "value": "Elmo in cuoio piccolo"
    },
    {
        "id": "3084",
        "value": "Elmo metallico"
    },
    {
        "id": "3085",
        "value": "Tenuta da battaglia imbottita"
    },
    {
        "id": "3086",
        "value": "Bardatura in cuoio degli Dei"
    },
    {
        "id": "3087",
        "value": "Cotta di maglia del serafino"
    },
    {
        "id": "3088",
        "value": "Cuoio celestiale bollito"
    },
    {
        "id": "3089",
        "value": "Armatura del Goblin"
    },
    {
        "id": "3090",
        "value": "Armatura imbottita del Goblin"
    },
    {
        "id": "3091",
        "value": "Armatura in cuoio del Goblin"
    },
    {
        "id": "3092",
        "value": "Panciotto in cuoio del Goblin"
    },
    {
        "id": "3093",
        "value": "Armatura in tessuto del Goblin"
    },
    {
        "id": "3094",
        "value": "Armatura in pelle di rettile del Goblin"
    },
    {
        "id": "3095",
        "value": "<noname> (cannone)"
    },
    {
        "id": "3096",
        "value": "<noname> (scudo) - Enorme! ò.ò"
    },
    {
        "id": "3097 - 3099",
        "value": ""
    },
    {
        "id": "3100",
        "value": "Armatura imbottita del Ranger"
    },
    {
        "id": "3101",
        "value": "Farsetto in cuoio elfico"
    },
    {
        "id": "3102",
        "value": "Armatura in mithril elfica"
    },
    {
        "id": "3103",
        "value": "Elmo elfico piccolo in cuoio"
    },
    {
        "id": "3104",
        "value": "Elmo elfico in mithril"
    },
    {
        "id": "3105",
        "value": "Elmo lampeggiante di Sereish (set)"
    },
    {
        "id": "3106",
        "value": "Guanti del tuono di Sereigh (set)"
    },
    {
        "id": "3107",
        "value": "Cintura del tuono di Sereish (set)"
    },
    {
        "id": "3108",
        "value": "Gambiere lampeggianti di Sereish (set)"
    },
    {
        "id": "3109",
        "value": "Armatura lampeggiante di Sereish (set)"
    },
    {
        "id": "3110",
        "value": "Spallacci lampeggianti di Sereish (set)"
    },
    {
        "id": "3111",
        "value": "Ali lampeggianti di Sereish (set)"
    },
    {
        "id": "3112",
        "value": "Acciaio del tuono di Sereish (set)"
    },
    {
        "id": "3113",
        "value": "Scudo del tuono di Sereish (set)"
    },
    {
        "id": "3114",
        "value": "Lancia lampeggiante di Sereish (set)"
    },
    {
        "id": "3115",
        "value": "Bastone di Jeodir"
    },
    {
        "id": "3116",
        "value": "Bastone dei Ssstaria"
    },
    {
        "id": "3117",
        "value": "Bastone santo di Delior"
    },
    {
        "id": "3118",
        "value": "Spada maligna di Sendoh"
    },
    {
        "id": "3119",
        "value": "Tridente tagliente dell'imboscata"
    },
    {
        "id": "3120",
        "value": "Spada fiammante di Skraraoth"
    },
    {
        "id": "3121",
        "value": "Arma terribile di Prothios"
    },
    {
        "id": "3122",
        "value": "Arma terribile di Teridor"
    },
    {
        "id": "3123",
        "value": "Spada sacra di Lahban"
    },
    {
        "id": "3124",
        "value": "Squarta-corpi"
    },
    {
        "id": "3125",
        "value": "Lama della vendetta"
    },
    {
        "id": "3126",
        "value": "Squartatore"
    },
    {
        "id": "3127",
        "value": "Spaccaossa"
    },
    {
        "id": "3128",
        "value": "Annientatore (Classe di personaggio errata)"
    },
    {
        "id": "3129",
        "value": "Mazza ardiente appuntita di Herasis"
    },
    {
        "id": "3130",
        "value": "Bastone elementare del tessitore di ghiaccio"
    },
    {
        "id": "3131",
        "value": "Il potere di Chaliux"
    },
    {
        "id": "3132",
        "value": "Celata"
    },
    {
        "id": "3133",
        "value": "Mazza della maledizione (invisibile???)"
    },
    {
        "id": "3134",
        "value": "Martello di Sir Richfield"
    },
    {
        "id": "3135",
        "value": "Libro di magia di Lara Aimée"
    },
    {
        "id": "3136",
        "value": "Boccale dell'illuminazione di Leah Joyce*"
    },
    {
        "id": "3137",
        "value": "Torcia magica di Isarador*"
    },
    {
        "id": "3138",
        "value": "Spada frastagliata delle braci"
    },
    {
        "id": "3139",
        "value": "Maglio di guerra iridescente"
    },
    {
        "id": "3140",
        "value": "Bambola Voodoo"
    },
    {
        "id": "3141",
        "value": "Lascito di Telcontar"
    },
    {
        "id": "3142",
        "value": "Ascia aquiliana"
    },
    {
        "id": "3143",
        "value": "Ascia a doppia lama"
    },
    {
        "id": "3144",
        "value": "-"
    },
    {
        "id": "3145",
        "value": "Tenuta da battaglia imbottita"
    },
    {
        "id": "3146",
        "value": "Armatura in cuoio con rivetti d'oro"
    },
    {
        "id": "3147",
        "value": "Cotta di maglia del guerriero"
    },
    {
        "id": "3148",
        "value": "Pelledi leone bollita"
    },
    {
        "id": "3149",
        "value": "Lance terribili di Fert"
    },
    {
        "id": "3150",
        "value": "Spadone"
    },
    {
        "id": "3151",
        "value": "Vendetta di Mormacil"
    },
    {
        "id": "3152",
        "value": "Grande spada dell'impatto"
    },
    {
        "id": "3153",
        "value": "Cacciagiganti"
    },
    {
        "id": "3154",
        "value": "Scheggia oscura"
    },
    {
        "id": "3155",
        "value": "Scheggia malevola"
    },
    {
        "id": "3156",
        "value": "Spada oscura"
    },
    {
        "id": "3157",
        "value": "Spada malevola"
    },
    {
        "id": "3158",
        "value": "Mazza da guerra dorata"
    },
    {
        "id": "3159",
        "value": "Mazza da guerra rinforzata"
    },
    {
        "id": "3160",
        "value": "Abito dell'elfo oscuro*"
    },
    {
        "id": "3161",
        "value": "Armatura in cuoio oscuro"
    },
    {
        "id": "3162",
        "value": "Cotta di maglia scura"
    },
    {
        "id": "3163",
        "value": "Elmo di cuoio dell'Elfo oscuro"
    },
    {
        "id": "3164",
        "value": "Elmo metallico dell'Elfo oscuro"
    },
    {
        "id": "3165",
        "value": "Falce di guerra"
    },
    {
        "id": "3166",
        "value": "Falce"
    },
    {
        "id": "3167",
        "value": "Spada astata"
    },
    {
        "id": "3168",
        "value": "Sciabola elfica"
    },
    {
        "id": "3169",
        "value": "Martello d'oro"
    },
    {
        "id": "3170",
        "value": "Martello di Thor"
    },
    {
        "id": "3171",
        "value": "Spada frastagliata"
    },
    {
        "id": "3172",
        "value": "Spada frastagliata d'oro"
    },
    {
        "id": "3173",
        "value": "Martello di guerra d'oro"
    },
    {
        "id": "3174",
        "value": "Martello di guerra pesante"
    },
    {
        "id": "3175",
        "value": "Birbanteria di Stradal"
    },
    {
        "id": "3176",
        "value": "Lama degli antenati"
    },
    {
        "id": "3177",
        "value": "Lancia con filo a spirale"
    },
    {
        "id": "3178",
        "value": "Soluzione rapida"
    },
    {
        "id": "3179",
        "value": "Depressione del re Einstein"
    },
    {
        "id": "3180",
        "value": "Ascia di guerra dei vili"
    },
    {
        "id": "3181",
        "value": "Tormentagatti"
    },
    {
        "id": "3182",
        "value": "Daga di ghiaccio"
    },
    {
        "id": "3183",
        "value": "Orso del nord"
    },
    {
        "id": "3184",
        "value": "Difensore degli antichi"
    },
    {
        "id": "3185",
        "value": "Scherzo"
    },
    {
        "id": "3186",
        "value": "Luna scura"
    },
    {
        "id": "3187",
        "value": "Guardiano del guerriero"
    },
    {
        "id": "3188",
        "value": "Stella scura"
    },
    {
        "id": "3189",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "3190",
        "value": "Armatura imbottita (cintura)"
    },
    {
        "id": "3191",
        "value": "Armatura di cuoio (corazza)"
    },
    {
        "id": "3192",
        "value": "Armatura metallica"
    },
    {
        "id": "3193",
        "value": "Elmo in cuoio (gambiere)"
    },
    {
        "id": "3194",
        "value": "Elmo metallico (guanti)"
    },
    {
        "id": "3195",
        "value": "<noname> (spallacci?)"
    },
    {
        "id": "3196",
        "value": "-"
    },
    {
        "id": "3197",
        "value": "Briglia"
    },
    {
        "id": "3198",
        "value": "Briglia"
    },
    {
        "id": "3199",
        "value": "Briglia"
    },
    {
        "id": "3200",
        "value": "Briglia dei Non-morti"
    },
    {
        "id": "3201",
        "value": "Briglia"
    },
    {
        "id": "3202",
        "value": "Briglia"
    },
    {
        "id": "3203",
        "value": "Briglia blu"
    },
    {
        "id": "3204",
        "value": "Briglia rossa"
    },
    {
        "id": "3205",
        "value": "Occhiali da sole firmati 'Neo's Reality'"
    },
    {
        "id": "3206",
        "value": "Occhiali da sole fitmati 'T-IXVMM'"
    },
    {
        "id": "3207",
        "value": "occhiali da sole firmati 'It's a kind of magic'"
    },
    {
        "id": "3208",
        "value": "Occhiali da sole firmati 'Stairway to Heaven'"
    },
    {
        "id": "3209",
        "value": "Occhiali da sole firmati 'Pest Control'"
    },
    {
        "id": "3210",
        "value": "Occhiali da sole firmati 'Stranger in the Night'"
    },
    {
        "id": "3211",
        "value": "Cespuglio spinoso*"
    },
    {
        "id": "3212",
        "value": "Cintura di ossa"
    },
    {
        "id": "3213",
        "value": "Cintura metallica d'oro"
    },
    {
        "id": "3214",
        "value": "Cintura metallica d'argento"
    },
    {
        "id": "3215",
        "value": "Cintura blu notte"
    },
    {
        "id": "3216",
        "value": "Cintura rossa"
    },
    {
        "id": "3217",
        "value": "Cintura"
    },
    {
        "id": "3218",
        "value": "Cintura"
    },
    {
        "id": "3219",
        "value": "Cappuccio del Mago"
    },
    {
        "id": "3220",
        "value": "Piani sinistri di Gorthar"
    },
    {
        "id": "3221",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3222",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3223",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3224",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3225",
        "value": "Cappuccio di Osopymok"
    },
    {
        "id": "3226",
        "value": "Cintura del mago"
    },
    {
        "id": "3227",
        "value": "Cintura del mago"
    },
    {
        "id": "3228",
        "value": "Cintura del mago"
    },
    {
        "id": "3229",
        "value": "Cintura del mago"
    },
    {
        "id": "3230",
        "value": "Cintura del mago"
    },
    {
        "id": "3231",
        "value": "Cintura del mago"
    },
    {
        "id": "3232",
        "value": "Cintura del mago"
    },
    {
        "id": "3233",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3234",
        "value": "Bracciali"
    },
    {
        "id": "3235",
        "value": "Corazza"
    },
    {
        "id": "3236",
        "value": "Schiniere"
    },
    {
        "id": "3237",
        "value": "Bracciali"
    },
    {
        "id": "3238",
        "value": "Corazza"
    },
    {
        "id": "3239",
        "value": "-"
    },
    {
        "id": "3240",
        "value": "Bracciali"
    },
    {
        "id": "3241",
        "value": "Corazza"
    },
    {
        "id": "3242",
        "value": "Elmo Elfico"
    },
    {
        "id": "3243",
        "value": "Schiniere"
    },
    {
        "id": "3244",
        "value": "-"
    },
    {
        "id": "3245",
        "value": "Sella"
    },
    {
        "id": "3246",
        "value": "Sella"
    },
    {
        "id": "3247",
        "value": "Sella nobile"
    },
    {
        "id": "3248",
        "value": "Sella ornata"
    },
    {
        "id": "3249",
        "value": "Sella ornata"
    },
    {
        "id": "3250",
        "value": "Sella antica"
    },
    {
        "id": "3251",
        "value": "Sella dei Non-morti"
    },
    {
        "id": "3252",
        "value": "Sella da guerra"
    },
    {
        "id": "3253",
        "value": "Sella da guerra"
    },
    {
        "id": "3254",
        "value": "Sella da guerra antica"
    },
    {
        "id": "3255",
        "value": "Sella da guerra nobile"
    },
    {
        "id": "3256",
        "value": "Sella da guerra ornata"
    },
    {
        "id": "3257",
        "value": "Briglia da guerra"
    },
    {
        "id": "3258",
        "value": "Armatura da cavallo ornata"
    },
    {
        "id": "3259",
        "value": "Sella di Eothran"
    },
    {
        "id": "3260",
        "value": "Corazza di Annouk [SET]"
    },
    {
        "id": "3261",
        "value": "Elmo di Annouk [SET]"
    },
    {
        "id": "3262",
        "value": "Bracciali per Gambe di Annouk [SET]"
    },
    {
        "id": "3263",
        "value": "Stivali di Annouk [SET]"
    },
    {
        "id": "3264",
        "value": "Bracciali di Annouk [SET]"
    },
    {
        "id": "3265",
        "value": "Armatura di Octanion [SET]"
    },
    {
        "id": "3266",
        "value": "Maschera di Octanion [SET]"
    },
    {
        "id": "3267",
        "value": "Gambe di Octanion [SET]"
    },
    {
        "id": "3268",
        "value": "Maschera da Hockey"
    },
    {
        "id": "3269",
        "value": "Braccia di Octanion [SET]"
    },
    {
        "id": "3270",
        "value": "Cintura di Octanion [SET]"
    },
    {
        "id": "3271",
        "value": "Armatura di Dalmar [SET]"
    },
    {
        "id": "3272",
        "value": "Elmo di Dalmar [SET]"
    },
    {
        "id": "3273",
        "value": "Bracciali per gambe di Dalmar [SET]"
    },
    {
        "id": "3274",
        "value": "Bracciali di Dalmar[SET]"
    },
    {
        "id": "3275",
        "value": "Stivali del Mago"
    },
    {
        "id": "3276",
        "value": "Bracciali in pelle di serpente di Zhurag Nar"
    },
    {
        "id": "3277",
        "value": "Bracciali di cotta di maglia"
    },
    {
        "id": "3278",
        "value": "Bracciali in cuoio dell'Elfo oscuro"
    },
    {
        "id": "3279",
        "value": "Bracciali metallici dell'Elfo oscuro"
    },
    {
        "id": "3280",
        "value": "Bracciali metallici dell'Elfo oscuro"
    },
    {
        "id": "3281",
        "value": "Bracciali"
    },
    {
        "id": "3282",
        "value": "Cintura in pelle di rettile"
    },
    {
        "id": "3283",
        "value": "Cintura in cotta di maglia"
    },
    {
        "id": "3284",
        "value": "Cintura in cuoio dell'Elfo oscuro"
    },
    {
        "id": "3285",
        "value": "Cintura metallica"
    },
    {
        "id": "3286",
        "value": "Cintura metallica dell'Elfo oscuro"
    },
    {
        "id": "3287",
        "value": "Cintura in tessuto"
    },
    {
        "id": "3288",
        "value": "Stivali in pelle di serpente"
    },
    {
        "id": "3289",
        "value": "Stivali in cotta di maglia"
    },
    {
        "id": "3290",
        "value": "Stivali in cuoio"
    },
    {
        "id": "3291",
        "value": "Stivali d'acciaio"
    },
    {
        "id": "3292",
        "value": "Stivali d'acciaio dell'elfo oscuro"
    },
    {
        "id": "3293",
        "value": "Stivali dell'Elfo oscuro"
    },
    {
        "id": "3294",
        "value": "Gambiere in pelle di serpente"
    },
    {
        "id": "3295",
        "value": "Gambiere in cotta di maglia"
    },
    {
        "id": "3296",
        "value": "Gambiere in cuoio"
    },
    {
        "id": "3297",
        "value": "Gambiere d'acciaio"
    },
    {
        "id": "3298",
        "value": "Gambiere d'acciaio"
    },
    {
        "id": "3299",
        "value": "Gambiere dell'Elfo oscuro"
    },
    {
        "id": "3300",
        "value": "Spallacci in pelle di rettile"
    },
    {
        "id": "3301",
        "value": "Spallacci in cotta di maglia"
    },
    {
        "id": "3302",
        "value": "Spallacci in cuoio"
    },
    {
        "id": "3303",
        "value": "Spallacci di metallo"
    },
    {
        "id": "3304",
        "value": "Spallacci d'acciaio"
    },
    {
        "id": "3305",
        "value": "Spallacci dell'elfo oscuro"
    },
    {
        "id": "3306",
        "value": "Bracciali in pelle di serpente"
    },
    {
        "id": "3307",
        "value": "Bracciali in maglia metallica"
    },
    {
        "id": "3308",
        "value": "Bracciali in cuoio"
    },
    {
        "id": "3309",
        "value": "Bracciali metallici"
    },
    {
        "id": "3310",
        "value": "Bracciali d'acciaio"
    },
    {
        "id": "3311",
        "value": "Bracciali imbottiti"
    },
    {
        "id": "3312",
        "value": "Cintura in pelle di serpente"
    },
    {
        "id": "3313",
        "value": "Cintura di maglia metallica"
    },
    {
        "id": "3314",
        "value": "Cintura in cuoio"
    },
    {
        "id": "3315",
        "value": "Cintura di Darnuk"
    },
    {
        "id": "3316",
        "value": "Cintura del minacciatore"
    },
    {
        "id": "3317",
        "value": "Cintura"
    },
    {
        "id": "3318",
        "value": "Stivali"
    },
    {
        "id": "3319",
        "value": "Stivali"
    },
    {
        "id": "3320",
        "value": "Stivali"
    },
    {
        "id": "3321",
        "value": "Stivali"
    },
    {
        "id": "3322",
        "value": "Stivali d'oro della vendetta"
    },
    {
        "id": "3323",
        "value": "Stivali"
    },
    {
        "id": "3324",
        "value": "Schiniere"
    },
    {
        "id": "3325",
        "value": "Schiniere"
    },
    {
        "id": "3326",
        "value": "Schiniere"
    },
    {
        "id": "3327",
        "value": "Re delle rondini"
    },
    {
        "id": "3328",
        "value": "Schiniere"
    },
    {
        "id": "3329",
        "value": "Schiniere"
    },
    {
        "id": "3330",
        "value": "Bracciali"
    },
    {
        "id": "3331",
        "value": "Bracciali"
    },
    {
        "id": "3332",
        "value": "Bracciali"
    },
    {
        "id": "3333",
        "value": "Bracciali"
    },
    {
        "id": "3334",
        "value": "Bracciali"
    },
    {
        "id": "3335",
        "value": "Bracciali"
    },
    {
        "id": "3336",
        "value": "Stivali"
    },
    {
        "id": "3337",
        "value": "Stivali"
    },
    {
        "id": "3338",
        "value": "Stivali"
    },
    {
        "id": "3339",
        "value": "Piedi puzzolenti"
    },
    {
        "id": "3340",
        "value": "Stivali"
    },
    {
        "id": "3341",
        "value": "Stivali"
    },
    {
        "id": "3342",
        "value": "Schiniere"
    },
    {
        "id": "3343",
        "value": "Schiniere"
    },
    {
        "id": "3344",
        "value": "Schiniere"
    },
    {
        "id": "3345",
        "value": "Re delle rondini"
    },
    {
        "id": "3346",
        "value": "Schiniere"
    },
    {
        "id": "3347",
        "value": "Schiniere"
    },
    {
        "id": "3348",
        "value": "Bracciali"
    },
    {
        "id": "3349",
        "value": "Bracciali"
    },
    {
        "id": "3350",
        "value": "Bracciali"
    },
    {
        "id": "3351",
        "value": "Bracciali"
    },
    {
        "id": "3352",
        "value": "Bracciali"
    },
    {
        "id": "3353",
        "value": "Bracciali"
    },
    {
        "id": "3354",
        "value": "Stivali"
    },
    {
        "id": "3355",
        "value": "Stivali"
    },
    {
        "id": "3356",
        "value": "Stivali"
    },
    {
        "id": "3357",
        "value": "Stivali"
    },
    {
        "id": "3358",
        "value": "Stivali"
    },
    {
        "id": "3359",
        "value": "Stivali"
    },
    {
        "id": "3360",
        "value": "Schiniere"
    },
    {
        "id": "3361",
        "value": "Schiniere"
    },
    {
        "id": "3362",
        "value": "Schiniere"
    },
    {
        "id": "3363",
        "value": "Schiniere"
    },
    {
        "id": "3364",
        "value": "Schiniere"
    },
    {
        "id": "3365",
        "value": "Gambiere della fortuna"
    },
    {
        "id": "3366",
        "value": "Cintura"
    },
    {
        "id": "3367",
        "value": "Cintura"
    },
    {
        "id": "3368",
        "value": "Cintura"
    },
    {
        "id": "3369",
        "value": "Banda sacra dei maghi"
    },
    {
        "id": "3370",
        "value": "Cintura"
    },
    {
        "id": "3371",
        "value": "Cintura"
    },
    {
        "id": "3372",
        "value": "Cintura"
    },
    {
        "id": "3373",
        "value": "Bracciali"
    },
    {
        "id": "3374",
        "value": "Bracciali"
    },
    {
        "id": "3375",
        "value": "Bracciali"
    },
    {
        "id": "3376",
        "value": "Bracciali"
    },
    {
        "id": "3377",
        "value": "Bracciali"
    },
    {
        "id": "3378",
        "value": "Stivali"
    },
    {
        "id": "3379",
        "value": "Stivali"
    },
    {
        "id": "3380",
        "value": "Stivali"
    },
    {
        "id": "3381",
        "value": "Stivali"
    },
    {
        "id": "3382",
        "value": "Stivali"
    },
    {
        "id": "3383",
        "value": "Stivali"
    },
    {
        "id": "3384",
        "value": "Schiniere"
    },
    {
        "id": "3385",
        "value": "Schiniere"
    },
    {
        "id": "3386",
        "value": "Schiniere"
    },
    {
        "id": "3387",
        "value": "Schiniere"
    },
    {
        "id": "3388",
        "value": "Schiniere"
    },
    {
        "id": "3389",
        "value": "Schiniere"
    },
    {
        "id": "3390",
        "value": "Protezione per spalle"
    },
    {
        "id": "3391",
        "value": "Protezione per spalle"
    },
    {
        "id": "3392",
        "value": "Protezione per spalle"
    },
    {
        "id": "3393",
        "value": "Protezione per spalle"
    },
    {
        "id": "3394",
        "value": "Protezione per spalle"
    },
    {
        "id": "3395",
        "value": "Bracciali magici"
    },
    {
        "id": "3396",
        "value": "Bracciali magici"
    },
    {
        "id": "3397",
        "value": "Bracciali magici"
    },
    {
        "id": "3398",
        "value": "Bracciali magici"
    },
    {
        "id": "3399",
        "value": "Bracciali magici"
    },
    {
        "id": "3400",
        "value": "Bracciali magici"
    },
    {
        "id": "3401",
        "value": "Stivali"
    },
    {
        "id": "3402",
        "value": "Stivali"
    },
    {
        "id": "3403",
        "value": "Stivali"
    },
    {
        "id": "3404",
        "value": "Stivali"
    },
    {
        "id": "3405",
        "value": "Stivali"
    },
    {
        "id": "3406",
        "value": "Stivali"
    },
    {
        "id": "3407",
        "value": "Schiniere"
    },
    {
        "id": "3408",
        "value": "Schiniere"
    },
    {
        "id": "3409",
        "value": "Schiniere"
    },
    {
        "id": "3410",
        "value": "Schiniere"
    },
    {
        "id": "3411",
        "value": "Schiniere"
    },
    {
        "id": "3412",
        "value": "Schiniere"
    },
    {
        "id": "3413",
        "value": "Protezione per le spalle"
    },
    {
        "id": "3414",
        "value": "Protezione per le spalle"
    },
    {
        "id": "3415",
        "value": "Protezione per le spalle"
    },
    {
        "id": "3416",
        "value": "Protezione per le spalle"
    },
    {
        "id": "3417",
        "value": "Protezione per le spalle"
    },
    {
        "id": "3418",
        "value": "Protezione per le spalle"
    },
    {
        "id": "3419",
        "value": "Cintura"
    },
    {
        "id": "3420",
        "value": "Cintura"
    },
    {
        "id": "3421",
        "value": "Cintura"
    },
    {
        "id": "3422",
        "value": "Cintura"
    },
    {
        "id": "3423",
        "value": "Cintura"
    },
    {
        "id": "3424",
        "value": "Cintura"
    },
    {
        "id": "3425",
        "value": "Bracciali di Bahamut [SET]"
    },
    {
        "id": "3426",
        "value": "Ceppi di Bahamut [SET]"
    },
    {
        "id": "3427",
        "value": "Piastre per il petto di Bahamut [SET]"
    },
    {
        "id": "3428",
        "value": "Pensiero oscuro di Bahamut  [SET]"
    },
    {
        "id": "3429",
        "value": "Bracciali per gambe di Bahamut [SET]"
    },
    {
        "id": "3430",
        "value": "Protezione per spalle di Bahamut [SET]"
    },
    {
        "id": "3431",
        "value": "Bracciali di Khrag [SET]"
    },
    {
        "id": "3432",
        "value": "Cintura di Khrag [SET]"
    },
    {
        "id": "3433",
        "value": "Armatura di Khrag [SET]"
    },
    {
        "id": "3434",
        "value": "Elmo di Khrag [SET]"
    },
    {
        "id": "3435",
        "value": "Gambiere di Khrag [SET]"
    },
    {
        "id": "3436",
        "value": "Protezione per le spalle di Khrag [SET]"
    },
    {
        "id": "3437",
        "value": "Protezione per le spalle"
    },
    {
        "id": "3438",
        "value": "Bracciali del Mago"
    },
    {
        "id": "3439",
        "value": "Bracciali del Mago"
    },
    {
        "id": "3440",
        "value": "Bracciali del Mago"
    },
    {
        "id": "3441",
        "value": "Bracciali del Mago"
    },
    {
        "id": "3442",
        "value": "Bracciali del Mago"
    },
    {
        "id": "3443",
        "value": "Bracciali del Mago"
    },
    {
        "id": "3444",
        "value": "Bracciali del Mago"
    },
    {
        "id": "3445",
        "value": "Bracciali del Mago"
    },
    {
        "id": "3446",
        "value": "Bracciali del Mago"
    },
    {
        "id": "3447",
        "value": "Bracciali del Mago"
    },
    {
        "id": "3448",
        "value": "Bracciali del Mago"
    },
    {
        "id": "3449",
        "value": "Bracciali del Mago"
    },
    {
        "id": "3450",
        "value": "Cintura del Mago"
    },
    {
        "id": "3451",
        "value": "Cintura del Mago"
    },
    {
        "id": "3452",
        "value": "Cintura del Mago"
    },
    {
        "id": "3453",
        "value": "Cintura del Mago"
    },
    {
        "id": "3454",
        "value": "Cintura del Mago"
    },
    {
        "id": "3455",
        "value": "Cintura del Mago"
    },
    {
        "id": "3456",
        "value": "Cintura del Mago"
    },
    {
        "id": "3457",
        "value": "Cintura del Mago"
    },
    {
        "id": "3458",
        "value": "Cintura del Mago"
    },
    {
        "id": "3459",
        "value": "Cintura del Mago"
    },
    {
        "id": "3460",
        "value": "Cintura del Mago"
    },
    {
        "id": "3461",
        "value": "Armatura del Mago"
    },
    {
        "id": "3462",
        "value": "Armatura del Mago"
    },
    {
        "id": "3463",
        "value": "Armatura del Mago"
    },
    {
        "id": "3464",
        "value": "Ciclone di Rak'ka's"
    },
    {
        "id": "3465",
        "value": "Tunica di Druniel"
    },
    {
        "id": "3466",
        "value": "Armatura del Mago"
    },
    {
        "id": "3467",
        "value": "Armatura del Mago"
    },
    {
        "id": "3468",
        "value": "Armatura del Mago"
    },
    {
        "id": "3469",
        "value": "Volpe del deserto"
    },
    {
        "id": "3470",
        "value": "Armatura del Mago"
    },
    {
        "id": "3471",
        "value": "Armatura del Mago"
    },
    {
        "id": "3472",
        "value": "Armatura del Mago"
    },
    {
        "id": "3473",
        "value": "Armatura del Mago"
    },
    {
        "id": "3474",
        "value": "Stivali del Mago"
    },
    {
        "id": "3475",
        "value": "Stivali del Mago"
    },
    {
        "id": "3476",
        "value": "Stivali del Mago"
    },
    {
        "id": "3477",
        "value": "Stivali del Mago"
    },
    {
        "id": "3478",
        "value": "Stivali del Mago"
    },
    {
        "id": "3479",
        "value": "Stivali del Mago"
    },
    {
        "id": "3480",
        "value": "Stivali del Mago"
    },
    {
        "id": "3481",
        "value": "Stivali del Mago"
    },
    {
        "id": "3482",
        "value": "Stivali del Mago"
    },
    {
        "id": "3483",
        "value": "Stivali del Mago"
    },
    {
        "id": "3484",
        "value": "Stivali del Mago"
    },
    {
        "id": "3485",
        "value": "Visione di Muadib"
    },
    {
        "id": "3486",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3487",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3488",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3489",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3490",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3491",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3492",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3493",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3494",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3495",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3496",
        "value": "Cappuccio del mago"
    },
    {
        "id": "3497",
        "value": "Gambiere del Mago"
    },
    {
        "id": "3498",
        "value": "Gambiere del Mago"
    },
    {
        "id": "3499",
        "value": "Gambiere del Mago"
    },
    {
        "id": "3500",
        "value": "Gambiere del Mago"
    },
    {
        "id": "3501",
        "value": "Gambiere del Mago"
    },
    {
        "id": "3502",
        "value": "Gambiere del Mago"
    },
    {
        "id": "3503",
        "value": "Gambiere del Mago"
    },
    {
        "id": "3504",
        "value": "Gambiere del Mago"
    },
    {
        "id": "3505",
        "value": "Gambiere del Mago"
    },
    {
        "id": "3506",
        "value": "Gambiere del Mago"
    },
    {
        "id": "3507",
        "value": "Gambiere del Mago"
    },
    {
        "id": "3508",
        "value": "Gambiere del Mago"
    },
    {
        "id": "3509",
        "value": "Elmo"
    },
    {
        "id": "3510",
        "value": "Gambiere"
    },
    {
        "id": "3511",
        "value": "Armatura metallica"
    },
    {
        "id": "3512",
        "value": "Armatura metallica"
    },
    {
        "id": "3513",
        "value": "Armatura metallica"
    },
    {
        "id": "3514",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "3515",
        "value": "Armatura in pelle di rettile"
    },
    {
        "id": "3516",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3517",
        "value": "Armatura in pelle di rettile"
    },
    {
        "id": "3518",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3519",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3520",
        "value": "Cotta di maglia"
    },
    {
        "id": "3521",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3522",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3523",
        "value": "Armatura metallica"
    },
    {
        "id": "3524",
        "value": "Armatura metallica"
    },
    {
        "id": "3525",
        "value": "Armatura metallica"
    },
    {
        "id": "3526",
        "value": "Armatura metallica"
    },
    {
        "id": "3527",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3528",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3529",
        "value": "Armatura metallica"
    },
    {
        "id": "3530",
        "value": "Stivali"
    },
    {
        "id": "3531",
        "value": "Cotta di maglia"
    },
    {
        "id": "3532",
        "value": "Cotta di maglia"
    },
    {
        "id": "3533",
        "value": "Cotta di maglia"
    },
    {
        "id": "3534",
        "value": "Cotta di maglia"
    },
    {
        "id": "3535",
        "value": "Cotta di maglia"
    },
    {
        "id": "3536",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3537",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3538",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3539",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3540",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3541",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3542",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3543",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3544",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3545",
        "value": "Corona da druido"
    },
    {
        "id": "3546",
        "value": "Armatura da druido"
    },
    {
        "id": "3547",
        "value": "Morsetti di ghiaccio"
    },
    {
        "id": "3548",
        "value": "Armatura a piastre di Rachel"
    },
    {
        "id": "3549",
        "value": "Elmo robusto di Celine"
    },
    {
        "id": "3550",
        "value": "Supporto ghiacciato"
    },
    {
        "id": "3551",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3552",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3553",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3554",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3555",
        "value": "<noname> (elmo)"
    },
    {
        "id": "3556",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3557",
        "value": "-"
    },
    {
        "id": "3558",
        "value": "-"
    },
    {
        "id": "3559",
        "value": "Armatura in pelle di rettile"
    },
    {
        "id": "3560",
        "value": "Armatura in pelle di rettile"
    },
    {
        "id": "3561",
        "value": "Armatura in pelle di rettile"
    },
    {
        "id": "3562",
        "value": "Armatura in pelle di rettile"
    },
    {
        "id": "3563",
        "value": "Armatura in pelle di rettile"
    },
    {
        "id": "3564",
        "value": "Armatura in pelle di drago"
    },
    {
        "id": "3565",
        "value": "Cotta di maglia"
    },
    {
        "id": "3566",
        "value": "Cotta di maglia"
    },
    {
        "id": "3567",
        "value": "Cotta di maglia"
    },
    {
        "id": "3568",
        "value": "Cotta di maglia"
    },
    {
        "id": "3569",
        "value": "Cotta di maglia"
    },
    {
        "id": "3570",
        "value": "Cotta di maglia"
    },
    {
        "id": "3571",
        "value": "Cotta di maglia"
    },
    {
        "id": "3572",
        "value": "Bardatura di cuoio"
    },
    {
        "id": "3573",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3574",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3575",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3576",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3577",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3578",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3579",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3580",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3581",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3582",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3583",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3584",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3585",
        "value": "Armatura metallica"
    },
    {
        "id": "3586",
        "value": "Armatura metallica"
    },
    {
        "id": "3587",
        "value": "Armatura metallica"
    },
    {
        "id": "3588",
        "value": "Armatura metallica"
    },
    {
        "id": "3589",
        "value": "Armatura metallica"
    },
    {
        "id": "3590",
        "value": "Armatura metallica"
    },
    {
        "id": "3591",
        "value": "Armatura metallica"
    },
    {
        "id": "3592",
        "value": "-"
    },
    {
        "id": "3593",
        "value": "-"
    },
    {
        "id": "3594",
        "value": "Armatura metallica"
    },
    {
        "id": "3595",
        "value": "-"
    },
    {
        "id": "3596",
        "value": "Armatura metallica"
    },
    {
        "id": "3597",
        "value": "Armatura metallica"
    },
    {
        "id": "3598",
        "value": "Armatura in pelle di rettile"
    },
    {
        "id": "3599",
        "value": "Armatura in pelle di rettile"
    },
    {
        "id": "3600",
        "value": "Armatura in pelle di rettile"
    },
    {
        "id": "3601",
        "value": "Armatura in pelle di rettile"
    },
    {
        "id": "3602",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3603",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3604",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3605",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3606",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3607",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3608",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3609",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3610",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3611",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3612",
        "value": "Armatura in Tessuto"
    },
    {
        "id": "3613",
        "value": "Armatura in Tessuto"
    },
    {
        "id": "3614",
        "value": "Armatura in Tessuto"
    },
    {
        "id": "3615",
        "value": "Armatura in Tessuto"
    },
    {
        "id": "3616",
        "value": "Armatura in Tessuto"
    },
    {
        "id": "3617",
        "value": "Armatura di maglia metallica del nobile"
    },
    {
        "id": "3618",
        "value": "Elmo di maglia metallica del nobile"
    },
    {
        "id": "3619",
        "value": "Gambiere di maglia metallica del nobile"
    },
    {
        "id": "3620",
        "value": "Bracciali di maglia metallica del nobile"
    },
    {
        "id": "3621",
        "value": "Armatura di maglia metallica scarlatta"
    },
    {
        "id": "3622",
        "value": "Elmo di maglia metallica scarlatto"
    },
    {
        "id": "3623",
        "value": "Gambiere di maglia metallica scarlatte"
    },
    {
        "id": "3624",
        "value": "Bracciali di maglia metallica scarlatti"
    },
    {
        "id": "3625",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3626",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3627",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3628",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3629",
        "value": "<noname> (elmo)"
    },
    {
        "id": "3630",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3631",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3632",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3633",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3634",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3635",
        "value": "<noname> (elmo)"
    },
    {
        "id": "3636",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3637",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3638",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3639",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3640",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3641",
        "value": "<noname> (elmo)"
    },
    {
        "id": "3642",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3643",
        "value": "<noname> (parabraccia)"
    },
    {
        "id": "3644",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3645",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3646",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3647",
        "value": "<noname> (elmo)"
    },
    {
        "id": "3648",
        "value": "<noname> (gambiere)"
    },
    {
        "id": "3649",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3650",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3651",
        "value": "<noname> (ascia a due mani)"
    },
    {
        "id": "3652",
        "value": "<noname> (ascia a due mani)"
    },
    {
        "id": "3653",
        "value": "<noname> (scudo)"
    },
    {
        "id": "3654",
        "value": "<noname> (scudo)"
    },
    {
        "id": "3655",
        "value": "<noname> (spada)"
    },
    {
        "id": "3656",
        "value": "<noname> (spada)"
    },
    {
        "id": "3657",
        "value": "<noname> (spada)"
    },
    {
        "id": "3658",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3659",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3660",
        "value": "<noname> (elmo)"
    },
    {
        "id": "3661",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3662",
        "value": "<noname> (parabraccia?)"
    },
    {
        "id": "3663",
        "value": "Tipo 'Collezione Annika'"
    },
    {
        "id": "3664",
        "value": "Tipo 'Stile Danny'"
    },
    {
        "id": "3665 - 3749",
        "value": "-"
    },
    {
        "id": "3750",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3751",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3752",
        "value": "Armatura metallica"
    },
    {
        "id": "3753",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3754",
        "value": "Elmo in cuoio"
    },
    {
        "id": "3755",
        "value": "Elmo alato (ha le corna, non le ali :( )"
    },
    {
        "id": "3756",
        "value": "Pelle di serpente"
    },
    {
        "id": "3757",
        "value": "Cotta di maglia"
    },
    {
        "id": "3758",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "3759",
        "value": "Armatura metallica"
    },
    {
        "id": "3760",
        "value": "Armatura imbottita"
    },
    {
        "id": "3761",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3762",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "3763",
        "value": "Elmo metallico"
    },
    {
        "id": "3764",
        "value": "Pelle di rettile"
    },
    {
        "id": "3765",
        "value": "Armatura in maglia metallica"
    },
    {
        "id": "3766",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3767",
        "value": "Elegante cuoio elfico"
    },
    {
        "id": "3768",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3769",
        "value": "Armatura metallica"
    },
    {
        "id": "3770",
        "value": "Armatura metallica del Ranger"
    },
    {
        "id": "3771",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3772",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3773",
        "value": "Armatura in cuoio magica bollita"
    },
    {
        "id": "3774",
        "value": "Armatura metallica"
    },
    {
        "id": "3775",
        "value": "Tessuto degli elementi di Serhal"
    },
    {
        "id": "3776",
        "value": "Elmo in cuoio degli Orchi"
    },
    {
        "id": "3777",
        "value": "Elmo metallico degli Orchi"
    },
    {
        "id": "3778",
        "value": "Pelle di rettile degli Orchi"
    },
    {
        "id": "3779",
        "value": "Cotta di maglia degli Orchi"
    },
    {
        "id": "3780",
        "value": "Armatura in cuoio degli Orchi"
    },
    {
        "id": "3781",
        "value": "Armatura in cuoio degli Orchi"
    },
    {
        "id": "3782",
        "value": "Armatura metallica degli Orchi"
    },
    {
        "id": "3783",
        "value": "Armatura di piastre metalliche degli Orchi"
    },
    {
        "id": "3784",
        "value": "Armatura in tessuto dell'Orco"
    },
    {
        "id": "3785",
        "value": "Elmo metallico orchesco"
    },
    {
        "id": "3786",
        "value": "Pelle di rettile degli orchi"
    },
    {
        "id": "3787",
        "value": "Cotta di maglia orchesca"
    },
    {
        "id": "3788",
        "value": "Armatura in cuoio orchesca"
    },
    {
        "id": "3789",
        "value": "Armatura in cuoio orchesco"
    },
    {
        "id": "3790",
        "value": "Armatura metallica orchesca"
    },
    {
        "id": "3791",
        "value": "Armatura in piastre metalliche orchesca"
    },
    {
        "id": "3792",
        "value": "Armatura in tessuto orchesca"
    },
    {
        "id": "3793",
        "value": "Elmo in cuoio"
    },
    {
        "id": "3794",
        "value": "Elmo con le corna"
    },
    {
        "id": "3795",
        "value": "Cuoio bollito"
    },
    {
        "id": "3796",
        "value": "Cotta di maglia"
    },
    {
        "id": "3797",
        "value": "Cuoio del protettore celestiale"
    },
    {
        "id": "3798",
        "value": "Armatura in cuoio dell'egoismo"
    },
    {
        "id": "3799",
        "value": "Pelle di rettile"
    },
    {
        "id": "3800",
        "value": "Armatura metallica della velocità"
    },
    {
        "id": "3801",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "3802",
        "value": "Tessuto degli angeli"
    },
    {
        "id": "3803",
        "value": "Elmo in cuoio"
    },
    {
        "id": "3804",
        "value": "Elmo metallico della conoscenza"
    },
    {
        "id": "3805",
        "value": "Armatura in cuoio"
    },
    {
        "id": "3806",
        "value": "Cotta in tessuto"
    },
    {
        "id": "3807",
        "value": "Armatura celestiale della vendetta"
    },
    {
        "id": "3808",
        "value": "Tessuto protettivo"
    },
    {
        "id": "3809",
        "value": "NON USARE (ma io la uso lo stesso) - (ARMA)"
    },
    {
        "id": "3810",
        "value": "Copricapo in cuoio dei ladri"
    },
    {
        "id": "3811",
        "value": "Elmo metallico dei ladri"
    },
    {
        "id": "3812",
        "value": "Pelle di rettile dei ladri"
    },
    {
        "id": "3813",
        "value": "Cotta di maglia dei ladri"
    },
    {
        "id": "3814",
        "value": "Armatura in cuoio dei ladri"
    },
    {
        "id": "3815",
        "value": "Armatura in cuoio dei ladri"
    },
    {
        "id": "3816",
        "value": "Armatura in cuoio dei ladri"
    },
    {
        "id": "3817",
        "value": "Armatura metallica dei ladri"
    },
    {
        "id": "3818",
        "value": "Armatura in piastre metalliche dei ladri"
    },
    {
        "id": "3819",
        "value": "Armatura in tessuto dei ladri"
    },
    {
        "id": "3820",
        "value": "Elmo in cuoio dei ladri"
    },
    {
        "id": "3821",
        "value": "Elmo metallico dei ladri"
    },
    {
        "id": "3822",
        "value": "Armatura in cuoio dei ladri"
    },
    {
        "id": "3823",
        "value": "Armatura in cuoio dei ladri"
    },
    {
        "id": "3824",
        "value": "Armatura metallica dei ladri"
    },
    {
        "id": "3825",
        "value": "Armatura in tessuto dei ladri"
    },
    {
        "id": "3826",
        "value": "Armatura in cuoio dei ladri"
    },
    {
        "id": "3827",
        "value": "Armatura in cuoio dei ladri"
    },
    {
        "id": "3828",
        "value": "Armatura in piastre metalliche dei ladri"
    },
    {
        "id": "3829",
        "value": "Armatura in tessuto dei ladri"
    },
    {
        "id": "3830",
        "value": "Cotta di maglia dei ladri"
    },
    {
        "id": "3831",
        "value": "Pelle di rettile dei ladri"
    },
    {
        "id": "3832",
        "value": "Bardatura in cuoio dei ladri"
    },
    {
        "id": "3833",
        "value": "Bardatura in cuoio dei ladri"
    },
    {
        "id": "3834",
        "value": "Armatura metallica dei ladri"
    },
    {
        "id": "3835",
        "value": "Armatura di piastre metalliche dei ladri"
    },
    {
        "id": "3836",
        "value": "Armatura in tessuto dei ladri"
    },
    {
        "id": "3837",
        "value": "Elmo in cuoio"
    },
    {
        "id": "3838",
        "value": "Elmo con corna dell'oscurità"
    },
    {
        "id": "3839",
        "value": "Armatura in cuoio bollita"
    },
    {
        "id": "3840",
        "value": "Cotta di maglia"
    },
    {
        "id": "3841",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "3842",
        "value": "Armatura in cuoio dell'agilità"
    },
    {
        "id": "3843",
        "value": "Bardatura incuoio dei Governanti oscuri"
    },
    {
        "id": "3844",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "3845",
        "value": "Elmo in cuoio"
    },
    {
        "id": "3846",
        "value": "Elmo alato della battaglia"
    },
    {
        "id": "3847",
        "value": "Cuoio bollito dei guerrieri"
    },
    {
        "id": "3848",
        "value": "Cotta di maglia"
    },
    {
        "id": "3849",
        "value": "Giustacuore in cuoio"
    },
    {
        "id": "3850",
        "value": "Giustacuore in cuoio"
    },
    {
        "id": "3851",
        "value": "Protezione traballante di Ahil-Tar"
    },
    {
        "id": "3852",
        "value": "Armatura dorata di Dur Grathuk"
    },
    {
        "id": "3853",
        "value": "Tessuto della differenza"
    },
    {
        "id": "3854",
        "value": "Armatura metallica"
    },
    {
        "id": "3855",
        "value": "Armatura metallica arrugginita"
    },
    {
        "id": "3856",
        "value": "Armatura in tessuto"
    },
    {
        "id": "3857",
        "value": "<noname> (coniglio del cheater)"
    },
    {
        "id": "3858",
        "value": "<noname> (coniglio del cheater)"
    },
    {
        "id": "3859",
        "value": "<noname> (coniglio del cheater)"
    },
    {
        "id": "3860",
        "value": "<noname> (coniglio del cheater)"
    },
    {
        "id": "3861",
        "value": "<noname> (coniglio del cheater)"
    },
    {
        "id": "3862",
        "value": "<noname> (coniglio del cheater)"
    },
    {
        "id": "3863",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3864",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3865",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3866",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3867",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3868",
        "value": "<noname> (cintura)"
    },
    {
        "id": "3869",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3870",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3871",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3872",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3873",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3874",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3875",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3876",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3877",
        "value": "<noname> (corazza)"
    },
    {
        "id": "3878",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3879",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3880",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3881",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3882",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3883",
        "value": "<noname> (scarpe)"
    },
    {
        "id": "3884",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3885",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3886",
        "value": "-"
    },
    {
        "id": "3887",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3888",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3889",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3890",
        "value": "<noname> (guanti)"
    },
    {
        "id": "3891",
        "value": "<noname> (Elmo)"
    },
    {
        "id": "3892",
        "value": "<noname> (Elmo)"
    },
    {
        "id": "3893",
        "value": "-"
    },
    {
        "id": "3894",
        "value": "<noname> (Elmo)"
    },
    {
        "id": "3895",
        "value": "<noname> (Elmo)"
    },
    {
        "id": "3896",
        "value": "<noname> (Elmo)"
    },
    {
        "id": "3897",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3898",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3899",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3900",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3901",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3902",
        "value": "<noname> (spallacci)"
    },
    {
        "id": "3903",
        "value": "Biscotti squisiti (usabile)"
    },
    {
        "id": "3904",
        "value": "Sangue di Mohkva (usabile)"
    },
    {
        "id": "3905 - 3964",
        "value": "-"
    },
    {
        "id": "3965",
        "value": "Guanti d'arme di cuoio"
    },
    {
        "id": "3966",
        "value": "Guanti d'arme di cuoio bollito"
    },
    {
        "id": "3967",
        "value": "Guanti d'arme magici"
    },
    {
        "id": "3968",
        "value": "Guanti d'arme magici decorati"
    },
    {
        "id": "3969",
        "value": "Guanti d'arme metallici"
    },
    {
        "id": "3970",
        "value": "Guanti metallici di Gordar"
    },
    {
        "id": "3971",
        "value": "Guanti in cuoio di Tandriel"
    },
    {
        "id": "3972",
        "value": "Guanti d'arme in vuoio rivestiti"
    },
    {
        "id": "3973",
        "value": "Guanti d'arme magici"
    },
    {
        "id": "3974",
        "value": "Guanti d'arme magici di precisione"
    },
    {
        "id": "3975",
        "value": "Guanti d'arme metallici"
    },
    {
        "id": "3976",
        "value": "Guanti d'arme metallici"
    },
    {
        "id": "3977",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "3978",
        "value": "Guanti d'arme in cuoio rivestiti"
    },
    {
        "id": "3979",
        "value": "Guanti magici di Elohinir"
    },
    {
        "id": "3980",
        "value": "Guanti d'arme magici decorati"
    },
    {
        "id": "3981",
        "value": "Guanti d'arme metallici"
    },
    {
        "id": "3982",
        "value": "Guanti d'arme metallici rivestiti"
    },
    {
        "id": "3983",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "3984",
        "value": "Guanti d'arme in cuoio rivestiti"
    },
    {
        "id": "3985",
        "value": "Guanti d'arme magici"
    },
    {
        "id": "3986",
        "value": "Guanti d'arme magici rivestiti"
    },
    {
        "id": "3987",
        "value": "Guanti della fortuna di Kara"
    },
    {
        "id": "3988",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "3989",
        "value": "Guanti d'arme in cuoio rivestito"
    },
    {
        "id": "3990",
        "value": "Guanti d'arme magici"
    },
    {
        "id": "3991",
        "value": "Guanti d'arme metallici rivestiti"
    },
    {
        "id": "3992",
        "value": "Guanti d'arme metallici"
    },
    {
        "id": "3993",
        "value": "Guanti di lady Magory"
    },
    {
        "id": "3994",
        "value": "Guanti d'arme metallici"
    },
    {
        "id": "3995 - 3998",
        "value": "-"
    },
    {
        "id": "3999",
        "value": "Cab (usabile, rigenera la vita del 100%)"
    },
    {
        "id": "4000",
        "value": "Elmo della Fede di Uriel [SET]"
    },
    {
        "id": "4001",
        "value": "Guanti della Fede di Uriel [SET]"
    },
    {
        "id": "4002",
        "value": "Stivali della Fede di Uriel [SET]"
    },
    {
        "id": "4003",
        "value": "Spallacci della Fede di Uriel [SET]"
    },
    {
        "id": "4004",
        "value": "Corazza della Fede di Uriel [SET]"
    },
    {
        "id": "4005",
        "value": "Cintura della Fede di Uriel [SET]"
    },
    {
        "id": "4006",
        "value": "Ali della Fede di Uriel [SET]"
    },
    {
        "id": "4007",
        "value": "Capelli"
    },
    {
        "id": "4008",
        "value": "Lama della Fede di Uriel [SET]"
    },
    {
        "id": "4009",
        "value": "Scudo della fede di Uriel [SET]"
    },
    {
        "id": "4010",
        "value": "Ali della guardia (quelle belle)"
    },
    {
        "id": "4011",
        "value": "Bardatura d'oro degli dei [SET]"
    },
    {
        "id": "4012",
        "value": "Cintura d'oro degli dei [SET]"
    },
    {
        "id": "4013",
        "value": "Bracciali d'oro per gambe degli dei [SET]"
    },
    {
        "id": "4014",
        "value": "Bracciali d'oro degli dei [SET]"
    },
    {
        "id": "4015",
        "value": "Spallacci d'oro degli dei [SET]"
    },
    {
        "id": "4016",
        "value": "Elmo d'oro degli dei [SET]"
    },
    {
        "id": "4017",
        "value": "Scudo d'oro degli dei (quello bello)"
    },
    {
        "id": "4018",
        "value": "Ali dorate degli dei [SET] (quelle belle lol)"
    },
    {
        "id": "4019",
        "value": "Alabarda d'oro degli dei [SET]"
    },
    {
        "id": "4020",
        "value": "Corazza metallica"
    },
    {
        "id": "4021 - 4023",
        "value": "-"
    },
    {
        "id": "4024",
        "value": "Spallacci metallici"
    },
    {
        "id": "4025",
        "value": "Spallacci dell'onore"
    },
    {
        "id": "4026",
        "value": "Spallacci"
    },
    {
        "id": "4027",
        "value": "Spallacci dell'onore"
    },
    {
        "id": "4028",
        "value": "Capelli (Vampiressa)"
    },
    {
        "id": "4029",
        "value": "Capelli (Vampiressa)"
    },
    {
        "id": "4030",
        "value": "Bracciali di Recundis [SET]"
    },
    {
        "id": "4031",
        "value": "Armatura del Recundis [SET]"
    },
    {
        "id": "4032",
        "value": "Elmo dell'orgoglio del Recundis [SET]"
    },
    {
        "id": "4033",
        "value": "Gambiere di Recundis [SET]"
    },
    {
        "id": "4034",
        "value": "Scarpe dell'orgoglio del Recundis [SET]"
    },
    {
        "id": "4035",
        "value": "Bracciali del sangue di Thorwyin [SET]"
    },
    {
        "id": "4036",
        "value": "Armatura di sangue di Thorwyin [SET]"
    },
    {
        "id": "4037",
        "value": "Elmo tinto di sangue di Thorwyin [SET]"
    },
    {
        "id": "4038",
        "value": "Gambiere del sangue di Thorwyin [SET]"
    },
    {
        "id": "4039",
        "value": "Scarpe tinte di sangue di Thorwyin [SET]"
    },
    {
        "id": "4040",
        "value": "Bracciali di maglia rosso sangue di Starion [SET]"
    },
    {
        "id": "4041",
        "value": "Armatura di maglia rosso sangue di Starion [SET]"
    },
    {
        "id": "4042",
        "value": "Elmo di maglia rosso sangue di Starion [SET]"
    },
    {
        "id": "4043",
        "value": "Gambiere di maglia rosso sangue di Starion [SET]"
    },
    {
        "id": "4044",
        "value": "Scarpe di maglia rosso sangue di Starion [SET]"
    },
    {
        "id": "4045 - 4049",
        "value": "-"
    },
    {
        "id": "4050",
        "value": "Bracciali di cuoio di Feac [SET]"
    },
    {
        "id": "4051",
        "value": "Artigli dellatigre [SET]"
    },
    {
        "id": "4052",
        "value": "Protezioni per le spalle di Faec [SET]"
    },
    {
        "id": "4053",
        "value": "Corazza di Feac [SET]"
    },
    {
        "id": "4054",
        "value": "Cintura di Feac"
    },
    {
        "id": "4055",
        "value": "Amuleto splendente di Logar [SET]"
    },
    {
        "id": "4056",
        "value": "Bracciali di Logar [SET]"
    },
    {
        "id": "4057",
        "value": "Corazza di Logar [SET]"
    },
    {
        "id": "4058",
        "value": "Spallacci di Logar [SET]"
    },
    {
        "id": "4059",
        "value": "Elmo di Logar [SET]"
    },
    {
        "id": "4060",
        "value": "Bracciali magistrali di Dalmar [SET]"
    },
    {
        "id": "4061",
        "value": "Cintura  magistrale di Dalmar [SET]"
    },
    {
        "id": "4062",
        "value": "Pettorale magistrale di Dalmar [SET]"
    },
    {
        "id": "4063",
        "value": "Gambiere magistrali di Dalmar [SET]"
    },
    {
        "id": "4064",
        "value": "Stivali magistrali di Dalmar [SET]"
    },
    {
        "id": "4065",
        "value": "Spallacci magistrali di Dalmar [SET]"
    },
    {
        "id": "4066",
        "value": "Elmo magistrale di Dalmar [SET]"
    },
    {
        "id": "4067",
        "value": "Guanti d'arme per ascia del pugno"
    },
    {
        "id": "4068",
        "value": "Guanti d'arma irti di spine"
    },
    {
        "id": "4069",
        "value": "Guanti da combattimento corazzati di Thoral"
    },
    {
        "id": "4070",
        "value": "Guanti d'arme dentellati"
    },
    {
        "id": "4071",
        "value": "Ura di Thorodin"
    },
    {
        "id": "4072",
        "value": "Guanti d'arme con lame"
    },
    {
        "id": "4073",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "4074",
        "value": "Guanti d'arme metallici"
    },
    {
        "id": "4075",
        "value": "Guanti d'arme metallici decorati"
    },
    {
        "id": "4076",
        "value": "Bracciali antichi della rabbia"
    },
    {
        "id": "4077",
        "value": "Stivali dell'ira di Abdiel [SET]"
    },
    {
        "id": "4078",
        "value": "Spallacci della furia di Abdiel [SET]"
    },
    {
        "id": "4079",
        "value": "Cintura della furia di Abdiel [SET]"
    },
    {
        "id": "4080",
        "value": "Ali della furia di Abdiel [SET]"
    },
    {
        "id": "4081",
        "value": "Scudo illuminato della furia di Abdiel [SET]"
    },
    {
        "id": "4082",
        "value": "Bracciali antichi"
    },
    {
        "id": "4083",
        "value": "Stivali della forza di Astrala [SET]"
    },
    {
        "id": "4084",
        "value": "Spallacci della forza di Astrala [SET]"
    },
    {
        "id": "4085",
        "value": "Cintura della forza di Astrala [SET]"
    },
    {
        "id": "4086",
        "value": "Ali della forza di Astrala [SET]"
    },
    {
        "id": "4087",
        "value": "Scudo della forza di Astrala [SET]"
    },
    {
        "id": "4088",
        "value": "Elmo della furia di Abdiel [SET]"
    },
    {
        "id": "4089",
        "value": "Elmo della forza di Astrala [SET]"
    },
    {
        "id": "4090",
        "value": "Corazza della furia di Abdel [SET]"
    },
    {
        "id": "4091",
        "value": "Corazza della forza di Astrala [SET]"
    },
    {
        "id": "4092",
        "value": "Ali dell'energia splendente di Belwen (quelle belle)"
    },
    {
        "id": "4093",
        "value": "Cintura di Lonidra"
    },
    {
        "id": "4094",
        "value": "Cintura di Thoral"
    },
    {
        "id": "4095",
        "value": "Cintura"
    },
    {
        "id": "4096",
        "value": "Cintura in cuoio"
    },
    {
        "id": "4097",
        "value": "Pergamena"
    },
    {
        "id": "4098",
        "value": "Pergamena"
    },
    {
        "id": "4099",
        "value": "Pergamena di Dorgrath"
    },
    {
        "id": "4100",
        "value": "Libro di storia I"
    },
    {
        "id": "4101",
        "value": "Libro Di Storia II"
    },
    {
        "id": "4102",
        "value": "Libro di storia III"
    },
    {
        "id": "4103",
        "value": "Libro di storia IV"
    },
    {
        "id": "4104",
        "value": "Libro di storia V"
    },
    {
        "id": "4105",
        "value": "Libro di storia VI"
    },
    {
        "id": "4125",
        "value": "Libro di religione I"
    },
    {
        "id": "4126",
        "value": "Libro di religione II"
    },
    {
        "id": "4127",
        "value": "Libro di religione III"
    },
    {
        "id": "4128",
        "value": "Libro di religione IV"
    },
    {
        "id": "4129",
        "value": "Libro di religione V"
    },
    {
        "id": "4130",
        "value": "Libro di religione VI"
    },
    {
        "id": "4131",
        "value": "Libro di religione VII"
    },
    {
        "id": "4132",
        "value": "Libro di religione VIII"
    },
    {
        "id": "4133",
        "value": "Libro di religione IX"
    },
    {
        "id": "4134",
        "value": "Libro di religione X"
    },
    {
        "id": "4135",
        "value": "Libro di religione XI"
    },
    {
        "id": "4136",
        "value": "Libro di religione XII"
    },
    {
        "id": "4137",
        "value": "Libro di religione XIII"
    },
    {
        "id": "4138 - 4149",
        "value": "-"
    },
    {
        "id": "4150",
        "value": "Libro di geografia I"
    },
    {
        "id": "4151",
        "value": "Libro di geografia II"
    },
    {
        "id": "4152",
        "value": "Libro di geografia III"
    },
    {
        "id": "4153",
        "value": "Libro di geografia IV"
    },
    {
        "id": "4154",
        "value": "Libro di geografia V"
    },
    {
        "id": "4155",
        "value": "Libro di geografia VI"
    },
    {
        "id": "4156",
        "value": "Libro di geografia VII"
    },
    {
        "id": "4157",
        "value": "Libro di geografia VIII"
    },
    {
        "id": "4158",
        "value": "Libro di geografia IX"
    },
    {
        "id": "4159",
        "value": "Libro di geografia X"
    },
    {
        "id": "4160",
        "value": "Libro di geografia XI"
    },
    {
        "id": "4161",
        "value": "Libro di geografia XII"
    },
    {
        "id": "4162",
        "value": "Libro di geografia XIII"
    },
    {
        "id": "4163 - 4174",
        "value": "-"
    },
    {
        "id": "4175",
        "value": "Libro dei non-morti I"
    },
    {
        "id": "4176",
        "value": "Libro dei non-morti II"
    },
    {
        "id": "4177",
        "value": "Libro dei non-morti III"
    },
    {
        "id": "4178",
        "value": "Libro dei non-morti IV"
    },
    {
        "id": "4179",
        "value": "Libro dei non-morti V"
    },
    {
        "id": "4180",
        "value": "Libro dei non-morti VI"
    },
    {
        "id": "4181 - 4199",
        "value": "-"
    },
    {
        "id": "4200",
        "value": "Libro dei mostri I"
    },
    {
        "id": "4201",
        "value": "Libro dei mostri II"
    },
    {
        "id": "4202",
        "value": "Libro dei mostri III"
    },
    {
        "id": "4203",
        "value": "Libro dei mostri IV"
    },
    {
        "id": "4204",
        "value": "Libro dei mostri V"
    },
    {
        "id": "4205",
        "value": "Libro dei mostri VI"
    },
    {
        "id": "4206",
        "value": "Libro dei mostri"
    },
    {
        "id": "4207",
        "value": "Libro dei mostri"
    },
    {
        "id": "4208",
        "value": "Libro dei mostri"
    },
    {
        "id": "4209",
        "value": "Libro dei mostri"
    },
    {
        "id": "4210",
        "value": "-"
    },
    {
        "id": "4211",
        "value": "Libro dei mostri"
    },
    {
        "id": "4212",
        "value": "Libro dei mostri"
    },
    {
        "id": "4213",
        "value": "Libro dei mostri"
    },
    {
        "id": "4214",
        "value": "Libro dei mostri"
    },
    {
        "id": "4215",
        "value": "Libro dei mostri"
    },
    {
        "id": "4216",
        "value": "Libro dei mostri"
    },
    {
        "id": "4217",
        "value": "Libro dei mostri"
    },
    {
        "id": "4218",
        "value": "Libro dei mostri"
    },
    {
        "id": "4219",
        "value": "Libro dei mostri"
    },
    {
        "id": "4220",
        "value": "Libro dei mostri"
    },
    {
        "id": "4221",
        "value": "Libro dei mostri"
    },
    {
        "id": "4222",
        "value": "Libro dei mostri"
    },
    {
        "id": "4223",
        "value": "Libro dei mostri"
    },
    {
        "id": "4224",
        "value": "Libro dei mostri"
    },
    {
        "id": "4225 - 4230",
        "value": "-"
    },
    {
        "id": "4231",
        "value": "Libro dei mostri"
    },
    {
        "id": "4232",
        "value": "Libro dei mostri"
    },
    {
        "id": "4233",
        "value": "Libro dei mostri"
    },
    {
        "id": "4234",
        "value": "Libro dei mostri"
    },
    {
        "id": "4235",
        "value": "Libro dei mostri"
    },
    {
        "id": "4236",
        "value": "Libro dei mostri"
    },
    {
        "id": "4237",
        "value": "Libro dei mostri"
    },
    {
        "id": "4238",
        "value": "Libro dei mostri"
    },
    {
        "id": "4239",
        "value": "Libro dei mostri"
    },
    {
        "id": "4240",
        "value": "Libro dei mostri"
    },
    {
        "id": "4241",
        "value": "Libro dei mostri"
    },
    {
        "id": "4242",
        "value": "Libro dei mostri"
    },
    {
        "id": "4243",
        "value": "Libro dei mostri"
    },
    {
        "id": "4250",
        "value": "Libro delle ricette I"
    },
    {
        "id": "4251",
        "value": "Libro delle ricette II"
    },
    {
        "id": "4252",
        "value": "Libro delle ricette III"
    },
    {
        "id": "4253",
        "value": "Libro delle ricette IV"
    },
    {
        "id": "4254",
        "value": "Libro delle ricette V"
    },
    {
        "id": "4255",
        "value": "Libro delle ricette VI"
    },
    {
        "id": "4256",
        "value": "Libro delle ricette VII"
    },
    {
        "id": "4257",
        "value": "Libro delle ricette VIII"
    },
    {
        "id": "4258 - 4274",
        "value": "-"
    },
    {
        "id": "4275",
        "value": "Pergamena"
    },
    {
        "id": "4276",
        "value": "Pergamena"
    },
    {
        "id": "4277",
        "value": "Pergamena"
    },
    {
        "id": "4278",
        "value": "Pergamena"
    },
    {
        "id": "4279",
        "value": "Pergamena"
    },
    {
        "id": "4280",
        "value": "Pergamena"
    },
    {
        "id": "4281",
        "value": "Pergamena"
    },
    {
        "id": "4282",
        "value": "Pergamena"
    },
    {
        "id": "4283",
        "value": "Pergamena"
    },
    {
        "id": "4284",
        "value": "Pergamena"
    },
    {
        "id": "4285",
        "value": "Pergamena"
    },
    {
        "id": "4286",
        "value": "Pergamena"
    },
    {
        "id": "4287",
        "value": "Pergamena"
    },
    {
        "id": "4288",
        "value": "Pergamena"
    },
    {
        "id": "4289",
        "value": "Pergamena"
    },
    {
        "id": "4290",
        "value": "Pergamena"
    },
    {
        "id": "4291",
        "value": "Pergamena"
    },
    {
        "id": "4292",
        "value": "Pergamena"
    },
    {
        "id": "4293",
        "value": "Pergamena"
    },
    {
        "id": "4294",
        "value": "Pergamena"
    },
    {
        "id": "4295",
        "value": "Pergamena"
    },
    {
        "id": "4296",
        "value": "Pergamena"
    },
    {
        "id": "4297",
        "value": "Pergamena"
    },
    {
        "id": "4298",
        "value": "Pergamena"
    },
    {
        "id": "4299",
        "value": "Pergamena"
    },
    {
        "id": "4300",
        "value": "Pergamena"
    },
    {
        "id": "4301",
        "value": "Pergamena"
    },
    {
        "id": "4302",
        "value": "Pergamena"
    },
    {
        "id": "4303",
        "value": "Libro dell'Eroe"
    },
    {
        "id": "4304",
        "value": "Libro di Ancaria"
    },
    {
        "id": "4305 - 4607",
        "value": "-"
    },
    {
        "id": "4608",
        "value": "Chiave della porta"
    },
    {
        "id": "4609",
        "value": "Chiave"
    },
    {
        "id": "4610",
        "value": "Chiave"
    },
    {
        "id": "4611",
        "value": "Chiave"
    },
    {
        "id": "4612",
        "value": "Chiave"
    },
    {
        "id": "4613",
        "value": "Pergamena"
    },
    {
        "id": "4614",
        "value": "Pergamena"
    },
    {
        "id": "4615",
        "value": "Pergamena"
    },
    {
        "id": "4616",
        "value": "Pergamena"
    },
    {
        "id": "4617",
        "value": "Pergamena"
    },
    {
        "id": "4618",
        "value": "Pergamena"
    },
    {
        "id": "4619",
        "value": "Pergamena"
    },
    {
        "id": "4620",
        "value": "Pergamena"
    },
    {
        "id": "4621",
        "value": "Pergamena"
    },
    {
        "id": "4622",
        "value": "Pergamena"
    },
    {
        "id": "4623",
        "value": "Pergamena"
    },
    {
        "id": "4624",
        "value": "Pergamena"
    },
    {
        "id": "4625",
        "value": "Pergamena"
    },
    {
        "id": "4626",
        "value": "Pergamena"
    },
    {
        "id": "4627",
        "value": "Pergamena"
    },
    {
        "id": "4628",
        "value": "Pergamena"
    },
    {
        "id": "4629",
        "value": "Pergamena"
    },
    {
        "id": "4630",
        "value": "Pergamena"
    },
    {
        "id": "4631",
        "value": "Pergamena"
    },
    {
        "id": "4632",
        "value": "Pergamena"
    },
    {
        "id": "4633",
        "value": "Pergamena"
    },
    {
        "id": "4634",
        "value": "Pergamena"
    },
    {
        "id": "4635",
        "value": "Pergamena"
    },
    {
        "id": "4636",
        "value": "Pergamena"
    },
    {
        "id": "4637",
        "value": "Pergamena"
    },
    {
        "id": "4638",
        "value": "Pergamena"
    },
    {
        "id": "4639",
        "value": "Pergamena"
    },
    {
        "id": "4640 - 4699",
        "value": "-"
    },
    {
        "id": "4700",
        "value": "Spilla tossica"
    },
    {
        "id": "4701",
        "value": "Spilla di pietre preziose"
    },
    {
        "id": "4702",
        "value": "Amuleto oscuro del servitore del tempio"
    },
    {
        "id": "4703",
        "value": "Amuleto della terra"
    },
    {
        "id": "4704",
        "value": "Amuleto del fuoco"
    },
    {
        "id": "4705",
        "value": "Amuleto delle ossa"
    },
    {
        "id": "4706",
        "value": "Amuleto dell'aria"
    },
    {
        "id": "4707",
        "value": "Amuleto protettivo della luna"
    },
    {
        "id": "4708",
        "value": "Amuleto della luna ingioiellata"
    },
    {
        "id": "4709",
        "value": "-"
    },
    {
        "id": "4710",
        "value": "Amuleto del sole"
    },
    {
        "id": "4711",
        "value": "Insegna spaventosa di Eodumar"
    },
    {
        "id": "4712",
        "value": "Spirale della rti cadute"
    },
    {
        "id": "4713",
        "value": "Amuleto a spirale ingemmato"
    },
    {
        "id": "4714",
        "value": "Amuleto delle stelle"
    },
    {
        "id": "4715",
        "value": "Amuleto delle stelle ingemmato"
    },
    {
        "id": "4716",
        "value": "Amuleto dei morti"
    },
    {
        "id": "4717",
        "value": "Amuleto ingemmato dei morti"
    },
    {
        "id": "4718",
        "value": "Amuleto dentato dell'oscurità"
    },
    {
        "id": "4719",
        "value": "Spilla"
    },
    {
        "id": "4720",
        "value": "Spilla ingemmata"
    },
    {
        "id": "4721",
        "value": "-"
    },
    {
        "id": "4722",
        "value": "Amuleto della terra"
    },
    {
        "id": "4723",
        "value": "Amuleto di fuoco"
    },
    {
        "id": "4724",
        "value": "Amuleto d'ossa"
    },
    {
        "id": "4725",
        "value": "Amuleto dell'aria"
    },
    {
        "id": "4726",
        "value": "Amuleto della luna"
    },
    {
        "id": "4727",
        "value": "Amuleto della luna ingioiellata"
    },
    {
        "id": "4728",
        "value": "-"
    },
    {
        "id": "4729",
        "value": "Amuleto del sole"
    },
    {
        "id": "4730",
        "value": "Amuleto solare ingemmato di Esarah"
    },
    {
        "id": "4731",
        "value": "Amuleto a spirale"
    },
    {
        "id": "4732",
        "value": "Amuleto a spirale ingemmato"
    },
    {
        "id": "4733",
        "value": "Amuleto delle stelle"
    },
    {
        "id": "4734",
        "value": "Amuleto ingemmato dele stelle"
    },
    {
        "id": "4735",
        "value": "Amuleto dei morti"
    },
    {
        "id": "4736",
        "value": "Amuleto ingemmato dei morti"
    },
    {
        "id": "4737",
        "value": "Amuleto d'acqua"
    },
    {
        "id": "4738",
        "value": "Spilla"
    },
    {
        "id": "4739",
        "value": "Spilla ingemmata"
    },
    {
        "id": "4740",
        "value": "-"
    },
    {
        "id": "4741",
        "value": "Amuleto della terra della difesa"
    },
    {
        "id": "4742",
        "value": "Amuleto impetuoso dell'arena"
    },
    {
        "id": "4743",
        "value": "Amuleto di osso della battaglia"
    },
    {
        "id": "4744",
        "value": "Amuleto del vento di Lunidra"
    },
    {
        "id": "4745",
        "value": "Amuleto della luna dell'arena"
    },
    {
        "id": "4746",
        "value": "Amuleto della luna ingioiellata"
    },
    {
        "id": "4747",
        "value": "-"
    },
    {
        "id": "4748",
        "value": "Amuleto del sole"
    },
    {
        "id": "4749",
        "value": "Amuleto del sole ingemmato"
    },
    {
        "id": "4750",
        "value": "Amuleto a spirale"
    },
    {
        "id": "4751",
        "value": "Amuleto a spirale ingemmato"
    },
    {
        "id": "4752",
        "value": "Amuleto delle stelle"
    },
    {
        "id": "4753",
        "value": "Amuleto delle stelle ingemmato"
    },
    {
        "id": "4754",
        "value": "Amuleto dei morti"
    },
    {
        "id": "4755",
        "value": "Amuleto ingemmare dei morti"
    },
    {
        "id": "4756",
        "value": "Amuleto dell'acqua"
    },
    {
        "id": "4757",
        "value": "Spilla"
    },
    {
        "id": "4758",
        "value": "Spilla ingemmata"
    },
    {
        "id": "4759",
        "value": "-"
    },
    {
        "id": "4760",
        "value": "Amuleto della terra"
    },
    {
        "id": "4761",
        "value": "Amuleto del fuoco"
    },
    {
        "id": "4762",
        "value": "Amuleto delle ossa"
    },
    {
        "id": "4763",
        "value": "Sommo amuleto della magia dell'aria"
    },
    {
        "id": "4764",
        "value": "Amuleto della luna"
    },
    {
        "id": "4765",
        "value": "Amuleto della luna ingioiellata"
    },
    {
        "id": "4766",
        "value": "Amuleto del mago"
    },
    {
        "id": "4767",
        "value": "Amuleto del sole"
    },
    {
        "id": "4768",
        "value": "Amuleto ingemmato del sole"
    },
    {
        "id": "4769",
        "value": "Amuleto a spirale"
    },
    {
        "id": "4770",
        "value": "Amuleto a spirale ingemmato"
    },
    {
        "id": "4771",
        "value": "Amuleto delle stelle"
    },
    {
        "id": "4772",
        "value": "Amuleto delle stelle ingemmate"
    },
    {
        "id": "4773",
        "value": "Amuleto oscuro degli evocatori dei morti"
    },
    {
        "id": "4774",
        "value": "Amuleto di Bahamut dei morti"
    },
    {
        "id": "4775",
        "value": "Sommo amuleto della magia dell'acqua"
    },
    {
        "id": "4776",
        "value": "Spilla"
    },
    {
        "id": "4777",
        "value": "Spilla con pietra ingemmata"
    },
    {
        "id": "4778",
        "value": "-"
    },
    {
        "id": "4779",
        "value": "Amuleto della terra"
    },
    {
        "id": "4780",
        "value": "Amuleto del fuoco"
    },
    {
        "id": "4781",
        "value": "Amuleto in osso"
    },
    {
        "id": "4782",
        "value": "Amuleto dell'aria"
    },
    {
        "id": "4783",
        "value": "Amuleto della luna"
    },
    {
        "id": "4784",
        "value": "Amuleto della luna ingioiellata"
    },
    {
        "id": "4785",
        "value": "Amuleto del Serafino"
    },
    {
        "id": "4786",
        "value": "Amuleto del sole"
    },
    {
        "id": "4787",
        "value": "Amuleto del sole ingemmato"
    },
    {
        "id": "4788",
        "value": "Amuleto a spirale"
    },
    {
        "id": "4789",
        "value": "Amuleto a spirale ingemmato"
    },
    {
        "id": "4790",
        "value": "Amuleto delle stelle"
    },
    {
        "id": "4791",
        "value": "Amuleto delle stelle ingemmato"
    },
    {
        "id": "4792",
        "value": "Amuledo dei morti"
    },
    {
        "id": "4793",
        "value": "Amuleto ingemmato dei morti"
    },
    {
        "id": "4794",
        "value": "Amuleto dell'acqua"
    },
    {
        "id": "4795",
        "value": "Spilla"
    },
    {
        "id": "4796",
        "value": "Spilla ingemmata"
    },
    {
        "id": "4797",
        "value": "-"
    },
    {
        "id": "4798",
        "value": "Amuleto della terra"
    },
    {
        "id": "4799",
        "value": "Amuleto del guoco"
    },
    {
        "id": "4800",
        "value": "Amuleto dell'osso"
    },
    {
        "id": "4801",
        "value": "Amuleto dell'aria"
    },
    {
        "id": "4802",
        "value": "Amuleto della luna"
    },
    {
        "id": "4803",
        "value": "Amuleto della luna ingemmata"
    },
    {
        "id": "4804",
        "value": "-"
    },
    {
        "id": "4805",
        "value": "Amuleto del sole"
    },
    {
        "id": "4806",
        "value": "Amuleto della sorte"
    },
    {
        "id": "4807",
        "value": "Amuleto a spirale"
    },
    {
        "id": "4808",
        "value": "Amuleto a spirale ingemmato"
    },
    {
        "id": "4809",
        "value": "Amuleto delle stelle"
    },
    {
        "id": "4810",
        "value": "Amuleto delle stelle ingemmato"
    },
    {
        "id": "4811",
        "value": "Amuleto dei morti"
    },
    {
        "id": "4812",
        "value": "Amuleto ingemmato dei morti"
    },
    {
        "id": "4813",
        "value": "Amuleto dell'acqua"
    },
    {
        "id": "4814",
        "value": "-"
    },
    {
        "id": "4815",
        "value": "Gioiello grande"
    },
    {
        "id": "4816",
        "value": "Gioiello piccolo"
    },
    {
        "id": "4817",
        "value": "Gioiello medio"
    },
    {
        "id": "4818",
        "value": "Gioiello rotondo grande"
    },
    {
        "id": "4819",
        "value": "-"
    },
    {
        "id": "4820",
        "value": "Gioiello rotondo piccolo (rosso)"
    },
    {
        "id": "4821",
        "value": "Gioiello rotondo medio (rosso)"
    },
    {
        "id": "4822",
        "value": "Gioiello tagliato grande (rosso)"
    },
    {
        "id": "4823",
        "value": "Gioiello tagliato piccolo (viola)"
    },
    {
        "id": "4824",
        "value": "Gioiello tagliato medio\t(azzurro)"
    },
    {
        "id": "4825",
        "value": "Gioiello non tagliato Grande (Blu\\Viola)"
    },
    {
        "id": "4826",
        "value": "Gioiello non tagliato piccolo (viola)"
    },
    {
        "id": "4827",
        "value": "Gioiello non tagliato medio (cremisi)"
    },
    {
        "id": "4828 - 4863",
        "value": "-"
    },
    {
        "id": "4864",
        "value": "Anello della lepre"
    },
    {
        "id": "4865",
        "value": "Ercole"
    },
    {
        "id": "4866",
        "value": "Anello con sigillo magico"
    },
    {
        "id": "4867",
        "value": "Anello dello sterminadraghi"
    },
    {
        "id": "4868",
        "value": "Anello di protezione"
    },
    {
        "id": "4869",
        "value": "Anello di attacco"
    },
    {
        "id": "4870",
        "value": "Anello del Troiano"
    },
    {
        "id": "4871",
        "value": "Anello di diamanti dell'arena"
    },
    {
        "id": "4872",
        "value": "Anello di Aarnum I."
    },
    {
        "id": "4873",
        "value": "Anello diabolico della furia"
    },
    {
        "id": "4874",
        "value": "Anello del disgusto"
    },
    {
        "id": "4875",
        "value": "Piccolo anello di fuoco ardente"
    },
    {
        "id": "4876",
        "value": "Anello del Drago"
    },
    {
        "id": "4877",
        "value": "Anello elementale del fuoco"
    },
    {
        "id": "4878",
        "value": "Anello guardiano"
    },
    {
        "id": "4879",
        "value": "Anelo piccolo della calma"
    },
    {
        "id": "4880",
        "value": "Anello ardente della magia"
    },
    {
        "id": "4881",
        "value": "Acquamarina della magia"
    },
    {
        "id": "4882",
        "value": "Anello impetuoso degli elementi"
    },
    {
        "id": "4883",
        "value": "Anello di pietra degli elementi"
    },
    {
        "id": "4884",
        "value": "Anello dell'Onipotente"
    },
    {
        "id": "4885",
        "value": "Anello nero della protezione"
    },
    {
        "id": "4886",
        "value": "Anello sigillo"
    },
    {
        "id": "4887",
        "value": "Anello sigillo di Morgast DeMordrey"
    },
    {
        "id": "4888",
        "value": "Anello avvelenato dell'Elfo oscuro di Zhurag-Nar"
    },
    {
        "id": "4889",
        "value": "Anello"
    },
    {
        "id": "4890",
        "value": "Anello danzante dei morti"
    },
    {
        "id": "4891",
        "value": "Anello"
    },
    {
        "id": "4892",
        "value": "Anello di Ozzy"
    },
    {
        "id": "4893",
        "value": "Anello"
    },
    {
        "id": "4894",
        "value": "Anello"
    },
    {
        "id": "4895",
        "value": "Anello"
    },
    {
        "id": "4896",
        "value": "Anello"
    },
    {
        "id": "4897",
        "value": "Anello"
    },
    {
        "id": "4898",
        "value": "Anello"
    },
    {
        "id": "4899",
        "value": "Anello"
    },
    {
        "id": "4900",
        "value": "Anello celato dei morti"
    },
    {
        "id": "4901",
        "value": "Anello del culto di Sakkara"
    },
    {
        "id": "4902",
        "value": "Anello di Worgannar"
    },
    {
        "id": "4903",
        "value": "Anello sigillo del negromante"
    },
    {
        "id": "4904",
        "value": "Anello della morte di Sophia"
    },
    {
        "id": "4905",
        "value": "Anello"
    },
    {
        "id": "4906",
        "value": "Anello"
    },
    {
        "id": "4907",
        "value": "Anello dell'unità"
    },
    {
        "id": "4908",
        "value": "Anello"
    },
    {
        "id": "4909",
        "value": "Anello"
    },
    {
        "id": "4910",
        "value": "Anello di Daemonfear"
    },
    {
        "id": "4911",
        "value": "Anello"
    },
    {
        "id": "4912",
        "value": "Anello"
    },
    {
        "id": "4913",
        "value": "Cacciademoni"
    },
    {
        "id": "4914",
        "value": "Anello"
    },
    {
        "id": "4915",
        "value": "Segugio Orchetto"
    },
    {
        "id": "4916",
        "value": "Anello"
    },
    {
        "id": "4917",
        "value": "Anello"
    },
    {
        "id": "4918",
        "value": "Anello"
    },
    {
        "id": "4919",
        "value": "Anello"
    },
    {
        "id": "4920",
        "value": "Anello del coniglio"
    },
    {
        "id": "4921",
        "value": "Anello dei ricci"
    },
    {
        "id": "4922",
        "value": "Anello dei venti"
    },
    {
        "id": "4923",
        "value": "Anello delle rapide"
    },
    {
        "id": "4924",
        "value": "Anello"
    },
    {
        "id": "4925",
        "value": "Anello"
    },
    {
        "id": "4926",
        "value": "Anello"
    },
    {
        "id": "4927",
        "value": "Anello"
    },
    {
        "id": "4928",
        "value": "Anello"
    },
    {
        "id": "4929",
        "value": "Anello"
    },
    {
        "id": "4930",
        "value": "Anello di Silasas"
    },
    {
        "id": "4931",
        "value": "Anello di orchetto guerriero"
    },
    {
        "id": "4932",
        "value": "<noname> (Simbolo runico"
    },
    {
        "id": "4933",
        "value": "<noname> (Simbolo runico"
    },
    {
        "id": "4934",
        "value": "<noname> (Simbolo runico"
    },
    {
        "id": "4935",
        "value": "<noname> (Simbolo runico"
    },
    {
        "id": "4936",
        "value": "<noname> (Simbolo runico"
    },
    {
        "id": "4937",
        "value": "Corno di demone Sakkara"
    },
    {
        "id": "4938",
        "value": "<noname> (Scaglia di drago?)"
    },
    {
        "id": "4939",
        "value": "<noname> (Oggetto d'oro piccolo, forse un simbolo runico)"
    },
    {
        "id": "4940",
        "value": "<noname> (Oggetto d'oro piccolo, forse un simbolo runico)"
    },
    {
        "id": "4941",
        "value": "<noname> (Oggetto d'oro piccolo, forse un simbolo runico)"
    },
    {
        "id": "4942",
        "value": "<noname> (Oggetto d'oro piccolo, forse un simbolo runico)"
    },
    {
        "id": "4943",
        "value": "<noname> (Oggetto d'oro piccolo, forse un simbolo runico)"
    },
    {
        "id": "4944",
        "value": "<noname> (Oggetto d'oro piccolo, forse un simbolo runico)"
    },
    {
        "id": "4945",
        "value": "<noname> (Oggetto d'oro piccolo, forse un simbolo runico)"
    },
    {
        "id": "4946",
        "value": "<noname> (Oggetto d'oro piccolo, forse un simbolo runico)"
    },
    {
        "id": "4947 - 4969",
        "value": "-"
    },
    {
        "id": "4970",
        "value": "Anello"
    },
    {
        "id": "4971",
        "value": "Anello"
    },
    {
        "id": "4972",
        "value": "Anello"
    },
    {
        "id": "4973",
        "value": "Anello"
    },
    {
        "id": "4974",
        "value": "Anello di Siridan"
    },
    {
        "id": "4975",
        "value": "Anello"
    },
    {
        "id": "4976",
        "value": "Anello"
    },
    {
        "id": "4977",
        "value": "Anello"
    },
    {
        "id": "4978",
        "value": "Anello"
    },
    {
        "id": "4979",
        "value": "Anello di Theobit"
    },
    {
        "id": "4980",
        "value": "Grande anello di Silasas"
    },
    {
        "id": "4981",
        "value": "Anello"
    },
    {
        "id": "4982",
        "value": "Anello"
    },
    {
        "id": "4983",
        "value": "Anello del Drago"
    },
    {
        "id": "4984",
        "value": "Anello degli impazienti"
    },
    {
        "id": "4985",
        "value": "Anello"
    },
    {
        "id": "4986",
        "value": "Anello"
    },
    {
        "id": "4987",
        "value": "Anello"
    },
    {
        "id": "4988",
        "value": "Anello"
    },
    {
        "id": "4989",
        "value": "Anello"
    },
    {
        "id": "4990",
        "value": "Anello"
    },
    {
        "id": "4991",
        "value": "Anello"
    },
    {
        "id": "4992",
        "value": "Anello"
    },
    {
        "id": "4993",
        "value": "Cartello"
    },
    {
        "id": "4994",
        "value": "Cartello"
    },
    {
        "id": "4995",
        "value": "Cartello"
    },
    {
        "id": "4996",
        "value": "Cartello"
    },
    {
        "id": "4997",
        "value": "Cartello"
    },
    {
        "id": "4998",
        "value": "CARTELLO RICERCATO."
    },
    {
        "id": "4999",
        "value": "Porta delle prigioni (Un cartello o.O)"
    },
    {
        "id": "5000 - 5055",
        "value": "-"
    },
    {
        "id": "5056",
        "value": "Pozione medicamentosa minore (Non presente nel gioco)"
    },
    {
        "id": "5057",
        "value": "Pozionem edicamentosa forte (Non presente nel gioco)"
    },
    {
        "id": "5058",
        "value": "Pozione guaritrice (Non presente nel gioco)"
    },
    {
        "id": "5059",
        "value": "Pozione del mana minore (Non presente nel gioco)"
    },
    {
        "id": "5060",
        "value": "Pozione del mana forte (Non presente nel gioco)"
    },
    {
        "id": "5061",
        "value": "Pozione del mana completa (non presente normalmente nel gioco)"
    },
    {
        "id": "5062",
        "value": "Pozione energetica minote (non presente normalmente nel gioco)"
    },
    {
        "id": "5063",
        "value": "Pozione energetica forte (Non presente nel gioco)"
    },
    {
        "id": "5064",
        "value": "Pozione energetica completa (Non presente nel gioco)"
    },
    {
        "id": "5065",
        "value": "<noname> (Pezzo di carne, piccolissimo)"
    },
    {
        "id": "5066",
        "value": "<noname> (Pezzo di carne, piccolissimo)"
    },
    {
        "id": "5067",
        "value": "<noname> (Pezzo di carne, piccolissimo)"
    },
    {
        "id": "5068",
        "value": "<noname> (Pezzo di carne, piccolo)"
    },
    {
        "id": "5069",
        "value": "<noname> (Pezzo di carne, piccolo)"
    },
    {
        "id": "5070",
        "value": "<noname> (Pezzo di carne, piccolo)"
    },
    {
        "id": "5071",
        "value": "<noname> (Pezzo di carne, piccolo)"
    },
    {
        "id": "5072",
        "value": "<noname> (Pezzo di carne, piccolo)"
    },
    {
        "id": "5073",
        "value": "<noname> (Pezzo di carne, piccolo)"
    },
    {
        "id": "5074",
        "value": "<noname> (Pezzo di carne, piccolo)"
    },
    {
        "id": "5075",
        "value": "<noname> (Pezzo di carne, piccolo)"
    },
    {
        "id": "5076",
        "value": "<noname> (Pezzo di carne, piccolo)"
    },
    {
        "id": "5077",
        "value": "<noname> (Pezzo di osso?)"
    },
    {
        "id": "5078",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5079",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5080",
        "value": "<noname> (Pezzo di carne con osso)"
    },
    {
        "id": "5081",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5082",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5083",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5084",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5085",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5086",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5087",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5088",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5089",
        "value": "<noname> (teschio)"
    },
    {
        "id": "5090",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5091",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5092",
        "value": "<noname> (teschio)"
    },
    {
        "id": "5093",
        "value": "<noname> (Pezzo di carne)"
    },
    {
        "id": "5094",
        "value": "<noname> (Costato)"
    },
    {
        "id": "5095",
        "value": "Pietrificazione(quando si viene pietrificati)"
    },
    {
        "id": "5096 - 5099",
        "value": "-"
    },
    {
        "id": "5100",
        "value": "Teschio di scheletro (Incastonabile?)"
    },
    {
        "id": "5101",
        "value": "Statua Drago"
    },
    {
        "id": "5102",
        "value": "Statua Elfo"
    },
    {
        "id": "5103",
        "value": "Statua Calice"
    },
    {
        "id": "5104",
        "value": "Statua DelCazzo"
    },
    {
        "id": "5105",
        "value": "Statua Serafino"
    },
    {
        "id": "5106",
        "value": "Statua Guscio"
    },
    {
        "id": "5107",
        "value": "-"
    },
    {
        "id": "5108",
        "value": "Flauto(?)"
    },
    {
        "id": "5109",
        "value": "Campana"
    },
    {
        "id": "5110",
        "value": "Arpa"
    },
    {
        "id": "5111",
        "value": "Corno"
    },
    {
        "id": "5112",
        "value": "Liuto"
    },
    {
        "id": "5113 - 5119",
        "value": "-"
    },
    {
        "id": "5120",
        "value": "Lingotti Oro(2 barre)"
    },
    {
        "id": "5121",
        "value": "Lingotti Oro(3 barre)"
    },
    {
        "id": "5122",
        "value": "Lingotto Oro(5 barre)"
    },
    {
        "id": "5123",
        "value": "Lingotto Diamante (2 barre)"
    },
    {
        "id": "5124",
        "value": "Lingotto Diamante (3 barre)"
    },
    {
        "id": "5125",
        "value": "Lingotto Diamante (5 barre)"
    },
    {
        "id": "5126",
        "value": "Lingotto Rame (2 barre)"
    },
    {
        "id": "5127",
        "value": "Lingotto Rame (3 barre)"
    },
    {
        "id": "5128",
        "value": "Lingotto Rame (5 barre)"
    },
    {
        "id": "5129",
        "value": "Lingotto Argento (2 barre)"
    },
    {
        "id": "5130",
        "value": "Lingotto Argento (3 barre)"
    },
    {
        "id": "5131",
        "value": "Lingotto Argento (5 barre)"
    },
    {
        "id": "5132",
        "value": "Soldi (pochi)"
    },
    {
        "id": "5133",
        "value": "Soldi (nella media)"
    },
    {
        "id": "5134",
        "value": "Soldi (tanti)"
    },
    {
        "id": "5135",
        "value": "Soldi (berlusconi)"
    },
    {
        "id": "5136",
        "value": "Lambrusco?"
    },
    {
        "id": "5137",
        "value": "Pozione Anti NonMorti G"
    },
    {
        "id": "5138",
        "value": "Pozione Mentone G"
    },
    {
        "id": "5139",
        "value": "Pozione AntiVipera G"
    },
    {
        "id": "5140",
        "value": "Pozione Medicamentosa G"
    },
    {
        "id": "5141",
        "value": "Pozione Concentrazione G"
    },
    {
        "id": "5142",
        "value": "Pozione Anti NonMorti M"
    },
    {
        "id": "5143",
        "value": "Pozione Mentone M"
    },
    {
        "id": "5144",
        "value": "Pozione AntiVipera M"
    },
    {
        "id": "5145",
        "value": "Pozione Medicamentosa M"
    },
    {
        "id": "5146",
        "value": "Pozione Concentrazione M"
    },
    {
        "id": "5147 - 5149",
        "value": "-"
    },
    {
        "id": "5150",
        "value": "GameBox 1"
    },
    {
        "id": "5151",
        "value": "GameBox 2"
    },
    {
        "id": "5152",
        "value": "GameBox 3"
    },
    {
        "id": "5153",
        "value": "GameBox 4"
    },
    {
        "id": "5154",
        "value": "GameBox 5"
    },
    {
        "id": "5155",
        "value": "GameBox 6"
    },
    {
        "id": "5156",
        "value": "GameBox 7"
    },
    {
        "id": "5157",
        "value": "GameBox 8"
    },
    {
        "id": "5158",
        "value": "GameBox 9"
    },
    {
        "id": "5159",
        "value": "GameBox 10"
    },
    {
        "id": "5160",
        "value": "GameBox 11"
    },
    {
        "id": "5161",
        "value": "Libro 1"
    },
    {
        "id": "5162",
        "value": "Libro 2"
    },
    {
        "id": "5163",
        "value": "Libro 3"
    },
    {
        "id": "5164",
        "value": "Libro 4"
    },
    {
        "id": "5165",
        "value": "Libro Della Fede"
    },
    {
        "id": "5166",
        "value": "Libro"
    },
    {
        "id": "5167",
        "value": "Libro"
    },
    {
        "id": "5168",
        "value": "Pozione Minore della Morte dei Non-Morti"
    },
    {
        "id": "5169",
        "value": "Pozione Minore del Mentone"
    },
    {
        "id": "5170",
        "value": "Pozione Antivipera Minore"
    },
    {
        "id": "5171",
        "value": "Pozione Medicamentosa P"
    },
    {
        "id": "5172",
        "value": "Pozione Minore della Concentrazione"
    },
    {
        "id": "5173 - 5191",
        "value": "-"
    },
    {
        "id": "5192",
        "value": "Contenitore (1)"
    },
    {
        "id": "5193",
        "value": "Contenitore (2)"
    },
    {
        "id": "5194",
        "value": "-"
    },
    {
        "id": "5195",
        "value": "Sarcofago dei Nani"
    },
    {
        "id": "5196",
        "value": "Sarcofago dei Nani (2)"
    },
    {
        "id": "5197",
        "value": "Pozzo Antico"
    },
    {
        "id": "5198",
        "value": "Pozzo Antico (2)"
    },
    {
        "id": "5199",
        "value": "Scrigno (quella blu)"
    },
    {
        "id": "5200",
        "value": "Scrigno (quello blu)"
    },
    {
        "id": "5201",
        "value": "Scrigno"
    },
    {
        "id": "5202",
        "value": "Scrigno"
    },
    {
        "id": "5203",
        "value": "Stipo"
    },
    {
        "id": "5204",
        "value": "Stipo"
    },
    {
        "id": "5205",
        "value": "Stipo"
    },
    {
        "id": "5206",
        "value": "Stipo"
    },
    {
        "id": "5207",
        "value": "Barile"
    },
    {
        "id": "5208",
        "value": "Stipo"
    },
    {
        "id": "5209",
        "value": "Cesta"
    },
    {
        "id": "5210",
        "value": "Cesta"
    },
    {
        "id": "5211",
        "value": "Scrigno di Legno"
    },
    {
        "id": "5212",
        "value": "Scrigno di Legno"
    },
    {
        "id": "5213",
        "value": "Scrigno di Legno"
    },
    {
        "id": "5214",
        "value": "Santuario degli Antenati"
    },
    {
        "id": "5215",
        "value": "Santuario"
    },
    {
        "id": "5216",
        "value": "Bara"
    },
    {
        "id": "5217",
        "value": "Bara"
    },
    {
        "id": "5218",
        "value": "Vaso"
    },
    {
        "id": "5219",
        "value": "Bara"
    },
    {
        "id": "5220",
        "value": "Stipo"
    },
    {
        "id": "5221",
        "value": "Porta (wtf?)"
    },
    {
        "id": "5222",
        "value": "Libreria"
    },
    {
        "id": "5223",
        "value": "Bara"
    },
    {
        "id": "5224",
        "value": "Bara"
    },
    {
        "id": "5225",
        "value": "Bara"
    },
    {
        "id": "5226",
        "value": "Bara"
    },
    {
        "id": "5227",
        "value": "Scrigno (???)"
    },
    {
        "id": "5228 - 5374",
        "value": "-"
    }
]

const combat_arts = [
    {
        "id": "5375",
        "value": "Passaggio di Fase (mago)"
    },
    {
        "id": "5376",
        "value": "Pelle di Pietra (mago)"
    },
    {
        "id": "5377",
        "value": "Compagno dei boschi (elfa)"
    },
    {
        "id": "5378",
        "value": "Trasformazione (mago)"
    },
    {
        "id": "5379",
        "value": "Sfera di Fuoco (mago)"
    },
    {
        "id": "5380",
        "value": "Arte di combattimento Perduta (???)"
    },
    {
        "id": "5381",
        "value": "Guarigione Spirituale (mago)"
    },
    {
        "id": "5382",
        "value": "Arte di combattimento Perduta (???)"
    },
    {
        "id": "5383",
        "value": "Arte di combattimento Perduta (???)"
    },
    {
        "id": "5384",
        "value": "Arte di combattimento Perduta (??? runa portale)"
    },
    {
        "id": "5385",
        "value": "Spirale di Fuoco (mago)"
    },
    {
        "id": "5386",
        "value": "Arte di combattimento Perduta (???)"
    },
    {
        "id": "5387",
        "value": "Fulmine (serafino)"
    },
    {
        "id": "5388 - 5389",
        "value": "-"
    },
    {
        "id": "5390",
        "value": "Arte di combattimento Perduta (??? runa portale)"
    },
    {
        "id": "5391",
        "value": "Luce Celestiale (Serafino)"
    },
    {
        "id": "5392",
        "value": "Cerchio della Paura (mago)"
    },
    {
        "id": "5393",
        "value": "Lame Rotanti della Luce (serafino)"
    },
    {
        "id": "5394",
        "value": "Irritazione (Serafino)"
    },
    {
        "id": "5395",
        "value": "Conversione (Serafino)"
    },
    {
        "id": "5396",
        "value": "Luce (serafino)"
    },
    {
        "id": "5397",
        "value": "Forza della Fede (Serafino)"
    },
    {
        "id": "5398",
        "value": "Scudo di Luce (Serafino"
    },
    {
        "id": "5399",
        "value": "Purgatorio (Mago)"
    },
    {
        "id": "5400",
        "value": "Pelle Fiammeggiante (mago)"
    },
    {
        "id": "5401",
        "value": "Pietrificazione (Mago)"
    },
    {
        "id": "5402",
        "value": "Tempesta di Meteore (mago)"
    },
    {
        "id": "5403",
        "value": "Cataratta dell'agilità (Mago)"
    },
    {
        "id": "5404",
        "value": "Tromba d'Aria (Mago)"
    },
    {
        "id": "5405",
        "value": "Folata di Vento (mago)"
    },
    {
        "id": "5406",
        "value": "Scudo Protettivo (Mago)"
    },
    {
        "id": "5407",
        "value": "Concentrazione (Mago)"
    },
    {
        "id": "5408",
        "value": "Reiki (Mago)"
    },
    {
        "id": "5409",
        "value": "Raggio (Mago)"
    },
    {
        "id": "5410",
        "value": "Schegge di Ghiaccio (Mago)"
    },
    {
        "id": "5411",
        "value": "Anello di Luce (Mago)"
    },
    {
        "id": "5412",
        "value": "Trasformazione (Elfa)"
    },
    {
        "id": "5413",
        "value": "Veloce come un Lampo (Elfa)"
    },
    {
        "id": "5414",
        "value": "Cespuglio Spinoso (Elfa)"
    },
    {
        "id": "5415",
        "value": "Viticci Avvelenati (Elfa)"
    },
    {
        "id": "5416",
        "value": "Gabbia di Viticci (Elfa)"
    },
    {
        "id": "5417",
        "value": "Invocazione degli Antenati (Elfa)"
    },
    {
        "id": "5418",
        "value": "Recupero (Elfa)"
    },
    {
        "id": "5419",
        "value": "Arte di combattimento Perduta (???)"
    },
    {
        "id": "5420",
        "value": "Arte di combattimento Perduta (??? runa portale)"
    },
    {
        "id": "5421 - 5552",
        "value": "-"
    },
    {
        "id": "5553",
        "value": "Attacco (Gladiatore)"
    },
    {
        "id": "5554",
        "value": "Colpo Duro (Gladiatore)"
    },
    {
        "id": "5555",
        "value": "Colpo Multiplo (Gladiatore)"
    },
    {
        "id": "5556",
        "value": "Calcio da Combattimento (Gladiatore)"
    },
    {
        "id": "5557",
        "value": "Artigli Laceranti (Vampiressa)"
    },
    {
        "id": "5558",
        "value": "Artigli della Morte (Vampiressa)"
    },
    {
        "id": "5559",
        "value": "Artigli Turbinanti (Vampiressa)"
    },
    {
        "id": "5560",
        "value": "Calcio da Combattimento (Vampiressa)"
    },
    {
        "id": "5561",
        "value": "Occhio per Occhio (Elfa)"
    },
    {
        "id": "5562",
        "value": "Colpo Duro (Elfa)"
    },
    {
        "id": "5563",
        "value": "Colpo Multiplo (Elfa)"
    },
    {
        "id": "5564",
        "value": "Arte di combattimento Perduta (???)"
    },
    {
        "id": "5565",
        "value": "Furia (Elfo Oscuro)"
    },
    {
        "id": "5566",
        "value": "Vendetta (Elfo Oscuro)"
    },
    {
        "id": "5567",
        "value": "Furia Fulminea (Elfo Oscuro)"
    },
    {
        "id": "5568",
        "value": "Calcio da Combattimento (Elfo Oscuro)"
    },
    {
        "id": "5569",
        "value": "Attacco (Serafino)"
    },
    {
        "id": "5570",
        "value": "Colpo Duro (Serafino)"
    },
    {
        "id": "5571",
        "value": "Colpo Multiplo (Serafino)"
    },
    {
        "id": "5572",
        "value": "Calcio Da Combattimento (Serafino)"
    },
    {
        "id": "5573",
        "value": "Cacciatore-Cercatore (Serafino)"
    },
    {
        "id": "5574 - 5575",
        "value": ""
    },
    {
        "id": "5576",
        "value": "Nebbia di Battaglia (Elfo Oscuro)"
    },
    {
        "id": "5577",
        "value": "Bruma Avvelenata (Elfo Oscuro)"
    },
    {
        "id": "5578",
        "value": "Confusione (Elfo Oscuro)"
    },
    {
        "id": "5579",
        "value": "Voragine Senza Fondo (Elfo Oscuro)"
    },
    {
        "id": "5580",
        "value": "Carica Esplosiva (Elfo Oscuro)"
    },
    {
        "id": "5581",
        "value": "Adrenalina (Elfo Oscuro)"
    },
    {
        "id": "5582",
        "value": "Testosterone (Elfo Oscuro)"
    },
    {
        "id": "5583",
        "value": "Pak-Nakor (Elfo Oscuro)"
    },
    {
        "id": "5584",
        "value": "Pak-Dain (Elfo Oscuro)"
    },
    {
        "id": "5585",
        "value": "Cacciatore di Anime (Elfo Oscuro)"
    },
    {
        "id": "5586",
        "value": "Mangusta (Elfo Oscuro)"
    },
    {
        "id": "5587",
        "value": "Cobra (Elfo Oscuro)"
    },
    {
        "id": "5592",
        "value": "Pipistrelli"
    },
    {
        "id": "5593",
        "value": "Pipistrelli"
    },
    {
        "id": "5594",
        "value": "Pipistrelli"
    },
    {
        "id": "5595",
        "value": "Morte Risvegliata (Vampiressa)"
    },
    {
        "id": "5596",
        "value": "Bacio Di Sangue (Vampiressa)"
    },
    {
        "id": "5597",
        "value": "Salto Da Combattimento (Vampiressa)"
    },
    {
        "id": "5598",
        "value": "Morso Esperto (Vampiressa)"
    },
    {
        "id": "5599",
        "value": "-"
    },
    {
        "id": "5600",
        "value": "Morso Insanguinato (Vampiressa)"
    },
    {
        "id": "5601",
        "value": "-"
    },
    {
        "id": "5602",
        "value": "Controllo del Tempo (Vampiressa)"
    },
    {
        "id": "5603",
        "value": "-"
    },
    {
        "id": "5604",
        "value": "Richiamo dei Lupi (Vampiressa)"
    },
    {
        "id": "5605",
        "value": "-"
    },
    {
        "id": "5606",
        "value": "Controllo della Mente (Vampiressa)"
    },
    {
        "id": "5609",
        "value": "Vampirismo (Vampiressa)"
    },
    {
        "id": "5610",
        "value": "Arte di combattimento Perduta (???)"
    },
    {
        "id": "5611",
        "value": "Colpo Turbinante (Serafino)"
    },
    {
        "id": "5612",
        "value": "Scariche di Energia (Serafino)"
    },
    {
        "id": "5613",
        "value": "Sfere di Energia (Serafino)"
    },
    {
        "id": "5614",
        "value": "Salto di Combattimento (Serafino)"
    },
    {
        "id": "5615",
        "value": "Sguardo che Trafigge (Gladiatore)"
    },
    {
        "id": "5616",
        "value": "Coraggio Eroico (Gladiatore)"
    },
    {
        "id": "5617",
        "value": "Timore Reverenziale (Gladiatore)"
    },
    {
        "id": "5618",
        "value": "Lama Da Lancio (Gladiatore)"
    },
    {
        "id": "5619",
        "value": "Pugno Degli Dei (Gladiatore)"
    },
    {
        "id": "5620",
        "value": "Arte di combattimento Perduta (???)"
    },
    {
        "id": "5621",
        "value": "Spacca-Schiena (Gladiatore)"
    },
    {
        "id": "5622",
        "value": "Arte di combattimento Perduta (??? foglio di carta)"
    },
    {
        "id": "5623",
        "value": "Freccia Penetrante (Elfa)"
    },
    {
        "id": "5624",
        "value": "Freccia che Atterra (Elfa)"
    },
    {
        "id": "5625",
        "value": "Freccia a Ragno (Elfa)"
    },
    {
        "id": "5626",
        "value": "Tiro Multiplo (Elfa)"
    },
    {
        "id": "5627",
        "value": "Freccia Esplosiva (Elfa)"
    },
    {
        "id": "5628",
        "value": "Salto Pesante (Gladiatore)"
    },
    {
        "id": "5629",
        "value": "Arte di combattimento Perduta (???)"
    },
    {
        "id": "5630",
        "value": "Arte di combattimento Perduta (???)"
    },
    {
        "id": "5631",
        "value": "Arte di combattimento Perduta (???)"
    },
    {
        "id": "5632",
        "value": "Torcia Piccola"
    },
    {
        "id": "5633",
        "value": "Torcia Grande"
    },
    {
        "id": "5634",
        "value": "Coro Infernale"
    },
    {
        "id": "5635",
        "value": "Servo"
    },
    {
        "id": "5636",
        "value": "Invocazione Magica"
    },
    {
        "id": "5637",
        "value": "Invocazione Ignea"
    },
    {
        "id": "5638",
        "value": "Invocazione velenosa"
    },
    {
        "id": "5639",
        "value": "Volo"
    },
    {
        "id": "5640",
        "value": "Disco Fiammeggiante"
    },
    {
        "id": "5641",
        "value": "Sfera Infernale"
    },
    {
        "id": "5642",
        "value": "Terrore"
    },
    {
        "id": "5643",
        "value": "Potere Infernale"
    },
    {
        "id": "5644",
        "value": "Richiamo Mortale"
    },
    {
        "id": "5645",
        "value": "Tentacoli"
    },
    {
        "id": "5646",
        "value": "Invocazione Di Battaglia"
    },
    {
        "id": "5767",
        "value": "Retrocessione"
    },
    {
        "id": "5768",
        "value": "Assalto Concentrato"
    },
    {
        "id": "5769",
        "value": "Avidità"
    },
    {
        "id": "5770",
        "value": "Colpo Pesante"
    },
    {
        "id": "5771",
        "value": "Cannonata"
    },
    {
        "id": "5772",
        "value": "Furia Agguerrita"
    },
    {
        "id": "5773",
        "value": "Grido Di Battaglia"
    },
    {
        "id": "5774",
        "value": "Mortaio"
    },
    {
        "id": "5775",
        "value": "Attacco Multiplo"
    },
    {
        "id": "5776",
        "value": "Proiettile a Spirale"
    },
    {
        "id": "5777",
        "value": "Mine Esplosive"
    },
    {
        "id": "5778",
        "value": "Veemenza"
    },
    {
        "id": "5779",
        "value": "Corazza Di Nano"
    },
    {
        "id": "5780",
        "value": "Acciaio Di Nano"
    },
    {
        "id": "5781",
        "value": "Trincea"
    },
    {
        "id": "5782",
        "value": "Lanciafiamme"
    },
    {
        "id": "5783",
        "value": "Portone (16)"
    },
    {
        "id": "5784 - 5999",
        "value": "-"
    }
]

const quest_items = [
    {
        "id": "6000",
        "value": "Pergamena illustrata"
    },
    {
        "id": "6001",
        "value": "Cespuglio"
    },
    {
        "id": "6002",
        "value": "Cespuglio"
    },
    {
        "id": "6003",
        "value": "Testa del principe degli elfi oscuri"
    },
    {
        "id": "6004",
        "value": "Squama di drago"
    },
    {
        "id": "6005",
        "value": "barre di ferro"
    },
    {
        "id": "6006",
        "value": "Barre di ferro"
    },
    {
        "id": "6007",
        "value": "Barre di ferro"
    },
    {
        "id": "6008",
        "value": "Pietra elementale (rossa con crepe)"
    },
    {
        "id": "6009",
        "value": "Pietra elementale (rossa)"
    },
    {
        "id": "6010",
        "value": "Pietre elementale (riche rosse)"
    },
    {
        "id": "6011",
        "value": "Pietra elementale (righe blu)"
    },
    {
        "id": "6012",
        "value": "Pietra elementale (Rossa)"
    },
    {
        "id": "6013",
        "value": "Pietra elementale (Blu)"
    },
    {
        "id": "6014",
        "value": "Pietra elementale (righe verticali ondulate ROSSE)"
    },
    {
        "id": "6015",
        "value": "Pietra elementale (righe verticali ondulate BLU)"
    },
    {
        "id": "6016",
        "value": "Pietra elementale (righe orizzontali ondulate ROSSE)"
    },
    {
        "id": "6017",
        "value": "Pietra elementale (righe orizzontali ondulate BLU)"
    },
    {
        "id": "6018",
        "value": "Ciocca di capelli (neri)"
    },
    {
        "id": "6019",
        "value": "Ciocca di capelli (castani)"
    },
    {
        "id": "6020",
        "value": "Ciocca di capelli (bianchi)"
    },
    {
        "id": "6021",
        "value": "Camicia"
    },
    {
        "id": "6022",
        "value": "Portacipria"
    },
    {
        "id": "6023",
        "value": "Runa decorata (grigia)"
    },
    {
        "id": "6024",
        "value": "Runa decorata (Grigio\\oro)"
    },
    {
        "id": "6025",
        "value": "Bastone rituale decorato (azzurro)"
    },
    {
        "id": "6026",
        "value": "Cristallo"
    },
    {
        "id": "6027",
        "value": "Messaggio di Lady Lintari"
    },
    {
        "id": "6028",
        "value": "Mappa del tesoro"
    },
    {
        "id": "6029",
        "value": "Baccador"
    },
    {
        "id": "6030",
        "value": "Tunica da battaglia di DeMordrey"
    },
    {
        "id": "6031",
        "value": "Messaggio di Danielle"
    },
    {
        "id": "6032",
        "value": "Ciocca di capelli dell'amata di un soldato"
    },
    {
        "id": "6033",
        "value": "Dipinto"
    },
    {
        "id": "6034",
        "value": "Chiave della stanza del tesoro"
    },
    {
        "id": "6035",
        "value": "Antidoto"
    },
    {
        "id": "6036",
        "value": "Messaggio segreto"
    },
    {
        "id": "6037",
        "value": "Erbe medicamentose"
    },
    {
        "id": "6038",
        "value": "Amuleto del ranger della foresta morto"
    },
    {
        "id": "6039",
        "value": "Amuleto del ranger della foresta deceduto"
    },
    {
        "id": "6040",
        "value": "Mano del mago malvagio"
    },
    {
        "id": "6041",
        "value": "Occhio di un orco"
    },
    {
        "id": "6042",
        "value": "Corno di un minotauro"
    },
    {
        "id": "6043",
        "value": "Scalpo del barbaro"
    },
    {
        "id": "6044",
        "value": "Chiave della cella"
    },
    {
        "id": "6045",
        "value": "Capelli di robin"
    },
    {
        "id": "6046",
        "value": "Testa di pigface"
    },
    {
        "id": "6047",
        "value": "Documenti falsi dell'inquisizione dei De Mordrey"
    },
    {
        "id": "6048",
        "value": "Documenti autentici dell'inquisizione dei De Mordrey"
    },
    {
        "id": "6049",
        "value": "Arma forgiata mascarelliana"
    },
    {
        "id": "6050",
        "value": "Taglia l'orecchio del predone"
    },
    {
        "id": "6051",
        "value": "Prelievi fiscali"
    },
    {
        "id": "6052",
        "value": "Opera d'arte elfica"
    },
    {
        "id": "6053",
        "value": "Chiave"
    },
    {
        "id": "6054",
        "value": "Erbe medicamentose magiche"
    },
    {
        "id": "6055",
        "value": "Anello dello schiavo (non equipaggiabile)"
    },
    {
        "id": "6056",
        "value": "Merci"
    },
    {
        "id": "6057",
        "value": "Merci contrabbandate segrete"
    },
    {
        "id": "6058",
        "value": "Lettera di sangue degli assassini"
    },
    {
        "id": "6059",
        "value": "Chiave della stanza"
    },
    {
        "id": "6060",
        "value": "Comunicazione dell'assassino"
    },
    {
        "id": "6061",
        "value": "Chiave della cella"
    },
    {
        "id": "6062",
        "value": "Opera d'arte"
    },
    {
        "id": "6063",
        "value": "Ferro grezzo"
    },
    {
        "id": "6064",
        "value": "Comunicazione dell'assassino"
    },
    {
        "id": "6065",
        "value": "Documenti segreti del Ronin"
    },
    {
        "id": "6066",
        "value": "Contratto disangue degli assassini"
    },
    {
        "id": "6067",
        "value": "Diario del sicario"
    },
    {
        "id": "6068",
        "value": "Antidoto degli elfi oscuri"
    },
    {
        "id": "6069",
        "value": "Testa dell'elfo oscuro assetato di sangue"
    },
    {
        "id": "6070",
        "value": "Portacipria della mamma"
    },
    {
        "id": "6071",
        "value": "Runa del portale"
    },
    {
        "id": "6072",
        "value": "Pietra runica del portale demoniaco"
    },
    {
        "id": "6073",
        "value": "Diamante enorme"
    },
    {
        "id": "6074",
        "value": "Stuzzicadenti draconiano"
    },
    {
        "id": "6075",
        "value": "Orbus dracus, vuoto"
    },
    {
        "id": "6076",
        "value": "Orbus dracus, pieno"
    },
    {
        "id": "6077",
        "value": "Sistema nervoso del ragno gigante"
    },
    {
        "id": "6078",
        "value": "Chiave di maghi"
    },
    {
        "id": "6079",
        "value": "Chiave della prigione"
    },
    {
        "id": "6080",
        "value": "Antidoto"
    },
    {
        "id": "6081",
        "value": "Whisky (Botte)"
    },
    {
        "id": "6082",
        "value": "Fiore del cespuglio argentato"
    },
    {
        "id": "6083",
        "value": "Cervello di mostro trasudante"
    },
    {
        "id": "6084",
        "value": "Cervello di mostro tremolante"
    },
    {
        "id": "6085",
        "value": "Cervello di mostro viscido"
    },
    {
        "id": "6086",
        "value": "Cervello di mostro"
    },
    {
        "id": "6087",
        "value": "Uovo di drago"
    },
    {
        "id": "6088",
        "value": "Comunicazione del soldato morto"
    },
    {
        "id": "6089",
        "value": "Squama di drago"
    },
    {
        "id": "6090",
        "value": "Uovo di drago di Alkazaba noc Draco"
    },
    {
        "id": "6091 - 6092",
        "value": "Legami magici"
    },
    {
        "id": "6093",
        "value": "Leva"
    },
    {
        "id": "6094",
        "value": "Whisky (Bottiglia)"
    },
    {
        "id": "6095 - 6099",
        "value": "-"
    },
    {
        "id": "6100",
        "value": "Lettera per il sergente Treville"
    },
    {
        "id": "6101",
        "value": "Chiave della prigione"
    },
    {
        "id": "6102",
        "value": "Anello del barone DeMordrey"
    },
    {
        "id": "6103",
        "value": "Tubo dell'acqua"
    },
    {
        "id": "6104",
        "value": "Corno del demone"
    },
    {
        "id": "6105",
        "value": "Elemento dell'aria"
    },
    {
        "id": "6106",
        "value": "Elemento della terra"
    },
    {
        "id": "6107",
        "value": "Elemento dell'acqua"
    },
    {
        "id": "6108",
        "value": "Elemento del fuoco"
    },
    {
        "id": "6109",
        "value": "Elemento del vuoto"
    },
    {
        "id": "6110",
        "value": "Il libro nero di Sakkara"
    },
    {
        "id": "6111",
        "value": "Diario di Shaddar"
    },
    {
        "id": "6112",
        "value": "Il cuore d'oro di ancaria"
    },
    {
        "id": "6113",
        "value": "Il cuore impuro di ancaria"
    },
    {
        "id": "6114",
        "value": "(senza nome...)"
    },
    {
        "id": "6115 - 6499",
        "value": "-"
    }
]

const scenic_effects = [
    {
        "id": "925",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "926",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "927",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "928",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "929",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "930",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "931",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "932",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "933",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "934",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "935",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "936",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "937",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "938",
        "value": "<noname> (pezzo d'osso)"
    },
    {
        "id": "939",
        "value": "-"
    },
    {
        "id": "940",
        "value": "<noname> (pezzo nero di qualcosa)"
    },
    {
        "id": "941",
        "value": "<noname> (pezzo nero di qualcosa)"
    },
    {
        "id": "942",
        "value": "<noname> (pezzo nero di qualcosa)"
    },
    {
        "id": "943",
        "value": "<noname> (pezzo nero di qualcosa)"
    },
    {
        "id": "944",
        "value": "<noname> (pezzo nero di qualcosa)"
    },
    {
        "id": "945",
        "value": "<noname> (pezzo nero\\oro di qualcosa)"
    },
    {
        "id": "946",
        "value": "<noname> (pezzo nero di qualcosa)"
    },
    {
        "id": "947",
        "value": "<noname> (pezzo nero\\oro di qualcosa)"
    },
    {
        "id": "948",
        "value": "<noname> (pezzo nero di qualcosa)"
    },
    {
        "id": "949",
        "value": "<noname> (pezzo nero di qualcosa)"
    },
    {
        "id": "950",
        "value": "<noname> (osso nero?)"
    },
    {
        "id": "951",
        "value": "<noname> (osso nero?)"
    },
    {
        "id": "952",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "953",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "954",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "955",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "956",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "957",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "958",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "959",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "960",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "961",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "962",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "963",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "964",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "965",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "966",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "967",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "968",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "969",
        "value": "<noname> (pezzo di cassa toracica)"
    },
    {
        "id": "970",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "971",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "972",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "973",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "974",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "975",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "976",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "977",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "978",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "979",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "980",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "981",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "982",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "983",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "984",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "985",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "986",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "987",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "988",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "989",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "990",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "991",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "992",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "993",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "994",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "995",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "996",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "997",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "998",
        "value": "<noname> (pezzo di qualcosa)"
    },
    {
        "id": "999",
        "value": "<noname> (pezzo di qualcosa)"
    }
]

const various_equipment = [
    {
        "id": "6500 - 6513",
        "value": "Tunica da battaglia imbottita"
    },
    {
        "id": "6514",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6515 - 6516",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6517",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6518 - 6519",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6520",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6521 - 6522",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6523",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6524 - 6525",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6526 - 6528",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6529 - 6543",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6544 - 6588",
        "value": "Armatura metallica"
    },
    {
        "id": "6559 - 6573",
        "value": "tenuta da battaglia imbottita"
    },
    {
        "id": "6574",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6575 - 6576",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6577",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6578 - 6579",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6580",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6581 - 6582",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6583",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6584 - 6585",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6586 - 6588",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6589 - 6603",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6604 - 6608",
        "value": "Cotta di maglia"
    },
    {
        "id": "6609 - 6623",
        "value": "Armatura metallica"
    },
    {
        "id": "6624 - 6638",
        "value": "Armature di piastre metalliche"
    },
    {
        "id": "6639 - 6653",
        "value": "Tenuta da battaglia imbottita"
    },
    {
        "id": "6654",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6655 - 6656",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6657",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6658 - 6659",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6660",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6661 - 6662",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6663",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6664 - 6665",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6666 - 6668",
        "value": "bardatura in cuoio"
    },
    {
        "id": "6669 - 6683",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6684 - 6688",
        "value": "Cotta di maglia"
    },
    {
        "id": "6689 - 6703",
        "value": "Armatura metallica"
    },
    {
        "id": "6704 - 6718",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6718 - 6733",
        "value": "Tunica da battaglia imbottita"
    },
    {
        "id": "6734",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6735",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6736",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6737",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6738",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6739",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6740",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6741",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6742",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6743",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6744",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6745",
        "value": "Tenuta da battaglia in cuoio"
    },
    {
        "id": "6746",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6747",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6748",
        "value": "Bardatura in cuoio"
    },
    {
        "id": "6749",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6750",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6751",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6752",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6753",
        "value": "Pelle di rettile"
    },
    {
        "id": "6754",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6755",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6756",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6757",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6758",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6759",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6760",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6761",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6762",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6763",
        "value": "Pelle di salamandra"
    },
    {
        "id": "6764",
        "value": "Armatura in maglia metallica"
    },
    {
        "id": "6765",
        "value": "Armatura in maglia metallica"
    },
    {
        "id": "6766",
        "value": "Armatura in maglia metallica"
    },
    {
        "id": "6767",
        "value": "Armatura in maglia metallica"
    },
    {
        "id": "6768",
        "value": "Armatura in maglia metallica"
    },
    {
        "id": "6769",
        "value": "Armatura metallica"
    },
    {
        "id": "6770",
        "value": "Armatura metallica"
    },
    {
        "id": "6771",
        "value": "Armatura metallica"
    },
    {
        "id": "6772",
        "value": "Armatura metallica"
    },
    {
        "id": "6773",
        "value": "Armatura metallica"
    },
    {
        "id": "6774",
        "value": "Armatura metallica"
    },
    {
        "id": "6775",
        "value": "Armatura metallica"
    },
    {
        "id": "6776",
        "value": "Armatura metallica"
    },
    {
        "id": "6777",
        "value": "Armatura metallica"
    },
    {
        "id": "6778",
        "value": "Armatura metallica"
    },
    {
        "id": "6779",
        "value": "Armatura metallica"
    },
    {
        "id": "6780",
        "value": "Armatura metallica"
    },
    {
        "id": "6781",
        "value": "Armatura metallica"
    },
    {
        "id": "6782",
        "value": "Armatura metallica"
    },
    {
        "id": "6783",
        "value": "Armatura metallica"
    },
    {
        "id": "6784",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6785",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6786",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6787",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6788",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6789",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6790",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6791",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6792",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6793",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6794",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6795",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6796",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6797",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6798",
        "value": "Armatura di piastre metalliche"
    },
    {
        "id": "6799",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6800",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6801",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6802",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6803",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6804",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6805",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6806",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6807",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6808",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6809",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6810",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6811",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6812",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6813",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6814",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6815",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6816",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6817",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6818",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6819",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6820",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6821",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6822",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6823",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6824",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6825",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6826",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6827",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6828",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6829",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6830",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6831",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6832",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6833",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6834",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6835",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6836",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6837",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6838",
        "value": "Copricapo in cuoio"
    },
    {
        "id": "6839",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6839",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6840",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6841",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6842",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6843",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6844",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6845",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6846",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6847",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6848",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6849",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6850",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6851",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6852",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6853",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6854",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6855",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6856",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6857",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6858",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6859",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6860",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6861",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6862",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6863",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6864",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6865",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6866",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6867",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6868",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6869",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6870",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6871",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6872",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6873",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6874",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6875",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6876",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6877",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6878",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6879",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6880",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6881",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6882",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6883",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6884",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6885",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6886",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6887",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6888",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6889",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6890",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6891",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6892",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6893",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6894",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6895",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6896",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6897",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6898",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6899",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6900",
        "value": "Elmo in cuoio"
    },
    {
        "id": "6901",
        "value": "Elmo"
    },
    {
        "id": "6902",
        "value": "Elmo"
    },
    {
        "id": "6903",
        "value": "Elmo"
    },
    {
        "id": "6904",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6905",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6906",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6907",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6908",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6909",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6910",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6911",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6912",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6913",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6914",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6915",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6916",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6917",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6918",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6919",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6920",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6921",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6922",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6923",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6924",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6925",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6926",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6927",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6928",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6929",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6930",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6931",
        "value": "Elmo metallico leggero"
    },
    {
        "id": "6932",
        "value": "Elmo metallico"
    },
    {
        "id": "6933",
        "value": "Elmo metallico"
    },
    {
        "id": "6934",
        "value": "Elmo metallico"
    },
    {
        "id": "6935",
        "value": "Elmo metallico"
    },
    {
        "id": "6936",
        "value": "Elmo metallico"
    },
    {
        "id": "6937",
        "value": "Elmo metallico"
    },
    {
        "id": "6938",
        "value": "Elmo metallico"
    },
    {
        "id": "6939",
        "value": "Elmo metallico"
    },
    {
        "id": "6940",
        "value": "Elmo metallico"
    },
    {
        "id": "6941",
        "value": "Elmo metallico"
    },
    {
        "id": "6942",
        "value": "Elmo metallico"
    },
    {
        "id": "6943",
        "value": "Elmo metallico"
    },
    {
        "id": "6944",
        "value": "Elmo metallico"
    },
    {
        "id": "6945",
        "value": "Elmo metallico"
    },
    {
        "id": "6946",
        "value": "Elmo metallico"
    },
    {
        "id": "6947",
        "value": "Elmo metallico"
    },
    {
        "id": "6948",
        "value": "Elmo metallico"
    },
    {
        "id": "6949",
        "value": "Elmo metallico"
    },
    {
        "id": "6950",
        "value": "Elmo metallico"
    },
    {
        "id": "6951",
        "value": "Elmo metallico"
    },
    {
        "id": "6952",
        "value": "Elmo metallico"
    },
    {
        "id": "6953",
        "value": "Elmo metallico"
    },
    {
        "id": "6954",
        "value": "Elmo metallico"
    },
    {
        "id": "6955",
        "value": "Elmo metallico"
    },
    {
        "id": "6956",
        "value": "Elmo metallico"
    },
    {
        "id": "6957",
        "value": "Elmo metallico"
    },
    {
        "id": "6958",
        "value": "Elmo metallico"
    },
    {
        "id": "6959",
        "value": "Elmo metallico"
    },
    {
        "id": "6960",
        "value": "Elmo metallico"
    },
    {
        "id": "6961",
        "value": "Elmo metallico"
    },
    {
        "id": "6962",
        "value": "Elmo metallico"
    },
    {
        "id": "6963",
        "value": "Elmo metallico"
    },
    {
        "id": "6964",
        "value": "Elmo metallico"
    },
    {
        "id": "6965",
        "value": "Elmo metallico"
    },
    {
        "id": "6966",
        "value": "Elmo metallico"
    },
    {
        "id": "6967",
        "value": "Elmo metallico"
    },
    {
        "id": "6968",
        "value": "Elmo metallico"
    },
    {
        "id": "6969",
        "value": "Elmo metallico"
    },
    {
        "id": "6970",
        "value": "Elmo metallico"
    },
    {
        "id": "6971",
        "value": "Elmo metallico"
    },
    {
        "id": "6972",
        "value": "Elmo metallico"
    },
    {
        "id": "6973",
        "value": "Elmo metallico"
    },
    {
        "id": "6974",
        "value": "Elmo metallico"
    },
    {
        "id": "6975",
        "value": "Elmo metallico"
    },
    {
        "id": "6976",
        "value": "Elmo metallico"
    },
    {
        "id": "6977",
        "value": "Elmo metallico"
    },
    {
        "id": "6978",
        "value": "Elmo metallico"
    },
    {
        "id": "6979",
        "value": "Elmo metallico"
    },
    {
        "id": "6980",
        "value": "Elmo metallico"
    },
    {
        "id": "6981",
        "value": "Elmo metallico"
    },
    {
        "id": "6982",
        "value": "Elmo metallico"
    },
    {
        "id": "6983",
        "value": "Elmo metallico"
    },
    {
        "id": "6984",
        "value": "Elmo metallico"
    },
    {
        "id": "6985",
        "value": "Elmo metallico"
    },
    {
        "id": "6986",
        "value": "Elmo metallico"
    },
    {
        "id": "6987",
        "value": "Elmo metallico"
    },
    {
        "id": "6988",
        "value": "Elmo metallico"
    },
    {
        "id": "6989",
        "value": "Elmo metallico"
    },
    {
        "id": "6990",
        "value": "Elmo metallico"
    },
    {
        "id": "6991",
        "value": "Elmo metallico"
    },
    {
        "id": "6992",
        "value": "Elmo metallico"
    },
    {
        "id": "6993",
        "value": "Elmo metallico"
    },
    {
        "id": "6994",
        "value": "Elmo metallico"
    },
    {
        "id": "6994",
        "value": "Arco corto"
    },
    {
        "id": "6995",
        "value": "Arco corto"
    },
    {
        "id": "6996",
        "value": "Arco corto"
    },
    {
        "id": "6997",
        "value": "Arco corto"
    },
    {
        "id": "6998",
        "value": "Arco corto"
    },
    {
        "id": "6999",
        "value": "Arco corto"
    },
    {
        "id": "7000",
        "value": "Arco corto"
    },
    {
        "id": "7001",
        "value": "Arco corto"
    },
    {
        "id": "7002",
        "value": "Arco corto"
    },
    {
        "id": "7003",
        "value": "Arco corto"
    },
    {
        "id": "7004",
        "value": "Arco corto"
    },
    {
        "id": "7005",
        "value": "Arco corto"
    },
    {
        "id": "7006",
        "value": "Arco corto"
    },
    {
        "id": "7007",
        "value": "Arco corto"
    },
    {
        "id": "7008",
        "value": "Arco corto"
    },
    {
        "id": "7009",
        "value": "Arco del Ranger di ghiaccio"
    },
    {
        "id": "7010",
        "value": "Arco di pelliccia del Ranger"
    },
    {
        "id": "7011",
        "value": "Arco del Ranger magico"
    },
    {
        "id": "7012",
        "value": "Arco del veleno del Ranger"
    },
    {
        "id": "7013",
        "value": "Arco in ferro del Ranger"
    },
    {
        "id": "7014",
        "value": "Arco di pelliccia del Ranger"
    },
    {
        "id": "7015",
        "value": "Arco del Ranger magico"
    },
    {
        "id": "7016",
        "value": "Arco del veleno del Ranger"
    },
    {
        "id": "7017",
        "value": "Arco in ferro del Ranger"
    },
    {
        "id": "7018",
        "value": "Arco di pelliccia del Ranger"
    },
    {
        "id": "7019",
        "value": "Arco del Ranger magico"
    },
    {
        "id": "7020",
        "value": "Arco del veleno del Ranger"
    },
    {
        "id": "7021",
        "value": "Arco del Ranger d'oro"
    },
    {
        "id": "7022",
        "value": "Arco di fuoco del Ranger"
    },
    {
        "id": "7023",
        "value": "Arco del Ranger magico"
    },
    {
        "id": "7024",
        "value": "Arco del veleno del Ranger"
    },
    {
        "id": "7025",
        "value": "Arco del Ranger d'oro"
    },
    {
        "id": "7026",
        "value": "Arco del Ranger impetuoso"
    },
    {
        "id": "7027",
        "value": "Arco del Ranger magico"
    },
    {
        "id": "7028",
        "value": "Arco del veleno del Ranger"
    },
    {
        "id": "7029",
        "value": "Arco del Ranger d'oro"
    },
    {
        "id": "7030",
        "value": "Arco del Ranger impetuoso"
    },
    {
        "id": "7031",
        "value": "Arco del Ranger magico"
    },
    {
        "id": "7032",
        "value": "Arco del veleno del Ranger"
    },
    {
        "id": "7033",
        "value": "Arco del Ranger d'oro"
    },
    {
        "id": "7034",
        "value": "Arco del Ranger impetuoso"
    },
    {
        "id": "7035",
        "value": "Arco in ferro del Ranger"
    },
    {
        "id": "7036",
        "value": "Arco di pelliccia del Ranger"
    },
    {
        "id": "7037",
        "value": "Arco del Ranger magico"
    },
    {
        "id": "7038",
        "value": "Arco del veleno del Ranger"
    },
    {
        "id": "7039",
        "value": "Arco in ferro del Ranger"
    },
    {
        "id": "7040",
        "value": "Arco di pelliccia del Ranger"
    },
    {
        "id": "7041",
        "value": "Arco del Ranger magico"
    },
    {
        "id": "7042",
        "value": "Arco del veleno del Ranger"
    },
    {
        "id": "7043",
        "value": "Arco in ferro del Ranger"
    },
    {
        "id": "7044",
        "value": "Arco di pelliccia del Ranger"
    },
    {
        "id": "7045",
        "value": "Arco del Ranger magico"
    },
    {
        "id": "7046",
        "value": "Arco del veleno del Ranger"
    },
    {
        "id": "7047",
        "value": "Arco del Ranger d'oro"
    },
    {
        "id": "7048",
        "value": "Arco del Ranger accecante"
    },
    {
        "id": "7049",
        "value": "Arco del Ranger magico"
    },
    {
        "id": "7050",
        "value": "Arco del veleno del Ranger"
    },
    {
        "id": "7051",
        "value": "Arco del Ranger d'oro"
    },
    {
        "id": "7052",
        "value": "Arco di fuoco del Ranger"
    },
    {
        "id": "7053",
        "value": "Arco del Ranger magico"
    },
    {
        "id": "7054",
        "value": "Arco del veleno del Ranger"
    },
    {
        "id": "7055",
        "value": "Arco del Ranger d'oro"
    },
    {
        "id": "7056",
        "value": "Arco di fuoco del Ranger"
    },
    {
        "id": "7057",
        "value": "Arco del Ranger magico"
    },
    {
        "id": "7058",
        "value": "Arco del veleno del Ranger"
    },
    {
        "id": "7059",
        "value": "Arco del Ranger d'oro"
    },
    {
        "id": "7060",
        "value": "Arco del Ranger impetuoso"
    },
    {
        "id": "7061",
        "value": "Arco elfico magico"
    },
    {
        "id": "7062",
        "value": "Arco elfico magico"
    },
    {
        "id": "7063",
        "value": "Arco elfico magico"
    },
    {
        "id": "7064",
        "value": "Arco elfico magico"
    },
    {
        "id": "7065",
        "value": "Arco elfico magico"
    },
    {
        "id": "7066",
        "value": "Arco elfico magico"
    },
    {
        "id": "7067",
        "value": "Arco elfico magico"
    },
    {
        "id": "7068",
        "value": "Arco elfico magico"
    },
    {
        "id": "7069",
        "value": "Arco elfico magico"
    },
    {
        "id": "7070",
        "value": "Arco elfico magico"
    },
    {
        "id": "7071",
        "value": "Arco elfico magico"
    },
    {
        "id": "7072",
        "value": "Arco elfico magico"
    },
    {
        "id": "7073",
        "value": "Arco elfico magico"
    },
    {
        "id": "7074",
        "value": "Arco elfico magico"
    },
    {
        "id": "7075",
        "value": "Arco elfico magico"
    },
    {
        "id": "7076",
        "value": "Arco elfico magico"
    },
    {
        "id": "7077",
        "value": "Arco elfico magico"
    },
    {
        "id": "7078",
        "value": "Arco elfico magico"
    },
    {
        "id": "7079",
        "value": "Arco elfico magico"
    },
    {
        "id": "7080",
        "value": "Arco elfico magico"
    },
    {
        "id": "7081",
        "value": "Arco elfico magico"
    },
    {
        "id": "7082",
        "value": "Arco elfico magico"
    },
    {
        "id": "7083",
        "value": "Arco elfico magico"
    },
    {
        "id": "7084",
        "value": "Arco elfico magico"
    },
    {
        "id": "7085",
        "value": "Arco elfico magico"
    },
    {
        "id": "7086",
        "value": "Arco elfico magico"
    },
    {
        "id": "7087",
        "value": "Ira degli alberi [*]"
    },
    {
        "id": "7088",
        "value": "Alito della morte [*]"
    },
    {
        "id": "7089",
        "value": "Danza mortale di Sylia [*]"
    },
    {
        "id": "7090",
        "value": "Fratello del sonno [*]"
    },
    {
        "id": "7091",
        "value": "Replica di Fert [*]"
    },
    {
        "id": "7092",
        "value": "Succhiasangue di Raisor [*]"
    },
    {
        "id": "7093",
        "value": "Martello cacciaelfi [*]"
    },
    {
        "id": "7094",
        "value": "Pietà di Lord Wayne [*]"
    },
    {
        "id": "7095",
        "value": "Diplomazia di Infestor [*]"
    },
    {
        "id": "7096",
        "value": "Difensore di Adorno [*]"
    },
    {
        "id": "7097",
        "value": "Maschera di Ulukai [*]"
    },
    {
        "id": "7098",
        "value": "Fedele seguito di Mireille [*]"
    },
    {
        "id": "7099",
        "value": "Bufalo d'acqua [*]"
    },
    {
        "id": "7100",
        "value": "Pentacolo di Cubbi [*]"
    },
    {
        "id": "7101",
        "value": "Corona di Laurelin [*]"
    },
    {
        "id": "7102",
        "value": "Armatura di ghiaccio di Rhion [*]"
    },
    {
        "id": "7103",
        "value": "Parastinchi di Nightchild [*]"
    },
    {
        "id": "7104",
        "value": "Datore di vita di Huron [*]"
    },
    {
        "id": "7105",
        "value": "Quiete di Crackseed [*]"
    },
    {
        "id": "7106",
        "value": "Carica di Striker [*]"
    },
    {
        "id": "7107",
        "value": "Obiezione di Sir Richfield [*]"
    },
    {
        "id": "7108",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7109",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7110",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7111",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7112",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7113",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7114",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7115",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7116",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7117",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7118",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7119",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7120",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7121",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7122",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7123",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7124",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7125",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7126",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7127",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7128",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7129",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7130",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7131",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7132",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7133",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7134",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7135",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7136",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7137",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7138",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7139",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7140",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7141",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7142",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7143",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7144",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7145",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7146",
        "value": "Guanti in cuoio"
    },
    {
        "id": "7147",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7148",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7149",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7150",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7151",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7152",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7153",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7154",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7155",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7156",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7157",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7158",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7159",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7160",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7161",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7162",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7163",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7164",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7165",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7166",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7167",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7168",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7169",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7170",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7171",
        "value": "Guanti d'arme in cuoio"
    },
    {
        "id": "7172",
        "value": "Pugnale magico rotondo dei Non-morti"
    },
    {
        "id": "7173",
        "value": "Lingua biforcuta avvelenata"
    },
    {
        "id": "7174",
        "value": "Cacciatore di Goblin del Ranger"
    },
    {
        "id": "7175",
        "value": "Falce impetuosa"
    },
    {
        "id": "7176",
        "value": "Dente magico della dotrina delle armi"
    },
    {
        "id": "7177",
        "value": "Pugnale all'arsenico dei fantasmi della foresta"
    },
    {
        "id": "7178",
        "value": "Falce dell'energia"
    },
    {
        "id": "7179",
        "value": "Falce della tempra impetuosa"
    },
    {
        "id": "7180",
        "value": "Falce magica del disarmo"
    },
    {
        "id": "7181",
        "value": "Pugnale del Serafino agonizzante"
    },
    {
        "id": "7182",
        "value": "Lingua di rettile di Siegfried"
    },
    {
        "id": "7183",
        "value": "Cacciatore di Goblin fiammeggiante"
    },
    {
        "id": "7184",
        "value": "Pugnale largo delle sorelle di Raab"
    },
    {
        "id": "7185",
        "value": "Re-formica"
    },
    {
        "id": "7186",
        "value": "Pugnale largo preciso"
    },
    {
        "id": "7187",
        "value": "Spada corta del leopardo"
    },
    {
        "id": "7188",
        "value": "Cercatore di cuori"
    },
    {
        "id": "7189",
        "value": "Lama impetuosa"
    },
    {
        "id": "7190",
        "value": "Tagliatore di ombre"
    },
    {
        "id": "7191",
        "value": "Lama appesa furiosa"
    },
    {
        "id": "7192",
        "value": "Fendi-armature"
    },
    {
        "id": "7193",
        "value": "Acciaio nero della lussuria"
    },
    {
        "id": "7194",
        "value": "Vento notturno dell'arte schermidora"
    },
    {
        "id": "7195",
        "value": "Vento notturno della guarigione"
    },
    {
        "id": "7196",
        "value": "Spada lunga veloce"
    },
    {
        "id": "7197",
        "value": "Spada lunga del riposo"
    },
    {
        "id": "7198",
        "value": "Lama magica"
    },
    {
        "id": "7199",
        "value": "Spada lunga penetrante"
    },
    {
        "id": "7200",
        "value": "SPada lunga precisa del maestro"
    },
    {
        "id": "7201",
        "value": "Lama turbinante degli angeli"
    },
    {
        "id": "7202",
        "value": "Abito avvelenato degli dei"
    },
    {
        "id": "7203",
        "value": "Lingua vibrante dell'angelo"
    },
    {
        "id": "7204",
        "value": "Spada lunga benedetta"
    },
    {
        "id": "7205",
        "value": "Lama veloce dell'angelo"
    },
    {
        "id": "7206",
        "value": "Raggio medicamentoso dell'angelo"
    },
    {
        "id": "7207",
        "value": "Spada lunga impetuosa"
    },
    {
        "id": "7208",
        "value": "Animus Apperatus [*]"
    },
    {
        "id": "7209",
        "value": "Acciaio del negromante Dragosanis [*]"
    },
    {
        "id": "7210",
        "value": "Spada lunga luminosa del Vampiro"
    },
    {
        "id": "7211",
        "value": "Spada lunga del Vampiro"
    },
    {
        "id": "7212",
        "value": "Spada lunga del Vampiro"
    },
    {
        "id": "7213",
        "value": "Spada della vanità"
    },
    {
        "id": "7214",
        "value": "Sterminatore di tombe dell'odio"
    },
    {
        "id": "7215",
        "value": "Magol en agar [*]"
    },
    {
        "id": "7216",
        "value": "Cacciatore di Vlad [*]"
    },
    {
        "id": "7217",
        "value": "Spada del Vampito della luce lunare"
    },
    {
        "id": "7218",
        "value": "Spada vampiresca rigenerante"
    },
    {
        "id": "7219",
        "value": "Dente del Vampiro P'Trol's [*]"
    },
    {
        "id": "7220",
        "value": "Spada lunga magica del Vampiro"
    },
    {
        "id": "7221",
        "value": "Morso del Vampiro"
    },
    {
        "id": "7222",
        "value": "Spada lunga dei negromanti"
    },
    {
        "id": "7223",
        "value": "Spada lunga del Vampiro danzante"
    },
    {
        "id": "7224",
        "value": "Spada lunga del Vampiro sanguinante"
    },
    {
        "id": "7225",
        "value": "Acciaio protettivo del Vampiro"
    },
    {
        "id": "7226",
        "value": "Spada lunga ardente"
    },
    {
        "id": "7227",
        "value": "Spada lunga della brama di sangue"
    },
    {
        "id": "7228",
        "value": "Spada lunga del Vampiro"
    },
    {
        "id": "7229",
        "value": "Arma a due mani delle ombre notturne"
    },
    {
        "id": "7230",
        "value": "Lama precisa a due mani dei Vampiri"
    },
    {
        "id": "7231",
        "value": "Spada a due mani di lezione del Vampito"
    },
    {
        "id": "7232",
        "value": "Arma a due mani di Vlad"
    },
    {
        "id": "7233",
        "value": "Spada a due mani avvelenata delle Arti di combattimento"
    },
    {
        "id": "7234",
        "value": "Arma protettiva a due mani"
    },
    {
        "id": "7235",
        "value": "Arma luminosa a due mani da battaglia del Vampiro"
    },
    {
        "id": "7236",
        "value": "Lama a due mani della battaglia indolore"
    },
    {
        "id": "7237",
        "value": "Spada a due mani del Drago dell'eviscerazione totale"
    },
    {
        "id": "7238",
        "value": "Spada a due mani leggera"
    },
    {
        "id": "7239",
        "value": "Incantesimo dell'angelo"
    },
    {
        "id": "7240",
        "value": "Sciabola veloce del Serafino"
    },
    {
        "id": "7241",
        "value": "Sciabola dell'attacco divino"
    },
    {
        "id": "7242",
        "value": "Affettatrice rapida"
    },
    {
        "id": "7243",
        "value": "Affettatrice rapida dell'illuminazione"
    },
    {
        "id": "7244",
        "value": "Laceratrice medicamentosa della regina"
    },
    {
        "id": "7245",
        "value": "Laceratrice vivace delle sorelle Raab"
    },
    {
        "id": "7246",
        "value": "Anello di bronzo"
    },
    {
        "id": "7247",
        "value": "Anello d'argento"
    },
    {
        "id": "7248",
        "value": "Anello d'oro"
    },
    {
        "id": "7249",
        "value": "Anello sigillo di bronzo"
    },
    {
        "id": "7250",
        "value": "Anello sigillo d'argento"
    },
    {
        "id": "7251",
        "value": "Anello sigillo d'oro"
    },
    {
        "id": "7252",
        "value": "Anello sigillo d'oro"
    },
    {
        "id": "7253",
        "value": "Anello di pinguite e bronzo"
    },
    {
        "id": "7254",
        "value": "Anello di acquamarina e argento"
    },
    {
        "id": "7255",
        "value": "Anello di ganite e oro"
    },
    {
        "id": "7256",
        "value": "Anello di ametista e bronzo"
    },
    {
        "id": "7257",
        "value": "Anello di quarzo e argento"
    },
    {
        "id": "7258",
        "value": "Anello di tanzanite e oro"
    },
    {
        "id": "7259",
        "value": "Anello di crisoprasio e bronzo"
    },
    {
        "id": "7260",
        "value": "Anello di berillio e argento"
    },
    {
        "id": "7261",
        "value": "Anello di acrinolite e oro"
    },
    {
        "id": "7262",
        "value": "Anello di bronzo veloce"
    },
    {
        "id": "7263",
        "value": "Anello d'argento dei vagabondi"
    },
    {
        "id": "7264",
        "value": "Anello d'oro rigeneratore"
    },
    {
        "id": "7265",
        "value": "Anello sigillo di bronzo forte"
    },
    {
        "id": "7266",
        "value": "Anello d'argento resistente"
    },
    {
        "id": "7267",
        "value": "Anello sigillo rinfrescante"
    },
    {
        "id": "7268",
        "value": "Anello sigillo d'oro pungente"
    },
    {
        "id": "7269",
        "value": "Pinguite della concentrazione magica"
    },
    {
        "id": "7270",
        "value": "Acquamarina della rigenerazione magica"
    },
    {
        "id": "7271",
        "value": "Anello di ganite lampeggiante"
    },
    {
        "id": "7272",
        "value": "Ametista elegante"
    },
    {
        "id": "7273",
        "value": "Quarzo impetuoso"
    },
    {
        "id": "7274",
        "value": "Anello in tanzanite e oro dell'abilità"
    },
    {
        "id": "7275",
        "value": "Crisoprasio degli adulatori"
    },
    {
        "id": "7276",
        "value": "Beryll of Poisonbites (La volontà di tradurre era già passata?)"
    },
    {
        "id": "7277",
        "value": "Actinolite della giovinezza"
    },
    {
        "id": "7278",
        "value": "Anello di bronzo delle ferite"
    },
    {
        "id": "7279",
        "value": "Anello d'argento furioso"
    },
    {
        "id": "7280",
        "value": "Anello d'oro della forza"
    },
    {
        "id": "7281",
        "value": "Pinguite della meditazione"
    },
    {
        "id": "7282",
        "value": "Acquamarina della dottrina magica"
    },
    {
        "id": "7283",
        "value": "Anello di ganite magico"
    },
    {
        "id": "7284",
        "value": "Ametista brillante"
    },
    {
        "id": "7285",
        "value": "Crisoprasio agonizzante"
    },
    {
        "id": "7286",
        "value": "Anello di diamante dei cieli"
    },
    {
        "id": "7287",
        "value": "Acquamarina della luna"
    },
    {
        "id": "7288",
        "value": "Ganite dell'arte magica"
    },
    {
        "id": "7289",
        "value": "Ametista scintillante della dottrina delle armi"
    },
    {
        "id": "7290",
        "value": "Crisoprasio avvelenato"
    },
    {
        "id": "7291",
        "value": "Anello di bronzo veloce"
    },
    {
        "id": "7292",
        "value": "Anello d'argento della pace in battaglia"
    },
    {
        "id": "7293",
        "value": "Anello d'oro forte"
    },
    {
        "id": "7294",
        "value": "Anello di bronzo resistente"
    },
    {
        "id": "7295",
        "value": "Sigillo di bronzo di Vlad"
    },
    {
        "id": "7296",
        "value": "Sigillo di Herhut"
    },
    {
        "id": "7297",
        "value": "Anello sigillo d'oro dei corridori"
    },
    {
        "id": "7298",
        "value": "Anello di pinguite e bronzo della meditazione"
    },
    {
        "id": "7299",
        "value": "Acquamarina lampeggiante della fretta"
    },
    {
        "id": "7300",
        "value": "Anello di ganite dei maestri"
    },
    {
        "id": "7301",
        "value": "Ametista del boscaiolo"
    },
    {
        "id": "7302",
        "value": "Quarzo dell'oscurità"
    },
    {
        "id": "7303",
        "value": "Tanzanite d'oro della lava"
    },
    {
        "id": "7304",
        "value": "Anello di crisoprasio e bronzo dell'agonia"
    },
    {
        "id": "7305",
        "value": "Berillio audace"
    },
    {
        "id": "7306",
        "value": "Lama avvelenata di actinolite"
    },
    {
        "id": "7307",
        "value": "Anello di bronzo forte"
    },
    {
        "id": "7308",
        "value": "Anello d'argento del riposo"
    },
    {
        "id": "7309",
        "value": "Anello d'oro resistente"
    },
    {
        "id": "7310",
        "value": "Pinguite della tradizione magica"
    },
    {
        "id": "7311",
        "value": "Acquamarina del riposo magico"
    },
    {
        "id": "7312",
        "value": "Ganite della meditazione"
    },
    {
        "id": "7313",
        "value": "Ametista della capacità"
    },
    {
        "id": "7314",
        "value": "Crisoprasio ingannevole"
    },
    {
        "id": "7315",
        "value": "Diamante di ghiaccio"
    },
    {
        "id": "7316",
        "value": "Acquamarina magica della dottrina delle armi"
    },
    {
        "id": "7317",
        "value": "Ganite delle maree oceaniche"
    },
    {
        "id": "7318",
        "value": "Ametista dei morti"
    },
    {
        "id": "7319",
        "value": "Crisocrasio abile"
    },
    {
        "id": "7320",
        "value": "Perdizione di Kerub [*]"
    },
    {
        "id": "7321",
        "value": "Crisoprasio d'oro di Tarik [*]"
    },
    {
        "id": "7322",
        "value": "Crisoprasio di Swann [*]"
    },
    {
        "id": "7323",
        "value": "Crisoprasio dell'oscurità"
    },
    {
        "id": "7324",
        "value": "Crisoprasio dei boschi"
    },
    {
        "id": "7325",
        "value": "Crisoprasio delle lune del sangue"
    },
    {
        "id": "7326",
        "value": "Anello di bronzo rigenerante delle Arti di combattimento"
    },
    {
        "id": "7327",
        "value": "Anello d'argento del potere"
    },
    {
        "id": "7328",
        "value": "Anello d'oro della resistenza"
    },
    {
        "id": "7329",
        "value": "Anello di bronzo dell'energia vitale"
    },
    {
        "id": "7330",
        "value": "Sigillo dell'impazienza"
    },
    {
        "id": "7331",
        "value": "Anello sigillo d'oro delle salme cavalcanti"
    },
    {
        "id": "7332",
        "value": "Anello sigillo d'oro dei cavalieri"
    },
    {
        "id": "7333",
        "value": "Pinguite elegante"
    },
    {
        "id": "7334",
        "value": "Acquamarina delle nubi"
    },
    {
        "id": "7335",
        "value": "Anello di granito rigeneratore"
    },
    {
        "id": "7336",
        "value": "Ametista della parata"
    },
    {
        "id": "7337",
        "value": "Quarzo della mazza"
    },
    {
        "id": "7338",
        "value": "Tanzanite elegante"
    },
    {
        "id": "7339",
        "value": "Anello di crisoprasio e bronzo dell'agonia"
    },
    {
        "id": "7340",
        "value": "Berillio che porta agonia"
    },
    {
        "id": "7341",
        "value": "Actinolite lusinghiera"
    },
    {
        "id": "7342",
        "value": "Anello di bronzo veloce"
    },
    {
        "id": "7343",
        "value": "Anello d'argento della forza"
    },
    {
        "id": "7344",
        "value": "Anello d'oro della fisica"
    },
    {
        "id": "7345",
        "value": "Pinguite silenziosa"
    },
    {
        "id": "7346",
        "value": "Acquamarina della pace magica"
    },
    {
        "id": "7347",
        "value": "Ganite ghiacciata"
    },
    {
        "id": "7348",
        "value": "Ametista bollente"
    },
    {
        "id": "7349",
        "value": "Crisoprasio logorante"
    },
    {
        "id": "7350",
        "value": "Diamante del cielo illuminato di stelle"
    },
    {
        "id": "7351",
        "value": "Acquamarina magica degli archi"
    },
    {
        "id": "7352",
        "value": "Ganite del Mago"
    },
    {
        "id": "7353",
        "value": "Ametista del guardiano della morte"
    },
    {
        "id": "7354",
        "value": "Ladro di armi avido"
    },
    {
        "id": "7355",
        "value": "Pugno di Kerub [*]"
    },
    {
        "id": "7356",
        "value": "Crisoprasio dell'acciaio"
    },
    {
        "id": "7357",
        "value": "Crisoprasio di Nix [*]"
    },
    {
        "id": "7358",
        "value": "Crisoprasio di Dexter [*]"
    },
    {
        "id": "7359",
        "value": "Crisoprasio lunare"
    },
    {
        "id": "7360",
        "value": "Crisoprasio dei guerrieri sanguinari"
    },
    {
        "id": "7361",
        "value": "Anello di bronzo"
    },
    {
        "id": "7362",
        "value": "Anello d'argento"
    },
    {
        "id": "7363",
        "value": "Anello d'oro"
    },
    {
        "id": "7364",
        "value": "Anello d'oro"
    },
    {
        "id": "7365",
        "value": "Anello di bronzo in riposo"
    },
    {
        "id": "7366",
        "value": "Anello d'argento doloroso"
    },
    {
        "id": "7367",
        "value": "Anello d'oro della velocità"
    },
    {
        "id": "7368",
        "value": "Anello sigillo flessibile"
    },
    {
        "id": "7369",
        "value": "Anello sigillo della battaglia abile"
    },
    {
        "id": "7370",
        "value": "Anello sigillo della dottrina della spada"
    },
    {
        "id": "7371",
        "value": "Anello sigillo protettivo"
    },
    {
        "id": "7372",
        "value": "Pinguite elegante"
    },
    {
        "id": "7373",
        "value": "Acquamarina del fulmine"
    },
    {
        "id": "7374",
        "value": "Anello in ganite a doppio taglio"
    },
    {
        "id": "7375",
        "value": "Ametista delle fiamme"
    },
    {
        "id": "7376",
        "value": "Quarzo elegante"
    },
    {
        "id": "7377",
        "value": "Ascia di magma di tanzanite"
    },
    {
        "id": "7378",
        "value": "Crisoprasio della fuga"
    },
    {
        "id": "7379",
        "value": "Berillio velenoso"
    },
    {
        "id": "7380",
        "value": "Actinolite del disarmo"
    },
    {
        "id": "7381",
        "value": "Anello di bronzo penetrante"
    },
    {
        "id": "7382",
        "value": "Anello d'argento medicamentoso"
    },
    {
        "id": "7383",
        "value": "Anello d'oro della conoscenza"
    },
    {
        "id": "7384",
        "value": "Pinguite silenziosa"
    },
    {
        "id": "7385",
        "value": "Acquamarina delle ferite magiche"
    },
    {
        "id": "7386",
        "value": "Ganite elegante"
    },
    {
        "id": "7387",
        "value": "Ametista dei cacciatori di Elfi"
    },
    {
        "id": "7388",
        "value": "Crisoprasio della costituzione"
    },
    {
        "id": "7389",
        "value": "Diamante dei fantasmi dei boschi"
    },
    {
        "id": "7390",
        "value": "Acquamarina illuminata"
    },
    {
        "id": "7391",
        "value": "Ganite elegante"
    },
    {
        "id": "7392",
        "value": "Ametista dei pugni volanti"
    },
    {
        "id": "7393",
        "value": "Crisoprasio sanguinario"
    },
    {
        "id": "7394",
        "value": "Sigillo dorato dei coltelli doppi"
    },
    {
        "id": "7395",
        "value": "Crisoprasio dell'accetta"
    },
    {
        "id": "7396",
        "value": "Crisoprasio dell'acqua"
    },
    {
        "id": "7397",
        "value": "Crisoprasio di Dexter [*]"
    },
    {
        "id": "7398",
        "value": "Crisoprasio degli Elfi silvani"
    },
    {
        "id": "7399",
        "value": "Crisoprasio dei capi oscuri"
    },
    {
        "id": "7400",
        "value": "Anello di bronzo della fretta"
    },
    {
        "id": "7401",
        "value": "Anello d'argento potente"
    },
    {
        "id": "7402",
        "value": "Anello d'oro dell'agitazione"
    },
    {
        "id": "7403",
        "value": "Anello d'oro resistente"
    },
    {
        "id": "7404",
        "value": "Pinguite meditativa"
    },
    {
        "id": "7405",
        "value": "Acquamarina dell'impatto"
    },
    {
        "id": "7406",
        "value": "Ganite istruttiva"
    },
    {
        "id": "7407",
        "value": "Crisoprasio del disarmo"
    },
    {
        "id": "7408",
        "value": "Crisoprasio della costituzione"
    },
    {
        "id": "7409",
        "value": "Crisoprasio della conoscenza"
    },
    {
        "id": "7410",
        "value": "Ametista delle pietre"
    },
    {
        "id": "7411",
        "value": "Ametista della saggezza"
    },
    {
        "id": "7412",
        "value": "Ametista dell'attacco"
    },
    {
        "id": "7413",
        "value": "Pinguite meditativa"
    },
    {
        "id": "7414",
        "value": "Acquamarina della saggezza"
    },
    {
        "id": "7415",
        "value": "Ganite del cielo trapunto di stelle"
    },
    {
        "id": "7416",
        "value": "Ametista di Tulsa [*]"
    },
    {
        "id": "7417",
        "value": "Ametista impetuosa"
    },
    {
        "id": "7418",
        "value": "Ametista esplosiva"
    },
    {
        "id": "7419",
        "value": "Crisoprasio abile"
    },
    {
        "id": "7420",
        "value": "Crisoprasio delle armi"
    },
    {
        "id": "7421",
        "value": "Crisoprasio dell'aria dei boschi"
    },
    {
        "id": "7422",
        "value": "Acquiamarina magica"
    },
    {
        "id": "7423",
        "value": "Ganite dell'energia vitale"
    },
    {
        "id": "7424",
        "value": "Minerale della guarigione"
    },
    {
        "id": "7425",
        "value": "Ametista dei pugni dell'eroe"
    },
    {
        "id": "7426",
        "value": "Rubino della parata"
    },
    {
        "id": "7427",
        "value": "Crisoprasio smussato"
    },
    {
        "id": "7428",
        "value": "Anello di onice"
    },
    {
        "id": "7429",
        "value": "Anello di diopside"
    },
    {
        "id": "7430",
        "value": "Anello di acquamarina e argento"
    },
    {
        "id": "7431",
        "value": "Ganite d'argento"
    },
    {
        "id": "7432",
        "value": "Anello di pinguite e argento"
    },
    {
        "id": "7433",
        "value": "Anello di ametista e argento"
    },
    {
        "id": "7434",
        "value": "Anello di rubino e argento"
    },
    {
        "id": "7435",
        "value": "Anello di crisoprasio e argento"
    },
    {
        "id": "7436",
        "value": "Anello di onice e argento"
    },
    {
        "id": "7437",
        "value": "Anello di diopside e argento"
    },
    {
        "id": "7438",
        "value": "Anello di acquamarina e oro"
    },
    {
        "id": "7439",
        "value": "Anello di ganite e oro"
    },
    {
        "id": "7440",
        "value": "Anello di pinguite e oro"
    },
    {
        "id": "7441",
        "value": "Anello di ametista e oro"
    },
    {
        "id": "7442",
        "value": "Anello di rubino e oro"
    },
    {
        "id": "7443",
        "value": "Anello di crisoprasio e oro"
    },
    {
        "id": "7444",
        "value": "Anello di onice e oro"
    },
    {
        "id": "7445",
        "value": "Anello di bronzo dei corridori"
    },
    {
        "id": "7446",
        "value": "Anello d'argento forte"
    },
    {
        "id": "7447",
        "value": "Anello d'oro doloroso"
    },
    {
        "id": "7448",
        "value": "Anello sigillo delle spade"
    },
    {
        "id": "7449",
        "value": "Anello sigillo rigeneratore"
    },
    {
        "id": "7450",
        "value": "Anello sigillo della dottrina della spada"
    },
    {
        "id": "7451",
        "value": "Anello del sigillo pungente"
    },
    {
        "id": "7452",
        "value": "Pinguite santa"
    },
    {
        "id": "7453",
        "value": "Acquamarina della terra"
    },
    {
        "id": "7454",
        "value": "Anello in granito di protezione"
    },
    {
        "id": "7455",
        "value": "Ametista delle fiamme"
    },
    {
        "id": "7456",
        "value": "Quarzo scintillante"
    },
    {
        "id": "7457",
        "value": "Tanzanite della battaglia elegante"
    },
    {
        "id": "7458",
        "value": "Crisoprasio dell'imboscata"
    },
    {
        "id": "7459",
        "value": "Berillio velenoso"
    },
    {
        "id": "7460",
        "value": "Actinolite dei cavalieri"
    },
    {
        "id": "7461",
        "value": "Anello di bronzo penetrante"
    },
    {
        "id": "7462",
        "value": "Anello d'argento tagliente"
    },
    {
        "id": "7463",
        "value": "Anello d'oro della forza"
    },
    {
        "id": "7464",
        "value": "Pinguite silenziosa"
    },
    {
        "id": "7465",
        "value": "Acquamarina della pace magica"
    },
    {
        "id": "7466",
        "value": "Ganite elegante"
    },
    {
        "id": "7467",
        "value": "Ametista dei cieli"
    },
    {
        "id": "7468",
        "value": "Crisoprasio dell'agilità"
    },
    {
        "id": "7469",
        "value": "Diamante della forza dell'angelo"
    },
    {
        "id": "7470",
        "value": "Acquamarina illuminata"
    },
    {
        "id": "7471",
        "value": "Ganite elegante"
    },
    {
        "id": "7472",
        "value": "Ametista della concentrazione"
    },
    {
        "id": "7473",
        "value": "Crisoprasio sanguinario"
    },
    {
        "id": "7474",
        "value": "Anello sigillo d'oro desgli accoltellatori"
    },
    {
        "id": "7475",
        "value": "Crisoprasio dei randelli"
    },
    {
        "id": "7476",
        "value": "Crisoprasio della terra"
    },
    {
        "id": "7477",
        "value": "Crisoprasio degli Elfi oscuri"
    },
    {
        "id": "7478",
        "value": "Crisoprasio della luna"
    },
    {
        "id": "7479",
        "value": "Crisoprasio della brama di sangue"
    },
    {
        "id": "7480",
        "value": "Anello della fretta"
    },
    {
        "id": "7481",
        "value": "Anello d'argento potente"
    },
    {
        "id": "7482",
        "value": "Anello d'oro della fretta"
    },
    {
        "id": "7483",
        "value": "Anello d'oro pungente"
    },
    {
        "id": "7484",
        "value": "Pinguite abile"
    },
    {
        "id": "7485",
        "value": "Acquamarina della Pelle fiammeggiante"
    },
    {
        "id": "7486",
        "value": "Ganite istruttiva"
    },
    {
        "id": "7487",
        "value": "Crisoprasio delle asce"
    },
    {
        "id": "7488",
        "value": "Crisoprasio della concentrazione"
    },
    {
        "id": "7489",
        "value": "Crisoprasio della consocenza"
    },
    {
        "id": "7490",
        "value": "Ametista della balistica"
    },
    {
        "id": "7491",
        "value": "Ametista del combattimento con le spade"
    },
    {
        "id": "7492",
        "value": "Ametista della costituzione"
    },
    {
        "id": "7493",
        "value": "Pinguite meditativa della magia dell'aria"
    },
    {
        "id": "7494",
        "value": "Acquamarina della saggezza"
    },
    {
        "id": "7495",
        "value": "Ganite dell'arte magica"
    },
    {
        "id": "7496",
        "value": "Ametista delle asce"
    },
    {
        "id": "7497",
        "value": "Ametista dell'agilità"
    },
    {
        "id": "7498",
        "value": "Ametista delle lame"
    },
    {
        "id": "7499",
        "value": "Crisoprasio abile"
    },
    {
        "id": "7500",
        "value": "Crisoprasio delle armi"
    },
    {
        "id": "7501",
        "value": "Crisoprasio dell'aria dei boschi"
    },
    {
        "id": "7502",
        "value": "Acquamarina magica"
    },
    {
        "id": "7503",
        "value": "Ganite della guarigione naturale"
    },
    {
        "id": "7504",
        "value": "Pinguite ghiacciata"
    },
    {
        "id": "7505",
        "value": "Ametista delle fiamme infernali"
    },
    {
        "id": "7506",
        "value": "Rubino della costituzione"
    },
    {
        "id": "7507",
        "value": "Crisoprasio dei ragni"
    },
    {
        "id": "7508",
        "value": "Anello di onice rispettoso"
    },
    {
        "id": "7509",
        "value": "Anello di diopside della conscentrazione"
    },
    {
        "id": "7510",
        "value": "Acquamarina dell'argento della terra"
    },
    {
        "id": "7511",
        "value": "Ganite d'argento della pace"
    },
    {
        "id": "7512",
        "value": "Anello di pinguite e argento dei cavalieri"
    },
    {
        "id": "7513",
        "value": "Anello di ametista argentato"
    },
    {
        "id": "7514",
        "value": "Anello elegante di rubino"
    },
    {
        "id": "7515",
        "value": "Anello di crisoprasio e argento"
    },
    {
        "id": "7516",
        "value": "Anello di onice e argento"
    },
    {
        "id": "7517",
        "value": "Anello di diopside e argento"
    },
    {
        "id": "7518",
        "value": "Anello d'oro e acquamarina della dottrina magica"
    },
    {
        "id": "7519",
        "value": "Anello e oro della meditazione"
    },
    {
        "id": "7520",
        "value": "Anello di pinguite e oro della magia celestiale"
    },
    {
        "id": "7521",
        "value": "Anello di ametista e oro"
    },
    {
        "id": "7522",
        "value": "Anello di rubino e oro delle lame"
    },
    {
        "id": "7523",
        "value": "Anello di crisoprasio e oro"
    },
    {
        "id": "7524",
        "value": "Cerchio di Arhles T'gaw [SET]"
    },
    {
        "id": "7525",
        "value": "Martello di Feac [SET]"
    },
    {
        "id": "7526",
        "value": "Scudo di Feac [SET]"
    },
    {
        "id": "7527",
        "value": "Arma a due mani potente di Lorgar [SET]"
    },
    {
        "id": "7528",
        "value": "Giudice di Dalmar [SET] (Classe di personaggio errata)"
    },
    {
        "id": "7529",
        "value": "Elmo con picca del cacciadraghi [SET]"
    },
    {
        "id": "7530",
        "value": "Cuoio del cacciadraghi [SET]"
    },
    {
        "id": "7531",
        "value": "Braccialetto dello sterminadraghi [SET]"
    },
    {
        "id": "7532",
        "value": "Calzatura robusta dello sterminadraghi [SET]"
    },
    {
        "id": "7533",
        "value": "Cintura del cacciadraghi [SET]"
    },
    {
        "id": "7534",
        "value": "Picca dello sterminadraghi [SET]"
    },
    {
        "id": "7535",
        "value": "Coltello dell'ira di Abdiel [SET]"
    },
    {
        "id": "7536",
        "value": "Lama della Fede di Astrala"
    },
    {
        "id": "7537",
        "value": "Mazzafrusto di Annouk [SET]"
    },
    {
        "id": "7538",
        "value": "Scudo metallico grande di Annouk [SET]"
    },
    {
        "id": "7539",
        "value": "Picca di Dalmar [SET]"
    },
    {
        "id": "7540",
        "value": "Spada sanguinaria di Recundis [SET]"
    },
    {
        "id": "7541",
        "value": "Scudo vampirico di Recundis [SET]"
    },
    {
        "id": "7542",
        "value": "Furia di Octanion [SET]"
    },
    {
        "id": "7543",
        "value": "Elmo di Polemide [SET]"
    },
    {
        "id": "7544",
        "value": "Armatura di Polemide [SET]"
    },
    {
        "id": "7545",
        "value": "Bracciali di Polemide [SET]"
    },
    {
        "id": "7546",
        "value": "Stivali corazzati di Polemide [SET]"
    },
    {
        "id": "7547",
        "value": "Arco del terrore di Polemide [SET]"
    },
    {
        "id": "7548",
        "value": "-"
    },
    {
        "id": "7549",
        "value": "-"
    },
    {
        "id": "7550",
        "value": "Sembianze feroci di Jacquaire [SET]"
    },
    {
        "id": "7551",
        "value": "Spacca-crani lacerante di Jacquaire [SET]"
    },
    {
        "id": "7552",
        "value": "Resistenza di ferro di Jacquaire [SET]"
    },
    {
        "id": "7553",
        "value": "Armatura dell'equilibrio di Jacquaire [SET]"
    },
    {
        "id": "7554",
        "value": "Fendente [*]"
    },
    {
        "id": "7555",
        "value": "Elmo di Israfael [SET]"
    },
    {
        "id": "7556",
        "value": "Stretta di Israfael [SET]"
    },
    {
        "id": "7557",
        "value": "Bracciali del comando di Israfael [SET]"
    },
    {
        "id": "7558",
        "value": "Gambiere di Israfael [SET]"
    },
    {
        "id": "7559",
        "value": "La collera di Israfael [SET]"
    },
    {
        "id": "7560",
        "value": "Lama di Bahamut [SET]"
    },
    {
        "id": "7561",
        "value": "Giudice di Kharg [SET]"
    },
    {
        "id": "7562",
        "value": "Bracciali di Cordell [SET]"
    },
    {
        "id": "7563",
        "value": "Corazza di Cordell [SET]"
    },
    {
        "id": "7564",
        "value": "Elmo di Cordell [SET]"
    },
    {
        "id": "7565",
        "value": "Gambiere di Cordell [SET]"
    },
    {
        "id": "7566",
        "value": "Pugnale di Cordell [SET]"
    },
    {
        "id": "7567",
        "value": "Fantasma di Dagowit [SET]"
    },
    {
        "id": "7568",
        "value": "Bracciali di Dagowit [SET]"
    },
    {
        "id": "7569",
        "value": "Ceppi di Dagowit [SET]"
    },
    {
        "id": "7570",
        "value": "Morsa di Dagowit [SET]"
    },
    {
        "id": "7571",
        "value": "Urgenza di Dagowit [SET]"
    },
    {
        "id": "7572",
        "value": "Fantasma di Dagowit [SET] (Arma)"
    },
    {
        "id": "7573",
        "value": "Armatura di Paternus [SET]"
    },
    {
        "id": "7574",
        "value": "Stivali di Paternus [SET]"
    },
    {
        "id": "7575",
        "value": "Cintura di Paternus [SET]"
    },
    {
        "id": "7576",
        "value": "Cappuccio di Paternus [SET]"
    },
    {
        "id": "7577",
        "value": "Spada di Paternus [SET]"
    },
    {
        "id": "7578",
        "value": "Spallacci di Cordell [SET]"
    },
    {
        "id": "7579",
        "value": "Albione [*] (Nome antico dell'inghilterra! Nominato in \"Re Artu\")"
    },
    {
        "id": "7580",
        "value": "Lama della forza di Astrala [SET]"
    },
    {
        "id": "7581",
        "value": "Lama dell'ira di Abdiel [*]"
    },
    {
        "id": "7582",
        "value": "Scudo di Paternus [SET]"
    },
    {
        "id": "7583",
        "value": "Cintura di Feac [SET]"
    },
    {
        "id": "7584",
        "value": "Custodia splendente di Ethan-Rhys [SET]"
    },
    {
        "id": "7585",
        "value": "Illusione brillante di Ethan-Rhys [SET]"
    },
    {
        "id": "7586",
        "value": "Protettore fidato di Ethan-Rhys [SET]"
    },
    {
        "id": "7587",
        "value": "Supporto robusto di Ethan-Rhys [SET]"
    },
    {
        "id": "7588",
        "value": "Forza cruenta di Ethan-Rhys [SET]"
    },
    {
        "id": "7589",
        "value": "Incantesimo ignobile di Ethan-Rhys [SET]"
    },
    {
        "id": "7590",
        "value": "Bastone maligno di Ethan-Rhys [SET] (spada)"
    },
    {
        "id": "7591",
        "value": "Armatura massiccia di piastre di Huron [SET]"
    },
    {
        "id": "7592",
        "value": "Corona oscura di Huron [SET]"
    },
    {
        "id": "7593",
        "value": "Baratro abissale di Huron [SET]"
    },
    {
        "id": "7594",
        "value": "Pilastri eterni di Huron [SET]"
    },
    {
        "id": "7595",
        "value": "Anello discreto di Huron [SET]"
    },
    {
        "id": "7596",
        "value": "Guardiano malvagio di Huron [SET]"
    },
    {
        "id": "7597",
        "value": "Piumeggio di Xrystal [SET]"
    },
    {
        "id": "7598",
        "value": "Cappuccio ornato di piume di Xrystal [SET]"
    },
    {
        "id": "7599",
        "value": "Scudo ornato di Xrystal [SET]"
    },
    {
        "id": "7600",
        "value": "Protettore incondizionale di Xrystal [SET]"
    },
    {
        "id": "7601",
        "value": "Gioielli preziosi di Xrystal [SET]"
    },
    {
        "id": "7602",
        "value": "Punta perforante di Xrystal [SET]"
    },
    {
        "id": "7603",
        "value": "Sventura onesta di Araelfi [SET]"
    },
    {
        "id": "7604",
        "value": "Vista di falco di Araelfi [SET]"
    },
    {
        "id": "7605",
        "value": "Magia ardente di Araelfi [SET]"
    },
    {
        "id": "7606",
        "value": "Piccolo aiutante di Araelfi [SET]"
    },
    {
        "id": "7607",
        "value": "Rivincita gloriosa di Araelfi [SET]"
    },
    {
        "id": "7608",
        "value": "Armatura magnifica di Mammon [SET]"
    },
    {
        "id": "7609",
        "value": "Turbante opulento di Mammon [SET]"
    },
    {
        "id": "7610",
        "value": "Luna pulsante di Mammon [SET]"
    },
    {
        "id": "7611",
        "value": "Fine definitiva di Mammon [SET]"
    },
    {
        "id": "7612",
        "value": "Salvaguardia di Mammon [SET]"
    },
    {
        "id": "7613",
        "value": "Usura di Mammon [SET]"
    },
    {
        "id": "7614",
        "value": "Veemenza di Byleth [SET]"
    },
    {
        "id": "7615",
        "value": "Bagliore di Byleth [SET]"
    },
    {
        "id": "7616",
        "value": "Muro di Byleth [SET]"
    },
    {
        "id": "7617",
        "value": "Pentacolo di Byleth [SET]"
    },
    {
        "id": "7618",
        "value": "Scintillio di Byleth [SET]"
    },
    {
        "id": "7619",
        "value": "Corpo di Blackstaff [SET]"
    },
    {
        "id": "7620",
        "value": "Occhio di Blackstaff [SET]"
    },
    {
        "id": "7621",
        "value": "Presa di Blackstaff [SET]"
    },
    {
        "id": "7622",
        "value": "Lombi di Blackstaff [SET]"
    },
    {
        "id": "7623",
        "value": "Arti di Blackstaff [SET]"
    },
    {
        "id": "7624",
        "value": "Tallone di Blackstaff [SET]"
    },
    {
        "id": "7625",
        "value": "Anima di Blackstaff [SET]"
    },
    {
        "id": "7626",
        "value": "Visiera di M'eg An-Enid [SET]"
    },
    {
        "id": "7627",
        "value": "Corazza magica di M'eg An-Enid [SET]"
    },
    {
        "id": "7628",
        "value": "Morsa guaritrice di M'eg An-Enid [SET]"
    },
    {
        "id": "7629",
        "value": "Stretta distruttrice di M'eg An-Enid [SET]"
    },
    {
        "id": "7630",
        "value": "Gambiere ghiacciate di M'eg An-Enid [SET]"
    },
    {
        "id": "7631",
        "value": "Calzature glaciali di M'eg An-Enid [SET]"
    },
    {
        "id": "7632",
        "value": "Cerchio di Lloraneth [SET]"
    },
    {
        "id": "7633",
        "value": "Corazza respingente di Lloraneth [SET]"
    },
    {
        "id": "7634",
        "value": "Bracciali conciati di Lloraneth [SET]"
    },
    {
        "id": "7635",
        "value": "Cinghia del giusto di Lloraneth [SET]"
    },
    {
        "id": "7636",
        "value": "Gambiere di pelliccia di Lloraneth [SET]"
    },
    {
        "id": "7637",
        "value": "Stivali di pellicia di Lloraneth [SET]"
    },
    {
        "id": "7638",
        "value": "Corazza inaccessibile per il petto di Arhles T'gaw [SET]"
    },
    {
        "id": "7639",
        "value": "Elmo alato di Arhles T'gaw [SET]"
    },
    {
        "id": "7640",
        "value": "Protezione di Arhles T'gaw [SET]"
    },
    {
        "id": "7641",
        "value": "Stivali robusti di Arhles T'gaw [SET]"
    },
    {
        "id": "7642",
        "value": "Bracciali misteriosi di Arhles T'gaw [SET]"
    },
    {
        "id": "7643",
        "value": "Armatura del rimore di E'sal Hy-Lef [SET]"
    },
    {
        "id": "7644",
        "value": "Elmo della paura di E'sal Hy-Lef [SET]"
    },
    {
        "id": "7645",
        "value": "Gambiere del terrore E'sal Hy-Lef [SET]"
    },
    {
        "id": "7646",
        "value": "Stivali dello spavento di E'sal Hy-Lef [SET]"
    },
    {
        "id": "7647",
        "value": "Bracciali dell'orrore di E'sal Hy-Lef [SET]"
    },
    {
        "id": "7648",
        "value": "Elmo impetuoso di Raane [SET]"
    },
    {
        "id": "7649",
        "value": "Spallacci gloriosi di Raane [SET]"
    },
    {
        "id": "7650",
        "value": "Corazza terrificante di Raane [SET]"
    },
    {
        "id": "7651",
        "value": "Tunica eroica di Raane [SET]"
    },
    {
        "id": "7652",
        "value": "Gambiere corazzate di Raane [SET]"
    },
    {
        "id": "7653",
        "value": "Stivali alti di Raane [SET]"
    },
    {
        "id": "7654",
        "value": "Smorfia contorta di Andiell [SET]"
    },
    {
        "id": "7655",
        "value": "Aculeo formidabie di Andiell [SET]"
    },
    {
        "id": "7656",
        "value": "Bracciale magnifico di Andiell [SET]"
    },
    {
        "id": "7657",
        "value": "Cotta di maglia sovrannaturale di Andiell [SET]"
    },
    {
        "id": "7658",
        "value": "Artigli titanici di Andiell [SET]"
    },
    {
        "id": "7659",
        "value": "Cappuccio dorato di Amarri [SET]"
    },
    {
        "id": "7660",
        "value": "Bracciali dell'incantesimo di Amarri [SET]"
    },
    {
        "id": "7661",
        "value": "Veste magica di Amarri [SET]"
    },
    {
        "id": "7662",
        "value": "Cintura della magia di Amarri [SET]"
    },
    {
        "id": "7663",
        "value": "Pantaloni dell'evocazione di Amarri [SET]"
    },
    {
        "id": "7664",
        "value": "Corno da battaglia di Relmin [SET]"
    },
    {
        "id": "7665",
        "value": "Guanti della durezza di Relmin [SET]"
    },
    {
        "id": "7666",
        "value": "Corazza duratura di Relmin [SET]"
    },
    {
        "id": "7667",
        "value": "Cintura del teletrasporto di Relmin [SET]"
    },
    {
        "id": "7668",
        "value": "Gambiere della riflessione di Relmin [SET]"
    },
    {
        "id": "7669",
        "value": "Pensieri oscuri di D'Brae'Sineltei [SET]"
    },
    {
        "id": "7670",
        "value": "Armatura della precisione di D'Brae'Sineltei [SET]"
    },
    {
        "id": "7671",
        "value": "Bracciali d'acciaio di D'Brae'Sineltei [SET]"
    },
    {
        "id": "7672",
        "value": "Fascia perentoria di D'Brae'Sineltei [SET]"
    },
    {
        "id": "7673",
        "value": "Gambiere avvolgenti di D'Brae'Sineltei [SET]"
    },
    {
        "id": "7674",
        "value": "Artigli veloci di D'Brae'Sineltei [SET]"
    },
    {
        "id": "7675",
        "value": "Parapolsi provetti di J'Dahn'Nielo [SET]"
    },
    {
        "id": "7676",
        "value": "Cinta della velocità di J'Dahn'Nielo [SET]"
    },
    {
        "id": "7677",
        "value": "Corazza elaborata di J'Dahn'Nielo [SET]"
    },
    {
        "id": "7678",
        "value": "Elmo della concentrazione di J'Dahn'Nielo [SET]"
    },
    {
        "id": "7679",
        "value": "Gambiere infallibili di J'Dahn'Nielo [SET]"
    },
    {
        "id": "7680",
        "value": "Stivali in pelle di J'Dahn'Nielo [SET]"
    },
    {
        "id": "7681",
        "value": "Spallacci dell'agilità di J'Dahn'Nielo [SET]"
    },
    {
        "id": "7682",
        "value": "Maschera misteriosa di Talia-Mel [SET]"
    },
    {
        "id": "7683",
        "value": "Corazza del potere di Talia-Mel [SET]"
    },
    {
        "id": "7684",
        "value": "Protezioni tenaci di Talia-Mel [SET]"
    },
    {
        "id": "7685",
        "value": "Polsiere ambiziose di Talia-Mel [SET]"
    },
    {
        "id": "7686",
        "value": "Cotta di maglia imponente di Talia-Mel [SET]"
    },
    {
        "id": "7687",
        "value": "Speroni della vendetta di Talia-Mel [SET]"
    },
    {
        "id": "7688",
        "value": "Lama ardente di Aarnum [SET]"
    },
    {
        "id": "7689",
        "value": "Orgoglio fendente di Aarnum [SET]"
    },
    {
        "id": "7690",
        "value": "Sete di sangue di Aarnum [SET]"
    },
    {
        "id": "7691",
        "value": "Ira adornata di Aarnum [SET]"
    },
    {
        "id": "7692",
        "value": "Ascia soclpita di Fadalmar [SET]"
    },
    {
        "id": "7693",
        "value": "Destino di Fadalmar [SET]"
    },
    {
        "id": "7694",
        "value": "Salvezza di Fadalmar [SET]"
    },
    {
        "id": "7695",
        "value": "Alito di fuoco di Fadalmar [SET]"
    },
    {
        "id": "7696",
        "value": "Arco elaborato di Ettol'Rahc-Notwen [SET]"
    },
    {
        "id": "7697",
        "value": "Cerchio mortale di Ettol'Rahc-Notwen [SET]"
    },
    {
        "id": "7698",
        "value": "Anello della ferocia di Ettol'Rahc-Notwen [SET]"
    },
    {
        "id": "7699",
        "value": "Fascia della rettitudine di Ettol'Rahc-Notwen [SET]"
    },
    {
        "id": "7700",
        "value": "Colpo della prudenza di Egill [SET]"
    },
    {
        "id": "7701",
        "value": "Anello del destino di Egill [SET]"
    },
    {
        "id": "7702",
        "value": "Decorazione penetrante di Egill [SET]"
    },
    {
        "id": "7703",
        "value": "Fascia della velocità di Egill [SET]"
    },
    {
        "id": "7704",
        "value": "Lancia dello spavento di Orla-Aisling [SET]"
    },
    {
        "id": "7705",
        "value": "Anello della scossa di Orla-Aisling [SET]"
    },
    {
        "id": "7706",
        "value": "Decorazione dell'esperienza di Orla-Aisling [SET]"
    },
    {
        "id": "7707",
        "value": "Fascia del combattimento di Orla-Aisling [SET]"
    },
    {
        "id": "7708",
        "value": "Asta di cobalto imperiosa di Solwemyr [SET]"
    },
    {
        "id": "7709",
        "value": "Anello straordinario di Solwemyr [SET]"
    },
    {
        "id": "7710",
        "value": "Fascia letale di Solwemyr [SET]"
    },
    {
        "id": "7711",
        "value": "Decorazione della virtù di Solwemyr [SET]"
    },
    {
        "id": "7712",
        "value": "Cappello della ferocia di Thodran Amfist [SET]"
    },
    {
        "id": "7713",
        "value": "Giubbotto robusto di Thodran Amfist [SET]"
    },
    {
        "id": "7714",
        "value": "Cuoio vendicativo di Thodran Amfist [SET]"
    },
    {
        "id": "7715",
        "value": "Cinghia salda di Thodran Amfist [SET]"
    },
    {
        "id": "7716",
        "value": "Martello della punizione di Thodran Amfist [SET] ()Classe di personaggio errata"
    },
    {
        "id": "7717",
        "value": "Decorazione fendente di Thodran Amfist [SET]"
    },
    {
        "id": "7718",
        "value": "Elmo di Goilomn Gilisfon [SET]"
    },
    {
        "id": "7719",
        "value": "Cotta di maglia leggera di Goilomn Gilisfon [SET]"
    },
    {
        "id": "7720",
        "value": "Cintura del dominio di Goilomn Gilisfon [SET]"
    },
    {
        "id": "7721",
        "value": "Guanti della gloria di Goilomn Gilisfon [SET]"
    },
    {
        "id": "7722",
        "value": "Stivali dell'attacco di Goilomn Gilisfon [SET]"
    },
    {
        "id": "7723",
        "value": "Spilla della diligenza di Goilomn Gilisfon [SET]"
    },
    {
        "id": "7724",
        "value": "Otturatore di Rideg Stumel [SET]"
    },
    {
        "id": "7725",
        "value": "Elmo previdente di Rideg Stumel [SET]"
    },
    {
        "id": "7726",
        "value": "Cotta di maglia piumata di Rideg Stumel [SET]"
    },
    {
        "id": "7727",
        "value": "Spallacci vigorosi di Rideg Stumel [SET]"
    },
    {
        "id": "7728",
        "value": "Cintura del riposo di Rideg Stumel [SET]"
    },
    {
        "id": "7729",
        "value": "Guanti della precisione di Rideg Stumel [SET]"
    },
    {
        "id": "7730",
        "value": "Cannone forgiato di Thar Eross [SET]"
    },
    {
        "id": "7731",
        "value": "Elmo ardente di Thar Eross [SET]"
    },
    {
        "id": "7732",
        "value": "Corazza dell'incudine di Thar Eross [SET]"
    },
    {
        "id": "7733",
        "value": "Cintura rapace di Thar Eross [SET]"
    },
    {
        "id": "7734",
        "value": "Guanti abili di Thar Eross [SET]"
    },
    {
        "id": "7735",
        "value": "Scudo respingente di Thar Eross [SET]"
    },
    {
        "id": "7736",
        "value": "Anello tenace di Thar Eross [SET]"
    },
    {
        "id": "7737",
        "value": "Obice fiammeggiante di Kabelrinte [SET]"
    },
    {
        "id": "7738",
        "value": "Elmo adamantino di Kabelrinte [SET]"
    },
    {
        "id": "7739",
        "value": "Corazza incrollabile di Kabelrinte [SET]"
    },
    {
        "id": "7740",
        "value": "Bracciale inflessibile di Kabelrinte [SET]"
    },
    {
        "id": "7741",
        "value": "Cintura implacabile di Kabelrinte [SET]"
    },
    {
        "id": "7742",
        "value": "Guanti equi di Kabelrinte [SET]"
    },
    {
        "id": "7743",
        "value": "Stivali della liberazione di Kabelrinte [SET]"
    },
    {
        "id": "7744",
        "value": "Ghigno di Dralkcib [SET]"
    },
    {
        "id": "7745",
        "value": "Zigomo di Dralkcib [SET]"
    },
    {
        "id": "7746",
        "value": "Carcassa di Dralkcib [SET]"
    },
    {
        "id": "7747",
        "value": "raggio di Dralkcib [SET]"
    },
    {
        "id": "7748",
        "value": "Artiglio di Dralkcib [SET]"
    },
    {
        "id": "7749",
        "value": "Fianchi di Dralkcib [SET]"
    },
    {
        "id": "7750",
        "value": "Ossa di Dralkcib [SET]"
    },
    {
        "id": "7751",
        "value": "Stivali artigliati di Dralkcib [SET]"
    },
    {
        "id": "7752",
        "value": "Protezione di Dralkcib [SET]"
    },
    {
        "id": "7753",
        "value": "Barbiglio di Dralkcib [SET]"
    },
    {
        "id": "7754",
        "value": "Salvataggio di Kleb-Dracad [SET]"
    },
    {
        "id": "7755",
        "value": "Guardiano di Kleb-Dracad [SET]"
    },
    {
        "id": "7756",
        "value": "Recupero di Kleb-Dracad [SET]"
    },
    {
        "id": "7757",
        "value": "Guarigione di Kleb-Dracad [SET]"
    },
    {
        "id": "7758",
        "value": "Risanamento di Kleb-Dracad [SET]"
    },
    {
        "id": "7759",
        "value": "Rinascita di Kleb-Dracad [SET]"
    },
    {
        "id": "7760",
        "value": "Resistenza Kleb-Dracad [SET]"
    },
    {
        "id": "7761",
        "value": "Cerchio profetico di Pandora [SET]"
    },
    {
        "id": "7762",
        "value": "Sperone malvagio di Pandora [SET]"
    },
    {
        "id": "7763",
        "value": "Corazza a scaglie di Pandora [SET]"
    },
    {
        "id": "7764",
        "value": "Bracciali rinforzati di Pandora [SET]"
    },
    {
        "id": "7765",
        "value": "Guanti snervanti di Pandora [SET]"
    },
    {
        "id": "7766",
        "value": "Cintura del parassismo di Pandora [SET]"
    },
    {
        "id": "7767",
        "value": "Gambiere versatili di Pandora [SET]"
    },
    {
        "id": "7768",
        "value": "Fascia del destino di Pandora [SET]"
    },
    {
        "id": "7769",
        "value": "Elmo di drago dell'infestazione di Taelon [SET]"
    },
    {
        "id": "7770",
        "value": "Corazza magica di Taelon [SET]"
    },
    {
        "id": "7771",
        "value": "Bracciali dell'agilità di Taelon [SET]"
    },
    {
        "id": "7772",
        "value": "Cintura della rigenerazione di Taelon [SET]"
    },
    {
        "id": "7773",
        "value": "Pantaloni chthoniano di Taelon [SET]"
    },
    {
        "id": "7774",
        "value": "Spada dell'esecuzione di Taelon [SET]"
    },
    {
        "id": "7775",
        "value": "Teschio offuscato di Draelokk [SET]"
    },
    {
        "id": "7776",
        "value": "Spalla forte di Draelokk [SET]"
    },
    {
        "id": "7777",
        "value": "Torso meraviglioso di Draelokk [SET]"
    },
    {
        "id": "7778",
        "value": "Braccia supplichevoli di Draelokk [SET]"
    },
    {
        "id": "7779",
        "value": "Mani schivanti di Draelokk [SET]"
    },
    {
        "id": "7780",
        "value": "Abbraccio letale di Draelokk [SET]"
    },
    {
        "id": "7781",
        "value": "Gambe perseveranti di Draelokk [SET]"
    },
    {
        "id": "7782",
        "value": "Piedi veloci di Draelokk [SET]"
    },
    {
        "id": "7783",
        "value": "Spallacci dell'angoscia di E'sal Hy-Lef [SET]"
    },
    {
        "id": "7784",
        "value": "Amuleto solare della fortuna"
    },
    {
        "id": "7785",
        "value": "Amuleto solare della fortuna"
    },
    {
        "id": "7786",
        "value": "Amuleto solare della fortuna"
    },
    {
        "id": "7787",
        "value": "Amuleto solare della fortuna"
    },
    {
        "id": "7788",
        "value": "Amuleto solare della fortuna"
    },
    {
        "id": "7789",
        "value": "Anima di Berenik [*]"
    },
    {
        "id": "7790",
        "value": "Anima di Berenik [*]"
    },
    {
        "id": "7791",
        "value": "Anima di Berenik [*]"
    },
    {
        "id": "7792",
        "value": "Anima di Berenik [*]"
    },
    {
        "id": "7793",
        "value": "Anima di Berenik [*]"
    },
    {
        "id": "7794",
        "value": "Anima di Berenik [*]"
    },
    {
        "id": "7795",
        "value": "Esilio di Quetzal [*]"
    },
    {
        "id": "7796",
        "value": "Esilio di Quetzal [*]"
    },
    {
        "id": "7797",
        "value": "Esilio di Quetzal [*]"
    },
    {
        "id": "7798",
        "value": "Esilio di Quetzal [*]"
    },
    {
        "id": "7799",
        "value": "Esilio di Quetzal [*]"
    },
    {
        "id": "7800",
        "value": "Briglia indurita"
    },
    {
        "id": "7801",
        "value": "Briglia di Braggi"
    },
    {
        "id": "7802",
        "value": "Guanti con punte"
    },
    {
        "id": "7803",
        "value": "Artigli di Niliss"
    },
    {
        "id": "7804",
        "value": "Guanti dell'esorcismo"
    },
    {
        "id": "7805",
        "value": "Guanti Borg"
    },
    {
        "id": "7806",
        "value": "Guanti corazzati"
    },
    {
        "id": "7807",
        "value": "Nocce risolute"
    },
    {
        "id": "7808",
        "value": "Guanti da combattimento"
    },
    {
        "id": "7809",
        "value": "Alidi Arhles T'Gaw [*]"
    },
    {
        "id": "7810",
        "value": "Paura dei draghi [*] (Classe di personaggio errata)"
    },
    {
        "id": "7811",
        "value": "Martello delle anime [*] (Classe di personaggio errata)"
    },
    {
        "id": "7812",
        "value": "Ascia distruttrice di demoni [*] (Classe di personaggio errata)"
    },
    {
        "id": "7813",
        "value": "Balestra unica [*]"
    },
    {
        "id": "7814",
        "value": "Balestra dell'Ade [*]"
    },
    {
        "id": "7815",
        "value": "Balestra cacciademoni [*]"
    },
    {
        "id": "7816",
        "value": "Revolver di Khandar [*]"
    },
    {
        "id": "7817",
        "value": "Pistola convincente di Dwena [*]"
    },
    {
        "id": "7818",
        "value": "Spoletta di Dwendorik [*]"
    },
    {
        "id": "7819",
        "value": "Fucile di Gjallar [*]"
    },
    {
        "id": "7820",
        "value": "Morchetto tonante di Sindir [*]"
    },
    {
        "id": "7821",
        "value": "Carabina di Vlyrhandor [*]"
    },
    {
        "id": "7822 - 7899",
        "value": "-"
    },
    {
        "id": "7900",
        "value": "Spada di ferro"
    },
    {
        "id": "7901",
        "value": "Lama della fretta"
    },
    {
        "id": "7902",
        "value": "Arco corto decorato"
    },
    {
        "id": "7903",
        "value": "Pugno affilato"
    },
    {
        "id": "7904",
        "value": "Bastone del Mago decorato"
    },
    {
        "id": "7905",
        "value": "Scudo rotondo"
    },
    {
        "id": "7906",
        "value": "Spada corta"
    },
    {
        "id": "7907",
        "value": "Guanti d'elfo"
    },
    {
        "id": "7908",
        "value": "Spada arrugginita"
    },
    {
        "id": "7909",
        "value": "Martello da battaglia dei nani"
    },
    {
        "id": "7910",
        "value": "-"
    },
    {
        "id": "7911",
        "value": "Medaglia all'onore di Ancaria"
    },
    {
        "id": "7912",
        "value": "Medaglia all'onore di Ancaria"
    },
    {
        "id": "7913",
        "value": "Medaglia all'onore di Ancaria"
    },
    {
        "id": "7914",
        "value": "Medaglia all'onore di Ancaria"
    },
    {
        "id": "7915",
        "value": "Medaglia all'onore di Ancaria"
    },
    {
        "id": "7916",
        "value": "Medaglia all'onore di Ancaria"
    },
    {
        "id": "7917",
        "value": "Medaglia all'onore di Ancaria"
    },
    {
        "id": "7918",
        "value": "Medaglia all'onore di Ancaria"
    },
    {
        "id": "7919",
        "value": "Sconfiggidemoni"
    },
    {
        "id": "7920",
        "value": "Cappuccio della follia"
    },
    {
        "id": "7921",
        "value": "Cappuccio della follia"
    },
    {
        "id": "7922",
        "value": "Cappuccio della follia"
    },
    {
        "id": "7923",
        "value": "Cappuccio della follia"
    },
    {
        "id": "7924",
        "value": "Cappuccio della follia"
    },
    {
        "id": "7925",
        "value": "Cappuccio della follia"
    },
    {
        "id": "7926",
        "value": "Cappuccio della follia"
    },
    {
        "id": "7927",
        "value": "Cappuccio della follia"
    },
    {
        "id": "7928 - 7967",
        "value": "-"
    },
    {
        "id": "7968",
        "value": "X-MAS (Arma)"
    },
    {
        "id": "7969",
        "value": "X-MAS (Scudo)"
    },
    {
        "id": "7970",
        "value": "X-MAS (Arma)"
    },
    {
        "id": "7971",
        "value": "X-MAS (Scudo)"
    },
    {
        "id": "7972",
        "value": "-"
    },
    {
        "id": "7973",
        "value": "-"
    },
    {
        "id": "7974",
        "value": "X-MAS (Arma)"
    },
    {
        "id": "7975",
        "value": "X-MAS (Scudo)"
    },
    {
        "id": "7976",
        "value": "X-MAS (Arma)"
    },
    {
        "id": "7977",
        "value": "X-MAS (Scudo)"
    },
    {
        "id": "7978",
        "value": "X-MAS (Arma)"
    },
    {
        "id": "7979",
        "value": "X-MAS (Scudo)"
    },
    {
        "id": "7980",
        "value": "Anello di Kay borbottante [*]"
    },
    {
        "id": "7981",
        "value": "Esilio del demonio"
    },
    {
        "id": "7982",
        "value": "Anello primitivo"
    },
    {
        "id": "7983",
        "value": "Anello antico"
    },
    {
        "id": "7984",
        "value": "Prova dell'anello (Arma)"
    },
    {
        "id": "7985",
        "value": "Cacciaorchetti crudele"
    },
    {
        "id": "7986",
        "value": "Cacciaelfi"
    },
    {
        "id": "7987",
        "value": "Spada larga perfezionata dal fabbro"
    },
    {
        "id": "7988",
        "value": "Spada larga migliorata dal fabbro"
    },
    {
        "id": "7989",
        "value": "Spada larga del fabbro"
    },
    {
        "id": "7990",
        "value": "Scudo d'acciaio divino"
    },
    {
        "id": "7991",
        "value": "Scudo d'acciaio eccezionale"
    },
    {
        "id": "7992",
        "value": "Scudo d'acciaio speciale"
    },
    {
        "id": "7993",
        "value": "Scudo d'acciaio migliorato"
    },
    {
        "id": "7994",
        "value": "Scudo d'acciaio del fabbro"
    },
    {
        "id": "7995",
        "value": "Armatura divina di pelle di rettile"
    },
    {
        "id": "7996",
        "value": "Armatura eccezionale di pelle di rettile"
    },
    {
        "id": "7997",
        "value": "Armatura speciale di pelle di rettile"
    },
    {
        "id": "7998",
        "value": "Armatura migliorata di pelle di rettile"
    },
    {
        "id": "7999",
        "value": "Armatura di pelle di rettile"
    },
    {
        "id": "8000",
        "value": "<noname> (Arti del fabbro 1 - Quelli che s'incastonano)"
    },
    {
        "id": "8001",
        "value": "<noname> (Arti del fabbro 1 - Quelli che s'incastonano)"
    },
    {
        "id": "8002",
        "value": "<noname> (Arti del fabbro 1 - Quelli che s'incastonano)"
    },
    {
        "id": "8003",
        "value": "<noname> (Arti del fabbro 1 - Quelli che s'incastonano)"
    },
    {
        "id": "8004",
        "value": "<noname> (Arti del fabbro 1 - Quelli che s'incastonano)"
    },
    {
        "id": "8005",
        "value": "<noname> (Arti del fabbro 1 - Quelli che s'incastonano)"
    },
    {
        "id": "8006",
        "value": "-"
    },
    {
        "id": "8007",
        "value": "-"
    },
    {
        "id": "8008",
        "value": "-"
    },
    {
        "id": "8009",
        "value": "-"
    },
    {
        "id": "8010",
        "value": "<noname> (Arti del fabbro 1 - Quelli che s'incastonano)"
    },
    {
        "id": "8011",
        "value": "<noname> (Arti del fabbro 1 - Quelli che s'incastonano)"
    },
    {
        "id": "8012",
        "value": "<noname> (Arti del fabbro 1 - Quelli che s'incastonano)"
    },
    {
        "id": "8013",
        "value": "<noname> (Arti del fabbro 1 - Quelli che s'incastonano)"
    },
    {
        "id": "8014",
        "value": "<noname> (Arti del fabbro 1 - Quelli che s'incastonano)"
    },
    {
        "id": "8015",
        "value": "<noname> (Arti del fabbro 1 - Quelli che s'incastonano)"
    },
    {
        "id": "8016",
        "value": "-"
    },
    {
        "id": "8017",
        "value": "-"
    },
    {
        "id": "8018",
        "value": "-"
    },
    {
        "id": "8019",
        "value": "-"
    },
    {
        "id": "8020",
        "value": "<noname> (Arti del fabbro 2 - Quelli che s'incastonano)"
    },
    {
        "id": "8021",
        "value": "<noname> (Arti del fabbro 2 - Quelli che s'incastonano)"
    },
    {
        "id": "8022",
        "value": "<noname> (Arti del fabbro 2 - Quelli che s'incastonano)"
    },
    {
        "id": "8023",
        "value": "<noname> (Arti del fabbro 2 - Quelli che s'incastonano)"
    },
    {
        "id": "8024",
        "value": "<noname> (Arti del fabbro 2 - Quelli che s'incastonano)"
    },
    {
        "id": "8025",
        "value": "<noname> (Arti del fabbro 2 - Quelli che s'incastonano)"
    },
    {
        "id": "8026",
        "value": "-"
    },
    {
        "id": "8027",
        "value": "-"
    },
    {
        "id": "8028",
        "value": "-"
    },
    {
        "id": "8029",
        "value": "-"
    },
    {
        "id": "8030",
        "value": "<noname> (Arti del fabbro 3 - Quelli che s'incastonano)"
    },
    {
        "id": "8031",
        "value": "<noname> (Arti del fabbro 3 - Quelli che s'incastonano)"
    },
    {
        "id": "8032",
        "value": "<noname> (Arti del fabbro 3 - Quelli che s'incastonano)"
    },
    {
        "id": "8033",
        "value": "<noname> (Arti del fabbro 3 - Quelli che s'incastonano)"
    },
    {
        "id": "8034",
        "value": "<noname> (Arti del fabbro 3 - Quelli che s'incastonano)"
    },
    {
        "id": "8035",
        "value": "<noname> (Arti del fabbro 3 - Quelli che s'incastonano)"
    },
    {
        "id": "8036",
        "value": "<noname> (Arti del fabbro 2 - Quelli che s'incastonano)"
    },
    {
        "id": "8037",
        "value": "<noname> (Arti del fabbro 2 - Quelli che s'incastonano)"
    },
    {
        "id": "8038",
        "value": "<noname> (Arti del fabbro 2 - Quelli che s'incastonano)"
    },
    {
        "id": "8039",
        "value": "<noname> (Arti del fabbro 2 - Quelli che s'incastonano)"
    },
    {
        "id": "8040",
        "value": "<noname> (Arti del fabbro 2 - Quelli che s'incastonano)"
    },
    {
        "id": "8041",
        "value": "<noname> (Arti del fabbro 2 - Quelli che s'incastonano)"
    },
    {
        "id": "8042",
        "value": "<noname> (Arti del fabbro ? - Quelli che s'incastonano)*"
    },
    {
        "id": "8043",
        "value": "<noname> (Arti del fabbro ? - Quelli che s'incastonano)*"
    },
    {
        "id": "8044",
        "value": "<noname> (Arti del fabbro ? - Quelli che s'incastonano)*"
    },
    {
        "id": "8045",
        "value": "<noname> (Arti del fabbro ? - Quelli che s'incastonano)*"
    },
    {
        "id": "8046",
        "value": "<noname> (Arti del fabbro ? - Quelli che s'incastonano)*"
    },
    {
        "id": "8047",
        "value": "<noname> (Arti del fabbro ? - Quelli che s'incastonano)*"
    },
    {
        "id": "8048 - 16022",
        "value": "-"
    }
]