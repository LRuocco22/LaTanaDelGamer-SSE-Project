/**
 * 
 */
function valida() {

	var username = document.utente.username;
	var passwd = document.utente.passwd;
	var email = document.utente.e_mail;
	var nome = document.utente.nome;
	var cognome = document.utente.cognome;
	var data = document.utente.datadinascita;
	var via = document.utente.via;
	var citta = document.utente.citta;
	var numero = document.utente.numero;
	var provincia = document.utente.provincia;
	var cap = document.utente.cap;
	
	var intero = /^[+]?[0-9]+$/;
	var datas = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;	
	var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var lettere = /^[A-Za-z ]+$/;
	
	if (username.value.length < 4 || username.value.length > 12) {
		alert("Il campo username deve contenere tra i 5 e i 12 caratteri");
		username.focus();
		return false;
	}
	
	if (!passwd.value.match(password)) {
		alert("Il campo password deve contenere almeno 1 numero, 1 lettera maiuscola e 1 minuscola");
		passwd.focus();
		return false;
	}
	
	if (!email.value.match(mailformat)) {
		alert("Formato email sbagliato");
		email.focus();
		return false;
	}
	
	if (nome.value.length < 3 || nome.value.length > 50 || !nome.value.match(lettere)) {
		alert("Inserisci un nome corretto");
		nome.focus();
		return false;
	}
	
	if (cognome.value.length < 3 || cognome.value.length > 50 || !cognome.value.match(lettere)) {
		alert("Inserisci un cognome corretto");
		cognome.focus();
		return false;
	}	
	
	if (!data.value.match(datas)) {
		alert("Formato corretto Data Di Nascita: AAAA-MM-GG");
		data.focus();
		return false;
	}	
	
	if (via.value.length < 2 || via.value.length > 50) {
		alert("Inserisci una via corretta");
		via.focus();
		return false;
	}
	
	if (!numero.value.match(intero)) {
		alert("Inserire solo numeri positivi");
		numero.focus();
		return false;
	}
	
	if (numero.value.length < 1) {
		alert("Inserisci un numero valido");
		numero.focus();
		return false;
	}	
	
	if (cap.value.length < 5) {
		alert("Inserire un cap formato da 5 cifre");
		cap.focus();
		return false;
	}
		
	if (!cap.value.match(intero)) {
		alert("Inserire un cap formato da 5 cifre");
		cap.focus();
		return false;
	}
		
	if (citta.value.length < 2 || citta.value.length > 50) {
		alert("Inserire una città corretta");
		citta.focus();
		return false;
	}
	
	if (provincia.value.length < 2 || provincia.value.length > 50) {
		alert("Inserire una provincia valida");
		provincia.focus();
		return false;
	}
	
}

function valida3() {

	var username = document.utente.username;
	var passwd = document.utente.passwd;
	var email = document.utente.e_mail;
	var nome = document.utente.nome;
	var cognome = document.utente.cognome;
	var data = document.utente.datadinascita;
	var via = document.utente.via;
	var citta = document.utente.citta;
	var numero = document.utente.numero;
	var provincia = document.utente.provincia;
	var cap = document.utente.cap;
	
	var intero = /^[+]?[0-9]+$/;
	var datas = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;	
	var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var lettere = /^[A-Za-z ]+$/;
	
	
	if (nome.value.length < 3 || nome.value.length > 50 || !nome.value.match(lettere)) {
		alert("Inserisci un nome corretto");
		nome.focus();
		return false;
	}
	
	if (cognome.value.length < 3 || cognome.value.length > 50 || !cognome.value.match(lettere)) {
		alert("Inserisci un cognome corretto");
		cognome.focus();
		return false;
	}	
	
	if (!email.value.match(mailformat)) {
		alert("Formato email sbagliato");
		email.focus();
		return false;
	}
	
	if (!passwd.value.match(password)) {
		alert("Il campo password deve contenere almeno 1 numero, 1 lettera maiuscola e 1 minuscola");
		passwd.focus();
		return false;
	}
	
	
	if (username.value.length < 4 || username.value.length > 12) {
		alert("Il campo username deve contenere tra i 5 e i 12 caratteri");
		username.focus();
		return false;
	}
	
	if (!data.value.match(datas)) {
		alert("Formato corretto Data Di Nascita: AAAA-MM-GG");
		data.focus();
		return false;
	}	
	
	if (via.value.length < 2 || via.value.length > 50) {
		alert("Inserisci una via corretta");
		via.focus();
		return false;
	}
	
	if (!numero.value.match(intero)) {
		alert("Inserire solo numeri positivi");
		numero.focus();
		return false;
	}
	
	if (numero.value.length < 1) {
		alert("Inserisci un numero valido");
		numero.focus();
		return false;
	}	
	
	if (cap.value.length < 5) {
		alert("Inserire un cap formato da 5 cifre");
		cap.focus();
		return false;
	}
		
	if (!cap.value.match(intero)) {
		alert("Inserire un cap formato da 5 cifre");
		cap.focus();
		return false;
	}
		
	if (citta.value.length < 2 || citta.value.length > 50) {
		alert("Inserire una città corretta");
		citta.focus();
		return false;
	}
	
	if (provincia.value.length < 2 || provincia.value.length > 50) {
		alert("Inserire una provincia valida");
		provincia.focus();
		return false;
	}
	
}

