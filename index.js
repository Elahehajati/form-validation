let stepslider=1
let _figure=document.querySelectorAll('.box>section>figure')
let _spanslider=document.querySelectorAll('.box>section>section>span')
_figure[0].style.opacity='1'
_spanslider[0].firstChild.style.transform='scale(1)'
function slider(){
    if(stepslider==4){
        stepslider=0
    }
    _figure.forEach((item)=> {
        item.style.opacity='0'
    }) 
    _spanslider.forEach((item,index)=> {
        _spanslider[index].firstChild.style.transform='scale(0)'
    }) 
    _figure[stepslider].style.opacity='1'
    _spanslider[stepslider].firstChild.style.transform='scale(1)'
    stepslider++
}
setInterval(slider , 8000)
function sliderclick(e){
    f=e.getAttribute('data-status')
    _spanslider.forEach((item,index)=> {
    _spanslider[index].firstChild.style.transform='scale(0)'
    }) 
    stepslider=f
    slider()
    e.firstChild.style.transform='scale(1)'
}
//end slider//////////////////////////////////
let _inputf=document.querySelectorAll('#formvalid>input')
let _spanerror=document.querySelectorAll('#formvalid>span')
function formvalidation(){
    const data=[]
    _spanerror.forEach((item , index)=>{
        item.innerHTML=''
    })
    let falg=0
    _inputf.forEach((item , index)=>{
        data[index]=item.value
        if(data[index].search(/<script/)>=0||
         data[index].search(/\s/)==0||
         data[index]==''||
         data[index]==null||
         data[index].length==0
            ){
                _spanerror[index].innerHTML='the input is empty!'
            }
    })
    if(data[0].search(/[^a-z]/i)>=0){
        _spanerror[0].innerHTML+='not valid error you cant use this charactors ((){}!@#*()":><_-+=.,~`) and numbers'
        falg++
    }
    if(data[0].length<3 && data[0].length>0){
        _spanerror[0].innerHTML+='The name has at least 3 words !!'
        falg++
    }
    if(data[1].search(/[^a-z]/i)>=0){
        _spanerror[1].innerHTML+='not valid error you cant use this charactors ((){}!@#*()":><_-+=.,~`) and numbers'
        falg++
    }
    if(data[1].length<3 && data[1].length>0){
        _spanerror[1].innerHTML+='The last name has at least 3 words !!'
        falg++
    }
    if(
       data[2].search(/@/) < 3 ||    
       data[2].search(/[a-z]/i) ==-1 ||
       data[2].search(/@/) ==-1 ||
       data[2].search(/[0-9]/) ==-1  ||
       data[2].search(/[~`!#$%^&*()_+={}|\'/",><]/) !=-1 ||
       data[2].search(/.com/i) == -1
        ){
         _spanerror[2].innerHTML+='The email is not valid !!'  
            falg++
    }
    if(data[2].search(/.com/)!=-1){
        if(data[2].search(/.com/) < data[2].search(/@/)+3
        ){
            _spanerror[2].innerHTML+='The email is not valid !!'
        }
        // falg++
    }
    if(data[3].search(/[^0-9]/)!=-1 ||
       data[3].length != 11
    ){
        _spanerror[3].innerHTML+='not valid'
        falg++
    }
    if(data[4].search(/[0-9]/) ==-1 ||
       data[4].search(/[a-z]/) ==-1 ||
       data[4].search(/[A-Z]/) ==-1 ||
       data[4].search(/[~`!#@$%^&*()_+={}|\'/",><]/) !=-1||
       data[4].length < 6
    ){
        _spanerror[4].innerHTML+='its should include [a-z] , [A-Z],[0-9] and at least 6 characters'
        falg++
    }
    if(data[5] != data[4]){
        _spanerror[5].innerHTML+='its not correct'
        falg++   
    }

  console.log(falg)
 
    if(falg!=0){
        return false
    }else{
        form.addEventListener('submit', callbackFunction);

    }
}
const form = document.getElementById('formvalid');

                      
function callbackFunction(event) {

  event.preventDefault();
  const myFormData = new FormData(event.target);

  const formDataObj = Object.fromEntries(myFormData.entries());
  formDataObj.ssss = myFormData.getAll('ssss');
  console.log(formDataObj.ssss[0]);

  document.getElementById('go').addEventListener('click' , ()=>{
    document.getElementById('go').setAttribute('href' , 'login/login.html')
  })
  
}
// end of formvalidate.....................
///end of page1.....................formDataObjformDataObj....................................................................
// console.log(formDataObj);
let _inputlogin=document.querySelectorAll('#boxlogin>input')
let _spanlogin=document.querySelectorAll('#boxlogin>span')
function _login(){
    // console.log(formDataObj.ssss[0])
    let falg=0
    if(_inputlogin[0].value!='maryam'){
        _spanlogin[0].innerHTML='username is not correct'
        // console.log(formDataObj.ssss[0])
        falg++
    }
    if(_inputlogin[1].value!='elahi'){
        _spanlogin[1].innerHTML='password is not correct'
        falg++
    }
    if(falg!=0){
        return false
    }
}