jQuery(document).ready(function() {
	// $('.calc_step label').click(function(){
	// 	$('#cnext_btn').addClass('next_active');
	
	// });
	// console.log(444444444455555555555554);
	// $('#cnext_btn').click(function(){
	// 	console.log(10);
	// 	$('.actstep').removeClass('actstep').delay(50).next('.calc_step').addClass('actstep');
	// 	c_btns();
	// });
	
	// $('#cprev_btn').click(function(){
	// 	$('.actstep').removeClass('actstep').delay(50).prev('.calc_step').addClass('actstep');
	// 	c_btns();
	// });
	
	
	// function c_btns(){
	// 	if($('.actstep').hasClass('last_step')){$('#cnext_btn').hide();}
	// 	else{$('#cnext_btn').show().removeClass('next_active');}
	// 	if($('.actstep').attr('id')=='cstep1'){$('#cprev_btn').hide();}
	// 	else{$('#cprev_btn').show();}
	// 	$('#actstepnum').text($('.actstep').attr('id').substr(5,1));
	// }

	/*Форматирование телефона в полях форм*/

	$('.phone-input input, input[type="tel"], .inputphone').each(function(){
	$(this)
	.focusin(function(){$(this).attr('placeholder','+7-___-___-__-__');})
	.focusout(function(){$(this).attr('placeholder','Ваш телефон');})
	.mask(
		'+0-000-000-00-00',
		{
			clearIfNotMatch: true,
			onKeyPress: function(cep, event, currentField){
				var phn = cep.replace(/\D+/g,"");
				var $submit = currentField.parents('form').find('[type="submit"]');
				if(cep.length>1 && cep.substr(0,2)!='+7'){
					if(cep.substr(0,2)=='+8'){currentField.val('+7'+cep.substr(2));}
					else{currentField.val('+7'+cep.substr(1));}
				}
				if(phn.length!=11){currentField.removeClass('good-input'); $submit.attr({'title':'Заполните сначала поля формы','disabled':'disabled'});}
				if(phn.length==11){currentField.addClass('good-input'); $submit.attr('title','Отправить').removeAttr('disabled');
					if(currentField.parents('form').is('[name="CALCULATOR_1"]')){console.log('Калькулятор!!!!');

					}
				}
				//console.log(phn);
			}
		}
	);
	});
	
})
	/*****</Калькулятор/>******/
