$(document).ready(function() { 
	$(".various").fancybox({
		maxWidth	: 1140,
		maxHeight	: 640,
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		padding: 0,
		margin: [40,0,10,0],
		openEffect	: 'none',
		closeEffect	: 'none'
	});

		
	$('a.feedback-btn').fancybox({
		'padding': 25,
		'overlayOpacity': 0.87,
		'overlayColor': '#fff',
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',
		autoSize	: true,
		autoCenter : true,
		iframe : {
			preload : false
		}
		// type: 'ajax',
		// 'helpers':  {
		// 	'overlay' : {
		// 		'locked' : false
		// 	}
		// }
	});
	$("#ajax1").on('click', function() {

		$.fancybox.open('<div style="max-width: 600px" class="shortinfo-block"><p>ИПОПБ Профессиональной Переподготовки применяет инновационный подход к дополнительному образованию, повышая его доступность. </p><p>Мы предлагаем дистанционные программы обучения, разработанные на основе действующих стандартов заочного образования, с использованием современных технологий. </p><p>Каждый, кто желает освоить смежную специальность или повысить квалификацию, может учиться по выбранному направлению онлайн, получив доступ к учебно-методическому комплексу. </p><p>Процессом обучения руководит преподаватель курсов, который оказывает помощь в изучении материала и отвечает на все возникающие вопросы. </p><p>Такой формат образования доступен самому широкому кругу слушателей, каждый желающий может пройти курс профессиональной переподготовки из любой точки мира, где есть интернет, без нежелательных перерывов в работе и длительных учебных командировок. </p><p>Единственным условием зачисления в ИПОПБ является оконченное среднее специальное или высшее образование. </p><p>Рассчитать стоимость учебной программы, задать вопросы и записаться на курс можно по контактному телефону или через специальную форму заявки на сайте. </p></div>');
	  
	  });
	  $("#ajax2").on('click', function() {

		$.fancybox.open('<div style="max-width:700px;" class="shortinfo-block"><h3>Политика конфиденциальности</h3><p> Оставляя данные на сайте, Вы соглашаетесь с Политикой конфиденциальности и защиты информации.</p><p> <b>1.&nbsp;&nbsp; Защита данных</b></p><p> Администрация сайта ipopb.ru (далее — Сайт) не может передать или раскрыть информацию, предоставленную пользователем (далее Пользователь) при регистрации и использовании функций сайта третьим лицам, кроме случаев, описанных законодательством страны, на территории которой пользователь ведет свою деятельность.</p><p> <b>2.&nbsp;&nbsp; Получение персональной информации</b></p><p> При регистрации на посадочной странице пользователь обязан внести некоторую персональную информацию. Для проверки предоставленных данных посадочная страница оставляет за собой право потребовать доказательства идентичности в онлайн или оффлайн режимах.</p><p> <b>3.&nbsp;&nbsp; Использование персональной информации</b></p><p> 3.1. Сайт хранит персональную информацию Пользователей в соответствии с внутренними регламентами конкретных сервисов.</p><p> 3.2. В отношении персональной информации Пользователя сохраняется ее конфиденциальность, кроме случаев добровольного предоставления Пользователем информации о себе для общего доступа неограниченному кругу лиц. При использовании отдельных сервисов Пользователь соглашается с тем, что определенная часть его персональной информации становится общедоступной.</p><p> 3.3. Сайт вправе передать персональную информацию Пользователя третьим лицам в следующих случаях:</p><p> 3.3.1. Пользователь выразил согласие на такие действия.</p><p> 3.3.2. Передача необходима для использования Пользователем определенного сервиса либо для исполнения определенного соглашения или договора с Пользователем.</p><p> 3.3.4. Передача предусмотрена российским или иным применимым законодательством в рамках установленной законодательством процедуры.</p><p> 3.3.5. В случае продажи Сайта к приобретателю переходят все обязательства по соблюдению условий настоящей Политики применительно к полученной им персональной информации.</p><p> 3.4. Обработка персональных данных Пользователя осуществляется без ограничения срока любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств. Обработка персональных данных Пользователей осуществляется в соответствии с Федеральным законом от 27.07.2006 N 152-ФЗ "О персональных данных".</p><p> 3.5. При утрате или разглашении персональных данных Администрация Сайта информирует Пользователя об утрате или разглашении персональных данных.</p><p> 3.6. Администрация Сайта принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.</p><p> 3.7. Администрация Сайта совместно с Пользователем принимает все необходимые меры по предотвращению убытков или иных отрицательных последствий, вызванных утратой или разглашением персональных данных Пользователя.</p><p> <b>4.&nbsp;&nbsp; Контроль персональной информации</b></p><p> Для контроля персональной информации в Сайте реализованы механизмы верификации личных данных. Ответственность за любые последствия предоставления недостоверных данных лежит на Пользователе. В случае если некоторые данные изменились, Пользователь обязан исправить данные в системе самостоятельно, либо связаться со службой поддержки для внесения корректировок.</p><p> <b>5.&nbsp;&nbsp; Коммуникация</b></p><p> При регистрации Пользователь получает сообщение, подтверждающее его успешную регистрацию. Пользователь имеет право в любой момент прекратить получение информационных сообщений, воспользовавшись соответствующим сервисом в Сайте.</p><p> <b>6.&nbsp;&nbsp; Ссылки</b></p><p> На сайте могут содержаться ссылки на другие сайты. Сайт не несет ответственности за содержание, качество и политику безопасности этих сайтов. Данное заявление о конфиденциальности относится только к информации, размещенной непосредственно на Сайте.</p><p> <b>7.&nbsp;&nbsp; Безопасность</b></p><p> Сайт обеспечивает безопасность учетной записи Пользователя от несанкционированного доступа.</p><p> <b>8.&nbsp;&nbsp; Уведомления об изменениях</b></p><p></p><p> Сайт оставляет за собой право вносить изменения в Политику конфиденциальности без дополнительных уведомлений. Нововведения вступают в силу с момента их опубликования. Пользователи могут отслеживать изменения в Политике конфиденциальности самостоятельно.</p></div>');
	  
	  });
	  
	// $('a.ajax-btn').fancybox({
	// 	'margin': [40,0,30,0],
	// 	'padding': 0,
	// 	'overlayOpacity': 0.87,
	// 	'overlayColor': '#d7d8d8',
    // 	openEffect	: 'elastic',
    // 	closeEffect	: 'elastic',
	// 	autoSize	: true,
	// 	autoCenter : true,
	// 	iframe : {
	// 		preload : false
	// 	}
	// 	// type: 'ajax',
	// 	// 'helpers':  {
	// 	// 	'overlay' : {
	// 	// 		'locked' : false
	// 	// 	}
	// 	// }
	// });
	
	// $(".fancybox").fancybox({
    // 	openEffect	: 'elastic',
    // 	closeEffect	: 'elastic',
	// 	maxWidth: 1140,
	// 	autoSize	: true,
	// 	autoCenter : true,
	// 	padding: 0,
	// 	margin: [40,20,20,20],
	// 	helpers:{
	// 			overlay:{
	// 						locked: false
	// 					}
	// 			}
	// 	}); 
		
	// $(".fancybox-thumb").fancybox({
	// 	margin: [40,20,20,20],
	// 	prevEffect	: 'none',
	// 	nextEffect	: 'none',
	// 	helpers	: {
	// 		title	: {
	// 			type: 'outside'
	// 		},
	// 		thumbs	: {
	// 			width	: 50,
	// 			height	: 50
	// 		}
	// 	}
	// });
	
});