function valida1() {

	var username = document.utente1.username;
	var email = document.utente1.e_mail;
	var nome = document.utente1.nome;
	var cognome = document.utente1.cognome;
	var data = document.utente1.datadinascita;
	var via = document.utente1.via;
	var citta = document.utente1.citta;
	var numero = document.utente1.numero;
	var provincia = document.utente1.provincia;
	var cap = document.utente1.cap;
	
	var intero = /^[+]?[0-9]+$/;
	var datas = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;	
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var lettere = /^[A-Za-z ]+$/;
	
	if (username.value.length < 4 || username.value.length > 12) {
		alert("Il campo username deve contenere tra i 5 e i 12 caratteri");
		username.focus();
		return false;
	}
	
	if (!email.value.match(mailformat)) {
		alert("Formato email sbagliato");
		email.focus();
		return false;
	}
	
	if (nome.value.length < 3 || nome.value.length > 50 || !nome.value.match(lettere)) {
		alert("Inserisci un nome corretto");
		nome.focus();
		return false;
	}
	
	if (cognome.value.length < 3 || cognome.value.length > 50 || !cognome.value.match(lettere)) {
		alert("Inserisci un cognome corretto");
		cognome.focus();
		return false;
	}	
	
	if (!data.value.match(datas)) {
		alert("Formato corretto Data Di Nascita: AAAA-MM-GG");
		data.focus();
		return false;
	}	
		

	if (via.value.length < 2 || via.value.length > 50) {
		alert("Inserisci una via corretta");
		via.focus();
		return false;
	}
	
	if (!numero.value.match(intero)) {
		alert("Inserire solo numeri positivi");
		numero.focus();
		return false;
	}
	
	if (numero.value.length < 1) {
		alert("Inserisci un numero valido");
		numero.focus();
		return false;
	}
	
	if (cap.value.length < 5) {
		alert("Inserire un cap formato da 5 cifre");
		cap.focus();
		return false;
	}
		
	if (!cap.value.match(intero)) {
		alert("Inserire un cap formato da 5 cifre");
		cap.focus();
		return false;
	}	
	
	if (citta.value.length < 2 || citta.value.length > 50) {
		alert("Inserire una città corretta");
		citta.focus();
		return false;
	}
	
	if (provincia.value.length < 2 || provincia.value.length > 50) {
		alert("Inserire una provincia valida");
		provincia.focus();
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

function checkUser(input) {
	
	// Reperiamo il valore del campo
	var temp = input.value;
	var check = temp.toLowerCase();
	var errorContainerId = "errorSpace";

	if (input.value.length <= 4 && input.value.length >= 1) {
		showValidationMessage(errorContainerId, "Inserire almeno 5 caratteri", "error");
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
    
	// Un utente non può registrarsi con l'username admin in quanto è username speciale
	if (check.match(/admin/i)) {
		alert("Username riservato! Inserire un altro username per continuare");
		input.value = "";
		clearValidationMessage(errorContainerId);
		return false;
	}

	// Vengono reperiti tutti gli username dal database
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState === 4 && xhttp.status === 200) {	
			var JSONobj = JSON.parse(xhttp.responseText);

			var flag = JSONobj.some(function (item) {
				return item.username === check;
			});

			// Caso in cui l'username è presente
			if (flag) {
				showValidationMessage(
					errorContainerId,
					"Utente già presente! Inserire un altro nome",
					"error"
				);
			} else {
				// Caso in cui l'username inserito è univoco
				showValidationMessage(
					errorContainerId,
					"Nome valido!",
					"success"
				);
			}
		}
	};

	xhttp.open("GET", "/LaTanaDelGamer/gestione?valore=Utenti", true);
	xhttp.send();
}

function checkEmail(input) {
	
	// Reperiamo il valore del campo
	var temp = input.value;
	var check = temp.toLowerCase();
	var errorContainerId = "errorSpace1";

	// Vengono reperite tutte le email dal database
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		
		if (xhttp.readyState === 4 && xhttp.status === 200) {	
			var JSONobj = JSON.parse(xhttp.responseText);

			// Se non è stato inserito nulla la funzione non viene eseguita
			if (check === "") {
				clearValidationMessage(errorContainerId);
				return;
			}
			
			var flag = JSONobj.some(function (item) {
				return item.e_mail === check;
			});

			// Caso in cui la mail è presente
			if (flag) {
				showValidationMessage(
					errorContainerId,
					"E-Mail già presente!",
					"error"
				);
			} else {
				// Caso in cui la mail non è presente: rimuovo eventuale messaggio
				clearValidationMessage(errorContainerId);
			}
		}
	};

	xhttp.open("GET", "/LaTanaDelGamer/gestione?valore=Utenti", true);
	xhttp.send();
}
