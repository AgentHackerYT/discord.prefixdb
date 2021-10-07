# Discord.PrefixDB
- Made Using QuickDB
- Simple To Use
- Better Then Before
# How To Use?
```js
const { PrefixDB } = require("discord.prefixdb")
const Discord = require("discord.js")
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS ,Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_MEMBERS,] })
const config = 
{
    defaultprefix:"!",
    token:"TOKEN_HERE"
}
client.on('ready', () =>{
    console.log('Ready!!')
})
client.on('messageCreate' async(message) =>{
    const db = new PrefixDB({message: message})
    let prefix = db.get(config.defaultprefix)
     	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
    if(command === "setprefix"){
        db.set(args[0])
        message.channel.send({content: 'Successfully changed the prefix'})
    }
    if(command === "deleteprefix"){
        db.delete()
    }
    if(command === "allprefix"){
console.log(db.all())
    }
})
client.login(config.token)
```
# All Functions
- Creating A DB
```js
const { PrefixDB } = require('discord.prefixdb')
const db = new PrefixDB({message: MessageProperty(Object)})
```
- Get The Prefix
```js
/**
 * @param {defaultprefx} string;
 * */
db.get("!" /*<- DefaultPrefix*/)
```
- All Prefix Data
```js
console.log(db.all())
```
- Delete Prefix for a Server
```js
/**
 * @param {prefix} string;
 * */
db.set(prefix)
```
