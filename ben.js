#!/usr/bin/env node
const readline = require("readline");
const {execSync} = require("child_process");
const axios = require("axios");
const qs = require('qs');
const { table } = require("table");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

q = console.log;

let version = "1.0";

let series = ["Ben 10 Classic","Ben 10 Alien Force","Ben 10 Ultimate Alien","Ben 10 Omniverse"];
let series_list = ["","-alien-force","-ultimate-alien","-omniverse"];

let homePage = "ben 10 tube v"+version+"\n";

var lang = '1'; //default language

if(process.argv[2] === "-l" && (process.argv[3] === '0' || process.argv[3] === '1')) { //set default language
    lang = process.argv[3];
}

let omnitrix = `
 ┌───          \\                 /                                                ────┐ 
 ││             \\    xxxxxxxxx   --                                                   │ 
 ││               xxxx    xxxxxx             ┬┬┬┬┬┬┬┬┬┬                               │ 
 ││              xx       xxxxxxx                ┬               ┬                      
 ││        ─    xx        xxxxxxxx               ┬               ┬                      
 ││      ───   xxxxxxxxx         x               ┬        ┬┬  ┬┬ ┬┬ ┬┬  ┬┬┬┬            
 ││            xxxxxxxxxx        x  ──           ┬┬┬┬┬┬┬┬ ┬┬┬┬┬┬ ┬┬┬┬┬  ┬┬┬┬┬┬┬┬        
 │││           xxxxxxxxx        xx                                                    │ 
 │││         ,  xxxxxxxx       xx              +┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬+      │ 
 │││             xxxxxxxx   xxxx  ,            +┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴+      │ 
 │││││             xxxxxxxxxxx    \\                                                   │ 
 └─────── ─     /-                                                            ────────┘ 
────────────────────────────────────────────────────────────────────────────────────────`
homePage+=green(omnitrix)+"\n"

for(let i=0;i<series.length;i++) {
    homePage+=`${green(`[${i}]`)} ${series[i]} \n`;
}

q(homePage);


function green(x) {
    return '\x1b[32m'+x+'\x1b[0m';
}

function blue(x) {
    return '\x1b[34m'+x+'\x1b[0m'
}

///////////all get link with http functions:


gets = (url,lang=0,func = url => console.log(url)) => {

  //getbid

const headers = {
  'Host': 'sezonlukdizi6.com',
  'Cookie': '_ga=GA1.1.398603303.1740085780; alternatif=PLUS; _ga_EF38VP58JD=GS1.1.1740085780.1.1.1740094168.60.0.0',
  'Sec-Ch-Ua': '"Chromium";v="133", "Not(A:Brand";v="99"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Linux"',
  'Accept-Language': 'en-US,en;q=0.9',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'Sec-Fetch-Site': 'none',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-User': '?1',
  'Sec-Fetch-Dest': 'document',
  'Accept-Encoding': 'gzip, deflate, br',
  'Priority': 'u=0, i'
};

axios.get(url, { headers })
  .then(res => {
    var data = res.data;
    var bid = data.split('bid="')[1].split('"')[0];
    getid(url,bid,lang,func);
  })
  .catch(error => {
    console.error('Error:', error);
  });

}

getid = (url0,bid,lang,func) => {
    
const url = 'https://sezonlukdizi6.com/ajax/dataAlternatif22.asp';
const data = qs.stringify({
  bid: bid,
  dil: lang
});

const headers = {
  'Host': 'sezonlukdizi6.com',
  'Cookie': '_ga=GA1.1.398603303.1740085780; alternatif=PLUS; ASPSESSIONIDCQAQSDDC=LLHEIPLDOEJJGDBBCNDIABCK; _ga_EF38VP58JD=GS1.1.1740085780.1.1.1740094409.60.0.0',
  'Content-Length': data.length,
  'Sec-Ch-Ua-Platform': '"Linux"',
  'Accept-Language': 'en-US,en;q=0.9',
  'Sec-Ch-Ua': '"Chromium";v="133", "Not(A:Brand";v="99"',
  'Sec-Ch-Ua-Mobile': '?0',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://sezonlukdizi6.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': url0,
  'Accept-Encoding': 'gzip, deflate, br',
  'Priority': 'u=1, i'
};

axios.post(url, data, { headers })
  .then(res => {
    if(res.data.status=='success') {
    let streams = res.data.data;

    for(let i=0;i<streams.length;i++) {
        if(streams[i].baslik=="PLUS") {
            let id = streams[i].id;
            getlink(url0,id,func);
        }
    }
   } else console.log("cant get id")

  })
  .catch(error => {
    console.error('Error:', error);
  });
}

