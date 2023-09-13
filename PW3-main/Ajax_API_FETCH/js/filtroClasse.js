export default function filtroClasse(event){
    var classe = event.target.id;
    console.log(event.target.id)
    console.log(event.target)
    var cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'none';
        if(card.id.split(' ')[1] == classe){
            card.style.display = 'block';
        }
    });   
} 