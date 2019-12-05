function ready () {

    let add = document.strt.add;
    let sbtrct = document.strt.sub;
    let mltply = document.strt.mlt;
    let dvd = document.strt.dvd;
    let strt = document.strt;
    let addition = document.addition;
    let i = 0
    let timeSpent = 0
    let time = document.createElement('time')
    time.className = "timer"
    time.innerHTML = "<h5>" + timeSpent + "</h5>"

    strt.onsubmit = function (e) {
        e.preventDefault();
    }

    function timer () {
        document.body.append(time)
        function count() {
            timeSpent++;
            document.body.prepend(time);
            time.innerHTML = "<h2>" + timeSpent + "<h2>"
            document.body.append(time)
            console.log(timeSpent)
        }
        setTimeout(() => count(), 100);
    }
    
    add.onclick = function add() {
        let ding = document.getElementById("ding");
        strt.classList.add("hidden")
        let addQuests = []
        addQuests.push(document.addition.Q1)
        let inptbx = addQuests[0];
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
                ding.play();
                question.classList.add('hidden')
                if (i < 30) {
                    add();
                } else {
                    i = 0
                    window.location.reload();
                }
                i++
            }
        }
    }

    sbtrct.onclick = function sbtrct() {
        let ding = document.getElementById("ding");
        strt.classList.add("hidden")
        let sbtrctQuests = []
        sbtrctQuests.push(document.subtraction.Q2)
        let inptbx = sbtrctQuests[0];
        console.log(inptbx)
        inptbx.classList.remove("hidden")
        let question = document.createElement('question');
        let number1 = Math.floor(Math.random() * 60);
        let number2 = Math.floor(Math.random() * 60);
        question.innerHTML = '<p>' + number1 + ' - ' + number2 + '</p>';
        document.body.append(question);
        subtraction.onsubmit = function (e) {
            e.preventDefault();
        }
        inptbx.onchange = function () {
            let answer = this.value
            if (answer == number1 - number2) {
                this.value = ""
                ding.play();
                question.classList.add('hidden')
                if (i < 30) {
                    sbtrct();
                } else {
                    i = 0
                    window.location.reload();
                }
                i++
            }
        }

    }
    mltply.onclick = function mltply() {
        let ding = document.getElementById("ding");
        strt.classList.add("hidden")
        let mltplyQuests = []
        mltplyQuests.push(document.multiplication.Q3)
        let inptbx = mltplyQuests[0];
        console.log(inptbx)
        inptbx.classList.remove("hidden")
        let question = document.createElement('question');
        let number1 = Math.floor(Math.random() * 12);
        let number2 = Math.floor(Math.random() * 12);
        question.innerHTML = '<p>' + number1 + ' x ' + number2 + '</p>';
        document.body.append(question);
        multiplication.onsubmit = function (e) {
            e.preventDefault();
        }
        inptbx.onchange = function () {
            let answer = this.value
            if (answer == number1 * number2) {
                this.value = ""
                ding.play();
                question.classList.add('hidden')
                if (i < 30) {
                    mltply();
                } else {
                    i = 0
                    window.location.reload();
                }
                i++
            }
        }

    }
    dvd.onclick = function dvd() {

        let ding = document.getElementById("ding");
        strt.classList.add("hidden")
        let dvdQuests = []
        dvdQuests.push(document.division.Q1)
        let inptbx = dvdQuests[0];
        console.log(inptbx)
        inptbx.classList.remove("hidden")
        let question = document.createElement('question');
        let number1 = Math.floor(Math.random() * 40);
        let number2 = Math.floor(Math.random() * 40);
        while (number1 % number2 != 0) {
            number1 = Math.floor(Math.random() * 40);
            number2 = Math.floor(Math.random() * 40);
        }
        question.innerHTML = '<p> ' + number1 + '/' + number2 + ' </p>';
        document.body.append(question);
        division.onsubmit = function (e) {
            e.preventDefault();
        }
        inptbx.onchange = function () {
            let answer = this.value
            if (answer == number1 / number2) {
                i ++
                this.value = ""
                ding.play();
                question.classList.add('hidden')
                if (i < 30) {
                    dvd();
                } else {
                    i = 0
                    window.location.reload();
                }
                
            }
        }
    }

}


document.addEventListener("DOMContentLoaded", ready);