getlink = (url0,id,func) => {
    const url = 'https://sezonlukdizi6.com/ajax/dataEmbed22.asp';
    const data = qs.stringify({
        id: id
    });

const headers = {
  'Host': 'sezonlukdizi6.com',
  'Cookie': '_ga=GA1.1.398603303.1740085780; alternatif=PLUS; ASPSESSIONIDCQAQSDDC=LLHEIPLDOEJJGDBBCNDIABCK; _ga_EF38VP58JD=GS1.1.1740085780.1.1.1740094409.60.0.0',
  'Content-Length': data.length,
  'Sec-Ch-Ua-Platform': '"Linux"',
  'Accept-Language': 'en-US,en;q=0.9',
  'Sec-Ch-Ua': '"Chromium";v="133", "Not(A:Brand";v="99"',
  'Sec-Ch-Ua-Mobile': '?0',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
  'Accept': '*/*',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://sezonlukdizi6.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': url0,
  'Accept-Encoding': 'gzip, deflate, br',
  'Priority': 'u=1, i'
};

axios.post(url, data, { headers })
  .then(res => {
    let data = res.data;

    let src0 = data.split('src="')[1].split('" ')[0];
    src0 = src0.split("&v=")[1]
    src0 = src0.replaceAll("\\x",'');

    let buff = Buffer.from(src0,"hex"); //decode url
    let src = buff.toString("utf-8");
    func(src)
    
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

/////enden http get functions

isnum = (num,x1,x2) => {
    if(num!=="" && Number.isInteger(Number(num)) && x1<=Number(num) && Number(num)<=x2) return true;
    else return false;
}

get_series_data = (sn) => {

    let url = "https://sezonlukdizi6.com/bolumler/ben-10"+series_list[sn]+".html";
    let seasons = [];

    axios.get(url,{responseType: 'arraybuffer'})
    .then(res => {
        
        let raw = new TextDecoder('windows-1254').decode(res.data);

        let trEl = raw.split("<tr>"); //start at 2
        let seasonN = 1;
        let seasonSeries = [];
        
        for(let i=2;i<trEl.length;i++) {

            let block = trEl[i]; //raw html block of this part

            if(block.search('href=')!==-1) { //here is a part source
           
            let table = block.split("<td>");

            let seasonName = table[1].split("</td>")[0];
            let link = table[2].split("href='")[1].split("'>")[0];
            let partNumber = table[2].split(".html'>")[1].split("</a>")[0];
            let partName = table[3].split(".html'>")[1].split("</a>")[0];
            let partDate = table[3].split('aligned">')[1].split("</td>")[0];

            let part = {
                seasonName: seasonName,
                link: link,
                partNumber: partNumber,
                partName: partName,
                partDate: partDate
            }
                seasonSeries.push(part);
                if(i==trEl.length-1) seasons.push(seasonSeries);
            } else {
                seasons.push(seasonSeries);
                seasonSeries = [];
            }
        }

        let series_data = seasons;
        for(let i=1;i<series_data.length+1;i++) {
            q(green(" (►◄) ")+i);
        }
        choose(sn,series_data); 

    })

}

main = () => {
    rl.question(green("choose series: "),(sn)=>{
        if(isnum(sn,0,series.length-1)) {
            get_series_data(Number(sn));
        } else 
        if(sn === "exit" || sn === "e") {
            q("closed..")
            process.exit();
        } else
        {
            err(0);
            main();
        }
    })
}

choose = (sn,series_data) => {
    rl.question(green(series[sn]+":Season>"),(query) => {

        if(query === "list" || query === "ls" || query === "l") {
            for(let i=1;i<series_data.length+1;i++) {
                q(green(" (►◄) ")+i);
            }
            choose(sn,series_data);
        } else 
        if(isnum(query,1,series_data.length)) { 
            choose2(query,series_data,sn)
        } else 
        
        if(query.trim() == "..") {
            main();
        } else

        if(query === "exit" || query === "e") {
            q("closed..")
            process.exit();
        } else
        
        {
            err(1);
            choose(sn,series_data);
        }

    })
}

choose2 = (seasonNum,series_data,sn) => { //func for choose par
    var seasonData = series_data[seasonNum-1];
    rl.question(green(series[sn]+":Season>"+seasonNum+">Part>"),(query) => {

        if(query === "list" || query === "ls" || query === "l") {

            let partTable = [[" ",green("Season"),green("Partno"),green("Part"),green("Date")]];
            
            for(let i=0;i<seasonData.length;i++) {
                let part = seasonData[i];
                partTable.push([green("(►◄)"),part.seasonName,part.partNumber,part.partName,part.partDate])
            }

            q(table(partTable,{singleLine: true}));

           choose2(seasonNum,series_data,sn);
        } else 

        if(isnum(query,1,seasonData.length)) { 

            let part = seasonData[query-1];
            let partTable = [[green("(►◄)"),part.seasonName,part.partNumber,part.partName,part.partDate]];
            q(table(partTable,{drawVerticalLine: (lineIndex, columnCount) => {return lineIndex === 0 || lineIndex === columnCount;}}));

            startVideo(part,()=>{choose2(seasonNum,series_data,sn)})

        } else 

        if(query.trim() === "..") {
            choose(sn,series_data);
        } else

        if(query === "exit" || query === "e") {
            exit();
        } else 
        {
            err(2);
            choose2(seasonNum,series_data,sn);
        }
        
    })
}

startVideo = (part,back) => {
    rl.question(blue("watch? >"),(query)=>{
        if(query == "") { //pressed enter
            //start the video
            let link = part.link
            let url = "https://sezonlukdizi6.com"+link;

            gets(url,lang,(streamUrl)=>{
                    try {
                        execSync(`vlc "${streamUrl}"`)
                        startVideo(part,back);
                    }
                    catch (err) {
                        q(err)
                    }
            });

        } else
        if(query.trim() === "lang 0") { 
            lang = '0';
            q("language was assigned to Turkish (0)");
            startVideo(part,back);
        } else 
        if(query.trim() === "lang 1") {
            lang = '1';
            q("language was assigned to English (1)");
            startVideo(part,back);
        } else
        if(query.trim() ==="..") {
            back();
        } else
        if(query === "exit" || query === "e") {
            exit();
        } else 
        {
            err(3);
            startVideo(part,back);
        }
            
    })
        
}

err = (type,param) => {
    if(type===0) {
        q("you can choose only 0,1,2,3");
        main();
    } else
    if(type===1) {
        q("season not found, type: list");
    } else
    if(type===2) {
        q("part not found, type: list");
    } else 
    if(type===3) {
        q("press enter or ..");
    }
}

exit = () => {
    q("closed..")
    process.exit();
}


main();
