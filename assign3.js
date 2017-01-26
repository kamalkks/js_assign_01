const val=process.argv
let first=Number(val[2])
let second=Number(val[3])
let total=first+second
console.log(total)
let final
if(total>10 && total<100)
{
    
    final="total is greater than 10 but less than 100"
}
else 
{
    if(total>100 && total<1000)
{
    final="total is greater than 100 but less than 1000"
}
else
{
final="other"
}
console.log(final)

