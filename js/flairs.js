loadPage = function() {

var z = 1;

	//LOAD  FLAIRS
	loadFlairs = function() {
		var enter = document.getElementById('content');

		var name = {
			'3rdA': 'placeholder',
		'3rdA1': 'placeholder',
		'A': 'placeholder',
		'A1': 'placeholder',
		'A2': 'placeholder',
		'A3': 'placeholder',
		'ameyuri': 'placeholder',
		'ameyuri1': 'placeholder',
		'anko': 'placeholder',
		'ashura': 'placeholder',
		'ashura1': 'placeholder',
		'asuma': 'placeholder',
		'asuma1': 'placeholder',
		'asuma2': 'placeholder',
		'baki': 'placeholder',
		'bandit': 'placeholder',
		'bandit-lackey': 'placeholder',
		'bandit-leader': 'placeholder',
		'bee': 'placeholder',
		'bee1': 'placeholder',
		'bee2': 'placeholder',
		'bee3': 'placeholder',
		'chino': 'placeholder',
		'chino1': 'placeholder',
		'chiriku': 'placeholder',
		'chiriku1': 'placeholder',
		'chiyo': 'placeholder',
		'chiyo1': 'placeholder',
		'choji': 'placeholder',
		'choji1': 'placeholder',
		'choji2': 'placeholder',
		'choji3': 'placeholder',
		'chojuro': 'placeholder',
		'chojuro1': 'placeholder',
		'chojuro2': 'placeholder',
		'chojuro3': 'placeholder',
		'choza': 'placeholder',
		'danzo': 'placeholder',
		'danzo1': 'placeholder',
		'darui': 'placeholder',
		'darui1': 'placeholder',
		'deidara': 'placeholder',
		'deidara1': 'placeholder',
		'deidara2': 'placeholder',
		'deidara3': 'placeholder',
		'deidara4': 'placeholder',
		'deidara5': 'placeholder',
		'dosu': 'placeholder',
		'ebisu': 'placeholder',
		'fuu': 'placeholder',
		'fuu1': 'placeholder',
		'gaara': 'placeholder',
		'gaara1': 'placeholder',
		'gaara2': 'placeholder',
		'gaara3': 'placeholder',
		'gaara4': 'placeholder',
		'gaara5': 'placeholder',
		'gaara6': 'placeholder',
		'gaara7': 'placeholder',
		'gaara8': 'placeholder',
		'gaara9': 'placeholder',
		'gaara10': 'placeholder',
		'gaara11': 'placeholder',
		'gaara12': 'placeholder',
		'gaara13': 'placeholder',
		'gengetsu': 'placeholder',
		'gengetsu1': 'placeholder',
		'gengo': 'placeholder',
		'gengo1': 'placeholder',
		'genma': 'placeholder',
		'gozu': 'placeholder',
		'guy': 'placeholder',
		'guy1': 'placeholder',
		'guy2': 'placeholder',
		'guy3': 'placeholder',
		'guy4': 'placeholder',
		'guy5': 'placeholder',
		'guy6': 'placeholder',
		'guy7': 'placeholder',
		'haku': 'placeholder',
		'haku1': 'placeholder',
		'haku2': 'placeholder',
		'haku3': 'placeholder',
		'haku4': 'placeholder',
		'haku5': 'placeholder',
		'haku6': 'placeholder',
		'haku7': 'placeholder',
		'haku-pvp': 'placeholder',
		'han': 'placeholder',
		'han1': 'placeholder',
		'hanabi': 'placeholder',
		'hanzo': 'placeholder',
		'hanzo1': 'placeholder',
		'hanzo2': 'placeholder',
		'hanzo3': 'placeholder',
		'hashirama': 'placeholder',
		'hashirama1': 'placeholder',
		'hashirama2': 'placeholder',
		'hashirama3': 'placeholder',
		'hashirama4': 'placeholder',
		'hashirama5': 'placeholder',
		'hashirama6': 'placeholder',
		'hayate': 'placeholder',
		'hayate1': 'placeholder',
		'hiashi': 'placeholder',
		'hidan': 'placeholder',
		'hidan1': 'placeholder',
		'hinata': 'placeholder',
		'hinata1': 'placeholder',
		'hinata2': 'placeholder',
		'hinata3': 'placeholder',
		'hinata4': 'placeholder',
		'hinata5': 'placeholder',
		'hinata6': 'placeholder',
		'hinata7': 'placeholder',
		'hinata8': 'placeholder',
		'hinata9': 'placeholder',
		'hinata-pvp': 'placeholder',
		'hiruzen': 'placeholder',
		'hiruzen1': 'placeholder',
		'hiruzen2': 'placeholder',
		'hizashi': 'placeholder',
		'ibiki': 'placeholder',
		'indra': 'placeholder',
		'indra1': 'placeholder',
		'ino': 'placeholder',
		'ino1': 'placeholder',
		'ino2': 'placeholder',
		'ino3': 'placeholder',
		'ino4': 'placeholder',
		'ino5': 'placeholder',
		'ino6': 'placeholder',
		'ino7': 'placeholder',
		'ino8': 'placeholder',
		'ino9': 'placeholder',
		'inoichi': 'placeholder',
		'iruka': 'placeholder',
		'iruka1': 'placeholder',
		'itachi': 'placeholder',
		'itachi1': 'placeholder',
		'itachi2': 'placeholder',
		'itachi3': 'placeholder',
		'itachi4': 'placeholder',
		'itachi5': 'placeholder',
		'itachi6': 'placeholder',
		'itachi7': 'placeholder',
		'itachi8': 'placeholder',
		'itachi9': 'placeholder',
		'itachi10': 'placeholder',
		'izumo': 'placeholder',
		'izuna': 'placeholder',
		'jinpachi': 'placeholder',
		'jinpachi1': 'placeholder',
		'jiraiya': 'placeholder',
		'jiraiya1': 'placeholder',
		'jiraiya2': 'placeholder',
		'jiraiya3': 'placeholder',
		'jiraiya4': 'placeholder',
		'jiraiya5': 'placeholder',
		'jiraiya6': 'placeholder',
		'jirobo': 'placeholder',
		'jirobo1': 'placeholder',
		'jirobo2': 'placeholder',
		'jirobo3': 'placeholder',
		'jugo': 'placeholder',
		'jugo1': 'placeholder',
		'kabuto': 'placeholder',
		'kabuto1': 'placeholder',
		'kabuto2': 'placeholder',
		'kabuto3': 'placeholder',
		'kabuto4': 'placeholder',
		'kaguya': 'placeholder',
		'kaguya1': 'placeholder',
		'kakashi': 'placeholder',
		'kakashi1': 'placeholder',
		'kakashi2': 'placeholder',
		'kakashi3': 'placeholder',
		'kakashi4': 'placeholder',
		'kakashi5': 'placeholder',
		'kakashi6': 'placeholder',
		'kakashi7': 'placeholder',
		'kakashi8': 'placeholder',
		'kakashi9': 'placeholder',
		'kakashi10': 'placeholder',
		'kakashi11': 'placeholder',
		'kakashi12': 'placeholder',
		'kakkou': 'placeholder',
		'kakuzu': 'placeholder',
		'kakuzu1': 'placeholder',
		'kankuro': 'placeholder',
		'kankuro1': 'placeholder',
		'kankuro2': 'placeholder',
		'kankuro3': 'placeholder',
		'karin': 'placeholder',
		'karin1': 'placeholder',
		'karin2': 'placeholder',
		'kiba': 'placeholder',
		'kiba1': 'placeholder',
		'kiba2': 'placeholder',
		'kiba3': 'placeholder',
		'kiba4': 'placeholder',
		'kidomaru': 'placeholder',
		'kidomaru1': 'placeholder',
		'kidomaru2': 'placeholder',
		'kidomaru3': 'placeholder',
		'kimimaro': 'placeholder',
		'kimimaro1': 'placeholder',
		'kimimaro2': 'placeholder',
		'kin': 'placeholder',
		'kisame': 'placeholder',
		'kisame1': 'placeholder',
		'kisame2': 'placeholder',
		'kisame3': 'placeholder',
		'konan': 'placeholder',
		'konan1': 'placeholder',
		'konan2': 'placeholder',
		'konan3': 'placeholder',
		'konan4': 'placeholder',
		'konan5': 'placeholder',
		'konohamaru': 'placeholder',
		'konohamaru1': 'placeholder',
		'konohamaru2': 'placeholder',
		'kotetsu': 'placeholder',
		'kurenai': 'placeholder',
		'kurotsuchi': 'placeholder',
		'kurotsuchi1': 'placeholder',
		'kushimaru': 'placeholder',
		'kushimaru1': 'placeholder',
		'kushina': 'placeholder',
		'kushina1': 'placeholder',
		'kushina2': 'placeholder',
		'kushina3': 'placeholder',
		'kushina4': 'placeholder',
		'leaf-anbu-female': 'placeholder',
		'leaf-anbu-male': 'placeholder',
		'leaf-chunin-male': 'placeholder',
		'lee': 'placeholder',
		'lee1': 'placeholder',
		'lee2': 'placeholder',
		'lee3': 'placeholder',
		'lee4': 'placeholder',
		'lee5': 'placeholder',
		'lee6': 'placeholder',
		'lee7': 'placeholder',
		'madara': 'placeholder',
		'madara1': 'placeholder',
		'madara2': 'placeholder',
		'madara3': 'placeholder',
		'madara4': 'placeholder',
		'madara5': 'placeholder',
		'madara6': 'placeholder',
		'mahiru': 'placeholder',
		'mei': 'placeholder',
		'mei1': 'placeholder',
		'meizu': 'placeholder',
		'mifune': 'placeholder',
		'minato': 'placeholder',
		'minato1': 'placeholder',
		'minato2': 'placeholder',
		'minato3': 'placeholder',
		'minato4': 'placeholder',
		'minato5': 'placeholder',
		'minato6': 'placeholder',
		'minato7': 'placeholder',
		'mist-anbu-male': 'placeholder',
		'mist-chunin-male': 'placeholder',
		'misumi': 'placeholder',
		'mizuki': 'placeholder',
		'mu': 'placeholder',
		'nagato': 'placeholder',
		'nagato1': 'placeholder',
		'nagato2': 'placeholder',
		'nagato3': 'placeholder',
		'naruto': 'placeholder',
		'naruto1': 'placeholder',
		'naruto2': 'placeholder',
		'naruto3': 'placeholder',
		'naruto4': 'placeholder',
		'naruto5': 'placeholder',
		'naruto6': 'placeholder',
		'naruto7': 'placeholder',
		'naruto8': 'placeholder',
		'naruto9': 'placeholder',
		'naruto10': 'placeholder',
		'naruto11': 'placeholder',
		'naruto12': 'placeholder',
		'naruto13': 'placeholder',
		'naruto14': 'placeholder',
		'naruto15': 'placeholder',
		'naruto16': 'placeholder',
		'naruto17': 'placeholder',
		'naruto18': 'placeholder',
		'naruto19': 'placeholder',
		'naruto20': 'placeholder',
		'naruto21': 'placeholder',
		'naruto22': 'placeholder',
		'naruto23': 'placeholder',
		'naruto24': 'placeholder',
		'naruto25': 'placeholder',
		'naruto26': 'placeholder',
		'naruto27': 'placeholder',
		'naruto28': 'placeholder',
		'naruto29': 'placeholder',
		'naruto30': 'placeholder',
		'naruto31': 'placeholder',
		'naruto-fem': 'placeholder',
		'neji': 'placeholder',
		'neji1': 'placeholder',
		'neji2': 'placeholder',
		'neji3': 'placeholder',
		'neji4': 'placeholder',
		'neji5': 'placeholder',
		'neji6': 'placeholder',
		'obito': 'placeholder',
		'obito1': 'placeholder',
		'obito2': 'placeholder',
		'obito3': 'placeholder',
		'obito4': 'placeholder',
		'obito5': 'placeholder',
		'obito6': 'placeholder',
		'obito7': 'placeholder',
		'obito8': 'placeholder',
		'ohnoki': 'placeholder',
		'ohnoki1': 'placeholder',
		'orochimaru': 'placeholder',
		'orochimaru1': 'placeholder',
		'orochimaru2': 'placeholder',
		'orochimaru3': 'placeholder',
		'orochimaru4': 'placeholder',
		'orochimaru5': 'placeholder',
		'pain': 'placeholder',
		'pain1': 'placeholder',
		'pain2': 'placeholder',
		'pain3': 'placeholder',
		'raido': 'placeholder',
		'rasa': 'placeholder',
		'rasa1': 'placeholder',
		'rin': 'placeholder',
		'rin1': 'placeholder',
		'rin2': 'placeholder',
		'roshi': 'placeholder',
		'roshi1': 'placeholder',
		'rou': 'placeholder',
		'rou1': 'placeholder',
		'sai': 'placeholder',
		'sai1': 'placeholder',
		'sai2': 'placeholder',
		'sai3': 'placeholder',
		'sakon': 'placeholder',
		'sakon1': 'placeholder',
		'sakon2': 'placeholder',
		'sakon3': 'placeholder',
		'sakura': 'placeholder',
		'sakura1': 'placeholder',
		'sakura2': 'placeholder',
		'sakura3': 'placeholder',
		'sakura4': 'placeholder',
		'sakura5': 'placeholder',
		'sakura6': 'placeholder',
		'sakura7': 'placeholder',
		'sakura8': 'placeholder',
		'sakura9': 'placeholder',
		'sakura10': 'placeholder',
		'sakura11': 'placeholder',
		'sakura12': 'placeholder',
		'sakura13': 'placeholder',
		'sakura14': 'placeholder',
		'sakura15': 'placeholder',
		'sakura16': 'placeholder',
		'sakura17': 'placeholder',
		'sakura-pvp': 'placeholder',
		'sand-chunin-male': 'placeholder',
		'sasori': 'placeholder',
		'sasori1': 'placeholder',
		'sasori2': 'placeholder',
		'sasuke': 'placeholder',
		'sasuke1': 'placeholder',
		'sasuke2': 'placeholder',
		'sasuke3': 'placeholder',
		'sasuke4': 'placeholder',
		'sasuke5': 'placeholder',
		'sasuke6': 'placeholder',
		'sasuke7': 'placeholder',
		'sasuke8': 'placeholder',
		'sasuke9': 'placeholder',
		'sasuke10': 'placeholder',
		'sasuke11': 'placeholder',
		'sasuke12': 'placeholder',
		'sasuke13': 'placeholder',
		'sasuke14': 'placeholder',
		'sasuke15': 'placeholder',
		'sasuke16': 'placeholder',
		'sasuke17': 'placeholder',
		'sasuke18': 'placeholder',
		'sasuke19': 'placeholder',
		'sasuke20': 'placeholder',
		'sasuke21': 'placeholder',
		'sasuke22': 'placeholder',
		'sasuke23': 'placeholder',
		'sasuke24': 'placeholder',
		'sasuke25': 'placeholder',
		'sasuke26': 'placeholder',
		'sasuke27': 'placeholder',
		'sasuke28': 'placeholder',
		'sasuke29': 'placeholder',
		'sasuke30': 'placeholder',
		'sasuke31': 'placeholder',
		'shibi': 'placeholder',
		'shikaku': 'placeholder',
		'shikamaru': 'placeholder',
		'shikamaru1': 'placeholder',
		'shikamaru2': 'placeholder',
		'shikamaru3': 'placeholder',
		'shikamaru4': 'placeholder',
		'shino': 'placeholder',
		'shino1': 'placeholder',
		'shino2': 'placeholder',
		'shisui': 'placeholder',
		'shisui1': 'placeholder',
		'shisui2': 'placeholder',
		'shizune': 'placeholder',
		'soku': 'placeholder',
		'soku1': 'placeholder',
		'sound-ninja': 'placeholder',
		'suigetsu': 'placeholder',
		'suigetsu1': 'placeholder',
		'taiseki': 'placeholder',
		'tayuya': 'placeholder',
		'tayuya1': 'placeholder',
		'tayuya2': 'placeholder',
		'tayuya3': 'placeholder',
		'temari': 'placeholder',
		'temari1': 'placeholder',
		'temari2': 'placeholder',
		'temari3': 'placeholder',
		'tenten': 'placeholder',
		'tenten1': 'placeholder',
		'tenten2': 'placeholder',
		'thief': 'placeholder',
		'thief-lackey': 'placeholder',
		'thief-leader': 'placeholder',
		'tobi': 'placeholder',
		'tobi1': 'placeholder',
		'tobirama': 'placeholder',
		'tobirama1': 'placeholder',
		'tobirama2': 'placeholder',
		'tobirama3': 'placeholder',
		'tobirama4': 'placeholder',
		'trinity-kagari': 'placeholder',
		'trinity-mubi': 'placeholder',
		'trinity-oboro': 'placeholder',
		'tsume': 'placeholder',
		'tsunade': 'placeholder',
		'tsunade1': 'placeholder',
		'tsunade2': 'placeholder',
		'tsunade3': 'placeholder',
		'tsunade4': 'placeholder',
		'tsunade5': 'placeholder',
		'tsunade6': 'placeholder',
		'tsunade7': 'placeholder',
		'tsunade8': 'placeholder',
		'utakata': 'placeholder',
		'utakata1': 'placeholder',
		'waraji': 'placeholder',
		'yagura': 'placeholder',
		'yagura1': 'placeholder',
		'yahiko': 'placeholder',
		'yamato': 'placeholder',
		'yamato1': 'placeholder',
		'yamato2': 'placeholder',
		'yashamaru': 'placeholder',
		'yoroi': 'placeholder',
		'yugito': 'placeholder',
		'yugito1': 'placeholder',
		'zabuza': 'placeholder',
		'zabuza1': 'placeholder',
		'zabuza2': 'placeholder',
		'zabuza3': 'placeholder',
		'zabuza4': 'placeholder',
		'zabuza5': 'placeholder',
		'zabuza6': 'placeholder',
		'zabuza7': 'placeholder',
		'zaku': 'placeholder',
		'zetsu': 'placeholder',
		'zetsu1': 'placeholder',
		'zori': 'placeholder',
		}

		//creates HTML for special flairs
		for (var v in name) {
			if (name.hasOwnProperty(v)) {
				var flairs = document.createElement('span');
				flairs.setAttribute('class', 'flair flair-'+v+'');
				flairs.setAttribute('name', v);
				flairs.setAttribute('onclick', 'fselect("'+v+'")');

				enter.appendChild(flairs);
				z++;
			}
		}
	}
	loadFlairs();
}

document.addEventListener('DOMContentLoaded', loadPage, false);
