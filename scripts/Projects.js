const project_template = document.getElementById("project_template")
const tag_template = document.getElementById("tag_template")
const projscts_handler = document.getElementById("projscts_handler")



fetch("projects_data.json")
.then(res=>res.json())
.then(datas => {
  console.log(datas);
  
  datas.forEach(data=>{
    var clone = project_template.content.cloneNode(true)
    clone.querySelector(".title").innerText = data.title
    clone.querySelector(".desc").innerText = data.desc
    clone.querySelector(".link").innerText = data.link.text
    clone.querySelector(".link").href = data.link.href
    
    var tags = clone.querySelector(".tags")
    data.tags.forEach(tag=>{
      var tag_clone = tag_template.content.cloneNode(true)
      tag_clone.querySelector("p").innerText = tag
      tags.appendChild(tag_clone)
    })
    clone.querySelector(".images").src = "images/"+data.images[0]
    let index = 0;

    setInterval(image_ref=>{
      index=(index+1)%data.images.length
      image_ref.src = "images/"+data.images[index]
    },1000,clone.querySelector(".images"))
    projscts_handler.appendChild(clone)
  })
})