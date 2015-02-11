$( document ).ready(function() {
	populateSection1();
	populateSection3();
	populateSection6();
	populateFooter();
	populateContactUs();
	$('#saveFormSection1').on('click', updateSection1Content);		
	$('#saveFormSection3').on('click', updateSection3Content);	
	$('#saveFormSection6').on('click', updateSection6Content);
	$('#saveFormContactUs').on('click', updateContactUsContent);
	
});

function populateSection1(){
	
}

function updateSection1Content(event){
	event.preventDefault();
	var content = { 
		first_slide_title : $('#section-first-slide-title').val(),
		first_slide_tag_line : $('#section-first-slide-subtext').val(),
		second_slide_title : $('#section-second-slide-title').val(),
		second_slide_tag_line : $('#section-second-slide-subtext').val(),
		third_slide_title : $('#section-third-slide-title').val(),
		third_slide_tag_line : $('#section-third-slide-subtext').val()
	}

	console.log(JSON.stringify(content));

}

function populateSection3(){
	var getUrl = '/cms/get/section3';
	$.getJSON(getUrl, function (data){
		$('#section-title').text(data[0].title);
		$('#section-title-tag-line').text(data[0].title_tag_line);
		$('#section-header').text(data[0].header);
		$('#section-first-sub-title').text(data[0].first_sub_title);
		$('#section-first-sub-content').text(data[0].first_sub_content);
		$('#section-second-sub-title').text(data[0].second_sub_title);
		$('#section-second-sub-content').text(data[0].second_sub_content);	
	});
}

function updateSection3Content (event) {	
	event.preventDefault();
	var content = {
		title: $('#section-title').val(),
		title_tag_line: $('#section-title-tag-line').val(),
		header: $('#section-header').val(),
		first_sub_title: $('#section-first-sub-title').val(),
		first_sub_content: $('#section-first-sub-content').val(),
		second_sub_title: $('#section-second-sub-title').val(),
		second_sub_content: $('#section-second-sub-content').val()
	}
	$.ajax({type: 'PUT',data: content,url: '/cms/set/section3',dataType: 'JSON'}).done(function( response ){
			if (response.msg === ''){ 
				populateSection3();
				alert("scuccessfully updated !!");
			}
			else { alert('Error: ' + response.msg); }
	});
}

function populateSection6(){
	var getUrl = '/cms/get/section6';
	$.getJSON(getUrl, function (data){
		$('#section-6-title').text(data[0].title);
		$('#section-6-title-tag-line').text(data[0].title_tag_line);
		$('#section-6-p1').text(data[0].first_paragraph);
		$('#section-6-p2').text(data[0].second_paragraph);
		$('#section-6-p3').text(data[0].third_paragraph);
		$('#section-6-p4').text(data[0].fourth_paragraph);		
	});
}

function updateSection6Content (event) {	
	event.preventDefault();
	var content = {
		title: $('#section-6-title').val(),
		title_tag_line: $('#section-6-title-tag-line').val(),
		first_paragraph: $('#section-6-p1').val(),
		second_paragraph: $('#section-6-p2').val(),
		third_paragraph: $('#section-6-p3').val(),
		fourth_paragraph: $('#section-6-p4').val()		
	}
	console.log(JSON.stringify(content));

	$.ajax({type: 'PUT',data: content,url: '/cms/set/section6',dataType: 'JSON'}).done(function( response ){
			if (response.msg === ''){ 
				populateSection6();
				alert("scuccessfully updated !!");
			}
			else { alert('Error: ' + response.msg); }
	});
}

function populateContactUs(){
	var getUrl = '/cms/get/contactUs';
	$.getJSON(getUrl, function (data){		
		$('#where').text(data[0].where);		
		$('#email').val(data[0].email);
		$('#phone').val(data[0].phone);
		$('#fax').val(data[0].fax);
	});
}

function updateContactUsContent (event) {	
	event.preventDefault();
	var content = {
		where: $('#where').val(),
		email: $('#email').val(),
		phone: $('#phone').val(),
		fax: $('#fax').val()				
	}
	console.log(JSON.stringify(content));

	$.ajax({type: 'PUT',data: content,url: '/cms/set/contactUs',dataType: 'JSON'}).done(function( response ){
			if (response.msg === ''){ 
				populateContactUs();
				alert("scuccessfully updated !!");
			}
			else { alert('Error: ' + response.msg); }
	});
}

function populateFooter(){
	var getUrl = '/cms/get/footer';
	$.getJSON(getUrl, function (data){		
		$('#company-name').val(data[0].company_name);
				
	});
}
