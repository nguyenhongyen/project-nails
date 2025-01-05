export function handleViewPassWord() {
	const btnViewPass = document.querySelector('.view-pass');
	btnViewPass.addEventListener("click", function() {
        let elm = $(this);
		let elm_id = btnViewPass.getAttribute('data-id');
		let inputId = document.getElementById(elm_id);

		const hasClassShow = btnViewPass.classList.contains('is-show');
		if (hasClassShow) {
			btnViewPass.innerHTML = '<i class="fas fa-eye">';
			btnViewPass.classList.remove('is-show');
			inputId.setAttribute('type', 'password');
		} else {
			btnViewPass.innerHTML = '<i class="fas fa-eye-slash">';
			btnViewPass.classList.add('is-show');
			inputId.setAttribute('type', 'text');
		}

    })
    // $(document).on('click', '.view-pass', function () {
    //     let elm = $(this), elm_id = elm.attr('data-id');
    //     if (elm.hasClass('is-show')) {
    //         elm.html('<i class="fas fa-eye">');
    //         elm.removeClass('is-show');
    //         $('#' + elm_id).attr('type', 'password');
    //     } else {
    //         elm.html('<i class="fas fa-eye-slash">');
    //         elm.addClass('is-show');
    //         $('#' + elm_id).attr('type', 'text');
    //     }
    // });
}


handleViewPassWord();


