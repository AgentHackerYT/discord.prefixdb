const db1 = require('quick.db')
const db = new db1.table('discord_prefixdb')
class PrefixDB{
    constructor(options){
        this.message = options.message
        if(!options.message) throw new Error('Message String Missing')
    }
    get(defaultprefix){
        if(!defaultprefix) throw new Error('DefaultPrefix String Missing')
        return db.get(`prefix_${this.message.guild.id}`)

    }
    set(prefix){
        if(!prefix) throw new Error('Prefix String Missing')
        db.set(`prefix_${this.message.guild.id}`)
    }
    all(){
        return db.all()
    }
    delete(){
        db.delete(`prefix_${this.message.guild.id}`)
    }
}
module.exports.PrefixDB = PrefixDB
