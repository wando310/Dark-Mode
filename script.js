const slc = ele => { return document.querySelector(ele) }

//Mode Dark True
let ballMargin = '22px'
let ballStyle = '#f2f2fa'
let conteiner = '#fff'
let select = 'linear-gradient(45deg, #aeb2cb, #aeb2cb)'
let headerRightp = '#9198b5'
let headerLefth1 = 'black'
//Mode Dark False
let ballMargin1 = '0px'
let ballStyle1 = '#333a56'
let conteiner1 = '#1d2029'
let select1 = 'linear-gradient(45deg, #4d97d4, #3fd08d)'
let headerRightp1 = 'white'
let headerLefth11 = 'white'


const mode = () => {
    slc('#check').checked === true ? slc('.ball').style.marginLeft = ballMargin : slc('.ball').style.marginLeft = ballMargin1
    slc('#check').checked === true ? slc('.ball').style.backgroundColor = ballStyle : slc('.ball').style.backgroundColor = ballStyle1
    slc('#check').checked === true ? slc('.conteiner').style.backgroundColor = conteiner : slc('.conteiner').style.backgroundColor = conteiner1
    slc('#check').checked === true ? slc('.select').style.backgroundImage = select : slc('.select').style.backgroundImage = select1
    slc('#check').checked === true ? slc('.header-right p').style.color = headerRightp : slc('.header-right p').style.color = headerRightp1
    slc('#check').checked === true ? slc('.header-left h1').style.color = headerLefth1 : slc('.header-left h1').style.color = headerLefth11

    if (slc('#check').checked === true) {
        document.querySelectorAll('.mode').forEach(element => {
            element.childNodes[1].childNodes[3].style.color = 'black'
            element.style.backgroundColor = '#f0f3fa'
            element.childNodes[3].style.color = 'black'
        })
        document.querySelectorAll('.header')[0].style.backgroundColor = '#f8f9fe'
    } else {
        document.querySelectorAll('.mode').forEach(element => {
            element.style.backgroundColor = '#252b43'
            element.childNodes[1].childNodes[3].style.color = 'white'
            element.childNodes[3].style.color = 'white'
        })
        document.querySelectorAll('.header')[0].style.backgroundColor = '#20222f'
    }
}

slc('.select').addEventListener('click', mode)
