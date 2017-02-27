import {
  React,
  Component,
  Text,
  Panel,
  MainPanel
} from '../basics';

import { StatusMeterBarPanel } from '../special';

import ActionView from './actionView';

const textStyle = {
  fontSize: 18,
  fontWeight: 'bold'
};

export default class CharacterView extends Component {
  updateState() {
    this.setState({
      character: this.props.system.getActiveCharacter()
    });
  }

  componentWillMount() {
    this.updateState();

    this.stateHandle = this.props.system.getStateHandle();
    this.stateHandle.subscribe(() => {
      this.updateState();
    });
  }

  componentWillUnmount() {
    this.stateHandle.dispose();
  }

  render() {
    return <MainPanel style={{ flex: 1 }}>
      <ActionView style={{ flex: 4 }} system={this.props.system} />
      <StatusMeterBarPanel
        character={this.state.character}
        textStyle={textStyle}
        useLabels={true}
      />
    </MainPanel>
  }
}
