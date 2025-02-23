class OldPrinter {
  constructor() {
    console.log('OldPrinter called');
  }
  printDocument(content) {
    console.log(`Printing document with old printer
      Content
      ______________
      
    ${content}`);
  }
}

class NewPrinterInterface {
  print(content) {
    throw new Error('There is  no printer Available in thjis bnew Printer');
  }
}

class PrinterAdapter extends NewPrinterInterface {
  constructor(oldPrinterInstance) {
    super();
    console.log(oldPrinterInstance);
    this.oldPrinter = oldPrinterInstance;
  }
  print(content) {
    this.oldPrinter.printDocument(content);
  }
}

const oldPrinter = new OldPrinter();
console.log(oldPrinter);
const adapter = new PrinterAdapter(oldPrinter);
adapter.print('This is the content');
