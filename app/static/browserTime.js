function getTime(){
    let now = new Date()

    return{
        date: now.toLocaleDateString('en-ie'),
        time: now.toLocaleDateString('en-ie')
    }
}

const browserTime=document.getElementById('browserTime');


function updateBrowserTime(){
    const now =  getTime();
    browserTime.innerText=`${now.date} ${now.time}`;
    setTimeout(updateBrowserTime,1000);
}
updateBrowserTime();
