export default {
	"generic": {
		"new": "新建",
		"save": "保存",
		"ignored": "已取消",
		"identity": "身份",
		"contract": "合约",
		"action": "操作",
		"removed": "已删除",
		"name": "名字",
		"search": "搜索",
		"verifyPassword": "您需要先验证您的当前密码，然后才能执行此操作",
		"host": "主机",
		"port": "端口",
		"requires": "需要",
		"requiredProperties": "需要提供的信息",
		"import": "导入",
		"chainId": "Chain ID",
		"blockchain": "区块链",
		"account": "帐户"
	},
	"placeholder": {
		"name": "名称",
		"publicKey": "公钥",
		"privateKey": "私钥",
		"firstName": "名字",
		"lastName": "姓",
		"email": "Email",
		"birthDate": "生日",
		"locationName": "地址名称",
		"defaultLocationName": "家庭地址",
		"phone": "手机",
		"address": "地址",
		"city": "市",
		"postal": "邮政编码",
		"country": "国家",
		"state": "州",
		"password": "请输入密码",
		"confirmPassword": "确定",
		"newPassword": "新密码",
		"confirmNewPassword": "再次输入新密码",
		"domainOrIp": "域名或 IP 地址"
	},
	"button": {
		"createIdentity": "创建身份",
		"importAccount": "导入帐号",
		"importKeychain": "导入密钥",
		"selectFile": "选择文件",
		"addNewLocation": "增加地址",
		"setAsDefaultLocation": "设置为缺省地址",
		"removeLocation": "删除地址信息",
		"changePassword": "更改密码",
		"destroyScatter": "删除钱包",
		"createNewScatter": "创建新的钱包",
		"loadFromBackup": "从备份中恢复",
		"unlock": "解锁",
		"exportScatter": "导出 Scatter",
		"generateKeyPair": "生成密钥对",
		"validate": "验证",
		"copy": "复制",
		"changeLanguage": "更改语言",
		"cancel": "取消",
		"accept": "接受",
		"deny": "拒绝",
		"yes": "Yes",
		"no": "No",
		"useSelectedAccount": "使用选择的帐户",
		"selectIdentity": "选择身份",
		"changeName": "更改名称",
		"claimIdentity": "身份认领",
		"registerIdentity": "身份注册"
	},
	"mainmenu": {
		"identities": "身份",
		"keys": "密钥对",
		"permissions": "权限",
		"history": "事件",
		"lock": "锁定"
	},
	"identities": {
		"header": "你目前尚未建立身份。",
		"description": "\n        身份是包含个人信息的统称，它包括姓名，地址和多个区块链帐号/密钥对。\n        身份包括了能证明其所有权的密钥对，使得应用无需密也能进行验证.\n    "
	},
	"identity": {
		"disablingHeader": "禁用身份意味着什么?",
		"disablingDescription": "\n        禁用身份，将会阻止引用它的应用使用此身份。\n        可以用来代替难以恢复的永久删除身份\n        或删除它在应用程序上的权限.\n    ",
		"nameHeader": "身份名称",
		"nameDescription": "\n        应用程序可能选择使用此名称作为你的用户名，因为它在所有网络中都是唯一的。\n        如果您未在 RIDL 注册，将会分配一个随机的名称给你。\n    ",
		"noKeyPairsHeader": "没有密钥对!",
		"noKeyPairsDescription": "\n        在将区块链账户添加到此身份之前，您需要添加一些密钥对。 请转到主菜单选择：\n    ",
		"accountHeader": "帐户",
		"accountDescription": "\n        账户保存有您的资金，并且让您与区块链上的合约进行交互。\n        身份可以视为与你的护照相关联的银行帐号，\n        可以随时更改。\n    ",
		"personalHeader": "个人信息",
		"personalDescription": "\n        个人信息可以添加到需要它的应用程序的帐户中。 例如购物网站\n        可能需要您的姓名，作为您所购买商品的收件人。\n    ",
		"locationHeader": "地址信息",
		"locationDescription": "\n        地址信息可以添加到需要它的应用程序的帐户中。\n        例如，为了知道您购买的商品的送货地点，购物网站可能\n        需要这些信息以便知道送货地点\n     "
	},
	"permissions": {
		"header": "没有需要显示的授权.",
		"description": "\n        显示你授权给应用的身份，或把一个合约行为列入白名单，\n        使其能无需经过弹出窗口确认就能够签署授权。\n    "
	},
	"permission": {
		"revokeIdentity": "删除身份",
		"revokeContract": "撤消合约",
		"revokeAction": "取消操作"
	},
	"histories": {
		"header": "没有需要显示的历史事件.",
		"description": "\n        在此您能看到所有 Scatter 的事件列表.\n        但在您的 scatter 外的帐户上发生的事件不会显示.\n     ",
		"note": "\n        注意：当从设置面板中的备份选项中导出您的 Scatter 数据时，不会备份这些事件。\n        所以当您再次导入时，您的历史记录是空的。如果你想导出这些历史事件，\n        将来您可以使用此面板中导航栏上的操作按钮来完成此操作。\n    "
	},
	"settingsmenu": {
		"networks": "网络",
		"keypairs": "密匙对",
		"language": "语言",
		"autoLock": "自动锁定",
		"password": "密码",
		"backup": "备份",
		"destroy": "销毁"
	},
	"backup": {
		"header": "导出加密备份",
		"description": "\n        导出您的 Scatter 后，您将可以将其导入其他设备。导出文件将被加密，\n        所以请注意备份你的助记符和密码。否则将不能导入。\n        导出的文件中将只保留你的身份私钥，\n        帐户中的其它所有私钥将不会导出。\n    "
	},
	"import": {
		"header": "导入加密的备份",
		"description": "\n        导入你的加密钥匙串文件将重建您的 Scatter 钥匙串，但是它不会导入您原有的网络\n        或帐户设置\n    "
	},
	"pass": {
		"header": "设置新密码",
		"description": "\n        您原来所有加密保存的信息将被解密，\n        然后会重新使用新密码加密。\n    "
	},
	"network": {
		"header": "添加网络",
		"description": "\n        应用通常会使用自己特定的网络，而不是全部运行在\n        同一个网络上，例如，为了使用尚未发布的新功能，\n        应用有可能使用测试网络，为了与这个网络互动，\n        需要这个网络上的帐号。\n    "
	},
	"destroy": {
		"header": "销毁 Scatter",
		"description": "\n        您即将销毁您的整个 Scatter 钥匙串。恢复 Scatter 的唯一方法是\n        导入以前导出的 Scatter JSON 文件。 否则你将没有办法再使用你的身份。\n        请确保在着手这个操作前，已经从备份设置面板中导出了您的 Scatter。\n    "
	},
	"language": {
		"header": "选择语言"
	},
	"keypairs": {
		"noKeyPairsHeader": "您没有密钥对。",
		"noKeyPairsDescription": "\n        点击右上方的按钮来建立或导入密钥。\n    "
	},
	"keypair": {
		"header": "生成一个新的密钥对",
		"description": "\n        您可以通过此界面来生成 EOS 密钥对。密钥对是在你本地机器上生成并且不会被传送到其它任何地方。\n        您还可以粘贴密钥对并检查私钥是否与公钥匹配，\n        注意，这些密钥是使用从计算机上收集的各种数据生成，而不是使用任何特定的种子。\n    ",
		"validation": "由私钥生成的公钥与提供的公钥不匹配！"
	},
	"lock": {
		"header": "自动锁定设置",
		"description": "\n        自动锁定能为您自动锁定 Scatter，\n        这样你就不必在离开时记得锁定您的 Scatter。\n    ",
		"minute": "分",
		"minutes": "分",
		"hour": "小时",
		"hours": "小时",
		"neverLock": "从不锁定"
	},
	"mnemonic": {
		"header": "助记词",
		"description": "助记词是可以用来生成密钥的一组单词。",
		"note": "\n        请一定要保存在安全的地方。如果您忘记了密码，\n        这是恢复对 Scatter 的访问和解密您的个人信息的唯一途径。\n    ",
		"wrote": "我记录下来了"
	},
	"onboarding": {
		"title": "欢迎使用",
		"desc1": "此软件的开发团队没有责任保证您的资产绝对不丢失，你有责任不断确保你的电脑没有恶意软件。我们已采取各种措施来确保插件的使用安全。请知道，最大的安全隐患是你的计算机本身。",
		"desc2": "通过使用本软件，您将放弃对开发团队采取法律行动的任何权利，并将自己视为您自己的钱包、密钥和数据的唯一合法所有者。"
	},
	"error": {
		"mustSelectItem": "必选项."
	},
	"alert": {
		"badIdentityName": [
			"错误的身份名",
			"身份名的长度必须在3到20个字符之间。\n         它们也必须是字母数字，但也可以包含空格，破折号和下划线。"
		],
		"identityNameExists": [
			"身份名已存在",
			"此身份名已经补其它身份注册。"
		],
		"noSuchIdentityName": [
			"没在此身份名称",
			"此身份的名称在 RIDL 中未保留。"
		],
		"keyPairExists": [
			"密钥对已经存在",
			"此密钥对已在您的钥匙串上注册。"
		],
		"badKeyPairName": [
			"错误的密钥对名称",
			"密钥对名称不能相同。"
		],
		"invalidPrivateKey": [
			"私钥不正确",
			"您输入的私钥不正确，请检查后重试。"
		],
		"noAccountsFound": [
			"未找到帐户",
			"没有找到与此私钥相关联的帐户。\n         如果您导入的不是 Scatter 生成的私钥，\n         需要在导入前为这个私钥先建一个帐户"
		],
		"passwordsDoNotMatch": [
			"密码不匹配",
			"您输入的密码与确认信息不符。"
		],
		"badPassword": [
			"密码无效",
			"密码长度至少 8 个字符"
		],
		"wrongPassword": [
			"密码不正确",
			"您输入的密码不正确。"
		],
		"networkHostInvalid": [
			"无效的主机",
			"您输入的主机无效。\n         主机应该为域名( 例: testnet.eos.io ) 或者 IP 地址 ( 如: 192.168.0.1 )."
		],
		"networkExists": [
			"已经存在相同的网络",
			"具有此主机和端口的另一个网络已存在。 相同的网络不用再次保存。"
		],
		"removingEndorsedNetwork": [
			"不能删除支撑网络",
			"您不能删除 Scatter 的支撑网络。"
		],
		"youMustSelectAnIdentity": [
			"您需要选择一个身份",
			"如果你不想公开身份，你可以按拒绝按钮，\n         否则必须选择一个身份以接受此请求。"
		]
	},
	"prompt": {
		"destroyingScatter": [
			"销毁 Scatter",
			"这是您最后一次检查备份的机会。"
		],
		"removingNetwork": [
			"移除网络",
			"您即将删除网络。 删除该网络后\n         您将不能再在该网络上创建新帐户，\n         但你可以重新添加它。\n         已经使用此网络的帐户将不会被修改或删除。"
		],
		"whitelistingContractAction": [
			"您将要将一个智能合约列入白名单",
			"将基于货币的合约列入白名单是危险的，永远不应该这样做。\n         但在某些情况下，可以这样做，但除非您确定，否则您不应将此合约操作列入白名单。\n         您确定想将此列入白名单吗？"
		],
		"selectAccount": [
			"选择帐户",
			"选择您希望用于此身份的帐户和权限。一次只能选择一个。"
		],
		"claimIdentity": [
			"Claim Identity",
			"Put in the private key that matches the public key on file for your identity name."
		]
	},
	"request": {
		"addNetwork": [
			"想要将他们的网络添加到 Scatter。",
			"一些应用使用它们自己的网络。",
			"应用决不会被允许访问您的 Scatter。\n         通过此界面添加网络。\n         仅是为了比在控制面板中手工添加更方便"
		],
		"identity": [
			"正请求更多的信息。",
			"有时，应用会需要更多信息，\n         例如您的电子邮件或出生日期。\n         右侧的身份标识就是您在网络上拥有的可用的特定信息。",
			"即使你提供了一个应用并没有请求的标识信息，\n         应用也永远不能够访问到这些信息，\n         甚至不会知道它们的存在。",
			"只有身份的公钥和名称都会提供给应用。",
			"没有请求任何附加信息。 他们唯一需要的是身份哈希和名称"
		],
		"identityNoIdentities": [
			"您没有与此应用程序需要的字段匹配的标识信息。",
			"如果您希望将身份用于此域，您将需要更新该标识并满足需求。\n         您可以在左侧面板上看到它还需要什么信息。"
		],
		"signatureWhitelist": [
			"你想把这个合约操作列入白名单吗？",
			"您可以将此操作列入白名单，下次您就不必再次手动授权。\n         每一个旁边有单选按钮的属性都将变得可以更改，这意味着您可以允许\n         此事务的某些属性的更改，并且仅当其他属性发生更改时，\n         不会被列入白名单。",
			"这包括所需的个人信息，并且对您的身份的更改不会删除权限。",
			"如果您设有多个地点，当事务需要一个地点时，将会提示你您选择"
		],
		"scatterIsLocked": [
			"Scatter 已锁定!",
			"需要解锁才能进一步操作.",
			"我们不会显示一个需要你登录的提示/弹出窗口.",
			"如果您看到一个提示/弹出窗口，需要你输入密码，它肯定是一个试图获取您的密码的恶意网站，\n         确保只使用点击浏览器的插件托盘图标后弹出的窗口来解锁."
		],
		"updateVersion": [
			"Scatter 需要更新版本!",
			"要求使用更新后的版本.",
			"使用的应用需要一个已经发布的新的功能，但是你安装的版本不支持.",
			"注意，我们让应用能够检查 Scatter 的版本，但它们有可能让你下载恶意程序，请确保从正确的地址下载 Scatter."
		]
	}
}
