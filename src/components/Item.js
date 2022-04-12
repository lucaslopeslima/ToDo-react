class Item{

    static lastId = 0

    constructor(text){
        
        /* this.id = Item.lastId++ */
        this.id = Date.now().toString('16')
        /* this.id = Date.now().toString('16') + Math.random().toString('16').substring(2) */
        this.text = text
        this.done = false
    }
}

export default Item