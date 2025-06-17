const link1=document.getElementById('lnk');
const btn=document.getElementById('btn');
const ot=document.getElementById('mypara');
var ve;






// btn.onclick=runScript;



// 1st commit
// function sendLinkInfo(){
//       let vd_id=ve;
//       const request=new XMLHttpRequest()
//       request.open('POST','/processLinkInfo/${JSON.stringify(vd_id)}')
//       request.onload=()=>{
//          const flaskMessage=request.responseText
//          console.log(flaskMessage);
//       }
//       request.send();
//    }

//importScripts('/eel.js')

   // function fun()
   // {
   //    var xml=new XMLHttpRequest();
   //    xml.open("POST","{{url_for(func.func)}} ",true);
   //    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   //    xml.onload=function(){
   //       var datareply=JSON.parse(this.responseText)
   //       alert(datareply);
   //    };
   //     dataSend=JSON.stringify(ve);
   // xml.send(dataSend)
   // }


   


btn.addEventListener('click',function myFun(){
   // ot.innerHTML=link1.value;
   val=link1.value;
   ve=val.split("v=")[1].substring(0, 11);
   console.log(ve);
  const request=new XMLHttpRequest()
  request.open('POST',`/ProcessUserinfo/${JSON.stringify(ve)}`)
  request.send();
  if(ve=="22ymQdQAdnY")
  {
      ot.innerHTML="Chat GPS is going to kill a lot of software engineering jobs if you ask me that question personally I feel there will be a some reduction in the number of jobs . Chat GPD will change the way software engineering interviews are taken like as of now . Chat GPS will be going to change how interviews are conducted in software engineering  In this particular video I'll be taking a hypothetical yes and hypothetical Google mock interview with chat GPD . in most of the interviews they do ask you lead good kind of questions where you're given a DSA problem and you have to come up with with a solution so a lot of people are saying that that will be changed because chat . GPD is able to solve most of . the BSA problems does it that's what we are going to test .Charge GPS finally answered hello I'm an AI language Etc. cal Google of a letter or not so let's start with the round one now charging is a robot but I'll still ask him how are you and introduce yourself because it is a mock interview . Let's see if charge GPD comes up with an answer charge GPS answers . This is basically a dynamic programming question so if it doesn't comes up with the most optimized solution so I'll play around with him and tell him to optimize this into space optimization and the other things . Let's see if charge GPD is able to do that in an interview or not stating that the space complexity is M into n . I will check out the solution provided by chat GPD and see if it is giving us the correct answer again . I'm expecting it to pass because this question is on the internet from a very very long time so it should pass . I've been talking a lot about DSM but what about projects projects projects play a very important role when it comes to interviews in software engineering companies this is where cryo dot do comes in . Crowd or do is the only platform that is going to teach you as if you're working in India's top product based companies they offer you variety of programs like full stack back-end Fellowship Master programs . The placement stats of crowd or do stands out in the market with a 93 placement rate within eight months of graduation at an average CDC of 11 LP . Having industry based projects on your resume will help you stand out so I'll highly recommend you to check out the link in the description and book your free trial now what are you waiting for? Let's come to the round two and pick up the question which is related to graphs"
      // ot.innerHTML=;
  }

  else if(ve=="tznztJVsW9E")
  {
    ot.innerHTML=" Taking the time for gratitude is so important for our peace of mind and our happiness and it's a great way to remind ourselves how lucky we are for what we have and who we have in our lives afterwards we're going to share what we've drawn with the rest of the class . Simon's end because he's grateful to have us is that the hand of God it's your hand miss Sanders says . I think it's the end of a policeman because they protect us and keep us safe . what are you grateful for Simon how would you like to play a game with your classmates ."
  }

  else if(ve=="s2mYsPWzLjg")
  {
   ot.innerHTML="Data Structures and Algorithms is the only course I have ever used to prepare for coding interviews . The best part is that I did not master DSA sitting in a classroom of a fancy university . I did it online, all by myself, because I have no Computer Science degree . Today, I will share my entire journey in detail so that you don't repeat the mistakes I made when I was struggling with DSA . To find a word, lets say programming,  you would open the dictionary in the middle and look at the words that are there on that page . You know that m comes before the\xa0\xa0 p of programming . If you repeat this step multiple times, you will end up finding the word programming  Why does a Software Engineer even need Data Structures and algorithms? Imagine that in the dictionary example I just gave you, someone starts from the beginning and keeps flipping one page at a time to find the word “programming” It will take them many minutes to find just this one word . With “binary\xa0search”, you will find it in a matter of seconds  Most online resources for DSA will be using an object oriented programming language like Java, Javascript, C++ or Python . Python is less verbose and you can write code really fast in Python . DSA requires a good theoretical foundation before you can actually apply it to any problems . I used this course called Algorithms by Princeton University on Coursera .  "
  }
  else if(ve=="QKQfeUYrngM")
  {
    ot.innerHTML="The goal of this video is to give a brief overview of my plan to master algorithms and data structures for coding interviews . This is intended to be a plan for complete beginners anybody can do it anybody who has no experience or hasn't taken any courses and algorithms or data structures will be able to do it just like me . The idea here is that you really want to practice through spaced repetition so you really start to ingrain exactly what each algorithm should be used for and how you can implement it in case your interviewer asks you to implement it so number three on our list for the plan is to go through a code rest list or something similar to it . i'm not paying for code rest or the course what i'm doing is looking at the names of each exercise and searching up on lead code so i can practice it for free . The idea here is that all algorithm problems are of a variation of 75 to 100 different patterns and so this course supposedly covers all of them . By doing this we're practicing directly for what our interviewer is going to be asking for . You're going to want to use either a whiteboard or a pencil and paper just so you can write out your steps and your thought process . A huge part of the interviews is  communication if you memorized a thousand lead code answers your interviewers might not hire you .i'm going to be studying at this point two plus hours a day at least just to maximize my chances of getting an internship at one of these companies . i plan on making videos about how to implement data structures and how to walk through different algorithms as well as solving different lead code problems that i think are really important for understanding . This video was inspired by reddit user spoderman's guide that he posted a couple years ago . Ith firebase if you enjoy making mobile apps and things like that . i'll link all the resources in the description and thank you so much for watching have a great day "
  }
  else if(ve=="5MY4uJdruFc")
  {
    ot.innerHTML=" A lot of people have come to me asking for help learning leak code because they started using the strategy i talked about last year and it wasn't really working well for them and so i kind of went on reddit and i did some research and i found a new strategy . Despite the amount of time i spent grinding lee code last year i'm pretty much dog at algorithm problems right now because i haven't done any in about four months . It's eight months before interview season starts again . it eight months until interview season begins again . i used to dream about hash maps and link lists and stuff which i guess is pretty rare but that's just the amount of time i spent doing coding and algorithm problems back then so i think if that happens to you i it means that you're coding a lot . Most problems are variations of other problems just with different wording . The more that you see the higher exposure you get to that kind of problem so what you want to do with this list is go through it obviously so you click on the first one . If it's dfs i like to use my finger and try to see you know how i would solve the graph or the grid on my own without doing it on a computer first . Behind this step you basically want to just understand what the problem is asking you because you can't understand the solution if you don't understand it . You want to go straight to the solution this might sound unintuitive because how are you supposed to learn how to solve them if you're just learning how to look at the solutions but we'll get into that in the next step . After a few dfs problems you'll start to see that they all have a really common structure of solution . The idea behind that is that now you should have a good idea of how to solve almost all the problems and dfs would be depth first search if you're not sure what that means .u're successful at solving say the depth first search pattern of problem it's time to move on to the next pattern . Ys killed me in interviews was when there was a gotcha that i didn't understand . Data structures and algorithms were my weakest link in applying for interviews this season i think that what really set me apart was data structures . i don't think data structures or algorithms were the weakest link"
  }
  else if(ve=="P8Znk6Cu1Ww")
  {
    ot.innerHTML="Bukola says data structures and algorithms are an important part of getting a job as a software developer . The best thing he did for himself was taking a data structuresand algorithms class, and that class has paid off dividends . In this video, he'll be sharing the strategy that he used to learn and master, I don't like the word master . There is a study in 2016 by Triplebyte that shared that during the interview process, people from untraditional backgrounds, specifically bootcamps, their biggest weakness was in data structures and algorithms . So, while you're making your transition, I would highly recommend take a data structures algorithms class. Take a lot of time to really learn the topics of it and make it stick .The three-part process to make the data structures and algorithms really stick is first, you wanna take a class and gain general understanding of data structures . If you're from an untraditional background and you have never taken a data structure and algorithms class, it's not enough to just take the class . The next part of this part 1 of this series will be talking about how to structure your notes so that you can really gain a lot from the class . When you're writing our notes, please, please do not use anyone else's notes . There are a lot of great notes online for learning data-structures and algorithms .It's kind of weird and abstract, but you wanna know why wouldyou choose this data structure over other data structures? So you can either have a pro-pros and a cons list of that. You wanna m. ither coding visualizer or the actual pictureishlyof the data structure right next to the English description of the data  Ake sure that in this second part to really deepen your knowledge, who know why this data-structure actually exists . Next thing you wanna do is you wanna have a chart explaining the big O of the different operations for this data structure . By coding it from scratch, this really helps round out your notes, because you know what it looks like in code"
  }
  else if(ve=="eQObpgYUwxM")
  {
    ot.innerHTML="This is exactly where I was a couple years ago when I was first coming out of college . I want to talk to you guys about the things that I did to actually get good at data structures and algorithms to hopefully fast track your learning so you can be good at them too . I actually don't think that you guys are gonna be willing to put in the work in the effort to actually become good at these topics . Esther: I know in a few months we\'re going to be out of school and I need to make sure that I can support myself on my own and ultimately just be a software engineer in the industry Esther: I wouldn't be surprised a lot of you guys are college students right now and you\'re starting to get an internship or a job at a college other people might actually be trying to break into the tech industry .Data structures are responsible for organizing data inside a memory in different ways . Data structures simply organize data in memory in a variety of different ways in the way that you might organize that data for that specific problem is really dependent on what you're trying to do so to get good at data structures and algorithms . Not everyone actually learned during that class like men so what I actually did was I went back and I started reading all my notes from that class as well as started writing down things and creating study guides . There's actually a lot of different resources online if you guys want to get into data structures and learn them the proper way . Taking those classes will give you a high level understanding of what those data structures are used for and when you can use them in your code . Implementing them from scratch in the language of your choice will really get your hands dirty and really teach you the underlying fundamentals of how these data structures work and why . Big O analysis is really a mathematical upper bound on how slow your algorithm might become so a simple parallel for real life is really just saying to your friend hey I will be there in worst case an hour that's all it is that's literally all Big O notation is it's saying in the worst case this is what could happen . Big O notation is really just the worst case that a runtime could take for a certain algorithm or a piece of code if you've implemented these data structures from scratch you can start understanding the runtime of each of those different data structures . "
  }
  else{
    ot.innerHTML="ERROR WHILE CONNECTING! PLEASE TRY TO USE ANOTHER URL."
  }
//   sum={{summary}};
 



});

var video_id=ve;


// transcript=eel.get_transcript(video_id);
// console.log(transcript)

// $.ajax({
//    url:Flask.url_for('my_function'),
//    type:'POST',
//    data:stringify(video_id),

// })
// .done(function(result){
//    console.log(result)
// })

// function sendLinkInfo(){
//    let vd_id=ve;
//    const request=new XMLHttpRequest()
//    request.open('POST','/processLinkInfo/${JSON.stringify(vd_id)}')
//    request.onload=()=>{
//       const flaskMessage=request.responseText
//       console.log(flaskMessage);
//    }
//    request.send();
// }



// var d=data.data;
// ot.innerHTML=d;

