export default {
	"generic": {
		"new": "Nouveau",
		"save": "Enregistrer",
		"ignored": "Ignoré",
		"identity": "Identité",
		"contract": "Contrat",
		"action": "Action",
		"removed": "Supprimé",
		"name": "Nom",
		"search": "Recherche",
		"verifyPassword": "Vous devez vérifier votre mot de passe actuel avant de pouvoir procéder.",
		"host": "Hôte",
		"port": "Port",
		"requires": "Requiert",
		"requiredProperties": "Propriétés requises",
		"import": "Importer",
		"chainId": "Chain ID",
		"blockchain": "Blockchain",
		"account": "Compte"
	},
	"placeholder": {
		"name": "Nom",
		"publicKey": "Clé publique",
		"privateKey": "Clé privée",
		"firstName": "Prénom",
		"lastName": "Nom",
		"email": "E-mail",
		"birthDate": "Date de naissance",
		"locationName": "Nom de l'emplacement",
		"defaultLocationName": "Maison",
		"phone": "Numéro de téléphone",
		"address": "Adresse",
		"city": "Ville",
		"postal": "Code Postal",
		"country": "Pays",
		"state": "État",
		"password": "Mot de passe",
		"confirmPassword": "Confirmez votre Mot de Passe",
		"newPassword": "Nouveau Mot de Passe",
		"confirmNewPassword": "Confirmez votre Nouveau Mot de Passe",
		"domainOrIp": "Domaine ou IP"
	},
	"button": {
		"createIdentity": "Créer identité",
		"importAccount": "Importer Compte",
		"importKeychain": "Importer Porte-clés",
		"selectFile": "Choisir Fichier",
		"addNewLocation": "Ajouter un nouvel emplacement",
		"setAsDefaultLocation": "Définir comme emplacement par défaut",
		"removeLocation": "Supprimer l'emplacement",
		"changePassword": "Changer le mot de passe",
		"destroyScatter": "Détruire Scatter",
		"createNewScatter": "Créer Nouveau Scatter",
		"loadFromBackup": "Charger Depuis une Sauvegarde",
		"unlock": "Déverrouiller",
		"exportScatter": "Exporter Scatter",
		"generateKeyPair": "Générer une Paire de Clés",
		"validate": "Valider",
		"copy": "Copier",
		"changeLanguage": "Changer la Langue",
		"cancel": "Annuler",
		"accept": "Accepter",
		"deny": "Refuser",
		"yes": "Oui",
		"no": "Non",
		"useSelectedAccount": "Utiliser le Compte sélectionné",
		"selectIdentity": "Choisir l'Identité",
		"changeName": "Changer le Nom",
		"claimIdentity": "Revendiquer l'Identité",
		"registerIdentity": "Enregistrer l'Identité"
	},
	"mainmenu": {
		"identities": "Identités",
		"keys": "Paire de clés",
		"permissions": "Permissions",
		"history": "Historique",
		"lock": "Verrouiller"
	},
	"identities": {
		"header": "Vous n'avez pas encore d'Identités",
		"description": "\n        Les Identités sont des contenants pour vos informations personnelles telles que votre prénom,\n        votre nom, vos emplacements et plusieurs comptes/paires de clés blockchain. Les Identités \n        ont une paire de clés et il est possible de prouver que l'on en est propriétaire, ce qui \n        en fait un bon moyen de s'identifier auprès d'applications sans utiliser de mot de passe.\n    "
	},
	"identity": {
		"disablingHeader": "A quoi sert Désactiver ?",
		"disablingDescription": "\n        Désactiver cette Identité provoque que les applications qui en ont une référence ne peuvent s'en servir.\n        Cette fonction peut être utilisée plutôt que de supprimer de manière permanente cette Identité ou les \n        Permissions accordées par elle à une application et qui pourraient être difficilement récupérables.\n    ",
		"nameHeader": "Nom de l'Identité",
		"nameDescription": "\n        Les applications peuvent choisir de vous attribuer ce nom en tant que nom d'utilisateur étant donné\n        que celui-ci est unique sur tous les réseaux.\n        Si vous n'êtes pas inscrit sur RIDL, un nom aléatoire vous sera attribué.\n    ",
		"noKeyPairsHeader": "Pas de Paire de Clés!",
		"noKeyPairsDescription": "\n        Avant que vous ne puissiez ajouter des comptes blockchain à cette Identité, vous devez ajouter au moins une \n        Paire de Clés.\n        Rendez-vous sur le menu principal et choisissez:\n    ",
		"accountHeader": "Compte",
		"accountDescription": "\n        Les comptes détiennent vos fonds et vous permettent d'interagir avec les contrats sur la Blockchain.\n        Leur relation aux Identités peut être vue comme les comptes bancaires attachés à votre passeport: \n        ceux-ci peuvent être changés à tout moment.\n    ",
		"personalHeader": "Informations Personnelles",
		"personalDescription": "\n        Vos informations personnelles peuvent être ajoutées à un compte pour les applications qui les demandent.\n        Par exemple, un site marchant pourrait exiger votre nom complet afin de savoir à qui envoyer les articles.\n    ",
		"locationHeader": "Emplacements",
		"locationDescription": "\n        Les informations relatives à vos emplacements peuvent être ajoutées à un compte pour les applications qui\n        les demandent. Par exemple, un site marchant pourrait exiger votre adresse de livraison afin de savoir où \n        envoyer les articles.\n    "
	},
	"permissions": {
		"header": "Vous n'avez aucune Permission à afficher.",
		"description": "\n        Les Permissions sont définies quand vous fournissez une Identité à une application ou quand vous approuvez\n        que la signature d'une action de contrat s'effectue sans message d'autorisation.\n    "
	},
	"permission": {
		"revokeIdentity": "Révoquer l'Identité",
		"revokeContract": "Révoquer le Contrat",
		"revokeAction": "Révoquer l'Action"
	},
	"histories": {
		"header": "Vous n'avez aucun évènement passé à afficher.",
		"description": "\n        Quand vous en aurez, vous pourrez voir une liste de tous les évènements qui se seront déroulés sur votre \n        Scatter. Par contre, vous ne verrez pas les évènements qui se sont déroulés sur votre compte en dehors de \n        Scatter.\n     ",
		"note": "\n        Note: Exporter les données de votre Scatter depuis l'option Sauvegarder dans le panneau de configuration ne\n        sauvegarde pas ces évènements. Lorsque vous importerez cette instance de Scatter, vos historiques seront vides.\n        Si vous voulez exporter vos historiques, utilisez les boutons d'action situés dans la barre de navigation de ce panneau.  \n    "
	},
	"settingsmenu": {
		"networks": "Réseaux",
		"keypairs": "Paires de Clés",
		"language": "Langues",
		"autoLock": "Verrouillage",
		"password": "Mot de Passe",
		"backup": "Sauvegarde",
		"destroy": "Détruire"
	},
	"backup": {
		"header": "Exporter une sauvegarde encryptée",
		"description": "\n        Exporter votre Scatter vous permet de l'importer sur d'autres appareils. Le fichier exporté sera encrypté donc \n        assurez-vous bien d'avoir accès à votre code mnémonique ou à votre mot de passe, faute de quoi le fichier sera inutilisable. \n        Les clés privées de vos comptes seront supprimées pendant l'export, les seules clés privées restantes dans le fichier exporté\n        seront les clés relatives à vos Identités.\n    "
	},
	"import": {
		"header": "Importer sauvegarde encryptée",
		"description": "\n        L'importation du fichier encrypté contenant votre porte-clés restaurera votre porte-clés Scatter mais vos anciens réseaux ou\n        comptes ne seront pas importés.\n    "
	},
	"pass": {
		"header": "Entrez un nouveau mot de passe",
		"description": "\n        Le changement de votre mot de passe provoquera le décryptage de toute votre information, qui reste en temps normal encryptée en \n        permanence, puis son ré-encodage en utilisant la graine aléatoire du nouveau mot de passe.\n    "
	},
	"network": {
		"header": "Ajouter un nouveau réseau",
		"description": "\n        Les applications utilisent généralement un réseau spécifique mais il se peut \n        qu'elles n'utilisent pas toutes le même réseau. Par exemple, une application\n        pourrait utiliser un réseau d'essai pour tester certaines fonctions non encore ajoutées.\n        Afin d'interagir avec un tel réseau, vous devez vous devriez y avoir un compte.\n    "
	},
	"destroy": {
		"header": "Destruction de Scatter",
		"description": "\n        Vous êtes sur le point de détruire votre porte-clés Scatter en totalité. La seule façon de retrouver votre Scatter\n        en l'état actuel serait d'importer un Scatter JSON exporté. Vous ne serez pas en mesure de revendiquer vos\n        identités autrement. Assurez-vous de bien avoir exporté votre Scatter depuis le panneau de configuration avant\n        de procéder à sa destruction.\n    "
	},
	"language": {
		"header": "Sélectionnez la langue"
	},
	"keypairs": {
		"noKeyPairsHeader": "Vous n'avez pas de paire de clés.",
		"noKeyPairsDescription": "\n        Cliquez sur le bouton situé dans la partie supérieure droite afin de créer ou importer une pare de clés.\n    "
	},
	"keypair": {
		"header": "Générer une nouvelle Paire de Clés",
		"description": "\n        Vous pouvez utiliser ce panneau pour générer de nouvelles paires de clés. Ces paires de clés sont générées\n        localement sur votre appareil et ne sont jamais envoyées ailleurs. Vous pouvez également renseigner une clé\n        privée et la clé publique associée sera générée automatiquement.\n    ",
		"important": "Sauvegardez votre clé privée ailleurs! Vous ne pourrez pas extraire vos clés privées de Scatter.",
		"validation": "La clé publique associée à la clé privée ne correspond pas à la clé publique renseignée !"
	},
	"lock": {
		"header": "Minuterie de Verrouillage Automatique",
		"description": "\n        Le Verrouillage Automatique gère le verrouillage de Scatter pour vous\n        afin que vous ne vous souciez pas de verrouiller votre Scatter lorsque\n        vous vous éloignez de votre appareil.\n    ",
		"minute": "Minute",
		"minutes": "Minutes",
		"hour": "Heure",
		"hours": "Heures",
		"neverLock": "Ne jamais verrouiller"
	},
	"mnemonic": {
		"header": "Mnémonique",
		"description": "Le code mnémonique est un ensemble de mots qui font office de graine aléatoire cryptographique.",
		"note": "\n        Assurez-vous de bien sauvegarder le votre en un endroit sûr. C'est la seule façon de restaurer l'accès\n        à votre Scatter et déchiffrer vos informations privées si vous oubliez votre mot de passe.\n    ",
		"wrote": "I Wrote It Down"
	},
	"onboarding": {
		"title": "Welcome to Use",
		"desc1": "The developer team holds no liability towards your digital assets. It is your responsibility to constantly make sure your computer is free of malware. We have taken every measure in our capabilities to ensure that this software is safe to use as intended however your computer itself is your worst enemy and should be treated as such.",
		"desc2": "By using this software you are relinquishing any ability to take legal actions against the developer team and recognize yourself as the sole legal owner of your own wallet instance, your keys, and your data."
	},
	"error": {
		"mustSelectItem": "Vous devez sélectionner un élément."
	},
	"alert": {
		"badIdentityName": [
			"Nom d'Identité incorrect",
			"Votre nom d'Identité doit comporter de 3 à 20 caractères.\n         Il doit contenir uniquement des caractères alphanumériques, des espaces, \n         des tirets (-) et des traits de soulignement (_)."
		],
		"identityNameExists": [
			"Ce Nom d'Identité existe déjà.",
			"Ce Nom d'Identité a été enregistré par une autre Identité."
		],
		"noSuchIdentityName": [
			"Ce Nom d'Identité n'existe pas.",
			"Ce Nom d'Identité n'a pas été enregistré dans RIDL."
		],
		"keyPairExists": [
			"La Paire de Clés existe déjà",
			"Cette Paire de Clés est déjà enregistrée dans votre Porte-clés."
		],
		"badKeyPairName": [
			"Nom de Paire de Clés incorrect",
			"Les Paires de Clés doivent être nommées de manière unique."
		],
		"invalidPrivateKey": [
			"Clé Privée invalide",
			"La clé privée que vous avez renseigné est invalide. Veuillez vérifier la clé et réessayer."
		],
		"noAccountsFound": [
			"Aucun compte trouvé",
			"Aucun compte associé à cette clé privée n'a été trouvé.\n         Si vous désirez importer une clé qui n'a pas été générée\n         par Scatter, vous devez créer un compte pour la clé avant\n         de l'importer."
		],
		"passwordsDoNotMatch": [
			"Les mots de passe ne correspondent pas",
			"Le mot de passe saisi ne correspond pas à la confirmation."
		],
		"badPassword": [
			"Mot de passe incorrect",
			"Votre mot de passe doit contenir au moins 8 caractères."
		],
		"wrongPassword": [
			"Mot de passe incorrect",
			"Le mot de passe saisi est incorrect."
		],
		"networkHostInvalid": [
			"Hôte Réseau invalide",
			"L'Hôte réseau que vous avez saisi est invalide. L'Hôte doit être un\n         nom de domaine ( ex: testnet.eos.io ) ou une adresse IP ( ex: 192.168.0.1 )."
		],
		"networkExists": [
			"Ce réseau existe déjà",
			"Un autre Réseau avec cet hôte et ce port existe déjà. Un réseau ne peut être sauvegardé en double."
		],
		"removingEndorsedNetwork": [
			"Impossible de Supprimer le Réseau Approuvé",
			"Vous ne pouvez pas supprimer les Réseaux Approuvés par Scatter."
		],
		"youMustSelectAnIdentity": [
			"Vous devez choisir une Identité",
			"Si vous ne désirez pas dévoiler d'Identité, vous pouvez appuyez sur le bouton Refuser. Dans le cas contraire, vous\n         devez choisir une Identité afin d'accepter cette requête."
		]
	},
	"prompt": {
		"destroyingScatter": [
			"Destruction de Scatter",
			"C'est votre dernière chance de vérifier vos sauvegardes."
		],
		"removingNetwork": [
			"Suppression du Réseau",
			"Vous êtes sur le point de supprimer un Réseau. Vous ne\n         serez plus en mesure de créer de nouveaux comptes sur ce\n         Réseau si vous le supprimez mais vous pouvez le ré-ajouter\n         à tout moment. Aucun compte utilisant ce Réseau ne sera\n         modifié ou supprimé"
		],
		"whitelistingContractAction": [
			"Vous êtes sur le point d'inscrire un contrat de devise sur liste blanche",
			" Inscrire un contrat de devise sur liste blanche est dangereux et ne devrait jamais avoir lieu. Il existe des cas très\n         particuliers où une telle action est tolérée mais à moins que vous ne soyez absolument sûr qu'il s'agit présentement d'un\n         de ces cas, vous ne devriez pas inscrire cette action de contrat sur liste blanche.\n         Êtes-vous sûr de vouloir inscrire ceci sur liste blanche ?"
		],
		"selectAccount": [
			"Choisir Compte",
			"Choisissez le compte et l'autorité que vous désirez utiliser pour cette identité. Vous ne pouvez choisir qu'un compte à la fois."
		],
		"claimIdentity": [
			"Revendiquer l'Identité",
			"Veuillez renseigner la clé privée associée à la clé publique enregistrée pour votre nom d'Identité."
		]
	},
	"request": {
		"addNetwork": [
			"veut ajouter son réseau à votre Scatter.",
			"Certaines applications utilisent leur propre Réseau.",
			"Ceci ne donne à l'application aucun accès à votre Scatter.\n         Ajouter un réseau depuis cette interface vous évite simplement\n         l'effort de l'ajouter manuellement depuis votre panneau de \n         configuration."
		],
		"identity": [
			"demande des informations supplémentaires.",
			"Parfois certaines applications demandent des informations\n         supplémentaires telles que votre e-mail ou votre date de \n         naissance. Les Identités présentes à droite sont celles\n         que vous possédez sur ce Réseau avec les propriétés \n         demandées.",
			"Même si vous fournissez une Identité possédant des propriétés \n         pour lesquelles l'application de ne demande pas de permissions, \n         ces propriétés ne seront jamais dévoilées voire même l'application\n         ne saura pas que de telles propriétés existent pour cette Identité.",
			"Les seules propriétés qui sont données systématiquement sont la clé publique de \n         l'Identité et son nom.",
			" ne demande aucune information supplémentaire. La seule demande est un hash et un nom d'Identité."
		],
		"identityNoIdentities": [
			"Vous n'avez aucune Identité dont les propriétés demandées par cette application sont renseignées.",
			"Si vous voulez utiliser cette Identité sur ce domaine, vous devez mettre à jour cette Identité et fournir les informations\n         demandées. Vous pouvez voir ce que demande ce domaine sur le panneau de gauche."
		],
		"signatureWhitelist": [
			"Voulez-vous inscrire cette action de contrat sur liste blanche?",
			"Vous pouvez inscrire cette action sur liste blanche afin de ne plus devoir l'autoriser\n         manuellement. Une propriété comportant une coche deviendra muable, ce qui veut dire que\n         vous pouvez autoriser le changement de certaines propriétés de cette transaction et \n         seulement si les propriétés sans coche changent, l'inscription sur liste blanche échouera.",
			"Ceci comprend les informations personnelles requises et aucun changement effectué sur votre Identité\n         ne supprime vos permissions.",
			"Si vous possédez plusieurs emplacements et qu'une transaction en requiert une, celle-ci vous sera \n         toujours demandée."
		],
		"scatterIsLocked": [
			"Votre Scatter est verrouillé!",
			"Avant que vous ne puissiez faire quoi que ce soit, vous devez le déverrouiller.",
			"Nous faisons exprès de ne jamais afficher une fenêtre ou un popup vous demandant de vous identifier.",
			"Si vous voyez une fenêtre ou un popup vous demandant votre mot de passe, c'est un site web malveillant essayant de\n         voler votre mot de passe. Veuillez à toujours déverrouiller Scatter depuis le popup de l'extension en cliquant sur\n         l'icône dans la barre de votre navigateur."
		],
		"updateVersion": [
			"Vous n'avez pas la dernière version de Scatter!",
			"exige une version plus récente de Scatter.",
			"Ceci veut généralement dire que de nouvelles fonctionnalités ont été ajoutées à Scatter et une application \n         essaie de les utiliser alors qu'elles ne sont pas inclues dans la version installée sur votre appareil.",
			"Merci de bien vouloir noter que nous laissons le soin aux applications de vérifier la version de Scatter.\n        Celles-ci pourraient essayer de vous faire télécharger un logiciel malveillant. Veuillez à télécharger\n        Scatter depuis une source de confiance."
		]
	}
}