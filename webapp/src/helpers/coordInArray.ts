export default function coordInArray(moves: number[][], i: number, j: number) {
    for (let x = 0; x < moves.length; x++) {
        if (moves[x][0] === i && moves[x][1] === j) {
            return true;
        }
    }
    return false;
}