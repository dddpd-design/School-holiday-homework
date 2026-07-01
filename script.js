function showPage(id){

    document.querySelectorAll(".page").forEach(page=>{

        page.classList.remove("active");

    });


    document.getElementById(id).classList.add("active");

}




const input = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");




function sendMessage(){


    const question = input.value.trim();


    if(question==="") return;



    const replies = {


        hello:
        "Hello 👋 I am ready to help you study today!",


        hi:
        "Hi! 🤖 What would you like to learn today?",


        hey:
        "Hey! 📚 Ask me any study question.",


        goodmorning:
        "Good morning ☀️ Let's start learning!",


        morning:
        "Good morning! Ready for today's goals?",


        goodafternoon:
        "Good afternoon 📖 Let's make progress.",


        goodnight:
        "Good night 🌙 Rest well!",


        howareyou:
        "I am doing great 🤖 Ready to help you study!",


        thanks:
        "You're welcome ⭐ Keep learning!",


        thankyou:
        "Anytime! 📚",



        science:
        "Science becomes easier when you understand concepts instead of memorising.",


        photosynthesis:
        "Photosynthesis is how plants prepare food using sunlight, water and carbon dioxide 🌿",


        physics:
        "Physics explains how objects, energy and forces work.",


        chemistry:
        "Chemistry studies substances and their reactions.",


        math:
        "Math improves with regular practice and problem solving 📐",


        maths:
        "Math improves with regular practice and problem solving 📐",


        pythagoras:
        "Pythagoras theorem: a² + b² = c²",


        social:
        "Social Science helps you understand history, geography and society.",


        english:
        "English improves with reading, writing and communication practice.",


        hindi:
        "Hindi improves through reading and writing practice.",


        sanskrit:
        "Sanskrit requires focus on grammar and vocabulary.",


        ai:
        "AI is the study of machines that can learn and solve problems 🤖",


        data:
        "Data Science combines statistics, programming and analysis 📊",


        it:
        "IT focuses on computers, software and technology 💻",


        exam:
        "Before exams: revise concepts, practice questions and stay calm 💯",


        homework:
        "Break homework into smaller tasks and finish step by step.",


        study:
        "Try focused study sessions with short breaks for better concentration."


    };



    let answer =
    "I am still learning 🤖 Try asking about subjects, exams, or study tips.";



    Object.keys(replies).forEach(key=>{

        if(question.toLowerCase().includes(key)){

            answer=replies[key];

        }

    });




    const userBubble=document.createElement("div");

    userBubble.className="bubble user";

    userBubble.innerHTML="👤 "+question;



    const aiBubble=document.createElement("div");

    aiBubble.className="bubble ai";

    aiBubble.innerHTML="🤖 Thinking...";




    chatBox.appendChild(userBubble);

    chatBox.appendChild(aiBubble);



    input.value="";


    chatBox.scrollTop=chatBox.scrollHeight;



    setTimeout(()=>{


        aiBubble.innerHTML="🤖 "+answer;


        chatBox.scrollTop=chatBox.scrollHeight;


    },800);


}





input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});






document.querySelectorAll(".stars button").forEach(star=>{


    star.addEventListener("click",function(){


        document.querySelectorAll(".stars button").forEach(btn=>{

            btn.style.opacity="0.4";

        });



        this.style.opacity="1";


    });


});






function openSubject(subject){


    showPage("chat");


    input.value =
    "How to study " + subject + " concepts";


}





function toggleTheme(){


    document.body.classList.toggle("dark");


}