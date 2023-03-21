import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  private _title: string = ''
  // Input title dari main(parent) ke child
  @Input()
  public set title(title: string) {
    this._title = title
  }

  public get title() {
    return this._title
  }

  public clickCount: number = 0;

  // Output clickCount dari child ke main(parent)
  @Output()
  onChanged = new EventEmitter<number>();

  countChange(count: number) {
    count++
    this.clickCount = count
    this.onChanged.emit(this.clickCount)
  }


  // Input dan output name two way data binding
  @Input()
  public childName: string = '';

  @Output()
  childNameChange = new EventEmitter<string>();
  nameChange(name: string) {
    this.childNameChange.emit(name)
  }

  constructor() { }

  ngOnInit(): void {

  }

}
