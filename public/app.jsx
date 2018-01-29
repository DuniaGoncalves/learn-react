var GreeterMessage = React.createClass({
  render: function() {
    return (
      <div>
      <h1>Some h1</h1>
      <p>some paragraph</p>
    </div>
    );    
  }
});

var GreeterForm = React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is from a component!'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  onBtnClick: function (e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
       this.setState({ name: name });
    }

   
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <GreeterMessage/>

        <form onSubmit={this.onBtnClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>

        <GreeterForm/>

      </div>
    );
  }
});

var firstName = 'Dunia';
var message = 'Hey, What\'s up?'

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);

