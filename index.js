const xmpp = require('simple-xmpp')

xmpp.on("online", data => {
    console.log('Connected with JID: ' + data.jid.user);
	console.log('Yes, I\'m connected!');
    send()
})

const send = () => {
    setTimeout(send, 5000);
    xmpp.send("k00lawn@localhost", `hi! ${Date.now()}`)
}

xmpp.on("error", error => 
    console.log(`something went wrong!${error} `)
)

xmpp.on("chat", (from, message)=>{
    console.log(`Got a message! ${message} from ${from}`)
})

xmpp.connect({
    jid: "admin@localhost",
    password: "passw0rd",
    host: "localhost",
    port: 5222 
})