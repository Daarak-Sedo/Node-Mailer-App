const btnElem = document.querySelector(".register");
const formElm = document.querySelector("#form-data");
const nameTextField = document.querySelector('.name_text_fi');
const mobile_text_fi = document.querySelector('.mobile_text_fi');
const emailTextField = document.querySelector('.email_text_fi');
const checkBoxOne = document.getElementById('scales');
const checkBoxTwo = document.getElementById('scale2');
console.log(nameTextField )

formElm.addEventListener('submit', function(e) {
e.preventDefault()
    console.log("testing")
    console.log(nameTextField.value , mobile_text_fi.value , emailTextField.value , checkBoxOne.checked , checkBoxTwo.checked,"check")
    if(nameTextField.value && mobile_text_fi.value && emailTextField.value && checkBoxOne.checked && checkBoxTwo.checked) {
        fetch(" http://localhost:3000/query",{      //fetch("http://15.207.226.246:3000/query")
            method:"POST",   
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                Name:nameTextField.value,
                Email:emailTextField.value,
                Mobile:mobile_text_fi.value 

            })
        })
    alert("Submitted Sucessfully")
    setTimeout(()=>{
        nameTextField.value="",
        emailTextField.value="",
        mobile_text_fi.value=""
        checkBoxOne.checked=""
        checkBoxTwo.checked=""


    },500)
    }else {
        alert('Plase fille All Required Fields')
    }
})