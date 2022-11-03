/* ---- Fetch Api Old style Version ------*/

const request = new XMLHttpRequest();

request.addEventListener('readystatechange',function(){
    if(this.readyState === 4 && this.status === 200) {
         console.log(request.responseText);
    }else if(this.status === 404) {
        console.log('your link is not avalaible');
    }
});

request.open('GET','test.json');
request.send();

/* ---- /Fetch Api Old style Version ------*/


/* ---- Code Refectoring Fetch Api Old style Version ------*/

const getRequest = (resource,callback)=> {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',function(){
        if(this.readyState === 4 && this.status === 200) {
            const datas = JSON.parse(request.responseText);
            callback(datas,undefined);
        }else if(this.status === 404) {
            callback(undefined,'your link is not avalaible');
        }
    });

    request.open('GET',resource);
    request.send();
}

getRequest("test.json",(data,err)=> {
    if(data) {
        console.log(data);
        /* this style is callback hell repeat function call */
        getRequest("test2.json",(data,err)=> {
            if(data) {
                console.log(data);
            }else {
                console.log(err);
            }
        })
    }else {
        console.log(err);
    }
});

/* ---- /Code Refectoring Fetch Api Old style Version ------*/
