function cal(val)
{
    document.getElementById("result").value += val;
 }

function result()
{
    var temp=document.getElementById("result").value;
    document.getElementById("result").value=eval(temp);
}
function reset()
{
    document.getElementById("result").value= ''; 
}