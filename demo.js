//set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.currentTarget.classList;
        if (style.contains("decrease")) {
            count--;
        }
        //value.textContent = count;
        if (style.contains("increase")) {
            count++;
        }
        //value.textContent = count;
        if (style.contains("reset")) {
            count = 0;
        }
        value.textContent = count;
    });
});

console.log(btns);
