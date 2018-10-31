export default {
	"generic": {
		"new": "신규 생성",
		"save": "저장",
		"ignored": "무시",
		"identity": "신원인증 ID",
		"contract": "컨트랙트",
		"action": "액션",
		"removed": "제거",
		"name": "이름",
		"search": "검색",
		"verifyPassword": "작업 수행 전 먼저 패스워드를 확인해야 합니다.",
		"host": "호스트",
		"port": "포트",
		"requires": "요구 사항",
		"requiredProperties": "필수 요소",
		"import": "가져오기",
		"chainId": "체인 ID",
		"blockchain": "블록체인",
		"account": "계정"
	},
	"placeholder": {
		"name": "이름",
		"publicKey": "퍼블릭 키",
		"privateKey": "프라이빗 키",
		"firstName": "이름",
		"lastName": "성",
		"email": "이메일",
		"birthDate": "생일",
		"locationName": "주소지",
		"defaultLocationName": "홈",
		"phone": "전화",
		"address": "주소",
		"city": "도시",
		"postal": "우편번호",
		"country": "국가",
		"state": "행정구역",
		"password": "패스워드",
		"confirmPassword": "패스워드 확인",
		"newPassword": "새로운 패스워드",
		"confirmNewPassword": "새로운 패스워드 확인",
		"domainOrIp": "도메인 혹은 IP주소"
	},
	"button": {
		"createIdentity": "신원인증 ID 생성",
		"importAccount": "계정 불러오기",
		"importKeychain": "키체인 불러오기",
		"selectFile": "파일 선택",
		"addNewLocation": "새 지역 추가",
		"setAsDefaultLocation": "기본 지역으로 설정",
		"removeLocation": "지역 삭제",
		"changePassword": "패스워드 변경",
		"destroyScatter": "스캐터 삭제",
		"createNewScatter": "새 스캐터 생성",
		"loadFromBackup": "백업정보 불러오기",
		"unlock": "잠금 해제",
		"exportScatter": "스캐터 내보내기",
		"generateKeyPair": "키 쌍 생성",
		"validate": "유효성 검사",
		"copy": "복사",
		"changeLanguage": "언어 변경",
		"cancel": "취소",
		"accept": "수락",
		"deny": "거부",
		"yes": "네",
		"no": "아니오",
		"useSelectedAccount": "선택한 계정 사용",
		"selectIdentity": "신원인증 ID 선택",
		"changeName": "이름 변경",
		"claimIdentity": "신원인증 ID 요청",
		"registerIdentity": "신원인증 ID 등록"
	},
	"mainmenu": {
		"identities": "신원인증 ID",
		"keys": "키 쌍",
		"permissions": "권한",
		"history": "변경내역",
		"lock": "잠금"
	},
	"identities": {
		"header": "아직 어떠한 신원인증 정보도 존재하지 않습니다.",
		"description": "\n        신원인증 ID는 성과 이름, 주소 및 다양한 블록체인 계정/키 쌍과 같은 개인정보 꾸러미입니다. \n\t\t신원인증 ID는 키 쌍을 포함하고 있으며 소유권이 입증 될 수 있으므로 패스워드 없이 \n\t\t응용프로그램을 인증 할 수 있습니다.\n\n    "
	},
	"identity": {
		"disablingHeader": "비활성화란?",
		"disablingDescription": "\n\t\t신원인증 ID 비활성화는 이를 참고하는 응용프로그램으로부터 사용을 중지시킵니다.\n\t\t이 ID를 영구적으로 삭제하는 대신에 비활성화를 사용할 수 있습니다.\n        응용프로그램에 대한 사용 권한이므로 복구하기가 더 어려울 수 있습니다.\n    ",
		"nameHeader": "신원인증 ID 이름",
		"nameDescription": "\n        응용 프로그램은 이 이름을 모든 네트워크에서 고유한 사용자 이름으로 사용하도록 선택할 수 있습니다.\n        RIDL에 등록되지 않은 경우 임의의 이름이 지정됩니다.\n\n    ",
		"noKeyPairsHeader": "키 쌍이 존재하지 않습니다!",
		"noKeyPairsDescription": "\n        이 신원인증 ID에 블록체인 계정을 추가하기 전에 일부 키 쌍을 추가해야합니다. 주메뉴로 이동하여 다음을 선택하십시오.\n\t",
		"accountHeader": "계정",
		"accountDescription": "\n\t\t계정은 여러분의 자금을 보유하고 있으며 블록체인에서 컨트랙트를 체결 할 수 있게 해줍니다.\n\t\t신원인증 ID와 관련하여, 이것을 여권에 연결된 은행계좌처럼 생각할 수 있습니다.\n\t\t언제든지 이것을 변경할 수 있습니다.\n    ",
		"personalHeader": "개인 정보",
		"personalDescription": "\n\t\t개인 정보는 이것이 필요한 응용 프로그램을 위해 계정에 추가 할 수 있습니다. \n\t\t예를 들어 쇼핑 웹사이트는 구매 상품을 수령할 사람을 알기 위해 이름 정보가 필요할 수 있습니다.\n    ",
		"locationHeader": "지역 정보",
		"locationDescription": "\n\t\t위치 정보를 요구하는 응용 프로그램을 위해 위치 정보를 계정에 추가 할 수 있습니다.\n\t\t예를 들어 쇼핑 웹사이트는 구입한 상품의 배송지 정보를 위해 배송 주소가 필요할 수 있습니다.\n    "
	},
	"permissions": {
		"header": "표시 권한이 없습니다.",
		"description": "\n\t\t권한은 사용할 응용 프로그램에 계정인증 ID를 제공하거나 \n\t\t승인 대기없이 컨트랙트 액션을 허용 목록에 추가 할 때 설정됩니다.\n    "
	},
	"permission": {
		"revokeIdentity": "신원 인증 ID 취소",
		"revokeContract": "컨트랙트 취소",
		"revokeAction": "액션 취소"
	},
	"histories": {
		"header": "표시 할 변경내역건이 없습니다.",
		"description": "\n      스캐터를 통한 모든 이벤트의 목록을 볼 수 있습니다.\n      스캐터 외부에서 발생한 계정 이벤트는 확인 할 수 없습니다.\n     ",
		"note": "\n        안내: 설정의 백업 옵션에서 스캐터 데이터를 내보내면 이러한 이벤트가 저장되지 않습니다. \n\t\t해당 스캐터 인스턴스를 다시 가져오면 변경내역이 비어있게 됩니다. \n\t\t나중에 내역을 내보내려면 이 패널에서 내비게이션 막대의 작업 버튼을 사용하십시오.\n    "
	},
	"settingsmenu": {
		"networks": "네트워크",
		"keypairs": "키 쌍",
		"language": "언어",
		"autoLock": "자동 잠금",
		"password": "패스워드",
		"backup": "백업",
		"destroy": "제거"
	},
	"backup": {
		"header": "백업(암호화) 내보내기",
		"description": "\n        스캐터를 내보내 다른 장치로 가져 올 수 있습니다. 파일을 내보낼 때 파일은 여전히 암호화되므로 니모닉이나 패스워드가 있는지 확인하십시오. \n\t\t그렇지 않으면 쓸모가 없어집니다. 계정의 개인키도 내보내기 전에 제거되며, 내보낸 파일에 남아있는 개인키만 신원인증용 키가 됩니다.\n    "
	},
	"import": {
		"header": "백업(암호화) 가져오기",
		"description": "\n        암호화 된 키체인 파일을 가져오면 스캐터 키체인을 다시 생성하지만 이전 네트워크 또는 계정을 가져 오지 않습니다.\n    "
	},
	"pass": {
		"header": "새 패스워드 입력",
		"description": "\n        암호를 변경하면 일반적으로 항상 암호화 된 모든 저장정보의 패스워드를 해독한 다음 새 패스워드의 시드로 패스워드를 다시 암호화합니다.\n    "
	},
	"network": {
		"header": "새 네트워크 추가",
		"description": "\n\t\t응용 프로그램은 일반적으로 특정 네트워크에서 실행되지만 모든 응용 프로그램이 동일한 네트워크에서 실행되지 않을 수도 있습니다. \n\t\t예를 들어, 응용 프로그램은 아직 런칭되지 않은 새로운 특징을 가진 테스트 네트워크를 가질 수 있습니다. \n\t\t해당 네트워크와 상호 작용하려면 해당 네트워크에 계정이 있어야합니다.\n    "
	},
	"destroy": {
		"header": "스캐터 제거",
		"description": "\n    \t스캐터 키체인 전체를 제거하려고 합니다. 본 스캐터를 다시 복구하는 유일한 방법은 내보낸 스캐터 JSON 데이터를 가져오는 것입니다. \n\t\t그렇지 않으면 여러분의 신원을 요청 할 수 없습니다. 먼저 백업 설정 패널에서 스캐터를 내보냈는지 확인하십시오.\n\t\n\t"
	},
	"language": {
		"header": "언어 선택"
	},
	"keypairs": {
		"noKeyPairsHeader": "어떠한 키 쌍도 존재하지 않습니다.",
		"noKeyPairsDescription": "\n        오른쪽 상단의 버튼을 클릭하면 키 쌍을 만들거나 가져올 수 있습니다.\n    "
	},
	"keypair": {
		"header": "새로운 키 쌍 생성",
		"description": "\n        이 패널을 사용하여 키 쌍을 생성 할 수 있습니다. 이러한 키 쌍은 컴퓨터에서 로컬로 생성되며 아무데도 보내지지 않습니다. \n\t\t개인 키를 붙여 넣을 수도 있으며 공개 키를 자동으로 생성합니다.\n    ",
		"important": "개인 키는 다른 곳에 저장하십시오! 스캐터에서 개인 키를 다시 가져올 수 없습니다.",
		"validation": "프라이빗 키에서 생성된 퍼블릭 키가 제공된 퍼블릭 키와 일치하지 않습니다!"
	},
	"lock": {
		"header": "자동 잠금 타이머",
		"description": "\n        자동 잠금 기능을 사용하면 스캐터가 자동으로 잠금 기능을 수행하므로 스캐터 잠금을 기억하지 않아도됩니다.\n    ",
		"minute": "분",
		"minutes": "분",
		"hour": "시간",
		"hours": "시간",
		"neverLock": "잠금 사용안함"
	},
	"mnemonic": {
		"header": "니모닉",
		"description": "니모닉은 암호화 된 시드로 변환되는 일련의 단어입니다.",
		"note": "\n        니모닉을 반드시 안전한 곳에 보관하십시오. \n\t\t암호를 잊어 버린 경우 스캐터에 대한 권한을 복구하고 개인 정보를 해독 할 수 있는 유일한 방법입니다.\n\t",
		"wrote": "I Wrote It Down"
	},
	"onboarding": {
		"title": "Welcome to Use",
		"desc1": "The developer team holds no liability towards your digital assets. It is your responsibility to constantly make sure your computer is free of malware. We have taken every measure in our capabilities to ensure that this software is safe to use as intended however your computer itself is your worst enemy and should be treated as such.",
		"desc2": "By using this software you are relinquishing any ability to take legal actions against the developer team and recognize yourself as the sole legal owner of your own wallet instance, your keys, and your data."
	},
	"error": {
		"mustSelectItem": "항목을 선택해야합니다."
	},
	"alert": {
		"badIdentityName": [
			"잘못된 신원인증 ID 이름",
			"ID 이름은 3자에서 20자 사이여야 합니다. \n\t\t 알파벳과 숫자 조합이어야하지만 공백, 대시 및 밑줄도 포함될 수 있습니다."
		],
		"identityNameExists": [
			"신원인증 ID가 존재함",
			"이 신원인증 ID 이름은 다른 신원인증에 이미 등록되었습니다."
		],
		"noSuchIdentityName": [
			"해당되는 신원인증 ID가 없음",
			"이 신원인증 ID는 RIDL에 존재하지 않습니다."
		],
		"keyPairExists": [
			"키 쌍이 존재함",
			"이 키 쌍은 이미 키체인에 등록되어 있습니다."
		],
		"badKeyPairName": [
			"잘못된 키 쌍 이름",
			"키 쌍은 중복될 수 없습니다."
		],
		"invalidPrivateKey": [
			"잘못된 프라이빗 키",
			"입력한 프라이빗 키가 유효하지 않은 것으로 보입니다. 키를 확인한 후 다시 시도하십시오."
		],
		"noAccountsFound": [
			"발견된 계정 없음",
			"이 프라이빗 키에 연결된 계정이 없습니다.\n\t\t 스캐터가 생성하지 않은 키를 가져 오려면 키를 가져 오기 전에 키에 대한 계정을 만들어야합니다."
		],
		"passwordsDoNotMatch": [
			"패스워드 불일치",
			"입력한 암호가 일치하지 않습니다."
		],
		"badPassword": [
			"잘못된 패스워드",
			"패스워드는 최소 8글자 이상이어야 합니다."
		],
		"wrongPassword": [
			"패스워드 오류",
			"입력한 패스워드가 맞지 않습니다."
		],
		"networkHostInvalid": [
			"네트워크 호스트 오류",
			"입력한 네트워크 호스트가 유효하지 않습니다. 호스트는 도메인 이름이어야 합니다.\n         도메인(예: testnet.eos.io) 또는 IP (예: 192.168.0.1)."
		],
		"networkExists": [
			"네트워크가 이미 존재함",
			"이 호스트와 포트가있는 다른 네트워크가 이미 있습니다. 네트워크를 두 번 저장해야 할 필요가 없습니다."
		],
		"removingEndorsedNetwork": [
			"승인된 네트워크를 제거 할 수 없음",
			"스캐터의 승인된 네트워크는 제거 할 수 없습니다."
		],
		"youMustSelectAnIdentity": [
			"신원인증 ID 선택",
			"신원을 공개하고 싶지 않으면 거부 버튼을 누르십시오. 그렇지 않으면 이 요청을 승인하기 위해 신원을 선택해야합니다."
		]
	},
	"prompt": {
		"destroyingScatter": [
			"스캐터 제거",
			"백업을 다시 확인할 수 있는 마지막 기회입니다."
		],
		"removingNetwork": [
			"네트워크 제거",
			"네트워크를 삭제하려고합니다. 삭제 한 후에는 이 네트워크에서 새 계정을 만들 수 없지만 다시 추가하지 못하는 것은 아닙니다. \n\t\t 이미 이 네트워크를 사용하는 계정은 수정되거나 제거되지 않습니다."
		],
		"whitelistingContractAction": [
			"통화 계약을 허용 목록에 추가하려 함",
			"통화 기반 계약의 승인은 위험하므로 절대로 해서는 안됩니다. 이 승인이 가능한 특정 경우가 있지만 절대적으로 필요한 사항이 아니라면 이 계약 작업을 허용 목록에 포함하면 안됩니다. \n\t     이 항목을 허용 목록에 추가 하시겠습니까?"
		],
		"selectAccount": [
			"계정 선택",
			"이 신원인증 ID에 사용할 계정과 권한을 선택하십시오. 한 번에 하나씩만 선택할 수 있습니다."
		],
		"claimIdentity": [
			"신원인증 ID 요청",
			"신원인증 ID 이름에 대한 파일의 퍼블릭 키와 일치하는 프라이빗 키를 입력하십시오."
		]
	},
	"request": {
		"addNetwork": [
			"이(가) 자신의 네트워크를 당신의 스캐터에 추가하려고합니다.",
			"일부 응용 프로그램은 자체 네트워크를 사용합니다.",
			"이렇게해서 응용 프로그램이 귀하의 스캐터에 액세스 할 수 있는 것은 아닙니다. \n\t\t 이 인터페이스를 통해 네트워크를 추가하면 설정 패널에서 직접 수동으로 추가 할 필요가 없습니다."
		],
		"identity": [
			"이(가) 추가 정보를 요청하고 있습니다.",
			"때로는 응용 프로그램이 귀하의 이메일이나 생년월일과 같은 정보를 요구합니다. \n\t\t 오른쪽의 신원인증 ID는 네트워크상 여러분이 소유하고 있는 특정 속성을 포함한 것들입니다.",
			"응용 프로그램이 요청하지 않는 속성이 여러분이 제공한 신원인증 ID에 포함되더라도\n\t\t 응용프로그램은 해당 신원인증 ID에 대한 정보를 열람할 수 없습니다.",
			"항상 제공되는 유일한 속성은 신원인증 ID의 퍼블릭 키와 이름입니다.",
			"이(가) 추가 정보를 요청하지는 않습니다. 그들이 요구하는 것은 신원인증 ID 해시 및 이름입니다."
		],
		"identityNoIdentities": [
			"이 응용 프로그램에 필요한 필드와 일치하는 신원인증 ID가 없습니다.",
			"이 도메인에서 신원인증 ID를 사용하려면 해당 신원인증 ID를 업데이트하고 요구 사항을 충족해야합니다. 왼쪽 패널에서 이 도메인에 필요한 항목을 볼 수 있습니다."
		],
		"signatureWhitelist": [
			"이 계약 액션을 허용 목록에 추가 하시겠습니까?",
			"이 작업을 허용 목록에 추가하면 차후에는 수동으로 권한을 부여하지 않아도 됩니다. 그 옆에 체크가 있는 모든 속성은 변경 가능하게 됩니다. \n\t\t 즉, 이 트랜잭션의 특정 속성이 변경되도록 허용 할 수 있으며 다른 속성이 변경된 경우에만 허용 목록에 포함되지 않습니다.",
			"여기에는 필수 개인 정보가 포함되며 신원인증 ID 변경으로 인해 사용 권한이 제거되지 않습니다.",
			"여러분이 여러개의 지역을 가지고 있다면, 트랜잭션은 여러분이 항상 표시해야 할 지역을 요구합니다."
		],
		"scatterIsLocked": [
			"여러분의 스캐터는 잠금상태입니다!",
			"스캐터를 사용하기 전 잠금을 해제해야 합니다.",
			"스캐터는 의도적으로 당신에게 로그인을 요구하는 프롬프트/팝업을 절대 보여주지 않습니다.",
			"암호를 요청하는 프롬프트/팝업이 나타나면 암호를 얻으려는 악의적인 웹사이트입니다. \n\t\t 브라우저 트레이의 아이콘을 클릭하여 확장 프로그램의 팝업 메뉴에서 스캐터를 항상 잠금 해제하십시오."
		],
		"updateVersion": [
			"당신의 스캐터는 구버전입니다!",
			"는 설치된 것보다 최신 버전인 스캐터가 필요합니다.",
			"이는 일반적으로 새 기능이 릴리스되었고 응용 프로그램이 이 기능을 사용하려고 했지만 현재 설치한 버전에 기능이 포함되어 있지 않음을 의미합니다.",
			"버전 확인은 응용 프로그램 자체에 맡깁니다. 악의적으로 사용자가 무언가를 다운로드하도록 유도 할 수 있습니다. 항상 인증된 출처에서 스캐터를 다운로드하십시오."
		]
	}
}