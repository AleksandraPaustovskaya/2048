import Game from "./classes/Game";

function render(game){
    for (let y = 0; y < game.tiles.length; y++){
        for(let x = 0;x <game.tiles[y].length; x++){
            if (!game.tiles[y][x]) continue
            // let div = '
            //      <div class = "tile position">2</div>
            // '

            const tile = game.tiles[y][X]
            let div = document.createElement("div")
            div.innerHTML = tile.value

            gameTiles.appendChild(tile)

        }
    }
}


export default function start(){

    const gameTiles = document.querySelector(".game__tiles");
    const newGame = document.querySelector(".newGame");
    const best = document.querySelector(".best");
    const current = document.querySelector(".current");

    let game = new Game()


    newGame.addEventListener("click", ()=>{
    game.newGame()
    render(game)
    })

}



            // div.setAttribute("style", `top: ${y * 100 + y * 10}px`)
