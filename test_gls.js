
function winner(player1, player2){
    let point1 = 0
    let point2 = 0

    if (player1.notes.length == player2.notes.length){
        for (let i = 0; i < player1.notes.length; i++) {            
            if (typeof(player1.notes[i]) == 'number' && typeof(player2.notes[i]) == 'number'){
                if (player1.notes[i] < player2.notes[i]) {
                    point2 = point2 + 1
                }
                else if (player1.notes[i] > player2.notes[i]) {
                    point1 = point1 + 1
                }
            } else {
                console.log("Erreur : veuillez entrer des notes valides.")
                return 0
            }
        }
    
    
        console.log(player1.nom + ": " + point1 + " points")
        console.log(player2.nom + ": " + point2 + " points")
        
        if (point1 < point2){
            console.log("Le gagnant du concours est " + player2.nom)
        }
        else if (point1 > point2){
            console.log("Le gagnant du concours est" + player1.nom)
        } else{
            console.log("Match nul")
        }
    } else {
        console.log("Les joueurs n'ont pas le même nombre de points.")
    }
}
