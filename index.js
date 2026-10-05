console.log('01. TABLE DE MULTIPLICATION')

let N = parseInt(prompt("Entrez le nombre à multiplier: "));

for(i = 1; i <= 10; i++){
    let produit = N*i;
    console.log(N, 'x', i, '=', produit)
}

console.log('02. AFFICHER LES NOMBRES DE 1 À N')

N = parseInt(prompt("Jusqu’à combien voulez-vous que je compte ? : "));

console.log("N = ", N)

for(i = 1; i <= N; i++){
    console.log(i)
}

console.log("03. COMPTER DE 0 À 100")

for(i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }else if(i % 5 == 0){
        console.log("Buzz")
    }else if(i % 3 == 0){
        console.log("Fizz")
    }else {
        console.log(i)
    }

}

console.log("04. SOMME DES NOMBRES PAIRS")

N = parseInt(prompt("Entrez un nombre : "))
let somme_pairs = 0;

for(i = 1; i <= N; i++){
    if(i % 2 == 0){
        somme_pairs = somme_pairs + i;
    }

}

console.log("La somme des nombres pairs est égal à :", somme_pairs)

console.log("05. DEVINER UN NOMBRE")

let nombreSecret = 7;
let reponse = parseInt(prompt("Devinez le nombre :"))


    while (reponse < nombreSecret) {
        console.log("Trop petit")
        reponse = parseInt(prompt("Trop petit! Devinez le nombre :"))
    }

    while (reponse > nombreSecret) {
        console.log("Trop grand")
        reponse = parseInt(prompt("Trop grand! Devinez le nombre :"))
    }

    if(reponse == nombreSecret){
    console.log("Bravo ! Tu as trouvé.")
}

console.log("06. JEU DU MOT DE PASSE")

let passeword_typed = prompt("Entrez le mot de passe :")
const motDePasse = "javascript";

for(i = 1; i <= 3; i++){

    if(passeword_typed == motDePasse){
        console.log("Accès autorisé.")
        break
    }else{
        if(i == 3){
            console.log("Accès bloqué")
            break
        }else{
        console.log("Mot de passe incorrect")
        passeword_typed = prompt("Faites un autre essaie")
        }
    }

}

console.log("07. MENU D’UNE LIBRAIRIE")

let choix;
let menu = `
===== LIBRAIRIE =====


1 - Voir les livres
2 - Acheter un livre
3 - Voir mon panier
q - Quitter
`;

while (choix != "q") {
    console.log(menu);
    choix = prompt("Entrez votre choix : ");

    if(choix === "1") {
        console.log("1. Voici les livres disponibles.")
    }else if(choix === "2") {
        console.log("2. Quel livre voulez-vous acheter ?");
    }else if(choix === "3") {
        console.log("3. Voici votre panier.");
    }else if(choix === "q") {
        console.log("Merci et à bientôt !");
    }else {
        console.log("Option invalide.");
        choix = prompt("Cette option est invalide. Veuillez n’écrire que les options disponibles.")
    }
}


 


