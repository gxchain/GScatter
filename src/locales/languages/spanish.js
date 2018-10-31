export default {
	"generic": {
		"new": "Nuevo",
		"save": "Guardar",
		"ignored": "Ignorado",
		"identity": "Identidad",
		"contract": "Contrato",
		"action": "Acción",
		"removed": "Eliminado",
		"name": "Nombre",
		"search": "Buscar",
		"verifyPassword": "Necesitas verificar tu contraseña actual antes de poder hacer esto.",
		"host": "Host",
		"port": "Puerto",
		"requires": "Requiere",
		"requiredProperties": "Propiedades Requeridas",
		"import": "Importar"
	},
	"placeholder": {
		"name": "Nombre",
		"publicKey": "Llave Pública",
		"privateKey": "Llave Privada",
		"firstName": "Nombre",
		"lastName": "Apellido",
		"email": "Correo Electrónico",
		"birthDate": "Fecha de Nacimiento",
		"locationName": "Nombre de la Ubicación",
		"defaultLocationName": "Casa",
		"phone": "Teléfono",
		"address": "Dirección",
		"city": "Ciudad",
		"postal": "Código Postal",
		"country": "País",
		"state": "Estado",
		"password": "Contraseña",
		"confirmPassword": "Confirmar Contraseña",
		"newPassword": "Nueva Contraseña",
		"confirmNewPassword": "Confirmar Nueva Contraseña",
		"domainOrIp": "Dominio o IP"
	},
	"button": {
		"createIdentity": "Crear Identidad",
		"importAccount": "Importar Cuenta",
		"addNewLocation": "Agregar Ubicación Nueva",
		"setAsDefaultLocation": "Establecer Como Ubicación Predeterminada",
		"removeLocation": "Eliminar Ubicación",
		"changePassword": "Cambiar Contraseña",
		"destroyScatter": "Borrar Scatter",
		"createNewScatter": "Crear Nuevo Scatter",
		"loadFromBackup": "Cargar Desde Respaldo",
		"unlock": "Desbloquear",
		"exportScatter": "Exportar Scatter",
		"generateKeyPair": "Generar Par de Llaves",
		"validate": "Validar",
		"copy": "Copiar",
		"changeLanguage": "Cambiar Idioma",
		"cancel": "Cancelar",
		"accept": "Aceptar",
		"deny": "Denegar",
		"yes": "Sí",
		"no": "No",
		"useSelectedAccount": "Usar Cuenta Seleccionada",
		"selectIdentity": "Seleccionar Identidad"
	},
	"mainmenu": {
		"identities": "Identidades",
		"permissions": "Permisos",
		"history": "Historial",
		"lock": "Bloquear"
	},
	"identities": {
		"header": "No tienes ninguna Identidad todavía.",
		"description": "\n        Las Identidades son contenedores de información personal como nombre y apellidos, direcciones \n        y varias cuentas/par de llaves de blockchain. Las Identidades también tienen pares de llaves\n        y su propiedad se puede probar, lo que las convierte en una forma de autenticarse con aplicaciones \n        sin contraseñas.\n    "
	},
	"identity": {
		"disablingHeader": "¿Qué hace la Deshabilitación?",
		"disablingDescription": "\n        Deshabilitar esta Identidad impedirá que sea usada en aplicaciones que tengan una referencia a ella.\n        Esto puede ser usado en lugar de borrar permanentemente esta Identidad o sus Permisos en una aplicación,\n        lo cual sería más difícil de recuperar.\n    ",
		"nameHeader": "Nombre de Identidad",
		"nameDescription": "\n        Las Aplicaciones pueden elegir usar este nombre como tu nombre de usuario, ya que es único en todas las redes. \n        Si no estas registrado con RIDL recibirás un nombre aleatorio. \n    ",
		"accountHeader": "Cuenta",
		"accountDescription": "\n        Las Cuentas son las que sostienen tus fondos y te permiten interactuar con contractos en la Blockchain.\n        En relación con las Identidades, piensa en ellas como las cuentas bancarias conectadas a tu pasaporte, \n        pueden ser cambiadas en cualquier momento.\n    ",
		"personalHeader": "Información Personal",
		"personalDescription": "\n        Información Personal puede ser agregada a una cuenta para aplicaciones que lo requieran. Por ejemplo,\n        una página de compras puede necesitar tu nombre completo para saber a quién enviarle los artículos \n        adquiridos.\n    ",
		"locationHeader": "Información de Ubicación",
		"locationDescription": "\n        Información de Ubicación puede ser agregada a una cuenta para aplicaciones que lo requieran.\n        Por ejemplo, una página de compras puede necesitar tu dirección de envío para saber a dónde enviar \n        los artículos adquiridos.\n    "
	},
	"permissions": {
		"header": "No tienes permisos para mostrar.",
		"description": "\n        Los Permisos se establecen cuando proporcionas una Identidad para que sea usada por una aplicación \n        o cuando agregas una acción de contrato a la lista blanca para que sea firmada sin avisos\n        de autorización.\n    "
	},
	"permission": {
		"revokeIdentity": "Revocar Identidad",
		"revokeContract": "Revocar Contrato",
		"revokeAction": "Revocar Acción"
	},
	"histories": {
		"header": "No tienes eventos históricos para mostrar.",
		"description": "\n        Una vez los tengas podrás ver una lista de todos los eventos que pasan por tu Scatter.\n        Lo que no verás son eventos que hayan ocurrido en tus cuentas fuera de Scatter.\n     ",
		"note": "\n        Nota: La exportación de los datos de Scatter desde la opción de respaldo en el panel de configuración no guarda estos eventos.\n        Cuando importes esa instancia de Scatter, tus historiales estarán vacíos. Si deseas exportar tus historiales\n        en el futuro puedes hacerlo usando los botones de acción en la barra de navegación dentro de este panel.\n    "
	},
	"settingsmenu": {
		"networks": "Redes",
		"keypairs": "Pares de Llaves",
		"language": "Idioma",
		"autoLock": "Bloqueo Automático",
		"password": "Contraseña",
		"backup": "Respaldar",
		"destroy": "Borrar"
	},
	"backup": {
		"header": "Exportar respaldo encriptado",
		"description": "\n        Exportar tu Scatter te permite importarlo en otros dispositivos. El archivo seguirá encriptado cuando sea\n        exportado así que asegúrate de tener tus mnemotécnicos o contraseña; de lo contrario, será inútil. Las llaves privadas\n        de tus cuentas también se eliminarán antes de exportar, las únicas llaves privadas que permanecerán dentro del archivo\n        exportado serán tus llaves de Identidad.\n    "
	},
	"pass": {
		"header": "Introduce una nueva contraseña",
		"description": "\n        Al cambiar tu contraseña estarás desencriptando toda la información almacenada, la cual está encriptada\n        normalmente, y luego encriptándola nuevamente con una semilla de la nueva contraseña.\n    "
	},
	"network": {
		"header": "Agregar nueva red",
		"description": "\n        Las aplicaciones generalmente se ejecutan en una red específica, pero es posible \n        que no se ejecuten todas en la misma red. Por ejemplo, una aplicación puede tener una \n        red de prueba que tiene nuevas funcionalidades que aún no se han lanzado. Para \n        interactuar con esa red necesitarás tener una cuenta allí también.\n    "
	},
	"destroy": {
		"header": "Borrando Scatter",
		"description": "\n        Estás a punto de borrar todo tu llavero de Scatter. La única forma de recuperar este mismo Scatter es\n        importando un JSON exportado de Scatter. De lo contrario No podrás reclamar tus identidades. Asegúrate\n        de haber exportado tu Scatter desde el paración de respaldo de antemano.\n    "
	},
	"language": {
		"header": "Selecciona tu idioma"
	},
	"keypair": {
		"header": "Generar nuevo Par de Llaves",
		"description": "\n        Puedes usar este panel para generar pares de llaves de EOS. Estos pares de llaves se generan localmente \n        en tu máquina y nunca se envían a ningún lado. También puedes pegar un par de llaves y verificar que la llave \n        privada coincida con la llave pública. Ten en cuenta que esas llaves se generan utilizando la entropía recopilada \n        de tu ordenador y no de una semilla específica.\n    ",
		"validation": "La llave pública generada a partir de la llave privada no coincide con la llave pública proporcionada!"
	},
	"lock": {
		"header": "Temporizador de Bloqueo Automático",
		"description": "\n        El Bloqueo Automático maneja el bloqueo de Scatter para que no tengas \n        que recordar bloquear tu Scatter cuando te alejes del ordenador.\n    ",
		"minute": "Minuto",
		"minutes": "Minutos",
		"hour": "Hora",
		"hours": "Horas",
		"neverLock": "Nunca Bloquear"
	},
	"mnemonic": {
		"header": "Mnemotécnico",
		"description": "Los mnemotécnicos son un conjunto de palabras que se traducen en una semilla criptográfica.",
		"note": "\n        Asegúrate de guardar el tuyo en un lugar seguro. Es la única forma de recuperar \n        el acceso a tu Scatter y desencriptar tu información privada si olvidas tu contraseña.\n    ",
		"wrote": "I Wrote It Down"
	},
	"onboarding": {
		"title": "Welcome to Use",
		"desc1": "The developer team holds no liability towards your digital assets. It is your responsibility to constantly make sure your computer is free of malware. We have taken every measure in our capabilities to ensure that this software is safe to use as intended however your computer itself is your worst enemy and should be treated as such.",
		"desc2": "By using this software you are relinquishing any ability to take legal actions against the developer team and recognize yourself as the sole legal owner of your own wallet instance, your keys, and your data."
	},
	"error": {
		"mustSelectItem": "Debes seleccionar un item."
	},
	"alert": {
		"badIdentityName": [
			"Nombre de Identidad Inválido",
			"Los nombres de Identidad deben tener entre 3 y 20 caracteres.\n         También deben ser alfanuméricos, pero también pueden contener espacios, guiones y guiones bajos."
		],
		"identityNameExists": [
			"Nombre de Identidad ya Existe",
			"Este nombre de Identidad está registrado por otra Identidad."
		],
		"invalidPrivateKey": [
			"Llave Privada Inválida",
			"La llave privada ingresada parece inválida. Por favor, verifica la llave y vuelve a intentarlo."
		],
		"noAccountsFound": [
			"Cuentas no Encontradas",
			"No se encontraron cuentas conectadas a esta llave privada.\n         Si deseas importar una llave que no es generada por\n         Scatter necesitarás crear una cuenta para la llave\n         antes de importarla."
		],
		"passwordsDoNotMatch": [
			"Las Contraseñas no Coinciden",
			"La contraseña que has ingresado no coincide con su confirmación."
		],
		"badPassword": [
			"Contraseña Inválida",
			"Las constraseñas deben tener al menos 8 caracteres."
		],
		"wrongPassword": [
			"Contraseña Incorrecta",
			"La contraseña introducida fue incorrecta."
		],
		"networkHostInvalid": [
			"Host de la Red Inválido",
			"El Host de Red que has ingresado es inválido. Los Hosts deben ser un nombre de dominio\n         ( ej.: testnet.eos.io ) o una IP ( ej.: 192.168.0.1 )."
		],
		"networkExists": [
			"La Red ya Existe",
			"Ya existe otra Red con este host y puerto. No hay razón para tener una red guardada dos veces."
		],
		"removingEndorsedNetwork": [
			"Imposible Eliminar la Red Endosada",
			"No puedes eliminar la Red endosada de Scatter. Usamos esta Red para alojar nuestros contratos."
		],
		"youMustSelectAnIdentity": [
			"Debes Seleccionar una Identidad",
			"Si no deseas exponer una Identidad, puedes presionar el botón Denegar; de lo contrario, debes seleccionar\n         una Identidad para aceptar esta solicitud."
		]
	},
	"prompt": {
		"destroyingScatter": [
			"Borrando Scatter",
			"Esta es tu última oportunidad para verificar tus respaldos."
		],
		"removingNetwork": [
			"Eliminando Red",
			"Estás a punto de eliminar una Red. No serás capaz\n         de crear nuevas cuentas en esta Red una vez que la elimines,\n         pero nada te impide volver a agregarla. Cualquier cuenta\n         que esté usando esta red no será modificada o eliminada."
		],
		"whitelistingContractAction": [
			"Estás a Punto de Incluir un Contrato de Divisas en la Lista Blanca",
			"Incluir contratos de divisas en la Lista Blanca es peligroso y nunca debería hacerse. Hay casos específicos en los que esto\n         está bien, pero a menos que estés absolutamente seguro de que este es uno de ellos, no debes incluir en la lista blanca esta \n         acción del contrato. ¿Estás seguro de que todavía quieres incluir esto en la lista blanca?"
		],
		"selectAccount": [
			"Selecciona Cuenta",
			"Selecciona la cuenta y autoridad que deseas utilizar para esta Identidad. Solo puedes seleccionar una a la vez."
		]
	},
	"request": {
		"addNetwork": [
			"quiere agregar su red a tu Scatter.",
			"Algunas aplicaciones usan sus propias Redes.",
			"Esto de ninguna manera le da a la aplicación acceso a tu Scatter. \n         Agregar una red a través de esta interfaz simplemente te ahorra\n         el esfuerzo de agregarla manualmente desde el panel de Configuración."
		],
		"identity": [
			"está solicitando información adicional.",
			"A veces las aplicaciones piden más información, como\n         tu correo electrónico o fecha de nacimiento. Las Identidades a la derecha \n         son las que tienes en la red con esas propiedades específicas disponibles.",
			"Incluso si proporcionas una Identidad con propiedades que la\n         la aplicación no solicita permisos, nunca serán capaz de\n         verlas, o incluso saber que existen para esa Identidad.",
			"Las únicas propiedades que siempre se proporcionan son la llave pública y el nombre de la Identidad.",
			"no está solicitando ninguna información adicional. Lo único que requieren es el hash y nombre de la Identidad."
		],
		"identityNoIdentities": [
			"No tienes Identidades que coincidan con los campos requeridos por esta aplicación.",
			"Si deseas utilizar una Identidad con este dominio, deberás actualizar esa Identidad y cumplir con los requisitos.\n         Puedes ver lo que este dominio requiere en el panel izquierdo."
		],
		"signatureWhitelist": [
			"¿Deseas incluir esta acción de contrato en la lista blanca?",
			"Puedes incluir esta acción en la lista blanca para que la próxima vez no tengas que autorizarla manualmente.\n         Cada propiedad que tenga un check al lado se volverá mutable, lo que significa que puedes permitir\n         ciertas propiedades de esta transacción que cambien y solo si las otras propiedades se cambian\n         fallará en incluirse en la lista blanca.",
			"Esto incluye información personal requerida y los cambios a tu Identidad no eliminan los permisos.",
			"Si tienes varias ubicaciones y una transacción requiere una ubicación, siempre se te preguntará."
		],
		"scatterIsLocked": [
			"Tu Scatter está bloqueado!",
			"Antes de que puedas hacer algo con tu Scatter necesitarás desbloquearlo.",
			"A propósito, nunca mostraremos un mensaje/ventana emergente que requiera que inicies sesión.",
			"Si ves un mensaje/ventana emergente que solicite tu contraseña, es un sitio web malicioso que intenta obtener tu contraseña.\n         Desbloquea Scatter solamente desde la ventana emergente de la extensión, haciendo clic en el ícono en la bandeja de tu navegador."
		],
		"updateVersion": [
			"Tu Scatter está desactualizado!",
			"requiere que tengas una versión de Scatter más nueva que la instalada.",
			"Esto generalmente significa que se lanzó una nueva funcionalidad y una aplicación está tratando de usarla,\n         pero no está actualmente incluida en la versión que tienes instalada.",
			"Ten en cuenta que dejamos la verificación de la versión a las aplicaciones mismas. Podrían intentar maliciosamente\n         hacer que descargues algo. Asegúrate de siempre descargar Scatter desde la ubicación correcta."
		]
	}
}