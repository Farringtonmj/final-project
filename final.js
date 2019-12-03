function ready () {
    let add = document.strt.add;
    let sbtrct = document.strt.sub;
    let mltply = document.strt.mlt;
    let dvd = document.strt.dvd;
    let strt = document.strt;
    let addition = document.addition;
    let i = 0


    strt.onsubmit = function (e) {
        e.preventDefault();
    }
    
    add.onclick = function add() {
        strt.classList.add("hidden")
        let addQuests = []
        addQuests.push(document.addition.Q1)
        let inptbx = addQuests[0];
        console.log(inptbx)
        let question = document.createElement('question');
        let number1 = Math.floor(Math.random() * 60);
        let number2 = Math.floor(Math.random() * 60);
        question.innerHTML = '<p>' + number1 + ' + ' + number2 + '</p>';
        document.body.append(question);
        inptbx.classList.remove("hidden")
        addition.onsubmit = function (e) {
            e.preventDefault();
        }
        inptbx.onchange = function () {
            let answer = this.value
            if (answer == number1 + number2) {
                this.value = ""
                question.classList.add('hidden')
                add();
            }
        }
    }

    sbtrct.onclick = function () {

    }
    mltply.onclick = function () {

    }
    dvd.onclick = function () {

    }

}


document.addEventListener("DOMContentLoaded", ready);