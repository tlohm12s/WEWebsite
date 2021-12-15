let inzidenzen:Object = {"Niedersachsen" :  206.8, "Hamburg" : 203.2, "Nordrhein-Westfalen" : 282.7 };

function sum(values : Array<number>) : number {
    return values.reduce((previous : number, current : number) : number => {return previous + current}, 0);
}

function min(values : Array<number>) : number {
    return values.reduce((previous : number, current : number) : number => {if(current < previous) { return current; } else {return previous;}}, values[0]);
}

function max(values : Array<number>) : number {
    return values.reduce((previous : number, current : number) : number => {if(current > previous) { return current; } else {return previous;}}, 0);
}

function avg(values : Array<number>) : number {
    return sum(values) / values.length;
}

let values : Array<number> = Object.values(inzidenzen);
 
//https://www.freecodecamp.org/news/the-deno-handbook/

const conn = await Deno.listen({ port: 80 });
const httpConn = <Deno.HttpConn> Deno.serveHttp(await conn.accept());
const e = await httpConn.nextRequest();
if (e) {
  e.respondWith(new Response("Corona Inzidenzen Status für " + JSON.stringify(inzidenzen) + "\nSum:" + sum(values) + "\nAvg:" + avg(values) + "\nMin:" + min(values) + "\nMax:" + max(values)));
}