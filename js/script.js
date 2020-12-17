// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
// Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova

// chiedo il cognome
var chiediCognome = prompt('Inserisci qui il tuo cognome');
console.log(chiediCognome);

// rendo la prima lettera maiuscola
var cognomeMaiu = chiediCognome.charAt(0).toUpperCase();
var cognomeMinu = chiediCognome.slice(1).toLowerCase();
var cognomeCompleto = cognomeMaiu + cognomeMinu;

// creo array
var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log(cognomi);

// inserico il cognome del prompt nell'array
cognomi.push(cognomeCompleto);
console.log(cognomi);
