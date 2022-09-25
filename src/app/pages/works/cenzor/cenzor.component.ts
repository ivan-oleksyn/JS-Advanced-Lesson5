import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  public textContent = ['java', 'tottenham'];
  public inputClasses = 'input';
  public inputValue: string = '';
  public placeholders = 'word here...';
  public textareaClasses = 'textarea';
  public cenzorBTNClasses = 'cenzor-btn button';
  public textareaValue: string = '';
  public cenzorClasses = 'cenzor-btn button';
  public textareaPlaceholder = 'text here...';

  constructor() { }

  ngOnInit() {
  }
  addBadWords(): void {
    console.log(this.textContent);
    console.log(this.inputValue);
    if (!this.inputValue) {
      this.inputClasses += ' ' + 'error-border';
      this.placeholders = 'Please, write a word!';
    }
    else {
      this.inputClasses = 'input';
      this.inputValue = this.inputValue.toLowerCase();
      this.textContent.push(this.inputValue);
    }
    this.inputValue = '';
  }
  resetBadWordsList(): void{
    this.inputClasses = 'input';
    this.textContent = [];
    this.inputClasses = 'input';
    this.placeholders = 'word here...';
    this.textareaClasses = 'textarea' ;
    this.textareaPlaceholder = 'text here...';
    this.textareaValue = '';
  }
  checkBadWords(): void{
    if (!this.textareaValue) {
      this.textareaClasses += ' ' + 'error-border';
      this.textareaPlaceholder = 'Please, write a text!';
    }
    else {
      const words: string[] = this.textareaValue.split(' ');
      const result = words.map((word) => {
        return this.textContent.indexOf(word) >= 0 ? this.modifiedWord(word): word;
      });
      this.textareaValue = result.join(' ');
    }
  }
  getCenzorWords(): string{
    return this.textContent.join(' ');
  }
  modifiedWord(word:string): string {
    let changeWord:string[] = word.split('');
    let changeResult: string = changeWord.fill('*').join('');
    return changeResult;
  }
}
