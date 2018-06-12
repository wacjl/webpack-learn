import './style/style.css';
import banner from './images/banner.jpg';
import xml from './sf.xml';
import print from './print'
const splitCode=()=>(import ('./component/splitCode'))
console.log(splitCode)
function component() {
  console.log(2)
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    var  img =document.createElement('img');
    img.src=banner;
    img.onclick=function(){
      splitCode().then(function(f){
         f.default()
      })
    }
    element.innerHTML = 'hello webpack test  方法 ';
    element.appendChild(img)
    element.classList.add('hello')
    return element;
  }
  
  document.body.appendChild(component());