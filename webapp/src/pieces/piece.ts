export default class Piece {
    player: number;
    iconURL: string;
    constructor(player: number, iconURL: string) {
        this.player = player;
        this.iconURL = iconURL;
    }
}