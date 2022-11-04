export default abstract class Piece {
    player: number;
    style: { [key: string]: string };
    firstMove: boolean = true;
    constructor(player: number, iconUrl: string) {
        this.player = player;
        this.style = {backgroundImage: "url('" + iconUrl + "')"};
    }
    addHighlight() {
        this.style  = {...this.style, backgroundColor: "RGB(111,143,114)"}
    }
    removeHighlight() {
        this.style  = {...this.style, backgroundColor: ""}
    }
    // returns true if move is valid
    abstract listValidMoves(squares: Piece[][], i: number, j:number): number[][];
}