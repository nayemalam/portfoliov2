class App extends React.Component {
    constructor() {
  super();
  this.state = {
        open: false
    };
}
handleClick() {
this.setState({
        open: !this.state.open
    });
}
render() {
    return (
      <HamburgerMenu
      isOpen={this.state.open}
      menuClicked={this.handleClick.bind(this)}
      width={100}
            height={80}
            strokeWidth={3}
            rotate={0}
      color='black'
            borderRadius={0}
      animationDuration='0.5'
    />
    );
}
};

const HamburgerMenu = (props) => {
let isHorizontal = props.orientation === 'horizontal';
let width  = `${props.width}px`;
let height = `${props.height}px`;
let halfHeight = `${props.height / 2}px`;
let { isOpen } = props;
let style = {
    container: {
        width,
        height,
        position: 'relative',
        transform: `rotate(${props.rotation || 0}deg)`  
    },
    lineBase: {
        display: 'block',
        height: `${props.strokeWidth}px`,
        width: '100%',
        background: props.color,
        transition: `${props.animationDuration}s ease`,
        borderRadius: `${props.borderRadius}px`,
        position: 'absolute'
    },
    firstLine: {
        transform: `translate3d(0,${isOpen ? halfHeight : 0},0) rotate(${isOpen ? '45deg' : '0'})`,
        transformOrigin: 'center',
        marginTop: `-${props.strokeWidth / 2}`,
    },
    secondLine: {
  transition: `${props.animationDuration / 2}s ease-out`,
        opacity: props.isOpen ? '0' : '100',
        top: halfHeight,
        marginTop: `-${props.strokeWidth / 2}`
    },
    thirdLine: {
        transform: `translate3d(0,${isOpen ? halfHeight : height},0) rotate(${isOpen ? '-45deg' : '0'})`,
        transformOrigin: 'center',
        marginTop: `-${props.strokeWidth / 2}`
    }
};
return (
    <div style={style.container} onClick={props.menuClicked}>
      <span style={Object.assign({}, style.lineBase, style.firstLine)}></span>
      <span style={Object.assign({}, style.lineBase, style.secondLine)}></span>
      <span style={Object.assign({}, style.lineBase, style.thirdLine)}></span>
    </div>
);
};

React.render(<App />, document.getElementById('root'));