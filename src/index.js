document.querySelector('.btn').addEventListener('click', main);

function main(){
  dataLength = Math.floor(Math.random() * getData().length);
  data = getData()[dataLength];
  updateData(data);
}

function updateData(data){
  document.querySelector('.author').innerText = "-" + data.author;          document.querySelector('.quote').innerText = data.quote;
  document.body.style.background = dynamicColor();
}

function getData(){
  let url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
  
  let promise = axios({
    method: 'get',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: url
  }).then(function (response) {
    console.log(response.data);
  });
  
  
  return [
    {author: 'Richard Bach', quote: 'What the caterpillar calls the end of the world, the master calls a butterfly.'},   
    {author: 'Ralph Emerson', quote: 'Nature is a mutable cloud which is always and never the same. '},
    {author: 'Melody Beattie', quote: 'Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.'},    
    {author: 'Seth Godin', quote: 'The cost of being wrong is less than the cost of doing nothing.'},

  ]
}

function dynamicColor(){
  let colors = ["#FF5733 ", "#FA8072", "#DC143C", "#FF1493", "#FF8C00", "#FFFF00", "#BDB76B", "#FF00FF", "#9370DB", "#9400D3", "#7FFF00"];
  return colors[Math.floor(Math.random() * colors.length)];
}