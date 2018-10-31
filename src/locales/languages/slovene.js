export default {
	"generic": {
		"new": "Novo",
		"save": "Shrani",
		"ignored": "Ignoriran",
		"identity": "Identiteta",
		"contract": "Pogodba",
		"action": "Akcija",
		"removed": "Odstranjen",
		"name": "Ime",
		"search": "Išči",
		"verifyPassword": "Preveriti morate trenutno geslo, preden lahko nadaljujete.",
		"host": "Strežnik",
		"port": "Vrata",
		"requires": "Potrebuje",
		"requiredProperties": "Zahtevane lastnosti"
	},
	"placeholder": {
		"name": "Naziv",
		"publicKey": "Javni ključ",
		"privateKey": "Zasebni ključ",
		"firstName": "Ime",
		"lastName": "Priimek",
		"email": "Elektronska pošta",
		"birthDate": "Datum rojstva",
		"locationName": "Lokacija ",
		"defaultLocationName": "Domači naslov",
		"phone": "Telefon",
		"address": "Naslov",
		"city": "Mesto",
		"postal": "Poštna številka",
		"country": "Dežela",
		"state": "Država",
		"password": "Geslo",
		"confirmPassword": "Potrdite geslo",
		"newPassword": "Novo geslo",
		"confirmNewPassword": "Potrdite novo geslo",
		"domainOrIp": "Domena ali IP"
	},
	"button": {
		"createIdentity": "Ustvari račun",
		"importAccount": "Uvozi račun",
		"addNewLocation": "Dodaj novo lokacijo",
		"setAsDefaultLocation": "Izberi kot privzeto lokacijo",
		"removeLocation": "Izbriši lokacijo",
		"changePassword": "Zamenjaj geslo",
		"destroyScatter": "Uniči Scatter",
		"createNewScatter": "Ustvari nov Scatter",
		"loadFromBackup": "Naloži iz backup-a",
		"unlock": "Odkleni",
		"exportScatter": "Izvozi Scatter",
		"generateKeyPair": "Generiraj ključa",
		"validate": "Preveri",
		"copy": "Kopiraj",
		"changeLanguage": "Izberi drugi jezik",
		"cancel": "Prekliči",
		"accept": "Potrdi",
		"deny": "Prepovej",
		"yes": "Da",
		"no": "Ne",
		"useSelectedAccount": "Uporabi izbrani račun",
		"selectIdentity": "Izberi identiteto"
	},
	"mainmenu": {
		"identities": "Identitete",
		"permissions": "Pravice",
		"history": "Zgodovina",
		"lock": "Zakleni"
	},
	"identities": {
		"header": "Trenutno nimate nobene identitete.",
		"description": "\n        Identiteta je zbirka osebnih podatkov kot so ime in priimek, naslov. Vsebuje tudi različne\n        blockchain račune. Identitete vsebujejo tudi privatne in javne ključe lastnika, kar omogoča\n        avtentikacijo uporabnnika brez vnosa gesla.\n    "
	},
	"identity": {
		"disablingHeader": "Zakaj uporabim preklic identitete?",
		"disablingDescription": "\n        Preklic ali izključitev identitete bo onemogočila uporabo le te v aplikacijah, ki se nanjo sklicujejo.\n    ",
		"nameHeader": "Naziv identitete",
		"nameDescription": "\n        Aplikacija lahko uporabi naziv identitete kot vaše enolično uporabniško ime na omrežju. \n    ",
		"accountHeader": "Račun",
		"accountDescription": "\n        Na računu so shranjena vaša sredstva in z njim lahko upravljate s pogodbami na Blockchain-u.\n    ",
		"personalHeader": "Osebni podatki",
		"personalDescription": "\n        Osebne podatke lahko spremenite kadarkoli. V primeru, da neka aplikacija zahteva popolne podatke (kot so naprimer\n        spletne trgovine), lahko osebne podatke spremenite in nato povrnete v prvotno stanje.\n    ",
		"locationHeader": "Podatki o naslovu",
		"locationDescription": "\n        Podatki o naslovu uporabnika.\n    "
	},
	"permissions": {
		"header": "Trenutno nimate nobene pravice.",
		"description": "\n        Dovoljenja so nastavljena, ko bodisi zagotovite identiteto za aplikacijo, ki jo želite uporabiti.\n    "
	},
	"permission": {
		"revokeIdentity": "Reaktiviraj identiteto",
		"revokeContract": "Reaktiviraj pogodbo/kontrakt",
		"revokeAction": "Reaktiviraj akcijo"
	},
	"histories": {
		"header": "Nimate dogodkov za prikaz.",
		"description": "\n        Ko jih boste imeli, boste lahko videli seznam vseh dogodkov, ki potekajo skozi vaš Scatter.\n        Kar ne boste videli so dogodki, ki so se zgodili na vaših računih zunaj Scatter-ja.\n     ",
		"note": "\n        Opomba: Če izvažate podatke iz Scatterja v nastavitvah, potem se tej dogodki ne bodo shranili.\n        Ko ponovno uvažate instanco Scatter-ja, bo vaša zgodovina zapisov prazna. Če v prihdonje želite \n        izvoziti svojo zgodovino lahko to storite z uporabo akcijskih gumbov v navigacijskem meniju.\n    "
	},
	"settingsmenu": {
		"networks": "Omrežja",
		"keypairs": "Ključ (zasebni/javni)",
		"language": "Jezik",
		"autoLock": "Samodejno zaklepanje",
		"password": "Geslo",
		"backup": "Varnostna kopija",
		"destroy": "Uniči"
	},
	"backup": {
		"header": "Izvozi kriptirano varnostno kopijo",
		"description": "\n        Izvoz vašega Scatterja vam omogoča, da ga uvozite v druge naprave. Datoteka, ki jo izvozite bo še vedno šifrirana,\n        zato poskrbite, da boste imeli mnemonik ali geslo, sicer bo neuporabna. Zasebni ključi iz vaših računov bo tudi \n        pred izvozom odstranjen, edini zasebni ključi, ki bodo ostali v izvozu bo vaš osebni ključ.\n    "
	},
	"pass": {
		"header": "Vnesi novo geslo",
		"description": "\n        S spreminjanjem gesla boste dešifrirali vse shranjene podatke, ki so ponavadi vedno\n        šifriran in jih nato ponovno šifrirali s (semenom) iz novega gesla.\n    "
	},
	"network": {
		"header": "Dodaj novo omrežje",
		"description": "\n        Aplikacije se običajno izvajajo v določenem omrežju, vendar se morda ne izvajajo vse na\n        istem. Na primer: Aplikacija ima lahko na testnem omrežju nove funkcionalnosti, ki\n        še niso v produkcijskem okolju. V tem primeru  ima aplikacija lahko omrežje za testiranje\n         ki ima nove funkcije, ki še niso sproščene. Da bi sodelovali\n         to omrežje boste morali imeti tudi račun tam.\n    "
	},
	"destroy": {
		"header": "Uniči Scatter",
		"description": "\n        Ste pred uničenjem Scatter-ja. V kolikor bi želeli v bodoče pridobiti stare podatke,\n        morate le te izvoziti v JSON obliki. Izvoz je dostopen v varnostni kopiji (meni).\n    "
	},
	"language": {
		"header": "Izberite jezik",
		"description": "\n        Izbira jezika vmesnika.\n    "
	},
	"keypair": {
		"header": "Generaj javni in privatni ključ",
		"description": "\n        Tukaj lahko generirate zasebni in javni EOS ključ. Ključi so generirani lokalno na vašem računalniku in\n        se nikoli nikamor ne pošiljajo.\n    ",
		"validation": "Generirani javni ključ ne ustreza podanemu javnemu ključu!"
	},
	"lock": {
		"header": "Časovnik za samodejno zaklepanje",
		"description": "\n        Samodejno zaklepanje Scatter aplikacije.\n    ",
		"minute": "Minut",
		"minutes": "Minut",
		"hour": "Ura",
		"hours": "Ur",
		"neverLock": "Nikoli ne zakleni"
	},
	"mnemonic": {
		"header": "Mnemoniki",
		"description": "Mnemomniki so skupek besed, ki jih program uporabi za kriptiranje podatkov.",
		"note": "\n        Bodite pozorni, da si besede shranite na varno mesto (npr. list papirja). Besede boste potrebovali v primeru, če pozabite geslo za dekriptiranje \n        zasebnih podatkov.\n    ",
		"wrote": "I Wrote It Down"
	},
	"onboarding": {
		"title": "Welcome to Use",
		"desc1": "The developer team holds no liability towards your digital assets. It is your responsibility to constantly make sure your computer is free of malware. We have taken every measure in our capabilities to ensure that this software is safe to use as intended however your computer itself is your worst enemy and should be treated as such.",
		"desc2": "By using this software you are relinquishing any ability to take legal actions against the developer team and recognize yourself as the sole legal owner of your own wallet instance, your keys, and your data."
	},
	"error": {
		"mustSelectItem": "Izberite opcijo."
	},
	"alert": {
		"badIdentityName": [
			"Nepravilen vnos Identitete",
			"Identiteta mora biti dolžine med 3 in 20 znaki.\n         Zahtevan je alfanumerični vnos. Niz lahko vsebuje tudi presledke in vezaj."
		],
		"identityNameExists": [
			"Identiteta s tem nazivom že obstaja",
			"Identiteta s tem nazivom je že registrirana."
		],
		"invalidPrivateKey": [
			"Napačen zasebni ključ",
			"Vnesli ste nepravilni zasebni ključ. Poizkusite ponovno."
		],
		"noAccountsFound": [
			"Račun ne obstaja",
			"Za vnešeni zasebni ključ ne obstaja noben račun.\n         Če želite uvoziti ključ, ki ni bil generiran s pomočjo Scatter-ja\n         potem morate najprej ustvariti račun in šele nato uvoziti zasebni ključ."
		],
		"passwordsDoNotMatch": [
			"Geslo se ne ujema",
			"Geslo, ki ste ga vnesli se ne ujema s potrdtitvenim geslom."
		],
		"badPassword": [
			"Nepravilno geslo",
			"Geslo mora biti vsaj 8 znakov dolgo"
		],
		"wrongPassword": [
			"Napačno geslo",
			"Vnešeno geslo je napačno."
		],
		"networkHostInvalid": [
			"Nerpavilen naslov strežnika",
			"Naslov strežnika mora vsebovati (ime strežnika) ali IP številko.\n         ( primer: testnet.eos.io ) ali IP (primer: 192.168.0.1 )."
		],
		"networkExists": [
			"Omrežje že obstaja",
			"V sistemu že obstaja omrežje z enakim imenom ali IP številko."
		],
		"removingEndorsedNetwork": [
			"Povezanega omrežja ne morete odstraniti",
			"Omrežje je v uporabi za shrambo pogodb."
		],
		"youMustSelectAnIdentity": [
			"Izbrati morate identiteto",
			"Če ne želite izpostaviti identitete, lahko pritisnete gumb prepovej, sicer mora biti podana identiteta\n         da bi sprejeli to zahtevo."
		]
	},
	"prompt": {
		"destroyingScatter": [
			"Uničenje Scatter-ja",
			"To je vaša zadnja možnost zato še enkrat preverite varnostno kopijo."
		],
		"removingNetwork": [
			"Odstranitev omrežja",
			"Ste pred brisanjem - odstranitvijo omrežja."
		],
		"whitelistingContractAction": [
			"You Are About To Whitelist A Currency Contract",
			"Whitelisting currency based contracts is dangerous, and should never be done. There are specific cases where this is okay,\n         but unless you are absolutely sure this is one of them, you should not be whitelisting this contract action.\n         Are you sure you still want to whitelist this?"
		],
		"selectAccount": [
			"Izberite račun",
			"Izberite račun in organ, ki ga boste uporabljali s to identiteto. Izberete lahko le enega na enkrat."
		]
	},
	"request": {
		"addNetwork": [
			"želi dodati omrežje v vaš Scatter.",
			"Nekatere aplikacije uporabljajo svoja omrežja.",
			"Akcija ne bo omogočila nikakršnega dostopa do vašega Scatter računa. \n         Dodajanje omrežja preko te akcije samo olajša vnos omrežja, da ga ni\n         potrebno ročno dodajati preko nastavitvenega panela."
		],
		"identity": [
			" potrebuje dodatne podatke ali informacije.",
			"Včasih vas nekatere aplikacije povprašajo po dodatnih kot so \n        elektronska pošta, ime, datum rojstca.",
			"Če tudi posredujete dodatne podatke katere aplikacija ne zahteva,\n        tej ne bodo posredovane iz sistema Scatter.",
			"Edina lastnost, ki se vedno posreduje je vaša identiteta (javni ključ in njegovo ime).",
			""
		],
		"identityNoIdentities": [
			"Nimate nobene identitete (podatka) katerega zahteva aplikacija.",
			"Če želite uporabiti identiteto na tej domeni, potem morate ažurirati lastnosti,\n         ki so zahtevane na levi strani."
		],
		"signatureWhitelist": [
			"Do you want to whitelist this contract action?",
			"You can whitelist this action so that next time you wont have to manually authorize this.\n         Every property that has a check next to it will become mutable, meaning that you can allow\n         certain properties of this transaction to change and only if the other properties are changed will\n         it fail to be whitelisted.",
			"This includes required personal information, and changes to your Identity do not remove permissions.",
			"If you have multiple locations and a transaction requires a location you will always be prompted."
		],
		"scatterIsLocked": [
			"Scatter je zaklenjen!",
			"Preden pričnete uporabljati Scatter, ga morate najprej odkleniti",
			"Nikoli vas ne bomo povprašali ali prikazovali vnosne maske za prijavo.",
			"V kolikor opazite okno, ki od vas zahteva vnos gesla, gre lahko za prevaro! Scatter vedno odklenite na strani vtičnika."
		],
		"updateVersion": [
			"Scatter je potečen!",
			"potrebuje za delovanje novejšo verzijo aplikacije kot jo imate nameščeno na vašem sistemu.",
			"To pomeni, da je verjetno zahtevana novejša funkcionalnost, ki jo vaša nameščena verzija programa Scatter še ne podpira.",
			"Opozorilo! Preverjanje posodobitev je prepuščena matični aplikaciji, ki vas lahko pripelje tudi na napačno stran,\n        zato se vedno prepričajte, da aplikacijo prenašate iz Scatter spletne strani."
		]
	}
}