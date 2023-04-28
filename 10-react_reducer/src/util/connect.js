import React, {PureComponent} from 'react';
import {StoreContext} from "./context";

export function connect(mapStateToProps,mapDispatchToProps){
    return function enhanceHOC(Wrapponent) {
        class EnHOComponent extends PureComponent{
            constructor(props,context) {
                super(props,context);
                this.state={
                    storeState:mapDispatchToProps(context.getState())
                }
            }
            componentDidMount() {
                this.unsubscribe=this.context.subscribe(()=>{
                    this.setState({
                        storeState:mapDispatchToProps(this.context.getState())
                    })
                })
            }
            componentWillUnmount() {
                this.unsubscribe()
            }
            render() {
                return (<Wrapponent {...this.props}
                    {...mapDispatchToProps(this.context.dispatch)}
                    {...mapStateToProps(this.context.getState())}
                ></Wrapponent>
                )
            }
        }
        EnHOComponent.contextType=StoreContext
        return EnHOComponent
    }
}
