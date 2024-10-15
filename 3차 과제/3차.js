const naver = document.querySelector("#naver");

naver.addEventListener('click', function(){
        location.href="http://www.naver.com"
});

const you = document.querySelector("#you");

you.addEventListener('click', function(){
        location.href="https://www.youtube.com/"
});

const kh = document.querySelector("#kh");

kh.addEventListener('click', function(){
        location.href="https://khedu.co.kr/main/main.kh"
});

const net = document.querySelector("#net");

net.addEventListener('click', function(){
        location.href="https://www.netflix.com/browse"
});






const navericon = document.querySelector("#naver");

navericon.addEventListener('mouseover', function(){
    navericon.style.backgroundColor = "#E8E8E9";
})

navericon.addEventListener('mouseout', function() {
    navericon.style.backgroundColor = "";
});



const youicon = document.querySelector("#you");

youicon.addEventListener('mouseover', function(){
    youicon.style.backgroundColor = "#E8E8E9";
})

youicon.addEventListener('mouseout', function(){
    youicon.style.backgroundColor = "";
})


const khicon = document.querySelector("#kh");

khicon.addEventListener('mouseover', function(){
    khicon.style.backgroundColor = "#E8E8E9";
})

khicon.addEventListener('mouseout', function(){
    khicon.style.backgroundColor = "";
})


const neticon = document.querySelector("#net");

neticon.addEventListener('mouseover', function(){
    neticon.style.backgroundColor = "#E8E8E9";
})


neticon.addEventListener('mouseout', function(){
    neticon.style.backgroundColor = "";
})




const hidden = document.querySelector("#hidden");


hidden.addEventListener('click', function(){
    const open = document.querySelector("#open");
    
    if(open.style.display == 'none'){
        open.style.display = 'block';
    } else{
        open.style.display = 'none';
    }
})

