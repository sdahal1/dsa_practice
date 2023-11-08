const LinkedList = require("./lib/linkedList");

class Editor {
  /**
   * Constructs a new Editor object with the given text.
   * Defaults to empty text. Cursor is positioned at the end of the text.
   * @param {LinkedList} text - A linked List containing the characters that are in the editor,
   * empty by default
   */
  constructor(text = new LinkedList()) {
    this.text = text;
    this.cursor = this.text.find(
      (node, index) => index === this.text.length - 1
    );
  }

  /**
   * Insert a character at the cursor position of the editor.
   * @param {*} char a value to be inserted into the editor
   * @returns {Editor} a reference to this editor
   */
  insert(char) {
    if(!this.text.head){ //empty list
      this.text.insertAtHead(char)
      this.cursor = this.text.find(
        (node, index) => index === this.text.length - 1
      );
      return this;
    }

    
    if(this.cursor === null){ //cursor is at the front before the first character
      this.text.insertAtHead(char);
      this.cursor = this.text.head;
      return this;
    }
    if(this.cursor === this.text.head){ //cursor is the head, so we will insert char after
      const headNode = this.text.head;
      this.text.insert(char,(node,idx)=> node === headNode);
      this.cursor = this.text.head.next;
      return this;
    }
    //if there are characters
    this.text.insert(char);
    this.cursor = this.text.find(
      (node, index) => index === this.text.length - 1
    );
    return this;
  }

  /**
   * Remove the character at the cursor position.
   * Moves the cursor to the previous position.
   * If editor is empty does nothing.
   * @returns {Editor} a reference to this editor
   */
  delete() {
    //this.cursor is the matching node to remove
    if(!this.text.head || !this.cursor) return this;

    const [matchedNode, previousNode] = this.text.findWithPrevious((node,idx)=>node === this.cursor);

    this.text.remove((node,idx)=>node === this.cursor);
    this.cursor = previousNode;
    return this;
  }

  /**
   * Moves the cursor one position to the left.
   * If the cursor is at the start of the editor nothing happens.
   * @returns {Editor} a reference to this editor
   */
  arrowLeft() {
    if(!this.text.head) return this;
    if(this.text.head === this.cursor){
      this.cursor = null; 
      return this;
    }
    const [matchedNode, previousNode] = this.text.findWithPrevious((node,idx)=>node === this.cursor);
    this.cursor = previousNode;
    return this;
  }

  /**
   * Moves the cursor one position to the right.
   * If the cursor is at the end of the editor nothing happens.
   * @returns {Editor} a reference t this editor
   */
  arrowRight() {
    if(!this.text.head) return this;
    if(this.cursor === null){
      this.cursor = this.text.head;
      return this;
    }
    const [matchedNode, previousNode] = this.text.findWithPrevious((node,idx)=>node === this.cursor);
    if(matchedNode.next){
      this.cursor = matchedNode.next;
    }
    return this;
  }
}


const editor = new Editor();
editor.insert("a").insert("b")
console.log(editor)
      // expect(editor.text.length).toEqual(1);
      // expect(editor.cursor.value).toEqual("a");
module.exports = Editor;
