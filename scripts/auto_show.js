var auto_show = document.getElementById("auto_show")

var list = [
  "Web Development",
  "Game Development",
  "React",
  "Mobile Appliaction Development",
  "Spring Boot",
  "Software Development",
  "JavaFx",
  "C/C++",
  "Algorithms"
]

const LINE_COOLDOWN = 4
const WRITE_COOLDOWN = 40
const DELETE_COOLDOWN = 10
const LOOP_TIME = 50

function shuffle(list){
  if(list.length<=1)
    return list;

  var mid = Math.floor(list.length/2)
  var half1 = shuffle(list.slice(0,mid))
  var half2 = shuffle(list.slice(mid))

  res = []
  while(half1.length !== 0 || half2.length !== 0){
    var r = Math.random()
    if (r<=0.5){
      res.push(half1.length!==0?half1.pop():half2.pop())
    }else{
      res.push(half2.length!==0?half2.pop():half1.pop())
    }
  }
  return res
}

list = shuffle(list)

var cur_item = 0
var cur_letter = 0
var write = true
auto_show.innerText=""
var coldown = WRITE_COOLDOWN
var line_write = true
var line_coldown = LINE_COOLDOWN

function rewrite(){
  
  if(coldown){
    coldown--
  }else if(write){
    auto_show.innerText = list[cur_item].slice(0 , cur_letter)
    if(cur_letter===list[cur_item].length){
      write = false
      coldown = WRITE_COOLDOWN
    }
    cur_letter++
  }else{
    cur_letter--
    auto_show.innerText = list[cur_item].slice(0 , cur_letter)
    if(cur_letter===0){
      write = true
      cur_item = (cur_item+1)%list.length
      coldown = DELETE_COOLDOWN
    }
  }

  line_coldown--
  if(line_coldown<=0){
    line_write = !line_write
    line_coldown = LINE_COOLDOWN
    if(line_write){
      auto_show.innerText+="|"
    }else{
      auto_show.innerText = auto_show.innerText.replaceAll("|","")
    }
  }
  
}

setInterval(rewrite,LOOP_TIME)