const functions = require('firebase-functions');
const admin = require('firebase-admin');
const rp = require('request-promise');
const cheerio = require('cheerio');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

// const apikey = "91gUxhAPCZ7wAwoUzZ3ZPsKalUBZjYvK";
// const rooturl = "https://app.ticketmaster.com";

// const harvard = "https://www.harvard.edu/events";
// const stanford = "https://events.stanford.edu/";


exports.myTicketMaster = functions.https.onRequest((req,res) => {

    // const url = "https://app.ticketmaster.com/discovery/v2/events?apikey=91gUxhAPCZ7wAwoUzZ3ZPsKalUBZjYvK&locale=*"

    db.collection('cafe').get().then(snapshot => {
        res.send(snapshot.data())
    }).catch(err => {
        res.send("err")
    })
})

