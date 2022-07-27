const fetch = require ('node-fetch');
const cheerio = require ('cheerio');
const fs = require ('fs');
const readlineSync = require ('readline-sync');

const getAPIHeader = () => new Promise ((resolve, reject) => {
    fetch (`https://api.binderbyte.com/v1/track?api_key=c2d258f557dd0f4f214b01b2fe5211ceb72bd594dd0c4d4be50b58c957ef801b&courier=jnt&awb=JP2355705567`, {
        method : 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
        }
    })
    .then (async res => {
        const headersnya = res.headers.raw();
        resolve (headersnya)
    })
    .catch (err => reject (err))
});


const getAPI = () => new Promise((resolve, reject) => {
    fetch(`https://api.binderbyte.com/v1/track?api_key=c2d258f557dd0f4f214b01b2fe5211ceb72bd594dd0c4d4be50b58c957ef801b&courier=jnt&awb=JP2355705567`, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
        }
    })
        .then(res => res.json())
        .then(res => {

            resolve(res)
        })
        .catch(err => reject(err));
});


(async () => {

    // const getAPIHeadersnya = await getAPIHeader();
    // console.log(getAPIHeadersnya);

const getDataAPI = await getAPI();
const AllData = getDataAPI.data.history;
console.log(AllData);

const getHistory =  {
    date: '2022-07-26 03:20:51',
    desc: 'TELAH BERANGKAT: PUSAT TRANSIT [CIPUTAT] MENUJU [TANGERANG]',
    location: 'CIPUTAT'
}

console.log(getHistory.desc);



})()