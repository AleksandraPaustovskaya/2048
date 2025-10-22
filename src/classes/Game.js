import Tile from "./Tile.js"

export default class Game{
    
    constructor (){
        this.tileSize = 100
        this.tileCount = 4
        //пока не нужны

        this.score = 0
        this.bestScore = 0

        this.tiles = [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null]
        ]

    }

    generateStyleSheet(){

    }
    newGame(){
        //
        this.tiles = [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null]
        ]
        this.score = 0
        this.swapTile()
        this.swapTile()
    }
    swapTile(x, y, v){
        //let v = (Math.round(Math.random()) + 1) * 2

        if(!x || !y){
            if (Math.random() > 0.75) v = 4
            else v = 2
            let emptyCoords = this.findEmptySpaces()
            let emptyPos = emptyCoords[Math.floor(Math.random() * emptyCoords.length)]
            x = emptyPos.x
            y = emptyPos.y


        }

        this.tiles[y][x] = new Tile(v)
    }

    findEmptySpaces(){
        //
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