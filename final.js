function ready () {

    let add = document.strt.add;
    let sbtrct = document.strt.sub;
    let mltply = document.strt.mlt;
    let dvd = document.strt.dvd;
    let strt = document.strt;
    let addition = document.addition;
    let start = document.start.start;
    let startForm = document.start;
    let tryAgain = document.again.tryAgain;
    let again = document.again;
    let i = 0
    let m = 0;
    let n = 0
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
            if (timeSpent < 60) {
                m = m
            } else {
                m++
                timeSpent = 0
            }
            if (timeSpent < 10) {
                time.innerHTML = "<h2>"+ m + ':' + n  + timeSpent + "<h2>"
            } else {
                time.innerHTML = "<h2>"+ m + ':'  + timeSpent + "<h2>"
            }
            
            document.body.append(time)
            console.log(timeSpent)
        }
        if (i < 30) {
            //setInterval and setTimeout are things I learned in trying to make this timer
            setInterval(() => count(), 1000);
        }
    }

    
    add.onclick = function() {
        timer();
        strt.classList.add("hidden")
        console.log(start)
        start.classList.remove("hidden")
        startForm.onsubmit = function(e) {
            e.preventDefault();
        }
        start.onclick = function add() {
            start.classList.add("hidden")
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
                    if (i < 29) {
                        add();
                    } else {
                        i = 0
                        let endTime = document.createElement('time')
                        lastTime = timeSpent + m*60
                        endTime.innerHTML = '<h1>Your time was ' + lastTime + ' seconds</h1>'
                        time.classList.add("hidden")
                        document.body.prepend(tryAgain)
                        document.body.append(endTime)
                        document.body.append(tryAgain)
                        again.onsubmit = function (e) {
                            e.preventDefault();
                        }
                        tryAgain.classList.remove("hidden");
                        tryAgain.onclick = function() {
                            window.location.reload();
                        }
                    }
                    i++
                }
            }
        }
    }   

    sbtrct.onclick = function() {
        timer();
        strt.classList.add("hidden")
        console.log(start)
        start.classList.remove("hidden")
        startForm.onsubmit = function(e) {
            e.preventDefault();
        }
        start.onclick = function sbtrct() {
            start.classList.add("hidden")
            let ding = document.getElementById("ding");
            strt.classList.add("hidden")
            let sbtrctQuests = []
            sbtrctQuests.push(document.subtraction.Q2)
            let inptbx = sbtrctQuests[0];
            inptbx.classList.remove("hidden")
            let question = document.createElement('question');
            let number1 = Math.floor(Math.random() * 60);
            let number2 = Math.floor(Math.random() * 60);
            while (number1 < number2) {
                number1 = Math.floor(Math.random() * 60);
                number2 = Math.floor(Math.random() * 60);
            }
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
                    if (i < 29) {
                        sbtrct();
                    } else {
                        i = 0
                        let endTime = document.createElement('time')
                        lastTime = timeSpent + m*60
                        endTime.innerHTML = '<h1>Your time was ' + lastTime + ' seconds</h1>'
                        time.classList.add("hidden")
                        document.body.prepend(tryAgain)
                        document.body.append(endTime)
                        document.body.append(tryAgain)
                        again.onsubmit = function (e) {
                            e.preventDefault();
                        }
                        tryAgain.classList.remove("hidden");
                        tryAgain.onclick = function() {
                            window.location.reload();
                        }
                    }
                    i++
                }
            }
        }

    }
    mltply.onclick = function() {
        timer();
        strt.classList.add("hidden")
        console.log(start)
        start.classList.remove("hidden")
        startForm.onsubmit = function(e) {
            e.preventDefault();
        }
        start.onclick = function mltply() {
            start.classList.add("hidden")
            document.body.append(time)
            let ding = document.getElementById("ding");
            strt.classList.add("hidden")
            let mltplyQuests = []
            mltplyQuests.push(document.multiplication.Q3)
            let inptbx = mltplyQuests[0];
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
                    if (i < 29) {
                        mltply();
                    } else {
                        i = 0
                        let endTime = document.createElement('time')
                        lastTime = timeSpent + m*60
                        endTime.innerHTML = '<h1>Your time was ' + lastTime + ' seconds</h1>'
                        time.classList.add("hidden")
                        document.body.prepend(tryAgain)
                        document.body.append(endTime)
                        document.body.append(tryAgain)
                        again.onsubmit = function (e) {
                            e.preventDefault();
                        }
                        tryAgain.classList.remove("hidden");
                        tryAgain.onclick = function() {
                            window.location.reload();
                        }
                    }
                    i++
                }
            }
        }

    }
    dvd.onclick = function() {
        timer();
        strt.classList.add("hidden")
        console.log(start)
        start.classList.remove("hidden")
        startForm.onsubmit = function(e) {
            e.preventDefault();
        }
        start.onclick = function dvd() {
            start.classList.add("hidden")
            let ding = document.getElementById("ding");
            let dvdQuests = []
            dvdQuests.push(document.division.Q1)
            let inptbx = dvdQuests[0];
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
                        let endTime = document.createElement('time')
                        lastTime = timeSpent + m*60
                        endTime.innerHTML = '<h1>Your time was ' + lastTime + ' seconds</h1>'
                        time.classList.add("hidden")
                        document.body.prepend(tryAgain)
                        document.body.append(endTime)
                        document.body.append(tryAgain)
                        again.onsubmit = function (e) {
                            e.preventDefault();
                        }
                        tryAgain.classList.remove("hidden");
                        tryAgain.onclick = function() {
                            window.location.reload();
                        }
                    }

                }
            }
        }
    }   

}


document.addEventListener("DOMContentLoaded", ready);