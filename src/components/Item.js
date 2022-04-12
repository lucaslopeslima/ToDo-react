class Item{

    static lastId = 0

    constructor(text){
        
        this.id = Item.lastId++
        /* this.id = Date.now().toString('16') */
        this.text = text
        this.done = false
    }
}

export default Item