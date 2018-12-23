import App from './App';
import React from 'react';
import {shallow} from 'enzyme';
const wrapper = shallow(<App />);
describe('App cmp', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
  });
    it('should have the `th` = "Items"', () => {
        expect(wrapper.contains(<th>Items</th>)).toBe(true);
    });
    it('should have a `button` element', () => {
        expect(wrapper.containsMatchingElement(<button>Add item</button>)).toBe(true);
    });
    it('should have an `input` elm', () => {
        expect(wrapper.containsMatchingElement(<input/>)).toBe(true);
    });
    it('button should be disabled', () => {
        expect(wrapper.find('button').first().props().disabled).toBe(true);
    });

  describe('Population of input', () => {
      const item = 'Vancouver';

      beforeEach(() => {
          const input = wrapper.find('input').first();
          input.simulate('change', {
              target: { value: item }
          });
      });
      describe('the user populates the input', () => {
          const item = 'Vancouver';
          it('should update the state property `item`', () => {
              expect(wrapper.state().item).toEqual(item);
          });

          it('should enable `button`', () => {
              const button = wrapper.find('button').first();
              expect(
                  button.props().disabled
              ).toBe(false);
          });
      });


  describe('child: clearing of input', () => {
      beforeEach(() => {
          const input = wrapper.find('input').first();
          input.simulate('change', { target: {value: ''}});
      });
      it('button becomes disabled', () => {
          const btn = wrapper.find('button').first();
          expect(btn.props().disabled).toBe(true);
      });
  });

  describe('child: submission of the form', () => {
      beforeEach(() => {
          const form = wrapper.find('form').first();
          form.simulate('submit', { preventDefault: () => {}});
      });
      it('should add the item in state', () => {

          expect(wrapper.state().items).toContain(item);
      });
      it('should render the item in table', () => {
          expect(wrapper.containsMatchingElement(<td>{item}</td>)).toBe(true);
      });
      it('should clear input field', () => {
          const input = wrapper.find('input').first();
          expect(input.props.value()).toEqual('');
      });
      it('at last button is disabled', () => {
          const btn = wrapper.find('button').first();
          expect(btn.props().disabled).toBe(true);
      });
  });

});
});
