// // menu
let data
fetch('./menu.json')
  .then(response => response.json())
  .then(response => data = response)
  .then(json => 
    json.map((item)=> {
        document.getElementById("main-food").innerHTML += ` <div class="food">
        <div class="test">
        <img src="image/menu/${item.photo}"  alt="" style="cursor: pointer;" onclick="dataSelect(${item.id})">
        <div class="chose" id="${item.id}" style="cursor: pointer;" onclick="turnOff(${item.id})"></div>
        </div>
        <p class="m">${item.name}</p>
        <h3 class="m">Rp ${item.price}</h3>   
    </div> `
    }))


// // cart

let cart = []

const cartList = () => {
    document.querySelector(".validation").innerHTML = ""
    cart.forEach((item)=> {
        document.querySelector(".validation").innerHTML += `<div class="cart-item citem${item.id}">
        <img src="/image/menu/${item.photo}"  alt="" class="cart-menu">
        <div class="cart-menu-2">
            <h4 class="menu-title-cart">${item.name}</h4>
            <div class="icon-add-more">
            <div class="minus" onclick="addItem('minus', ${item.id})"></div>
            <div class="number">${item.unit}</div>
            <div class="plus" onclick="addItem('plus', ${item.id})"></div>
            </div>
        </div>
        <h4 class="cart-menu-3">Rp.${item.price}</h4>
    </div>`
})
totalunit()
popup()
totalPpn()
}

const dataSelect = (id) =>{
    const a = data.find((p) => p.id == id)
    document.getElementById(`${id}`).style.display = "block";
    document.querySelector('.no-order').style.display = "none";
    document.querySelector('.displayn').style.display = 'block'
    cart.push({
     ...a,
     "unit" : Number("1")
 })
cartList()
totalPrice()
console.log(cart)
}

const turnOff = (id) => {
    cart = cart.filter((p) => p.id != id)
    document.getElementById(`${id}`).style.display = "none";
    totalunit()
    document.querySelector(`.citem${id}`).remove();
    totalPrice()
}

const addItem = (action, id) => {
    cart = cart.map((item) => {
     let unit = item.unit
     let price = item.price
    //  const price2 = item.price 
     
     if(item.id == id){
          if(action === "plus"){
            unit++
         }else if(action === "minus"){
             unit--
            }
        }

        return{
            ...item,
            unit,
            price,
        }  
    })


totalunit()
cartList()
totalPrice()

}

const totalunit = () =>{
    let total = 0
    cart.forEach((item) => {
        total += item.unit;
    })
    document.querySelector('.circle').innerHTML = `${total}`
    if(total == 0){
        document.querySelector('.no-order').style.display = "flex";
        document.querySelector('.displayn').style.display = 'none'
    }
}

const totalPrice = () => {
    let total = 0
    cart.forEach((item) => {
        total += Number(item.price) * Number(item.unit)
        totalprice = total.toFixed(3) 
    })
    document.getElementById('total-price').innerHTML = `Rp.${totalprice}`
    return totalprice
}

const checkout = (param) => {
    if(param == "on"){
    document.querySelector('.pop-up').style.display = 'block'
    } else if(param == "off"){
    document.querySelector('.pop-up').style.display = 'none'
    }
}

const popup = () =>{
    document.querySelector(".main-pop").innerHTML = ""
    cart.map((item) => {
    document.querySelector(".main-pop").innerHTML += `<div class="item-list">
    <div>${item.name} ${item.unit}x</div>
    <div>Rp ${item.price}</div>
</div>`
})
}

const totalPpn = () => {
    ppn = 10 / 100
    totalppn = (Number(totalPrice()) * ppn).toFixed(3)
    total = (Number(totalPrice()) + Number(totalppn)).toFixed(3)
    document.getElementById('ppn').innerHTML = `Rp.${totalppn}`
    document.querySelector('.total-pop').innerHTML = `Total : Rp.${total}`
}


const search = () => {
    document.getElementById('fname').style.display = 'block'
    document.getElementById('fname').style.marginLeft = '50px'
    document.querySelector('.h-food h1').style.display = 'none'
}

const offsearch = () => {
    document.querySelector('.h-food h1').style.display = 'block'
    document.getElementById('fname').style.display = 'none'

}


const dataSearch = () => {
    let param = document.getElementById('fname')
    // let param1 = document.getElementById('fname').value
    let parem2 = param.value.toUpperCase() 
    // console.log(param)

    datafilter = data.filter((item) => 
                item.name.toUpperCase().includes(parem2)
        )
      
    document.getElementById("main-food").innerHTML = ""
    datafilter.map((item)=> {
        document.getElementById("main-food").innerHTML += ` <div class="food">
        <div class="test">
        <img src="image/menu/${item.photo}"  alt="" style="cursor: pointer;" onclick="dataSelect(${item.id})">
        <div class="chose" id="${item.id}" style="cursor: pointer;" onclick="turnOff(${item.id})"></div>
        </div>
        <p class="m">${item.name}</p>
        <h3 class="m">Rp ${item.price}</h3>   
    </div>`
    })
    
}

 
const addItems = (param) => {
    if(param == "on"){
        document.querySelector('.pop-up2').style.display = 'block'
    }else if(param == "off"){
        document.querySelector('.pop-up2').style.display = 'none'
    }
}


const menuAddNew = () => {
    let name = document.getElementById("name-pop").value
    let image = document.getElementById("image-pop").value
    let price = document.getElementById("price-pop").value
    const y = data.map((p) => p.id )
    let id = Math.max(...y) + 1

    let newdata = {
        "photo": `${image}`,
        "name": `${name}`,
        "price": `${price}`,
        "id": `${id}`
    }
    
    data.push(newdata)
    data.map((item)=> {
        document.getElementById("main-food").innerHTML += ` <div class="food">
        <div class="test">
        <img src="image/menu/${item.photo}"  alt="" style="cursor: pointer;" onclick="dataSelect(${item.id})">
        <div class="chose" id="${item.id}" style="cursor: pointer;" onclick="turnOff(${item.id})"></div>
        </div>
        <p class="m">${item.name}</p>
        <h3 class="m">Rp ${item.price}</h3>   
    </div> `
})
}

const cancel = () => {
    document.querySelector('.no-order').style.display = "flex";
        document.querySelector('.displayn').style.display = 'none'
}





