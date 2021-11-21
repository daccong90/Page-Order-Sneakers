// bấm hình nhỏ để chọn coi trên hình lớn , đòng thời làm mờ ảnh nhỏ
var indexImg = 0;
function clickOpen(index) {
    var imgExtraNodes = document.querySelectorAll('.extra-img .list .item img')        
    var imgMainNodes = document.querySelectorAll('.main-img .list .item')
    for (let i = 0; i < 4; i++) {
        imgMainNodes[i].classList.add('disable');
        imgExtraNodes[i].classList.remove('img-choose')
    }
    imgMainNodes[index].classList.remove('disable');
    imgExtraNodes[index].classList.add('img-choose')
    indexImg = index;
}
var checkOpen = true;
function cartOpenBtn() {
    if (checkOpen) {
        document.querySelector(".cart-box").classList.remove('disable');
        checkOpen = false;
    } else{
        document.querySelector(".cart-box").classList.add('disable');
        checkOpen = true;
    }
}
// tăng giảm số lượng ở mục btn-addtocart
var numberProduct = 1;
function clickAdd(params) {
    numberProduct++;
    var numberNode = document.querySelector('.quantity-number')
    numberNode.innerHTML = numberProduct;
    }
function clickMinus(params) {
    if (numberProduct > 1) {
        numberProduct--;
        document.querySelector('.quantity-number').innerHTML = numberProduct;
    }
}
// click add to cart
var priceNumber = 125;
function addCart() {
    document.querySelector('.cart-box__body--empty').classList.add('disable');
    document.querySelector('.cart-box__body--added').classList.remove('disable');
    console.log(typeof numberProduct);
    var priceProduct = document.querySelector('.price-sale').textContent;
    var calPriceProduct = document.querySelector('.cart-box__item-price .cal');
    var sumPriceProduct = document.querySelector('.cart-box__item-price .sum');
    calPriceProduct.innerHTML = `${priceProduct} x ${numberProduct}`
    sumPriceProduct.innerHTML = `$${(priceNumber * numberProduct)}.00`

}
function addNoticeCart() {
    document.querySelector('.cart-notice__number').innerHTML=`${numberProduct}`
}
function removeCart() {
    document.querySelector('.cart-box__body--empty').classList.remove('disable');
    document.querySelector('.cart-box__body--added').classList.add('disable');
}
//focus
function clickFocus() {
    document.querySelector('.focus-product').classList.remove('disable');
    // clear 
    for (let i = 0; i < 4; i++) {
        imgExtraNodes[i].classList.remove('img-focus__choose');
        imgMainNodes[i].classList.add('disable');
    }
    imgExtraNodes[indexImg].classList.add('img-focus__choose');
    imgMainNodes[indexImg].classList.remove('disable');
}


// button close
function closeBtn(params) {
    document.querySelector('.focus-product').classList.add('disable');   
}

// button back & next
var imgMainNodes = document.querySelectorAll('.focus-product__img--main .list .item img')
var imgExtraNodes = document.querySelectorAll('.focus-product__img--extra .list .item img')
function backNextBtn(number) {    
    imgExtraNodes[indexImg].classList.remove('img-focus__choose');
    imgMainNodes[indexImg].classList.add('disable');
    indexImg += number;
    console.log(indexImg);
    if (indexImg>3) {
        indexImg = 0
    } 
    if (indexImg<0) {
        indexImg = 3
    } 
    imgExtraNodes[indexImg].classList.add('img-focus__choose');
    imgMainNodes[indexImg].classList.remove('disable');
}
// button back & next img on mobile

var imgMainNodesMobile = document.querySelectorAll('.main-img .list .item');
var imgMainNodesMobiles = document.querySelector('.main-img .list');
var indexImgMobile = 0
function backNextBtnMobile(number) {
    imgMainNodesMobile[indexImgMobile].classList.add('disable');
    console.log(imgMainNodesMobiles);
    indexImgMobile += number;
    if (indexImgMobile>3) {
        indexImgMobile = 0
    } 
    if (indexImgMobile<0) {
        indexImgMobile = 3
    } 
    console.log(indexImgMobile);
    imgMainNodesMobile[indexImgMobile].classList.remove('disable');
}