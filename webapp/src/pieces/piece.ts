export default class Piece {
    player: number;
    style: {};
    constructor(player: number, iconUrl: string) {
        this.player = player;
        this.style = {backgroundImage: "url('"+iconUrl+"')"};
    }
}