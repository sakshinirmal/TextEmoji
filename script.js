function encryption(){
    var clutter = "";
    document.querySelector("#encrypt-btn").addEventListener("click",function(){
        var input = document.getElementById("textmsg").value
        console.log(input);
        var password = document.getElementById("password").value
        console.log(password);

        const str = input.split("")
        console.log(str)

        str.forEach(element => {
            clutter+= `&#128${element.charCodeAt()} `
        });
        console.log(clutter)

        document.querySelector("#result").style.display = "block"
        document.querySelector("#result").innerHTML = clutter
        
        var dataarr = [];

        if(JSON.parse(localStorage.getItem('data1'))){
            dataarr = JSON.parse(localStorage.getItem('data1'))
            dataarr.push({"pass":password, "input":input, "clutter":clutter})
        }
        else{
           dataarr = [{"pass":password,"input":input,"clutter":clutter}]

        }       
       localStorage.setItem('data1',JSON.stringify(dataarr))

        console.log(dataarr)
    })
}
encryption();

function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click", function(){
        document.querySelector("#result").style.display = "block";
        var clutter2 = "";
        var input2 = document.querySelector("#emojimsg").value
        var pass2 = document.querySelector("#finalpassword").value
        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)

        var str2 = input2.split(" ")
        str2.forEach(element =>{
            clutter2 += `&#${element.codePointAt(0)}`
        })
        console.log(clutter2)
        var found;
        for (let i of user){
            if(i.clutter == clutter2 ){
            found = i
            console.log(i) 
        }
    }

    if (found.clutter.trim() === clutter2.trim()) {
        document.querySelector("#result").style.display = "block";
        document.querySelector("#result").style.color = "#eee";
        document.querySelector("#result").innerHTML = found.input;
    } else {
        document.querySelector("#result").innerHTML = "Wrong Password";
        document.querySelector("#result").style.display = "block";
        document.querySelector("#result").style.color = "red";
    }
    
  });    
}

decryption();

function btnClicking(){
    document.querySelector("#encrypt-btn").addEventListener("click", function(){
        document.querySelector("#result").style.display = "block";
    });

    document.querySelector("#decrypt-btn").addEventListener("click", function(){
        document.querySelector("#result").style.display = "block";
    });

    document.querySelector("#dec").addEventListener("click", function(){
        document.querySelector("#decryption").style.display = "block";
        document.querySelector("#encryption").style.display = "none";
        document.querySelector("#dec").style.backgroundColor = "#343334";
        document.querySelector("#end").style.backgroundColor = "#232123";
        document.querySelector("#result").style.display = "none";

        document.querySelector("#main>h1 span img").style.rotate = "180deg";
    });

    document.querySelector("#end").addEventListener("click", function(){
        document.querySelector("#encryption").style.display = "block";
        document.querySelector("#decryption").style.display = "none";
        document.querySelector("#end").style.backgroundColor = "#343334";
        document.querySelector("#dec").style.backgroundColor = "#232123";
        document.querySelector("#result").style.display = "none";

        document.querySelector("#main>h1 span img").style.rotate = "0deg";
    });
}

btnClicking();

