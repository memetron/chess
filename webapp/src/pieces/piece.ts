export default abstract class Piece {
    player: number;
    style: { [key: string]: string };

    constructor(player: number, iconUrl: string) {
        this.player = player;
        this.style = {backgroundImage: "url('" + iconUrl + "')"};
    }

    abstract isValidMove(squares: Piece[][], src: number[], dest: number[]): boolean;
}