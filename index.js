alert("Let's answer the Quiz!")

        var score = 0;

        let Q1;
        Q1 = prompt("HTML stands for? ");

        if(Q1 === ("HyperText Markup Language")) {
            console.log("You are Correct!");
            score = score + 1;
        }
        else if(Q1 != ("HyperText Markup Language")){
            console.log("You are Incorrect!");
        }

        let Q2;
        Q2 = prompt("CSS Stands for? ");

        if(Q2 === ("Cascading Style Sheets")) {
            console.log("You are Correct!");
            score = score + 1;
        }
        else if(Q2 != ("Cascading Style Sheets")) {
            console.log("You are Incorrect!");
        }

        let Q3;
        Q3 = prompt("Who is the Father of the Computer? ");

        if(Q3 === ("Charles Babbage")) {
            console.log("You are Correct!");
            score = score + 1;
        }
        else if (Q3 != ("Charles Babbage")) {
            console.log("You are Incorrect!");
        }

        let Q4;
        Q4 = prompt("3+6/2 = ");

        if(Q4 == 6) {
            console.log("You are Correct!");
            score = score + 1;
        }
        else if(Q4 != 6) {
            console.log("You are Incorrect!");
        }

        let Q5;
        Q5 = prompt("1+1 = ");

        if(Q5 == 2) {
            console.log("You are Correct!");
            score = score + 1;
        }
        else if(Q5 != 2) {
            console.log("You are Incorrect!");
        }

        alert("You are DONE!");

        alert("View Scores");
