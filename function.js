/*
* @Author: 木木
* @Date:   2017-09-22 17:43:58
* @Last Modified by:   木木
* @Last Modified time: 2017-09-23 08:42:35
*/



// 找和某个元素节点最近的的下一个元素节点
// 获取element后面所有的兄弟元素：找到父元素=>获取父元素下的所有子元素，截取
// function next (element,tagname){
//   let parent = element.parentNode;
//   let child = parent.children;
//   let index = 0;
//   for(let i =0;i<child.length;i++){
//   	if (child[i]==element){
//   		index=i;
//   		break;
//   	}
//   }
// let nextall=Array.from(child).slice(index+1);
// for(let i=0;i<nextall.length;i++){
// 	if (nextall[i].nodeName==tagname.toUpperCase()) {
// 		return nextall[i]
// 	}
// }
// return null;
// }



// while方法
function next(element,tagname){
	let nexts=element.nextElementSibling;
	if(nexts=null){
		return null;
	}
    while(nexts.nodeName!=tagname.toUpperCase()){
		nexts=nexts.nextElementSibling;
	if (nexts=null) {
		return null;
	}
	if (nexts.nodeName==tagname.toUpperCase()) {
		return nexts;
	}
}
}


//   let box2 = document.querySelector('.box2')
//   console.log(box2)
//   let p1= document.querySelector('.p1')
// console.log(next(box2,'div'))



// closed   找他所有的的父元素   while

function closed (element){
if (element.nodeName=='BODY'||element.nodeName=='HTML') {
	return;
}
 let arr=[];
 let parent=element.parentNode;
if (element.nodeName!='BODY') {
	arr.push(parent);
	parent=parent.parentNode;
	}
}
return arr;
}






   // insertAfter(element,position)---将element元素插入position后面
   // element----要插入的元素
   // position---要插入的位置


function insertAfter(element,position){
      let next =  position.nextElementSibling;
      let parent = position.parentNode;
      if (next) {
      	parent.insertBefore(element,next)
      }else{
      	parent.appendChild(element)
      }
	}




// 	HTMLElement.prototype.insertAfter()=function(element){
// 	 let next =  this.nextElementSibling;
//       let parent = this.parentNode;
//       if (next) {
//       	parent.insertBefore(element,next)
//       }else{
//       	parent.appendChild(element)
//       }
// }



// 将一个元素插入到父元素里的第一个子元素前面
function prepenchild(element,position){
	let first = position.firstElementChild;
	let parent = position.parentNode;
	if (first) {
		parent.insertBefore(element,first)
	}else{
		parent.appendChild(element)
	}
}


// 将一个元素插入到父元素里的第一个子元素前面
      HTMLElement.prototype.prepenchild=function(element){
      	let parent=this.parentNode;    //获取要插的元素的父元素
      	let frist=parent.firstElementChild;
      	if(frist){
      	parent.insertBefore(element,frist);
      }
      else{
      	parent.appendChild(element);
      }
      }




     //插入到父元素最后一个子元素
     //调用 子元素(创建的).appendTo(父元素（获取的）)
     HTMLElement.prototype.appendTo=function(element){
     	 element.appendChild(this);
     }



// 将一个元素插入到父元素里的第一个子元素前面
function prepenchild(element,position){
	let first = position.firstElementChild;
	let parent = position.parentNode;
	if (first) {
		parent.insertBefore(element,first)
	}else{
		parent.appendChild(element)
	}
}



// 将一个元素里的子元素全部清除
// 获取里面所有的子元素，然后清除
// empty
HTMLElement.prototype.empty = function(){
this.innerHTML='';
}