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
    let z = 0;
    let timeSpent = 000
    let time = document.createElement('h2')
    time.className = "timer"
    time.innerHTML = "<h2>" + timeSpent + "</h2>"

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
        }
        if (i < 30) {
            //setInterval and setTimeout are things I learned in trying to make this timer
            setInterval(() => count(), 1000);
        }
    }

    
    add.onclick = function() {
        strt.classList.add("hidden")
        startForm.classList.remove("hidden")
        startForm.onsubmit = function(e) {
            e.preventDefault();
        }
        start.onclick = function add() {
            if (z < 1) {
                timer();
                z++
            }
            startForm.classList.add("hidden")
            let ding = document.getElementById("ding");
            strt.classList.add("hidden")
            let addQuests = []
            addQuests.push(document.addition.Q1)
            let inptbx = addQuests[0];
            let question = document.createElement('question');
            let number1 = Math.floor(Math.random() * 60);
            let number2 = Math.floor(Math.random() * 60);
            question.innerHTML = '<p>' + number1 + ' + ' + number2 + '</p>';
            question.className = "question"
            document.body.prepend(time);
            document.body.append(question);
            document.body.append(time);
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
                        z = 0
                    }
                    i++
                }
            }
        }
    }   

    sbtrct.onclick = function() {
        strt.classList.add("hidden")
        startForm.classList.remove("hidden")
        startForm.onsubmit = function(e) {
            e.preventDefault();
        }
        start.onclick = function sbtrct() {
            if (z < 1) {
                timer();
                z++
            }
            startForm.classList.add("hidden")
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
            question.className = "question"
            document.body.prepend(time);
            document.body.append(question);
            document.body.append(time);
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
                            z = 0;
                        }
                         i++
                    }
                }
            }

        }
    }
    mltply.onclick = function() {
        strt.classList.add("hidden")
        startForm.classList.remove("hidden")
        startForm.onsubmit = function(e) {
            e.preventDefault();
        }
        start.onclick = function mltply() {
            if (z < 1) {
                timer();
                z++
            }
            startForm.classList.add("hidden")
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
            question.className = "question"
            question.innerHTML = '<p>' + number1 + ' x ' + number2 + '</p>';
            document.body.prepend(time);
            document.body.append(question);
            document.body.append(time);
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
                            z = 0
                        }
                    }
                    i++
                }
            }
        }

    }
    dvd.onclick = function() {
        strt.classList.add("hidden")
        startForm.classList.remove("hidden")
        startForm.onsubmit = function(e) {
            e.preventDefault();
        }
        start.onclick = function dvd() {
            if (z < 1) {
                timer();
                z++
            }
            startForm.classList.add("hidden")
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
            question.className = "question"
            document.body.prepend(time);
            document.body.append(question);
            document.body.append(time);
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
                            z = 0
                        }
                    }

                }
            }
        }
    }   

}


document.addEventListener("DOMContentLoaded", ready);