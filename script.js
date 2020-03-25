let c = document.getElementById('border-radius')
function printValueTopLeft(){
    let topLeft = Number(document.getElementById('top-left').value)
    c.style.borderTopLeftRadius = `${topLeft}px`
    cssCodeGenerator()   
}
function printValueTopRight(){
    let topRight =Number(document.getElementById('top-rigth').value)
    c.style.borderTopRightRadius = `${topRight}px`
    cssCodeGenerator() 
}
function printValueDownLeft(){
    let downLeft = Number(document.getElementById('down-left').value)
    c.style.borderBottomLeftRadius = `${downLeft}px`
    cssCodeGenerator()
}
function printValueDownRight(){
    let downRight = Number(document.getElementById('down-right').value)
    c.style.borderBottomRightRadius = `${downRight}px`
    cssCodeGenerator()
}
function cssCodeGenerator(){
    let downRight = Number(document.getElementById('down-right').value)
    let downLeft = Number(document.getElementById('down-left').value)
    let topRight =Number(document.getElementById('top-rigth').value)
    let topLeft = Number(document.getElementById('top-left').value)
    let result = document.getElementById('result')
    let cssCode = ' '
    if(downLeft == 0){
        if(downRight == 0){
            if(topLeft == 0 ){
                if(topRight == 0){
                    cssCode = `border-radius: 0px;`
                }else{
                    cssCode = `border-top-right-radius: ${topRight}px;`
                }
            }else if(topRight == 0){
                cssCode = `border-top-left-radius: ${topLeft}px;`
            }else{
                cssCode = `border-top-left-radius: ${topLeft}px;\nborder-top-right-radius: ${topRight}px;`
            }
        }else if(topLeft == 0){
            if(topRight == 0){
                cssCode = `border-down-right-radius: ${downRight}px;`
            }else{
                cssCode = `border-top-right-radius: ${topRight}px;\nborder-down-right-radius: ${downRight}px;`
            }
        }else if(topRight == 0){
            cssCode = `border-top-left-radius: ${topLeft}px;\nborder-down-right-radius: ${downRight}px;`
        }else{
            cssCode = `border-top-left-radius: ${topLeft}px;\nborder-top-right-radius: ${topRight}px;\nborder-down-right-radius: ${downRight}px;`
        }
    }else if(downRight == 0){
        if(topLeft == 0){
            if(topRight == 0){
                cssCode = `border-down-left-radius: ${downLeft}px;`
            }else{
                cssCode = `border-top-right-radius: ${topRight}px;\nborder-down-left-radius: ${downLeft}px;`
            }
        }else if(topRight == 0){
                cssCode = `border-top-left-radius: ${topLeft}px;\nborder-down-left-radius: ${downLeft}px;`
            }else{
                cssCode = `border-top-left-radius: ${topLeft}px;\nborder-top-right-radius: ${topRight}px;\nborder-down-left-radius: ${downLeft}px;`
            }
    }else if(topLeft == 0){
            if(topRight == 0){
                cssCode = `border-down-left-radius: ${downLeft}px;\nborder-down-right-radius: ${downRight}px;`
            }else{
                cssCode = `border-top-right-radius: ${topRight}px;\nborder-down-left-radius: ${downLeft}px;\nborder-down-right-radius: ${downRight}px;`
            }
    } else if(topRight == 0){
                cssCode = `border-top-left-radius: ${topLeft}px;\nborder-down-left-radius: ${downLeft}px;\nborder-down-right-radius: ${downRight}px;`
            }else{
                cssCode = `border-top-left-radius: ${topLeft}px;\nborder-top-right-radius: ${topRight}px;\nborder-down-left-radius: ${downLeft}px;\nborder-down-right-radius: ${downRight}px;`
    }
    if(topRight == topLeft && topLeft == downLeft && downLeft == downRight){
        cssCode = `border-radius: ${topLeft}px;`
    }
    result.innerText = cssCode
    
}