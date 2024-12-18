
document.getElementById('submit-quiz').addEventListener('click', function () {
    
    const correctAnswers = {
        q1: 'a',
        q2: 'a',
        q3: 'b',
        q4: 'a',
        q5: 'b',
        q6: 'a', 
        q7: 'a',
        q8: 'a',
        q9: 'a',
        q10: 'a'
    };

   
    let score = 0;

   
    for (const question in correctAnswers) {
        const userAnswers = document.getElementsByName(question); 
        for (let i = 0; i < userAnswers.length; i++) {
            if (userAnswers[i].checked && userAnswers[i].value === correctAnswers[question]) {
                score++;
                break; 
            }
        }
    }

   
    document.getElementById('quiz-result').style.display = 'block';
    document.getElementById('score').textContent = score;

    
    document.getElementById('quiz-content').style.display = 'none';
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementsByClassName("hamburger")[0]; 
    const cancel = document.getElementsByClassName("cancel")[0]; 
    const nav = document.getElementsByTagName("nav")[0];

    
    hamburger.addEventListener("click", function () {
        nav.classList.add("active");
        hamburger.style.display = "none";
        cancel.style.display = "block";
    });

    
    cancel.addEventListener("click", function () {
        nav.classList.remove("active");
        hamburger.style.display = "block";
        cancel.style.display = "none";
    });
});
