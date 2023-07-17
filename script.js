const btn = document.getElementById("btn");
const output =document.querySelector(".output");


const lifeQuotes = [
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Life is short, and it's up to you to make it sweet. - Sarah Louise Delany",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "The good life is one inspired by love and guided by knowledge. - Bertrand Russell",
    "Life isn't about finding yourself. It's about creating yourself. - George Bernard Shaw",
    "The purpose of our lives is to be happy. - Dalai Lama"
  ]
  
btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*lifeQuotes.length)
    output.textContent= lifeQuotes[random];


})
  