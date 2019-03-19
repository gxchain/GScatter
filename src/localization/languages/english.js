import * as KEYS from '../keys';
import * as AlertTypes from '../../models/alerts/AlertTypes';

export default {
    [KEYS.ROUTENAMES_LOAD_FROM_BACKUP]:`Import Keychain`,
    [KEYS.ROUTENAMES_SETTINGS]:`Settings`,
    [KEYS.ROUTENAMES_TRANSFER]:`Transfer`,
    [KEYS.ROUTENAMES_IDENTITIES]:`Identities`,
    [KEYS.ROUTENAMES_IDENTITY]:`Identity`,
    [KEYS.ROUTENAMES_PERMISSIONS]:`Permissions`,
    [KEYS.ROUTENAMES_DOMAIN_PERMISSIONS]:`Permissions`,
    [KEYS.ROUTENAMES_HISTORY]:`History`,
    [KEYS.ROUTENAMES_NETWORKS]:`Networks`,
    [KEYS.ROUTENAMES_NETWORK]:`Network`,
    [KEYS.ROUTENAMES_CHANGE_PASSWORD]:`Password`,
    [KEYS.ROUTENAMES_BACKUP]:`Backup`,
    [KEYS.ROUTENAMES_EXPORT_JSON]:`Backup`,
    [KEYS.ROUTENAMES_DESTROY]:`Destroy`,
    [KEYS.ROUTENAMES_AUTO_LOCK]:`Auto Lock`,
    [KEYS.ROUTENAMES_LANGUAGE]:`Language`,
    [KEYS.ROUTENAMES_KEYPAIRS]:`Key Pair`,
    [KEYS.ROUTENAMES_KEYS]:`Key Pairs`,
    [KEYS.ROUTENAMES_REGISTER_ACCOUNT]:`Register`,

    [KEYS.GENERIC_New]:`New`,
    [KEYS.GENERIC_Save]:`Save`,
    [KEYS.GENERIC_Ignored]:`Ignored`,
    [KEYS.GENERIC_Identity]:`Identity`,
    [KEYS.GENERIC_Contract]:`Contract`,
    [KEYS.GENERIC_Action]:`Action`,
    [KEYS.GENERIC_Removed]:`Removed`,
    [KEYS.GENERIC_Name]:`Name`,
    [KEYS.GENERIC_Search]:`Search`,
    [KEYS.GENERIC_VerifyPassword_Header]:`Verify Your Password`,
    [KEYS.GENERIC_VerifyPassword_Description]:`You need to verify your current password before you can do this.`,
    [KEYS.GENERIC_Host]:'Host',
    [KEYS.GENERIC_Port]:'Port',
    [KEYS.GENERIC_Protocol]:'Protocol',
    [KEYS.GENERIC_Requires]:'Requires',
    [KEYS.GENERIC_RequiredProperties]:'Required Properties',
    [KEYS.GENERIC_Import]:'Import',
    [KEYS.GENERIC_ChainID]:'Chain ID',
    [KEYS.GENERIC_Blockchain]:'Blockchain',
    [KEYS.GENERIC_Account]:'Account',

    [KEYS.PLACEHOLDER_Name]:'Name',
    [KEYS.PLACEHOLDER_PublicKey]:'Public Key',
    [KEYS.PLACEHOLDER_PrivateKey]:'Private Key',
    [KEYS.PLACEHOLDER_FirstName]:'First Name',
    [KEYS.PLACEHOLDER_LastName]:'Last Name',
    [KEYS.PLACEHOLDER_Email]:'Email',
    [KEYS.PLACEHOLDER_BirthDate]:'Birth Date',
    [KEYS.PLACEHOLDER_LocationName]:'Location Name',
    [KEYS.PLACEHOLDER_DefaultLocationName]:'Home',
    [KEYS.PLACEHOLDER_Phone]:'Phone',
    [KEYS.PLACEHOLDER_Address]:'Address',
    [KEYS.PLACEHOLDER_City]:'City',
    [KEYS.PLACEHOLDER_Postal]:'Postal Code',
    [KEYS.PLACEHOLDER_Country]:'Country',
    [KEYS.PLACEHOLDER_State]:'State',
    [KEYS.PLACEHOLDER_Password]:'Password or Mnemonic',
    [KEYS.PLACEHOLDER_ConfirmPassword]:'Confirm Password',
    [KEYS.PLACEHOLDER_NewPassword]:'New Password',
    [KEYS.PLACEHOLDER_ConfirmNewPassword]:'Confirm New Password',
    [KEYS.PLACEHOLDER_DomainOrIP]:'Domain or IP',
    [KEYS.PLACEHOLDER_PasteYourBackup]:'Paste your Backup',

    [KEYS.BUTTON_CreateIdentity]:'Create Identity',
    [KEYS.BUTTON_ImportAccount]:'Import Account',
    [KEYS.BUTTON_ImportKeychain]:'Import Keychain',
    [KEYS.BUTTON_SelectFile]:'Select File',
    [KEYS.BUTTON_AddNewLocation]:'Add New Location',
    [KEYS.BUTTON_SetAsDefaultLocation]:'Set As Default Location',
    [KEYS.BUTTON_RemoveLocation]:'Remove Location',
    [KEYS.BUTTON_ChangePassword]:'Change Password',
    [KEYS.BUTTON_DestroyScatter]:'Destroy GXC Wallet',
    [KEYS.BUTTON_CreateNewScatter]:'Create New GXC Wallet',
    [KEYS.BUTTON_LoadFromBackup]:'Load From Backup',
    [KEYS.BUTTON_Unlock]:'Unlock',
    [KEYS.BUTTON_ExportScatter]:'Export GXC Wallet',
    [KEYS.BUTTON_GenerateKeyPair]:'Generate Key Pair',
    [KEYS.BUTTON_Validate]:'Validate',
    [KEYS.BUTTON_Copy]:'Copy',
    [KEYS.BUTTON_ChangeLanguage]:'Change Language',
    [KEYS.BUTTON_Cancel]:'Cancel',
    [KEYS.BUTTON_Accept]:'Accept',
    [KEYS.BUTTON_Deny]:'Deny',
    [KEYS.BUTTON_Yes]:'Yes',
    [KEYS.BUTTON_No]:'No',
    [KEYS.BUTTON_UseSelectedAccount]:'Use Selected Account',
    [KEYS.BUTTON_SelectIdentity]:'Select Identity',
    [KEYS.BUTTON_Selected]:'Selected',
    [KEYS.BUTTON_NotSelected]:'Not Selected',
    [KEYS.BUTTON_ChangeName]:'Change Name',
    [KEYS.BUTTON_ClaimIdentity]:'Claim Identity',
    [KEYS.BUTTON_RegisterIdentity]:'Register Identity',

    [KEYS.MAINMENU_Identities]:'Identities',
    [KEYS.MAINMENU_Keys]:'Key Pairs',
    [KEYS.MAINMENU_Register]:'Register',
    [KEYS.MAINMENU_Permissions]:'Permissions',
    [KEYS.MAINMENU_History]:'History',
    [KEYS.MAINMENU_Lock]:'Lock',

    [KEYS.IDENTITIES_Header]:`You don't have any Identities yet.`,
    [KEYS.IDENTITIES_Description]:`
        Identities are containers for personal information such as first and last names, addresses and
        various blockchain accounts/keypairs. Identities also have keypairs and their ownership 
        can be proven which makes them a way to authenticate with applications without passwords.
    `,

    [KEYS.IDENTITY_DisablingHeader]:`What does Disabling do?`,
    [KEYS.IDENTITY_DisablingDescription]:`
        Disabling this Identity will stop it from being used in applications that have a reference to it.
        This can be used instead of permanently deleting this Identity or it's Permissions on an application,
        which would be harder to recover.
    `,

    [KEYS.IDENTITY_NameHeader]:`Identity Name`,
    [KEYS.IDENTITY_NameDescription]:`
        Applications may choose to use this name as your username as it is unique across all networks.
        If you are not registered with RIDL you will be assigned a random name.
    `,
    [KEYS.IDENTITY_NoKeyPairsHeader]:`No Key Pairs!`,
    [KEYS.IDENTITY_NoKeyPairsDescription]:`
        Before you can add blockchain accounts to this Identity you need to add some key pairs. Go to the main menu and select: 
    `,
    [KEYS.IDENTITY_AccountHeader]:`Account`,
    [KEYS.IDENTITY_AccountDescription]:`
        Accounts are what hold your funds and allow you to interact with contracts on the Blockchain. 
        In relation to Identities think of them like the bank accounts connected to your passport, they can 
        be changed at any time.
    `,
    [KEYS.IDENTITY_PersonalHeader]:`Personal Information`,
    [KEYS.IDENTITY_PersonalDescription]:`
        Personal information can be added to an account for applications that require it. For instance a shopping 
        website might need your full name in order to know who to send your purchased goods to.
    `,
    [KEYS.IDENTITY_LocationHeader]:`Location Information`,
    [KEYS.IDENTITY_LocationDescription]:`
        Location information can be added to an account for applications that require it. 
        For instance a shopping website might need your shipping address in order to know where to send 
        your purchased goods to.
    `,

    [KEYS.PERMISSIONS_Header]:`You don't have any permissions to display.`,
    [KEYS.PERMISSIONS_Description]:`
        Permissions are set when you either provide an Identity for an application to use, or when you whitelist 
        a contract action to be signed without authorization prompts.
    `,
    [KEYS.PERMISSION_RevokeIdentity]:`Revoke Identity`,
    [KEYS.PERMISSION_RevokeContract]:`Revoke Contract`,
    [KEYS.PERMISSION_RevokeAction]:`Revoke Action`,

    [KEYS.HISTORIES_Header]:`You don't have any historic events to display.`,
    [KEYS.HISTORIES_Description]:`
        Once you have them, you will be able to see a list of all of the events that pass through your GXC Wallet.
        What you will not see is events that occurred on your accounts outside of GXC Wallet.
     `,
    [KEYS.HISTORIES_Note]:`
        Note: Exporting your GXC Wallet data from the backup option in the settings panel does not save these events.
        When you import that GXC Wallet instance again your histories will be empty. If you would like to export your histories
        in the future you can do so using the action buttons on the navbar within this panel.
    `,

    [KEYS.SETTINGSMENU_Networks]:'Networks',
    [KEYS.SETTINGSMENU_Keypairs]:'Key Pairs',
    [KEYS.SETTINGSMENU_Language]:'Language',
    [KEYS.SETTINGSMENU_AutoLock]:'Auto Lock',
    [KEYS.SETTINGSMENU_Password]:'Password',
    [KEYS.SETTINGSMENU_Backup]:'Backup',
    [KEYS.SETTINGSMENU_Destroy]:'Destroy',

    [KEYS.BACKUP_Header]:`Export encrypted backup`,
    [KEYS.BACKUP_Description]:`
        Exporting your GXC Wallet allows you to import it into other devices. The file will still be encrypted when it is 
        exported so make sure you have either your mnemonic or your password, otherwise it will be useless. 
    `,

    [KEYS.IMPORT_Header]:`Import encrypted backup`,
    [KEYS.IMPORT_Description]:`
        Importing your encrypted keychain file will rebuild you GXC Wallet keychain but it will not import your old networks or 
        accounts. 
    `,
    [KEYS.IMPORT_Keypair]:`Import Key Pair`,
    [KEYS.IMPORT_Keypair_Description]:`Import your GXChain private key, we will store it encrypted by your wallet password.`,
    [KEYS.IMPORT_Keypair_Button]: (blockchain) => {
        return `Import ${blockchain} Key Pair`
    },
    [KEYS.IMPORT_Success_Title]: `That's it!`,
    [KEYS.IMPORT_Success_Description]: (blockchain) => {
        return `You now have a GXC Wallet Identity with an ${blockchain} account linked to it.
                    <br><br>
                    You can go to your Identity and fill out any extra fields applications might want from you, but none
                    of the fields in your
                    Identity are mandatory.
                    <br><br>
                    Enjoy using GXC Wallet.`
    },
    [KEYS.IMPORT_Success_Button]: `Main Menu`,

    [KEYS.PASS_Header]:`Enter a new password`,
    [KEYS.PASS_Description]:`
        By changing your password you will be decrypting all of the saved information which is usually always 
        encrypted, and then re-encrypting it with a seed from the new password.
    `,

    [KEYS.NETWORK_Header]:`Add a new network`,
    [KEYS.NETWORK_Description]:`
        Applications usually run on a specific network, but they might not all run on
        the same network. For instance an application can have a testing network
        that has new features which are not yet released. In order to interact with
        that network you will need to have an account there as well.
    `,

    [KEYS.DESTROY_Header]:`Destroying GXC Wallet`,
    [KEYS.DESTROY_Description]:`
        You are about to destroy your entire GXC Wallet keychain. The only way to get this exact GXC Wallet back is by 
        importing an exported GXC Wallet JSON. You will not be able to claim your identities otherwise. Make sure you 
        have exported your GXC Wallet from the backup settings panel before hand.
    `,
    [KEYS.DESTROY_Confirms]:[
        'Destroying Scatter',
        'This is your last chance to double check your backups.'
    ],

    [KEYS.LANGUAGE_Header]:`Select your language`,

    [KEYS.KEYPAIRS_NoKeyPairsHeader]:`You don't have any keypairs.`,
    [KEYS.KEYPAIRS_NoKeyPairsDescription]:`
        Click the button on the top right to create/import a keypair.
    `,

    [KEYS.KEYPAIR_Header]:`Generate a new Key Pair`,
    [KEYS.KEYPAIR_Description]:`
        You can use this panel to generate key pairs. These key pairs are generated locally on your machine 
        and are never sent anywhere. You can also paste in a private key and it will automatically generate the public key.
    `,
    [KEYS.KEYPAIR_Important]:`Save your private key elsewhere! You can not take private keys back out of GXC Wallet.`,
    [KEYS.KEYPAIR_Validation_Header]:`Generate a new Key Pair`,
    [KEYS.KEYPAIR_Validation_Valid]:`The private key is valid and the public key generated from it matches the public key provided.`,
    [KEYS.KEYPAIR_Validation_Invalid]:`The public key generated from the private key did not match the public key provided!`,


    [KEYS.LOCK_Header]:`Auto Lock Timer`,
    [KEYS.LOCK_Description]:`
        Auto Lock handles GXC Wallet's locking for you so that you don't have to 
        remember to lock your GXC Wallet when you step away.
    `,
    [KEYS.LOCK_Minute]:`Minute`,
    [KEYS.LOCK_Minutes]:`Minutes`,
    [KEYS.LOCK_Hour]:`Hour`,
    [KEYS.LOCK_Hours]:`Hours`,
    [KEYS.LOCK_NeverLock]:`Never Lock`,


    [KEYS.MNEMONIC_Header]:`Mnemonic`,
    [KEYS.MNEMONIC_Description]:`Mnemonics in GXC Wallet are only used for password recovery.`,
    [KEYS.MNEMONIC_Note]:`
        Be sure to save yours somewhere safe. It is the only way to regain access to your 
        GXC Wallet and decrypt your private information if you forget your password.
    `,
    [KEYS.MNEMONIC_Wrote]:`I Wrote It Down`,

    [KEYS.ONBOARDING_Title]:`Welcome to Use`,
    [KEYS.ONBOARDING_Desc1]:`The developer team holds no liability towards your digital assets. It is your responsibility to constantly make sure your computer is free of malware. We have taken every measure in our capabilities to ensure that this software is safe to use as intended however your computer itself is your worst enemy and should be treated as such.`,
    [KEYS.ONBOARDING_Desc2]:`By using this software you are relinquishing any ability to take legal actions against the developer team and recognize yourself as the sole legal owner of your own wallet instance, your keys, and your data.`,
    [KEYS.ONBOARDING_Import]:`Import Key`,
    [KEYS.ONBOARDING_Reg]:`Create GXChain Account`,
    [KEYS.ONBOARDING_SKIP]:`Skip Guide`,

    [KEYS.ERROR_MustSelectItem]:`You must select an item.`,

    [KEYS.ALERT_Type]:(type) => {
        switch(type){
            case AlertTypes.Error:              return 'Error';
            case AlertTypes.Prompt:             return 'Prompt';
            case AlertTypes.SelectAccount:      return 'Select Account';
        }
    },

    //2
    [KEYS.ALERT_BadIdentityName]:[
        'Bad Identity Name',

        `Identity names must be between 3 and 20 characters long.
         They must also be alphanumeric but may also contain spaces, dashes, and underscores.`
    ],
    //2
    [KEYS.ALERT_IdentityNameExists]:[
        'Identity Name Exists',

        'This Identity name is registered to another Identity.'
    ],
    //2
    [KEYS.ALERT_NoSuchIdentityName]:[
        'No such Identity name',

        'This Identity name is not reserved in RIDL.'
    ],
    //2
    [KEYS.ALERT_KeyPairExists]:[
        'Key Pair Exists',

        'This Key Pair is already registered in your keychain.'
    ],
    //2
    [KEYS.ALERT_BadKeyPairName]:[
        'Bad Key Pair Name',

        'Key Pairs must be named uniquely.'
    ],
    //2
    [KEYS.ALERT_InvalidPrivateKey]:[
        'Invalid Private Key',

        `The private key you entered seems to be invalid. Please check the key and try again.`
    ],
    //2
    [KEYS.ALERT_NoAccountsFound]:[
        'No Accounts Found',

        `No accounts were found connected to this private/public key. Make sure there is an EOS account linked to this public key on the EOS network.`
    ],
    //2
    [KEYS.ALERT_PasswordsDoNotMatch]:[
        'Passwords Do Not Match',

        `The password you entered does not match it's confirmation.`
    ],
    //2
    [KEYS.ALERT_BadPassword]:[
        'Bad Password',

        'Passwords must be at least 8 characters long'
    ],
    //2
    [KEYS.ALERT_WrongPassword]:[
        'Wrong Password',

        'The password you entered was incorrect.'
    ],
    //2
    [KEYS.ALERT_NetworkHostInvalid]:[
        'Network Host Invalid',

        `The Network host you entered was invalid. Hosts should be either a domain name
         ( ex: testnet.eos.io ) or an IP ( ex: 192.168.0.1 ).`
    ],
    //2
    [KEYS.ALERT_NetworkExists]:[
        'Network Already Exists',

        'Another Network with this host and port already exists. There is no reason to have a network saved twice.'
    ],
    //2
    [KEYS.ALERT_RemovingEndorsedNetwork]:[
        'Cannot Remove Endorsed Network',

        `You cannot remove GXC Wallet's endorsed Networks.`
    ],
    //2
    [KEYS.ALERT_NoIdentityWithProperties]:fields => [
        'No Identities Found',

        `This application is requesting an Identity with properties you do not have. The properties they want are '${fields.join(', ')}'`
    ],
    //2
    [KEYS.ALERT_YouMustSelectAnIdentity]:[
        'You Must Select An Identity',

        `If you do not wish to expose an Identity you can press the Deny button, otherwise an Identity must be
         selected in order to accept this request.`
    ],
    //2
    [KEYS.PROMPT_DestroyingScatter]:[
        'Destroying GXC Wallet',

        'This is your last chance to double check your backups.'
    ],
    //2
    [KEYS.PROMPT_RevokingIdentity]:domain => [
        'Revoking Identity',

        `You are about to revoke an entire Identity from ${domain}. This will remove 
         permissions on the Identity itself and all contracts within it.`
    ],
    //2
    [KEYS.PROMPT_RevokingContract]:domain => [
        'Revoking Contract',

        `You are about to revoke an entire contract from ${domain}. This will remove permissions on all actions within it.`
    ],
    //2
    [KEYS.PROMPT_RevokingContractAction]:domain => [
        'Revoking Contract Action',

        `You are about to revoke an action from ${domain}`
    ],
    //2
    [KEYS.PROMPT_RemovingIdentity]:name => [
        'Removing Identity',

        `You are about to remove an Identity with the name '${name}'. Removing Identities is not reversible and
         all permissions will be deleted. If the Identity is being used on applications perhaps you should just disable it instead.`
    ],
    //2
    [KEYS.PROMPT_DeletingKeyPair]:identities => [
        'Deleting Key Pair',

        identities.length ? `This Key Pair is used in: '${identities.join(', ')}'` : `This keypair is not used in any Identities.`
    ],
    //2
    [KEYS.PROMPT_RemovingAccount]:formattedAccountName => [
        'Removing Account',

        `You are about to remove the ${formattedAccountName} account from this Identity.`
    ],
    //2
    [KEYS.PROMPT_RemovingNetwork]:[
        'Removing Network',

        `You are about to delete a Network. You will not be able
         to create new accounts on this Network once you delete it,
         but nothing is stopping you from re-adding it. Any accounts
         already using this Network will not be modified or removed.`
    ],
    //2
    [KEYS.PROMPT_WhitelistingContractAction]:[
        'You Are About To Whitelist A Currency Contract',

        `Whitelisting currency based contracts is dangerous, and should never be done. There are specific cases where this is okay,
         but unless you are absolutely sure this is one of them, you should not be whitelisting this contract action.
         Are you sure you still want to whitelist this?`
    ],
    //2
    [KEYS.PROMPT_SelectAccount]:[
        'Select Account',

        'Select the account and authorization you wish to use for this Identity. You can only select one at a time. In almost all cases you should select your @active account'
    ],
    //2
    [KEYS.PROMPT_ClaimIdentity]:[
        'Claim Identity',

        'Put in the private key that matches the public key on file for your identity name.'
    ],

    //3
    [KEYS.REQUEST_AddNetwork]:[
        /*{DOMAIN}*/ 'wants to add their network to your GXC Wallet.',

        'Some applications use their own Networks.',

        `This in no way gives the application any access to your GXC Wallet. 
         Adding a network through this interface simply saves you
         the effort of manually adding it from your Settings panel.`
    ],
    //5
    [KEYS.REQUEST_Identity]:[
        /*{DOMAIN}*/ 'is requesting additional information.',

        `Sometimes applications ask for some more information such as
         your email or date of birth. The Identities on the right are ones you own
         on the network with those specific properties available.`,

        `Even if you provide an Identity with properties that the
         application is not requesting permissions for, they will never
         be able to see them, or even know they exist for that Identity.`,

        `The only properties which are always given is the Identity's public key and it's name.`,

        /*{DOMAIN}*/ `is not requesting any additional information. The only thing that they are requiring is an Identity hash and name.`
    ],
    //2
    [KEYS.REQUEST_IdentityNoIdentities]:[
        `You don't have any Identities that match the properties that this application is requiring.`,

        `If you would like to use an Identity with this domain, you will need to update that Identity and fulfill the requirements.
         You can see what this domain is requiring on the left panel.`
    ],
    //4
    [KEYS.REQUEST_SignatureWhitelist]:[
        `Do you want to whitelist this contract action?`,

        `You can whitelist this action so that next time you won't have to manually authorize this.
         Every property that has a check next to it will become mutable, meaning that you can allow
         certain properties of this transaction to change and only if the other properties are changed will
         it fail to be whitelisted.`,

        `This includes required personal information, and changes to your Identity do not remove permissions.`,

        `If you have multiple locations and a transaction requires a location you will always be prompted.`
    ],
    //4
    [KEYS.REQUEST_ScatterIsLocked]:[
        `Your GXC Wallet is locked!`,

        `Before you can do anything with your GXC Wallet you will need to unlock it.`,

        `We will purposely never show a prompt/popup which requires you to log in.`,

        `If you see a prompt/popup which is requesting your password, it is a malicious website trying to get your password.
         Always only unlock GXC Wallet from the extension's popup by clicking on the icon in your browser tray.`
    ],
    //4
    [KEYS.REQUEST_UpdateVersion]:[
        `Your GXC Wallet is out of date!`,

        /*{DOMAIN}*/ `is requiring you have a version of GXC Wallet that is newer than the one installed.`,

        `This usually means that new functionality was released and an application is trying to use it but it's not
         currently included in the build you have installed.`,

        `Please Note, we leave version checking up to the applications themselves. They could be maliciously trying to
         get you to download something. Make sure you always download GXC Wallet from the proper location.`
    ],

    // GXC
    [KEYS.GXC_TRANSFER_CODE]:`None`,
    [KEYS.GXC_TRANSFER_TYPE]:`Transfer`,
    [KEYS.GXC_TRANSFER_RICARDIAN]:`Developer request transfer on you, careful operation!`,
    [KEYS.GXC_REGISTER_SUC]: [
        `Register Success`,
        `Please copy and keep safe with your private key, if lost can not retrieve back.`,
        ``
    ],
    [KEYS.GXC_REGISTER_FAIL]:`Register fail.`,
    [KEYS.GXC_REGISTER_REPEAT]:`The account has been registered.`,
    [KEYS.GXC_ALERT_NOT_REGISTER]: [
        `Not Register`,
        `Please register first`
    ],
    [KEYS.GXC_ACCOUNT_NAME_ERROR]: 'Account Name Wrong',

    [KEYS.REGISTER_HEADER]: 'Register',
    [KEYS.REGISTER_DESCRIPTION]: `Register GXChain account on selected network.`,
    [KEYS.REGISTER_TIPS]: 'No account？Please click GXC Wallet logo to register on the main menu.',
    [KEYS.REGISTER_SUC_HEADER]: 'Register Success',
    [KEYS.REGISTER_SUC_DESCRIPTION]: `Click 'Save' button to save your account on GXC Wallet.`,

    [KEYS.GXC_ACCOUNT_ERROR_EMPTY_NAME]: 'Account name should not be empty',
    [KEYS.GXC_ACCOUNT_ERROR_NAME_SHOULD_BE_LONGER]: `Account name be longer`,
    [KEYS.GXC_ACCOUNT_ERROR_NAME_SHOULD_BE_SHORTER]: 'Account name be shorter',
    [KEYS.GXC_ACCOUNT_ERROR_PREMIUM_NAME]: 'This is a premium name which is not supported by this faucet Please enter a regular name containing least one dash, a number or no vowels',
    [KEYS.GXC_ACCOUNT_ERROR_NAME_SHOULD_START_WITH_A_LETTER]: 'Each account segment should start with a letter',
    [KEYS.GXC_ACCOUNT_ERROR_NAME_FORMAT_ERROR]: 'Each account segment should have only letters, digits, or dashes',
    [KEYS.GXC_ACCOUNT_ERROR_NAME_ONE_DASH_ERROR]: 'Each account segment should have only one dash in a row',
    [KEYS.GXC_ACCOUNT_ERROR_NAME_END_ERROR]: 'Each account segment should end with a letter or digit',
    [KEYS.GXC_ACCOUNT_ERROR_NAME_SEGMENT_SHOULD_BE_LONGER]: 'Each account segment should be longer',
    [KEYS.BACK]: 'Back',
}










