let request = new XMLHttpRequest();

request.addEventListener('readystatechange',function(){
    if(this.readyState === 4 && this.status === 200) {
         console.log(request.responseText);
    }else if(this.status === 404) {
        console.log('your link is not avalaible');
    }
});

request.open('GET','test.json');
request.send();
