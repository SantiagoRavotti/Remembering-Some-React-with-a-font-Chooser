class FontChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false, hidden: true, size: 16, color: "black" };
  }

  handleClick() {
    this.setState({ hidden: !this.state.hidden });
  }
  handleCheck() {
    this.setState({ isChecked: !this.state.isChecked });
  }
  incrementCount() {
    this.setState({ size: this.state.size + 1 });
  }
  decrementCount() {
    this.setState({ size: this.state.size - 1 });
  }

  render() {
    var weight = this.state.isChecked ? "bold" : "normal";
    var change = this.state.hidden;
    var sizes = this.state.size;

    if (sizes >= 40)
      return (
        <div>
          <input
            type="checkbox"
            id="boldCheckbox"
            onChange={this.handleCheck.bind(this)}
            hidden={change}
          />
          <button
            id="decreaseButton"
            hidden={change}
            onClick={this.decrementCount.bind(this)}
          >
            -
          </button>
          <span id="fontSizeSpan" hidden={change}>
            {sizes}
          </span>
          <button
            id="increaseButton"
            onClick={this.incrementCount.bind(this)}
            hidden={change}
          >
            +
          </button>
          <span
            id="textSpan"
            style={{ fontWeight: weight, fontSize: 40, color: "red" }}
            onClick={this.handleClick.bind(this)}
          >
            {this.props.text}
          </span>
        </div>
      );
    if (sizes <= 4)
      return (
        <div>
          <input
            type="checkbox"
            id="boldCheckbox"
            onChange={this.handleCheck.bind(this)}
            hidden={change}
          />
          <button
            id="decreaseButton"
            hidden={change}
            onClick={this.decrementCount.bind(this)}
          >
            -
          </button>
          <span id="fontSizeSpan" hidden={change}>
            {sizes}
          </span>
          <button
            id="increaseButton"
            onClick={this.incrementCount.bind(this)}
            hidden={change}
          >
            +
          </button>
          <span
            id="textSpan"
            style={{ fontWeight: weight, fontSize: 4, color: "red" }}
            onClick={this.handleClick.bind(this)}
          >
            {this.props.text}
          </span>
        </div>
      );
    else
      return (
        <div>
          <input
            type="checkbox"
            id="boldCheckbox"
            onChange={this.handleCheck.bind(this)}
            hidden={change}
          />
          <button
            id="decreaseButton"
            hidden={change}
            onClick={this.decrementCount.bind(this)}
          >
            -
          </button>
          <span id="fontSizeSpan" hidden={change}>
            {sizes}
          </span>
          <button
            id="increaseButton"
            onClick={this.incrementCount.bind(this)}
            hidden={change}
          >
            +
          </button>
          <span
            id="textSpan"
            style={{ fontWeight: weight, fontSize: sizes, color: "black" }}
            onClick={this.handleClick.bind(this)}
          >
            {this.props.text}
          </span>
        </div>
      );
  }
}
