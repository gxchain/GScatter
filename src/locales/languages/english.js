export default {
	"generic": {
		"new": "New",
		"save": "Save",
		"ignored": "Ignored",
		"identity": "Identity",
		"contract": "Contract",
		"action": "Action",
		"removed": "Removed",
		"name": "Name",
		"search": "Search",
		"verifyPassword": "You need to verify your current password before you can do this.",
		"host": "Host",
		"port": "Port",
		"protocol": "Protocol",
		"requires": "Requires",
		"requiredProperties": "Required Properties",
		"import": "Import",
		"chainId": "Chain ID",
		"blockchain": "Blockchain",
		"account": "Account"
	},
	"placeholder": {
		"name": "Name",
		"publicKey": "Public Key",
		"privateKey": "Private Key",
		"firstName": "First Name",
		"lastName": "Last Name",
		"email": "Email",
		"birthDate": "Birth Date",
		"locationName": "Location Name",
		"defaultLocationName": "Home",
		"phone": "Phone",
		"address": "Address",
		"city": "City",
		"postal": "Postal Code",
		"country": "Country",
		"state": "State",
		"password": "Password or Mnemonic",
		"confirmPassword": "Confirm Password",
		"newPassword": "New Password",
		"confirmNewPassword": "Confirm New Password",
		"domainOrIp": "Domain or IP",
		"pasteYourBackup": "Paste your Backup"
	},
	"button": {
		"createIdentity": "Create Identity",
		"importAccount": "Import Account",
		"importKeychain": "Import Keychain",
		"selectFile": "Select File",
		"addNewLocation": "Add New Location",
		"setAsDefaultLocation": "Set As Default Location",
		"removeLocation": "Remove Location",
		"changePassword": "Change Password",
		"destroyScatter": "Destroy Scatter",
		"createNewScatter": "Create New Scatter",
		"loadFromBackup": "Load From Backup",
		"unlock": "Unlock",
		"exportScatter": "Export Scatter",
		"generateKeyPair": "Generate Key Pair",
		"validate": "Validate",
		"copy": "Copy",
		"changeLanguage": "Change Language",
		"cancel": "Cancel",
		"accept": "Accept",
		"deny": "Deny",
		"yes": "Yes",
		"no": "No",
		"useSelectedAccount": "Use Selected Account",
		"selectIdentity": "Select Identity",
		"changeName": "Change Name",
		"claimIdentity": "Claim Identity",
		"registerIdentity": "Register Identity"
	},
	"mainmenu": {
		"identities": "Identities",
		"keys": "Key Pairs",
		"permissions": "Permissions",
		"history": "History",
		"lock": "Lock"
	},
	"identities": {
		"header": "You don't have any Identities yet.",
		"description": "\n        Identities are containers for personal information such as first and last names, addresses and\n        various blockchain accounts/keypairs. Identities also have keypairs and their ownership \n        can be proven which makes them a way to authenticate with applications without passwords.\n    "
	},
	"identity": {
		"disablingHeader": "What does Disabling do?",
		"disablingDescription": "\n        Disabling this Identity will stop it from being used in applications that have a reference to it.\n        This can be used instead of permanently deleting this Identity or it's Permissions on an application,\n        which would be harder to recover.\n    ",
		"nameHeader": "Identity Name",
		"nameDescription": "\n        Applications may choose to use this name as your username as it is unique across all networks.\n        If you are not registered with RIDL you will be assigned a random name.\n    ",
		"noKeyPairsHeader": "No Key Pairs!",
		"noKeyPairsDescription": "\n        Before you can add blockchain accounts to this Identity you need to add some key pairs. Go to the main menu and select: \n    ",
		"accountHeader": "Account",
		"accountDescription": "\n        Accounts are what hold your funds and allow you to interact with contracts on the Blockchain. \n        In relation to Identities think of them like the bank accounts connected to your passport, they can \n        be changed at any time.\n    ",
		"personalHeader": "Personal Information",
		"personalDescription": "\n        Personal information can be added to an account for applications that require it. For instance a shopping \n        website might need your full name in order to know who to send your purchased goods to.\n    ",
		"locationHeader": "Location Information",
		"locationDescription": "\n        Location information can be added to an account for applications that require it. \n        For instance a shopping website might need your shipping address in order to know where to send \n        your purchased goods to.\n    "
	},
	"permissions": {
		"header": "You don't have any permissions to display.",
		"description": "\n        Permissions are set when you either provide an Identity for an application to use, or when you whitelist \n        a contract action to be signed without authorization prompts.\n    "
	},
	"permission": {
		"revokeIdentity": "Revoke Identity",
		"revokeContract": "Revoke Contract",
		"revokeAction": "Revoke Action"
	},
	"histories": {
		"header": "You don't have any historic events to display.",
		"description": "\n        Once you have them, you will be able to see a list of all of the events that pass through your Scatter.\n        What you will not see is events that occurred on your accounts outside of scatter.\n     ",
		"note": "\n        Note: Exporting your Scatter data from the backup option in the settings panel does not save these events.\n        When you import that Scatter instance again your histories will be empty. If you would like to export your histories\n        in the future you can do so using the action buttons on the navbar within this panel.\n    "
	},
	"settingsmenu": {
		"networks": "Networks",
		"keypairs": "Key Pairs",
		"language": "Language",
		"autoLock": "Auto Lock",
		"password": "Password",
		"backup": "Backup",
		"destroy": "Destroy"
	},
	"backup": {
		"header": "Export encrypted backup",
		"description": "\n        Exporting your Scatter allows you to import it into other devices. The file will still be encrypted when it is \n        exported so make sure you have either your mnemonic or your password, otherwise it will be useless. \n    "
	},
	"import": {
		"header": "Import encrypted backup",
		"description": "\n        Importing your encrypted keychain file will rebuild you Scatter keychain but it will not import your old networks or \n        accounts. \n    "
	},
	"pass": {
		"header": "Enter a new password",
		"description": "\n        By changing your password you will be decrypting all of the saved information which is usually always \n        encrypted, and then re-encrypting it with a seed from the new password.\n    "
	},
	"network": {
		"header": "Add a new network",
		"description": "\n        Applications usually run on a specific network, but they might not all run on\n        the same network. For instance an application can have a testing network\n        that has new features which are not yet released. In order to interact with\n        that network you will need to have an account there as well.\n    "
	},
	"destroy": {
		"header": "Destroying Scatter",
		"description": "\n        You are about to destroy your entire Scatter keychain. The only way to get this exact Scatter back is by \n        importing an exported Scatter JSON. You will not be able to claim your identities otherwise. Make sure you \n        have exported your Scatter from the backup settings panel before hand.\n    "
	},
	"language": {
		"header": "Select your language"
	},
	"keypairs": {
		"noKeyPairsHeader": "You don't have any keypairs.",
		"noKeyPairsDescription": "\n        Click the button on the top right to create/import a keypair.\n    "
	},
	"keypair": {
		"header": "Generate a new Key Pair",
		"description": "\n        You can use this panel to generate key pairs. These key pairs are generated locally on your machine \n        and are never sent anywhere. You can also paste in a private key and it will automatically generate the public key.\n    ",
		"important": "Save your private key elsewhere! You can not take private keys back out of Scatter.",
		"validation": "The public key generated from the private key did not match the public key provided!"
	},
	"lock": {
		"header": "Auto Lock Timer",
		"description": "\n        Auto Lock handles Scatter's locking for you so that you don't have to \n        remember to lock your Scatter when you step away.\n    ",
		"minute": "Minute",
		"minutes": "Minutes",
		"hour": "Hour",
		"hours": "Hours",
		"neverLock": "Never Lock"
	},
	"mnemonic": {
		"header": "Mnemonic",
		"description": "Mnemonics in Scatter are only used for password recovery.",
		"note": "\n        Be sure to save yours somewhere safe. It is the only way to regain access to your \n        Scatter and decrypt your private information if you forget your password.\n    ",
		"wrote": "I Wrote It Down"
	},
	"onboarding": {
		"title": "Welcome to Use",
		"desc1": "The developer team holds no liability towards your digital assets. It is your responsibility to constantly make sure your computer is free of malware. We have taken every measure in our capabilities to ensure that this software is safe to use as intended however your computer itself is your worst enemy and should be treated as such.",
		"desc2": "By using this software you are relinquishing any ability to take legal actions against the developer team and recognize yourself as the sole legal owner of your own wallet instance, your keys, and your data."
	},
	"error": {
		"mustSelectItem": "You must select an item."
	},
	"alert": {
		"badIdentityName": [
			"Bad Identity Name",
			"Identity names must be between 3 and 20 characters long.\n         They must also be alphanumeric but may also contain spaces, dashes, and underscores."
		],
		"identityNameExists": [
			"Identity Name Exists",
			"This Identity name is registered to another Identity."
		],
		"noSuchIdentityName": [
			"No such Identity name",
			"This Identity name is not reserved in RIDL."
		],
		"keyPairExists": [
			"Key Pair Exists",
			"This Key Pair is already registered in your keychain."
		],
		"badKeyPairName": [
			"Bad Key Pair Name",
			"Key Pairs must be named uniquely."
		],
		"invalidPrivateKey": [
			"Invalid Private Key",
			"The private key you entered seems to be invalid. Please check the key and try again."
		],
		"noAccountsFound": [
			"No Accounts Found",
			"No accounts were found connected to this private/public key. Make sure there is an EOS account linked to this public key on the EOS network."
		],
		"passwordsDoNotMatch": [
			"Passwords Do Not Match",
			"The password you entered does not match it's confirmation."
		],
		"badPassword": [
			"Bad Password",
			"Passwords must be at least 8 characters long"
		],
		"wrongPassword": [
			"Wrong Password",
			"The password you entered was incorrect."
		],
		"networkHostInvalid": [
			"Network Host Invalid",
			"The Network host you entered was invalid. Hosts should be either a domain name\n         ( ex: testnet.eos.io ) or an IP ( ex: 192.168.0.1 )."
		],
		"networkExists": [
			"Network Already Exists",
			"Another Network with this host and port already exists. There is no reason to have a network saved twice."
		],
		"removingEndorsedNetwork": [
			"Cannot Remove Endorsed Network",
			"You cannot remove Scatter's endorsed Networks."
		],
		"youMustSelectAnIdentity": [
			"You Must Select An Identity",
			"If you do not wish to expose an Identity you can press the Deny button, otherwise an Identity must be\n         selected in order to accept this request."
		]
	},
	"prompt": {
		"destroyingScatter": [
			"Destroying Scatter",
			"This is your last chance to double check your backups."
		],
		"removingNetwork": [
			"Removing Network",
			"You are about to delete a Network. You will not be able\n         to create new accounts on this Network once you delete it,\n         but nothing is stopping you from re-adding it. Any accounts\n         already using this Network will not be modified or removed."
		],
		"whitelistingContractAction": [
			"You Are About To Whitelist A Currency Contract",
			"Whitelisting currency based contracts is dangerous, and should never be done. There are specific cases where this is okay,\n         but unless you are absolutely sure this is one of them, you should not be whitelisting this contract action.\n         Are you sure you still want to whitelist this?"
		],
		"selectAccount": [
			"Select Account",
			"Select the account and authorization you wish to use for this Identity. You can only select one at a time. In almost all cases you should select your @active account"
		],
		"claimIdentity": [
			"Claim Identity",
			"Put in the private key that matches the public key on file for your identity name."
		]
	},
	"request": {
		"addNetwork": [
			"wants to add their network to your Scatter.",
			"Some applications use their own Networks.",
			"This in no way gives the application any access to your Scatter. \n         Adding a network through this interface simply saves you\n         the effort of manually adding it from your Settings panel."
		],
		"identity": [
			"is requesting additional information.",
			"Sometimes applications ask for some more information such as\n         your email or date of birth. The Identities on the right are ones you own\n         on the network with those specific properties available.",
			"Even if you provide an Identity with properties that the\n         application is not requesting permissions for, they will never\n         be able to see them, or even know they exist for that Identity.",
			"The only properties which are always given is the Identity's public key and it's name.",
			"is not requesting any additional information. The only thing that they are requiring is an Identity hash and name."
		],
		"identityNoIdentities": [
			"You don't have any Identities that match the properties that this application is requiring.",
			"If you would like to use an Identity with this domain, you will need to update that Identity and fulfill the requirements.\n         You can see what this domain is requiring on the left panel."
		],
		"signatureWhitelist": [
			"Do you want to whitelist this contract action?",
			"You can whitelist this action so that next time you won't have to manually authorize this.\n         Every property that has a check next to it will become mutable, meaning that you can allow\n         certain properties of this transaction to change and only if the other properties are changed will\n         it fail to be whitelisted.",
			"This includes required personal information, and changes to your Identity do not remove permissions.",
			"If you have multiple locations and a transaction requires a location you will always be prompted."
		],
		"scatterIsLocked": [
			"Your Scatter is locked!",
			"Before you can do anything with your Scatter you will need to unlock it.",
			"We will purposely never show a prompt/popup which requires you to log in.",
			"If you see a prompt/popup which is requesting your password, it is a malicious website trying to get your password.\n         Always only unlock Scatter from the extension's popup by clicking on the icon in your browser tray."
		],
		"updateVersion": [
			"Your Scatter is out of date!",
			"is requiring you have a version of Scatter that is newer than the one installed.",
			"This usually means that new functionality was released and an application is trying to use it but it's not\n         currently included in the build you have installed.",
			"Please Note, we leave version checking up to the applications themselves. They could be maliciously trying to\n         get you to download something. Make sure you always download Scatter from the proper location."
		]
	}
}