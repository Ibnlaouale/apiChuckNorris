const button = document.querySelector('button');
const inputSelect = document.querySelector('#inputSelect');
const citation = document.querySelector('p');
const titre = document.querySelector('h2');



let loadDatas = async () => {
    let categorie = inputSelect.value;
    console.log(categorie);
    let data = '';
    let donnees = '';
    switch (categorie) {
        case 'Animal':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=animal`);
           donnees = await (data).json();
            console.log(donnees);
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'Career':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=career`);
            donnees = await (data).json();
            console.log(donnees);
            citation.textContent = donnees.value;
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'Celebrity':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=celebrity`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;

        case 'Dev':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=dev`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'Explicit':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=explicit`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'Fashion':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=fashion`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'Food':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=food`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'History':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=history`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'Money':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=money`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'Movie':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=movie`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'Music':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=music`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'Political':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=political`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            inputSelect.value = '';
            titre.textContent =`catégorie: ${categorie}`;
            break;
        case 'Religion':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=religion`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'Science':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=science`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'Sport':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=sport`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent = `catégirie: ${categorie}`;
            inputSelect.value = '';
            break;
        case 'Travel':
            data = await fetch(`https://api.chucknorris.io/jokes/random?category=travel`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`catégorie: ${categorie}`;
            inputSelect.value = '';
            break;
        default:
            data = await fetch(`https://api.chucknorris.io/jokes/random`);
            donnees = await (data).json();
            citation.textContent = donnees.value;
            titre.textContent =`Aucune categorie`;
            inputSelect.value = '';
            break;
    }
}

button.addEventListener('click', loadDatas)