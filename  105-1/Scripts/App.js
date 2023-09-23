//event listeners: button click event

//vanilla solution - - this is pure javascript
document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("content").textContent = "Hello, from vanilla JS!";
});
//query solution
$("#btn").click(function(){
    $("#content").text ("Hello, from jQuery!");
    });

    //2do vanilla solution -- plain javascript
    //when you click on the button,hide the content
document.getElementById("content").style.display = "block";
document.getElementById("btn").addEventListener("click", function(){document.getElementById("content").style.display = "block";});
//jquery solution
$("#content").hide();
$("#btn").click(function(){
    $("#content").show();
});
//change the color of background

//vanilla javascript
document.getElementById("colorBtn").addEventListener("click",function(){
    const contentDic = document.getElementById("content");
    const currentColor = getComputedStyle(contentDiv).background;
    if (currentColor==="rgb(255,0,0)"){
        contentDic.style.background = "blue";
    } else {
        contentDic.style.background = "red";}
});