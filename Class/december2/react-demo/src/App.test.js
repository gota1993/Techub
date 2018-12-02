import React from 'react';
import ReactDOM from 'react-dom';
import App, { inc, dec } from './App';

import { mount, render, shallow, configure } from 'enzyme'

global.mount = mount
global.render = render
global.shallow = shallow

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("custom function test", () => {
  it('decrement, state value decreases -1', () => {
    const s = { value: 0 }
    const sNew = dec(s)
    expect(sNew.value).toEqual(-1)
  })

  it('increment, state value increments +1', () => {
    const s = { value: 0 }
    const sNew = inc(s)
    expect(sNew.value).toEqual(+1)
  })
})

describe('App component test, enzyme'), () => {
  it('renders value', () => {
    const Container = shallow(<App/>)
    expect(Container.find(Value).toHave().length(1))
  })
}