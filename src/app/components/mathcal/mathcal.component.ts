import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mathcal',
  templateUrl: './mathcal.component.html',
  styleUrls: ['./mathcal.component.css']
})
export class MathcalComponent implements OnInit {

  nthTerm= null;
output= null;
output1= null;
output2= null;
palindromeN=1;
fib= null;
i= 0;
p = 0;


  constructor() { }

  ngOnInit() {
  }

  onKeyUP(){
    console.log(this.nthTerm);
    // this.sumOfNthTerm(this.nthTerm);
    this.output = this.sumOfNthTerm(Number(this.nthTerm));
    console.log(this.output);
    

  }
  sumOfNthTerm(n: number) {
    if (n < 0) {
      return 'please enter positive value';
    }
    else {
      return (n * (n + 1)) / 2;
    }
  }

  // sumOfNthTerm(n){
  //   this.output = (n * (n + 1))/2;
  //   // return (this.output);
    
    

  // }
  onEnter(){
    console.log(this.palindromeN);
    // this.output1 = this.palindromeFn(Number(this.palindromeN));
    // console.log(this.output1);
  }

palindromeFn(n){
  
//   while(n>0)
// 		{
// 			m = n%10;
// 			n = parseInt(number/10);
// 			final = final*10+m;
// 		}
// 		if (final == temp)
// 		{
// 			return ("The inputed number is Palindrome");
// 		}
// 		else
// 		{
// 			return ("The inputted number is not palindrome");
// 		}
  
// if(n < 0){
//   return "Please enter the positive numbers";
// }else if (n > 0){
//   return "This is Palindrome";
// }
// else {
//   return "This is not a Palindrome";
// }
}

onKeyDown(){
  console.log(this.fib);
this.output2= this.fibSeries(Number(this.fib));
console.log(this.output2);
}
fibSeries(i){
  this.p = Math.sqrt(5);
  return (Math.pow((1 + Number(this.p)), i) - Math.pow((1 - Number(this.p)), i)/((2 * i) * (Number(this.p))));

//   [angularMath.powerOfNumber(1 + sqrt(5), i);(1 + sqrt(5)n – (1 – sqrt(5)i)] / [(2*i) * sqrt(5)]

// for(i=0; i>1; i++){
//   if(i = 0){
//     return i;
 
    
//   }
//   else if(i = 1){
//     return i;
//   }
//   else if (i > 1){
//     return (i = (i - 1) + (i - 2));

//   }
//   else{
//     return ("error");
//   }
  
}









  
    
  

}



