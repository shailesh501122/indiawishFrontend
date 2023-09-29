import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogDomService {
  constructor() {}
  getDefaultEditorOptions = (): {
    fontSize: { options: number[] };
    toolbar: string[];
  } => {
    const toolbar: string[] = [];

    toolbar.push('heading');

    toolbar.push('|');

    toolbar.push('fontSize');

    toolbar.push('|');

    toolbar.push('bold');

    toolbar.push('italic');

    toolbar.push('link');

    toolbar.push('NumberedList');

    toolbar.push('BulletedList');

    toolbar.push('|');

    toolbar.push('Outdent');

    toolbar.push('Indent');

    toolbar.push('|');

    toolbar.push('imageUpload');

    toolbar.push('blockQuote');

    toolbar.push('insertTable');

    toolbar.push('mediaEmbed');

    toolbar.push('|');

    toolbar.push('undo');

    toolbar.push('redo');

    return {
      fontSize: {
        options: [10, 12, 14, 16, 18, 20],
      },

      toolbar: toolbar,
    };
  };

  setNextFucus = (element: HTMLElement): void => {
    if (!element) return;

    const elements = document.querySelectorAll('*');

    let idx = -1;

    for (let x = 0; x < elements.length; x++) {
      if (elements[x] === element) {
        idx = x;

        break;
      }
    }

    if (idx !== -1) {
      for (let x = idx + 1; x < elements.length; x++) {
        const nextElement = elements[x] as HTMLElement;

        if (
          nextElement &&
          ((nextElement.tagName === 'SELECT' &&
            (nextElement as HTMLSelectElement).disabled === false) ||
            (nextElement.tagName === 'INPUT' &&
              (nextElement as HTMLInputElement).disabled === false) ||
            (nextElement.tagName === 'BUTTON' &&
              (nextElement as HTMLButtonElement).disabled === false) ||
            (nextElement.tagName === 'TEXTAREA' &&
              (nextElement as HTMLTextAreaElement).disabled === false))
        ) {
          element.blur();

          nextElement.focus();

          break;
        }
      }
    }
  };
}
