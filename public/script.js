function getABC(eq){
    var a = eq.slice(0, eq.indexOf("x"))
    
    var b = eq.slice(eq.indexOf("²"))
    b = b.slice(1, b.indexOf("x"))
    
    var c = eq.slice(eq.indexOf("²"))
    c = c.slice(c.indexOf("x")+1)

    if(a > 0){
        a = "+"+a
    }

    if(eq.slice(0, 1) === "x"){
        a = 1
        a = "+"+a
    }
    if(b === "+"){
        b+=1
    }
    
    abc = {
        "a": a,
        "b": b,
        "c": c
    }

    return abc
}

function delta(abc){
    var delta = (abc.b ** 2) - (4*abc.a*abc.c)
    return delta
}

function bhaskara(abc, delta){
    if(delta < 0 || abc.a == 0 || abc.b === ""){
        return{
            "x1": "Não existe",
            "x2": "Não existe"
        }
    }
    if((abc.c).indexOf("=") !== -1){
        alert('Não é necessário inserir o "="')
        return "erro"
    }
    var x1 = (-(abc.b)+(Math.sqrt(delta)))/(2*(abc.a))
    var x2 = (-(abc.b)-(Math.sqrt(delta)))/(2*(abc.a))

    return{
        "x1": x1,
        "x2": x2
    }
}

function sqrtProduct(x1, x2){
    return{
        "p": x1*x2
    }
}

function sqrtSum(x1, x2){
    return{
        "s": x1+x2
    }
}

function insertResult(a, b, c, delta, x1, x2){
    document.getElementById("result").innerHTML = `
        <div class="m-3" style="color: rgb(148, 132, 132);">
            <p class="label has-text-white">Resolução:</p>
            <ul>
                <li class="mb-3">
                    <ul>
                        <li>a = ${a}</li>
                        <li>b = ${b}</li>
                        <li>c = ${c}</li>
                    </ul>
                </li>
                <li class="mb-3">
                    <ul>
                        <li>Δ = b² - 4ac</li>
                        <li>Δ = (${b})² - 4 * (${a}) * (${c})</li>
                        <li>Δ = ${b ** 2} - (${4*a*c})</li>
                        <li>Δ = ${delta}</li>
                    </ul>
                </li>
                <li>
                    <ul class="mb-3">
                        <li>x = (-b +- √Δ) / 2a</li>
                        <li>x = (-(${b}) +- √${delta}) / 2 * (${a})</li>
                    </ul>
                    <li class="has-text-white">x¹ = ${x1}</li>
                    <li class="has-text-white">x² = ${x2}</li>
                </li>
            </ul>
        </div>
    `
}

document.getElementById("calc").onclick = function(){
    if(document.getElementById("input").value === ""){
        alert("O campo está vazio")
        document.getElementById("result").innerHTML = ``
    }
    else{
        var abc = getABC(document.getElementById("input").value)

        var a = abc.a
        var b = abc.b
        var c = abc.c
    
        var d = delta(abc)
    
        var xs = bhaskara(abc, d)
    
        if(xs === "erro"){
    
        }
        else{
            var x1 = xs.x1
            var x2 = xs.x2
        
            insertResult(a, b, c, d, x1, x2)
        }
    }
}