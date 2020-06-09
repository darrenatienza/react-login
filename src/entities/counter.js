export const initialState = {
    value: 0,
    textVal: 'states'
};
export const increment = counter => by  => {
    counter.setState({
        value: counter.state.value + by
    });
};

export const decrement = counter => by  => {
    counter.setState({
        value: counter.state.value - by
    });
};
export const setText = text => val => {
    text.setState({
        textVal: val
    });
}