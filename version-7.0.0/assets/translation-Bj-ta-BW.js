const a=`{
  "% Area": "% površine",
  "Activity": "Aktivnost",
  "Area": "Površina",
  "Area Within Plan": "Područje unutar plana",
  "Attributes": "Atributi",
  "Author(s)": "Autor(i)",
  "Boundary": "Granica",
  "Category": "Kategorija",
  "Class": "Klasa",
  "DataDownload - export CSV format label": "Izvezi CSV",
  "DataDownload - export JSON format label": "Izvezi JSON",
  "Description": "Opis",
  "Found Within Plan": "Pronađeno unutar plana",
  "Full protection level label": "puna",
  "Goal": "Cilj",
  "High protection level label": "visoko",
  "IUCN activity - aquaculture": "Akvakultura - mali razmjer",
  "IUCN activity - extraction": "Rudarstvo, vađenje nafte i plina",
  "IUCN activity - fishing sustainable": "Ribolov/sakupljanje: rekreacijski (održivi)",
  "IUCN activity - habitation": "Stanovanje",
  "IUCN activity - industrial fishing": "Industrijski ribolov, akvakultura industrijskih razmjera",
  "IUCN activity - local fishing": "Ribolov/sakupljanje: lokalni ribolov (održivo)",
  "IUCN activity - non-extractive": "Neekstraktivna rekreacija",
  "IUCN activity - renewable": "Proizvodnja obnovljive energije",
  "IUCN activity - research": "Istraživanje: neekstraktivno",
  "IUCN activity - research extractive": "Istraživanja: ekstraktivna",
  "IUCN activity - restoration": "Restauracija/poboljšanje iz drugih razloga",
  "IUCN activity - shipping": "dostava",
  "IUCN activity - tourism": "Veliki turizam visokog intenziteta",
  "IUCN activity - traditional fishing": "Tradicijski ribolov/sakupljanje",
  "IUCN activity - traditional use": "Tradicionalna uporaba: neekstraktivna",
  "IUCN activity - untreated water": "Ispuštanje nepročišćene vode",
  "IUCN activity - works": "Radovi (luke, luke, jaružanje)",
  "IUCN category - none": "Nijedan",
  "IUCN category 1a": "Strogi rezervat prirode",
  "IUCN category 1b": "Područje divljine",
  "IUCN category 2": "Nacionalni park",
  "IUCN category 2 or 3": "Nacionalni park ili prirodni spomenik/značajka",
  "IUCN category 3": "Prirodni spomenik ili obilježje",
  "IUCN category 4": "Područje upravljanja staništima/vrstama",
  "IUCN category 4 or 6": "Područje upravljanja staništem/vrstom ili zaštićeno područje s održivim korištenjem",
  "IUCN category 5": "Zaštićeni krajolik/morski krajolik",
  "IUCN category 6": "Zaštićeno područje s održivim korištenjem",
  "IUCN protection level full": "puna",
  "IUCN protection level high": "visoko",
  "IUCN protection level low": "Niska",
  "IUCN rank - no description": "Ne",
  "IUCN rank - shorthand label for no": "N",
  "IUCN rank - shorthand label for no, with extra meaning": "N*",
  "IUCN rank - shorthand label for yes": "Y",
  "IUCN rank - shorthand label for yes, with extra meaning": "Y*",
  "IUCN rank - special 'variable' description": "Varijabilna; ovisi o tome može li se ovom aktivnošću upravljati na takav način da je kompatibilna s ciljevima MPA",
  "IUCN rank - special no description": "Općenito ne, jak prerogativ protiv osim u posebnim okolnostima",
  "IUCN rank - special yes description": "Da jer ne postoji alternativa, ali potrebno je posebno odobrenje",
  "IUCN rank - yes description": "Da",
  "km²": "km²",
  "Learn more": "Saznajte više",
  "Map": "Karta",
  "MPA": "MPA",
  "Protection Level": "Razina zaštite",
  "ReportError - message part 1": "Nešto je pošlo po zlu. Zatvorite ovo izvješće i pokušajte ponovo.",
  "ReportError - message part 2": "Ako se pogreška nastavi javljati.",
  "Representation": "Reprezentacija",
  "ResultsCard - no result message": "Izvještaj je dovršen, ali nema rezultata",
  "Show by MPA": "Show by MPA",
  "Size": "Veličina",
  "SizeCard - introduction": "nacionalne vode protežu se od obale do 200 nautičkih milja, poznate kao isključiva gospodarska zona (EEZ). Ovo izvješće sažima preklapanje plana za pučinu s EEZ-om i drugim granicama unutar njega, mjereći napredak prema postizanju ciljeva % za svaku granicu.",
  "SizeCard - learn more": "<0> Ovo izvješće sažima veličinu i udio ovog plana unutar ovih granica.</0><p>Ako se granice MPA preklapaju jedna s drugom, preklapanje se broji samo jednom.</p>",
  "SizeCard - learn more source": "Izvor: Wikipedia – Teritorijalne vode",
  "SizeCard sketch size message": "Ova skica ima <2>{{area}}</2> kvadratnih kilometara",
  "SizeCard title": "Veličina zone",
  "Target": "Cilj",
  "Value": "Vrijednost",
  "Viability": "Održivost",
  "(Not answered)": "(Bez odgovora)",
  "% Within Plan": "% unutar plana",
  "Results not found": "Rezultati nisu pronađeni",
  "Exclusive Economic Zone\\n(0-200 nautical miles)": "Isključivi gospodarski pojas\\n(0-200 nautičkih milja)",
  "Land": "Zemljište",
  "Nearshore\\n(0-12 nautical miles)": "Nearshore\\n(0-12 nautičkih milja)",
  "Offshore\\n(12-200 nautical miles)": "Offshore\\n(12-200 nautičkih milja)",
  "Shoreline": "Obala",
  "# MPAs": "# MPA",
  "% Area Within Plan": "% površine unutar plana",
  "30x30 Objective": "30x30 Objektiv",
  "Bioregions": "Bioregije",
  "Bioregions - learn more": "<p>ℹ️ Pregled:</p><p>🎯 Cilj planiranja:</p><p>🗺️ Izvorni podaci:</p><p>📈 Izvješće: ovo izvješće izračunava ukupnu vrijednost svake značajke unutar plana . Ta se vrijednost dijeli s ukupnom vrijednošću svake značajke kako bi se dobio % sadržan u planu. Ako plan uključuje više područja koja se preklapaju, preklapanje se broji samo jednom.</p>",
  "Bioregions 1": "Ovo izvješće sažima preklapanje ovog plana s bioregijama Kalifornije.",
  "BlankCard": "Prazna kartica",
  "Central Coast": "Centralna obala",
  "Federal Marine Conservation Area": "Federalno zaštićeno područje mora",
  "Federal Marine Reserve": "Savezne morske rezerve",
  "Fully Protected Area": "Potpuno zaštićeno područje",
  "Kelp": "Morska trava",
  "Kelp - learn more": "<p>ℹ️ Pregled:</p><p>🎯 Cilj planiranja:</p><p>🗺️ Izvorni podaci:</p><p>📈 Izvješće: ovo izvješće izračunava ukupnu vrijednost svake značajke unutar plana . Ta se vrijednost dijeli s ukupnom vrijednošću svake značajke kako bi se dobio % sadržan u planu. Ako plan uključuje više područja koja se preklapaju, preklapanje se broji samo jednom.</p>",
  "Kelp 1": "Ovo izvješće sažima preklapanje ovog plana s Kelp podacima.",
  "Learn More": "Saznajte više",
  "mi²": "mi²",
  "North Central Coast": "Sjeverna središnja obala",
  "North Coast": "Sjeverna obala",
  "OverlapCard": "Kartica preklapanja",
  "OverlapCard - learn more": "<p>ℹ️ Pregled:</p><p>🎯 Cilj planiranja:</p><p>🗺️ Izvorni podaci:</p><p>📈 Izvješće: ovo izvješće izračunava ukupnu vrijednost svake značajke unutar plana . Ta se vrijednost dijeli s ukupnom vrijednošću svake značajke kako bi se dobio % sadržan u planu. Ako plan uključuje više područja koja se preklapaju, preklapanje se broji samo jednom.</p>",
  "OverlapCard 1": "Ovo izvješće sažima preklapanje ovog plana s OverlapCard podacima.",
  "Plan Overview": "Pregled plana",
  "Protection Card - Learn more": "<p>ℹ️ Pregled: Ovaj proces planiranja koristi IUCN okvir razine zaštite:</p><p>IUCN Ia Strogi prirodni rezervat: Strogo zaštićen zbog bioraznolikosti i također mogućih geoloških/geomorfoloških značajki, gdje su ljudske posjete, korištenje i utjecaji kontrolirano i ograničeno kako bi se osigurala zaštita vrijednosti očuvanja</p><p>IUCN Ib područje divljine: Obično velika nemodificirana ili naglo modificirana područja, koja zadržavaju svoj prirodni karakter i utjecaj, bez stalnog ili značajnijeg ljudskog obitavanja, zaštićena i uspjelo se očuvati prirodno stanje</p><p>Nacionalni park IUCN II: Velika prirodna ili gotovo prirodna područja koja štite velike ekološke procese s karakterističnim vrstama i ekosustavima, koji također imaju ekološki i kulturno kompatibilne duhovne, znanstvene, obrazovne, rekreacijske i mogućnosti za posjetitelje </p><p>IUCN III Spomenik prirode ili obilježje: Područja izdvojena za zaštitu određenog spomenika prirode, što može biti oblik reljefa, morska planina, morska špilja, geološka značajka poput špilje ili vodna značajka poput drevni gaj</p><p>IUCN IV Područje upravljanja staništima/vrstama: Područja za zaštitu određenih vrsta ili staništa, gdje upravljanje odražava ovaj prioritet. Mnogi će trebati redovite, aktivne intervencije kako bi se zadovoljile potrebe određenih vrsta ili staništa, ali to nije uvjet kategorije</p><p>IUCN V Zaštićeni krajolik ili morski krajolik: Gdje je interakcija ljudi i prirode tijekom vremena proizvela poseban karakter sa značajnom ekološkom, biološkom, kulturnom i krajobraznom vrijednošću: i gdje je očuvanje cjelovitosti ove interakcije ključno za zaštitu i održanje područja i s njim povezanog očuvanja prirode i drugih vrijednosti</p><p>IUCN VI zaštićena područja uz održivo korištenje prirodnih resursa: Područja koja čuvaju ekosustave, zajedno s povezanim kulturnim vrijednostima i tradicionalnim sustavima upravljanja prirodnim resursima. Općenito veliki, uglavnom u prirodnim uvjetima, s udjelom pod održivim upravljanjem prirodnim resursima i gdje se neindustrijska upotreba prirodnih resursa niske razine kompatibilna s očuvanjem prirode smatra jednim od glavnih ciljeva</p><p>IUCN Ostalo Učinkovito Mjere očuvanja temeljene na području (OECM): Zemljopisno definirano područje koje nije zaštićeno područje, kojim se upravlja i kojim se upravlja na načine koji postižu pozitivne i održive dugoročne rezultate za in situ očuvanje bioraznolikosti, s povezanim funkcijama i uslugama ekosustava i gdje je to moguće, kulturne, duhovne, socioekonomske i druge lokalno relevantne vrijednosti (CBD, 2018).</p><p>Lokalno upravljana morska područja (LMMA)</p><p>IUCN Ia, Ib, II, i III smatraju se zonama visoke zaštite bioraznolikosti (HBPZ). IUCN IV, V, VI, OECM i LMMA smatraju se zonama zaštite srednje bioraznolikosti (MBPZ).</p><p>🎯 Cilj planiranja: Nema</p><p>🗺️ Izvorni podaci: Nema</p>< p>📈 Izvješće: Jednostavno broji broj zona u svakoj razini zaštite.</p>",
  "RED": "CRVENA",
  "Regions - learn more": "<p>ℹ️ Pregled:</p><p>🎯 Cilj planiranja:</p><p>🗺️ Izvorni podaci:</p><p>📈 Izvješće: ovo izvješće izračunava ukupnu vrijednost svake značajke unutar plana . Ta se vrijednost dijeli s ukupnom vrijednošću svake značajke kako bi se dobio % sadržan u planu. Ako plan uključuje više područja koja se preklapaju, preklapanje se broji samo jednom.</p>",
  "Regions 1": "Ovo izvješće sažima preklapanje ovog plana s istraživanim regijama u ovom procesu planiranja.",
  "San Francisco Bay": "Zaljev San Francisco",
  "Show by Sketch": "Prikaz po skici",
  "Show Map Layer": "Prikaži sloj karte",
  "SimpleCard ecoregion message": "U blizini su sljedeće ekoregije: <2></2>",
  "SimpleCard sketch size message": "Ova skica ima <2>{{area}}</2> kvadratnih kilometara",
  "SimpleCard temperature message": "Današnja temperatura površine mora unutar ove skice je <2>{{minTemp}} - {{maxTemp}}°C</2>.",
  "SimpleCard title": "Zonsko izvješće",
  "South Coast": "Južna obala",
  "Special Closure": "Posebno zatvaranje",
  "State Marine Conervation Area (No-Take)": "Državno zaštićeno područje mora (zabranjeno preuzimanje)",
  "State Marine Conservation Area": "Državno zaštićeno područje mora",
  "State Marine Park": "Državni morski park",
  "State Marine Recreation Management Area": "Državno područje upravljanja morskom rekreacijom",
  "State Marine Reserve": "Državni morski rezervat",
  "State Waters": "Državne vode",
  "Study Regions": "Studijske regije",
  "United States Exclusive Economic Zone": "Ekskluzivni ekonomski pojas Sjedinjenih Država",
  "units": "jedinice",
  "Within Plan": "Unutar plana",
  "World": "Svijet"
}
`;export{a as default};
