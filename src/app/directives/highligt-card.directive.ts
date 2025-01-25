import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighligtCard]'
})
export class HighligtCardDirective implements OnChanges{

  @Input()
  extrnalColor:string = 'black';

  @Input('appHighligtCard')
  defaultColor:string = 'pink';

  // add ele type of ElementRef in the constructor

  constructor(private ele:ElementRef) { 
     console.log(ele)
  }
  ngOnChanges() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor; 

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
 