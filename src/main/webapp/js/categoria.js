/**
 * 
 */

function valida() {
	
	var nome = document.categoria.nome;
	var didascalia = document.categoria.didascalia;

	if (nome.value.length < 4) {
		alert("Il campo nome deve contenere almeno 4 caratteri!");
		nome.focus();
		return false;
	}
	
	if (didascalia.value.length === 0 ||
	    didascalia.value.length >= 500 ||
	    didascalia.value.length < 10) {
		alert("Il campo didascalia deve contenere tra i " + 10 + " e i " + 500 + " caratteri!");
		didascalia.focus();
		return false;
	}
}

/* Funzioni di utilità per i messaggi di validazione */

function showValidationMessage(containerId, message, type) {
	var container = document.getElementById(containerId);
	if (!container) {
		return;
	}

	var p = container.firstElementChild;
	if (!p) {
		p = document.createElement("p");
		container.appendChild(p);
	}

	p.textContent = message;
	p.className = "";

	if (type === "error") {
		p.classList.add("validation-error");
	} else if (type === "success") {
		p.classList.add("validation-success");
	}
}

function clearValidationMessage(containerId) {
	var container = document.getElementById(containerId);
	if (!container || !container.firstElementChild) {
		return;
	}
	container.removeChild(container.firstElementChild);
}

function checkCategories(input) {
	
	// Reperiamo il valore del campo
	let temp = input.value;
	let check = temp.toLowerCase();
	let errorContainerId = "errorSpace";
    
	if (input.value.length <= 4 && input.value.length >= 1) {
		showValidationMessage(errorContainerId, "Inserire almeno 4 caratteri", "error");
		return false;
	} else if (input.value.length > 12) {
		showValidationMessage(errorContainerId, "Inserire massimo 12 caratteri", "error");
		return false;
	}

	// Se non è stato inserito nulla la funzione non viene eseguita
	if (check === "") {
		clearValidationMessage(errorContainerId);
		return false;
	}
    
	// Vengono reperite tutte le categorie dal database
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
    	
		if (xhttp.readyState === 4 && xhttp.status === 200) {	
			var JSONobj = JSON.parse(xhttp.responseText);

			// Cerchiamo se esiste una categoria uguale a quella inserita
			var flag = JSONobj.some(function (item) {
				return item.nome.toLowerCase() === check;
			});

			// Caso in cui la categoria è presente
			if (flag) {
				showValidationMessage(
					errorContainerId,
					"Categoria già presente!",
					"error"
				);
			}
			// Caso in cui la categoria inserita dall'utente è univoca
			else {
				showValidationMessage(
					errorContainerId,
					"Nome Categoria valido!",
					"success"
				);
			}
		}
	};

	xhttp.open("GET", "/LaTanaDelGamer/gestione?valore=Categoria", true);
	xhttp.send();
}
