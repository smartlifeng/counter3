let ali = 0;



document.getElementById('decreaseBtn').onclick = function(){
  ali--
  document.getElementById('display').textContent=ali;
}
document.getElementById('resetBtn').onclick = function(){
  ali=0
  document.getElementById('display').textContent=ali;
}
document.getElementById('increaseBtn').onclick = function(){
  ali++
  document.getElementById('display').textContent=ali;
}
