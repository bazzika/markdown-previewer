
const textCommon = '# Heading\n=======\n\nSub-heading\n-----------\n' +
  ' \n### Another deeper heading\n \nParagraphs are separated\n' +
  'by a blank line.\n\nLeave 2 spaces at the end of a line to do a  \n' +
  'line break\n\nText attributes *italic*, **bold**, \n' +
  '`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n' +
  '  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n' +
  '  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n' +
  ' *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';
var Markdown = React.createClass ({
  getInitialState: function() {
    return {
      textCommon:textCommon
    }
  },
  onChange: function(event){
    var textarea = event.target;
    this.setState({
      textCommon:textarea.value
    });
  },

  render: function() {
    return (
      < div className = 'row'>
          <div className = 'left col-md-6'>
            <textarea onChange = {this.onChange} type ='text' className='edit'>
              {textCommon}
              </textarea>
          </div>
        < div className = 'right col-md-6' dangerouslySetInnerHTML = {{__html:marked(this.state.textCommon)}}>

          </div>
      </div>
    )
  }
});
ReactDOM.render(
<Markdown />,
document.querySelector('.container')
);