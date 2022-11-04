export default abstract class Piece {
    player: number;
    style: { [key: string]: string };
    firstMove: boolean = true;
    coveredSquares: number[][] = [];
    isKing: boolean = false;

    constructor(player: number, iconUrl: string) {
        this.player = player;
        this.style = {backgroundImage: "url('" + iconUrl + "')"};
    }

    addHighlight() {
        this.style = {...this.style, backgroundColor: "RGB(111,143,114)"}
    }

    removeHighlight() {
        this.style = {...this.style, backgroundColor: ""}
    }

    generateCoveredSquares(squares: Piece[][], i: number, j: number) {
        this.coveredSquares = this.listValidMoves(squares, i, j, true);
    }

    // returns true if move is valid
    abstract listValidMoves(squares: Piece[][], i: number, j: number, ignoreKing: boolean): number[][];
}