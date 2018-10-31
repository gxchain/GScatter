export default {
	"generic": {
		"new": "Nova",
		"save": "Salvar",
		"ignored": "Ignorado",
		"identity": "Identidade",
		"contract": "Contrato",
		"action": "Ação",
		"removed": "Removido",
		"name": "Nome",
		"search": "Pesquisar",
		"verifyPassword": "Você precisa verificar sua senha atual antes de fazer isso.",
		"host": "Host",
		"port": "Porta",
		"requires": "Requer",
		"requiredProperties": "Propriedades Requeridas",
		"import": "Importar"
	},
	"placeholder": {
		"name": "Nome",
		"publicKey": "Chave Pública",
		"privateKey": "Chave Privada",
		"firstName": "Nome",
		"lastName": "Sobrenome",
		"email": "Email",
		"birthDate": "Data de Nascimento",
		"locationName": "Nome da Localização",
		"defaultLocationName": "Casa",
		"phone": "Telefone",
		"address": "Endereço",
		"city": "Cidade",
		"postal": "Cep",
		"country": "País",
		"state": "Estado",
		"password": "Senha",
		"confirmPassword": "Confirme a Senha",
		"newPassword": "Nova Senha",
		"confirmNewPassword": "Confime Nova Senha",
		"domainOrIp": "Domínio ou IP"
	},
	"button": {
		"createIdentity": "Criar Identidade",
		"importAccount": "Importar Conta",
		"addNewLocation": "Adicionar Nova Localização",
		"setAsDefaultLocation": "Marcar Como Localização Padrão",
		"removeLocation": "Remover Localização",
		"changePassword": "Alterar Senha",
		"destroyScatter": "Remover Scatter",
		"createNewScatter": "Criar Novo Scatter",
		"loadFromBackup": "Carregar Do Backup",
		"unlock": "Desbloquear",
		"exportScatter": "Exportar Scatter",
		"generateKeyPair": "Gerar Novo Par de Chaves",
		"validate": "Validar",
		"copy": "Copiar",
		"changeLanguage": "Alterar Língua",
		"cancel": "Cancelar",
		"accept": "Aceitar",
		"deny": "Negar",
		"yes": "Sim",
		"no": "Não",
		"useSelectedAccount": "Usar Conta Selecionada",
		"selectIdentity": "Selecionar Identidade"
	},
	"mainmenu": {
		"identities": "Identidades",
		"permissions": "Permissões",
		"history": "Histórico",
		"lock": "Bloquear"
	},
	"identities": {
		"header": "Você ainda não tem nenhuma Identidade.",
		"description": "\n        As Identidades são onde armazenamos informações pessoais, como nome, sobrenome, endereços e\n        várias contas blockchain/pares de chaves. Identidades também têm pares de chaves e sua propriedade\n        pode ser comprovada, o que os torna uma maneira de autenticar em aplicativos sem precisar digitar senhas.\n    "
	},
	"identity": {
		"disablingHeader": "O que a Desativação faz?",
		"disablingDescription": "\n        Desabilitar essa Identidade impedirá que ela seja usada em aplicativos que tenham uma referência a ela.\n        Isso pode ser usado em vez de excluir permanentemente essa identidade ou suas permissões em um aplicativo,\n        o que seria mais difícil de recuperar.\n    ",
		"nameHeader": "Nome da Identidade",
		"nameDescription": "\n        Aplicações podem optar por usar esse nome como seu nome de usuário, pois ele é único em todas as redes.\n        Se você não está registrado no RIDL, receberá um nome aleatório.\n    ",
		"accountHeader": "Conta",
		"accountDescription": "\n        Contas são o que mantêm seus fundos e permitem que você interaja com contratos no Blockchain.\n        Em relação às Identidades, pense nelas como as contas bancárias conectadas ao seu passaporte, elas podem\n        ser alteradas a qualquer momento.\n    ",
		"personalHeader": "Informações Pessoais",
		"personalDescription": "\n        Informações pessoais podem ser adicionadas a uma conta para aplicativos que exigem isso. Por exemplo, o site\n        de uma loja pode precisar do seu nome completo para saber para quem enviar os itens adquiridos.\n    ",
		"locationHeader": "Informações de Localização",
		"locationDescription": "\n        As informações de localização podem ser adicionadas a uma conta para aplicativos que exigem isso.\n        Por exemplo, um site de compras pode precisar do endereço de envio para saber para onde enviar\n        seus bens adquiridos.\n    "
	},
	"permissions": {
		"header": "Você não tem permissões para exibir.",
		"description": "\n        As permissões são definidas quando você fornece uma Identidade para utilizar um aplicativo ou quando você\n        adiciona uma ação de um contrato na whitelist para ser assinada sem prompts de autorização.\n    "
	},
	"permission": {
		"revokeIdentity": "Revogar Identidade",
		"revokeContract": "Revogar Contrato",
		"revokeAction": "Revogar Ação"
	},
	"histories": {
		"header": "Você não tem nenhum evento no histórico para exibir.",
		"description": "\n        Depois de tê-los, você poderá ver uma lista de todos os eventos que passam pelo seu Scatter.\n        O que você não verá é eventos que ocorreram em suas contas fora do Scatter.\n     ",
		"note": "\n        Nota: Exportar seus dados do Scatter através da opção de backup no painel de configurações não salva esses eventos.\n        Quando você importar seus dados do Scatter novamente, seus históricos ficarão vazios. Se você gostaria de exportar seus históricos\n        no futuro, você pode fazer isso usando os botões de ação na barra de navegação desse painel.\n    "
	},
	"settingsmenu": {
		"networks": "Redes",
		"keypairs": "Pares de Chave",
		"language": "Língua",
		"autoLock": "Bloqueio Automático",
		"password": "Senha",
		"backup": "Backup",
		"destroy": "Remover"
	},
	"backup": {
		"header": "Exportar backup criptografado",
		"description": "\n        Exportar seu Scatter permite que você o importe em outros dispositivos. O arquivo ainda será criptografado quando for\n        exportado, certifique-se de ter seu mnemônico ou sua senha, caso contrário, será inútil. As chaves privadas\n        de suas contas também serão removidas antes da exportação, as únicas chaves privadas que permanecerão dentro do arquivo\n        exportado será suas chaves de Identidade.\n    "
	},
	"pass": {
		"header": "Insira uma nova senha",
		"description": "\n        Ao alterar sua senha, você estará descriptografando todas as informações salvas, o que geralmente é sempre\n        criptografado e, em seguida, criptografando-as novamente com uma seed da nova senha.\n    "
	},
	"network": {
		"header": "Adicionar nova rede",
		"description": "\n        Os aplicativos geralmente são executados em uma rede específica, mas nem todos podem ser executados\n        na mesma rede. Por exemplo, um aplicativo pode ter uma rede de teste\n        que tem novos recursos que ainda não foram liberados. Para interagir com\n        essa rede você precisará ter uma conta lá também.\n    "
	},
	"destroy": {
		"header": "Destruindo o Scatter",
		"description": "\n        Você está prestes a destruir todo o seu chaveiro Scatter. A única maneira de recuperar exatamente esse Scatter será\n        importando um JSON exportado pelo Scatter anteriormente. Você não poderá reivindicar suas identidades de outra forma.\n        Assegure-se de que você tenha exportado seu Scatter do painel de configurações de backup antes de continuar\n    "
	},
	"language": {
		"header": "Selecione sua língua"
	},
	"keypair": {
		"header": "Gerar novo Par de Chaves",
		"description": "\n        Você pode usar este painel para gerar pares de chaves EOS. Estes pares de chaves são gerados localmente na sua máquina\n        e nunca são enviados em qualquer lugar. Você também pode colar um par de chaves e verificar se a chave privada corresponde à chave\n        pública. Observe que essas chaves são geradas usando a entropia coletada do seu computador e não a partir de qualquer outra seed específica.\n    ",
		"validation": "A chave pública gerada a partir da chave privada não corresponde à chave pública fornecida!"
	},
	"lock": {
		"header": "Temporizador de bloqueio automático",
		"description": "\n        O Bloqueio Automático lida com o bloqueio do Scatter para que você não precise\n        se lembrar de bloquear seu Scatter quando você se afastar do computador.\n    ",
		"minute": "Minuto",
		"minutes": "Minutos",
		"hour": "Hora",
		"hours": "Horas",
		"neverLock": "Nunca Bloquear"
	},
	"mnemonic": {
		"header": "Mnemonic",
		"description": "Mnemônicos são um conjunto de palavras que se traduzem em uma seed criptográfica.",
		"note": "\n        Certifique-se de salvar o seu em algum lugar seguro. É a única maneira de recuperar o acesso ao seu\n        Scatter e descriptografar suas informações privadas se você esquecer sua senha.\n    ",
		"wrote": "I Wrote It Down"
	},
	"onboarding": {
		"title": "Welcome to Use",
		"desc1": "The developer team holds no liability towards your digital assets. It is your responsibility to constantly make sure your computer is free of malware. We have taken every measure in our capabilities to ensure that this software is safe to use as intended however your computer itself is your worst enemy and should be treated as such.",
		"desc2": "By using this software you are relinquishing any ability to take legal actions against the developer team and recognize yourself as the sole legal owner of your own wallet instance, your keys, and your data."
	},
	"error": {
		"mustSelectItem": "Você deve selecionar um item."
	},
	"alert": {
		"badIdentityName": [
			"Nome de Identidade inválido",
			"Os nomes de Identidade devem ter entre 3 e 20 caracteres.\n         Eles também devem ser alfanuméricos, podem conter espaços, traços e sublinhados."
		],
		"identityNameExists": [
			"Nome de Identidade Já Existe",
			"Este nome de Identidade ja foi registrado para outra Identidade."
		],
		"invalidPrivateKey": [
			"Chave Privada Inválida",
			"A chave privada digitada parece ser inválida. Por favor, verifique a chave e tente novamente."
		],
		"noAccountsFound": [
			"Conta Não Encontrada",
			"Nenhuma conta foi encontrada conectada a essa chave privada.\n         Se você quiser importar uma chave que não seja gerada pelo\n         Scatter, você precisará criar uma conta para a chave\n         antes de importá-la."
		],
		"passwordsDoNotMatch": [
			"Senhas Não Conferem",
			"A senha que você digitou não corresponde à sua confirmação."
		],
		"badPassword": [
			"Senha Inválida",
			"As senhas devem ter no mínimo 8 caracteres"
		],
		"wrongPassword": [
			"Senha Incorreta",
			"A senha digitada estava incorreta."
		],
		"networkHostInvalid": [
			"Host De Rede Inválido",
			"O host da rede que você inseriu era inválido. Os hosts devem ser um nome de domínio\n         ( ex: testnet.eos.io ) ou um IP ( ex: 192.168.0.1 )."
		],
		"networkExists": [
			"Rede Já Existe",
			"Outra rede com este host e porta já existe. Não há razão para ter uma rede salva duas vezes."
		],
		"removingEndorsedNetwork": [
			"Impossível Remover Rede Endossada",
			"Você não pode remover a rede endossada do Scatter. Usamos essa rede para hospedar nossos contratos."
		],
		"youMustSelectAnIdentity": [
			"Você Deve Selecionar Uma Identidade",
			"Se você não deseja expor uma Identidade, pressione o botão Negar, caso contrário, uma Identidade deve ser\n         selecionada para aceitar este pedido."
		]
	},
	"prompt": {
		"destroyingScatter": [
			"Destruindo Scatter",
			"Esta é sua última chance de verificar novamente seus backups."
		],
		"removingNetwork": [
			"Removendo Rede",
			"Você está prestes a excluir uma Rede. Você não será capaz\n         de criar novas contas nesta Rede após excluí-la, mas nada\n         impede de você adicioná-la de volta. Quaisquer contas já\n         usando esta Rede não serão modificadas ou removidas."
		],
		"whitelistingContractAction": [
			"Você Está Prestes A Adicionar Um Contrato Currency Na Whitelist",
			"Adiciona um contrado currency na sua whitelist é perigoso e nunca deve ser feito. Existem casos específicos em que fazer isso é ok\n         mas, a menos que você tenha certeza absoluta de que este é um deles, você não deve adicionar a ação deste contrato na sua whitelist.\n         Tem certeza que você ainda deseja adicionar isso na sua whitelist?"
		],
		"selectAccount": [
			"Selecione Uma Conta",
			"Selecione a conta e autoridade que você deseja usar para essa Identidade. Você só pode selecionar um de cada vez."
		]
	},
	"request": {
		"addNetwork": [
			"quer adicionar sua rede ao seu Scatter.",
			"Alguns aplicativos usam suas próprias redes.",
			"Isso não dá ao aplicativo qualquer acesso ao seu Scatter.\n         Adicionar uma rede através desta interface simplesmente poupa\n         o esforço de adicioná-la manualmente a partir do painel Configurações."
		],
		"identity": [
			"está solicitando informações adicionais.",
			"Às vezes, os aplicativos pedem mais informações, como\n         seu email ou data de nascimento. As Identidades à direita são aquelas que você possui\n         na rede com essas propriedades específicas disponíveis.",
			"Mesmo se você fornecer uma Identidade com propriedades que o\n         aplicativo não está solicitando permissões, ele nunca\n         será capaz de vê-las, ou até mesmo saber que elas existem nessa Identidade.",
			"As únicas propriedades que são sempre fornecidas são a chave pública da identidade e seu nome.",
			"não está solicitando nenhuma informação adicional. A única coisa que eles estão exigindo é um hash da Identidade e nome."
		],
		"identityNoIdentities": [
			"Você não tem nenhuma Identidade que corresponda aos campos que esse aplicativo exige.",
			"Se você gostaria de usar uma Identidade com este domínio, você precisará atualizar essa identidade e cumprir os requisitos.\n         Você pode ver o que este domínio está exigindo no painel esquerdo."
		],
		"signatureWhitelist": [
			"Deseja adicionar esta ação deste contrato na sua whitelist?",
			"Você pode colocar essa ação na sua whitelist para que, da próxima vez, não precise autorizá-la manualmente.\n        Toda propriedade que tenha um check próximo a ela se tornará mutável, o que significa que você pode permitir\n        que certas propriedades desta transação sejam alteraradas e se as outras propriedades forem alteradas\n        isso não será colocado na sua whitelist.",
			"Isso inclui informações pessoais obrigatórias. Alterações em sua Identidade não removem permissões.",
			"Se você tiver várias localizações e uma transação exigir uma localização, você sempre será solicitado."
		],
		"scatterIsLocked": [
			"Seu Scatter está bloqueado!",
			"Antes de fazer qualquer coisa com o seu Scatter, você deve desbloqueá-lo.",
			"Nós propositadamente nunca mostramos um prompt/popup que requer que você faça login.",
			"Se você ver um prompt/popup que solicitando sua senha, é um site malicioso tentando obter sua senha.\n         Somente desbloqueie o Scatter a partir do popup da extensão, clicando no ícone na bandeja do seu navegador."
		],
		"updateVersion": [
			"Seu Scatter está desatualizado!",
			"está exigindo que você tenha uma versão do Scatter mais recente que a instalada.",
			"Isso geralmente significa que uma nova funcionalidade foi lançada e um aplicativo está tentando usá-la,\n         mas ela não está incluída na versão que você tem instalada.",
			"Por favor, note que deixamos a verificação de versão a cargo das próprias aplicações. Eles podem, maliciosamente\n         tentar fazer você baixar algo. Certifique-se de sempre baixar o Scatter do local apropriado."
		]
	}
}