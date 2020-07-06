import {Pipe, PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
    name: 'mention'
})
export class MentionPipe implements PipeTransform{
    constructor(private sanitizer: DomSanitizer) {
    }
    transform(value: string): SafeHtml  {
        const content = value.replace(/(?<!\w)@\w+/ig, (match) => `<span class="mention">${match}</span>`);
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
