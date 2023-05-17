import CounterHook from "./01-体验hooks/01-count_hook";
import MultiState from "./02-useState使用/01-多个状态的使用";
import ComplexHookState from "./02-useState使用/02-复杂状态的修改";
import EffectHook from "./03-useEffect的使用/01-类组件实现修改title";
import EffectHook2 from "./03-useEffect的使用/02-effectHook的使用";
import EffectHook3 from "./03-useEffect的使用/02-effectHook的使用";
import ContextHook from "./04-useContext的使用/01-useContext的使用";
import ReducerHook from "./05-useReducer的使用/home";
import CallbackHook from "./06-useCallback的使用/01-useCallback不能进行的性能优化";
import CallbackHook2 from "./06-useCallback的使用/02-useCallback性能优化";
import Memo1 from "./07-useMemo的使用/01-useMemo复杂计算的应用";
import Memo2 from "./07-useMemo的使用/02-useMemo传入子组件优化";
import Ref from "./08-useRef的使用/02-useRef引用其他数据";
import ImeperativeHandle from "./09_useImperativeHandle/01_回顾forwardRef的用法";
import ImeperativeHandle2 from "./09_useImperativeHandle/02_useImperativeHandle用法";
import Effect3 from "./10_useLayoutEffect/01_useEffect的count修改";
// import LayoutEffect from "./10_useLayoutEffect/02_useLayoutEffect的count修改";
import CustomLifeHookDemo01 from './11_自定义Hook/01_认识自定义Hook';
import CustomContextShareHook from './11_自定义Hook/02_自定义Hook练习-Context共享';
import CustomScrollPositionHook from './11_自定义Hook/03_自定义Hook练习-获取滚动位置';
// import CustomDataStoreHook from './11_自定义Hook/04_自定义Hook练习-localStorage存储';

import React,{createContext} from "react";
export const UserContext = createContext();
export const TokenContext = createContext();

export const ThemeContext = createContext();
function App() {
  return (
    <div className="App">
        {/* 1.hook初体验*/}
        {/*<CounterHook/>*/}


        {/*useState的使用*/}
        {/*<MultiState/>*/}
        {/*<ComplexHookState/>*/}


        {/* effectHook的使用*/}
        {/*<EffectHook/>*/}
        {/*<EffectHook2/>*/}
        {/*<EffectHook3/>*/}

        {/*   useContext的使用*/}
     {/* <UserContext.Provider value={{name: "why", age: 18}}>
        <ThemeContext.Provider value={{fontSize: "30px", color: "red"}}>
            <ContextHook/>
        </ThemeContext.Provider>
      </UserContext.Provider>*/}

      {/*useReducer的使用*/}
      {/*<ReducerHook/>*/}

    {/* useCallback的使用 */}
    {/*    <CallbackHook/>*/}
    {/*    <CallbackHook2/>*/}


    {/*useMemo的使用*/}
    {/*    <Memo1/>*/}
    {/*    <Memo2/>*/}

    {/*useRef的使用*/}
    {/*    <Ref/>*/}

        {/*ImeperativeHandle*/}
        {/*<ImeperativeHandle/>*/}
        {/*<ImeperativeHandle2/>*/}

    {/*    useLayoutEffect*/}
    {/*    <Effect3/>*/}
    {/*    <LayoutEffect></LayoutEffect>*/}

    {/*自定义hook*/}
    {/*    <CustomLifeHookDemo01/>*/}

          <UserContext.Provider value={{name: "why", age: 18}}>
        <TokenContext.Provider value="fdafdafafa">
          <CustomContextShareHook/>
        </TokenContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
