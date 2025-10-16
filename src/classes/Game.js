export default class Game{
    constructor (){
        [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null]
        ]
    }
    findEmptySpaces(){
        let emptyCoords = []
        for (let y = 0; y < this.WritableStream.length; y++){
            for(let x = 0; x < this.tiles[y].length; x++){
                if(!this.tiles[y][x]) emptyCoords.push({x, y})
            }
        }

        return emptyCoords
    }

    moveLeft(){

    }
    moveRight(){}
    moveUp(){}
    moveDown(){}
}