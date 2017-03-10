import {
  React,
  Component
} from '../basics';

const withSystemState = (WrappedComponent, computeSystemState) => {
  class ComponentWithSystemState extends Component {
    constructor() {
      super();

      this.updateState = () => {
        this.setState((prevState) => {
          return computeSystemState(this.props.system, prevState, this.props);
        });
      };
    }

    componentDidMount() {
      this.updateState();

      this.props.system.addStateListener(this.updateState);
    }

    componentWillUnmount() {
      this.props.system.removeStateListener(this.updateState);
    }

    render() {
      if (!this.state) {
        return null;
      }

      const wrappedProps = { ...this.props, ...this.state };

      return <WrappedComponent {...wrappedProps} />;
    }
  }

  ComponentWithSystemState.propTypes = {
    system: React.PropTypes.object.isRequired
  };

  return ComponentWithSystemState;
};

export {
  withSystemState
};