01 : Table de multiplication
Demande un nombre à l'utilisateur.
Avec une boucle for, affiche sa table de multiplication de 1 à 10.
Exemple avec 7 :
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70

02 : Afficher les nombres de 1 à N
Demande un nombre N.
À l'aide d'une boucle for, affiche tous les nombres de 1 jusqu'à N.
Exemple :
N = 5

1
2
3
4
5

03 : Compter de 0 à 100
Écris un programme qui affiche les nombres de 0 à 100.
Mais :
Pour les multiples de 3, affiche "Fizz".
Pour les multiples de 5, affiche "Buzz".
Pour les multiples de 3 et 5, affiche "FizzBuzz".
Pour les autres nombres, affiche le nombre.
Exemple :

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
...

04 : Somme des nombres pairs
Demande un nombre N.
À l'aide d'une boucle, parcours les nombres de 1 à N.
Additionne uniquement les nombres pairs.
À la fin, affiche la somme.
Exemple :

N = 10

2 + 4 + 6 + 8 + 10 = 30

05 : Deviner un nombre
Le programme contient un nombre secret :

let nombreSecret = 7;

Demande à l'utilisateur de deviner le nombre.
Tant que la réponse est incorrecte, affiche :
"Trop petit" si le nombre proposé est inférieur.
"Trop grand" s'il est supérieur.
Lorsque l'utilisateur trouve le bon nombre, affiche :

Bravo ! Tu as trouvé.

06 : Jeu du mot de passe
Crée un mot de passe secret :

let motDePasse = "javascript";

Demande à l'utilisateur de saisir le mot de passe.
L'utilisateur a 3 tentatives maximum.
Si le mot de passe est correct → affiche "Accès autorisé".
Si le mot de passe est incorrect → affiche "Mot de passe incorrect".
Après 3 mauvaises tentatives → affiche "Accès bloqué".

07 : Menu d'une librairie
Crée un programme JavaScript qui simule le menu d'une petite librairie.
Le programme doit afficher le menu suivant :

===== LIBRAIRIE =====

1 - Voir les livres
2 - Acheter un livre
3 - Voir mon panier
q - Quitter

Votre choix :

Le programme doit continuer à afficher le menu tant que l'utilisateur ne choisit pas q.
Utilise une boucle while.
Comportement attendu
Si l'utilisateur choisit :
1 → afficher "Voici les livres disponibles."
2 → afficher "Quel livre voulez-vous acheter ?"
3 → afficher "Voici votre panier."
q → afficher "Merci et à bientôt !" puis arrêter le programme.
Autre chose → afficher "Option invalide."
Exemple

===== LIBRAIRIE =====

1 - Voir les livres
2 - Acheter un livre
3 - Voir mon panier
q - Quitter

Votre choix : 1

Voici les livres disponibles.

===== LIBRAIRIE =====

1 - Voir les livres
2 - Acheter un livre
3 - Voir mon panier
q - Quitter

Votre choix : 2

Quel livre voulez-vous acheter ?

===== LIBRAIRIE =====

1 - Voir les livres
2 - Acheter un livre
3 - Voir mon panier
q - Quitter

Votre choix : q

Merci et à bientôt !

Contraintes
Utilise :
while
if / else if / else
prompt()
console.log()
des variables
