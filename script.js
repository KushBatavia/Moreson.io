window.onscroll = function() {scroll()};
document.getElementById('menu-box').onclick = function() {menu()};


function scroll(){

    let x = window.scrollY;
    if (x>120){
    
        document.getElementById('logobox').style.height = '5rem';
        document.getElementById('navigation').style.backgroundColor = '#000';
    
    }
    if (x<120){
    
        document.getElementById('logobox').style.height = '10rem';
        document.getElementById('navigation').style.backgroundColor = 'rgba(0, 0, 0, 0)';
    
    }

}

function menu(){

    document.getElementById('bar1').classList.toggle('t1');
    document.getElementById('bar2').classList.toggle('t2');
    document.getElementById('bar3').classList.toggle('t3');
    document.getElementById('sidemenu').classList.toggle('t4');

    // if (document.getElementById('logobox').style.height = '10rem'){

    //     document.getElementById('menubox').onclick = document.getElementById('logobox').style.height = '5rem';

    // }

    // if (document.getElementById('logobox').style.height == '5rem'){

    //     document.getElementById('menubox').onclick = document.getElementById('logobox').style.height = '10rem';

    // }
    


}

function closemenu(){

    document.getElementById('bar1').classList.remove('t1');
    document.getElementById('bar2').classList.remove('t2');
    document.getElementById('bar3').classList.remove('t3');
    document.getElementById('sidemenu').classList.remove('t4');

}