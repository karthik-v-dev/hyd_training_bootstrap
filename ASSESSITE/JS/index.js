  document.addEventListener("DOMContentLoaded", function () {
    meadiaQuery();
    learnerCount();
  });

  const meadiaQuery=()=> {
    if (window.innerWidth <= 652) {
      let un_order = document.querySelector(".navbar-nav");
      un_order.classList.add("text-center");

      let nav_list = document.querySelectorAll(".nav-item");
      nav_list.forEach((ele)=>{
        ele.style.fontSize ="large";});

      let division = document.querySelector(".px-10");
      division.style.padding = "2rem 0px";

      let user_count = document.querySelectorAll(".level-item");
      console.log(user_count);
      user_count.forEach((ele)=>{
        ele.classList.add("mobile-modal-mb-32");
      })
      console.log(user_count);
      // user_count.classList.add()
      let  d_block= document.querySelectorAll(".row");
      console.log(d_block);
      for(let i=0; i<d_block.length;i++){
        if( i==2){
          continue;
        }
        d_block[i].classList.add('row-block');
        d_block[i].classList.remove('row');
      }
      // d_block.forEach((ele)=>{
      //   ele.classList.add('row-block');
      //   ele.classList.remove('row');
      // })
      let pl_40 = document.querySelectorAll(".pl-40");
      pl_40.forEach((ele)=>{
           ele.style.paddingLeft ="40px";
           ele.style.marginTop ="30px";
      })

    }
    if (window.innerWidth <= 992 && window.innerWidth >652) {
      let nav_list = document.querySelectorAll(".nav-item");
      nav_list.forEach((ele)=>{
        ele.style.fontSize ="6px";
      })
    }
  }
  const learnerCount = () => {
    var counts;
    var count = document.querySelectorAll(" .js-count-up");
    for (let i = 0; i < count.length; i++) {
      let level = parseInt(count[i].dataset.value);
      for (let j = 0; j < level; j++) {
        counts = setInterval(updated(count[i], level, j), 3000);
      }
    }

    function updated(count, level, upto) {
      count.innerHTML = ++upto;
      if (upto === level) {
        upto = 0;
        clearInterval(counts);
      }
    }
  };

