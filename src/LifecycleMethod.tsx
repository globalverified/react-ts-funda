import { Component, useState, useEffect } from "react";

export interface IProps {
    initialValue: number;
}
export interface IState {
    count: number;
    hideComponent: boolean;
}

export class Information extends Component {
    componentWillUnmount() {
        console.log('componentWillUnmount called byeee');
        //clean up phase
    }
    render() {
        return (
            <>information of unmounted component</>
        )
    }
}
export class LifecycleMethod extends Component<IProps, IState>{
    state: IState = {
        count: this.props.initialValue,
        hideComponent: false
    }
    componentDidMount() {
        console.log('componentDidMount called');
        this.setState({ count: this.state.count + 1 });
    }
    componentDidUpdate(prevProps: IProps, prevState: IState) {
        console.log('componentDidUpdate called && prevProps -', prevProps.initialValue + 'prevState -', prevState);
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate called');
        return true
    }
    onClickButton = () => {
        // this.state.count = this.state.count+1;
        this.setState({
            count: this.state.count + 1,
            hideComponent: true
        });
    };
    render() {
        console.log('LifecycleMethod - render called');
        return (
            <>
                count with class component :  {this.state.count}
                <button onClick={this.onClickButton}>Increment value</button>
                {!this.state.hideComponent && <Information />}
            </>
        )
    }
}
export function LifecycleMethodWithFunction(props: IProps) {
    console.log('-----------LifecycleMethodWithFunction---------------');
    const [count, setCount] = useState(props.initialValue);
    const setCountValue = () => {
        setCount(count + 1);
    }
    //only one time like api call like componentDidMount
    useEffect(() => {
        console.log('LifecycleMethodWithFunction - only one time useEffect like componentDidMount');
        setCount(count+1);
        // eslint-disable-next-line 
    }, []);

    // //only when count value is changed like componentDidUpdate
    useEffect(() => {
        console.log('LifecycleMethodWithFunction - will call when count value is changed like componentDidUpdate');
        //below like componentDidUnmount
        return ()=>{
            console.log('LifecycleMethodWithFunction - useEffect cleanup phase');
            //previous effect is cleanup before executing the next effect
        }
        //above like componentDidUnmount
    }, [count]);

    // everytime like componentShouldUpdate
    useEffect(() => {
        console.log('LifecycleMethodWithFunction- will call on every change');
    });
    return (
        <>
            Count with function component : {count}
            <button onClick={setCountValue}>Increment</button>
        </>
    );
}
