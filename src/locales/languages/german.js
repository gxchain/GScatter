export default {
	"generic": {
		"new": "Neu",
		"save": "Speichern",
		"ignored": "Ignoriert",
		"identity": "Identität",
		"contract": "Smart Contract",
		"action": "Aktion",
		"removed": "Entfernt",
		"name": "Name",
		"search": "Suche",
		"verifyPassword": "Du musst dein momentanes Passwort bestätigen bevor du dies tun kannst.",
		"host": "Host",
		"port": "Port",
		"requires": "Benötigt",
		"requiredProperties": "Benötigte Eigenschaften",
		"import": "Importieren",
		"chainId": "Chain ID",
		"blockchain": "Blockchain",
		"account": "Account"
	},
	"placeholder": {
		"name": "Name",
		"publicKey": "Public Key",
		"privateKey": "Private Key",
		"firstName": "Vorname",
		"lastName": "Nachname",
		"email": "E-Mail",
		"birthDate": "Geburtsdatum",
		"locationName": "Standort Name",
		"defaultLocationName": "Zuhause",
		"phone": "Telefonnummer",
		"address": "Straße",
		"city": "Stadt",
		"postal": "Postleitzahl",
		"country": "Land",
		"state": "Bundesland",
		"password": "Passwort",
		"confirmPassword": "Passwort bestätigen",
		"newPassword": "Neues Passwort",
		"confirmNewPassword": "Neues Password bestätigen",
		"domainOrIp": "Domäne oder IP"
	},
	"button": {
		"createIdentity": "Identität erstellen",
		"importAccount": "Account importieren",
		"importKeychain": "Keychain importieren",
		"selectFile": "Datei auswählen",
		"addNewLocation": "Neuen Standort hinzufügen",
		"setAsDefaultLocation": "Standort als Standardeinstellung wählen",
		"removeLocation": "Standort entfernen",
		"changePassword": "Passwort ändern",
		"destroyScatter": "Scatter löschen",
		"createNewScatter": "Scatter neu erstellen",
		"loadFromBackup": "Von Backup laden",
		"unlock": "Entsperren",
		"exportScatter": "Scatter exportieren",
		"generateKeyPair": "Schlüsselpaar generieren",
		"validate": "Überprüfen",
		"copy": "Kopieren",
		"changeLanguage": "Sprache ändern",
		"cancel": "Abbrechen",
		"accept": "Akzeptieren",
		"deny": "Verweigern",
		"yes": "Ja",
		"no": "Nein",
		"useSelectedAccount": "Ausgewählten Account benutzen",
		"selectIdentity": "Identität auswählen"
	},
	"mainmenu": {
		"identities": "Identitäten",
		"keys": "Schlüsselpaare",
		"permissions": "Berechtigungen",
		"history": "Verlauf",
		"lock": "Sperren"
	},
	"identities": {
		"header": "Du hast noch keine Identitäten erstellt.",
		"description": "\n        Identitäten verwalten persönliche Information wie Vor- und Nachnamen, Adressen sowie verschiedene\n        Blockchain Accounts (Schlüsselpaare). Identitäten haben eigene Schlüsselpaare und ihr Besitz kann\n        nachgewiesen werden, womit sie sich eignen, mit Anwendungen zu authentifizieren ohne klassische\n        Passwörter eingeben zu müssen.\n    "
	},
	"identity": {
		"disablingHeader": "Was macht Deaktivieren?",
		"disablingDescription": "\n        Das Deaktivieren dieser Identität verhindert, dass Anwendungen die sie verwendet haben Zugriff darauf bekommen.\n        Dies ist eine Alternative zum permanenten Löschen dieser Identität oder ihrer Berechtigung in der Anwendung,\n        was schwieriger wäre wiederherzustellen.\n    ",
		"nameHeader": "Identitätsname",
		"nameDescription": "\n        Anwendungen können diesen Namen als deinen Benutzernamen verwenden denn dieser ist in allen Netzwerken eindeutig.\n        Wenn du nicht mit RIDL registriert bist, wird dir ein zufälliger Name zugewiesen.\n    ",
		"noKeyPairsHeader": "Keine Schlüsselpaare!",
		"noKeyPairsDescription": "\n        Bevor du Blockchain Accounts mit dieser Identität verknüpfen kannst musst du Schlüsselpaare hinzufügen. Gehe zum Hauptmenü und wähle:\n    ",
		"accountHeader": "Account",
		"accountDescription": "\n        Accounts halten deine Gelder und erlauben dir mit Smart Contracts in der Blockchain zu interagieren.\n        Im Zusammenhang mit Identitäten kannst du sie dir als Bankkonten verbunden mit deinem Pass vorstellen,\n        sie können jederzeit geändert werden.\n    ",
		"personalHeader": "Persönliche Informationen",
		"personalDescription": "\n        Persönliche Informationen können zu einem Account hinzugefügt werden für Anwendung welche diese benötigen.\n        Eine Shopping-Webseite zum Beispiel könnte deinen Vor- und Nachnamen benötigen um zu wissen zu wem die Waren\n        gesendet werden sollen.\n    ",
		"locationHeader": "Standort Informationen",
		"locationDescription": "\n        Standort-Informationen können zu einem Account hinzugefügt werden für Anwendung welche diese benötigen.\n        Eine Shopping-Webseite zum Beispiel könnte deine Adresse benötigen um zu wissen wohin die Waren\n        gesendet werden sollen.\n    "
	},
	"permissions": {
		"header": "Du hast noch keine Berechtigungen anzuzeigen.",
		"description": "\n        Berechtigungen werden erstellt wenn du eine Identität für eine Anwendung zur Verfügung stellst, oder wenn\n        du eine Aktion eines Smart Contracts permanent freigibst damit sie automatisch unterzeichnet wird ohne\n        andauernde Autorisierungsanfragen.\n    "
	},
	"permission": {
		"revokeIdentity": "Identität widerrufen",
		"revokeContract": "Smart Contract widerrufen",
		"revokeAction": "Aktion widerrufen"
	},
	"histories": {
		"header": "Du hast keine Ereignisse im Verlauf anzuzeigen.",
		"description": "\n        Sobald du welche hast wirst du eine Liste aller Ereignisse sehen die durch Scatter gehen.\n        Jedoch wirst du nicht Ereignisse deiner Accounts sehen die ausserhalb von Scatter geschehen sind.\n     ",
		"note": "\n        Hinweis: Das Exportieren der Scatter Daten durch die Backup Option in den Einstellungen speichert diese\n        Ereignisse nicht.\n        Wenn du diese Scatter Instanz wieder importierst wird dein Verlauf leer sein. Wenn du deinen Verlauf künftig\n        exportieren möchtest kannst du dies mit den Buttons in der Navigationsleiste hier tun.\n    "
	},
	"settingsmenu": {
		"networks": "Netzwerke",
		"keypairs": "Schlüsselpaare",
		"language": "Sprache",
		"autoLock": "Automatische Sperre",
		"password": "Passwort",
		"backup": "Backup",
		"destroy": "Löschen"
	},
	"backup": {
		"header": "Exportiere verschlüsseltes Backup",
		"description": "\n        Das Exportieren deines Scatters erlaubt dir diesen auf anderen Geräten zu importieren.\n        Die exportierte Datei wird verschlüsselt also stelle sicher, dass du deine Mnemonics oder dein Passwort gesichert hast,\n        sonst sind die exportierten Daten nutzlos. Deine privaten Schlüssel werden beim Export ebenfalls entfernt,\n        die einzigen privaten Schlüssel die exportiert werden sind die Schlüssel deiner Identitäten.\n    "
	},
	"pass": {
		"header": "Neues Passwort eingeben",
		"description": "\n        Wenn du dein Passwort änderst werden alle gespeicherten Informationen entschlüsselt die normalerweise verschlüsselt sind\n        und anschließend mit einem Seed des neuen Passworts wieder verschlüsselt.\n    "
	},
	"network": {
		"header": "Neues Netzwerk hinzufügen",
		"description": "\n        Normalerweise laufen Anwendungen in einem bestimmten Netzwerk, es ist aber möglich,\n        dass nicht alle Anwendungen im selben Netzwerk laufen. Es kann z.B. sein, dass eine Anwendung\n        in einem Testnetz läuft in welchem weitere Features hinzugefügt wurden, die noch nicht im eigentlichen Netzwerk verfügbar sind.\n        Um mit diesem Netzwerk zu interagieren brauchst du dort ebenfalls einen Account.\n    "
	},
	"destroy": {
		"header": "Scatter löschen",
		"description": "\n        Du bist dabei deine komplette Scatter-Keychain zu löschen. Die einzige möglichkeit exakt diesen Scatter wiederherzustellen ist,\n        indem du eine exportierte Scatter-JSON importierst. Es ist nicht möglich deine beanspruchten Identitäten anders wiederherzustellen.\n        Stelle sicher, dass du deinen Scatter über die Einstellungen exportiert und gespeichert hast.\n    "
	},
	"language": {
		"header": "Wähle deine Sprache aus"
	},
	"keypair": {
		"header": "Erstelle ein neues Schlüsselpaar",
		"description": "\n        Hier kannst du EOS-Schlüsselpaare erzeugen. Die erzeugten Schlüsselpaare werden lokal auf deinem Rechner erzeugt und werden nie versendet.\n        Du kannst auch ein Schlüsselpaar hinzufügen und überprüfen, ob der private Schlüssel mit dem öffentlichen Schlüssel übereinstimmt.\n        Beachte, dass diese Schlüssel durch Entropie erzeugt werden, die von deinem Computer und nicht von einem bestimmten Seed stammen.\n    ",
		"validation": "Der aus dem privaten Schlüssel generierte öffentliche Schlüssel stimmt nicht mit dem bereitgestellten öffentlichen Schlüssel überein!"
	},
	"lock": {
		"header": "Automatische Sperre",
		"description": "\n        Die automatische Sperre beeinflusst wie schnell Scatter gesperrt wird damit du nicht immer selber dran denken\n        musst wenn du weggehst.\n    ",
		"minute": "Minute",
		"minutes": "Minuten",
		"hour": "Stunde",
		"hours": "Stunden",
		"neverLock": "Niemals sperren"
	},
	"mnemonic": {
		"header": "Mnemonic",
		"description": "Mnemonics sind eine Folge von Worten die einem kryptographischen Seed entsprechen.",
		"note": "\n        Bewahre deine Worte unbedingt sicher auf! Es ist der einzige Weg um wieder Zugang zu deinem Scatter zu erhalten\n        und deine privaten Informationen zu entschlüsseln, falls du jemals dein Passwort vergessen solltest.\n    ",
		"wrote": "I Wrote It Down"
	},
	"onboarding": {
		"title": "Welcome to Use",
		"desc1": "The developer team holds no liability towards your digital assets. It is your responsibility to constantly make sure your computer is free of malware. We have taken every measure in our capabilities to ensure that this software is safe to use as intended however your computer itself is your worst enemy and should be treated as such.",
		"desc2": "By using this software you are relinquishing any ability to take legal actions against the developer team and recognize yourself as the sole legal owner of your own wallet instance, your keys, and your data."
	},
	"error": {
		"mustSelectItem": "Du musst etwas auswählen."
	},
	"alert": {
		"badIdentityName": [
			"Fehlerhafter Identitätsname",
			"Identitätsnamen müssen zwischen 3 und 20 Zeichen lang sein.\n         Außerdem müssen sie alphanumerisch sein, dürfen aber Leerzeichen, Bindestriche und Unterstriche enthalten."
		],
		"identityNameExists": [
			"Identitätsname existiert bereits",
			"Dieser Identitätsname ist bereits unter einer anderen Identität registriert."
		],
		"invalidPrivateKey": [
			"Ungültiger privater Schlüssel",
			"Der eingegebene private Schlüssel scheint ungültig zu sein. Bitte überprüfe den Schlüssel und versuche es erneut."
		],
		"noAccountsFound": [
			"Keine Accounts gefunden",
			"Es wurden keine Accounts gefunden, die zu diesem privaten Schlüssel gehören.\n         Wenn du einen Schlüssel importieren willst, der nicht mit Scatter erstellt wurde\n         musst du einen Account für diesen Schlüssel erstellen bevor du diesen importierst."
		],
		"passwordsDoNotMatch": [
			"Passwörter stimmen nicht überein",
			"Die von dir eingegebene Passwort-Bestätigung stimmt nicht mit dem Passwort überein."
		],
		"badPassword": [
			"Unzureichendes Passwort",
			"Passwörter müssen mindestens 8 Zeichen lang sein."
		],
		"wrongPassword": [
			"Falsches Passwort",
			"Das von dir eingegebene Passwort war falsch."
		],
		"networkHostInvalid": [
			"Netzwerk-Host ungültig",
			"Der eingegebene Netzwerk-Host war ungültig. Hosts sollten entweder ein Domänenname\n        ( z.B: testnet.eos.io) oder eine IP ( z.B: 192.168.0.1 ) sein."
		],
		"networkExists": [
			"Netzwerk bereits vorhanden",
			"Ein Netzwerk mit diesem Host und Port existiert bereits. Es gibt keinen Grund dasselbe Netzwerk zweimal zu speichern."
		],
		"removingEndorsedNetwork": [
			"Offizielles Netzwerk kann nicht entfernt werden",
			"Scatters offizielles Netzwerk kann nicht entfernt werden. Dieses Netzwerk wird genutzt um unsere Smart Contracts zur Verfügung zu stellen."
		],
		"youMustSelectAnIdentity": [
			"Du musst eine Identität auswählen",
			"Wenn du eine Identität nicht freigeben möchtest, kannst du den Verweigern-Button drücken,\n         andernfalls musst du eine Identität auswählen um diese Anfrage zu akzeptieren."
		]
	},
	"prompt": {
		"destroyingScatter": [
			"Scatter löschen",
			"Dies ist deine letzte Chance, deine Backups zu überprüfen."
		],
		"removingNetwork": [
			"Netzwerk entfernen",
			"Du bist dabei, ein Netzwerk zu löschen. Du kannst keine\n         neuen Accounts in diesem Netzwerk erstellen, nachdem du es gelöscht hast,\n         aber es hindert dich auch nichts daran, es wieder hinzuzufügen. Accounts die\n         dieses Netzwerk nutzen, werden nicht verändert oder entfernt."
		],
		"whitelistingContractAction": [
			"Du bist dabei einen währungsbasierten Vertrag auf deine Whitelist zu setzen",
			"Währungsbasierte Verträge auf die Whitelist zu setzen ist gefährlich und sollte niemals durchgeführt werden. Es gibt konkrete Fälle, in denen dies in Ordnung ist,\n         aber solange du dir nicht absolut sicher bist, dass dies einer jener Fälle ist, solltest du diese Vertragsaktion nicht auf deine Whitelist setzen.\n         Bist du sicher, dass du diesen Vertrag auf deine Whitelist setzen willst?"
		],
		"selectAccount": [
			"Account auswählen",
			"Wähle den Account und die Autorisierung aus die du für diese Identität benutzen möchtest. Du kannst immer nur einen Account auswählen."
		]
	},
	"request": {
		"addNetwork": [
			"möchte ihr Netzwerk zu deinem Scatter hinzufügen.",
			"Manche Anwendungen benutzen ihr eigenes Netzwerk.",
			"Die Anwendung hat dadurch keine Möglichkeit auf dein Scatter zuzugreifen.\n         Ein Netzwerk über dieses Interface hinzuzufügen erspart dir einfach nur\n         die Mühe es manuell über die Einstellungen hinzuzufügen."
		],
		"identity": [
			"fordert weitere Informationen an.",
			"Manchmal bitten Anwendungen um weitere Informationen wie z.B.\n         deine E-Mail oder dein Geburtsdatum. Auf der rechten Seite siehst du Identitäten mit den\n         angeforderten Eigenschaften, die du in diesem Netzwerk besitzt.",
			"Selbst wenn du eine Identität mit Eigenschaften bereitstellst die eine Anwendung nicht anfragt,\n         kann die Anwendung diese nicht sehen oder ihre Existenz feststellen.",
			"Die einzigen Informationen die immer übermittelt werden sind der öffentliche Schlüssel der Identität und ihr Name.",
			"fordert keine weiteren Informationen an. Sie benötigt nur den Identitäts-Hash und den Namen."
		],
		"identityNoIdentities": [
			"Du hast keine Identitäten, welche die Eigenschaften enthält, die diese Anwendung anfordert.",
			"Wenn du eine Identität mit dieser Domäne verwenden möchtest musst du die Identität aktualisieren um die Anforderungen der Anwendung zu erfüllen.\n         Auf der linken Seite siehst du die Anforderungen dieser Domäne."
		],
		"signatureWhitelist": [
			"Möchtest du diese Aktion auf deine Whitelist setzen?",
			"Du kannst diese Aktion auf deine Whitelist setzen, sodass du diese beim nächsten Mal nicht mehr manuell autorisieren musst.\n         Jede Eigenschaft, mit einem Häkchen daneben ist änderbar, d.h. du kannst zulassen, dass sich bestimmte Eigenschaften dieser Transaktion ändern dürfen,\n         wenn aber sich andere Eigenschaften ändern wird die automatische Autorisierung verworfen.",
			"Dies beinhaltet auch die erforderlichen persönlichen Informationen. Änderungen an der Identität selbst entfernen keine Berechtigungen",
			"Wenn mehrere Standorte hinterlegt sind und eine Transaktion einen Standort erfordert, wirst du immer danach gefragt werden."
		],
		"scatterIsLocked": [
			"Dein Scatter ist gesperrt!",
			"Bevor du dein Scatter benutzen kannst musst du es erst entsperren.",
			"Wir werden absichtlich nie eine Nachricht anzeigen, die dich auffordert dich einzuloggen.",
			"Wenn du irgendwo aufgefordert wirst dein Passwort anzugeben, handelt es sich um eine bösartige Website die versucht, dein Passwort zu erhalten.\n         Entsperre dein Scatter immer nur aus dem Popup der Erweiterung, indem du auf das Symbol in deinem Browser-Tray klickst."
		],
		"updateVersion": [
			"Dein Scatter ist veraltet!",
			"erfordert eine neuere Version von Scatter als die installierte.",
			"Dies bedeutet in der Regel, dass neue Funktionen bereitgestellt wurden und eine Anwendung versucht diese zu verwenden,\n         diese aber nicht in der derzeit von dir installierten Version enthalten sind.",
			"Bitte beachte, dass wir die Versionsprüfung den Anwendungen selbst überlassen. Diese Anwendungen könnten versuchen\n         dich dazu bringen, etwas bösartiges herunterzuladen. Stelle sicher, dass du Scatter immer von einer vertrauenswürdigen Stelle herunterlädst!"
		]
	}
}