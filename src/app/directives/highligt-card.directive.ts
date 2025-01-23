import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighligtCard]'
})
export class HighligtCardDirective {

  @Input()
  extrnalColor:string = 'black';

  @Input('appHighligtCard')
  defaultColor:string = 'pink';

  // add ele type of ElementRef in the constructor

  constructor(private ele:ElementRef) { 
     this.ele.nativeElement.style.backgroundColor = this.defaultColor; 
     console.log(ele)
  }

@HostListener('mouseover')
  over(){
    this.ele.nativeElement.style.backgroundColor = this.extrnalColor;
  }

  @HostListener('mouseout')
  out(){
  this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
 