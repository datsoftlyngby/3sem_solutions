// Navigation
const btnEx1 = document.getElementById('btnEx1');
const btnEx2 = document.getElementById('btnEx2');
const btnEx3 = document.getElementById('btnEx3');
const sectionEx1 = document.getElementById('1');
const sectionEx2 = document.getElementById('2');
const sectionEx3 = document.getElementById('3');
const s1Content = sectionEx1.innerHTML;
const s2Content = sectionEx2.innerHTML;
const s3Content = sectionEx3.innerHTML;


btnEx1.onclick = (e)=>{
    e.preventDefault();
    removeContent();
    insertContent(1);
}

btnEx2.onclick = (e)=>{
    e.preventDefault();
    removeContent();
    insertContent(2);
}

btnEx3.onclick = (e)=>{
    e.preventDefault();
    removeContent();
    insertContent(3);
}


function removeContent(){
    sectionEx1.innerHTML = '';
    sectionEx2.innerHTML = '';
    sectionEx3.innerHTML = '';
}

function insertContent(id){
    if(id === 1)
        sectionEx1.innerHTML = s1Content;
    if(id === 2)
        sectionEx2.innerHTML = s2Content;
    if(id === 3)
        sectionEx3.innerHTML = s3Content;
}

